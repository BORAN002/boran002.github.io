---
title: "Agent Loop"
date: "2026-10-20"
updated: "2026-10-25"
description: "Context Engineering 的基础、Industry Insights 与 Methods：KV Cache、Prompt Cache、Prompt Engineering、Context Compression 和 Skill，结合 Model Technical Reports、官方教程与具体 Examples。"
draft: false
---

## 1.Context Engineering

### 1.1 What Is Context Engineering?

#### Basics

**Context Engineering 是设计每次 LLM call 实际接收的信息：放入什么、什么时候读取、以什么结构组织，以及哪些内容应保留或移出。** Prompt Engineering 主要处理 instructions 怎么写；Context Engineering 还管理 Tool Schema、Tool Result、retrieved documents、conversation history 和当前 task state，并在整个 Agent Loop 中反复更新这些内容。[Anthropic — Context Engineering][context]

可以把 Context 看成 Agent 当前使用的 working set。Repository、数据库和历史记录可以很大，但 Model 每次只基于本次可见的信息选择下一步。Model weights 中学到的通用知识，不能代替当前项目的代码、实时查询结果和用户指定的 constraints。

| Context component | 提供什么 | Coding Agent example |
| --- | --- | --- |
| Instructions | 目标、行为要求、完成条件 | 保持 public API；必须验证 regression |
| Tool Schema | 可用操作及输入要求 | read_file、search_code、run_tests |
| Retrieved Evidence | 当前判断所需的原始依据 | 相关函数、调用点、失败测试 |
| History | 已发生的 action 与 observation | 上一轮改动及测试返回 |
| Working State | 已完成、未完成与关键决定 | 已定位 race condition；尚未跑 concurrent test |

#### Industry Insight

**Context 的组织单位逐渐从“把资料放进 Prompt”转向“为下一步决策准备信息”。** Anthropic 描述的 Just-in-time Retrieval 保留 file path、query、URL 等轻量入口，Agent 需要时再读取具体内容；也可以先提供基本项目说明，再自主搜索。这降低常驻 Context，但增加 Retrieval round trips，因此需要按任务选择预加载与动态读取的比例。[Anthropic — Just-in-time Retrieval][context]

另一个关键点是 **Tool design 直接决定 Context quality**。如果需求是查一个订单，Tool 却返回全部订单，后续再精简已经付出了读取成本。Anthropic 的 Tool 教程建议通过 filtering、pagination、range selection 和有信息量的 error message 控制返回内容。[Anthropic — Writing effective tools][tools]

#### Method & Example

以“修复重复支付回调导致重复入账”为例，以下是说明用的工作流程：

1. 初始 Context 提供目标、API constraints、项目入口和可用 Tools。
2. Agent 通过 search 定位 callback handler，再读取 handler、database schema 和相关 tests。
3. Tool Result 表明同一 event ID 可以写入两次，才把相关 transaction 和 unique constraint 信息加入 Context。
4. 修改后注入真实 test result；失败时保留 error 和已经排除的方案。
5. Working State 更新为“顺序重复测试通过，concurrent test 待完成”，下一轮继续验证。

如果把几百个无关文件全部放入请求，Model 需要自己识别哪些内容重要；如果只给“修复 bug”，它又缺少作出正确决定的依据。这个例子的 Context Engineering 工作，是让每一步获得足以判断的信息，并保留必要的回查入口。

### 1.2 KV Cache & Prompt Cache

#### Basics：Prefill、Decode 与 KV Cache

标准 Causal Transformer 的一次 inference 可以分为两个阶段：

- **Prefill**：处理输入 tokens，计算各层的表示并建立 KV Cache。
- **Decode**：逐步生成输出。新增 token 被送回 Model 后，计算它的表示，并将新的 Key/Value 加入 KV Cache。

Attention 使用当前 Query 与已有 Keys 计算权重，再聚合对应 Values。历史 token 不会看到后来的 token，因此已有的历史 Key/Value 可以复用。**KV Cache 避免反复计算历史表示，但新的 Query 仍需要访问相关历史 Key/Value。**[Hugging Face — How caching works][kv]

对于采用普通 MHA/GQA、以固定精度存储的 Model，可以用下面的近似式理解 KV memory：

```text
KV memory ≈ 2 × batch_size × layers × sequence_length
              × num_kv_heads × head_dim × bytes_per_element
```

这里的 2 分别对应 Key 和 Value；该式忽略实现额外开销，也不适用于所有架构。它解释了为什么 sequence length 与并发量增加，会让 KV memory 快速增长。

**Prompt Cache** 则是跨请求复用已经处理过的 Prefix，常见实现复用该 Prefix 的 KV states。它减少重复 Prefill；新的回答仍要重新 Decode。vLLM 将这一机制称为 Automatic Prefix Caching。[vLLM — Automatic Prefix Caching][apc]

| Mechanism | 复用的对象 | 不意味着什么 |
| --- | --- | --- |
| KV Cache | Model 各层已处理 tokens 的 Key/Value | 不代表新 token 无需 Attention |
| Prompt Cache | 不同请求中相同 Prefix 的计算状态 | 不代表请求不再占用 Context Window |
| Response Cache | 已生成的回答 | 与重新运行 Model 是不同操作 |
| Semantic Cache | 按语义相似度查找可复用结果 | 不等于 exact-prefix matching |

#### Industry Insight

**Prefix layout 同时影响 Model behavior 和 serving cost。** OpenAI 的 Prompt Caching 文档强调匹配实际渲染后的 Prefix；instructions、Tool Schema、输入内容及相关设置可能影响复用。即使文本相同，能否命中仍受对应 Model 的 minimum length、cache boundary、TTL 和服务端 Cache 状态约束。单独设置一个 cache key，不能把不同 Prefix 变成相同 Prefix。[OpenAI — Prompt caching][openai-cache]

**Cache Hit Rate 需要与总成本一起看。** 保留无用 history 可能提高 hit rate，却增加每轮处理的 Context。相反，一次 Compaction 会失去部分旧 Prefix 的复用机会，但后续输入更短，整体可能更划算。比较时应同时看 input tokens、cached tokens、cache writes、TTFT、总 latency 与 task success。

前沿 Model 也在优化 KV 本身。**DeepSeek-V4.1-Flash Technical Report（2026-09）**指出 Long-horizon Agent workload 越来越 input-heavy，并讨论 persistent KV 的容量与传输开销；其 CSA2 使用 cross-layer KV reuse，main KV Cache 采用 FP4 等设计。这是 model architecture 与 serving 层的优化，不会自动替应用维护 task state 或生成 conversation summary。[DeepSeek-V4.1-Flash Technical Report，§2–3][deepseek-v4]

#### Method

常见组织方式是让稳定内容先进入可复用部分，再追加变化的信息；具体字段顺序服从 API 的渲染规则：

```text
Stable instructions / Tool Schema
→ Session-stable reference
→ Accumulated history
→ Current input / new evidence
```

保持 Prefix 文本、Tool Schema 顺序和 serialization 稳定；动态 timestamp、request ID、临时 Retrieval results 放在相应可变部分。需要清理旧 history 时，明确承担从变动位置开始的 Cache rebuild。Manus 的公开实践也强调 stable prefix、append-only history 与 deterministic serialization。[Manus — Context Engineering][manus]

API 配置要按服务商处理。例如 Claude 支持 Automatic Caching 和显式的 cache breakpoint，并区分 cache write 与 cache read 的计费。TTL 应与复用间隔匹配；只用一次的资料，不一定值得额外建立长生命周期 Cache。[Claude — Prompt caching][claude-cache]

#### Example：同一份 API manual，多次提问

下面的 10,000 tokens 仅为说明用的假设值：

```text
Request A:
[Instructions][10,000-token API manual] | [Question A]

Request B:
[Instructions][10,000-token API manual] | [Question B]
                                      ↑ reusable prefix
```

当匹配、边界和生命周期均满足要求时，Request B 可以复用 manual 对应的计算。若改成：

```text
[Question A / Question B][10,000-token API manual]
```

Question 一变，后面的 manual 就不再处于相同 Prefix 下，即使 manual 内容完全相同也不能照原样复用整段。把每轮变化的 timestamp 放在最前面，会产生同类问题。

### 1.3 Prompt Engineering

#### Basics

**Prompt Engineering 把目标、constraints、Evidence 使用方式和 output contract 写成 Model 可以执行的 instructions。** 对 Agent，Prompt 还需要定义什么时候调用 Tool、如何处理失败、怎样验证完成。

| Technique | 基本含义 | 适合解决的问题 |
| --- | --- | --- |
| Zero-shot | 给任务与要求，不提供 demonstration | 建立最简单的 baseline |
| Few-shot | 给少量 input → output demonstrations | 解释格式、风格与相近类别的 decision boundary |
| CoT Prompting | 用 instructions 或 demonstrations 引导多步 reasoning | 效果依赖 Model 和任务 |
| Structured Outputs | 通过 API 支持的 Schema 限制输出结构 | 提高字段与格式的可解析性 |
| Evals | 用固定任务与标准比较行为 | 判断 Prompt 修改是否真的有效 |

#### Industry Insight

**Reasoning Model 改变了 Prompt 的分工。** OpenAI 的 reasoning guide 建议给清晰直接的目标、constraints 和成功标准，从 Zero-shot 起步；不必默认加入“think step by step”。这并不排斥 Planning 或 Verification instructions，而是说明无需替 Model 规定每一步内部 reasoning。[OpenAI — Reasoning best practices][reasoning]

**Few-shot 没有跨 Model 的固定收益。** DeepSeek-R1 的 Technical Report 在该 Model 评测中观察到 Few-shot 会降低表现，因此采用 Zero-shot 与明确 output format；Gemini 的官方教程则推荐用 Few-shot 表达模式，同时要求试验 examples 的数量。二者提醒我们：Prompt 是 model- and task-specific 的配置，不能把一套技巧直接当作通用增益。[DeepSeek-R1 Technical Report][r1] [Gemini — Prompt design strategies][gemini-prompt]

**Output structure 与 correctness 要分别验证。** Structured Outputs 可以约束 Schema，但不能证明字段内容符合事实；API 还可能返回 refusal 或 incomplete response，需要调用方处理。关键业务计算、权限和最终 validation 应交给程序检查。[OpenAI — Structured Outputs][structured]

#### Method

一个实用的 Prompt skeleton 是：

```text
Task          要完成什么
Context       当前已有的事实与可用 Evidence
Constraints   必须保持的条件、操作边界
Workflow      必需的外部步骤与异常处理
Output        交付什么、采用什么格式
Verification  用什么可观察结果判定完成
```

Workflow 只规定任务真正需要的步骤。例如修 bug 要求复现和 regression test；开放式分析则给问题、Evidence 标准和交付要求，保留探索空间。instructions 与外部资料用清晰的 sections 分开，Tool Result 中的文本不能自行获得更高的指令权限。

迭代时先建立 baseline，收集真实失败，再区分是缺 Evidence、误解要求、选错 Tool，还是验证不足。每次修改一个主要因素，在 held-out tasks 上比较 task success、Tool behavior、latency 和 token cost。OpenAI 的 Evaluation 教程同样强调 task-specific Evals、真实样本和持续回归，而非凭输出是否流畅判断质量。[OpenAI — Evaluation best practices][evals]

#### Example 1：给 Coding Agent 一个可验证的任务

宽泛 Prompt：

```text
修复支付回调的问题，保证代码质量。
```

更明确的 Prompt：

```text
Task:
同一 payment event 被重复投递时，只允许入账一次。

Context:
从 callback handler、database schema 和现有 tests 开始调查。
以实际代码和 Tool Result 为依据，未知信息先读取。

Constraints:
保持 public API 和正常回调的 response 不变。
不得把“先查再写”视为已经解决 concurrency。

Verification:
验证 single delivery、sequential duplicate、concurrent duplicate。
报告实际运行的 commands、结果和未验证项。

Output:
提交 patch，并简述 failure cause 与验证结果。
```

这里明确的是外部行为和完成标准。它既没有提前替 Agent 猜测正确实现，也没有要求输出完整 CoT。

#### Example 2：用 Few-shot 划清分类边界

```text
Labels: bug / feature_request / question

“更新后点击保存出现 500” → bug
“希望可以导出 CSV”       → feature_request
“现在支持导出 CSV 吗？”   → question
```

第三条 example 用来区分“请求新能力”和“询问现有能力”。是否保留这组 Few-shot，应由未参与编写的测试样本决定；如果只是增加 tokens 而没有改善分类，就不必加入常驻 Prompt。

### 1.4 Context Compression

#### Basics

**Context Compression 减少后续 Model 请求需要携带的信息，同时尽量保留继续任务所需的内容。** 实现可以是筛选、删除、Summary、结构化 State，或 Model Provider 提供的 Compaction。

| Method | 对 Context 的操作 | 主要取舍 |
| --- | --- | --- |
| Truncation | 按长度或时间直接截断 | 实现简单，但可能删掉关键早期信息 |
| Tool Result Filtering / Clearing | 过滤无关输出，或移除不再需要的旧结果 | 需要判断哪些结果仍会被引用 |
| Summarization / Compaction | 用更短的表示承接旧 History | 有信息损失，需要保护约束与精确字段 |
| External Memory + Retrieval | 将原文保存在外部，Context 保留 Summary 和 source pointers | 需要再次读取，也依赖来源可用性 |

这里改变的是下一轮可见的信息。**KV Cache Compression 减少 inference 时 K/V states 的存储开销，属于不同层次。** Prompt Cache 复用已有计算，也不等于减少 Context tokens。

#### Industry Insight

**Long-context Retrieval 与 Long-horizon Planning 是不同能力。** Gemini 2.5 Technical Report 的 Pokémon Agent 案例中，作者观察到 Context 显著超过 100k tokens 后，Agent 更容易重复历史动作。报告明确将此限定为 anecdotal observation；它提示需要评估长期行为，不能把 100k 当作所有 Model 的固定 threshold。[Gemini 2.5 Technical Report，§4.1][gemini-report]

**Compaction 应产生可以继续工作的 State，而不只是对话梗概。** “已经读了文件、改了代码”没有说明代码是否通过测试；“修改完成但 concurrent test 未运行”才会影响下一步。Anthropic 的 long-running harness 使用 progress file、feature list 和 Git history 支持下一次 session 恢复，说明任务状态需要在 conversation 之外也有明确记录。[Anthropic — Effective harnesses][harness]

**Compaction 已成为部分 Model Provider 的原生能力。** OpenAI 的 Compaction 可以返回 opaque、encrypted 的 compaction item，不能将其当作可随意编辑的 Markdown summary；Claude 的 Compaction 则提供 instructions 等控制方式。使用原生接口时，必须遵守对应的 history continuation 协议。[OpenAI — Compaction][openai-compact] [Claude — Compaction][claude-compact]

#### Method

应用层通常组合以下方法：

1. **先减少输入噪声。** search 返回命中片段；test Tool 优先返回失败项。大型原始结果落盘，保留 file path。
2. **将 State 与 Evidence 分开。** State 记录当前任务进展；Evidence 保留原始代码、日志、来源与必要的精确值。
3. **执行 Task-aware Compaction。** 输入当前 goal 和 constraints，保护 decisions、failed attempts、open questions、source pointers、next actions。ID、版本、路径和用户纠正不应被模糊化。
4. **保留当前工作所需的 Recent History。** 不按固定条数盲删；如果 Model 协议要求原样传递某些 items，就使用其支持的 Compaction 路径。
5. **为下一轮预留 Token Budget。** threshold 要给下一次 Tool Result、输出及所需 reasoning 留余量，按真实 workload 调整。
6. **恢复后重新验证环境。** Summary 说“测试通过”只是历史状态；文件后来改变了，需要检查新的版本和结果。

同时要考虑 Prompt Cache。Claude 的 Context editing 文档明确说明，修改旧 Tool Result 会影响对应位置之后的 cached prefix，并提供最小清理量控制。工程上应比较“一次释放足够空间”与“每轮改写少量历史”的总开销。[Claude — Context editing][context-edit]

#### Example：将执行记录整理成 State Checkpoint

低价值 Summary：

```text
读了支付模块，尝试了两个方案，改了代码并运行了一些测试。
```

更适合恢复工作的 Checkpoint：

```yaml
goal: 同一 payment event 只能入账一次
constraints:
  - 保持 public API response 不变
verified:
  - sequential duplicate test 已通过
decision:
  - 使用 database unique constraint；event_id 作为去重依据
failed_attempt:
  - 应用层先查后写存在 race condition
evidence:
  - tests/test_payment_callback.py
  - work/payment-test.log
open:
  - concurrent duplicate test 尚未运行
next:
  - 执行 concurrent test，再验证 transaction rollback
```

上面是示例状态，不代表真实项目结果。它保留了“为什么选这个方案”和“什么尚未验证”；完整 diff 与 logs 仍可重新读取。Compaction 效果应通过恢复后的任务表现验证：是否重复失败方案、是否漏掉约束、能否找到 Evidence，而不只看 token reduction。

### 1.5 Skill

#### Basics

**Skill 将可复用的 domain knowledge、Workflow 和资源打包，供 Agent 在相关任务中按需加载。** 它在 runtime 提供 instructions，不会因为安装就改变 Model weights。

按照 Agent Skills specification，一个 Skill 至少包含 SKILL.md，也可以带 scripts、references 和 assets。例如下面是一份说明用的结构：

```text
invoice-extraction/
├── SKILL.md
├── references/field-rules.md
├── scripts/validate_invoice.py
└── assets/output-schema.json
```

SKILL.md 以 YAML frontmatter 声明 name 与 description，再写具体 instructions；其余文件承载详细规则、可执行逻辑和模板。[Agent Skills specification][skill-spec]

| Object | 主要职责 | Example |
| --- | --- | --- |
| Prompt | 定义当前调用的要求 | 提取这张 invoice 的字段 |
| Tool | 提供可执行的操作 | 读取 PDF、运行 Python |
| Skill | 组织某类任务的可复用方法 | 字段规则、OCR 条件、validation Workflow |
| Memory | 保存事实、偏好或任务状态 | 本项目采用的字段命名和处理进度 |

#### Industry Insight

**Progressive Disclosure 让细节在需要时才占用 Context。** 标准模式是先暴露 metadata；匹配任务后加载 instructions；执行到具体步骤再读取 resources。目录让能力可发现，完整正文负责执行，具体 host 决定 discovery、activation 和消息包装方式。[Agent Skills specification][skill-spec]

**Skill quality 包括 Routing quality。** description 要让 Agent 判断何时使用，过宽会误触发，过窄会漏掉相关请求。另一个常见做法是按任务的容错空间控制自由度：开放式分析提供原则，严格格式转换交给明确 scripts 和 validation。Anthropic 的 authoring 教程强调这些设计，并建议先通过代表性任务发现缺口，再编写 Skill。[Claude — Skill authoring best practices][skill-author]

#### Method & Example

一个最小 invoice-extraction Skill 可以这样写；以下是设计示例，引用的 scripts 与 Schema 需要实际实现和测试：

```markdown
---
name: invoice-extraction
description: Extract structured fields from invoice PDFs and validate them. Use for invoice data extraction, not general PDF summarization.
---

## Workflow
1. Extract text; use OCR only when the PDF has no usable text layer.
2. Read references/field-rules.md for field definitions.
3. Read assets/output-schema.json and write extracted data to output.json.
   Use null for missing evidence only where the Schema allows null.
4. Run scripts/validate_invoice.py to validate output.json against
   assets/output-schema.json; report any validation errors.
5. Return extracted fields, source locations, and unresolved issues.
```

用户要求“提取这 10 张 invoice 的 invoice number 与 total”时，Skill 提供统一的字段规则和 validation；用户要求“概括这篇论文 PDF”时，description 应避免错误激活它。

把确定性环节交给 scripts，可以避免每次重新生成金额格式检查或 Schema validation。Model 负责识别输入、选择适用路径、解释异常和处理未知情况。Skill 中的 script 仍需要维护 dependencies、输入检查与错误处理；Skill 本身不替代权限控制。

可以将 Skill 的 Evals 分成三组，分别检查：

- **Activation**：该触发的任务是否触发；相似但无关的任务是否误触发。
- **Execution**：是否读取正确 reference、运行必要 script、遵守 exceptions。
- **Outcome**：结果是否通过 validation；与不使用 Skill 的 baseline 相比，task success、latency 和 Context cost 如何变化。

这三组是面向实现的检查框架。它让“Agent 读过 Skill”与“Skill 真正改善任务结果”成为两个可分别验证的问题。

#### Sources

- 原始阅读材料：[李博杰《深入理解 AI Agent》第二章](https://bojieli.github.io/ai-agent-book/astro/book/chapter2/)。
- Model Technical Reports：[DeepSeek-V4.1-Flash（2026-09）][deepseek-v4]、[Gemini 2.5（2025）][gemini-report]、[DeepSeek-R1（2025）][r1]。
- 其余官方 Tutorials 与 Specifications 已在对应段落链接；文档核查日期：2026-10-25。文中的业务场景与代码片段为说明用 Examples。

[context]: https://www.anthropic.com/research/effective-context-engineering-for-ai-agents
[tools]: https://www.anthropic.com/research/writing-tools-for-agents
[kv]: https://huggingface.co/docs/transformers/main/cache_explanation
[apc]: https://docs.vllm.ai/en/latest/features/automatic_prefix_caching/
[openai-cache]: https://developers.openai.com/api/docs/guides/prompt-caching
[claude-cache]: https://platform.claude.com/docs/en/build-with-claude/prompt-caching
[deepseek-v4]: https://arxiv.org/html/2609.19969v1
[manus]: https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus
[reasoning]: https://developers.openai.com/api/docs/guides/reasoning-best-practices
[r1]: https://arxiv.org/html/2501.12948v1
[gemini-prompt]: https://ai.google.dev/gemini-api/docs/prompting-strategies
[structured]: https://developers.openai.com/api/docs/guides/structured-outputs
[evals]: https://developers.openai.com/api/docs/guides/evaluation-best-practices
[gemini-report]: https://arxiv.org/html/2507.06261v3#S4.SS1
[harness]: https://www.anthropic.com/research/effective-harnesses-for-long-running-agents
[openai-compact]: https://developers.openai.com/api/docs/guides/compaction
[claude-compact]: https://platform.claude.com/docs/en/build-with-claude/compaction
[context-edit]: https://platform.claude.com/docs/en/build-with-claude/context-editing
[skill-spec]: https://agentskills.io/specification
[skill-author]: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices
