---
title: "Agent Loop：从闭环决策到开源实现"
date: "2026-10-20"
description: "从控制流、动作粒度、反馈时机与状态表示出发，比较 mini-SWE-agent、OpenHands、Pi、Codex CLI、Gemini CLI、OpenCode，以及 LangGraph 与 smolagents。"
draft: false
---

让模型修改一个函数并修复测试，大致有两种做法。第一种是让它一次写出固定步骤，再按步骤执行；第二种是先让它读代码，拿到结果后决定改哪里，看到测试失败后再决定怎样修。两者都能调用工具，区别在于：**执行过程中获得的新信息，什么时候能够改变后续决策。**

Agent Loop 研究的就是这个闭环。比较开源 Agent 时，最值得看的也不是工具数量，而是控制权如何在模型、运行时和环境之间流动：谁选择下一步，一次选择承诺执行多少工作，哪些事件会让系统继续、暂停或结束。

本章选取 Codex CLI、Gemini CLI、OpenCode、Pi、OpenHands SDK，并用 mini-SWE-agent 作为最小实现的参照；另以 LangGraph 和 smolagents 说明控制图与动作语言两个不同维度。源码固定到 2026 年 10 月 20 日核查的提交，具体版本见文末。

## 一、一个 Loop 实际在循环什么

### 1.1 模型选择动作，运行时推进执行

对一次普通的工具交互，可以用下面的抽象描述：

$$
c_t=C(S_t),\qquad a_t\sim\pi_\theta(\cdot\mid c_t)
$$

$$
(x_{t+1},o_{t+1})=\mathcal E(x_t,D(a_t))
$$

$$
S_{t+1}=U(S_t,a_t,o_{t+1})
$$

这里，$x_t$ 是环境状态，例如仓库文件、进程和外部服务；$S_t$ 是运行时保存的状态，例如消息、待执行动作、计数器与队列；$c_t$ 是本次实际送给模型的上下文。模型策略 $\pi_\theta$ 生成动作表示 $a_t$，调度器 $D$ 将它变成可执行操作，环境 $\mathcal E$ 返回观察 $o_{t+1}$，更新函数 $U$ 再把结果纳入下一步。

这几个对象不能混在一起。模型输出一条 `run_tests` 调用，不意味着测试已经运行；工具运行结束，也不意味着结果已经进入下一次模型请求。**模型负责提出动作，运行时负责让动作发生，并决定何时再次调用模型。**

上述公式只画出了正常的工具反馈路径。实际程序还有文本回复、等待用户、取消、重试等分支。它们都在改变同一个问题的答案：当前状态下，下一次允许发生什么？

### 1.2 闭环的核心是反馈进入决策

ReAct 把语言推理、行动与环境观察交织起来，使新观察能够影响后续计划。[\[1\]][1] 它提供的是一种交互范式。今天的实现可以用原生 tool calls 表达动作，也可以让推理发生在模型内部；公开输出一段 `Thought:` 不是构成 Loop 的必要条件。

反过来，源文件里出现 `while True` 也不足以说明系统在做闭环决策。如果循环只是机械执行一张既定任务表，而中途观察不会改变动作选择，那么它主要承担执行器的角色。只有观察重新进入选择过程，反馈回路才闭合。

代码任务尤其适合用部分可观测的视角理解。模型只读到搜索命中的几个片段，并没有看到整个仓库；一条成功退出的测试命令，也只揭示了环境的部分性质。因此，上下文 $c_t$ 是对历史信息的一种选择性表示，并不是环境 $x_t$ 的完整副本。

这也解释了搜索、测试和询问的作用：有些动作主要改变环境，有些动作主要减少不确定性。读一个调用点也许没有修改任何文件，却可能让下一步修改完全不同。把“有价值的行动”只理解为写代码，会漏掉 Agent Loop 中的信息获取过程。

### 1.3 三种时间尺度

阅读源码时，至少要分清三个单位：

| 单位 | 它描述什么 |
| --- | --- |
| 模型调用 | 一次输入上下文到一次模型响应 |
| 工具动作 | 一次命令、文件编辑、检索，或一段程序的执行 |
| 用户轮次 | 从接到用户输入，到把控制权交回用户的一段工作 |

它们没有固定的一一对应关系。一次模型响应可以包含多个工具动作，一段生成的程序内部又可以调用许多工具；一个用户轮次可以包含很多次模型调用。

项目里的 `step`、`turn`、`iteration` 还可能另有定义。OpenHands 的一次 `Agent.step()` 可以只处理此前待执行的动作；OpenCode 的一个逻辑 step 可以包含重试。因此，“两个 Agent 都用了十步”并不能直接说明它们消耗了相同计算，甚至不能说明它们获得了相同次数的环境反馈。

## 二、ReAct、规划与搜索，改变的是哪个部分

### 2.1 ReAct：每次得到新观察，再选择下一步

最直接的闭环是：

```text
模型选择动作 → 执行 → 观察 → 模型重新选择动作
```

它把很多决策留到运行时。例如，测试失败以后，下一步可能是修代码，也可能是补依赖、修测试，或者重新理解需求。外部世界尚不清楚时，这种逐次决策保留了调整空间。

代价是每个需要重新判断的边界都可能引入一次模型调用。若后续操作本来就是确定的，逐项询问模型就会把可以交给程序的工作重新语言化。

这里的“反应式”也不等于没有规划。模型可以在上下文中维护长计划，但只提交当前动作。**计划的存在，与控制流是否由计划执行器掌管，是两回事。**

### 2.2 Plan–Execute：提前决定结构，延后填入结果

ReWOO 提供了一个有用的对照：Planner 先生成带依赖的计划，Worker 执行工具并填充证据变量，Solver 最后结合计划和证据生成答案。[\[2\]][2]

例如，第二步可以引用第一步产生的 `#E1`，而不必在第一步完成后再调用规划模型来构造第二步。**数据依赖并不自动意味着一次新的模型决策。**

这个区别比“先规划还是不规划”更准确。若第一步只是查询一个已知 API 的资源 ID，第二步用该 ID 获取详情，提前写好依赖关系很自然；若新结果要求选择预先计划及其条件分支之外的路线，就需要一个返回规划器的边。加入这条边之后，Plan–Execute 自身也可以形成闭环。

所以，规划与反应不是互斥的产品类别，而是两种分配决策时间的方式：哪些事情现在决定，哪些事情等观察到来后再决定。

### 2.3 搜索式 Loop：保留多个候选状态

Tree of Thoughts 把中间推理组织成可评价、可扩展和可回退的候选状态。[\[3\]][3] 与沿着一条历史不断前进相比，搜索式控制器还需要维护候选集合、选择规则和分支预算。

这不等于让同一个 Agent 多试几次。若系统没有保存候选状态，也没有显式选择和回溯机制，几轮失败后的重试仍然可能只是单条轨迹上的继续执行。

对代码 Agent，还有一个更实际的限制：文本中的回退不自动撤销环境中的动作。要比较两个修改方案，就必须明确它们是否使用独立工作区，测试依据哪个版本，以及选中一条分支后怎样处理另一条分支的副作用。这是把搜索算法落实到可变环境时新增的语义。

## 三、六个开源实现怎样安排闭环

### 3.1 mini-SWE-agent：把控制骨架压到消息循环

mini-SWE-agent 的 `DefaultAgent.step()` 非常直接：

```python
def step(self) -> list[dict]:
    return self.execute_actions(self.query())
```

它的外层 `run()` 初始化消息并反复调用 `step()`；`query()` 检查限制后把累计消息交给模型，`execute_actions()` 执行动作，再由模型适配器把观察转换成消息。[\[4\]][4]

在本文核查的 v2.4.6 中，原生工具调用路径提供 `bash`，一条响应可以含多个动作，核心执行器依次执行它们。最小循环并不意味着“一次模型调用只能执行一条命令”，更不意味着环境没有状态：文件修改保留在工作区里，消息轨迹保留在 Agent 中。

这些动作虽然串行执行，动作之间并不重新调用模型。因此，第二个动作可以执行预先写好的条件逻辑，却不能在这里凭空多出一次基于第一个结果的语言决策。

它的结束协议也很明确。以本地环境为例，命令成功退出并输出约定的提交标志后，系统产生 `exit` 消息，外层循环据此停止。这表达的是“Agent 提交了结果”，而非“结果已被测试证明正确”。[\[4a\]][4a]

这个实现适合作为参照，因为模型、环境与反馈之间几乎没有多余的控制层。它也让信息组织的选择直接显现出来：默认核心累积消息，未在这里实现历史压缩。如果任务变长，需要另行决定怎样构造下一次上下文。

### 3.2 OpenHands SDK：会话控制与动作决策分开

OpenHands SDK 将外层生命周期交给 `Conversation.run()`，由它处理运行、暂停、等待确认、结束和错误等状态；内层 `Agent.step()` 负责推进一次 Agent 工作。[\[5\]][5]

两层分工使 `step()` 的含义更宽。它可能执行此前留下的待处理动作，可能应用一次上下文压缩，也可能正常调用模型并执行返回的动作批次。因此，外层的一次迭代不必对应一次新的行动决策。[\[5a\]][5a]

状态表示也是它与 mini-SWE-agent 的重要区别。模型生成的工具调用会成为 `ActionEvent`，结果成为对应的 `ObservationEvent`；系统保留事件记录，再从事件构造模型可见的视图。配置 condenser 时，可以隐藏旧事件并插入摘要，同时保留原始日志。[\[5b\]][5b]

从前面的抽象看，OpenHands 把 $S_t$ 与 $C(S_t)$ 显式分开了：**系统记得的事情，多于这一次模型看到的事情。** 这种设计给暂停、恢复、事件订阅和视图变换提供了明确位置，同时也增加了需要理解的状态转移。本文讨论的是新 SDK，而不是旧版 `AgentController`。

### 3.3 Pi：两层循环，处理两种输入时机

Pi 的核心有内外两层循环。内层处理工具反馈和 steering；当这一轮本来要结束时，外层再检查 follow-up。[\[6\]][6]

这里的两层循环并不表示两个推理层级。它们解决的是用户输入何时进入模型的问题：steering 用于调整正在进行的工作，follow-up 用于接续本轮之后的工作。模型仍然是在每次调用时依据当前上下文生成下一条响应。

在本文快照中，Pi 先等完整 assistant response，再执行其中的工具批次；steering 要等本批工具全部完成后，才在下一次模型调用前注入，不会跳过这一批剩余的工具。当前工具执行默认可并行，工具也可以要求整批顺序执行。[\[6a\]][6a] [\[6b\]][6b]

这里可以看到两个容易混淆的边界。用户能够“中途输入”，不意味着已经发出的模型请求会被改写；工具能够“并行执行”，也不意味着模型能够在同一批里读到第一个工具结果后再重新选择第二个工具。

Pi 将核心 Loop 做成可嵌入组件，而把压缩等策略放到上层会话及 hooks 中。因此，核心文件精简并不意味着完整应用没有上下文管理。[\[6c\]][6c]

### 3.4 Codex CLI：将续跑条件集中到一次用户轮次

Codex CLI 的 core 通过 `run_turn` 组织一次用户轮次，其中可以包含多次模型采样。每一步结束后，它综合模型的续跑信号与 pending input 决定是否继续；原本可以结束时，stop hook 也可能提供新的继续原因。[\[7\]][7] [\[7d\]][7d]

这说明停止权并不完全属于模型。模型没有再请求工具，只是一个信号；运行时还要判断是否有尚未交给模型的输入，以及结束策略是否允许交回控制权。一个持久 session 则可以在这次 turn 结束后继续承载后面的用户轮次。

Codex 还为每次采样建立 step 快照，固定该请求使用的模型设置、工具路由与环境信息。[\[7a\]][7a] 这解决的是一致性问题：本次模型看到的工具，与运行时随后解释它的调用时使用的工具定义，应当对应。

在工具执行上，完整工具 item 到达后可以开始 dispatch，与后续模型流重叠；同步 post-model hook 等路径会延后执行。工具是否允许并行由 registry 显式声明，结果再按受控顺序写回历史。[\[7b\]][7b] [\[7c\]][7c] 因此，模型选择一批动作、运行时安排这批动作、下一步模型读到结果，是三个相互衔接的过程。

### 3.5 Gemini CLI：模型流与工具反馈循环分层

Gemini CLI 当前默认路径把职责分到不同层：core 的 `Turn.run` 处理一次逻辑模型响应，将流转成内容、工具请求等事件；CLI 外层再调用 scheduler，并把工具结果作为 continuation 送回 core。[\[8\]][8] [\[8c\]][8c]

所以，Gemini 的这个 `Turn` 与 Codex 的用户 turn 不是同一个粒度。它们最终都能完成工具反馈闭环，但循环“闭合在哪里”不同：Codex 主要在 core 内组织完整工作轮次，Gemini 的默认路径需要 core、CLI 与调度器共同完成。

默认交互路径会先收完整次模型流，再调度工具批次。[\[8a\]][8a] scheduler 将连续可并行的调用组成一个 wave；编辑工具等构成边界，其他调用还可以用 `wait_for_previous` 表达等待要求。[\[8b\]][8b] [\[8e\]][8e] 这是一套明确的调度政策，不能简单概括为“所有工具串行”或“只读工具才并行”。

源码也保留了 next-speaker checker 等额外继续判定，但它默认跳过；本文比较的是默认 `GeminiClient + CLI Scheduler` 路径。[\[8d\]][8d] 一个可选分支的存在，不应被画成所有请求都必经的节点。

### 3.6 OpenCode：流式执行与逻辑 step 分离

OpenCode 的当前实现由会话执行器消费 inbox，再反复推进逻辑 step。step 内部还可以因错误或压缩进入新的 attempt，因此一个 step 不一定只有一次模型请求。[\[9\]][9]

与 Pi 等完整响应后执行工具不同，OpenCode 在收到一个**已经完整形成的 tool-call 事件**后，就可以启动对应工具，此时模型流可能仍在继续。它最终等待工具结束，再结算这一轮并决定是否继续。[\[9a\]][9a]

这个差异改变的是时间安排。若前面的工具已经可以开始工作，等待后续文本结束可能是一段空闲；流式启动允许两者重叠。另一方面，流后半段失败时，运行时必须处理已经启动的动作。它既要记录“请求失败”，也要保存“哪些动作已经发生”。

![两种调度方式：完整响应后启动工具，与完整工具调用到达后启动工具；两者都在后续决策前汇合工具结果。](/notes/agent-loop/scheduling.svg)

图中只比较调度边界，条形长度不代表实测耗时。Pi 与 Gemini 的上述路径属于第一种；OpenCode 以及满足执行条件的 Codex 路径允许第二种。

因此，流式显示、流式启动工具和边得到结果边重新规划，是三件不同的事。OpenCode 的这条路径支持前两者，下一次模型决策仍然要经过工具完成的边界。这里描述的是源码所允许的重叠，不是实测速度排名。

## 四、LangGraph 与 smolagents：两个正交的设计维度

前面的项目主要回答一个具体 Agent 怎样运行。LangGraph 与 smolagents 则适合帮助我们拆开另外两个问题：**控制转移怎样表达，以及模型的一次动作能表达多少程序。**

### 4.1 LangGraph：把控制转移变成显式图

LangGraph 不规定所有 Agent 都必须使用同一种 Loop。节点可以调用模型、执行工具或运行普通函数；边和路由函数决定下一步去哪。一个简单的工具循环可以表示为：

```text
START → model
          ├─ 有工具调用 → tools → model
          └─ 返回结果   → END
```

如果需要强制经过某个验证阶段，可以把 `verify` 写成必经节点；如果需要失败后重新规划，可以为失败结果增加返回 `planner` 的边。模型仍可参与路由，但允许它选择哪些路线，由图结构和路由程序共同限定。

底层 Pregel 运行时按 superstep 推进：先确定本轮可运行的节点，再执行它们，最后更新 channels；同一 superstep 的写入在下一步才对节点可见。[\[10\]][10] 这里的调度阶段叫 `Plan`，指的是运行时选择节点，并不意味着每一轮都调用一个 LLM Planner。

这种结构把一部分控制知识写进程序。例如，“结果必须经过验证节点”可以成为流程约束；代价是设计者要维护状态结构、分支条件和并发更新的合并规则。图中的节点也可以嵌入一个自由工具循环，所以图编排与模型自主选择动作可以同时存在。

### 4.2 smolagents：动作语言决定反馈粒度

smolagents 的 `ToolCallingAgent` 与 `CodeAgent` 共享多步循环，但动作表示不同：前者产生结构化工具调用，后者产生交给 Python 执行器运行的代码。[\[11\]][11]

假设任务需要读取十个文件，再对结果做统计。结构化工具调用可以一次提交十个独立读取请求；代码动作则可以在一段程序里表达读取、过滤、循环和汇总。两者都可能减少模型调用，但代码能够在一次模型决策内部表达依赖关系和局部控制流。

这时，$a_t$ 就不再只是一个原子动作，而是一段小程序。程序中的 `if`、`for` 可以根据运行结果继续执行，期间不必重新调用语言模型。**程序内部的条件控制，与模型在收到观察后重新决策，构成了不同尺度的闭环。**

代价也由此而来。动作粒度变大后，模型通常要等这段程序返回或报错，才能利用新信息重新推理；先前已经发生的写操作也不会因为后面抛出异常而自动撤销。代码动作把更多控制流交给程序，并没有消除错误处理的需要。

当前实现还支持可选的规划间隔与最终答案检查。它们是多步循环的策略插入点，不能仅凭 `CodeAgent` 这个名字推断它必然使用独立规划器，或必然获得更少的总费用。

## 五、把差异放回同一张坐标系

下表概括的是本文选择的核心路径。控制层次与默认配置已经在前文分开，因而可以按同一组问题横向阅读。

| 实现 | 谁推进控制流 | 动作与反馈的主要边界 | 怎样交回控制权 |
| --- | --- | --- | --- |
| mini-SWE-agent | `run → query → execute_actions` | 响应中的动作依次执行，再追加观察 | 提交协议产生 `exit`，或限制与错误中止 |
| OpenHands SDK | Conversation 管生命周期，Agent 推进一步 | 事件与模型视图分离；step 可能只处理待执行动作或压缩 | 文本结束或 FinishTool 等路径进入结束状态，hook 可要求继续 |
| Pi | 工具/steering 内循环，follow-up 外循环 | 完整响应后执行工具批次；steering 在批次后进入 | 正常路径耗尽续跑条件；结束 hook、取消或错误也可终止 |
| Codex CLI | core 内的用户 turn 循环 | step 快照约束本次请求；允许工具执行与流重叠 | 综合续跑信号、pending input 和 stop hooks |
| Gemini CLI | core 模型流与 CLI scheduler 配合 | 默认路径收流后批量调度，wave 内按规则并行 | 工具反馈继续；无后续工作则结束，也受限制与 hooks 控制 |
| OpenCode | 会话执行器推进逻辑 step / attempt | 完整调用到达即可执行；工具完成后结算，inbox 在边界晋升 | 不需 continuation，且没有可晋升输入 |
| LangGraph | 图节点、边与路由函数 | superstep 执行与 channel 更新边界 | 没有可调度节点，或被中断、限制阻止 |
| smolagents | MultiStepAgent 及其动作执行器 | 结构化工具批次，或一段代码的执行结果 | `final_answer` 及可选检查；也可能达到步数上限 |

### 5.1 自主性不是单一开关

一个系统可能让模型自由选择工具，却由程序强制安排验证；也可能把任务路线固定下来，却允许某个节点内自由探索。决定自主性的至少有三个维度：**动作选择权、流程选择权、停止权。**

因此，比较一个自由工具循环与一张 LangGraph 图时，应当问哪些决策交给了模型、哪些约束由程序落实。仅说“前者是 Agent，后者是 workflow”，会遮住实际的控制权分配。

### 5.2 反馈越频繁，调整机会越多，但不一定更划算

更短的决策间隔让模型更早适应环境，但增加调用与上下文处理；更大的动作批次减少往返，却更早承诺了一段执行过程。如果新信息需要模型作出尚未编码的判断，就应在这里重新调用模型；如果已有程序逻辑足以处理，就可以继续执行。合适的边界取决于任务的不确定性，而不是工具接口采用 JSON 还是 Python。

### 5.3 并发优化时间，依赖关系决定语义

同时读取两个独立文件，通常可以并发；先编辑文件再测试该版本，则有明确依赖。一个调度器支持并发，只说明它可以让动作重叠，不自动证明这些动作彼此独立。

### 5.4 状态组织会改变模型下一步能做什么

如果两套系统使用相同模型，却给它不同的历史视图，下一步策略的输入已经不同。压缩丢掉的一个约束、没有写回的工具错误、尚未进入上下文的用户纠正，都可能改变后续行为。

所以，Agent Loop 的理论对象不只是“反复调用一个 LLM”。它是一套将**状态表示、动作语言、控制转移和观察时机**连接起来的机制。开源实现之间最有解释力的差别，正发生在这些连接处。

## 源码与论文

论文用于解释交互、规划与搜索；源码用于核对具体运行语义。仓库链接固定到本次阅读的 commit，避免后续重构改变文中的对应关系。

1. Shunyu Yao et al. [ReAct: Synergizing Reasoning and Acting in Language Models][1]，ICLR 2023。
2. Binfeng Xu et al. [ReWOO: Decoupling Reasoning from Observations for Efficient Augmented Language Models][2]，2023，重点见 §2.1。
3. Shunyu Yao et al. [Tree of Thoughts: Deliberate Problem Solving with Large Language Models][3]，NeurIPS 2023。
4. **mini-SWE-agent**，`04d809c`：[主循环][4]、[本地环境提交协议][4a]。本文核查 v2.4.6 原生工具调用路径。
5. **OpenHands Software Agent SDK**，`33d8aa2`：[Conversation 外层循环][5]、[Agent.step][5a]、[事件视图][5b]。本文采用新 SDK。
6. **Pi**，`73f8de8`：[runLoop][6]、[steering 与执行策略约定][6a]、[工具调度分支][6b]、[上层会话 hooks][6c]。原 `pi-mono` 仓库已重定向到 `earendil-works/pi`。
7. **Codex CLI**，`0144894`：[run_turn][7]、[step 快照][7a]、[流式工具 dispatch][7b]、[并发能力声明][7c]、[stop hooks][7d]。
8. **Gemini CLI**，`76e4d7c`：[CLI 外层循环][8]、[交互路径批次调度][8a]、[并发规则][8b]、[Turn 对象][8c]、[next-speaker 默认配置][8d]、[wave 调度][8e]。
9. **OpenCode**，`9d90d89`：[逻辑 step][9]、[流与工具执行][9a]、[输入与退出边界][9b]。本文核查 `dev` 分支这一快照的 `packages/core` 实现。
10. **LangGraph**，`1400d25`：[Pregel 执行语义][10]、[StateGraph 路由][10a]。
11. **smolagents**，`96f33fa`：[多步循环][11]、[结构化工具调用][11a]、[代码动作执行][11b]。

[1]: https://arxiv.org/abs/2210.03629v3
[2]: https://arxiv.org/html/2305.18323v1
[3]: https://arxiv.org/html/2305.10601v2
[4]: https://github.com/SWE-agent/mini-swe-agent/blob/04d809ceab9df28f9adaed044884180159172930/src/minisweagent/agents/default.py#L88-L157
[4a]: https://github.com/SWE-agent/mini-swe-agent/blob/04d809ceab9df28f9adaed044884180159172930/src/minisweagent/environments/local.py#L45-L56
[5]: https://github.com/OpenHands/software-agent-sdk/blob/33d8aa29c3078d074799e2fbf5e847aeb2d71360/openhands-sdk/openhands/sdk/conversation/impl/local_conversation.py#L1945-L2090
[5a]: https://github.com/OpenHands/software-agent-sdk/blob/33d8aa29c3078d074799e2fbf5e847aeb2d71360/openhands-sdk/openhands/sdk/agent/agent.py#L707-L897
[5b]: https://github.com/OpenHands/software-agent-sdk/blob/33d8aa29c3078d074799e2fbf5e847aeb2d71360/openhands-sdk/openhands/sdk/context/view/view.py#L111-L158
[6]: https://github.com/earendil-works/pi/blob/73f8de80bc87021375f8b525292ac07492253002/packages/agent/src/agent-loop.ts#L163-L320
[6a]: https://github.com/earendil-works/pi/blob/73f8de80bc87021375f8b525292ac07492253002/packages/agent/src/types.ts#L282-L317
[6b]: https://github.com/earendil-works/pi/blob/73f8de80bc87021375f8b525292ac07492253002/packages/agent/src/agent-loop.ts#L508-L523
[6c]: https://github.com/earendil-works/pi/blob/73f8de80bc87021375f8b525292ac07492253002/packages/coding-agent/src/core/agent-session.ts#L899-L931
[7]: https://github.com/openai/codex/blob/014489466a1739c2c563cdfe57880c2c7c8680e3/codex-rs/core/src/session/turn.rs#L580-L610
[7a]: https://github.com/openai/codex/blob/014489466a1739c2c563cdfe57880c2c7c8680e3/codex-rs/core/src/session/step_context.rs#L22-L46
[7b]: https://github.com/openai/codex/blob/014489466a1739c2c563cdfe57880c2c7c8680e3/codex-rs/core/src/stream_events_utils.rs#L347-L369
[7c]: https://github.com/openai/codex/blob/014489466a1739c2c563cdfe57880c2c7c8680e3/codex-rs/core/src/tools/router.rs#L246-L250
[7d]: https://github.com/openai/codex/blob/014489466a1739c2c563cdfe57880c2c7c8680e3/codex-rs/core/src/session/turn.rs#L724-L776
[8]: https://github.com/google-gemini/gemini-cli/blob/76e4d7c046c7dab5727787da378b9c06bf0948cf/packages/cli/src/nonInteractiveCli.ts#L310-L332
[8a]: https://github.com/google-gemini/gemini-cli/blob/76e4d7c046c7dab5727787da378b9c06bf0948cf/packages/cli/src/ui/hooks/useGeminiStream.ts#L1762-L1778
[8b]: https://github.com/google-gemini/gemini-cli/blob/76e4d7c046c7dab5727787da378b9c06bf0948cf/packages/core/src/utils/tool-utils.ts#L25-L41
[8c]: https://github.com/google-gemini/gemini-cli/blob/76e4d7c046c7dab5727787da378b9c06bf0948cf/packages/core/src/core/turn.ts#L254-L297
[8d]: https://github.com/google-gemini/gemini-cli/blob/76e4d7c046c7dab5727787da378b9c06bf0948cf/packages/core/src/config/config.ts#L1288
[8e]: https://github.com/google-gemini/gemini-cli/blob/76e4d7c046c7dab5727787da378b9c06bf0948cf/packages/core/src/scheduler/scheduler.ts#L505-L568
[9]: https://github.com/anomalyco/opencode/blob/9d90d892dcbfc52b47e95b2ea31b8aba877128fd/packages/core/src/session/runner/llm.ts#L202-L323
[9a]: https://github.com/anomalyco/opencode/blob/9d90d892dcbfc52b47e95b2ea31b8aba877128fd/packages/core/src/session/runner/step.ts#L103-L153
[9b]: https://github.com/anomalyco/opencode/blob/9d90d892dcbfc52b47e95b2ea31b8aba877128fd/packages/core/src/session/runner/llm.ts#L56-L192
[10]: https://github.com/langchain-ai/langgraph/blob/1400d25b7b88cfa055c55b8a82bd95b7c25caef1/libs/langgraph/langgraph/pregel/main.py#L460-L488
[10a]: https://github.com/langchain-ai/langgraph/blob/1400d25b7b88cfa055c55b8a82bd95b7c25caef1/libs/langgraph/langgraph/graph/state.py#L928-L1056
[11]: https://github.com/huggingface/smolagents/blob/96f33faaf028479119ec8d34507b47694cf14e34/src/smolagents/agents.py#L540-L611
[11a]: https://github.com/huggingface/smolagents/blob/96f33faaf028479119ec8d34507b47694cf14e34/src/smolagents/agents.py#L1361-L1445
[11b]: https://github.com/huggingface/smolagents/blob/96f33faaf028479119ec8d34507b47694cf14e34/src/smolagents/agents.py#L1638-L1764
