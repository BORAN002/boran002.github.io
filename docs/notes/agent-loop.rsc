0:{"page:/notes/agent-loop":"$L1","layout:/":"$L2","route:/notes/agent-loop":"$L3","__route":"route:/notes/agent-loop","__interceptionContext":null,"__layoutIds":["layout:/"],"__rootLayout":"/","__bfcacheSegmentIdentities":{"layout:/":"[\"layout\",\"layout:/\",\"root-boundary:/\",\"\"]","page:/notes/agent-loop":"[\"page\",\"page:/notes/:slug\",\"root-boundary:/\",\"[\\\"notes\\\",\\\"slug|agent-loop|d\\\"]\"]"},"__srcPage":["notes","[slug]","page"],"__layoutFlags":{"layout:/":"s"},"__artifactCompatibility":{"schemaVersion":1,"graphVersion":"app-route-graph:528b3508fbd9ac74","deploymentVersion":"b6045e23-23b7-4983-a7b3-eacc19d435ea","appElementsSchemaVersion":1,"rscPayloadSchemaVersion":1,"rootBoundaryId":"/","renderEpoch":null}}
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
:HL["/_next/static/css/index.CEHMhAv4.css","style"     ]
2:[[["$","link","css:/_next/static/css/index.CEHMhAv4.css",{"rel":"stylesheet","precedence":"vite-rsc/importer-resources","href":"/_next/static/css/index.CEHMhAv4.css","data-rsc-css-href":"/_next/static/css/index.CEHMhAv4.css"}],"$undefined"],["$","html",null,{"lang":"zh-CN","children":["$","body",null,{"children":[["$","a",null,{"className":"skip-link","href":"#main","children":"跳至正文"}],["$","div",null,{"className":"page","children":[["$","header",null,{"className":"site-header","children":[["$","a",null,{"href":"/","children":"Riven Zhang"}],["$","$L4",null,{}]]}],["$","$L5",null,{}]]}]]}]}]]
3:[[["$","meta",null,{"charSet":"utf-8"}],[["$","title","0",{"children":"Agent Loop · Riven Zhang"}],["$","meta","1",{"name":"description","content":"Context Engineering：从 messages 和 Agent Loop 讲起，分 Basic 与 Insight 记录 KV Cache、Prompt Cache、Prompt Engineering、Context Compression 和 Skill。"}],["$","meta","2",{"property":"og:title","content":"Agent Loop"}],["$","meta","3",{"property":"og:description","content":"Context Engineering：从 messages 和 Agent Loop 讲起，分 Basic 与 Insight 记录 KV Cache、Prompt Cache、Prompt Engineering、Context Compression 和 Skill。"}],["$","meta","4",{"property":"og:url","content":"https://boran002.github.io/notes/agent-loop/"}],["$","meta","5",{"property":"og:type","content":"article"}],["$","meta","6",{"property":"article:published_time","content":"2026-10-20"}],["$","meta","7",{"property":"article:modified_time","content":"2026-10-25"}],["$","meta","8",{"name":"twitter:card","content":"summary"}],["$","meta","9",{"name":"twitter:title","content":"Agent Loop"}],["$","meta","10",{"name":"twitter:description","content":"Context Engineering：从 messages 和 Agent Loop 讲起，分 Basic 与 Insight 记录 KV Cache、Prompt Cache、Prompt Engineering、Context Compression 和 Skill。"}],["$","link","11",{"data-vinext-streamed-icon":"$undefined","rel":"icon","href":"/favicon.svg","type":"$undefined","sizes":"$undefined","color":"$undefined","media":"$undefined","fetchPriority":"$undefined"}],["$","link","12",{"rel":"canonical","href":"https://boran002.github.io/notes/agent-loop/"}]],[["$","meta","0",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]],["$","$L6",null,{"fallback":"$7","children":["$","$L8",null,{"fallback":"$7","children":["$","$L9",null,{"providerId":"layout:/","segmentMap":{"children":["notes","agent-loop"]},"children":["$","$La",null,{"id":"layout:/","parallelSlots":"$undefined","children":["$","$Lb",null,{"resetKey":"notes","fallback":[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],"children":["$","$Lc",null,{"children":["$","$Ld",null,{"children":[["$","$L9",null,{"providerId":"page:/notes/agent-loop","segmentMap":{"children":["__PAGE__"]},"children":["$","$La",null,{"id":"page:/notes/agent-loop"}]}],null]}]}]}]}]}]}]}],null,null]
e:T70bc,<p><strong>Context Engineering</strong></p>
<h2 id="basic">Basic</h2>
<h3 id="messages-与-agent-loop">messages 与 Agent Loop</h3>
<p><strong>先从 messages 列表理解 Context：Agent 框架的一项核心工作，就是管理这个列表。</strong></p>
<p>先用这个结构理解 Agent。下面采用 Chat Completions 的格式：<code>messages</code> 保存交互历史；<code>tools</code> 是请求中的另一个字段，告诉 model 有哪些 function、每个 function 接收什么参数。两者都会进入 model 本次实际使用的 Context。其他 API 的字段名可能不同，例如 Responses API 使用 <code>input</code> 和不同类型的 items。</p>
<p>每个 message 都有 <code>role</code>，标明这条内容来自谁：</p>
<ul>
<li><code>system</code>：定义 Agent 的身份、行为规则和 constraints，优先于本例中的 user instructions。部分 API / model 使用 <code>developer</code> 承载应用层 instructions，应按对应协议传入。</li>
<li><code>user</code>：用户的请求、补充信息和纠正。</li>
<li><code>assistant</code>：model 的输出，可以是回复，也可以包含调用 Tool 的请求。</li>
<li><code>tool</code>：框架执行 Tool 后返回的结果，例如查到的数据、文件内容或执行错误。</li>
</ul>
<p><code>tool_calls</code> 和 <code>tool_call_id</code> 是字段，不是 role：</p>
<ul>
<li><code>tool_calls</code> 位于 assistant message 中。每次调用包含 <code>id</code>、function <code>name</code> 和 <code>arguments</code>。</li>
<li><code>tool_call_id</code> 位于 tool message 中，必须对应某个调用的 <code>id</code>。一次返回两个 Tool Results 时，model 靠它判断哪个是时间、哪个是天气。</li>
</ul>
<p>例如用户问“新加坡现在几点，天气如何”。下面是<strong>两次 model call 完成后</strong>累积的 messages；时间和天气是说明用的模拟数据：</p>
<pre><code class="language-javascript"><span class="hljs-keyword">const</span> messages = [
  <span class="hljs-comment">// 第一次 model call：此时只发送前两条 message，以及 tools</span>
  { <span class="hljs-attr">role</span>: <span class="hljs-string">&quot;system&quot;</span>, <span class="hljs-attr">content</span>: <span class="hljs-string">&quot;查询实时信息时调用 Tool，依据结果回答。&quot;</span> },
  { <span class="hljs-attr">role</span>: <span class="hljs-string">&quot;user&quot;</span>, <span class="hljs-attr">content</span>: <span class="hljs-string">&quot;新加坡现在几点，天气如何？&quot;</span> },

  <span class="hljs-comment">// 第一次 model call 返回：model 请求调用两个 function</span>
  {
    <span class="hljs-attr">role</span>: <span class="hljs-string">&quot;assistant&quot;</span>,
    <span class="hljs-attr">tool_calls</span>: [
      {
        <span class="hljs-attr">id</span>: <span class="hljs-string">&quot;call_time&quot;</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;function&quot;</span>,
        <span class="hljs-attr">function</span>: {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;get_current_time&quot;</span>,
          <span class="hljs-attr">arguments</span>: <span class="hljs-string">&#x27;{&quot;timezone&quot;:&quot;Asia/Singapore&quot;}&#x27;</span>
        }
      },
      {
        <span class="hljs-attr">id</span>: <span class="hljs-string">&quot;call_weather&quot;</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;function&quot;</span>,
        <span class="hljs-attr">function</span>: {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;get_weather&quot;</span>,
          <span class="hljs-attr">arguments</span>: <span class="hljs-string">&#x27;{&quot;city&quot;:&quot;Singapore&quot;}&#x27;</span>
        }
      }
    ]
  },

  <span class="hljs-comment">// 框架执行 function，再把结果追加到 messages</span>
  {
    <span class="hljs-attr">role</span>: <span class="hljs-string">&quot;tool&quot;</span>, <span class="hljs-attr">tool_call_id</span>: <span class="hljs-string">&quot;call_time&quot;</span>,
    <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;{&quot;time&quot;:&quot;2026-10-25T10:30:00+08:00&quot;}&#x27;</span>
  },
  {
    <span class="hljs-attr">role</span>: <span class="hljs-string">&quot;tool&quot;</span>, <span class="hljs-attr">tool_call_id</span>: <span class="hljs-string">&quot;call_weather&quot;</span>,
    <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;{&quot;temperature_c&quot;:29,&quot;condition&quot;:&quot;cloudy&quot;}&#x27;</span>
  },

  <span class="hljs-comment">// 第二次 model call：发送上面的五条 message，以及 tools</span>
  <span class="hljs-comment">// model 看到 Tool Results 后，返回下面的最终回复</span>
  {
    <span class="hljs-attr">role</span>: <span class="hljs-string">&quot;assistant&quot;</span>,
    <span class="hljs-attr">content</span>: <span class="hljs-string">&quot;新加坡现在是上午 10:30，气温 29°C，多云。&quot;</span>
  }
];
</code></pre>
<p><strong>model 生成调用请求，框架负责实际执行。</strong> model 输出 <code>get_weather</code> 并不表示天气已经查到；只有框架执行成功、写入对应的 tool message，下一次 model call 才有查询结果可用。<a href="https://developers.openai.com/api/docs/guides/function-calling">OpenAI — Function calling</a></p>
<p>最小 Agent Loop 就是重复以下过程：</p>
<pre><code class="language-python"><span class="hljs-comment"># 示意代码：省略 API、异常处理和权限检查的具体实现</span>
<span class="hljs-keyword">while</span> <span class="hljs-literal">True</span>:
    reply = call_model(messages=messages, tools=tools)
    messages.append(reply)

    <span class="hljs-keyword">if</span> <span class="hljs-keyword">not</span> reply.tool_calls:
        <span class="hljs-keyword">break</span>

    <span class="hljs-keyword">for</span> call <span class="hljs-keyword">in</span> reply.tool_calls:
        args = json.loads(call.function.arguments)
        result = execute(call.function.name, args)
        messages.append({
            <span class="hljs-string">&quot;role&quot;</span>: <span class="hljs-string">&quot;tool&quot;</span>,
            <span class="hljs-string">&quot;tool_call_id&quot;</span>: call.<span class="hljs-built_in">id</span>,
            <span class="hljs-string">&quot;content&quot;</span>: serialize(result)
        })
</code></pre>
<p>用户继续问“那东京呢”，框架就再追加一条 user message，重新进入循环。普通无状态调用需要重新提交所需历史；由服务端管理 conversation 的 API 则由服务端恢复历史。无论历史保存在哪里，model 都要在本次 Context 中看到相关内容，才能使用它。</p>
<p><strong>Context Engineering 就是在每轮调用前管理这些输入：添加新结果、读取缺失资料、保留有效历史、移出无关内容。</strong> 例如修复代码时，<code>read_file</code> 返回的函数、<code>run_tests</code> 返回的错误会成为新的 tool messages；旧的大段日志可以稍后压缩，但用户要求“保持 public API 不变”必须继续可见。这个 messages 视角也对应原文对 Agent Loop 的解释。<a href="https://bojieli.github.io/ai-agent-book/astro/book/chapter2/">李博杰 — Context Engineering</a></p>
<h3 id="kv-cache-prompt-cache">KV Cache / Prompt Cache</h3>
<p>model 不直接对 JSON 对象做 Attention。API 会把 messages、Tool definitions 等组织为 model 使用的 token 序列，再执行 inference。</p>
<p>理解 <strong>KV Cache</strong>，先看 Attention 中的三个量。它们都是 model 在各层计算得到的向量：</p>
<ul>
<li><strong>Query</strong>：当前 token 用来与已有信息匹配的表示。</li>
<li><strong>Key</strong>：每个历史 token 用来参与匹配的表示。</li>
<li><strong>Value</strong>：每个历史 token 提供的信息表示。Query 与 Keys 算出权重，再按权重组合 Values。</li>
</ul>
<p>在标准 Causal Attention 中，历史 token 看不到未来 token，因此新增内容不会改变先前已经算好的 Key/Value。把这些数值留下来，下次直接使用，就是 KV Cache。</p>
<p>一次生成通常分为两个阶段：</p>
<ol>
<li><strong>Prefill</strong>：处理输入 tokens，计算它们的表示并建立 KV Cache。</li>
<li><strong>Decode</strong>：逐个生成输出 token。新 token 被送回 model 后，计算它的 Query/Key/Value，复用历史 K/V，并把新的 K/V 加入 Cache。</li>
</ol>
<p><strong>KV Cache 省掉历史表示的重复计算；新的 Query 仍然需要访问历史 K/V。</strong> 因此即使有 Cache，较长的历史仍然带来 memory 和 Attention 开销。<a href="https://huggingface.co/docs/transformers/main/cache_explanation">Hugging Face — How caching works</a></p>
<p><strong>Prompt Cache</strong> 进一步把相同 Prefix 的计算跨请求复用。以下 10,000 tokens 是假设值：</p>
<pre><code class="language-text">Request A:
[固定 instructions][10,000-token API manual][怎样创建订单？]

Request B:
[固定 instructions][10,000-token API manual][怎样取消订单？]
|------------ reusable prefix ------------|
</code></pre>
<p>Request A 处理过 manual 后，如果服务端仍保留它的 Cache，且 model、Prefix 和缓存边界等条件满足，Request B 就可以复用相同部分的 Prefill。第二个问题及其回答仍要计算。这种机制也称 <strong>Prefix Caching</strong>。<a href="https://docs.vllm.ai/en/latest/features/automatic_prefix_caching/">vLLM — Automatic Prefix Caching</a></p>
<p>如果把问题放到最前面，两个请求从问题处就不同，后面的 manual 也不再处于同一个 Prefix。相同文本出现在不同前文之后，不能直接当作相同 KV states 使用。</p>
<p>三者要分清：</p>
<table>
<thead>
<tr>
<th>Mechanism</th>
<th>保留或复用什么</th>
<th>对上面例子的作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>KV Cache</td>
<td>已计算的 Key/Value</td>
<td>生成回答时复用先前 tokens 的表示</td>
</tr>
<tr>
<td>Prompt Cache</td>
<td>相同 Prefix 的计算状态</td>
<td>第二次提问复用 manual 的 Prefill</td>
</tr>
<tr>
<td>Context Compression</td>
<td>用更短内容替换或移除部分输入</td>
<td>把 manual 换成相关章节或 Summary</td>
</tr>
</tbody>
</table>
<p><strong>Cache Hit 不会把 manual 从 Context Window 中删掉，也不会直接返回上一次的答案。</strong></p>
<h3 id="prompt-engineering">Prompt Engineering</h3>
<p><strong>Prompt Engineering 是把“要做什么、必须遵守什么、怎样算完成”写成明确的 instructions。</strong> 在上面的 Loop 中，它决定 model 何时调用 Tool、如何使用结果、什么时候可以结束。</p>
<p>例如“修一下支付 bug”没有告诉 Agent 什么行为是错的，也没有说明怎样验证。可以改成：</p>
<pre><code class="language-text">Task:
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
</code></pre>
<p>这里的每句话对应一个可观察行为：读取什么、不能改变什么、必须检查什么。具体采用哪种修复方案，仍由 Agent 根据代码决定。</p>
<p><strong>Zero-shot</strong> 只给要求，不给示范；<strong>Few-shot</strong> 额外提供少量 input → output，让 model 看清规则的边界。例如 issue classification：</p>
<pre><code class="language-text">“点击保存返回 500”     → bug
“希望支持导出 CSV”     → feature_request
“现在支持导出 CSV 吗”  → question
</code></pre>
<p>最后两条都提到 CSV，但一个请求新能力，一个询问现有能力。这样的 example 解释了分类规则，比重复写“请准确分类”具体。</p>
<p>如果结果交给程序消费，可以使用 <strong>Structured Outputs</strong>：通过 API 的 JSON Schema 约束字段和类型。例如只允许输出一个 <code>label</code>，其值必须属于 <code>bug / feature_request / question</code>。这解决结构可解析的问题；选错 label 仍然是内容错误，需要单独验证。<a href="https://developers.openai.com/api/docs/guides/structured-outputs">OpenAI — Structured Outputs</a></p>
<h3 id="context-compression">Context Compression</h3>
<p>每次 Tool call 都向 messages 添加内容，历史会越来越长。<strong>Context Compression 是减少下一轮需要携带的内容，同时保留继续任务所需的信息。</strong></p>
<p>最简单的做法是 <strong>Truncation</strong>：直接删除最早的 messages。问题是最早的 user message 可能包含目标和 constraints，删掉后 Agent 可能继续写代码，却忘了用户要求兼容旧接口。</p>
<p>更常见的组合是：</p>
<ul>
<li><strong>Tool Result Clearing</strong>：移出不再需要的旧 Tool Results。例如 test 的完整输出已经保存到文件，后续只保留失败项和日志路径。</li>
<li><strong>Compaction</strong>：把较长的历史整理成较短的状态，代替旧历史参与下一轮调用。</li>
<li><strong>External Memory + Retrieval</strong>：完整原文留在文件或数据库中，Context 保留必要内容和位置，需要时重新读取。</li>
</ul>
<p>例如同一修复任务读了十个文件、运行了多次 tests，Compaction 后可以保留下面的 Checkpoint：</p>
<pre><code class="language-yaml"><span class="hljs-attr">goal:</span> <span class="hljs-string">同一</span> <span class="hljs-string">payment</span> <span class="hljs-string">event</span> <span class="hljs-string">只能入账一次</span>
<span class="hljs-attr">constraint:</span> <span class="hljs-string">保持</span> <span class="hljs-string">public</span> <span class="hljs-string">API</span> <span class="hljs-string">不变</span>
<span class="hljs-attr">decision:</span> <span class="hljs-string">以</span> <span class="hljs-string">event_id</span> <span class="hljs-string">建立</span> <span class="hljs-string">database</span> <span class="hljs-string">unique</span> <span class="hljs-string">constraint</span>
<span class="hljs-attr">failed_attempt:</span> <span class="hljs-string">先查再写无法阻止</span> <span class="hljs-string">concurrent</span> <span class="hljs-string">requests</span>
<span class="hljs-attr">verified:</span> <span class="hljs-string">sequential</span> <span class="hljs-string">duplicate</span> <span class="hljs-string">test</span> <span class="hljs-string">已通过</span>
<span class="hljs-attr">pending:</span> <span class="hljs-string">concurrent</span> <span class="hljs-string">duplicate</span> <span class="hljs-string">test</span> <span class="hljs-string">尚未运行</span>
<span class="hljs-attr">evidence:</span>
  <span class="hljs-bullet">-</span> <span class="hljs-string">tests/test_payment_callback.py</span>
  <span class="hljs-bullet">-</span> <span class="hljs-string">work/payment-test.log</span>
<span class="hljs-attr">next:</span> <span class="hljs-string">运行</span> <span class="hljs-string">concurrent</span> <span class="hljs-string">test，检查</span> <span class="hljs-string">transaction</span> <span class="hljs-string">rollback</span>
</code></pre>
<p>这是说明用状态。与“改了代码，运行了测试”相比，它明确告诉下一轮什么已验证、什么还没做、失败方案为什么失败，以及到哪里找原始证据。</p>
<p>应用自己管理历史时，可以组织成：</p>
<pre><code class="language-text">[固定 instructions]
[Checkpoint]
[仍在使用的 recent messages，保留完整 Tool call / result 配对]
[新的 user message 或 Tool Result]
</code></pre>
<p>Summary 会丢信息，尤其容易丢掉精确 ID、用户纠正和失败原因。因此需要保护这些字段，并保留原文的读取入口。Provider 的 native Compaction 可能返回专用 items，不能直接套用这份文本布局。</p>
<h3 id="skill">Skill</h3>
<p><strong>Skill 是一份可复用的任务操作说明，以及执行时要用的文件。</strong> 它回答“遇到这一类任务应该怎样做”。Tool 则提供具体操作，例如读取 PDF、运行 Python、写文件。</p>
<p>以 invoice field extraction 为例，Skill 可以组织为：</p>
<pre><code class="language-text">invoice-extraction/
├── SKILL.md
├── references/field-rules.md
├── scripts/validate_invoice.py
└── assets/output-schema.json
</code></pre>
<p><code>SKILL.md</code> 的最小写法：</p>
<pre><code class="language-markdown">---
name: invoice-extraction
<span class="hljs-section">description: 提取 invoice PDF 中的 invoice number、currency 和 total，输出 JSON。
---</span>

<span class="hljs-bullet">1.</span> 读取 references/field-rules.md，确认字段含义。
<span class="hljs-bullet">2.</span> 读取 PDF；没有可用文本时再执行 OCR。
<span class="hljs-bullet">3.</span> 按 assets/output-schema.json 生成 output.json。
<span class="hljs-bullet">4.</span> Schema 将缺失字段定义为 nullable；找不到时写 null，不自行推算。
<span class="hljs-bullet">5.</span> 用 scripts/validate<span class="hljs-emphasis">_invoice.py 检查 output.json。
6. 返回结果及无法确认的字段。
</span></code></pre>
<p><code>name</code> 和 <code>description</code> 让 Agent 判断是否适用；正文写执行步骤；<code>references</code> 放详细规则；<code>scripts</code> 放可以重复执行的程序；<code>assets</code> 放 Schema、模板等资源。目录规范要求 <code>SKILL.md</code>，其余目录按需要添加。<a href="https://agentskills.io/specification">Agent Skills specification</a></p>
<p>用户要求处理 invoice 时，Agent 读取这份说明，再通过已有 Tools 读取 PDF、运行 script。<strong>Skill 本身不会自动执行，也不会改变 model weights；Agent host 还必须提供读取文件和执行程序的能力。</strong></p>
<h2 id="insight">Insight</h2>
<h3 id="context-engineering-按需读取也扩展到了-tool-definitions">Context Engineering：按需读取也扩展到了 Tool definitions</h3>
<p><strong>资料先保留位置，需要时再读取正文。</strong> Anthropic 的 Just-in-time Retrieval 实践让 Agent 先持有 file path、query 等入口，再根据当前任务读取内容。例如修复 <code>payment/callback.py</code> 时，先 search 定位 handler，再读函数和相关 tests；无需在第一次调用时放入整个 repository。这个做法节省常驻 Context，但会增加读取步骤，因此项目说明等频繁使用的小文档仍适合预加载。<a href="https://www.anthropic.com/research/effective-context-engineering-for-ai-agents">Anthropic — Context Engineering</a></p>
<p><strong>Tool definitions 也不必一次性全部放入。</strong> 当前 OpenAI Tool Search 支持将 function 标为 <code>defer_loading: true</code>。Agent 先发现相关 Tool，再加载其完整定义；对单个 deferred function，name 和 description 仍可见，主要延迟加载 parameter schema。新发现的 Tools 从 Context 后部加入，避免反复改写前面的 Prefix。<a href="https://developers.openai.com/api/docs/guides/tools-tool-search">OpenAI — Tool search</a></p>
<p>例如系统有 CRM、calendar、repository 三组 Tools，用户只要求检查订单，先加载相关 CRM functions 就够了。由此得到的 Method 是：<strong>把常用小集合直接提供，把大目录做成可搜索的能力目录；同时测是否找得到正确 Tool，以及额外 search 的 latency。</strong></p>
<h3 id="kv-cache-prompt-cache-从保持-prefix-稳定-到诊断和减少-kv-开销">KV Cache / Prompt Cache：从保持 Prefix 稳定，到诊断和减少 KV 开销</h3>
<p><strong>先检查请求哪里变了，再判断为什么没有 Cache Hit。</strong> 固定 instructions、Tool Schema 的顺序和 serialization；timestamp、当前任务状态等可变内容放到后面的相应 message 中。Manus 的公开实践强调 stable prefix 与 append-only history，因为改写较早内容会使后续 Prefix 无法照原样复用。<a href="https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus">Manus — Context Engineering</a></p>
<p>当前 OpenAI 已提供 <strong>Prompt Cache Diagnostics</strong>，可以把本次请求与之前的 response 比较，定位 model、Tools、settings 或 input 的变化。例如仅修改 function name，也值得检查实际请求是否因此改变。它提供诊断信息，不会自动恢复旧 conversation 或修复 Cache。<a href="https://developers.openai.com/api/docs/guides/prompt-caching/diagnostics">OpenAI — Prompt cache diagnostics</a></p>
<p><strong>模型层也在减少保存和搬运 KV 的开销。</strong> DeepSeek-V4.1-Flash Technical Report（2026-09）针对 input-heavy 的 Agent workload 提出 CSA2：部分层复用前面层的 main KV，避免每层都保存独立的一套；main KV 使用 FP4，以更低精度存储数值。这说明长任务的成本不仅是“算了多少 tokens”，还包括“KV 占多少空间、需要搬运多少数据”。这是报告中的架构设计，不能等同于应用层的 Summary。<a href="https://arxiv.org/html/2609.19969v1">DeepSeek-V4.1-Flash Technical Report，§2–3</a></p>
<p>应用侧应同时记录 <strong>input tokens、cached tokens、TTFT 和 task success</strong>。TTFT 是请求发出到首个输出 token 的时间。如果为了维持 Cache Hit 一直保留无用历史，总成本未必更低；做过 Compaction 后，即使需要重建部分 Cache，后续更短的输入也可能抵消这次开销。</p>
<h3 id="prompt-engineering-明确完成标准-用失败样本修改-prompt">Prompt Engineering：明确完成标准，用失败样本修改 Prompt</h3>
<p><strong>Reasoning Model 不需要默认加上“think step by step”。</strong> OpenAI 当前教程建议从直接、清晰的 Zero-shot instructions 开始，再按任务需要加入 examples。支付修复示例中的三类 test case，比要求“认真思考”更能定义任务是否完成；它们规定外部验证，不要求 model 展示完整内部 reasoning。<a href="https://developers.openai.com/api/docs/guides/reasoning-best-practices">OpenAI — Reasoning best practices</a></p>
<p><strong>Few-shot 是否有用，要用目标 model 和目标任务验证。</strong> Gemini 的教程建议用 examples 表达模式；DeepSeek-R1 的 Technical Report（2025）则报告了该 model 在相关评测中 Few-shot 表现下降的现象。这些结果不能互相替代。实用做法是保留一组未用于编写 Prompt 的测试输入，对比 Zero-shot 与 Few-shot 的分类错误，特别看“功能请求 / 功能询问”这样的边界案例。<a href="https://ai.google.dev/gemini-api/docs/prompting-strategies">Gemini — Prompting strategies</a> <a href="https://arxiv.org/html/2501.12948v1">DeepSeek-R1 Technical Report</a></p>
<p><strong>把 Prompt 当作需要回归验证的配置。</strong> 记录真实失败，再针对失败修改一条 instruction 或一个 example；比较修改前后的 task success、Tool 使用和成本。例如输出格式错，就调整 Schema；缺少证据，就调整 Retrieval；已经查到正确金额但算错 total，就交给程序计算。不能把所有问题都归结为 Prompt 不够长。OpenAI 的 Evals 教程也强调真实任务样本和持续回归。<a href="https://developers.openai.com/api/docs/guides/evaluation-best-practices">OpenAI — Evaluation best practices</a></p>
<h3 id="context-compression-恢复工作比缩短文本更重要">Context Compression：恢复工作比缩短文本更重要</h3>
<p><strong>Long Context 能装下记录，不等于 Agent 能一直正确使用记录。</strong> Gemini 2.5 Technical Report（2025）的 Pokémon Agent 案例中，作者观察到 Context 显著超过 100k tokens 后更容易重复历史动作。报告将其限定为 anecdotal observation，不能把 100k 当作其他 model 的通用阈值。它提示我们需要测试长任务中的重复行为和进度恢复，而不只测试是否能找到某个事实。<a href="https://arxiv.org/html/2507.06261v3#S4.SS1">Gemini 2.5 Technical Report，§4.1</a></p>
<p>Anthropic 的 long-running Agent harness 使用 progress file、feature list 和 Git history 帮助新 session 恢复。对上面的代码修复任务，可以把已验证项与 pending items 写入进度文件，完整 diff 和 logs 保存在原位置；恢复时检查文件状态，再继续 pending test。<strong>Compaction 的验收应该包括：是否漏掉 constraints、是否重复失败方案、是否把未验证的改动误认成完成。</strong><a href="https://www.anthropic.com/research/effective-harnesses-for-long-running-agents">Anthropic — Effective harnesses</a></p>
<p><strong>Native Compaction 的结果必须按 API 协议续接。</strong> 当前 OpenAI 的 standalone <code>/responses/compact</code> 返回一个 compacted window，可能同时包含 encrypted compaction item 和保留下来的其他 items。下一次请求应保留完整 <code>compacted.output</code>，不能只摘取其中的 compaction item：</p>
<pre><code class="language-python"><span class="hljs-comment"># 流程示意：selected_model 必须支持对应接口</span>
compacted = client.responses.compact(
    model=selected_model,
    <span class="hljs-built_in">input</span>=history,
)

response = client.responses.create(
    model=selected_model,
    <span class="hljs-built_in">input</span>=[*compacted.output, new_user_message],
)
</code></pre>
<p>其中 opaque item 不是给应用手工编辑的普通 Summary。若使用 server-side Compaction 或 <code>previous_response_id</code>，应遵循各自的续接规则。Claude 也提供 on-demand 与 threshold Compaction，但返回内容和历史处理规则不同，不能混用。<a href="https://developers.openai.com/api/docs/guides/compaction">OpenAI — Compaction</a> <a href="https://platform.claude.com/docs/en/build-with-claude/compaction">Claude — Compaction</a></p>
<h3 id="skill-分层加载-并分别验证选择和执行">Skill：分层加载，并分别验证选择和执行</h3>
<p><strong>Progressive Disclosure 让 Skill 按三层逐步加载。</strong> 开始只提供 metadata；匹配任务后读取 <code>SKILL.md</code>；执行到具体步骤时再读取 references 或使用 scripts。比如 invoice Skill 不需要在处理每张票据前加载所有国家的 tax rules，遇到相关字段时再读对应文件。script 可以直接运行并返回检查结果，不必先把全部源码放进 Context。<a href="https://agentskills.io/specification">Agent Skills specification</a></p>
<p>这一模式已经进入 Provider 的原生实现。当前 OpenAI Skills 文档支持 versioned bundles；在其 Responses API shell tools 中，model 先看到 Skill 的 name、description 和 path，再按 path 读取完整 instructions。部署时固定经过验证的 version，可以避免同一个 Agent 因 Skill 内容更新而悄悄改变行为。<a href="https://developers.openai.com/api/docs/guides/tools-skills">OpenAI — Skills</a></p>
<p><strong>Skill 要分别验证 Routing 和 Execution。</strong> Routing 是用户的任务能否选中正确 Skill；Execution 是选中后能否按步骤得到正确结果。例如：</p>
<pre><code class="language-text">“提取 invoice number 和 total”
→ 应选择 invoice-extraction

“总结这篇研究论文 PDF”
→ 不应只因为文件也是 PDF 就选择 invoice-extraction

选中之后：
读取 field rules → 生成 output.json → 运行 validation
</code></pre>
<p>如果第一类失败，修改 description 的适用条件；如果第二类执行失败，检查正文、resources 和 scripts。能确定性检查的字段类型、required fields 和金额格式交给 script；需要识别页面内容的部分交给 model。Anthropic 的 Skill authoring 教程建议从真实失败建立 Evals，再补 instructions，避免只用“Skill 已加载”判断有效。<a href="https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices">Anthropic — Skill authoring best practices</a></p>
1:["$","main",null,{"id":"main","tabIndex":-1,"children":[["$","a",null,{"className":"back-link","href":"/notes/","children":["← ","Notes"]}],["$","article",null,{"children":[["$","header",null,{"className":"note-header","children":[["$","h1",null,{"children":"Agent Loop"}],["$","time",null,{"dateTime":"2026-10-20","children":"2026.10.20"}]]}],false,["$","div",null,{"className":"prose","dangerouslySetInnerHTML":{"__html":"$e"}}]]}]]}]
