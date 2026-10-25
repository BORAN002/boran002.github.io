---
title: "Agent"
date: "2026-10-20"
updated: "2026-10-25"
showDate: false
description: "Context Engineering：KV Cache / Prompt Cache、Prompt Engineering、Context Compression 和 Skill，各主题分别记录 Basic 与 Insight。"
draft: false
---

## Context Engineering

**Context Engineering 是管理 model 每轮调用实际接收的信息。**

### • KV Cache / Prompt Cache

#### Basic

model 不直接对 JSON 对象做 Attention。API 会把 messages、Tool definitions 等组织为 model 使用的 token 序列，再执行 inference。

理解 **KV Cache**，先看 Attention 中的三个量。它们都是 model 在各层计算得到的向量：

- **Query**：当前 token 用来与已有信息匹配的表示。
- **Key**：每个历史 token 用来参与匹配的表示。
- **Value**：每个历史 token 提供的信息表示。Query 与 Keys 算出权重，再按权重组合 Values。

在标准 Causal Attention 中，历史 token 看不到未来 token，因此新增内容不会改变先前已经算好的 Key/Value。把这些数值留下来，下次直接使用，就是 KV Cache。

一次生成通常分为两个阶段：

1. **Prefill**：处理输入 tokens，计算它们的表示并建立 KV Cache。
2. **Decode**：逐个生成输出 token。新 token 被送回 model 后，计算它的 Query/Key/Value，复用历史 K/V，并把新的 K/V 加入 Cache。

**KV Cache 省掉历史表示的重复计算；新的 Query 仍然需要访问历史 K/V。** 因此即使有 Cache，较长的历史仍然带来 memory 和 Attention 开销。[Hugging Face — How caching works][kv]

**Prompt Cache** 进一步把相同 Prefix 的计算跨请求复用。以下 10,000 tokens 是假设值：

```text
Request A:
[固定 instructions][10,000-token API manual][怎样创建订单？]

Request B:
[固定 instructions][10,000-token API manual][怎样取消订单？]
|------------ reusable prefix ------------|
```

Request A 处理过 manual 后，如果服务端仍保留它的 Cache，且 model、Prefix 和缓存边界等条件满足，Request B 就可以复用相同部分的 Prefill。第二个问题及其回答仍要计算。这种机制也称 **Prefix Caching**。[vLLM — Automatic Prefix Caching][prefix-cache]

如果把问题放到最前面，两个请求从问题处就不同，后面的 manual 也不再处于同一个 Prefix。相同文本出现在不同前文之后，不能直接当作相同 KV states 使用。

三者要分清：

| Mechanism | 保留或复用什么 | 对上面例子的作用 |
| --- | --- | --- |
| KV Cache | 已计算的 Key/Value | 生成回答时复用先前 tokens 的表示 |
| Prompt Cache | 相同 Prefix 的计算状态 | 第二次提问复用 manual 的 Prefill |
| Context Compression | 用更短内容替换或移除部分输入 | 把 manual 换成相关章节或 Summary |

**Cache Hit 不会把 manual 从 Context Window 中删掉，也不会直接返回上一次的答案。**

#### Insight

**先检查请求哪里变了，再判断为什么没有 Cache Hit。** 固定 instructions、Tool Schema 的顺序和 serialization；timestamp、当前任务状态等可变内容放到后面的相应 message 中。Manus 的公开实践强调 stable prefix 与 append-only history，因为改写较早内容会使后续 Prefix 无法照原样复用。[Manus — Context Engineering][manus]

当前 OpenAI 已提供 **Prompt Cache Diagnostics**，可以把本次请求与之前的 response 比较，定位 model、Tools、settings 或 input 的变化。例如仅修改 function name，也值得检查实际请求是否因此改变。它提供诊断信息，不会自动恢复旧 conversation 或修复 Cache。[OpenAI — Prompt cache diagnostics][cache-diagnostics]

**模型层也在减少保存和搬运 KV 的开销。** DeepSeek-V4.1-Flash Technical Report（2026-09）针对 input-heavy 的 Agent workload 提出 CSA2：部分层复用前面层的 main KV，避免每层都保存独立的一套；main KV 使用 FP4，以更低精度存储数值。这说明长任务的成本不仅是“算了多少 tokens”，还包括“KV 占多少空间、需要搬运多少数据”。这是报告中的架构设计，不能等同于应用层的 Summary。[DeepSeek-V4.1-Flash Technical Report，§2–3][deepseek-v4]

应用侧应同时记录 **input tokens、cached tokens、TTFT 和 task success**。TTFT 是请求发出到首个输出 token 的时间。如果为了维持 Cache Hit 一直保留无用历史，总成本未必更低；做过 Compaction 后，即使需要重建部分 Cache，后续更短的输入也可能抵消这次开销。

### • Prompt Engineering

#### Basic

**Prompt Engineering 是把“要做什么、必须遵守什么、怎样算完成”写成明确的 instructions。** 在 Agent Loop 中，它决定 model 何时调用 Tool、如何使用结果、什么时候可以结束。

例如“修一下支付 bug”没有告诉 Agent 什么行为是错的，也没有说明怎样验证。可以改成：

```text
Task:
同一 payment event 被重复投递时，只允许入账一次。

Constraints:
保持 public API 的 request / response 不变。
不得以跳过现有 tests 的方式解决问题。

Tool use:
先读取 callback handler 和相关 tests。
不能从函数名推断实现；缺少代码就继续读取。

Verification:
验证 single delivery、sequential duplicate、concurrent duplicate。
报告实际执行的 commands、结果和未验证项。
```

这里的每句话对应一个可观察行为：读取什么、不能改变什么、必须检查什么。具体采用哪种修复方案，仍由 Agent 根据代码决定。

**Zero-shot** 只给要求，不给示范；**Few-shot** 额外提供少量 input → output，让 model 看清规则的边界。例如 issue classification：

```text
“点击保存返回 500”     → bug
“希望支持导出 CSV”     → feature_request
“现在支持导出 CSV 吗”  → question
```

最后两条都提到 CSV，但一个请求新能力，一个询问现有能力。这样的 example 解释了分类规则，比重复写“请准确分类”具体。

如果结果交给程序消费，可以使用 **Structured Outputs**：通过 API 的 JSON Schema 约束字段和类型。例如只允许输出一个 `label`，其值必须属于 `bug / feature_request / question`。这解决结构可解析的问题；选错 label 仍然是内容错误，需要单独验证。[OpenAI — Structured Outputs][structured]

#### Insight

**Reasoning Model 不需要默认加上“think step by step”。** OpenAI 当前教程建议从直接、清晰的 Zero-shot instructions 开始，再按任务需要加入 examples。支付修复示例中的三类 test case，比要求“认真思考”更能定义任务是否完成；它们规定外部验证，不要求 model 展示完整内部 reasoning。[OpenAI — Reasoning best practices][reasoning]

**Few-shot 是否有用，要用目标 model 和目标任务验证。** Gemini 的教程建议用 examples 表达模式；DeepSeek-R1 的 Technical Report（2025）则报告了该 model 在相关评测中 Few-shot 表现下降的现象。这些结果不能互相替代。实用做法是保留一组未用于编写 Prompt 的测试输入，对比 Zero-shot 与 Few-shot 的分类错误，特别看“功能请求 / 功能询问”这样的边界案例。[Gemini — Prompting strategies][gemini-prompt] [DeepSeek-R1 Technical Report][r1]

**把 Prompt 当作需要回归验证的配置。** 记录真实失败，再针对失败修改一条 instruction 或一个 example；比较修改前后的 task success、Tool 使用和成本。例如输出格式错，就调整 Schema；缺少证据，就调整 Retrieval；已经查到正确金额但算错 total，就交给程序计算。不能把所有问题都归结为 Prompt 不够长。OpenAI 的 Evals 教程也强调真实任务样本和持续回归。[OpenAI — Evaluation best practices][evals]

### • Context Compression

#### Basic

每次 Tool call 都向 messages 添加内容，历史会越来越长。**Context Compression 是减少下一轮需要携带的内容，同时保留继续任务所需的信息。**

最简单的做法是 **Truncation**：直接删除最早的 messages。问题是最早的 user message 可能包含目标和 constraints，删掉后 Agent 可能继续写代码，却忘了用户要求兼容旧接口。

更常见的组合是：

- **Tool Result Clearing**：移出不再需要的旧 Tool Results。例如 test 的完整输出已经保存到文件，后续只保留失败项和日志路径。
- **Compaction**：把较长的历史整理成较短的状态，代替旧历史参与下一轮调用。
- **External Memory + Retrieval**：完整原文留在文件或数据库中，Context 保留必要内容和位置，需要时重新读取。

例如同一修复任务读了十个文件、运行了多次 tests，Compaction 后可以保留下面的 Checkpoint：

```yaml
goal: 同一 payment event 只能入账一次
constraint: 保持 public API 不变
decision: 以 event_id 建立 database unique constraint
failed_attempt: 先查再写无法阻止 concurrent requests
verified: sequential duplicate test 已通过
pending: concurrent duplicate test 尚未运行
evidence:
  - tests/test_payment_callback.py
  - work/payment-test.log
next: 运行 concurrent test，检查 transaction rollback
```

这是说明用状态。与“改了代码，运行了测试”相比，它明确告诉下一轮什么已验证、什么还没做、失败方案为什么失败，以及到哪里找原始证据。

应用自己管理历史时，可以组织成：

```text
[固定 instructions]
[Checkpoint]
[仍在使用的 recent messages，保留完整 Tool call / result 配对]
[新的 user message 或 Tool Result]
```

Summary 会丢信息，尤其容易丢掉精确 ID、用户纠正和失败原因。因此需要保护这些字段，并保留原文的读取入口。Provider 的 native Compaction 可能返回专用 items，不能直接套用这份文本布局。

#### Insight

**Long Context 能装下记录，不等于 Agent 能一直正确使用记录。** Gemini 2.5 Technical Report（2025）的 Pokémon Agent 案例中，作者观察到 Context 显著超过 100k tokens 后更容易重复历史动作。报告将其限定为 anecdotal observation，不能把 100k 当作其他 model 的通用阈值。它提示我们需要测试长任务中的重复行为和进度恢复，而不只测试是否能找到某个事实。[Gemini 2.5 Technical Report，§4.1][gemini-report]

Anthropic 的 long-running Agent harness 使用 progress file、feature list 和 Git history 帮助新 session 恢复。对上面的代码修复任务，可以把已验证项与 pending items 写入进度文件，完整 diff 和 logs 保存在原位置；恢复时检查文件状态，再继续 pending test。**Compaction 的验收应该包括：是否漏掉 constraints、是否重复失败方案、是否把未验证的改动误认成完成。**[Anthropic — Effective harnesses][harness]

**Native Compaction 的结果必须按 API 协议续接。** 当前 OpenAI 的 standalone `/responses/compact` 返回一个 compacted window，可能同时包含 encrypted compaction item 和保留下来的其他 items。下一次请求应保留完整 `compacted.output`，不能只摘取其中的 compaction item：

```python
# 流程示意：selected_model 必须支持对应接口
compacted = client.responses.compact(
    model=selected_model,
    input=history,
)

response = client.responses.create(
    model=selected_model,
    input=[*compacted.output, new_user_message],
)
```

其中 opaque item 不是给应用手工编辑的普通 Summary。若使用 server-side Compaction 或 `previous_response_id`，应遵循各自的续接规则。Claude 也提供 on-demand 与 threshold Compaction，但返回内容和历史处理规则不同，不能混用。[OpenAI — Compaction][openai-compact] [Claude — Compaction][claude-compact]

### • Skill

#### Basic

**Skill 是一份可复用的任务操作说明，以及执行时要用的文件。** 它回答“遇到这一类任务应该怎样做”。Tool 则提供具体操作，例如读取 PDF、运行 Python、写文件。

以 invoice field extraction 为例，Skill 可以组织为：

```text
invoice-extraction/
├── SKILL.md
├── references/field-rules.md
├── scripts/validate_invoice.py
└── assets/output-schema.json
```

`SKILL.md` 的最小写法：

```markdown
---
name: invoice-extraction
description: 提取 invoice PDF 中的 invoice number、currency 和 total，输出 JSON。
---

1. 读取 references/field-rules.md，确认字段含义。
2. 读取 PDF；没有可用文本时再执行 OCR。
3. 按 assets/output-schema.json 生成 output.json。
4. Schema 将缺失字段定义为 nullable；找不到时写 null，不自行推算。
5. 用 scripts/validate_invoice.py 检查 output.json。
6. 返回结果及无法确认的字段。
```

`name` 和 `description` 让 Agent 判断是否适用；正文写执行步骤；`references` 放详细规则；`scripts` 放可以重复执行的程序；`assets` 放 Schema、模板等资源。目录规范要求 `SKILL.md`，其余目录按需要添加。[Agent Skills specification][skills-spec]

用户要求处理 invoice 时，Agent 读取这份说明，再通过已有 Tools 读取 PDF、运行 script。**Skill 本身不会自动执行，也不会改变 model weights；Agent host 还必须提供读取文件和执行程序的能力。**

#### Insight

**Progressive Disclosure 让 Skill 按三层逐步加载。** 开始只提供 metadata；匹配任务后读取 `SKILL.md`；执行到具体步骤时再读取 references 或使用 scripts。比如 invoice Skill 不需要在处理每张票据前加载所有国家的 tax rules，遇到相关字段时再读对应文件。script 可以直接运行并返回检查结果，不必先把全部源码放进 Context。[Agent Skills specification][skills-spec]

这一模式已经进入 Provider 的原生实现。当前 OpenAI Skills 文档支持 versioned bundles；在其 Responses API shell tools 中，model 先看到 Skill 的 name、description 和 path，再按 path 读取完整 instructions。部署时固定经过验证的 version，可以避免同一个 Agent 因 Skill 内容更新而悄悄改变行为。[OpenAI — Skills][openai-skills]

**Skill 要分别验证 Routing 和 Execution。** Routing 是用户的任务能否选中正确 Skill；Execution 是选中后能否按步骤得到正确结果。例如：

```text
“提取 invoice number 和 total”
→ 应选择 invoice-extraction

“总结这篇研究论文 PDF”
→ 不应只因为文件也是 PDF 就选择 invoice-extraction

选中之后：
读取 field rules → 生成 output.json → 运行 validation
```

如果第一类失败，修改 description 的适用条件；如果第二类执行失败，检查正文、resources 和 scripts。能确定性检查的字段类型、required fields 和金额格式交给 script；需要识别页面内容的部分交给 model。Anthropic 的 Skill authoring 教程建议从真实失败建立 Evals，再补 instructions，避免只用“Skill 已加载”判断有效。[Anthropic — Skill authoring best practices][skill-practices]

[kv]: https://huggingface.co/docs/transformers/main/cache_explanation
[prefix-cache]: https://docs.vllm.ai/en/latest/features/automatic_prefix_caching/
[structured]: https://developers.openai.com/api/docs/guides/structured-outputs
[skills-spec]: https://agentskills.io/specification
[manus]: https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus
[cache-diagnostics]: https://developers.openai.com/api/docs/guides/prompt-caching/diagnostics
[deepseek-v4]: https://arxiv.org/html/2609.19969v1
[reasoning]: https://developers.openai.com/api/docs/guides/reasoning-best-practices
[gemini-prompt]: https://ai.google.dev/gemini-api/docs/prompting-strategies
[r1]: https://arxiv.org/html/2501.12948v1
[evals]: https://developers.openai.com/api/docs/guides/evaluation-best-practices
[gemini-report]: https://arxiv.org/html/2507.06261v3#S4.SS1
[harness]: https://www.anthropic.com/research/effective-harnesses-for-long-running-agents
[openai-compact]: https://developers.openai.com/api/docs/guides/compaction
[claude-compact]: https://platform.claude.com/docs/en/build-with-claude/compaction
[openai-skills]: https://developers.openai.com/api/docs/guides/tools-skills
[skill-practices]: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices
