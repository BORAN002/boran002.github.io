0:{"page:/notes/agent-loop":"$L1","layout:/":"$L2","route:/notes/agent-loop":"$L3","__route":"route:/notes/agent-loop","__interceptionContext":null,"__layoutIds":["layout:/"],"__rootLayout":"/","__bfcacheSegmentIdentities":{"layout:/":"[\"layout\",\"layout:/\",\"root-boundary:/\",\"\"]","page:/notes/agent-loop":"[\"page\",\"page:/notes/:slug\",\"root-boundary:/\",\"[\\\"notes\\\",\\\"slug|agent-loop|d\\\"]\"]"},"__srcPage":["notes","[slug]","page"],"__layoutFlags":{"layout:/":"s"},"__artifactCompatibility":{"schemaVersion":1,"graphVersion":"app-route-graph:528b3508fbd9ac74","deploymentVersion":"e92414ba-ef3d-4baa-8dee-1dbd1838f94d","appElementsSchemaVersion":1,"rscPayloadSchemaVersion":1,"rootBoundaryId":"/","renderEpoch":null}}
4:I["dda6c9d07718",[],"Navigation",1]
5:I["8c0f216c4604",[],"Children",1]
6:I["593f344dc510",[],"GlobalErrorBoundary",1]
7:I["0b874ad30386",[],"default",1]
8:I["593f344dc510",[],"ErrorBoundary",1]
9:I["15c18cfaeeff",[],"LayoutSegmentProvider",1]
a:I["8c0f216c4604",[],"Slot",1]
b:I["593f344dc510",[],"NotFoundBoundary",1]
c:I["9276801271d6",[],"AppRouterScrollTarget",1]
d:I["593f344dc510",[],"RedirectBoundary",1]
:HL["/_next/static/css/index.BxEeVPYR.css","style"     ]
2:[[["$","link","css:/_next/static/css/index.BxEeVPYR.css",{"rel":"stylesheet","precedence":"vite-rsc/importer-resources","href":"/_next/static/css/index.BxEeVPYR.css","data-rsc-css-href":"/_next/static/css/index.BxEeVPYR.css"}],"$undefined"],["$","html",null,{"lang":"zh-CN","children":["$","body",null,{"children":[["$","a",null,{"className":"skip-link","href":"#main","children":"跳至正文"}],["$","div",null,{"className":"page","children":[["$","header",null,{"className":"site-header","children":[["$","a",null,{"href":"/","children":"Riven Zhang"}],["$","$L4",null,{}]]}],["$","$L5",null,{}]]}]]}]}]]
3:[[["$","meta",null,{"charSet":"utf-8"}],[["$","title","0",{"children":"Agent Loop · Riven Zhang"}],["$","meta","1",{"name":"description","content":"Context Engineering 的基础、Industry Insights 与 Methods：KV Cache、Prompt Cache、Prompt Engineering、Context Compression 和 Skill，结合 Model Technical Reports、官方教程与具体 Examples。"}],["$","meta","2",{"property":"og:title","content":"Agent Loop"}],["$","meta","3",{"property":"og:description","content":"Context Engineering 的基础、Industry Insights 与 Methods：KV Cache、Prompt Cache、Prompt Engineering、Context Compression 和 Skill，结合 Model Technical Reports、官方教程与具体 Examples。"}],["$","meta","4",{"property":"og:url","content":"https://boran002.github.io/notes/agent-loop/"}],["$","meta","5",{"property":"og:type","content":"article"}],["$","meta","6",{"property":"article:published_time","content":"2026-10-20"}],["$","meta","7",{"property":"article:modified_time","content":"2026-10-25"}],["$","meta","8",{"name":"twitter:card","content":"summary"}],["$","meta","9",{"name":"twitter:title","content":"Agent Loop"}],["$","meta","10",{"name":"twitter:description","content":"Context Engineering 的基础、Industry Insights 与 Methods：KV Cache、Prompt Cache、Prompt Engineering、Context Compression 和 Skill，结合 Model Technical Reports、官方教程与具体 Examples。"}],["$","link","11",{"data-vinext-streamed-icon":"$undefined","rel":"icon","href":"/favicon.svg","type":"$undefined","sizes":"$undefined","color":"$undefined","media":"$undefined","fetchPriority":"$undefined"}],["$","link","12",{"rel":"canonical","href":"https://boran002.github.io/notes/agent-loop/"}]],[["$","meta","0",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]],["$","$L6",null,{"fallback":"$7","children":["$","$L8",null,{"fallback":"$7","children":["$","$L9",null,{"providerId":"layout:/","segmentMap":{"children":["notes","agent-loop"]},"children":["$","$La",null,{"id":"layout:/","parallelSlots":"$undefined","children":["$","$Lb",null,{"resetKey":"notes","fallback":[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],"children":["$","$Lc",null,{"children":["$","$Ld",null,{"children":[["$","$L9",null,{"providerId":"page:/notes/agent-loop","segmentMap":{"children":["__PAGE__"]},"children":["$","$La",null,{"id":"page:/notes/agent-loop"}]}],null]}]}]}]}]}]}]}],null,null]
e:T6d75,<h2 id="1-context-engineering">1.Context Engineering</h2>
<h3 id="1-1-what-is-context-engineering">1.1 What Is Context Engineering?</h3>
<h4 id="basics">Basics</h4>
<p><strong>Context Engineering 是设计每次 LLM call 实际接收的信息：放入什么、什么时候读取、以什么结构组织，以及哪些内容应保留或移出。</strong> Prompt Engineering 主要处理 instructions 怎么写；Context Engineering 还管理 Tool Schema、Tool Result、retrieved documents、conversation history 和当前 task state，并在整个 Agent Loop 中反复更新这些内容。<a href="https://www.anthropic.com/research/effective-context-engineering-for-ai-agents">Anthropic — Context Engineering</a></p>
<p>可以把 Context 看成 Agent 当前使用的 working set。Repository、数据库和历史记录可以很大，但 Model 每次只基于本次可见的信息选择下一步。Model weights 中学到的通用知识，不能代替当前项目的代码、实时查询结果和用户指定的 constraints。</p>
<table>
<thead>
<tr>
<th>Context component</th>
<th>提供什么</th>
<th>Coding Agent example</th>
</tr>
</thead>
<tbody>
<tr>
<td>Instructions</td>
<td>目标、行为要求、完成条件</td>
<td>保持 public API；必须验证 regression</td>
</tr>
<tr>
<td>Tool Schema</td>
<td>可用操作及输入要求</td>
<td>read_file、search_code、run_tests</td>
</tr>
<tr>
<td>Retrieved Evidence</td>
<td>当前判断所需的原始依据</td>
<td>相关函数、调用点、失败测试</td>
</tr>
<tr>
<td>History</td>
<td>已发生的 action 与 observation</td>
<td>上一轮改动及测试返回</td>
</tr>
<tr>
<td>Working State</td>
<td>已完成、未完成与关键决定</td>
<td>已定位 race condition；尚未跑 concurrent test</td>
</tr>
</tbody>
</table>
<h4 id="industry-insight">Industry Insight</h4>
<p><strong>Context 的组织单位逐渐从“把资料放进 Prompt”转向“为下一步决策准备信息”。</strong> Anthropic 描述的 Just-in-time Retrieval 保留 file path、query、URL 等轻量入口，Agent 需要时再读取具体内容；也可以先提供基本项目说明，再自主搜索。这降低常驻 Context，但增加 Retrieval round trips，因此需要按任务选择预加载与动态读取的比例。<a href="https://www.anthropic.com/research/effective-context-engineering-for-ai-agents">Anthropic — Just-in-time Retrieval</a></p>
<p>另一个关键点是 <strong>Tool design 直接决定 Context quality</strong>。如果需求是查一个订单，Tool 却返回全部订单，后续再精简已经付出了读取成本。Anthropic 的 Tool 教程建议通过 filtering、pagination、range selection 和有信息量的 error message 控制返回内容。<a href="https://www.anthropic.com/research/writing-tools-for-agents">Anthropic — Writing effective tools</a></p>
<h4 id="method-example">Method &amp; Example</h4>
<p>以“修复重复支付回调导致重复入账”为例，以下是说明用的工作流程：</p>
<ol>
<li>初始 Context 提供目标、API constraints、项目入口和可用 Tools。</li>
<li>Agent 通过 search 定位 callback handler，再读取 handler、database schema 和相关 tests。</li>
<li>Tool Result 表明同一 event ID 可以写入两次，才把相关 transaction 和 unique constraint 信息加入 Context。</li>
<li>修改后注入真实 test result；失败时保留 error 和已经排除的方案。</li>
<li>Working State 更新为“顺序重复测试通过，concurrent test 待完成”，下一轮继续验证。</li>
</ol>
<p>如果把几百个无关文件全部放入请求，Model 需要自己识别哪些内容重要；如果只给“修复 bug”，它又缺少作出正确决定的依据。这个例子的 Context Engineering 工作，是让每一步获得足以判断的信息，并保留必要的回查入口。</p>
<h3 id="1-2-kv-cache-prompt-cache">1.2 KV Cache &amp; Prompt Cache</h3>
<h4 id="basics-prefill-decode-与-kv-cache">Basics：Prefill、Decode 与 KV Cache</h4>
<p>标准 Causal Transformer 的一次 inference 可以分为两个阶段：</p>
<ul>
<li><strong>Prefill</strong>：处理输入 tokens，计算各层的表示并建立 KV Cache。</li>
<li><strong>Decode</strong>：逐步生成输出。新增 token 被送回 Model 后，计算它的表示，并将新的 Key/Value 加入 KV Cache。</li>
</ul>
<p>Attention 使用当前 Query 与已有 Keys 计算权重，再聚合对应 Values。历史 token 不会看到后来的 token，因此已有的历史 Key/Value 可以复用。<strong>KV Cache 避免反复计算历史表示，但新的 Query 仍需要访问相关历史 Key/Value。</strong><a href="https://huggingface.co/docs/transformers/main/cache_explanation">Hugging Face — How caching works</a></p>
<p>对于采用普通 MHA/GQA、以固定精度存储的 Model，可以用下面的近似式理解 KV memory：</p>
<pre><code class="language-text">KV memory ≈ 2 × batch_size × layers × sequence_length
              × num_kv_heads × head_dim × bytes_per_element
</code></pre>
<p>这里的 2 分别对应 Key 和 Value；该式忽略实现额外开销，也不适用于所有架构。它解释了为什么 sequence length 与并发量增加，会让 KV memory 快速增长。</p>
<p><strong>Prompt Cache</strong> 则是跨请求复用已经处理过的 Prefix，常见实现复用该 Prefix 的 KV states。它减少重复 Prefill；新的回答仍要重新 Decode。vLLM 将这一机制称为 Automatic Prefix Caching。<a href="https://docs.vllm.ai/en/latest/features/automatic_prefix_caching/">vLLM — Automatic Prefix Caching</a></p>
<table>
<thead>
<tr>
<th>Mechanism</th>
<th>复用的对象</th>
<th>不意味着什么</th>
</tr>
</thead>
<tbody>
<tr>
<td>KV Cache</td>
<td>Model 各层已处理 tokens 的 Key/Value</td>
<td>不代表新 token 无需 Attention</td>
</tr>
<tr>
<td>Prompt Cache</td>
<td>不同请求中相同 Prefix 的计算状态</td>
<td>不代表请求不再占用 Context Window</td>
</tr>
<tr>
<td>Response Cache</td>
<td>已生成的回答</td>
<td>与重新运行 Model 是不同操作</td>
</tr>
<tr>
<td>Semantic Cache</td>
<td>按语义相似度查找可复用结果</td>
<td>不等于 exact-prefix matching</td>
</tr>
</tbody>
</table>
<h4 id="industry-insight-2">Industry Insight</h4>
<p><strong>Prefix layout 同时影响 Model behavior 和 serving cost。</strong> OpenAI 的 Prompt Caching 文档强调匹配实际渲染后的 Prefix；instructions、Tool Schema、输入内容及相关设置可能影响复用。即使文本相同，能否命中仍受对应 Model 的 minimum length、cache boundary、TTL 和服务端 Cache 状态约束。单独设置一个 cache key，不能把不同 Prefix 变成相同 Prefix。<a href="https://developers.openai.com/api/docs/guides/prompt-caching">OpenAI — Prompt caching</a></p>
<p><strong>Cache Hit Rate 需要与总成本一起看。</strong> 保留无用 history 可能提高 hit rate，却增加每轮处理的 Context。相反，一次 Compaction 会失去部分旧 Prefix 的复用机会，但后续输入更短，整体可能更划算。比较时应同时看 input tokens、cached tokens、cache writes、TTFT、总 latency 与 task success。</p>
<p>前沿 Model 也在优化 KV 本身。**DeepSeek-V4.1-Flash Technical Report（2026-09）**指出 Long-horizon Agent workload 越来越 input-heavy，并讨论 persistent KV 的容量与传输开销；其 CSA2 使用 cross-layer KV reuse，main KV Cache 采用 FP4 等设计。这是 model architecture 与 serving 层的优化，不会自动替应用维护 task state 或生成 conversation summary。<a href="https://arxiv.org/html/2609.19969v1">DeepSeek-V4.1-Flash Technical Report，§2–3</a></p>
<h4 id="method">Method</h4>
<p>常见组织方式是让稳定内容先进入可复用部分，再追加变化的信息；具体字段顺序服从 API 的渲染规则：</p>
<pre><code class="language-text">Stable instructions / Tool Schema
→ Session-stable reference
→ Accumulated history
→ Current input / new evidence
</code></pre>
<p>保持 Prefix 文本、Tool Schema 顺序和 serialization 稳定；动态 timestamp、request ID、临时 Retrieval results 放在相应可变部分。需要清理旧 history 时，明确承担从变动位置开始的 Cache rebuild。Manus 的公开实践也强调 stable prefix、append-only history 与 deterministic serialization。<a href="https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus">Manus — Context Engineering</a></p>
<p>API 配置要按服务商处理。例如 Claude 支持 Automatic Caching 和显式的 cache breakpoint，并区分 cache write 与 cache read 的计费。TTL 应与复用间隔匹配；只用一次的资料，不一定值得额外建立长生命周期 Cache。<a href="https://platform.claude.com/docs/en/build-with-claude/prompt-caching">Claude — Prompt caching</a></p>
<h4 id="example-同一份-api-manual-多次提问">Example：同一份 API manual，多次提问</h4>
<p>下面的 10,000 tokens 仅为说明用的假设值：</p>
<pre><code class="language-text">Request A:
[Instructions][10,000-token API manual] | [Question A]

Request B:
[Instructions][10,000-token API manual] | [Question B]
                                      ↑ reusable prefix
</code></pre>
<p>当匹配、边界和生命周期均满足要求时，Request B 可以复用 manual 对应的计算。若改成：</p>
<pre><code class="language-text">[Question A / Question B][10,000-token API manual]
</code></pre>
<p>Question 一变，后面的 manual 就不再处于相同 Prefix 下，即使 manual 内容完全相同也不能照原样复用整段。把每轮变化的 timestamp 放在最前面，会产生同类问题。</p>
<h3 id="1-3-prompt-engineering">1.3 Prompt Engineering</h3>
<h4 id="basics-2">Basics</h4>
<p><strong>Prompt Engineering 把目标、constraints、Evidence 使用方式和 output contract 写成 Model 可以执行的 instructions。</strong> 对 Agent，Prompt 还需要定义什么时候调用 Tool、如何处理失败、怎样验证完成。</p>
<table>
<thead>
<tr>
<th>Technique</th>
<th>基本含义</th>
<th>适合解决的问题</th>
</tr>
</thead>
<tbody>
<tr>
<td>Zero-shot</td>
<td>给任务与要求，不提供 demonstration</td>
<td>建立最简单的 baseline</td>
</tr>
<tr>
<td>Few-shot</td>
<td>给少量 input → output demonstrations</td>
<td>解释格式、风格与相近类别的 decision boundary</td>
</tr>
<tr>
<td>CoT Prompting</td>
<td>用 instructions 或 demonstrations 引导多步 reasoning</td>
<td>效果依赖 Model 和任务</td>
</tr>
<tr>
<td>Structured Outputs</td>
<td>通过 API 支持的 Schema 限制输出结构</td>
<td>提高字段与格式的可解析性</td>
</tr>
<tr>
<td>Evals</td>
<td>用固定任务与标准比较行为</td>
<td>判断 Prompt 修改是否真的有效</td>
</tr>
</tbody>
</table>
<h4 id="industry-insight-3">Industry Insight</h4>
<p><strong>Reasoning Model 改变了 Prompt 的分工。</strong> OpenAI 的 reasoning guide 建议给清晰直接的目标、constraints 和成功标准，从 Zero-shot 起步；不必默认加入“think step by step”。这并不排斥 Planning 或 Verification instructions，而是说明无需替 Model 规定每一步内部 reasoning。<a href="https://developers.openai.com/api/docs/guides/reasoning-best-practices">OpenAI — Reasoning best practices</a></p>
<p><strong>Few-shot 没有跨 Model 的固定收益。</strong> DeepSeek-R1 的 Technical Report 在该 Model 评测中观察到 Few-shot 会降低表现，因此采用 Zero-shot 与明确 output format；Gemini 的官方教程则推荐用 Few-shot 表达模式，同时要求试验 examples 的数量。二者提醒我们：Prompt 是 model- and task-specific 的配置，不能把一套技巧直接当作通用增益。<a href="https://arxiv.org/html/2501.12948v1">DeepSeek-R1 Technical Report</a> <a href="https://ai.google.dev/gemini-api/docs/prompting-strategies">Gemini — Prompt design strategies</a></p>
<p><strong>Output structure 与 correctness 要分别验证。</strong> Structured Outputs 可以约束 Schema，但不能证明字段内容符合事实；API 还可能返回 refusal 或 incomplete response，需要调用方处理。关键业务计算、权限和最终 validation 应交给程序检查。<a href="https://developers.openai.com/api/docs/guides/structured-outputs">OpenAI — Structured Outputs</a></p>
<h4 id="method-2">Method</h4>
<p>一个实用的 Prompt skeleton 是：</p>
<pre><code class="language-text">Task          要完成什么
Context       当前已有的事实与可用 Evidence
Constraints   必须保持的条件、操作边界
Workflow      必需的外部步骤与异常处理
Output        交付什么、采用什么格式
Verification  用什么可观察结果判定完成
</code></pre>
<p>Workflow 只规定任务真正需要的步骤。例如修 bug 要求复现和 regression test；开放式分析则给问题、Evidence 标准和交付要求，保留探索空间。instructions 与外部资料用清晰的 sections 分开，Tool Result 中的文本不能自行获得更高的指令权限。</p>
<p>迭代时先建立 baseline，收集真实失败，再区分是缺 Evidence、误解要求、选错 Tool，还是验证不足。每次修改一个主要因素，在 held-out tasks 上比较 task success、Tool behavior、latency 和 token cost。OpenAI 的 Evaluation 教程同样强调 task-specific Evals、真实样本和持续回归，而非凭输出是否流畅判断质量。<a href="https://developers.openai.com/api/docs/guides/evaluation-best-practices">OpenAI — Evaluation best practices</a></p>
<h4 id="example-1-给-coding-agent-一个可验证的任务">Example 1：给 Coding Agent 一个可验证的任务</h4>
<p>宽泛 Prompt：</p>
<pre><code class="language-text">修复支付回调的问题，保证代码质量。
</code></pre>
<p>更明确的 Prompt：</p>
<pre><code class="language-text">Task:
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
</code></pre>
<p>这里明确的是外部行为和完成标准。它既没有提前替 Agent 猜测正确实现，也没有要求输出完整 CoT。</p>
<h4 id="example-2-用-few-shot-划清分类边界">Example 2：用 Few-shot 划清分类边界</h4>
<pre><code class="language-text">Labels: bug / feature_request / question

“更新后点击保存出现 500” → bug
“希望可以导出 CSV”       → feature_request
“现在支持导出 CSV 吗？”   → question
</code></pre>
<p>第三条 example 用来区分“请求新能力”和“询问现有能力”。是否保留这组 Few-shot，应由未参与编写的测试样本决定；如果只是增加 tokens 而没有改善分类，就不必加入常驻 Prompt。</p>
<h3 id="1-4-context-compression">1.4 Context Compression</h3>
<h4 id="basics-3">Basics</h4>
<p><strong>Context Compression 减少后续 Model 请求需要携带的信息，同时尽量保留继续任务所需的内容。</strong> 实现可以是筛选、删除、Summary、结构化 State，或 Model Provider 提供的 Compaction。</p>
<table>
<thead>
<tr>
<th>Method</th>
<th>对 Context 的操作</th>
<th>主要取舍</th>
</tr>
</thead>
<tbody>
<tr>
<td>Truncation</td>
<td>按长度或时间直接截断</td>
<td>实现简单，但可能删掉关键早期信息</td>
</tr>
<tr>
<td>Tool Result Filtering / Clearing</td>
<td>过滤无关输出，或移除不再需要的旧结果</td>
<td>需要判断哪些结果仍会被引用</td>
</tr>
<tr>
<td>Summarization / Compaction</td>
<td>用更短的表示承接旧 History</td>
<td>有信息损失，需要保护约束与精确字段</td>
</tr>
<tr>
<td>External Memory + Retrieval</td>
<td>将原文保存在外部，Context 保留 Summary 和 source pointers</td>
<td>需要再次读取，也依赖来源可用性</td>
</tr>
</tbody>
</table>
<p>这里改变的是下一轮可见的信息。<strong>KV Cache Compression 减少 inference 时 K/V states 的存储开销，属于不同层次。</strong> Prompt Cache 复用已有计算，也不等于减少 Context tokens。</p>
<h4 id="industry-insight-4">Industry Insight</h4>
<p><strong>Long-context Retrieval 与 Long-horizon Planning 是不同能力。</strong> Gemini 2.5 Technical Report 的 Pokémon Agent 案例中，作者观察到 Context 显著超过 100k tokens 后，Agent 更容易重复历史动作。报告明确将此限定为 anecdotal observation；它提示需要评估长期行为，不能把 100k 当作所有 Model 的固定 threshold。<a href="https://arxiv.org/html/2507.06261v3#S4.SS1">Gemini 2.5 Technical Report，§4.1</a></p>
<p><strong>Compaction 应产生可以继续工作的 State，而不只是对话梗概。</strong> “已经读了文件、改了代码”没有说明代码是否通过测试；“修改完成但 concurrent test 未运行”才会影响下一步。Anthropic 的 long-running harness 使用 progress file、feature list 和 Git history 支持下一次 session 恢复，说明任务状态需要在 conversation 之外也有明确记录。<a href="https://www.anthropic.com/research/effective-harnesses-for-long-running-agents">Anthropic — Effective harnesses</a></p>
<p><strong>Compaction 已成为部分 Model Provider 的原生能力。</strong> OpenAI 的 Compaction 可以返回 opaque、encrypted 的 compaction item，不能将其当作可随意编辑的 Markdown summary；Claude 的 Compaction 则提供 instructions 等控制方式。使用原生接口时，必须遵守对应的 history continuation 协议。<a href="https://developers.openai.com/api/docs/guides/compaction">OpenAI — Compaction</a> <a href="https://platform.claude.com/docs/en/build-with-claude/compaction">Claude — Compaction</a></p>
<h4 id="method-3">Method</h4>
<p>应用层通常组合以下方法：</p>
<ol>
<li><strong>先减少输入噪声。</strong> search 返回命中片段；test Tool 优先返回失败项。大型原始结果落盘，保留 file path。</li>
<li><strong>将 State 与 Evidence 分开。</strong> State 记录当前任务进展；Evidence 保留原始代码、日志、来源与必要的精确值。</li>
<li><strong>执行 Task-aware Compaction。</strong> 输入当前 goal 和 constraints，保护 decisions、failed attempts、open questions、source pointers、next actions。ID、版本、路径和用户纠正不应被模糊化。</li>
<li><strong>保留当前工作所需的 Recent History。</strong> 不按固定条数盲删；如果 Model 协议要求原样传递某些 items，就使用其支持的 Compaction 路径。</li>
<li><strong>为下一轮预留 Token Budget。</strong> threshold 要给下一次 Tool Result、输出及所需 reasoning 留余量，按真实 workload 调整。</li>
<li><strong>恢复后重新验证环境。</strong> Summary 说“测试通过”只是历史状态；文件后来改变了，需要检查新的版本和结果。</li>
</ol>
<p>同时要考虑 Prompt Cache。Claude 的 Context editing 文档明确说明，修改旧 Tool Result 会影响对应位置之后的 cached prefix，并提供最小清理量控制。工程上应比较“一次释放足够空间”与“每轮改写少量历史”的总开销。<a href="https://platform.claude.com/docs/en/build-with-claude/context-editing">Claude — Context editing</a></p>
<h4 id="example-将执行记录整理成-state-checkpoint">Example：将执行记录整理成 State Checkpoint</h4>
<p>低价值 Summary：</p>
<pre><code class="language-text">读了支付模块，尝试了两个方案，改了代码并运行了一些测试。
</code></pre>
<p>更适合恢复工作的 Checkpoint：</p>
<pre><code class="language-yaml"><span class="hljs-attr">goal:</span> <span class="hljs-string">同一</span> <span class="hljs-string">payment</span> <span class="hljs-string">event</span> <span class="hljs-string">只能入账一次</span>
<span class="hljs-attr">constraints:</span>
  <span class="hljs-bullet">-</span> <span class="hljs-string">保持</span> <span class="hljs-string">public</span> <span class="hljs-string">API</span> <span class="hljs-string">response</span> <span class="hljs-string">不变</span>
<span class="hljs-attr">verified:</span>
  <span class="hljs-bullet">-</span> <span class="hljs-string">sequential</span> <span class="hljs-string">duplicate</span> <span class="hljs-string">test</span> <span class="hljs-string">已通过</span>
<span class="hljs-attr">decision:</span>
  <span class="hljs-bullet">-</span> <span class="hljs-string">使用</span> <span class="hljs-string">database</span> <span class="hljs-string">unique</span> <span class="hljs-string">constraint；event_id</span> <span class="hljs-string">作为去重依据</span>
<span class="hljs-attr">failed_attempt:</span>
  <span class="hljs-bullet">-</span> <span class="hljs-string">应用层先查后写存在</span> <span class="hljs-string">race</span> <span class="hljs-string">condition</span>
<span class="hljs-attr">evidence:</span>
  <span class="hljs-bullet">-</span> <span class="hljs-string">tests/test_payment_callback.py</span>
  <span class="hljs-bullet">-</span> <span class="hljs-string">work/payment-test.log</span>
<span class="hljs-attr">open:</span>
  <span class="hljs-bullet">-</span> <span class="hljs-string">concurrent</span> <span class="hljs-string">duplicate</span> <span class="hljs-string">test</span> <span class="hljs-string">尚未运行</span>
<span class="hljs-attr">next:</span>
  <span class="hljs-bullet">-</span> <span class="hljs-string">执行</span> <span class="hljs-string">concurrent</span> <span class="hljs-string">test，再验证</span> <span class="hljs-string">transaction</span> <span class="hljs-string">rollback</span>
</code></pre>
<p>上面是示例状态，不代表真实项目结果。它保留了“为什么选这个方案”和“什么尚未验证”；完整 diff 与 logs 仍可重新读取。Compaction 效果应通过恢复后的任务表现验证：是否重复失败方案、是否漏掉约束、能否找到 Evidence，而不只看 token reduction。</p>
<h3 id="1-5-skill">1.5 Skill</h3>
<h4 id="basics-4">Basics</h4>
<p><strong>Skill 将可复用的 domain knowledge、Workflow 和资源打包，供 Agent 在相关任务中按需加载。</strong> 它在 runtime 提供 instructions，不会因为安装就改变 Model weights。</p>
<p>按照 Agent Skills specification，一个 Skill 至少包含 SKILL.md，也可以带 scripts、references 和 assets。例如下面是一份说明用的结构：</p>
<pre><code class="language-text">invoice-extraction/
├── SKILL.md
├── references/field-rules.md
├── scripts/validate_invoice.py
└── assets/output-schema.json
</code></pre>
<p>SKILL.md 以 YAML frontmatter 声明 name 与 description，再写具体 instructions；其余文件承载详细规则、可执行逻辑和模板。<a href="https://agentskills.io/specification">Agent Skills specification</a></p>
<table>
<thead>
<tr>
<th>Object</th>
<th>主要职责</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>Prompt</td>
<td>定义当前调用的要求</td>
<td>提取这张 invoice 的字段</td>
</tr>
<tr>
<td>Tool</td>
<td>提供可执行的操作</td>
<td>读取 PDF、运行 Python</td>
</tr>
<tr>
<td>Skill</td>
<td>组织某类任务的可复用方法</td>
<td>字段规则、OCR 条件、validation Workflow</td>
</tr>
<tr>
<td>Memory</td>
<td>保存事实、偏好或任务状态</td>
<td>本项目采用的字段命名和处理进度</td>
</tr>
</tbody>
</table>
<h4 id="industry-insight-5">Industry Insight</h4>
<p><strong>Progressive Disclosure 让细节在需要时才占用 Context。</strong> 标准模式是先暴露 metadata；匹配任务后加载 instructions；执行到具体步骤再读取 resources。目录让能力可发现，完整正文负责执行，具体 host 决定 discovery、activation 和消息包装方式。<a href="https://agentskills.io/specification">Agent Skills specification</a></p>
<p><strong>Skill quality 包括 Routing quality。</strong> description 要让 Agent 判断何时使用，过宽会误触发，过窄会漏掉相关请求。另一个常见做法是按任务的容错空间控制自由度：开放式分析提供原则，严格格式转换交给明确 scripts 和 validation。Anthropic 的 authoring 教程强调这些设计，并建议先通过代表性任务发现缺口，再编写 Skill。<a href="https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices">Claude — Skill authoring best practices</a></p>
<h4 id="method-example-2">Method &amp; Example</h4>
<p>一个最小 invoice-extraction Skill 可以这样写；以下是设计示例，引用的 scripts 与 Schema 需要实际实现和测试：</p>
<pre><code class="language-markdown">---
name: invoice-extraction
<span class="hljs-section">description: Extract structured fields from invoice PDFs and validate them. Use for invoice data extraction, not general PDF summarization.
---</span>

<span class="hljs-section">## Workflow</span>
<span class="hljs-bullet">1.</span> Extract text; use OCR only when the PDF has no usable text layer.
<span class="hljs-bullet">2.</span> Read references/field-rules.md for field definitions.
<span class="hljs-bullet">3.</span> Read assets/output-schema.json and write extracted data to output.json.
   Use null for missing evidence only where the Schema allows null.
<span class="hljs-bullet">4.</span> Run scripts/validate<span class="hljs-emphasis">_invoice.py to validate output.json against
   assets/output-schema.json; report any validation errors.
5. Return extracted fields, source locations, and unresolved issues.
</span></code></pre>
<p>用户要求“提取这 10 张 invoice 的 invoice number 与 total”时，Skill 提供统一的字段规则和 validation；用户要求“概括这篇论文 PDF”时，description 应避免错误激活它。</p>
<p>把确定性环节交给 scripts，可以避免每次重新生成金额格式检查或 Schema validation。Model 负责识别输入、选择适用路径、解释异常和处理未知情况。Skill 中的 script 仍需要维护 dependencies、输入检查与错误处理；Skill 本身不替代权限控制。</p>
<p>可以将 Skill 的 Evals 分成三组，分别检查：</p>
<ul>
<li><strong>Activation</strong>：该触发的任务是否触发；相似但无关的任务是否误触发。</li>
<li><strong>Execution</strong>：是否读取正确 reference、运行必要 script、遵守 exceptions。</li>
<li><strong>Outcome</strong>：结果是否通过 validation；与不使用 Skill 的 baseline 相比，task success、latency 和 Context cost 如何变化。</li>
</ul>
<p>这三组是面向实现的检查框架。它让“Agent 读过 Skill”与“Skill 真正改善任务结果”成为两个可分别验证的问题。</p>
<h4 id="sources">Sources</h4>
<ul>
<li>原始阅读材料：<a href="https://bojieli.github.io/ai-agent-book/astro/book/chapter2/">李博杰《深入理解 AI Agent》第二章</a>。</li>
<li>Model Technical Reports：<a href="https://arxiv.org/html/2609.19969v1">DeepSeek-V4.1-Flash（2026-09）</a>、<a href="https://arxiv.org/html/2507.06261v3#S4.SS1">Gemini 2.5（2025）</a>、<a href="https://arxiv.org/html/2501.12948v1">DeepSeek-R1（2025）</a>。</li>
<li>其余官方 Tutorials 与 Specifications 已在对应段落链接；文档核查日期：2026-10-25。文中的业务场景与代码片段为说明用 Examples。</li>
</ul>
1:["$","main",null,{"id":"main","tabIndex":-1,"children":[["$","a",null,{"className":"back-link","href":"/notes/","children":["← ","Notes"]}],["$","article",null,{"children":[["$","header",null,{"className":"note-header","children":[["$","h1",null,{"children":"Agent Loop"}],["$","time",null,{"dateTime":"2026-10-20","children":"2026.10.20"}]]}],false,["$","div",null,{"className":"prose","dangerouslySetInnerHTML":{"__html":"$e"}}]]}]]}]
