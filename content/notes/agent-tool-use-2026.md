---
title: "Agent Tool Use：CVPR 与 ACL 2026 文献笔记"
date: "2026-10-24"
description: "359 篇主会论文，按九个方向整理，每篇记录 Idea、Research Problem 与 Insight。"
draft: false
---

这份笔记整理 **359 篇主会论文**：CVPR 2026 共 110 篇，ACL 2026 共 249 篇，覆盖工具调用、多模态、搜索、GUI/Web、代码与具身执行。

每篇用三句话记录 **Idea、Research Problem、Insight**，标题链接到官方论文页。需要按会议、方向和相关程度筛选时，可以打开[交互式文献表](https://boran002.github.io/agent-tool-use-2026/)；[GitHub 笔记仓库](https://github.com/BORAN002/agent-tool-use-2026)保留 Markdown 和[结构化数据](https://boran002.github.io/agent-tool-use-2026/agent-tool-use-2026.json)。

仅收录 CVPR Main 与 ACL Long / Short，排除 Findings、Workshop、Industry 和 Demo。172 篇标为直接工具使用，187 篇为相关的执行、规划、记忆、安全和评测研究。以下分类用于阅读导航，方向之间存在交叉。

> 检索日期：2026-10-24。概括依据官方摘要，Insight 为分析性提炼，不是作者原话；这份清单不保证零遗漏，也不代表已独立复现论文结论。正式录用来源为 [CVF](https://openaccess.thecvf.com/CVPR2026?day=all) 和 [ACL Anthology](https://aclanthology.org/events/acl-2026/)。

## 01 · 工具调用 / 训练 / 评测

64 篇 · CVPR 8 · ACL 56

#### [EpiAgent: An Agent-Centric System for Ancient Inscription Restoration](https://openaccess.thecvf.com/content/CVPR2026/html/Zhu_EpiAgent_An_Agent-Centric_System_for_Ancient_Inscription_Restoration_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**让中央规划器协调碑文分析、历史经验和专业修复工具。
- **Research Problem：**固定修复流水线难适应复杂异质损坏。
- **Insight：**专家式观察与再评估可指导自适应工具修复。

#### [From Intuition to Investigation: A Tool-Augmented Reasoning MLLM Framework for Generalizable Face Anti-Spoofing](https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_From_Intuition_to_Investigation_A_Tool-Augmented_Reasoning_MLLM_Framework_for_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**用视觉工具检查细微伪造线索并训练工具感知检测策略。
- **Research Problem：**简短语义描述难捕获人脸伪造的细粒度证据。
- **Insight：**主动调查工具能补足直觉式视觉判断。

#### [IPR-1: Interactive Physical Reasoner](https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_IPR-1_Interactive_Physical_Reasoner_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**用物理动作代码统一推理和世界模型预测。
- **Research Problem：**视觉模型缺前瞻，世界模型易只模仿外观。
- **Insight：**物理中心的动作表示能连接语义意图与环境动力学。

#### [Scaling Agentic Reinforcement Learning for Tool-Integrated Reasoning in VLMs](https://openaccess.thecvf.com/content/CVPR2026/html/Lu_Scaling_Agentic_Reinforcement_Learning_for_Tool-Integrated_Reasoning_in_VLMs_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**构建统一视觉工具接口与可验证环境以扩展多轮强化学习。
- **Research Problem：**视觉工具选择、调用和协作缺少规模化训练基础设施。
- **Insight：**多任务交互环境是释放视觉 Agent 能力的重要条件。

#### [Training One Model to Master Cross-Level Agentic Actions via Reinforcement Learning](https://openaccess.thecvf.com/content/CVPR2026/html/He_Training_One_Model_to_Master_Cross-Level_Agentic_Actions_via_Reinforcement_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**统一训练跨层级动作并按情境切换高低层接口。
- **Research Problem：**固定 API、GUI 或控制动作空间限制灵活性。
- **Insight：**动作粒度应由效率和精度需求动态决定。

#### [DRAMA: Next-Gen Dynamic Orchestration for Resilient Multi-Agent Ecosystems in Flux](https://openaccess.thecvf.com/content/CVPR2026/html/Zhao_DRAMA_Next-Gen_Dynamic_Orchestration_for_Resilient_Multi-Agent_Ecosystems_in_Flux_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**以动态调度、任务接管和共享空间信息组织具身协作。
- **Research Problem：**固定分工难应对 Agent 上下线和环境变化。
- **Insight：**运行时重分配与故障恢复应成为协作架构的核心。

#### [GTR-Turbo: Merged Checkpoint is Secretly a Free Teacher for Agentic VLM Training](https://openaccess.thecvf.com/content/CVPR2026/html/Wei_GTR-Turbo_Merged_Checkpoint_is_Secretly_a_Free_Teacher_for_Agentic_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**合并训练过程中的模型检查点作为免费的指导教师。
- **Research Problem：**逐步指导的 Agent RL 依赖昂贵外部模型。
- **Insight：**训练自身产生的检查点可提供稳定且多样的监督。

#### [VS-Bench: Evaluating VLMs for Strategic Abilities in Multi-Agent Environments](https://openaccess.thecvf.com/content/CVPR2026/html/Xu_VS-Bench_Evaluating_VLMs_for_Strategic_Abilities_in_Multi-Agent_Environments_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**在视觉多 Agent 环境中分开评测感知、策略推理和实际收益。
- **Research Problem：**单 Agent 或纯文本基准难衡量交互战略能力。
- **Insight：**看懂场景与选出有效行动之间仍有明显差距。

#### [A Multi-Agent Framework for High-Interaction Terminal Simulation](https://aclanthology.org/2026.acl-long.1515/)

ACL 2026 · Long · 直接工具使用

- **Idea：**将命令路由到真实工具或模拟 Agent 并维护一致文件状态。
- **Research Problem：**终端模拟易误解命令、格式漂移和状态失真。
- **Insight：**混合执行与显式状态管理能提高多轮模拟真实性。

#### [AgentGL: Towards Agentic Graph Learning with LLMs via Reinforcement Learning](https://aclanthology.org/2026.acl-long.1161/)

ACL 2026 · Long · 直接工具使用

- **Idea：**通过图原生探索工具与课程强化学习进行图学习。
- **Research Problem：**文本式检索忽略真实数据的拓扑依赖。
- **Insight：**图结构应参与 Agent 的主动探索，而不仅作为待阅读文本。

#### [ARCHITECT: Uncertainty-Aware Dynamic Tool Learning via Causal Intervention for Open-World Agents](https://aclanthology.org/2026.acl-long.1707/)

ACL 2026 · Long · 直接工具使用

- **Idea：**以因果模型和沙箱干预诊断动态生成工具的失败原因。
- **Research Problem：**工具首调用失败难靠黑箱置信度准确修复。
- **Insight：**代码可被干预的特性使工具可靠性能够进行因果归因。

#### [AT²PO: Agentic Turn-based Policy Optimization via Tree Search](https://aclanthology.org/2026.acl-long.1106/)

ACL 2026 · Long · 直接工具使用

- **Idea：**用轮级搜索树联合优化探索、奖励传播和策略更新。
- **Research Problem：**多轮工具学习同时面临探索不足和粗粒度归因。
- **Insight：**训练单位应与 Agent 的实际交互轮次对齐。

#### [AutoReproduce: Automatic AI Experiment Reproduction with Paper Lineage](https://aclanthology.org/2026.acl-long.1001/)

ACL 2026 · Long · 直接工具使用

- **Idea：**沿论文引用谱系补全隐含知识，并用多 Agent 实现代码复现和采样式单元测试。
- **Research Problem：**论文缺少实现细节与背景知识，使自动复现容易产生不可执行或偏离方法的代码。
- **Insight：**引用关系提供的技术背景与执行验证结合，能改善复现的完整性。

#### [Beyond Accuracy: Unveiling Inefficiency Patterns in Tool-Integrated Reasoning](https://aclanthology.org/2026.acl-long.339/)

ACL 2026 · Long · 直接工具使用

- **Idea：**提出计入 KV-cache 重建与工具长回复的 PTE 效率指标。
- **Research Problem：**token 数和调用次数无法准确反映工具推理计算成本。
- **Insight：**调用引起的缓存失效和上下文膨胀是重要的隐藏开销。

#### [CAR-bench: Evaluating the Consistency and Limit-Awareness of LLM Agents under Real-World Uncertainty](https://aclanthology.org/2026.acl-long.1886/)

ACL 2026 · Long · 直接工具使用

- **Idea：**在车载助手工具环境中测试一致性、澄清和能力边界。
- **Research Problem：**理想任务完成率掩盖不确定输入下的冒进行动。
- **Insight：**可靠性取决于持续正确以及知道何时补充信息或停止。

#### [Current Agents Fail to Leverage World Model as Tool for Foresight](https://aclanthology.org/2026.acl-long.623/)

ACL 2026 · Long · 直接工具使用

- **Idea：**系统评测 Agent 将生成式世界模型当作预测工具的能力。
- **Research Problem：**拥有未来模拟器是否能改善决策尚未得到验证。
- **Insight：**瓶颈在何时模拟及如何解释预测，而不只是模拟器是否可用。

#### [Discovery and Reinforcement of Tool-Integrated Reasoning Chains via Rollout Trees](https://aclanthology.org/2026.acl-long.649/)

ACL 2026 · Long · 直接工具使用

- **Idea：**用 rollout 树发现长思维链中的有效工具使用时机。
- **Research Problem：**缺少工具轨迹且直接加入工具可能损害原有长链推理。
- **Insight：**可从工具介入前后的分支收益中学习调用价值。

#### [Do LLMs Know Tool Irrelevance? Demystifying Structural Alignment Bias in Tool Invocations](https://aclanthology.org/2026.acl-long.1473/)

ACL 2026 · Long · 直接工具使用

- **Idea：**用解耦语义相关性与参数可填充性的基准分析错误调用。
- **Research Problem：**模型会调用形式可匹配但语义无关的工具。
- **Insight：**参数能填上不代表工具能实现用户意图。

#### [Don’t Adapt Small Language Models for Tools; Adapt Tool Schemas to the Models](https://aclanthology.org/2026.acl-long.948/)

ACL 2026 · Long · 直接工具使用

- **Idea：**按模型预训练熟悉度重命名工具 schema。
- **Research Problem：**小模型常因不熟悉命名约定而选错函数或参数。
- **Insight：**调整工具接口也能提升调用能力，无需总是修改模型参数。

#### [Empowering Multi-Turn Tool-Integrated Agentic Reasoning with Group Turn Policy Optimization](https://aclanthology.org/2026.acl-long.1962/)

ACL 2026 · Long · 直接工具使用

- **Idea：**通过轮级奖励、折扣回报和代码自监督训练多轮工具推理。
- **Research Problem：**轨迹级 GRPO 奖励难区分各轮的贡献。
- **Insight：**执行过程自带的信号可低成本缓解奖励稀疏。

#### [ET-Agent: Incentivizing Effective Tool-Integrated Reasoning Agent via Behavior Calibration](https://aclanthology.org/2026.acl-long.333/)

ACL 2026 · Long · 直接工具使用

- **Idea：**通过数据自演化和分阶段行为校准训练工具推理。
- **Research Problem：**只奖励答案正确会保留冗余调用和调用不足。
- **Insight：**工具行为需要独立于最终正确率接受显式优化。

#### [From Proof to Program: Characterizing Tool-Induced Reasoning Hallucinations in Large Language Models](https://aclanthology.org/2026.acl-long.1951/)

ACL 2026 · Long · 直接工具使用

- **Idea：**用 PyMath 诊断代码工具引发的推理退化并进行偏好优化。
- **Research Problem：**工具执行正确和答案正确仍可能掩盖论证不成立。
- **Insight：**工具输出应作为证据，不能替代逻辑论证。

#### [GenesisFunc: Multi-Agent Data Generation for Accurate and Generalizable Function-Calling](https://aclanthology.org/2026.acl-long.1319/)

ACL 2026 · Long · 直接工具使用

- **Idea：**以多 Agent 生成并多阶段校验函数调用对话。
- **Research Problem：**合成数据存在 API 不可靠、覆盖窄和质量不稳的问题。
- **Insight：**可靠工具种子与分层质量控制能同时提升数据多样性和泛化。

#### [Learning from the Irrecoverable: Error-Localized Policy Optimization for Tool-Integrated LLM Reasoning](https://aclanthology.org/2026.acl-long.504/)

ACL 2026 · Long · 直接工具使用

- **Idea：**定位首个不可恢复错误并对关键步骤实施细粒度策略更新。
- **Research Problem：**终局奖励无法定位长工具链中真正导致失败的位置。
- **Insight：**首次不可逆错误比均匀惩罚整条轨迹更适合作为归因锚点。

#### [LoopTool: Closing the Data–Training Loop for Robust LLM Tool Calls](https://aclanthology.org/2026.acl-long.968/)

ACL 2026 · Long · 直接工具使用

- **Idea：**循环探测模型弱点、修复标签并生成针对性工具数据。
- **Research Problem：**静态数据无法追踪模型当前失败模式。
- **Insight：**数据生成与训练闭环比一次性扩大数据更能对准能力缺口。

#### [Lost in Execution: On the Multilingual Robustness of Tool Calling in Large Language Models](https://aclanthology.org/2026.acl-long.2039/)

ACL 2026 · Long · 直接工具使用

- **Idea：**用多语言函数调用基准分析参数值语言不匹配。
- **Research Problem：**英语工具调用表现无法代表跨语言执行可靠性。
- **Insight：**理解用户意图正确仍可能因参数执行约定不匹配而失败。

#### [MCP-Flow: Facilitating LLM Agents to Master Real-World, Diverse and Scaling MCP Tools](https://aclanthology.org/2026.acl-long.231/)

ACL 2026 · Long · 直接工具使用

- **Idea：**自动发现 MCP 服务并合成调用数据和交互轨迹。
- **Research Problem：**真实 MCP 工具规模大、差异多而训练数据不足。
- **Insight：**服务发现、数据合成与训练可以形成可扩展的统一流水线。

#### [OctoTools: A Multi-Agent Framework with Extensible Tools for Complex Reasoning](https://aclanthology.org/2026.acl-long.1/)

ACL 2026 · Long · 直接工具使用

- **Idea：**以标准化工具卡和规划器—执行器架构组织跨领域推理。
- **Research Problem：**现有工具框架难以扩展到异构工具和不同任务。
- **Insight：**统一工具接口与分层规划可在不训练模型的情况下改善工具协作。

#### [OptiCo: Adaptive Distributed Training Optimization via Collaborative Agent Reasoning](https://aclanthology.org/2026.acl-long.1283/)

ACL 2026 · Long · 直接工具使用

- **Idea：**让多个 Agent 根据运行瓶颈和失败反馈迭代分布式训练配置。
- **Research Problem：**手工调优和静态性能画像难跨硬件泛化。
- **Insight：**持久共享经验有助于组织可解释的系统优化。

#### [R2IF: Aligning Reasoning with Decisions via Composite Rewards for Interpretable LLM Function Calling](https://aclanthology.org/2026.acl-long.1715/)

ACL 2026 · Long · 直接工具使用

- **Idea：**用正确性、思维链有效性和规格修改价值联合训练函数调用。
- **Research Problem：**表面合理的推理未必支持实际调用决策。
- **Insight：**奖励应约束推理对行动的真实贡献。

#### [Rethinking the Role of Entropy in Optimizing Tool-Use Behaviors for Large Language Model Agents](https://aclanthology.org/2026.acl-long.1288/)

ACL 2026 · Long · 直接工具使用

- **Idea：**将工具调用前后的熵下降用于结果或过程奖励。
- **Research Problem：**长轨迹中常出现高成本而低价值的调用。
- **Insight：**调用是否减少不确定性可作为有效性的监督信号。

#### [ReviewGrounder: Improving Review Substantiveness with Rubric-Guided, Tool-Integrated Agents](https://aclanthology.org/2026.acl-long.1477/)

ACL 2026 · Long · 直接工具使用

- **Idea：**以评审准则驱动工具取证来补强论文审稿内容。
- **Research Problem：**自动审稿容易生成缺少证据的泛泛评价。
- **Insight：**明确评价标准与有针对性的外部依据能提高评论实质性。

#### [RIMRULE: Improving Tool-Using Language Agents via MDL-Guided Rule Learning](https://aclanthology.org/2026.acl-long.1599/)

ACL 2026 · Long · 直接工具使用

- **Idea：**从失败轨迹提炼简洁规则并在推理时动态注入。
- **Research Problem：**私有或文档不足的工具难以可靠适配。
- **Insight：**可迁移的显式规则能补充参数训练并支持未见工具。

#### [Robust Tool Use via Fission-GRPO: Learning to Recover from Execution Errors](https://aclanthology.org/2026.acl-long.1880/)

ACL 2026 · Long · 直接工具使用

- **Idea：**把在线失败轨迹分裂为带诊断反馈的恢复训练任务。
- **Research Problem：**普通强化学习将执行错误压缩成稀疏负奖励。
- **Insight：**模型应学习恢复自己当前实际产生的错误。

#### [TEA-Bench: A Systematic Benchmarking of Tool-enhanced Emotional Support Dialogue Agent](https://aclanthology.org/2026.acl-long.2152/)

ACL 2026 · Long · 直接工具使用

- **Idea：**在 MCP 风格环境中评测工具增强的情感支持对话。
- **Research Problem：**纯文本情绪回应缺少事实依据和可执行帮助。
- **Insight：**工具收益取决于模型能否有选择地将工具用于实际支持。

#### [Temp-R1: A Unified Autonomous Agent for Complex Temporal KGQA via Reverse Curriculum Reinforcement Learning](https://aclanthology.org/2026.acl-long.1184/)

ACL 2026 · Long · 直接工具使用

- **Idea：**扩展内部与外部动作并以难到易课程训练时序图谱 Agent。
- **Research Problem：**固定流程难处理复杂时间约束。
- **Insight：**先训练复杂推理可减少在简单问题上形成的捷径。

#### [The Confidence Dichotomy: Analyzing and Mitigating Miscalibration in Tool-Use Agents](https://aclanthology.org/2026.acl-long.520/)

ACL 2026 · Long · 直接工具使用

- **Idea：**联合优化任务正确率和置信校准。
- **Research Problem：**工具 Agent 的表达置信度与真实成功率不匹配。
- **Insight：**证据检索工具可能诱发过度自信，确定性验证工具则有助于校准。

#### [The Reasoning Trap: How Enhancing LLM Reasoning Amplifies Tool Hallucination](https://aclanthology.org/2026.acl-long.376/)

ACL 2026 · Long · 直接工具使用

- **Idea：**用缺失工具和干扰工具场景研究推理增强导致的幻觉。
- **Research Problem：**更强推理为何仍会调用不存在或不适用的工具尚不清楚。
- **Insight：**推理能力提升可能同时放大工具幻觉，需要联合优化可靠性。

#### [TInR: Exploring Tool-Internalized Reasoning in Large Language Models](https://aclanthology.org/2026.acl-long.2077/)

ACL 2026 · Long · 直接工具使用

- **Idea：**先内化工具知识，再对齐推理和工具使用。
- **Research Problem：**反复依赖外部工具文档带来掌握难度和上下文开销。
- **Insight：**工具知识内化与推理协调是两个需要分别训练的环节。

#### [ToolPRM: Fine-Grained Inference Scaling of Structured Outputs for Function Calling](https://aclanthology.org/2026.acl-long.855/)

ACL 2026 · Long · 直接工具使用

- **Idea：**用 ToolPRM 评估函数名及参数填充并指导细粒度搜索。
- **Research Problem：**结构化函数调用缺少调用内部的推理时扩展方法。
- **Insight：**早期 JSON 决策难以挽回，需广泛探索但谨慎保留候选。

#### [Trajectory2Task: Training Robust Tool-Calling Agents with Synthesized Yet Verifiable Data for Complex User Intents](https://aclanthology.org/2026.acl-long.2037/)

ACL 2026 · Long · 直接工具使用

- **Idea：**先生成可执行轨迹，再反推模糊、变化或不可行的用户任务。
- **Research Problem：**训练数据低估真实用户意图的复杂性。
- **Insight：**从有效轨迹出发可同时保证任务可验证性与交互复杂度。

#### [Unlocking Implicit Experience: Synthesizing Tool-Use Trajectories from Text](https://aclanthology.org/2026.acl-long.452/)

ACL 2026 · Long · 直接工具使用

- **Idea：**从自然文本中的工作流提取并落地多轮工具轨迹。
- **Research Problem：**真实、多样且可扩展的工具使用数据难获取。
- **Insight：**文本语料蕴含大量可转化为工具交互的隐式经验。

#### [ZARA: Training-Free Motion Time-Series Reasoning via Evidence-Grounded LLM Agents](https://aclanthology.org/2026.acl-long.684/)

ACL 2026 · Long · 直接工具使用

- **Idea：**用统计证据知识库支持运动时间序列的迭代识别。
- **Research Problem：**直接向 LLM 输入数值容易幻觉且难泛化。
- **Insight：**可验证信号特征能连接数值感知与开放集推理。

#### [ACIArena: Toward Unified Evaluation for Agent Cascading Injection](https://aclanthology.org/2026.acl-long.457/)

ACL 2026 · Long · 扩展相关

- **Idea：**统一评测跨 Agent 注入入口与级联攻击目标。
- **Research Problem：**简化协作环境不足以反映真实攻击传播。
- **Insight：**安全取决于角色设计和受控交互，而不只是拓扑。

#### [Action Boundary Blindness: When LLM Agents Cannot Tell Where One Action Ends and Another Begins](https://aclanthology.org/2026.acl-long.1711/)

ACL 2026 · Long · 扩展相关

- **Idea：**定义并评测动作粒度、范围和完成边界。
- **Research Problem：**Agent 常不知道一次行动应该做到哪里。
- **Insight：**部分成功可能来自偶然，边界感需要单独检验。

#### [AgentGym2: Benchmarking Large Language Model Agents in De-Idealized Real-World Environments](https://aclanthology.org/2026.acl-long.2058/)

ACL 2026 · Long · 扩展相关

- **Idea：**在有噪声、信息不足且需自行发现工具的环境中评测 Agent。
- **Research Problem：**预打包接口和干净输入高估真实部署能力。
- **Insight：**工具发现、组合与完整流程执行应纳入评测。

#### [AgentOCR: Reimagining Agent History via Optical Self-Compression](https://aclanthology.org/2026.acl-long.230/)

ACL 2026 · Long · 扩展相关

- **Idea：**将行动历史渲染为图像并学习自适应光学压缩。
- **Research Problem：**文本历史持续增长造成 token 和内存负担。
- **Insight：**视觉表示的信息密度可成为长程 Agent 的记忆压缩手段。

#### [Behavior Knowledge Merge in Reinforced Agentic Models](https://aclanthology.org/2026.acl-long.1524/)

ACL 2026 · Long · 扩展相关

- **Idea：**区分共享与专有参数更新来合并 RL 训练的 Agent。
- **Research Problem：**普通模型平均会稀释稀疏的任务专属行为。
- **Insight：**Agent 强化学习更新的分布特性需要专门合并规则。

#### [Can We Predict Before Executing Machine Learning Agents?](https://aclanthology.org/2026.acl-long.182/)

ACL 2026 · Long · 扩展相关

- **Idea：**预测候选机器学习方案表现后再进行实际验证。
- **Research Problem：**每个候选都真实运行导致执行瓶颈。
- **Insight：**经过验证的数据分析先验可帮助筛掉低价值实验。

#### [DPEPO: Diverse Parallel Exploration Policy Optimization for LLM-based Agents](https://aclanthology.org/2026.acl-long.2151/)

ACL 2026 · Long · 扩展相关

- **Idea：**训练同一 Agent 并行探索多个环境并共享轨迹经验。
- **Research Problem：**单环境顺序探索限制状态覆盖。
- **Insight：**动作和状态转移多样性可指导更有效的并行学习。

#### [Hierarchical Reinforcement Learning with Augmented Step-Level Transitions for LLM Agents](https://aclanthology.org/2026.acl-long.318/)

ACL 2026 · Long · 扩展相关

- **Idea：**用子任务进度和局部摘要构造层级强化学习状态。
- **Research Problem：**依赖全部交互历史的训练成本高且难扩展。
- **Insight：**紧凑进度表示可以替代大量原始历史。

#### [Impatient Users Confuse AI Agents: High-fidelity Simulations of Human Traits for Testing Agents](https://aclanthology.org/2026.acl-long.1743/)

ACL 2026 · Long · 扩展相关

- **Idea：**通过可控用户特质模拟压力测试工具对话 Agent。
- **Research Problem：**标准合作用户掩盖对急躁或混乱行为的脆弱性。
- **Insight：**用户行为变化本身也是环境分布偏移。

#### [Lost in Simulation: LLM-Simulated Users are Unreliable Proxies for Human Users in Agentic Evaluations](https://aclanthology.org/2026.acl-long.2192/)

ACL 2026 · Long · 扩展相关

- **Idea：**用真实用户研究检验工具 Agent 评测中的模拟用户。
- **Research Problem：**LLM 用户模拟是否代表人类尚不确定。
- **Insight：**模拟器选择及用户群体差异会改变成功率与失败分布。

#### [Mixture-of-Minds: Multi-Agent Reinforcement Learning for Table Understanding](https://aclanthology.org/2026.acl-long.112/)

ACL 2026 · Long · 扩展相关

- **Idea：**将表格任务分为规划、编码和作答并进行多 Agent 强化学习。
- **Research Problem：**纯语言推理易算错，固定工具又缺语义理解。
- **Insight：**专业分工可以连接语义推理与精确代码执行。

#### [Mock Worlds, Real Skills: Building Small Agentic Language Models with Synthetic Tasks, Simulated Environments, and Rubric-Based Rewards](https://aclanthology.org/2026.acl-long.570/)

ACL 2026 · Long · 扩展相关

- **Idea：**联合合成工具任务、模拟环境、用户交互和评分规则。
- **Research Problem：**真实 API 不稳定且公开训练任务缺乏多样性。
- **Insight：**可控模拟世界能为小模型提供更丰富的行动和澄清训练。

#### [NeoAMT: Neologism-Aware Agentic Machine Translation with Reinforcement Learning](https://aclanthology.org/2026.acl-long.345/)

ACL 2026 · Long · 扩展相关

- **Idea：**训练会调用词典检索工具的新词翻译 Agent。
- **Research Problem：**模型参数知识难覆盖不断变化的新词。
- **Insight：**翻译策略可以主动查证，而不必凭旧知识猜译。

#### [ReCreate: Reasoning and Creating Domain Agents Driven by Experience](https://aclanthology.org/2026.acl-long.1432/)

ACL 2026 · Long · 扩展相关

- **Idea：**从执行经验诊断成功失败并编辑领域 Agent 框架。
- **Research Problem：**自动 Agent 设计只看最终分数而缺少原因分析。
- **Insight：**运行轨迹可提供可复用的架构修改依据。

#### [Reinforcement Learning for Self-Improving Agent with Skill Library](https://aclanthology.org/2026.acl-long.69/)

ACL 2026 · Long · 扩展相关

- **Idea：**沿相似任务链训练技能生成、存储和复用。
- **Research Problem：**提示式技能库难稳定产生持续改进。
- **Insight：**技能价值应由后续任务收益共同决定。

#### [STAPO: Selective Trajectory-Aware Policy Optimization for LLM Agent Training](https://aclanthology.org/2026.acl-long.1308/)

ACL 2026 · Long · 扩展相关

- **Idea：**用归一化熵定位忽视目标和历史的异常步骤并定向优化。
- **Research Problem：**普通熵混淆状态复杂度与决策不可靠性。
- **Insight：**相对置信偏离能更准确识别轨迹注意力失效。

#### [Taming Actor-Observer Asymmetry in Agents via Dialectical Alignment](https://aclanthology.org/2026.acl-long.1104/)

ACL 2026 · Long · 扩展相关

- **Idea：**以正反观点综合和强化学习减少执行者—观察者归因偏差。
- **Research Problem：**同一错误会因角色不同被归为外因或内因。
- **Insight：**可靠纠错需要对角色视角保持一致的失败判断。

#### [Timely Machine: Awareness of Time Makes Test-Time Scaling Agentic](https://aclanthology.org/2026.acl-long.211/)

ACL 2026 · Long · 扩展相关

- **Idea：**以真实墙钟时间为预算训练时间感知推理策略。
- **Research Problem：**token 数无法衡量含工具延迟的推理成本。
- **Insight：**工具响应速度会改变最优模型规模和交互策略。

#### [Towards Robust Real-World Spreadsheet Understanding with Multi-Agent Multi-Format Reasoning](https://aclanthology.org/2026.acl-long.86/)

ACL 2026 · Long · 扩展相关

- **Idea：**分区域读取代码、图像和表格表示并验证电子表格结构。
- **Research Problem：**纯文本及整表输入无法处理大规模复杂布局。
- **Insight：**结构草图与有针对性的检查能支撑可靠表格工具推理。

#### [Value of Information: A Framework for Human–Agent Communication](https://aclanthology.org/2026.acl-long.1987/)

ACL 2026 · Long · 扩展相关

- **Idea：**按信息价值比较提问收益与用户认知成本。
- **Research Problem：**Agent 难决定信息不全时行动还是澄清。
- **Insight：**澄清策略应考虑决策风险，而非固定置信阈值。

#### [When Agents Look the Same: Quantifying Distillation-Induced Similarity in Tool-Use Behaviors](https://aclanthology.org/2026.acl-long.478/)

ACL 2026 · Long · 扩展相关

- **Idea：**用语言模式和动作图相似度测量蒸馏后的行为趋同。
- **Research Problem：**现有指标无法区分任务必要动作与教师特有习惯。
- **Insight：**非必要的工具选择和依赖模式能揭示行为层面的蒸馏痕迹。

## 02 · 多模态感知与创作

81 篇 · CVPR 59 · ACL 22

#### [AeroAgent: A Vision-Physics-Decision Framework for Aerodynamic Vehicle Design](https://openaccess.thecvf.com/content/CVPR2026/html/Liu_AeroAgent_A_Vision-Physics-Decision_Framework_for_Aerodynamic_Vehicle_Design_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**在预算约束下联动形状生成、物理代理和高精度 CFD 验证。
- **Research Problem：**美观车辆生成未解决昂贵的物理设计迭代。
- **Insight：**低成本代理筛选与少量高保真验证可构成有效设计闭环。

#### [Agentic Retoucher for Text-To-Image Generation](https://openaccess.thecvf.com/content/CVPR2026/html/Shen_Agentic_Retoucher_for_Text-To-Image_Generation_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**用感知、诊断和执行 Agent 定位并局部修复生成图像缺陷。
- **Research Problem：**整体重生成昂贵且局部编辑容易产生语义漂移。
- **Insight：**把缺陷定位与编辑决策分离可提高修复精度。

#### [ARM-Thinker: Reinforcing Multimodal Generative Reward Models with Agentic Tool Use and Visual Reasoning](https://openaccess.thecvf.com/content/CVPR2026/html/Ding_ARM-Thinker_Reinforcing_Multimodal_Generative_Reward_Models_with_Agentic_Tool_Use_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**训练能调用裁剪、文档检索等工具的多模态奖励模型。
- **Research Problem：**静态评分无法验证细节和跨页证据。
- **Insight：**奖励模型也需要主动取证，而非仅凭已有上下文判断。

#### [Beyond Sequential Tools: A Unified VLM Agent System for Photographic Post-Processing via Dynamic Multi-Expert Fusion](https://openaccess.thecvf.com/content/CVPR2026/html/Xiong_Beyond_Sequential_Tools_A_Unified_VLM_Agent_System_for_Photographic_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**由 VLM 动态分配多个专家 LoRA 权重并一次融合执行。
- **Research Problem：**顺序调用多个修图工具低效且存在退化耦合。
- **Insight：**专业能力可在模型层组合，减少串行工具链开销。

#### [DiffGraph: An Automated Agent-driven Model Merging Framework for In-the-Wild Text-to-Image Generation](https://openaccess.thecvf.com/content/CVPR2026/html/Li_DiffGraph_An_Automated_Agent-driven_Model_Merging_Framework_for_In-the-Wild_Text-to-Image_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**以图结构组织在线扩散专家并按需求选择子图合并。
- **Research Problem：**固定模型融合难利用不断增长的专家资源。
- **Insight：**工具能力的可组合结构有助于匹配多样生成需求。

#### [Don't Show Pixels, Show Cues: Unlocking Visual Tool Reasoning in Language Models via Perception Programs](https://openaccess.thecvf.com/content/CVPR2026/html/Janjua_Dont_Show_Pixels_Show_Cues_Unlocking_Visual_Tool_Reasoning_in_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**将深度、光流等工具输出转换为结构化语言线索。
- **Research Problem：**密集像素结果不适合语言模型直接推理。
- **Insight：**工具收益取决于输出表示是否契合推理器。

#### [EvoGraph-R1: Self-Evolving Multimodal Knowledge Hypergraphs for Agentic Retrieval](https://openaccess.thecvf.com/content/CVPR2026/html/Lin_EvoGraph-R1_Self-Evolving_Multimodal_Knowledge_Hypergraphs_for_Agentic_Retrieval_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**把知识超图作为可检索、扩展和编辑的交互环境。
- **Research Problem：**静态图与单次检索无法适应迭代推理。
- **Insight：**Agent 获取证据时也应修正承载知识的结构。

#### [FusionAgent: A Multimodal Agent with Dynamic Model Selection for Human Recognition](https://openaccess.thecvf.com/content/CVPR2026/html/Zhu_FusionAgent_A_Multimodal_Agent_with_Dynamic_Model_Selection_for_Human_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**将人脸、步态等专家模型作为工具按样本动态选择。
- **Research Problem：**静态融合对每个输入都调用全部模型。
- **Insight：**模型互补性应结合样本质量和模态可信度决定。

#### [Geometrically-Constrained Agent for Spatial Reasoning](https://openaccess.thecvf.com/content/CVPR2026/html/Chen_Geometrically-Constrained_Agent_for_Spatial_Reasoning_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**先把空间问题转成形式化几何约束，再在约束内调用工具。
- **Research Problem：**精确计算工具无法修复本身错误的几何计划。
- **Insight：**约束必须进入规划阶段，而不能只作用于最终计算。

#### [GeoMMBench and GeoMMAgent: Toward Expert-Level Multimodal Intelligence in Geoscience and Remote Sensing](https://openaccess.thecvf.com/content/CVPR2026/html/Xiao_GeoMMBench_and_GeoMMAgent_Toward_Expert-Level_Multimodal_Intelligence_in_Geoscience_and_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**用遥感专业模型与检索工具构建多 Agent 地学系统。
- **Research Problem：**通用模型缺乏多传感器理解和领域知识。
- **Insight：**检索、感知与推理的专业分工能弥补单模型短板。

#### [Graph-to-Frame RAG: Visual-Space Knowledge Fusion for Training-Free and Auditable Video Reasoning](https://openaccess.thecvf.com/content/CVPR2026/html/Yang_Graph-to-Frame_RAG_Visual-Space_Knowledge_Fusion_for_Training-Free_and_Auditable_Video_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**检索最小知识子图并将其渲染为视觉推理帧。
- **Research Problem：**文本外部知识与视频证据混合会稀释注意力。
- **Insight：**知识交付形式影响检索证据能否被视觉模型有效使用。

#### [Hybrid Agents for Image Restoration](https://openaccess.thecvf.com/content/CVPR2026/html/Li_Hybrid_Agents_for_Image_Restoration_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**按需求在快、慢和反馈修复 Agent 间调度专业工具。
- **Research Problem：**用户指令复杂度不同且串行修复会传播错误。
- **Insight：**混合恢复模式与自适应推理开销应共同设计。

#### [IBISAgent: Reinforcing Pixel-Level Visual Reasoning in MLLMs for Universal Biomedical Object Referring and Segmentation](https://openaccess.thecvf.com/content/CVPR2026/html/Jiang_IBISAgent_Reinforcing_Pixel-Level_Visual_Reasoning_in_MLLMs_for_Universal_Biomedical_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**通过点击动作调用分割工具，并用强化学习迭代修正掩码。
- **Research Problem：**单次医疗分割缺少反馈且联合微调代价高。
- **Insight：**把分割看作多步交互可复用现有工具并逐步提高精度。

#### [JarvisEvo: Towards a Self-Evolving Photo Editing Agent with Synergistic Editor-Evaluator Optimization](https://openaccess.thecvf.com/content/CVPR2026/html/Lin_JarvisEvo_Towards_a_Self-Evolving_Photo_Editing_Agent_with_Synergistic_Editor-Evaluator_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**联合优化编辑器与评估器，循环调用保真和生成式编辑工具。
- **Research Problem：**静态奖励可被利用，文本思维链也会误解视觉指令。
- **Insight：**编辑与评估共同演化能改善反馈质量和工具决策。

#### [Learning to Focus and Precise Cropping:A Reinforcement Learning Framework with Information Gaps and Grounding Loss for MLLMs](https://openaccess.thecvf.com/content/CVPR2026/html/Zhao_Learning_to_Focus_and_Precise_CroppingA_Reinforcement_Learning_Framework_with_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**先制造全局信息缺口，再训练精确局部裁剪。
- **Research Problem：**模型可能调用裁剪工具却仍依赖全局图像猜答案。
- **Insight：**必须让裁剪真正提供不可替代的信息才能学会依赖工具。

#### [Learning to Select Visual Tools from Experience](https://openaccess.thecvf.com/content/CVPR2026/html/Huang_Learning_to_Select_Visual_Tools_from_Experience_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**通过结果奖励学习从多样视觉工具库中选择和组合工具。
- **Research Problem：**提示与模仿学习缺少主动工具探索。
- **Insight：**最终任务反馈即可驱动发现可泛化的工具使用路径。

#### [LensWalk: Agentic Video Understanding by Planning How You See in Videos](https://openaccess.thecvf.com/content/CVPR2026/html/Li_LensWalk_Agentic_Video_Understanding_by_Planning_How_You_See_in_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**让推理器主动控制视频观察的时间范围和采样密度。
- **Research Problem：**静态视频预处理无法跟随推理需求变化。
- **Insight：**控制如何观察比固定提供更多帧更有效。

#### [Lighting-grounded Video Generation with Renderer-based Agent Reasoning](https://openaccess.thecvf.com/content/CVPR2026/html/Cai_Lighting-grounded_Video_Generation_with_Renderer-based_Agent_Reasoning_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**用场景 Agent 将指令转为渲染器可执行的布局、光照和相机控制。
- **Research Problem：**视频生成中的场景属性纠缠且难精确操作。
- **Insight：**显式三维控制信号可连接高层语言与可控视频生成。

#### [LongVT: Incentivizing "Thinking with Long Videos" via Native Tool Calling](https://openaccess.thecvf.com/content/CVPR2026/html/Yang_LongVT_Incentivizing_Thinking_with_Long_Videos_via_Native_Tool_Calling_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**把视频时间定位作为原生裁剪工具执行全局到局部推理。
- **Research Problem：**长视频证据稀疏且文本思维链容易幻觉。
- **Insight：**反复回看关键片段能让推理持续依赖真实视觉证据。

#### [META: Meta Evolution of Tool Trajectory Adaptation for Long-Video Understanding](https://openaccess.thecvf.com/content/CVPR2026/html/Huang_META_Meta_Evolution_of_Tool_Trajectory_Adaptation_for_Long-Video_Understanding_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**从工具轨迹提炼宏工具并从失败总结使用约束。
- **Research Problem：**静态视频 Agent 为每个任务重建重复微操作。
- **Insight：**工具组合模式本身可以成为可演化、可复用的技能。

#### [OctoT2I: A Self-Evolving Agentic Text-to-Image Router](https://openaccess.thecvf.com/content/CVPR2026/html/Jiang_OctoT2I_A_Self-Evolving_Agentic_Text-to-Image_Router_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**通过自探索学习生成模型能力边界并动态路由图像工具。
- **Research Problem：**人工工具先验和单一路由忽略效率与模型互补性。
- **Insight：**工具能力知识可以由提出任务—执行—评价的闭环自动积累。

#### [OralGPT-Plus: Learning to Use Visual Tools via Reinforcement Learning for Panoramic X-ray Analysis](https://openaccess.thecvf.com/content/CVPR2026/html/Fan_OralGPT-Plus_Learning_to_Use_Visual_Tools_via_Reinforcement_Learning_for_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**训练牙片 Agent 反复局部检查与左右对称比较。
- **Research Problem：**静态单次读取不足以支撑细粒度诊断验证。
- **Insight：**有临床意义的复查比无目标增加思考更有用。

#### [Proof-of-Perception: Certified Tool-Using Multimodal Reasoning with Compositional Conformal Guarantees](https://openaccess.thecvf.com/content/CVPR2026/html/Fayyazi_Proof-of-Perception_Certified_Tool-Using_Multimodal_Reasoning_with_Compositional_Conformal_Guarantees_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**把工具推理写成带逐步不确定性证书的可执行图。
- **Research Problem：**工具链错误会累积且缺少可靠性约束。
- **Insight：**显式校准信号可指导何时追加工具与何时停止。

#### [REALM: An MLLM-Agent Framework for Open World 3D Reasoning Segmentation and Editing on Gaussian Splatting](https://openaccess.thecvf.com/content/CVPR2026/html/Shi_REALM_An_MLLM-Agent_Framework_for_Open_World_3D_Reasoning_Segmentation_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**通过全局多视点定位和局部新视点细化执行 3D 分割编辑。
- **Research Problem：**二维推理能力难可靠落到三维目标。
- **Insight：**分层视角选择可减轻单视点偏差并支持准确编辑。

#### [Refer-Agent: A Collaborative Multi-Agent System with Reasoning and Reflection for Referring Video Object Segmentation](https://openaccess.thecvf.com/content/CVPR2026/html/Jiang_Refer-Agent_A_Collaborative_Multi-Agent_System_with_Reasoning_and_Reflection_for_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**以粗到细选帧、动态聚焦和问答式反思完成视频对象分割。
- **Research Problem：**简单零样本工作流难以可靠定位目标。
- **Insight：**验证中间结果并据此重选证据可减少对大规模微调的依赖。

#### [RetouchIQ: MLLM Agents for Instruction-Based Image Retouching with Generalist Reward](https://openaccess.thecvf.com/content/CVPR2026/html/Wu_RetouchIQ_MLLM_Agents_for_Instruction-Based_Image_Retouching_with_Generalist_Reward_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**用通用奖励模型指导生成可执行 Lightroom 参数。
- **Research Problem：**创意修图缺少可靠、可验证的固定奖励。
- **Insight：**按具体指令生成评价维度能更好指导主观工具任务。

#### [REVISOR: Beyond Textual Reflection, Towards Multimodal Introspective Reasoning in Long-Form Video Understanding](https://openaccess.thecvf.com/content/CVPR2026/html/Li_REVISOR_Beyond_Textual_Reflection_Towards_Multimodal_Introspective_Reasoning_in_Long-Form_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**通过工具回看视频并用解耦归因奖励训练视觉反思。
- **Research Problem：**只反思文本无法纠正视觉证据错误。
- **Insight：**反思应重新获取相关视觉内容并约束其与推理的对应。

#### [See and Fix the Flaws: Enabling VLMs and Diffusion Models to Comprehend Visual Artifacts via Agentic Data Synthesis](https://openaccess.thecvf.com/content/CVPR2026/html/Park_See_and_Fix_the_Flaws_Enabling_VLMs_and_Diffusion_Models_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**让感知、合成和筛选 Agent 用工具生成带标注的图像缺陷数据。
- **Research Problem：**人工缺陷标注昂贵且难扩展。
- **Insight：**主动注入缺陷并验证解释可构建可控训练数据。

#### [See Further, Think Deeper: Advancing VLM's Reasoning Ability with Low-level Visual Cues and Reflection](https://openaccess.thecvf.com/content/CVPR2026/html/Wu_See_Further_Think_Deeper_Advancing_VLMs_Reasoning_Ability_with_Low-level_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**将低层视觉工具和掩码反馈加入交错推理。
- **Research Problem：**模型缺少细粒度线索且难有效复查视觉判断。
- **Insight：**工具感知与视觉反馈可共同促进自我修正。

#### [Seeing as Experts Do: A Knowledge-Augmented Agent for Open-Set Fine-Grained Visual Understanding](https://openaccess.thecvf.com/content/CVPR2026/html/Chen_Seeing_as_Experts_Do_A_Knowledge-Augmented_Agent_for_Open-Set_Fine-Grained_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**联合网页检索、局部区域定位和证据验证完成细粒度识别。
- **Research Problem：**闭集分类难适应开放类别与上下文判断。
- **Insight：**检索知识必须落实到可观察的辨别特征。

#### [SenseSearch: Empowering Vision-Language Models with High-Resolution Agentic Search-Reasoning via Reinforcement Learning](https://openaccess.thecvf.com/content/CVPR2026/html/Chng_SenseSearch_Empowering_Vision-Language_Models_with_High-Resolution_Agentic_Search-Reasoning_via_Reinforcement_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**联合训练图像搜索、文本搜索和裁剪工具的动态协作。
- **Research Problem：**单工具方法无法同时处理知识缺口与视觉细节。
- **Insight：**跨工具协调是高分辨率知识推理的重要能力。

#### [SpaceTools: Tool-Augmented Spatial Reasoning via Double Interactive RL](https://openaccess.thecvf.com/content/CVPR2026/html/Chen_SpaceTools_Tool-Augmented_Spatial_Reasoning_via_Double_Interactive_RL_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**先借助单工具专家教学，再强化学习多工具协作。
- **Research Problem：**多工具空间过大导致直接强化学习困难。
- **Insight：**单工具能力可作为探索多工具策略的起点。

#### [Thinking with Programming Vision: Towards a Unified View for Thinking with Images](https://openaccess.thecvf.com/content/CVPR2026/html/Guo_Thinking_with_Programming_Vision_Towards_a_Unified_View_for_Thinking_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**以代码作为通用视觉工具接口并训练组合与恢复能力。
- **Research Problem：**固定工具库限制扩展性且模型对方向变化脆弱。
- **Insight：**通用可执行接口能统一图像操作、反馈与错误恢复。

#### [Thinking With Videos: Multimodal Tool-Augmented Reinforcement Learning for Long Video Reasoning](https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_Thinking_With_Videos_Multimodal_Tool-Augmented_Reinforcement_Learning_for_Long_Video_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**通过视频工具按需密集采样，并联合训练问答和时间定位。
- **Research Problem：**文本思维链缺少与长视频的持续交互。
- **Insight：**定位和回答可以相互提供训练信号。

#### [VideoARM: Agentic Reasoning over Hierarchical Memory for Long-Form Video Understanding](https://openaccess.thecvf.com/content/CVPR2026/html/Yin_VideoARM_Agentic_Reasoning_over_Hierarchical_Memory_for_Long-Form_Video_Understanding_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**一边调用视频工具一边建立层级多模态记忆。
- **Research Problem：**静态全面预处理浪费 token 且不适应当前问题。
- **Insight：**按需感知和动态记忆构建应共同驱动长视频理解。

#### [VideoChat-M1: Collaborative Policy Planning for Video Understanding via Multi-Agent Reinforcement Learning](https://openaccess.thecvf.com/content/CVPR2026/html/Chen_VideoChat-M1_Collaborative_Policy_Planning_for_Video_Understanding_via_Multi-Agent_Reinforcement_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**让多个策略 Agent 分别调用视频工具并交流更新计划。
- **Research Problem：**固定调用机制无法发现足够多样的线索。
- **Insight：**工具策略之间的协作可以通过多 Agent 强化学习优化。

#### [VideoSeek: Long-Horizon Video Agent with Tool-Guided Seeking](https://openaccess.thecvf.com/content/CVPR2026/html/Lin_VideoSeek_Long-Horizon_Video_Agent_with_Tool-Guided_Seeking_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**沿视频逻辑流程用多粒度工具主动寻找关键证据。
- **Research Problem：**穷尽解析密集帧成本很高。
- **Insight：**合理的寻证策略可用少量帧支持长程判断。

#### [Vinedresser3D: Towards Agentic Text-guided 3D Editing](https://openaccess.thecvf.com/content/CVPR2026/html/Chi_Vinedresser3D_Towards_Agentic_Text-guided_3D_Editing_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**由 Agent 选择视角和编辑工具，再在 3D 潜空间执行修改。
- **Research Problem：**复杂指令、目标定位与未编辑区域保护难兼顾。
- **Insight：**结构化编辑意图与合适视图可连接二维工具和三维一致性。

#### [ViRC: Enhancing Visual Interleaved Mathematical CoT with Reason Chunking](https://openaccess.thecvf.com/content/CVPR2026/html/Wang_ViRC_Enhancing_Visual_Interleaved_Mathematical_CoT_with_Reason_Chunking_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**将视觉数学推理分为连续关键单元并交错工具取证。
- **Research Problem：**单张静态输入难支持长链中间命题验证。
- **Insight：**局部逻辑连贯与跨单元视觉补充可兼顾结构和证据。

#### [VISTA: A Test-Time Self-Improving Video Generation Agent](https://openaccess.thecvf.com/content/CVPR2026/html/Long_VISTA_A_Test-Time_Self-Improving_Video_Generation_Agent_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**用分工评判与反思改写提示循环调用视频生成。
- **Research Problem：**单次提示难满足多维视频质量和用户意图。
- **Insight：**结构化时序计划与多模态反馈可改善下一轮生成。

#### [Visual Document Understanding and Reasoning: A Multi-Agent Collaboration Framework with Agent-Wise Adaptive Test-Time Scaling](https://openaccess.thecvf.com/content/CVPR2026/html/Yu_Visual_Document_Understanding_and_Reasoning_A_Multi-Agent_Collaboration_Framework_with_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**分解文档处理角色并按角色难度分配推理计算。
- **Research Problem：**统一扩大模型难解决程序化文档理解负担。
- **Insight：**计算预算应分配到真正困难的工作流环节。

#### [VULCAN: Tool-Augmented Multi Agents for Iterative 3D Object Arrangement](https://openaccess.thecvf.com/content/CVPR2026/html/Kuang_VULCAN_Tool-Augmented_Multi_Agents_for_Iterative_3D_Object_Arrangement_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**用 MCP 场景 API、视觉工具与规划—执行—验证协作布置 3D 物体。
- **Research Problem：**语言修改难准确落到三维场景且错误会累积。
- **Insight：**稳定操作接口与执行后视觉反馈共同支撑可靠编辑。

#### [WorldMM: Dynamic Multimodal Memory Agent for Long Video Reasoning](https://openaccess.thecvf.com/content/CVPR2026/html/Yeo_WorldMM_Dynamic_Multimodal_Memory_Agent_for_Long_Video_Reasoning_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**建立事件、语义和视觉记忆并自适应选择检索尺度。
- **Research Problem：**纯文本摘要丢失细节，固定时间尺度难覆盖不同事件。
- **Insight：**互补记忆与可变粒度检索能更好支持超长视频推理。

#### [ZoomEarth: Active Perception for Ultra-High-Resolution Geospatial Vision-Language Tasks](https://openaccess.thecvf.com/content/CVPR2026/html/Liu_ZoomEarth_Active_Perception_for_Ultra-High-Resolution_Geospatial_Vision-Language_Tasks_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**训练按需裁剪和放大超高分辨率遥感图像的策略。
- **Research Problem：**被动提高分辨率带来大量冗余。
- **Insight：**区域级奖励可引导模型把观察预算用于信息丰富位置。

#### [3DrawAgent: Teaching LLM to Draw in 3D with Early Contrastive Experience](https://openaccess.thecvf.com/content/CVPR2026/html/Xiao_3DrawAgent_Teaching_LLM_to_Draw_in_3D_with_Early_Contrastive_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**以几何反馈和优劣草图对比驱动逐步 3D 绘制。
- **Research Problem：**语言模型难从文本生成连贯的三维曲线。
- **Insight：**相对质量经验可在不更新参数时改善空间绘制策略。

#### [A Multi-Agent Perception-Action Alliance for Efficient Long Video Reasoning](https://openaccess.thecvf.com/content/CVPR2026/html/Xu_A_Multi-Agent_Perception-Action_Alliance_for_Efficient_Long_Video_Reasoning_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**让多个视觉 Agent 交替找线索、互评并重启探索。
- **Research Problem：**长视频冗余高且单次取证易漏关键事件。
- **Insight：**线索驱动的感知与协作反馈能减少无效视频处理。

#### [AREA3D: Active Reconstruction Agent with Unified Feed-Forward 3D Perception and Vision-Language Guidance](https://openaccess.thecvf.com/content/CVPR2026/html/Xu_AREA3D_Active_Reconstruction_Agent_with_Unified_Feed-Forward_3D_Perception_and_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**结合几何不确定性和视觉语言指导主动选择重建视点。
- **Research Problem：**几何启发式容易采集冗余视角。
- **Insight：**语义探索与重建不确定性互补，可提高观测价值。

#### [EVA: Efficient Reinforcement Learning for End-to-End Video Agent](https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_EVA_Efficient_Reinforcement_Learning_for_End-to-End_Video_Agent_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**训练按摘要—计划—动作—反思循环主动观看视频的 Agent。
- **Research Problem：**先处理全部视频再推理导致高成本。
- **Insight：**先规划看什么、何时看、怎么看可减少冗余感知。

#### [Graph2Eval: Automatic Multimodal Task Generation for Agents via Knowledge Graphs](https://openaccess.thecvf.com/content/CVPR2026/html/Chen_Graph2Eval_Automatic_Multimodal_Task_Generation_for_Agents_via_Knowledge_Graphs_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**从多模态知识图谱采样并验证可解的 Agent 任务。
- **Research Problem：**自动生成任务常出现语义不一致和不可解问题。
- **Insight：**图连通性与结构化约束能支撑更可靠的任务生成。

#### [Hierarchical Long Video Understanding with Audiovisual Entity Cohesion and Agentic Search](https://openaccess.thecvf.com/content/CVPR2026/html/Yin_Hierarchical_Long_Video_Understanding_with_Audiovisual_Entity_Cohesion_and_Agentic_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**结合视听实体关联、层级索引和主动搜索理解长视频。
- **Research Problem：**简单分块检索破坏跨片段叙事与实体一致性。
- **Insight：**稳定实体联系与多尺度搜索有助于恢复全局故事线。

#### [ModularAgent: A Task-Aware Modular Framework for Joint Optimization of Multimodal Large Language Models and World Models](https://openaccess.thecvf.com/content/CVPR2026/html/Zhan_ModularAgent_A_Task-Aware_Modular_Framework_for_Joint_Optimization_of_Multimodal_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**双向耦合语义模型与世界模型以共同优化控制。
- **Research Problem：**语言意图和动力学隐空间难保持一致。
- **Insight：**语义引导预测与环境反馈修正语义应构成闭环。

#### [R4: Retrieval-Augmented Reasoning for Vision-Language Models in 4D Spatio-Temporal Space](https://openaccess.thecvf.com/content/CVPR2026/html/Sohn_R4_Retrieval-Augmented_Reasoning_for_Vision-Language_Models_in_4D_Spatio-Temporal_Space_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**构建空间—时间知识库并迭代检索具身证据。
- **Research Problem：**纯文本记忆难保持事件的度量位置与时间关系。
- **Insight：**检索应在结构化时空中进行，而不仅按语义相似度。

#### [Resolving Evidence Sparsity: Agentic Context Engineering for Long-Document Understanding](https://openaccess.thecvf.com/content/CVPR2026/html/Liu_Resolving_Evidence_Sparsity_Agentic_Context_Engineering_for_Long-Document_Understanding_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**用多 Agent 层级筛选文档线索并构造证据密集上下文。
- **Research Problem：**检索出的页面仍含大量冗余信息。
- **Insight：**检索之后还需要针对问题的证据提炼。

#### [SAGE: Training Smart Any-Horizon Agents for Long Video Reasoning with Reinforcement Learning](https://openaccess.thecvf.com/content/CVPR2026/html/Jain_SAGE_Training_Smart_Any-Horizon_Agents_for_Long_Video_Reasoning_with_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**训练按任务难度选择单轮或多轮视频推理的调度器。
- **Research Problem：**统一密集看帧对不同视频时长和难度不经济。
- **Insight：**交互深度应随证据需求而变化。

#### [SciEducator: Scientific Video Understanding and Educating via Deming-Cycle Multi-Agent System](https://openaccess.thecvf.com/content/CVPR2026/html/Xu_SciEducator_Scientific_Video_Understanding_and_Educating_via_Deming-Cycle_Multi-Agent_System_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**用计划—执行—研究—修正循环整合科学视频与外部专业知识。
- **Research Problem：**通用视频 Agent 难进行严谨科学解释。
- **Insight：**专业证据与迭代反馈可支撑理解和教学内容生成。

#### [Select Less, Reason More: Prioritizing Evidence Purity for Video Reasoning](https://openaccess.thecvf.com/content/CVPR2026/html/Li_Select_Less_Reason_More_Prioritizing_Evidence_Purity_for_Video_Reasoning_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**用证据感知奖励学习选帧和关键帧附近的局部重采样。
- **Research Problem：**均匀采样稀释证据且固定帧限制细节补充。
- **Insight：**少量高纯度证据比更多冗余帧更利于推理。

#### [SVAgent: Storyline-guided Long Video Understanding via Cross-Modal Multi-Agent Collaboration](https://openaccess.thecvf.com/content/CVPR2026/html/Yang_SVAgent_Storyline-guided_Long_Video_Understanding_via_Cross-Modal_Multi-Agent_Collaboration_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**迭代构建故事线并协调视觉、文本预测与失败反馈。
- **Research Problem：**只定位孤立帧难保持长期叙事一致。
- **Insight：**跨模态证据需要由连贯故事结构组织。

#### [Symphony: A Cognitively-Inspired Multi-Agent System for Long-Video Understanding](https://openaccess.thecvf.com/content/CVPR2026/html/Yan_Symphony_A_Cognitively-Inspired_Multi-Agent_System_for_Long-Video_Understanding_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**通过细分任务、视觉定位与反思协作理解长视频。
- **Research Problem：**简单分工和嵌入检索易漏隐含、跨时段证据。
- **Insight：**任务理解应指导视觉证据定位与协作。

#### [Think, Then Verify: A Hypothesis-Verification Multi-Agent Framework for Long Video Understanding](https://openaccess.thecvf.com/content/CVPR2026/html/Wang_Think_Then_Verify_A_Hypothesis-Verification_Multi-Agent_Framework_for_Long_Video_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**先将候选答案写成可验证假设，再定位判别性视频证据。
- **Research Problem：**被动检索容易累积相关性错误和语义漂移。
- **Insight：**先明确需要证明什么能提高后续取证质量。

#### [Agentic Very Long Video Understanding](https://aclanthology.org/2026.acl-long.2161/)

ACL 2026 · Long · 直接工具使用

- **Idea：**用实体场景图及视听检索工具理解跨日长视频。
- **Research Problem：**短上下文和普通 RAG 难处理长期组合推理。
- **Insight：**持久实体关系能连接分散的跨模态时间证据。

#### [ChartAgent: A Multimodal Agent for Visually Grounded Reasoning in Complex Chart Question Answering](https://aclanthology.org/2026.acl-long.843/)

ACL 2026 · Long · 直接工具使用

- **Idea：**将图表问题分解为视觉子任务，并迭代调用标注、裁剪和坐标轴定位等专用工具。
- **Research Problem：**图表中的未标注数值与细粒度关系难以可靠读取和推理。
- **Insight：**工具推理必须扎根图表证据，而不能仅依赖文本转写。

#### [Deep-Reporter: Deep Research for Grounded Multimodal Long-Form Generation](https://aclanthology.org/2026.acl-long.1909/)

ACL 2026 · Long · 直接工具使用

- **Idea：**联合多模态搜索过滤、清单驱动的增量写作和循环上下文管理，生成带证据的图文长报告。
- **Research Problem：**文本中心的深度研究系统难以选择并整合图像证据。
- **Insight：**多模态研究质量取决于证据筛选与叙述整合，而非仅增加图片检索。

#### [Doc-V*: Coarse-to-Fine Interactive Visual Reasoning for Multi-Page Document VQA](https://aclanthology.org/2026.acl-long.2129/)

ACL 2026 · Long · 直接工具使用

- **Idea：**从缩略图概览出发，主动检索和取页，并以结构化工作记忆积累证据完成文档问答。
- **Research Problem：**长文档的全量输入成本高，固定检索又容易遗漏跨页证据。
- **Insight：**选择性注意和证据累积比单纯增加输入页数更有助于长文档推理。

#### [DocLens: A Tool-Augmented Multi-Agent Framework for Long Visual Document Understanding](https://aclanthology.org/2026.acl-long.1234/)

ACL 2026 · Long · 直接工具使用

- **Idea：**从文档到页面再到视觉区域逐层定位证据并裁决答案。
- **Research Problem：**长文档推理易漏页或遗漏图像细节。
- **Insight：**先精确定位证据再综合答案能缓解视觉幻觉。

#### [DORA: A Dual-Objective Reinforcement Learning Framework for Effective and Efficient Multimodal Agentic Search](https://aclanthology.org/2026.acl-long.605/)

ACL 2026 · Long · 直接工具使用

- **Idea：**联合优化搜索证据质量、答案正确性和调用次数。
- **Research Problem：**只看最终答案会保留差搜索与多余调用。
- **Insight：**搜索效率和中间信息质量都应进入训练目标。

#### [Enhancing Agentic Textual Graph Retrieval with Synthetic Stepwise Supervision](https://aclanthology.org/2026.acl-long.1169/)

ACL 2026 · Long · 直接工具使用

- **Idea：**从黄金子图合成逐步奖励来训练主动图检索。
- **Research Problem：**答案级奖励稀疏且嵌入检索难找到紧凑有效子图。
- **Insight：**结构化目标可以提供低成本的细粒度探索监督。

#### [I2E: From Image Pixels to Actionable Interactive Environments for Text-Guided Image Editing](https://aclanthology.org/2026.acl-long.2076/)

ACL 2026 · Long · 直接工具使用

- **Idea：**先将图像分解成对象图层，再由物理感知 VLA Agent 执行原子编辑动作。
- **Research Problem：**端到端像素编辑难以精确处理多对象组合指令和空间约束。
- **Insight：**将图像转成可操作的结构化环境，有助于分离规划与执行并提高局部控制。

#### [LongVideoAgent: Multi-Agent Reasoning with Long Videos](https://aclanthology.org/2026.acl-long.1876/)

ACL 2026 · Long · 直接工具使用

- **Idea：**让主 Agent 协调时间定位与视觉观察 Agent 并限制交互步数。
- **Research Problem：**长视频摘要有损且工具能力不足。
- **Insight：**有目标的分工取证能同时改善细节与交互效率。

#### [Look Less, Reason More: Rollout-Guided Adaptive Pixel-Space Reasoning](https://aclanthology.org/2026.acl-long.225/)

ACL 2026 · Long · 直接工具使用

- **Idea：**先学习视觉操作，再用自身 rollout 反馈训练模型按问题难度调用像素级操作。
- **Research Problem：**细粒度视觉推理常过度裁剪或读取像素，造成冗余计算与干扰。
- **Insight：**视觉工具调用应由预期信息收益驱动，而非默认每题都使用。

#### [MatchTIR: Fine-Grained Supervision for Tool-Integrated Reasoning via Bipartite Matching](https://aclanthology.org/2026.acl-long.549/)

ACL 2026 · Long · 直接工具使用

- **Idea：**通过预测轨迹与参考轨迹的二分匹配分配轮级奖励。
- **Research Problem：**整条轨迹共享优势值掩盖有效、冗余和错误调用的区别。
- **Insight：**局部调用对齐与全局任务成功需要联合监督。

#### [Shanks: Simultaneous Hearing and Thinking for Spoken Language Models](https://aclanthology.org/2026.acl-long.404/)

ACL 2026 · Long · 直接工具使用

- **Idea：**让语音模型边听边进行隐式推理并提前调用工具。
- **Research Problem：**等待用户说完后才行动造成交互延迟。
- **Insight：**推理和工具执行可与输入语音并行推进。

#### [Simple-VGC: Enhancing Visual Grounding in Multimodal Reasoning via Adaptive Tool Composition](https://aclanthology.org/2026.acl-long.223/)

ACL 2026 · Long · 直接工具使用

- **Idea：**组合图像重注入、区域聚焦和放大工具来修复视觉依据丢失。
- **Research Problem：**长上下文、低分辨率和区域错位分别损害视觉推理。
- **Insight：**不同 grounding 错误需要不同工具干预，组合使用具有互补性。

#### [SlideAgent: Hierarchical Agentic Framework for Multi-Page Visual Document Understanding](https://aclanthology.org/2026.acl-long.677/)

ACL 2026 · Long · 直接工具使用

- **Idea：**按全局、页面和元素分层组织文档 Agent。
- **Research Problem：**多页视觉信息难在单一上下文中细致推理。
- **Insight：**层级表示有助于按需激活相关证据和能力。

#### [Spatial-Agent: Agentic Geo-spatial Reasoning with Scientific Core Concepts](https://aclanthology.org/2026.acl-long.679/)

ACL 2026 · Long · 直接工具使用

- **Idea：**把地理问题转成受空间科学概念约束的可执行图。
- **Research Problem：**网页搜索和模式匹配不能替代地理计算。
- **Insight：**概念转换顺序可约束工具工作流的科学有效性。

#### [Spec-o3: A Tool-Augmented Vision-Language Agent for Rare Celestial Object Candidate Vetting via Automated Spectral Inspection](https://aclanthology.org/2026.acl-long.256/)

ACL 2026 · Long · 直接工具使用

- **Idea：**通过专家轨迹冷启动和结果奖励训练光谱检查 Agent。
- **Research Problem：**稀有天体筛选依赖人工专家且分类器泛化有限。
- **Insight：**将专家检查过程变成可执行工具交互能兼顾识别能力与可解释性。

#### [Speech-Hands: A Self-Reflection Voice Agentic Approach to Speech Recognition and Audio Reasoning with Omni Perception](https://aclanthology.org/2026.acl-long.1997/)

ACL 2026 · Long · 直接工具使用

- **Idea：**训练语音模型判断何时信任自身、何时咨询外部音频感知。
- **Research Problem：**盲目融合外部候选可能被噪声误导。
- **Insight：**工具选择也包含是否拒绝低质量外部感知。

#### [VoxMind: An End-to-End Agentic Spoken Dialogue System](https://aclanthology.org/2026.acl-long.459/)

ACL 2026 · Long · 直接工具使用

- **Idea：**用先思考后说话机制与异步工具管理构建语音 Agent。
- **Research Problem：**语音对话模型缺少可靠工具规划且工具规模增加延迟。
- **Insight：**辅助 Agent 可在主模型推理期间完成工具检索。

#### [Analyzing and Internalizing Complex Policy Documents for LLM Agents](https://aclanthology.org/2026.acl-long.767/)

ACL 2026 · Long · 扩展相关

- **Idea：**按事实、行为和条件规则分类内化复杂 Agent 政策。
- **Research Problem：**不断增长的政策文档增加上下文成本且难遵循。
- **Insight：**控制工作流的规则比普通事实更需要定向训练。

#### [Beyond Single-shot Writing: Deep Research Agents are Unreliable at Multi-turn Report Revision](https://aclanthology.org/2026.acl-long.609/)

ACL 2026 · Long · 扩展相关

- **Idea：**构建多轮反馈驱动研究报告修订评测。
- **Research Problem：**一次性写作评测忽略后续编辑的退化。
- **Insight：**满足新反馈时仍可能破坏原有内容和引用。

#### [SOAR: Supervision from Observation for Agentic Reinforcement Learning](https://aclanthology.org/2026.acl-long.1624/)

ACL 2026 · Long · 扩展相关

- **Idea：**用环境观察 token 为 Agent 强化学习提供额外监督。
- **Research Problem：**只奖励动作结果忽略环境响应所含学习信息。
- **Insight：**学习工具执行后会发生什么有助于改善后续动作。

#### [Verify Before You Commit: Towards Faithful Reasoning in LLM Agents via Self-Auditing](https://aclanthology.org/2026.acl-long.1440/)

ACL 2026 · Long · 扩展相关

- **Idea：**在动作提交前审计、修复并验证内部推理信念。
- **Research Problem：**逻辑连贯的错误会被存入记忆并反复传播。
- **Insight：**Agent 间一致不等于证据忠实，需显式约束检查。

## 03 · GUI / Web / Computer Use

47 篇 · CVPR 13 · ACL 34

#### [ReFAct: Empowering Multimodal Web Agents with Visual and Context Focusing](https://openaccess.thecvf.com/content/CVPR2026/html/Wu_ReFAct_Empowering_Multimodal_Web_Agents_with_Visual_and_Context_Focusing_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**联合视觉 grounding 工具与外部记忆聚焦多模态网页搜索。
- **Research Problem：**网页图像和长历史中的噪声使 Agent 偏离目标。
- **Insight：**视觉选择与上下文保留应共同控制信息密度。

#### [WebGym: Scaling Training Environments for Long-Horizon Visual Web Agents with Realistic Tasks](https://openaccess.thecvf.com/content/CVPR2026/html/Bai_WebGym_Scaling_Training_Environments_for_Long-Horizon_Visual_Web_Agents_with_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**扩展真实网页任务和异步 rollout 环境来训练视觉 Web Agent。
- **Research Problem：**小规模静态环境难支撑真实网页泛化。
- **Insight：**环境广度、任务深度与高吞吐执行共同决定训练可扩展性。

#### [DRS-GUI: Dynamic Region Search for Training-Free GUI Grounding](https://openaccess.thecvf.com/content/CVPR2026/html/Liu_DRS-GUI_Dynamic_Region_Search_for_Training-Free_GUI_Grounding_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**通过聚焦、平移和分散观察动作搜索 GUI 目标区域。
- **Research Problem：**高分辨率界面中的无关元素干扰定位。
- **Insight：**定位可视作主动区域搜索，而非单次坐标预测。

#### [DualMirage: Hunting Stealthy Multimodal LLM Agents via CAPTCHAs with Contour and Adversarial Illusions](https://openaccess.thecvf.com/content/CVPR2026/html/Chen_DualMirage_Hunting_Stealthy_Multimodal_LLM_Agents_via_CAPTCHAs_with_Contour_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**用视觉错觉与对抗扰动评测并识别隐蔽网页 Agent。
- **Research Problem：**现有验证码难区分具备视觉能力的自动代理。
- **Insight：**人类与机器感知差异可以成为交互安全的判别信号。

#### [Ego2Web: A Web Agent Benchmark Grounded in Egocentric Videos](https://openaccess.thecvf.com/content/CVPR2026/html/Yu_Ego2Web_A_Web_Agent_Benchmark_Grounded_in_Egocentric_Videos_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**将第一人称视频理解与真实网页任务连接起来评测。
- **Research Problem：**网页基准忽略用户物理环境中的视觉需求。
- **Insight：**完成数字任务往往先要正确理解现实世界证据。

#### [GUI-CEval: A Hierarchical and Comprehensive Chinese Benchmark for Mobile GUI Agents](https://openaccess.thecvf.com/content/CVPR2026/html/Li_GUI-CEval_A_Hierarchical_and_Comprehensive_Chinese_Benchmark_for_Mobile_GUI_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**在中文真实设备环境中分层评测 GUI 感知到执行能力。
- **Research Problem：**英语和单技能基准不足以代表中文移动生态。
- **Insight：**反思与执行后评估是完整 GUI 工作流的重要短板。

#### [HATS: Hardness-Aware Trajectory Synthesis for GUI Agents](https://openaccess.thecvf.com/content/CVPR2026/html/Shao_HATS_Hardness-Aware_Trajectory_Synthesis_for_GUI_Agents_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**围绕语义模糊动作探索 GUI，并循环校验和修复轨迹。
- **Research Problem：**合成数据偏向简单动作而忽略真实交互歧义。
- **Insight：**高价值难度来自上下文依赖，而不只是操作步数。

#### [HiconAgent: History Context-aware Policy Optimization for GUI Agents](https://openaccess.thecvf.com/content/CVPR2026/html/Zhou_HiconAgent_History_Context-aware_Policy_Optimization_for_GUI_Agents_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**用可变历史采样和动作锚点压缩训练 GUI 策略。
- **Research Problem：**完整截图历史带来开销和无关干扰。
- **Insight：**保留行动骨架并学习选择历史能兼顾效率与性能。

#### [iSHIFT: Lightweight Slow-Fast GUI Agent with Adaptive Perception](https://openaccess.thecvf.com/content/CVPR2026/html/Mehrotra_iSHIFT_Lightweight_Slow-Fast_GUI_Agent_with_Adaptive_Perception_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**以隐式快慢推理与感知控制自适应处理 GUI。
- **Research Problem：**小模型难同时满足操作效率和精确定位。
- **Insight：**推理深度与观察区域应由同一策略动态控制。

#### [Learning to Adapt: Self-Improving Web Agent via Cognitive-Aware Exploration](https://openaccess.thecvf.com/content/CVPR2026/html/Chen_Learning_to_Adapt_Self-Improving_Web_Agent_via_Cognitive-Aware_Exploration_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**用选择、预测和评判角色探索网页，并维护全局探索图。
- **Research Problem：**手工流程和昂贵专家轨迹限制 Web Agent 自适应。
- **Insight：**主动寻找能力边界可生成更有训练价值的经验。

#### [MMBench-GUI: A Unified Hierarchical Evaluation Framework for Multi-Platform GUI Agents](https://openaccess.thecvf.com/content/CVPR2026/html/Wang_MMBench-GUI_A_Unified_Hierarchical_Evaluation_Framework_for_Multi-Platform_GUI_Agents_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**跨平台分层评测 GUI 理解、定位、自动化与任务协作。
- **Research Problem：**单平台成功率无法反映全链路能力和动作冗余。
- **Insight：**定位精度与执行效率必须共同评价。

#### [See, Think, Act: Teaching Multimodal Agents to Effectively Interact with GUI by Identifying Toggles](https://openaccess.thecvf.com/content/CVPR2026/html/Wu_See_Think_Act_Teaching_Multimodal_Agents_to_Effectively_Interact_with_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**显式比较 GUI 当前开关状态与目标状态再决定动作。
- **Research Problem：**Agent 经常在状态已正确时仍点击切换。
- **Insight：**执行指令应依据状态差，而不是机械映射到点击。

#### [Towards GUI Agents: Vision-Language Diffusion Models for GUI Grounding](https://openaccess.thecvf.com/content/CVPR2026/html/Kumbhar_Towards_GUI_Agents_Vision-Language_Diffusion_Models_for_GUI_Grounding_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**用混合掩码策略训练扩散视觉语言模型进行 GUI 定位。
- **Research Problem：**扩散模型在精确界面动作上的适用性尚不清楚。
- **Insight：**生成过程应尊重坐标的层级结构并权衡准确率和延迟。

#### [OS-Symphony: A Holistic Framework for Robust and Generalist Computer-Using Agents](https://aclanthology.org/2026.acl-long.1021/)

ACL 2026 · Long · 直接工具使用

- **Idea：**结合里程碑记忆、反思和实时视觉教程检索操作电脑。
- **Research Problem：**未知软件和长工作流容易导致上下文失真。
- **Insight：**Agent 可边操作边学习视觉一致的教程。

#### [UI-Copilot: Advancing Long-Horizon GUI Automation via Tool-Integrated Policy Optimization](https://aclanthology.org/2026.acl-long.904/)

ACL 2026 · Long · 直接工具使用

- **Idea：**给 GUI Agent 配置记忆检索和计算 copilot，并分别训练调用与执行。
- **Research Problem：**长界面任务易出现记忆衰退、进度混淆和计算错误。
- **Insight：**按需委托专业工具能减轻 GUI 执行策略的能力负担。

#### [A Functionality-Grounded Benchmark for Evaluating Web Agents in E-commerce Domains](https://aclanthology.org/2026.acl-long.68/)

ACL 2026 · Long · 扩展相关

- **Idea：**按电商真实功能构建兼顾完成率和副作用的网页基准。
- **Research Problem：**商品搜索基准忽略账户操作与误操作风险。
- **Insight：**完成请求与不造成意外状态变化应同时评测。

#### [Anchor: Branch-Point Data Generation for GUI Agents](https://aclanthology.org/2026.acl-long.774/)

ACL 2026 · Long · 扩展相关

- **Idea：**从可信 GUI 演示的分支点生成新任务并验证轨迹。
- **Research Problem：**合成数据容易目标漂移且任务多样性不足。
- **Insight：**真实中间状态可作为可靠扩展任务的锚点。

#### [Android Coach: Improve Online Agentic Training Efficiency with Single State Multiple Actions](https://aclanthology.org/2026.acl-long.613/)

ACL 2026 · Long · 扩展相关

- **Idea：**为同一昂贵 Android 状态采样多个动作并由 critic 估值。
- **Research Problem：**单状态单动作浪费模拟器交互成本。
- **Insight：**同一观测可以支持更充分的策略比较。

#### [C-World: A Computer Use Agent Environment Creator](https://aclanthology.org/2026.acl-long.2001/)

ACL 2026 · Long · 扩展相关

- **Idea：**自动创建含工具、长任务、状态扰动和奖励的计算机环境。
- **Research Problem：**真实 Agent 环境建设成本限制训练与评测规模。
- **Insight：**工具接口、状态转移和可验证约束需要共同生成。

#### [Closing the Spatial Execution Gap in Digital Whiteboards via Verifiable Reinforcement Learning](https://aclanthology.org/2026.acl-long.630/)

ACL 2026 · Long · 扩展相关

- **Idea：**以可验证强化学习训练识别、推理、验证协议，将白板指令转成精确且合法的坐标操作。
- **Research Problem：**通用多模态模型理解视觉语义后，仍可能无法正确执行空间操作。
- **Insight：**结构化推理协议和执行奖励可以比单纯扩大模型更直接地补齐空间执行能力。

#### [DAC-Bench: A Decision-Aware Benchmark for Compositional Mobile GUI Tasks](https://aclanthology.org/2026.acl-long.2064/)

ACL 2026 · Long · 扩展相关

- **Idea：**用顺序、合取、条件和层级任务诊断移动 GUI 决策。
- **Research Problem：**线性短任务无法测量分支规划能力。
- **Insight：**步骤正确率不能替代分支选择与长期进度评价。

#### [Don’t Act Blindly: Robust GUI Automation via Action-Effect Verification and Self-Correction](https://aclanthology.org/2026.acl-long.1335/)

ACL 2026 · Long · 扩展相关

- **Idea：**显式预测和验证动作效果，并学习噪声下的恢复。
- **Research Problem：**Agent 常假设点击一定成功而陷入错误循环。
- **Insight：**动作执行后的真实状态必须进入下一步决策。

#### [Don’t Click That: Teaching Web Agents to Resist Deceptive Interfaces](https://aclanthology.org/2026.acl-long.310/)

ACL 2026 · Long · 扩展相关

- **Idea：**联合惩罚式训练与失败经验总结抵御欺骗性网页界面。
- **Research Problem：**普通网页 Agent 容易点击诱导元素。
- **Insight：**防欺骗应与原始任务执行一起优化。

#### [Empowering GUI Agents via Autonomous Experience Exploration and Hindsight Experience Utilization for Task Planning](https://aclanthology.org/2026.acl-long.1670/)

ACL 2026 · Long · 扩展相关

- **Idea：**从自主探索中反推高层任务并训练 GUI 规划。
- **Research Problem：**原子操作熟练不保证跨网站组合规划。
- **Insight：**回看成功经验生成高层训练目标有助于泛化。

#### [Experience-driven Multi-turn Reinforcement Learning for GUI Agents](https://aclanthology.org/2026.acl-long.428/)

ACL 2026 · Long · 扩展相关

- **Idea：**复用专家轨迹作为环境经验并修补策略偏离步骤。
- **Research Problem：**单轮训练分布错配，多轮真实环境训练又昂贵。
- **Insight：**可利用已有轨迹支持保持自身历史的多轮学习。

#### [From Off-Policy to On-Policy: Enhancing GUI Agents via Bi-level Expert-to-Policy Assimilation](https://aclanthology.org/2026.acl-long.1082/)

ACL 2026 · Long · 扩展相关

- **Idea：**将专家轨迹转为策略自身可达的指导并动态缓存。
- **Research Problem：**直接混合离线专家数据与在线 RL 存在结构分布错配。
- **Insight：**专家经验需要先适配学习者当前可执行的轨迹。

#### [GTA: Generating Long-horizon Tasks for Web Agents at Scale](https://aclanthology.org/2026.acl-long.856/)

ACL 2026 · Long · 扩展相关

- **Idea：**通过网页爬取、图结构播种和确定性回放生成长任务轨迹。
- **Research Problem：**人工网页基准缺少可扩展的过程监督。
- **Insight：**基于站点结构生成并验证轨迹能兼顾复杂度与可执行性。

#### [GUI0: Self-Evolving Foundational GUI Agents in Super App Ecosystems](https://aclanthology.org/2026.acl-long.2052/)

ACL 2026 · Long · 扩展相关

- **Idea：**以自主数据合成和课程 Agent 共演化训练超级应用操作。
- **Research Problem：**非标准渲染和稀疏反馈限制传统 GUI 模仿。
- **Insight：**边界任务生成可持续推动执行策略成长。

#### [InfiniteWeb: Scalable Web Environment Synthesis for GUI Agent Training](https://aclanthology.org/2026.acl-long.1313/)

ACL 2026 · Long · 扩展相关

- **Idea：**通过统一规格和任务驱动测试合成功能完整的网页环境。
- **Research Problem：**GUI 训练缺少可扩展且可验证的环境。
- **Insight：**环境生成需要同时生成操作功能与奖励判定。

#### [InquireMobile: Teaching VLM-based Mobile Agent to Request Human Assistance via Reinforcement Fine-Tuning](https://aclanthology.org/2026.acl-long.1487/)

ACL 2026 · Long · 扩展相关

- **Idea：**通过强化微调让移动 Agent 在关键决策前主动询问用户。
- **Research Problem：**能力不足时坚持自主执行会带来风险。
- **Insight：**知道何时需要人类帮助也是行动能力的一部分。

#### [MaDS: Long-Horizon GUI Automation via Synergizing Dual-Layer Memory and Multi-Round Debate](https://aclanthology.org/2026.acl-long.1202/)

ACL 2026 · Long · 扩展相关

- **Idea：**结合双层 GUI 记忆与执行前辩论，并保存失败警告。
- **Research Problem：**长界面流程中的不可逆错误容易累积。
- **Insight：**事前验证与可检索负经验可共同减少重复失误。

#### [MAGNET: Towards Adaptive GUI Agents with Memory-Driven Knowledge Evolution](https://aclanthology.org/2026.acl-long.1299/)

ACL 2026 · Long · 扩展相关

- **Idea：**分离稳定功能语义与流程记忆以适应更新后的移动界面。
- **Research Problem：**软件界面变动会破坏历史动作模式。
- **Insight：**视觉外观变化时，功能和任务意图往往仍稳定。

#### [MAS-Bench: A Unified Benchmark for Shortcut-Augmented Hybrid Mobile GUI Agents](https://aclanthology.org/2026.acl-long.316/)

ACL 2026 · Long · 扩展相关

- **Idea：**评测 GUI 与 API、深链和脚本混合执行及快捷方式生成。
- **Research Problem：**纯 GUI 基准无法衡量跨接口效率。
- **Insight：**既要会使用快捷方式，也要会发现可复用流程。

#### [Measure Twice, Click Once: Co-evolving Proposer and Visual Critic via Reinforcement Learning for GUI Grounding](https://aclanthology.org/2026.acl-long.960/)

ACL 2026 · Long · 扩展相关

- **Idea：**共同训练 GUI 坐标提出器与可视化批评器。
- **Research Problem：**多次采样坐标不保证能选出正确候选。
- **Insight：**定位和评判能力可通过相互反馈协同改善。

#### [MirrorCAPTCHA: Wild CAPTCHA, Wild Distribution, Wild Web-based Platform Meet Multimodal LLM Agents](https://aclanthology.org/2026.acl-long.1431/)

ACL 2026 · Long · 扩展相关

- **Idea：**按真实网站分布构建交互式验证码评测。
- **Research Problem：**常规网页基准忽略实际访问中的验证码障碍。
- **Insight：**自动化能力需要按真实遭遇频率而非均匀类别衡量。

#### [Mobile-R1: Towards Interactive Capability for VLM-Based Mobile Agent via Systematic Training](https://aclanthology.org/2026.acl-long.1422/)

ACL 2026 · Long · 扩展相关

- **Idea：**按格式、原子动作和真实多轮任务递进训练移动 Agent。
- **Research Problem：**直接任务奖励过稀疏，离线局部训练又缺探索。
- **Insight：**基础执行能力可作为学习长程纠错的课程起点。

#### [MobileWorld: Benchmarking Autonomous Mobile Agents in Agent-User Interactive and MCP-Augmented Environments](https://aclanthology.org/2026.acl-long.278/)

ACL 2026 · Long · 扩展相关

- **Idea：**构建跨应用、用户交互与 MCP 混合操作的移动端基准。
- **Research Problem：**已有移动端基准难以反映模糊指令和真实跨应用流程。
- **Insight：**纯 GUI 成功率不能代表用户澄清与 API 混合执行能力。

#### [MPR-GUI: Benchmarking and Enhancing Multilingual Perception and Reasoning in GUI Agents](https://aclanthology.org/2026.acl-long.1375/)

ACL 2026 · Long · 扩展相关

- **Idea：**在严格对齐的多语言 GUI 中诊断能力并干预语言敏感层。
- **Research Problem：**跨语言评测混入界面差异而难归因。
- **Insight：**对齐环境可隔离语言对实际操作的影响。

#### [NaturalGAIA: A Verifiable Benchmark and Hierarchical Framework for Long-Horizon GUI Tasks](https://aclanthology.org/2026.acl-long.2207/)

ACL 2026 · Long · 扩展相关

- **Idea：**用可验证因果路径构建自然长程 GUI 任务并分层规划执行。
- **Research Problem：**真实用户表达复杂而评测又需明确成功条件。
- **Insight：**语言叙述与逻辑路径可以分离以兼顾真实性和可验证性。

#### [NaviMaster: Learning a Unified Policy for GUI and Embodied Navigation Tasks](https://aclanthology.org/2026.acl-long.1788/)

ACL 2026 · Long · 扩展相关

- **Idea：**统一 GUI 与具身导航的轨迹表示和强化学习策略。
- **Research Problem：**两类视觉行动任务的数据与训练长期分离。
- **Insight：**共享决策结构可以促进跨环境动作泛化。

#### [Nested Browser-Use Learning for Agentic Information Seeking](https://aclanthology.org/2026.acl-long.1049/)

ACL 2026 · Long · 扩展相关

- **Idea：**用嵌套浏览结构分离页面探索与底层交互控制。
- **Research Problem：**简单抓取无法获取深层网页信息，完整浏览又过于繁杂。
- **Insight：**分层封装浏览动作可降低高层研究 Agent 的决策负担。

#### [PersonalAlign: Hierarchical Implicit Intent Alignment for Personalized GUI Agent with Long-Term User-Centric Records](https://aclanthology.org/2026.acl-long.1669/)

ACL 2026 · Long · 扩展相关

- **Idea：**从长期用户记录提取偏好与规律以指导个性化 GUI 操作。
- **Research Problem：**明确指令评测忽略隐含意图和主动需求。
- **Insight：**持久个人记忆能补全当前指令未说出的约束。

#### [SynthAgent: Adapting Web Agents with Synthetic Supervision](https://aclanthology.org/2026.acl-long.716/)

ACL 2026 · Long · 扩展相关

- **Idea：**同时修订合成网页任务与执行轨迹。
- **Research Problem：**任务幻觉和轨迹噪声限制网站适配。
- **Insight：**数据质量必须从目标可行性和动作一致性两端保证。

#### [WebClipper: Efficient Evolution of Web Agents with Graph-based Trajectory Pruning](https://aclanthology.org/2026.acl-long.988/)

ACL 2026 · Long · 扩展相关

- **Idea：**把网页搜索轨迹转成状态图并删除循环和无效分支。
- **Research Problem：**冗长搜索轨迹造成大量低价值工具调用。
- **Insight：**保留必要证据路径即可同时减少调用并保持答案质量。

#### [WebSTAR: Scalable Data Synthesis for Computer Use Agents with Step-Level Filtering](https://aclanthology.org/2026.acl-long.21/)

ACL 2026 · Long · 扩展相关

- **Idea：**逐步过滤合成 GUI 轨迹并训练轻量步骤奖励模型。
- **Research Problem：**强 Agent 产生的轨迹仍含大量错误和次优动作。
- **Insight：**成功轨迹中的每一步也需要独立检验。

#### [WebSynthesis: World Model-Guided Monte Carlo Tree Search for Efficient WebAgent Trajectory Synthesis](https://aclanthology.org/2026.acl-long.1157/)

ACL 2026 · Long · 扩展相关

- **Idea：**用世界模型模拟网页状态并通过树搜索合成交互轨迹。
- **Research Problem：**真实网站限制与不可逆操作妨碍大规模探索。
- **Insight：**可回退的模拟状态空间可以替代部分昂贵采集。

#### [Why Do LLM-based Web Agents Fail? A Hierarchical Planning Perspective](https://aclanthology.org/2026.acl-long.1483/)

ACL 2026 · Long · 扩展相关

- **Idea：**从高层计划、低层执行和重规划诊断网页失败。
- **Research Problem：**整体成功率无法定位真正瓶颈。
- **Insight：**更好的高层计划仍可能被视觉定位和控制错误阻断。

## 04 · 代码 / 软件 / 科研执行

30 篇 · CVPR 7 · ACL 23

#### [CodeDance: A Dynamic Tool-integrated MLLM for Executable Visual Reasoning](https://openaccess.thecvf.com/content/CVPR2026/html/Song_CodeDance_A_Dynamic_Tool-integrated_MLLM_for_Executable_Visual_Reasoning_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**让模型生成并执行代码来组合视觉工具。
- **Research Problem：**固定工具 schema 限制视觉推理的组合性。
- **Insight：**代码可以充当通用工具接口，并在强化学习中产生新组合。

#### [CodeV: Code with Images for Faithful Visual Reasoning via Tool-Aware Policy Optimization](https://openaccess.thecvf.com/content/CVPR2026/html/Hou_CodeV_Code_with_Images_for_Faithful_Visual_Reasoning_via_Tool-Aware_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**对视觉工具输入输出施加过程奖励并评测证据忠实性。
- **Research Problem：**答案正确可能掩盖无关裁剪或忽略工具输出。
- **Insight：**应直接监督工具是否获得必要证据，而不只监督最终答案。

#### [Cross-Domain Demo-to-Code via Neurosymbolic Counterfactual Reasoning](https://openaccess.thecvf.com/content/CVPR2026/html/Kim_Cross-Domain_Demo-to-Code_via_Neurosymbolic_Counterfactual_Reasoning_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**将演示转为符号轨迹，再用反事实验证修订机器人代码。
- **Research Problem：**演示与部署环境不同会破坏动作程序的因果关系。
- **Insight：**可验证的程序修订能连接视觉演示与跨域执行。

#### [MoReGen: Multi-Agent Motion-Reasoning Engine for Code-based Text-to-Video Synthesis](https://openaccess.thecvf.com/content/CVPR2026/html/Bai_MoReGen_Multi-Agent_Motion-Reasoning_Engine_for_Code-based_Text-to-Video_Synthesis_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**结合代码、物理模拟器和渲染器生成运动视频。
- **Research Problem：**视觉逼真的生成视频仍可能违反物理规律。
- **Insight：**可执行物理代码能提供可复现的运动约束。

#### [NERFIFY: A Multi-Agent Framework for Turning NeRF Papers into Code](https://openaccess.thecvf.com/content/CVPR2026/html/Jain_NERFIFY_A_Multi-Agent_Framework_for_Turning_NeRF_Papers_into_Code_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**用语法约束、多文件依赖规划和视觉反馈复现 NeRF 论文。
- **Research Problem：**通用论文转代码方法常无法生成可训练项目。
- **Insight：**领域执行契约与实际渲染反馈是可靠复现的重要条件。

#### [GardenDesigner: Encoding Aesthetic Principles into Jiangnan Garden Construction via a Chain of Agents](https://openaccess.thecvf.com/content/CVPR2026/html/Li_GardenDesigner_Encoding_Aesthetic_Principles_into_Jiangnan_Garden_Construction_via_a_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**将江南园林美学规则编入地形、道路、选材和布局 Agent。
- **Research Problem：**专业园林建模依赖大量人工经验。
- **Insight：**显式设计原则与程序化工具可连接审美要求和可执行场景。

#### [ProSoftArena: Benchmarking Hierarchical Capabilities of Multi-modal Agents in Professional Software Environments](https://openaccess.thecvf.com/content/CVPR2026/html/Ai_ProSoftArena_Benchmarking_Hierarchical_Capabilities_of_Multi-modal_Agents_in_Professional_Software_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**在真实专业软件中分层评测单软件与跨软件工作流。
- **Research Problem：**浏览器和简单应用基准低估专业操作难度。
- **Insight：**基础点击能力不能自然扩展为跨软件专业协作。

#### [ChatHLS: Towards Systematic Design Automation and Optimization for High-Level Synthesis](https://aclanthology.org/2026.acl-long.962/)

ACL 2026 · Long · 直接工具使用

- **Idea：**用专门化 Agent 诊断 HLS 错误并调节综合指令，结合错误案例扩充与硬件质量反馈。
- **Research Problem：**语言模型难以同时遵守高层综合约束并优化硬件实现性能。
- **Insight：**工具反馈必须连接到指令语义与质量指标，才能形成有效的设计优化循环。

#### [CodeEvo: Interaction-Driven Synthesis of Code-centric Data through Hybrid and Iterative Feedback](https://aclanthology.org/2026.acl-long.438/)

ACL 2026 · Long · 直接工具使用

- **Idea：**让 Coder 与 Reviewer 迭代合成代码数据，并结合编译器反馈和语义验证控制逻辑复杂度。
- **Research Problem：**固定规则合成的数据往往缺乏可信执行依据和足够的逻辑复杂性。
- **Insight：**代码数据的质量来自生成过程中的验证与纠错，而不仅是最终筛选。

#### [CODESTRUCT: Code Agents over Structured Action Spaces](https://aclanthology.org/2026.acl-long.607/)

ACL 2026 · Long · 直接工具使用

- **Idea：**用 AST 实体读写接口替代易碎的文本补丁。
- **Research Problem：**字符串编辑易因格式漂移或匹配歧义失败。
- **Insight：**更好的工具动作空间可直接提高代码 Agent 可靠性。

#### [Discover and Prove: An Open-source Agentic Framework for Hard Mode Automated Theorem Proving in Lean 4](https://aclanthology.org/2026.acl-long.3/)

ACL 2026 · Long · 直接工具使用

- **Idea：**先用带自反思的自然语言推理发现答案，再把问题交给 Lean 自动证明器构造形式证明。
- **Research Problem：**常见定理证明评测把最终答案写进题目，低估了自主发现答案的难度。
- **Insight：**发现正确答案与完成形式证明是两种不同能力，需要分开评测并衔接。

#### [EGSS: Entropy-guided Stepwise Scaling for Reliable Software Engineering](https://aclanthology.org/2026.acl-long.1359/)

ACL 2026 · Long · 直接工具使用

- **Idea：**以熵引导逐步扩展软件工程搜索，并通过增强测试集选择候选补丁。
- **Research Problem：**大量并行尝试成本高，而缺少可靠候选选择会浪费测试时计算。
- **Insight：**计算预算分配与执行验证必须共同优化，更多尝试才有机会变成更高成功率。

#### [FormalScience: Scalable Human-in-the-Loop Autoformalisation of Science with Agentic Code Generation in Lean](https://aclanthology.org/2026.acl-long.1057/)

ACL 2026 · Long · 直接工具使用

- **Idea：**用人类专家和 Lean 反馈构建科学推理形式化工作流。
- **Research Problem：**语法通过的形式代码仍可能偏离科学语义。
- **Insight：**编译验证需要与领域专家的语义审查结合。

#### [MavenCoder: Competitive Code Generation via Model Adaptive Planning Strategies and Multi-Perspective Verification Enhancement](https://aclanthology.org/2026.acl-long.1403/)

ACL 2026 · Long · 直接工具使用

- **Idea：**按模型能力自适应选择规划策略，并对代码生成的中间过程进行多视角验证。
- **Research Problem：**固定规划、编码、调试流程难以适应模型差异，也难以及早纠错。
- **Insight：**有效代码工作流需要同时调整规划方式和反馈时机。

#### [ParaCodex: A Profiling-Guided Autonomous Coding Agent for Reliable Parallel Code Generation and Translation](https://aclanthology.org/2026.acl-long.732/)

ACL 2026 · Long · 直接工具使用

- **Idea：**以编译、正确性检查和性能剖析循环优化并行代码。
- **Research Problem：**通用代码 Agent 难同时生成正确且高效的 GPU 程序。
- **Insight：**领域流程和真实硬件反馈能改善自主优化。

#### [ReLook: Vision-Grounded RL with a Multimodal LLM Critic for Agentic Web Coding](https://aclanthology.org/2026.acl-long.1167/)

ACL 2026 · Long · 直接工具使用

- **Idea：**训练时调用视觉 critic 检查渲染并指导网页代码修订。
- **Research Problem：**前端正确性不能仅从源码判断。
- **Insight：**真实视觉反馈与无效渲染惩罚可改善代码 Agent。

#### [SpecAgent: A Speculative Retrieval and Forecasting Agent for Code Completion](https://aclanthology.org/2026.acl-long.786/)

ACL 2026 · Long · 直接工具使用

- **Idea：**在索引阶段主动探索仓库并预测未来编辑所需上下文。
- **Research Problem：**实时检索延迟限制代码补全质量。
- **Insight：**部分上下文构建可以提前异步完成。

#### [Towards Trustworthy Smart Contract Synthesis: A Multi-Agent Framework with Lean-Based Verification](https://aclanthology.org/2026.acl-long.1836/)

ACL 2026 · Long · 直接工具使用

- **Idea：**用生成、Lean 验证、攻击测试和修复闭环合成智能合约。
- **Research Problem：**自然语言生成合约容易，但可信性难保障。
- **Insight：**形式验证与经验测试能够提供互补执行反馈。

#### [ChipSeek: Optimizing Verilog Generation via EDA-Integrated Reinforcement Learning](https://aclanthology.org/2026.acl-long.1154/)

ACL 2026 · Long · 扩展相关

- **Idea：**把 EDA 仿真与综合反馈组成分层奖励，并用课程式策略优化训练 Verilog 生成模型。
- **Research Problem：**仅优化功能正确性无法同步改善功耗、性能与面积。
- **Insight：**领域工具能提供多层质量信号，让模型学习正确性之外的工程权衡。

#### [CodeFlowBench: A Multi-turn, Iterative Benchmark for Complex Code Generation](https://aclanthology.org/2026.acl-long.201/)

ACL 2026 · Long · 扩展相关

- **Idea：**构建要求多轮复用已有函数的 codeflow 基准，并用依赖结构衡量代码组织能力。
- **Research Problem：**单轮代码生成评测无法揭示迭代开发中的依赖管理退化。
- **Insight：**跨轮依赖复杂度比孤立函数难度更能暴露持续开发的瓶颈。

#### [From Laboratory to Real-World Applications: Benchmarking Agentic Code Reasoning at the Repository Level](https://aclanthology.org/2026.acl-long.399/)

ACL 2026 · Long · 扩展相关

- **Idea：**用执行驱动变异和程序切片诊断仓库级代码推理。
- **Research Problem：**孤立代码题或黑箱结果难定位跨文件失败。
- **Insight：**整合分散依赖是代码 Agent 的独立瓶颈。

#### [GitChameleon 2.0: Evaluating AI Code Generation Against Python Library Version Incompatibilities](https://aclanthology.org/2026.acl-long.2170/)

ACL 2026 · Long · 扩展相关

- **Idea：**用版本限定的 Python 编程任务和可执行测试，评测模型、RAG 与编码 Agent 的库版本适应能力。
- **Research Problem：**模型生成的代码可能符合某个 API 版本，却无法在指定环境运行。
- **Insight：**工具知识需要绑定实际环境版本，静态记忆的 API 用法不足以保证可执行性。

#### [KoCo-Bench: Can Large Language Models Leverage Domain Knowledge in Software Development?](https://aclanthology.org/2026.acl-long.1311/)

ACL 2026 · Long · 扩展相关

- **Idea：**提供领域知识语料与跨粒度软件任务，评测模型和编码 Agent 获取并应用新 API 知识的能力。
- **Research Problem：**常见代码基准测试已有知识，难以衡量对陌生领域软件栈的适应。
- **Insight：**知识检索或微调并不自动转化为可执行的领域开发能力。

#### [MARS2: Scaling Multi-Agent Tree Search via Reinforcement Learning for Code Generation](https://aclanthology.org/2026.acl-long.1538/)

ACL 2026 · Long · 扩展相关

- **Idea：**在共享搜索树中联合训练多个独立代码生成策略。
- **Research Problem：**单策略搜索的轨迹多样性存在上限。
- **Insight：**异构策略与结构化搜索可共同扩展探索空间。

#### [MMSciCode: Real-world Evaluation of Multilingual Multi-Discipline Scientific Research Coding](https://aclanthology.org/2026.acl-long.1566/)

ACL 2026 · Long · 扩展相关

- **Idea：**构建具有专家标注、单元测试和容器环境的多学科科研编码基准，同时评测模型与编码 Agent。
- **Research Problem：**通用编程基准不足以衡量把论文知识转成科学实现的能力。
- **Insight：**工具执行能改善科研编码表现，但领域理解与科学有效性仍构成明显瓶颈。

#### [OctoBench: Benchmarking Scaffold-Aware Instruction Following in Repository-Grounded Agentic Coding](https://aclanthology.org/2026.acl-long.269/)

ACL 2026 · Long · 扩展相关

- **Idea：**用客观检查项评测代码 Agent 对运行框架规则的遵循。
- **Research Problem：**解决代码任务不代表遵守持续生效的约束。
- **Insight：**功能正确与工作流合规是可分离的执行能力。

#### [RepoGenesis: Benchmarking End-to-End Microservice Generation from Readme to Repository](https://aclanthology.org/2026.acl-long.415/)

ACL 2026 · Long · 扩展相关

- **Idea：**构建从 README 到完整微服务仓库的基准，同时测量部署、API 覆盖和功能正确性。
- **Research Problem：**函数级生成或局部修复评测无法覆盖从零开发系统的能力。
- **Insight：**能部署且有接口并不等于功能正确，跨文件一致性是独立瓶颈。

#### [RExBench: Can coding agents autonomously implement AI research extensions?](https://aclanthology.org/2026.acl-long.745/)

ACL 2026 · Long · 扩展相关

- **Idea：**通过真实论文扩展与自动执行评测研究编码能力。
- **Research Problem：**一般软件修复不足以衡量实现新研究假设的能力。
- **Insight：**研究扩展需要跨论文、代码和实验目标的长期协调。

#### [Taming System Complexity: Demystifying Software Engineering Agents in Diagnosing Linux Kernel Faults](https://aclanthology.org/2026.acl-long.862/)

ACL 2026 · Long · 扩展相关

- **Idea：**用真实内核错误构建故障定位基准并增强 Agent 诊断。
- **Research Problem：**普通软件基准无法代表大规模内核复杂性。
- **Insight：**系统规模与可观测性限制会放大代码定位困难。

#### [When "Correct" Is Not Safe: Can We Trust Functionally Correct Patches Generated by Code Agents?](https://aclanthology.org/2026.acl-long.707/)

ACL 2026 · Long · 扩展相关

- **Idea：**研究通过功能测试但引入安全漏洞的 Agent 补丁。
- **Research Problem：**功能正确率掩盖代码安全风险。
- **Insight：**测试通过不能作为补丁可信性的充分条件。

## 05 · 搜索 / 检索 / Deep Research

34 篇 · CVPR 2 · ACL 32

#### [Paper2Figure: A Multi-Agent Collaborative System for Figure Generation Towards Academic Research Paper](https://openaccess.thecvf.com/content/CVPR2026/html/Han_Paper2Figure_A_Multi-Agent_Collaborative_System_for_Figure_Generation_Towards_Academic_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**生成可编辑 FigScript 并通过渲染反馈迭代论文图。
- **Research Problem：**代码图不灵活，而直接生成图难保证准确和可编辑。
- **Insight：**结构化中间表示能同时支持机器修订与人类控制。

#### [RAAS: LLM Agentic System Architecture Search with GRPO](https://openaccess.thecvf.com/content/CVPR2026/html/Yang_RAAS_LLM_Agentic_System_Architecture_Search_with_GRPO_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**在相同查询上多次比较候选 Agent 架构并优化搜索。
- **Research Problem：**任务难度和执行随机性会污染架构评分。
- **Insight：**公平、稳定的相对评估是自动工作流搜索的前提。

#### [Autonomous Knowledge Graph Exploration with Adaptive Breadth-Depth Retrieval](https://aclanthology.org/2026.acl-long.714/)

ACL 2026 · Long · 直接工具使用

- **Idea：**让语言模型自主交替调用全局节点搜索与单跳邻域探索，平衡知识图谱检索的广度和深度。
- **Research Problem：**固定检索策略难兼顾多跳证据覆盖和检索效率。
- **Insight：**图探索应随问题与当前证据状态动态调整。

#### [DREAM: Deep Research Evaluation with Agentic Metrics](https://aclanthology.org/2026.acl-long.448/)

ACL 2026 · Long · 直接工具使用

- **Idea：**让评估 Agent 主动调用工具核查深度研究报告。
- **Research Problem：**静态评分难发现报告中的时效性和事实缺陷。
- **Insight：**评估者需要具备与研究者相匹配的外部验证能力。

#### [FlowSearch: Advancing Deep Research with Dynamic Structured Knowledge Flow](https://aclanthology.org/2026.acl-long.971/)

ACL 2026 · Long · 直接工具使用

- **Idea：**动态构建结构化知识流，驱动多 Agent 的层级任务分解、并行搜索和反馈修正。
- **Research Problem：**深度研究需要兼顾知识探索的广度与多步依赖推理的深度。
- **Insight：**研究过程中的知识结构应随证据变化，进而反过来指导下一步执行。

#### [IntrAgent: An LLM Agent for Content-Grounded Information Retrieval through Literature Review](https://aclanthology.org/2026.acl-long.29/)

ACL 2026 · Long · 直接工具使用

- **Idea：**先按文献结构排序相关章节，再迭代阅读并提取细节完成有依据的信息检索。
- **Research Problem：**科研查询要求细粒度且忠实于原文的信息，常规 RAG 容易遗漏关键细节。
- **Insight：**章节层面的结构引导与反复阅读可以相互补充，改善跨领域证据提取。

#### [MemSearch-o1: Empowering Large Language Models with Reasoning-Aligned Memory Growth in Agentic Search](https://aclanthology.org/2026.acl-long.41/)

ACL 2026 · Long · 直接工具使用

- **Idea：**从查询种子生长细粒度记忆，再依据贡献回溯修订并组织全局记忆路径。
- **Research Problem：**多轮搜索不断累积上下文，导致有效证据被稀释或在压缩中丢失。
- **Insight：**搜索记忆应沿推理关系有选择地生长，而非只按时间顺序拼接。

#### [MMSearch-R1: Incentivizing LMMs to Search](https://aclanthology.org/2026.acl-long.114/)

ACL 2026 · Long · 直接工具使用

- **Idea：**通过带搜索成本的端到端强化学习，让多模态模型自主决定何时调用图像或文本搜索。
- **Research Problem：**固定检索流水线难以兼顾知识获取与搜索效率。
- **Insight：**同时提供需要搜索和无需搜索的训练样本，是学会按需用工具的关键。

#### [Paper Circle: An Open-source Multi-agent Research Discovery and Analysis Framework](https://aclanthology.org/2026.acl-long.1952/)

ACL 2026 · Long · 直接工具使用

- **Idea：**以检索、排序和论文知识图谱构建可复现研究 Agent 流程。
- **Research Problem：**文献发现与精细分析分散且耗费人工。
- **Insight：**统一结构化中间产物有助于连接检索与证据核查。

#### [SGVEF-LOOP: Coverage-Guided Progressive Topological Exploration and Fact-Grounded Metamorphic Evaluation for MCP Agents](https://aclanthology.org/2026.acl-long.1224/)

ACL 2026 · Long · 直接工具使用

- **Idea：**用覆盖驱动探索和有事实依据的蜕变测试评测 MCP Agent。
- **Research Problem：**庞大工具组合空间难靠固定测试充分覆盖。
- **Insight：**执行反馈可同时指导探索盲区和自动构造可验证测试。

#### [SPARKLE: A Structured and Plug-and-play Agentic Retrieval Policy for Adaptive RAG Models](https://aclanthology.org/2026.acl-long.1793/)

ACL 2026 · Long · 直接工具使用

- **Idea：**训练独立代理模型控制检索，并将检索器和 LLM 视为环境。
- **Research Problem：**自适应检索要么缺监督，要么需昂贵主模型微调。
- **Insight：**检索策略可作为可迁移模块独立学习。

#### [ToolOmni: Enabling Open-World Tool Use via Agentic learning with Proactive Retrieval and Grounded Execution](https://aclanthology.org/2026.acl-long.1736/)

ACL 2026 · Long · 直接工具使用

- **Idea：**联合训练主动工具检索与基于工具规格的执行。
- **Research Problem：**静态检索和参数记忆难应对开放、变化的工具库。
- **Insight：**工具发现与执行应在同一推理闭环中协同学习。

#### [What Makes AI Research Replicable? Executable Knowledge Graphs as Scientific Knowledge Representations](https://aclanthology.org/2026.acl-short.70/)

ACL 2026 · Short · 直接工具使用

- **Idea：**构建融合论文技术细节与代码片段的可执行知识图谱，为复现 Agent 提供多粒度检索和复用。
- **Research Problem：**普通 RAG 难以捕获引用文献中的隐含细节及实现层面的知识。
- **Insight：**科学复现的外部记忆应关联概念与代码，使检索结果能直接支持执行。

#### [A Survey of Large Language Model-Based Search Agents](https://aclanthology.org/2026.acl-long.374/)

ACL 2026 · Long · 扩展相关

- **Idea：**按架构、优化、应用和评测梳理 LLM 搜索 Agent。
- **Research Problem：**搜索 Agent 的动态交互范式缺少统一整理。
- **Insight：**主动多轮信息获取需要同时讨论计划、工具和评价。

#### [AMATA: Adaptive Multi-Agent Trajectory Alignment for Knowledge-Intensive Question Answering](https://aclanthology.org/2026.acl-long.359/)

ACL 2026 · Long · 扩展相关

- **Idea：**用轨迹偏好对齐协调多 Agent 的外部工具依赖。
- **Research Problem：**独立优化各 Agent 难保证知识协作一致。
- **Insight：**关键角色贡献与跨 Agent 工具依赖需联合建模。

#### [BrowseComp-Plus: A Fair and Disentangled Evaluation Benchmark for Deep Search Agents](https://aclanthology.org/2026.acl-long.1023/)

ACL 2026 · Long · 扩展相关

- **Idea：**用固定、人工核验语料分离搜索器与 Agent 的贡献。
- **Research Problem：**动态黑箱搜索 API 妨碍公平比较和复现。
- **Insight：**受控检索环境能明确性能增益来自哪一环节。

#### [Can Compact Language Models Search Like Agents? Distillation-Guided Policy Optimization for Preserving Agentic RAG Capabilities](https://aclanthology.org/2026.acl-long.1751/)

ACL 2026 · Long · 扩展相关

- **Idea：**用教师冷启动和持续指导训练小规模搜索 Agent。
- **Research Problem：**小模型初始能力弱导致奖励稀疏和训练不稳。
- **Insight：**蒸馏指导可以在策略优化期间持续发挥作用。

#### [Chaining the Evidence: Robust Reinforcement Learning for Deep Search Agents with Citation-Aware Rubric Rewards](https://aclanthology.org/2026.acl-long.950/)

ACL 2026 · Long · 扩展相关

- **Idea：**将问题拆成带引用的单跳准则并奖励完整证据链。
- **Research Problem：**二元终局奖励容易鼓励搜索捷径和幻觉。
- **Insight：**证据覆盖、引用和连接关系都应接受监督。

#### [Cognitive Scaffold: From Fluid Context to Crystallized Memory for Long-Horizon DeepResearch Agents](https://aclanthology.org/2026.acl-long.1170/)

ACL 2026 · Long · 扩展相关

- **Idea：**把工作上下文与持久知识图区分，并按推理需要恢复证据。
- **Research Problem：**线性历史积累稀释证据，普通摘要会丢失数值实体。
- **Insight：**压缩必须保留原子事实和可检索结构。

#### [D2Plan: Dual-Agent Dynamic Global Planning for Complex Retrieval-Augmented Reasoning](https://aclanthology.org/2026.acl-long.216/)

ACL 2026 · Long · 扩展相关

- **Idea：**让规划推理器与证据净化器协作完成多跳搜索。
- **Research Problem：**错误查询和无关证据会共同破坏搜索链。
- **Insight：**全局计划与证据筛选应随检索反馈动态更新。

#### [DeepFact: Co-Evolving Benchmarks and Agents for Deep Research Factuality](https://aclanthology.org/2026.acl-long.1586/)

ACL 2026 · Long · 扩展相关

- **Idea：**先审计有争议证据再评分，动态修订研究事实基准。
- **Research Problem：**复杂领域事实连专家一次性标注也可能出错。
- **Insight：**可审计、可修订的标签比静态权威答案更可靠。

#### [DR-Arena: an Automated Evaluation Framework for Deep Research Agents](https://aclanthology.org/2026.acl-long.1249/)

ACL 2026 · Long · 扩展相关

- **Idea：**从实时网页生成信息树并动态提高研究任务难度。
- **Research Problem：**静态研究基准面临时效性、污染和能力饱和。
- **Insight：**任务深度与覆盖广度可以随模型表现自适应测试。

#### [End-to-End Optimization of LLM-Driven Multi-Agent Search Systems via Heterogeneous-Group-Based Reinforcement Learning](https://aclanthology.org/2026.acl-long.1399/)

ACL 2026 · Long · 扩展相关

- **Idea：**按异构多 Agent rollout 的相对收益端到端训练搜索系统。
- **Research Problem：**独立角色优化和大型 critic 成本高且不稳定。
- **Insight：**训练目标应面向系统整体成功并捕捉角色依赖。

#### [Enhancing LLM-based Search Agents via Contribution Weighted Group Relative Policy Optimization](https://aclanthology.org/2026.acl-long.1462/)

ACL 2026 · Long · 扩展相关

- **Idea：**用每轮检索效用与推理正确性加权终局优势。
- **Research Problem：**过程奖励估计不稳，结果奖励又难归因。
- **Insight：**过程贡献可用于重新分配稳定的结果信号。

#### [FS-Researcher: Test-Time Scaling for Long-Horizon Research Tasks with File-System-Based Agents](https://aclanthology.org/2026.acl-long.288/)

ACL 2026 · Long · 扩展相关

- **Idea：**用文件系统保存证据，由检索与写作 Agent 分工研究。
- **Research Problem：**研究轨迹挤占上下文并限制进一步扩展。
- **Insight：**持久工作区可同时充当外部记忆与协作接口。

#### [KARL: Reinforcement Learning for LLM Agents on Multi-Turn Knowledge-Intensive Agentic Tasks](https://aclanthology.org/2026.acl-long.2196/)

ACL 2026 · Long · 扩展相关

- **Idea：**用好奇心奖励和在线强化学习训练主动知识探索。
- **Research Problem：**被动检索限制知识密集多轮任务中的决策能力。
- **Insight：**何时、获取什么知识应作为 Agent 策略学习的一部分。

#### [Mitigating Context Interference for Reliable and Efficient Search Agents](https://aclanthology.org/2026.acl-long.160/)

ACL 2026 · Long · 扩展相关

- **Idea：**在搜索训练和推理中动态提炼最新检索上下文。
- **Research Problem：**多轮检索不断引入干扰信息。
- **Insight：**最新返回文档本身就是重要干扰源，需先精炼再推理。

#### [OCR-Memory: Optical Context Retrieval for Long-Horizon Agent Memory](https://aclanthology.org/2026.acl-long.474/)

ACL 2026 · Long · 扩展相关

- **Idea：**将轨迹光学编码，并通过视觉定位恢复原文。
- **Research Problem：**文本摘要节省上下文却可能丢失证据。
- **Insight：**高密度存储应配合忠实检索，而非重新生成记忆。

#### [PolitNuggets: Benchmarking Agentic Discovery of Long-Tail Political Facts](https://aclanthology.org/2026.acl-long.2085/)

ACL 2026 · Long · 扩展相关

- **Idea：**以政治人物长尾事实发现评测多语言研究 Agent。
- **Research Problem：**现有评测难衡量分散细粒度事实的发现与综合。
- **Insight：**检索数量不足以代表研究质量，还应衡量证据支持和效率。

#### [Reinforcing Agentic Search Via Reward Density Optimization](https://aclanthology.org/2026.acl-long.467/)

ACL 2026 · Long · 扩展相关

- **Idea：**以子目标奖励、纠错提示和双 Agent 分工提高搜索奖励密度。
- **Research Problem：**高探索成本下正反馈过于稀少。
- **Insight：**单位探索成本获取多少有效奖励比单纯增加 rollout 更关键。

#### [Rethinking Reasoning-Intensive Retrieval: Evaluating and Advancing Retrievers in Agentic Search Systems](https://aclanthology.org/2026.acl-long.1705/)

ACL 2026 · Long · 扩展相关

- **Idea：**在实际搜索 Agent 中评估检索器对推理证据的贡献。
- **Research Problem：**孤立文档相关性指标难反映真实工作流价值。
- **Insight：**检索质量应以支持下游推理的效用衡量。

#### [SearchGym: Bootstrapping Real-World Search Agents via Cost-Effective and High-Fidelity Environment Simulation](https://aclanthology.org/2026.acl-long.848/)

ACL 2026 · Long · 扩展相关

- **Idea：**合成事实一致的知识图与文档环境来训练搜索 Agent。
- **Research Problem：**真实 API 昂贵，静态语料错配又污染奖励。
- **Insight：**高保真、可验证模拟可以支持向真实搜索迁移。

#### [Trust Within? Seek Beyond? Knowledge Boundary Aware Policy Optimization for Agentic Search](https://aclanthology.org/2026.acl-long.1276/)

ACL 2026 · Long · 扩展相关

- **Idea：**按内部知识置信度和检索质量联合训练搜索决策。
- **Research Problem：**Agent 容易盲信噪声证据或在双重知识缺失时幻觉。
- **Insight：**是否检索和是否相信结果应由知识边界决定。

#### [WebAggregator: Enhancing Compositional Reasoning Capabilities of Deep Research Agent Foundation Models](https://aclanthology.org/2026.acl-long.1124/)

ACL 2026 · Long · 扩展相关

- **Idea：**合成要求分散证据组合推理的深度研究任务。
- **Research Problem：**现有训练过重检索而轻视证据聚合。
- **Insight：**即便检索完美，组合推理仍可能决定性能上限。

## 06 · 规划 / 记忆 / 工作流

33 篇 · CVPR 0 · ACL 33

#### [ACE-Router: Generalizing History-Aware Routing from MCP Tools to the Agent Web](https://aclanthology.org/2026.acl-long.281/)

ACL 2026 · Long · 直接工具使用

- **Idea：**从工具依赖图合成多轮轨迹，训练历史感知路由器。
- **Research Problem：**海量工具和 Agent 使静态路由难以扩展。
- **Insight：**路由必须理解历史执行状态及候选间依赖。

#### [Agentic Memory: Learning Unified Long-Term and Short-Term Memory Management for Large Language Model Agents](https://aclanthology.org/2026.acl-long.981/)

ACL 2026 · Long · 直接工具使用

- **Idea：**将长期与短期记忆操作作为工具动作统一进行强化学习。
- **Research Problem：**分离的启发式记忆管理难端到端优化。
- **Insight：**存取、更新、摘要和遗忘都应服务最终任务策略。

#### [Beyond the Context Window: Scaling Agentic RL via End-to-end Optimized Context Compression](https://aclanthology.org/2026.acl-long.966/)

ACL 2026 · Long · 直接工具使用

- **Idea：**将历史摘要纳入端到端强化学习以延长工具交互。
- **Research Problem：**固定上下文窗口限制长轨迹训练和执行。
- **Insight：**记忆压缩策略与工具策略应共同优化。

#### [Branch-and-Browse: Efficient and Controllable Web Exploration with Tree-Structured Reasoning and Action Memory](https://aclanthology.org/2026.acl-long.838/)

ACL 2026 · Long · 直接工具使用

- **Idea：**以树形子任务、网页状态回放和动作记忆组织浏览。
- **Research Problem：**线性探索缺少回退，粗粒度搜索又昂贵。
- **Insight：**结构化分支与可复用动作能兼顾深度和效率。

#### [CostBench: Evaluating Multi-Turn Cost-Optimal Planning and Adaptation in Dynamic Environments for LLM Tool-Use Agents](https://aclanthology.org/2026.acl-long.584/)

ACL 2026 · Long · 直接工具使用

- **Idea：**以动态成本、工具故障和多解路径评测成本最优规划。
- **Research Problem：**只看完成率忽略经济性和环境变化后的重规划。
- **Insight：**可行计划与成本最优且可适应的计划之间存在显著差距。

#### [EVOTOOL: Self-Evolving Tool-Use Policy Optimization in LLM Agents via Blame-Aware Mutation and Diversity-Aware Selection](https://aclanthology.org/2026.acl-long.2016/)

ACL 2026 · Long · 直接工具使用

- **Idea：**将工具策略拆成规划、选择、调用和综合模块并定向演化。
- **Research Problem：**整体优化难定位模块间错误传播。
- **Insight：**定位责任模块后局部变异并保留多样候选能改善策略搜索。

#### [GATE: Graph-based Adaptive Tool Evolution Across Diverse Tasks](https://aclanthology.org/2026.acl-long.87/)

ACL 2026 · Long · 直接工具使用

- **Idea：**用可持续演化的层级工具图构建和复用工具。
- **Research Problem：**现有工具创造方法难以跨任务积累可靠能力。
- **Insight：**工具之间的依赖与复用关系可成为持续进化的结构。

#### [Mem2ActBench: A Benchmark for Evaluating Long-Term Memory Utilization in Task-Oriented Autonomous Agents](https://aclanthology.org/2026.acl-long.370/)

ACL 2026 · Long · 直接工具使用

- **Idea：**评测 Agent 能否将长期记忆转化为工具选择和参数。
- **Research Problem：**记忆问答基准只测事实回忆而不测行动应用。
- **Insight：**记住偏好不等于能在未被提醒时将其落实到调用。

#### [Mem2Evolve: Towards Self-Evolving Agents via Co-Evolutionary Capability Expansion and Experience Distillation](https://aclanthology.org/2026.acl-long.952/)

ACL 2026 · Long · 直接工具使用

- **Idea：**让经验记忆与新工具／专家资产共同演化。
- **Research Problem：**只积累经验或只生成工具都限制能力成长。
- **Insight：**经验可指导创造能力，新能力又产生新经验。

#### [Memory-Augmented LLM-based Multi-Agent System for Automated Feature Generation on Tabular Data](https://aclanthology.org/2026.acl-long.503/)

ACL 2026 · Long · 直接工具使用

- **Idea：**动态路由特征生成 Agent，并用多类记忆积累训练反馈。
- **Research Problem：**固定特征模板和缺少目标反馈限制有效探索。
- **Insight：**特征生成需要结合任务语义与实际学习收益。

#### [SEARL: Joint Optimization of Policy and Tool Graph Memory for Self-Evolving Agents](https://aclanthology.org/2026.acl-long.1125/)

ACL 2026 · Long · 直接工具使用

- **Idea：**联合学习工具图记忆和 Agent 策略。
- **Research Problem：**终局奖励稀疏且经验难在轨迹间复用。
- **Insight：**将功能相近的状态与工具连接可复用经验并丰富学习信号。

#### [ToolScope: Enhancing LLM Agent Tool Use through Tool Merging and Context-Aware Filtering](https://aclanthology.org/2026.acl-long.1573/)

ACL 2026 · Long · 直接工具使用

- **Idea：**自动合并冗余工具并按查询筛选相关工具。
- **Research Problem：**同质工具描述与上下文限制导致选择混淆。
- **Insight：**先降低工具空间冗余，再检索，比直接堆入全部工具更有效。

#### [TPS-Bench: Evaluating AI Agents’ Tool Planning & Scheduling Abilities in Compounding Tasks](https://aclanthology.org/2026.acl-long.1614/)

ACL 2026 · Long · 直接工具使用

- **Idea：**评测复合任务中的工具规划、并行调度与运行效率。
- **Research Problem：**选对工具不代表能高效安排执行顺序。
- **Insight：**完成率与并行效率存在可训练的调度权衡。

#### [A Goal Without a Plan Is Just a Wish: Efficient and Effective Global Planner Training for Long-Horizon Agent Tasks](https://aclanthology.org/2026.acl-long.597/)

ACL 2026 · Long · 扩展相关

- **Idea：**通过优质计划冷启动和执行者能力增益奖励训练全局规划器。
- **Research Problem：**缺少全局计划使长程 Agent 盲目试错。
- **Insight：**计划质量应由对实际执行者的帮助衡量。

#### [AgencyBench: Benchmarking the Frontiers of Autonomous Agents in 1M-Token Real-World Contexts](https://aclanthology.org/2026.acl-long.337/)

ACL 2026 · Long · 扩展相关

- **Idea：**在长上下文真实任务中以模拟用户和沙箱自动评测 Agent。
- **Research Problem：**现有基准偏重单一能力且真实任务评测难扩展。
- **Insight：**长时程交付暴露的反馈利用和资源效率差异不能由短任务替代。

#### [Agentic Rubrics as Contextual Verifiers for SWE Agents](https://aclanthology.org/2026.acl-long.697/)

ACL 2026 · Long · 扩展相关

- **Idea：**让专家 Agent 阅读仓库生成上下文评分准则来评估补丁。
- **Research Problem：**执行测试的环境成本高，通用打分器又缺代码背景。
- **Insight：**主动取证形成的准则可提供细粒度且可扩展的验证。

#### [Aligning Agents via Planning: A Benchmark for Trajectory-Level Reward Modeling](https://aclanthology.org/2026.acl-long.1062/)

ACL 2026 · Long · 扩展相关

- **Idea：**构建覆盖拒绝、工具不可用、规划和恢复的轨迹奖励基准。
- **Research Problem：**现有奖励模型缺少长程工具轨迹偏好的专项评测。
- **Insight：**答案级评估能力不能直接迁移到整条行动轨迹的判断。

#### [CoEvolve: Training LLM Agents via Agent-Data Mutual Evolution](https://aclanthology.org/2026.acl-long.1055/)

ACL 2026 · Long · 扩展相关

- **Idea：**用遗忘和不确定性反馈生成并验证新的交互训练任务。
- **Research Problem：**静态数据分布不能跟上 Agent 能力变化。
- **Insight：**模型与环境任务分布可以共同演化。

#### [COMPASS: Enhancing Agent Long-Horizon Reasoning with Evolving Context](https://aclanthology.org/2026.acl-long.152/)

ACL 2026 · Long · 扩展相关

- **Idea：**将执行、战略监督和上下文整理交给三个协作组件。
- **Research Problem：**长工具轨迹使模型遗漏证据并重复犯错。
- **Insight：**长程能力受上下文组织质量限制，不能仅靠增加历史长度。

#### [DeepPlanning: Benchmarking Long-Horizon Agentic Planning with Verifiable Constraints](https://aclanthology.org/2026.acl-long.335/)

ACL 2026 · Long · 扩展相关

- **Idea：**用旅行与购物任务评测主动取证和全局约束规划。
- **Research Problem：**局部步骤评测不足以衡量长期预算与约束优化。
- **Insight：**高质量计划需要把信息获取与全局资源分配共同考虑。

#### [Evolving Agents](https://aclanthology.org/2026.acl-long.754/)

ACL 2026 · Long · 扩展相关

- **Idea：**从经验提炼准符号机制并用控制器管理探索与回退。
- **Research Problem：**孤立记忆和推理难形成可复用适应机制。
- **Insight：**可实例化的机制抽象比单条历史记录更利于迁移。

#### [EvoRoute: Experience-Driven Self-Routing LLM Agent Systems](https://aclanthology.org/2026.acl-long.1771/)

ACL 2026 · Long · 扩展相关

- **Idea：**从历史经验学习每一步的模型路由。
- **Research Problem：**固定模型分工难兼顾能力、价格和延迟。
- **Insight：**不同交互步骤适合不同性能—成本组合。

#### [How Memory Management Impacts LLM Agents: An Empirical Study of Experience-Following Behavior](https://aclanthology.org/2026.acl-long.27/)

ACL 2026 · Long · 扩展相关

- **Idea：**控制记忆增删以研究 Agent 对历史经验的依从行为。
- **Research Problem：**历史执行记录可能传播错误或误导新任务。
- **Insight：**后续任务表现可以反过来评估经验是否值得保留。

#### [LLM-as-Scheduler: Agentic Workflow Dynamic Scheduling](https://aclanthology.org/2026.acl-long.581/)

ACL 2026 · Long · 扩展相关

- **Idea：**用轻量门控与 LLM 调度器选择每个查询所需工作流。
- **Research Problem：**固定多 Agent 流程对简单问题开销过大。
- **Insight：**验证与协作深度应由当前输出质量动态决定。

#### [No More Stale Feedback: Co-Evolving Critics for Open-World Agent Learning](https://aclanthology.org/2026.acl-long.576/)

ACL 2026 · Long · 扩展相关

- **Idea：**同步训练策略和批评器以保持纠错反馈有效。
- **Research Problem：**固定批评器会落后于策略不断变化的错误。
- **Insight：**反馈模型应随被指导者共同演化。

#### [PACE: Predictive Adaptive Context Extraction for Long-Horizon LLM Agents](https://aclanthology.org/2026.acl-long.1252/)

ACL 2026 · Long · 扩展相关

- **Idea：**根据下一动作预测调整历史信息保留粒度。
- **Research Problem：**全量历史太长，激进摘要又过早删除关键内容。
- **Insight：**记忆选择应依据未来用途，而不只是过去显著性。

#### [Powering Verifiable Learning via Automated Evolutionary Data Synthesis](https://aclanthology.org/2026.acl-long.1099/)

ACL 2026 · Long · 扩展相关

- **Idea：**共同进化问题、候选解和可执行验证器，并通过一致性评估选择数据生成策略。
- **Research Problem：**合成训练数据中的错误或弱验证器难以为代码和 Agent 任务提供可靠奖励。
- **Insight：**可验证性应成为数据合成时共同优化的目标，而非事后的过滤条件。

#### [PRInTS: Reward Modeling for Long-Horizon Information Seeking](https://aclanthology.org/2026.acl-long.1574/)

ACL 2026 · Long · 扩展相关

- **Idea：**用多维过程评分和轨迹摘要指导长程信息搜索。
- **Research Problem：**短推理奖励模型无法评价工具信息量及长历史。
- **Insight：**工具反馈解释质量与调用信息价值需要共同进入评分。

#### [ProActor: Timing-Aware Reinforcement Learning for Proactive Task Scheduling Agents](https://aclanthology.org/2026.acl-long.832/)

ACL 2026 · Long · 扩展相关

- **Idea：**用机会时间窗和阶段奖励训练主动软件任务调度。
- **Research Problem：**主动助手缺少对何时行动的统一训练与评测。
- **Insight：**动作选对与时机选对需要联合优化。

#### [RSMeM: Knowledge-Enhanced Memory Evolution for Remote Sensing Agents with Systematic Evaluation](https://aclanthology.org/2026.acl-long.1519/)

ACL 2026 · Long · 扩展相关

- **Idea：**结合遥感领域知识检索和失败轨迹提炼形成演化记忆。
- **Research Problem：**通用 Agent 缺少领域约束且难积累执行经验。
- **Insight：**把失败压缩为可复用约束能提升后续工具执行可靠性。

#### [SPARK: Strategic Policy-Aware Exploration via Dynamic Branching for Long-Horizon Agentic Learning](https://aclanthology.org/2026.acl-long.1100/)

ACL 2026 · Long · 扩展相关

- **Idea：**在关键决策状态自适应分支以提高长程探索效率。
- **Research Problem：**均匀扩展 rollout 将预算浪费在简单步骤。
- **Insight：**探索预算应集中于会改变后续结果的状态。

#### [SPIO: Ensemble and Selective Strategies via LLM-Based Multi-Agent Planning in Automated Data Science](https://aclanthology.org/2026.acl-long.1039/)

ACL 2026 · Long · 扩展相关

- **Idea：**在数据处理、特征、模型和调参阶段探索多条候选流程。
- **Research Problem：**单路径自动数据科学容易陷入次优方案。
- **Insight：**策略选择与集成可以作为模块级规划决策。

#### [The Bitter Lesson of Diffusion Language Models for Agentic Workflows: A Comprehensive Reality Check](https://aclanthology.org/2026.acl-long.2036/)

ACL 2026 · Long · 扩展相关

- **Idea：**比较扩散语言模型在具身规划和精确函数调用中的表现。
- **Research Problem：**并行生成速度优势是否能转化为可靠 Agent 能力不明确。
- **Insight：**当前扩散模型更适合部分辅助角色，时序反馈和格式精度仍是瓶颈。

## 07 · 具身 / 导航 / 游戏

31 篇 · CVPR 17 · ACL 14

#### [SAGE: Scalable Agentic 3D Scene Generation for Embodied AI](https://openaccess.thecvf.com/content/CVPR2026/html/Xia_SAGE_Scalable_Agentic_3D_Scene_Generation_for_Embodied_AI_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**用生成器、批评器和自适应工具选择构建可仿真的 3D 场景。
- **Research Problem：**真实具身数据昂贵，规则场景又缺真实感和物理有效性。
- **Insight：**场景生成也可成为带语义与物理反馈的 Agent 工作流。

#### [AwareVLN: Reasoning with Self-awareness for Vision-Language Navigation](https://openaccess.thecvf.com/content/CVPR2026/html/Guo_AwareVLN_Reasoning_with_Self-awareness_for_Vision-Language_Navigation_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**显式建模导航状态与语义任务进度。
- **Research Problem：**直接动作预测缺少对自身位置和执行阶段的理解。
- **Insight：**状态自觉可为长程导航提供可解释的决策依据。

#### [BridgeEQA: Virtual Embodied Agents for Real Bridge Inspections](https://openaccess.thecvf.com/content/CVPR2026/html/Varghese_BridgeEQA_Virtual_Embodied_Agents_for_Real_Bridge_Inspections_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**以真实桥梁巡检报告构建具身问答并引入视觉记忆推理。
- **Research Problem：**真实巡检缺少长程、多尺度的具身评测。
- **Insight：**答案质量还需由相关图像证据与空间记忆支撑。

#### [Context-Nav: Context-Driven Exploration and Viewpoint-Aware 3D Spatial Reasoning for Instance Navigation](https://openaccess.thecvf.com/content/CVPR2026/html/Jang_Context-Nav_Context-Driven_Exploration_and_Viewpoint-Aware_3D_Spatial_Reasoning_for_Instance_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**用完整描述引导全局探索，并以视点感知几何验证目标。
- **Research Problem：**相似物体使导航容易在语义似是而非的位置停止。
- **Insight：**上下文探索与几何验证分别解决去哪找和是否找对。

#### [Counterfactual VLA: Self-Reflective Vision-Language-Action Model with Adaptive Reasoning](https://openaccess.thecvf.com/content/CVPR2026/html/Peng_Counterfactual_VLA_Self-Reflective_Vision-Language-Action_Model_with_Adaptive_Reasoning_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**执行前用反事实推理检查并修正驾驶元动作。
- **Research Problem：**描述行动意图不能保证动作安全。
- **Insight：**推理应产生可修改动作的因果反馈。

#### [DecoVLN: Decoupling Observation, Reasoning, and Correction for Vision-and-Language Navigation](https://openaccess.thecvf.com/content/CVPR2026/html/Xin_DecoVLN_Decoupling_Observation_Reasoning_and_Correction_for_Vision-and-Language_Navigation_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**优化历史帧记忆并按轨迹偏离程度筛选纠错训练数据。
- **Research Problem：**长导航历史冗余且早期错误不断累积。
- **Insight：**记忆质量与可信状态上的纠错学习需同步改善。

#### [Experience Transfer for Multimodal LLM Agents in Minecraft Game](https://openaccess.thecvf.com/content/CVPR2026/html/Li_Experience_Transfer_for_Multimodal_LLM_Agents_in_Minecraft_Game_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**用多维经验表示和类比检索迁移 Minecraft 技能。
- **Research Problem：**静态历史记录难转化为新任务可用知识。
- **Insight：**可迁移的结构与功能关系比原样重放轨迹更有价值。

#### [FantasyVLN: Unified Multimodal Chain-of-Thought Reasoning for Vision-and-Language Navigation](https://openaccess.thecvf.com/content/CVPR2026/html/Zuo_FantasyVLN_Unified_Multimodal_Chain-of-Thought_Reasoning_for_Vision-and-Language_Navigation_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**训练时融合多模态思维链，推理时直接输出导航动作。
- **Research Problem：**显式多模态推理延迟过高。
- **Insight：**推理知识可内化为动作表示而不必逐次生成完整思维链。

#### [History to Future: Evolving Agent with Experience and Thought for Zero-shot Vision-and-Language Navigation](https://openaccess.thecvf.com/content/CVPR2026/html/Dai_History_to_Future_Evolving_Agent_with_Experience_and_Thought_for_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**同时总结历史经验并预测未来动作和地标。
- **Research Problem：**无反馈的零样本导航容易持续重复初始错误。
- **Insight：**回顾失败与前瞻进度可协同改进下一步决策。

#### [MindPower: Enabling Theory-of-Mind Reasoning in VLM-based Embodied Agents](https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_MindPower_Enabling_Theory-of-Mind_Reasoning_in_VLM-based_Embodied_Agents_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**联合建模机器人与人的心理状态来指导动作。
- **Research Problem：**具身 Agent 缺少将他人意图转成一致行为的能力。
- **Insight：**心理推理只有约束实际动作才对协作有用。

#### [NitroGen: An Open Foundation Model for Generalist Gaming Agents](https://openaccess.thecvf.com/content/CVPR2026/html/Magne_NitroGen_An_Open_Foundation_Model_for_Generalist_Gaming_Agents_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**从大规模游戏视频学习跨游戏视觉—动作基础策略。
- **Research Problem：**单游戏训练难形成通用交互能力。
- **Insight：**多样视频动作经验可迁移到未见游戏。

#### [ProFocus: Proactive Perception and Focused Reasoning in Vision-and-Language Navigation](https://openaccess.thecvf.com/content/CVPR2026/html/Xue_ProFocus_Proactive_Perception_and_Focused_Reasoning_in_Vision-and-Language_Navigation_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**主动查询缺失视觉信息，并筛选高价值历史导航节点。
- **Research Problem：**被动全景感知和无差别历史使用造成冗余。
- **Insight：**感知需求应由决策问题反向驱动。

#### [Progress-Think: Semantic Progress Reasoning for Vision-Language Navigation](https://openaccess.thecvf.com/content/CVPR2026/html/Wang_Progress-Think_Semantic_Progress_Reasoning_for_Vision-Language_Navigation_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**从视觉历史推断语义进度并联合训练导航策略。
- **Research Problem：**数字进度或直接动作不足以表达长指令的完成阶段。
- **Insight：**观察与指令的共同推进可形成更可靠的状态表示。

#### [Recurrent Reasoning with Vision-Language Models for Estimating Long-Horizon Embodied Task Progress](https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_Recurrent_Reasoning_with_Vision-Language_Models_for_Estimating_Long-Horizon_Embodied_Task_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**循环处理短片段并维护任务步骤与完成状态。
- **Research Problem：**整体处理长行动视频代价高且忽略推理潜力。
- **Insight：**显式进度状态可服务后续规划、奖励与主动辅助。

#### [RoboAgent: Chaining Basic Capabilities for Embodied Task Planning](https://openaccess.thecvf.com/content/CVPR2026/html/Xu_RoboAgent_Chaining_Basic_Capabilities_for_Embodied_Task_Planning_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**由同一 VLM 调度独立上下文的基础能力完成具身规划。
- **Research Problem：**单一长历史推理难处理复杂多轮任务。
- **Insight：**能力分解与上下文隔离有助于组织行动，无需额外外部工具。

#### [Thinking in 360deg: Humanoid Visual Search in the Wild](https://openaccess.thecvf.com/content/CVPR2026/html/Yu_Thinking_in_360deg_Humanoid_Visual_Search_in_the_Wild_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**在真实全景图中通过主动转头搜索物体与路径。
- **Research Problem：**静态图像搜索忽略具身视角变化。
- **Insight：**高效搜索需要将空间常识转为主动观察动作。

#### [Towards Open Environments and Instructions: General Vision-Language Navigation via Fast-Slow Interactive Reasoning](https://openaccess.thecvf.com/content/CVPR2026/html/Li_Towards_Open_Environments_and_Instructions_General_Vision-Language_Navigation_via_Fast-Slow_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**让慢反思从执行记忆提炼经验来改进快速导航。
- **Research Problem：**封闭环境训练难适应新场景与新指令。
- **Insight：**快执行与慢学习持续交互有利于开放环境适应。

#### [ALDEN: Reinforcement Learning for Active Navigation and Evidence Gathering in Long Documents](https://aclanthology.org/2026.acl-long.611/)

ACL 2026 · Long · 直接工具使用

- **Idea：**用多轮强化学习训练文档 Agent 联合搜索和直接取页，并以分层奖励和视觉语义约束稳定学习。
- **Research Problem：**长文档理解需要主动定位证据，单次读取或仅语义搜索难以利用页面结构。
- **Insight：**直接按页访问是搜索的互补动作，能把文档结构转化为可学习的导航优势。

#### [E-ViC: Reasoning Beyond Text via Embodied Visual Chain for Spatial Intelligence](https://aclanthology.org/2026.acl-long.1870/)

ACL 2026 · Long · 直接工具使用

- **Idea：**将放大和标记等视觉操作变成可执行空间推理原语。
- **Research Problem：**纯文本思维链绕过细粒度视觉验证。
- **Insight：**结果奖励可以涌现先观察再确认的工具使用策略。

#### [Breaking Down and Building Up: Mixture of Skill-Based Vision-and-Language Navigation Agents](https://aclanthology.org/2026.acl-long.595/)

ACL 2026 · Long · 扩展相关

- **Idea：**将导航拆成原子技能并按观测动态路由专门 Agent。
- **Research Problem：**单一策略难泛化到新环境和复杂指令。
- **Insight：**明确技能边界有助于训练与组合迁移。

#### [Communication-Efficient Desire Alignment for Proactive Embodied Human–Agent Interaction](https://aclanthology.org/2026.acl-long.641/)

ACL 2026 · Long · 扩展相关

- **Idea：**用目标记忆和需求推理减少具身助手的重复澄清。
- **Research Problem：**用户不愿在长期服务中反复说明偏好。
- **Insight：**主动服务需在任务风险与沟通成本间平衡。

#### [Conflict-Aware Memory for Embodied Agents: Enhancing Vector Data Quality via Detection Rules](https://aclanthology.org/2026.acl-long.1306/)

ACL 2026 · Long · 扩展相关

- **Idea：**用冲突检测规则维护具身 Agent 的向量记忆质量。
- **Research Problem：**语义冲突的相似记录可能误导实际动作。
- **Insight：**相似度检索需要补充冲突一致性检查。

#### [DEFT: Demystifying VLN Failures via a Unified Dual-View Explainability Framework for LLM-based Agents](https://aclanthology.org/2026.acl-long.1363/)

ACL 2026 · Long · 扩展相关

- **Idea：**联合解释导航中关键时刻和支撑动作的视觉证据。
- **Research Problem：**仅看时间或特征难定位失败原因。
- **Insight：**何时出错与依据什么出错需要一起诊断。

#### [Embodied-Reasoner: Synergizing Visual Search, Reasoning, and Action for Embodied Interactive Tasks](https://aclanthology.org/2026.acl-long.1910/)

ACL 2026 · Long · 扩展相关

- **Idea：**用连贯观察—思考—动作轨迹及反思训练具身推理模型。
- **Research Problem：**静态推理能力难直接迁移到持续环境交互。
- **Insight：**空间、时间与执行后反思需要在同一轨迹中学习。

#### [Mango: Multi-Agent Web Navigation via Global-View Optimization](https://aclanthology.org/2026.acl-long.646/)

ACL 2026 · Long · 扩展相关

- **Idea：**根据网站全局结构用 bandit 分配起始 URL 和探索预算。
- **Research Problem：**总从首页开始容易陷入无关分支。
- **Insight：**从哪里开始浏览也是重要决策变量。

#### [MARS-RA: Rank Aggregation for Credit Assignment via Multimodal Comparisons in Embodied Multi-Agent Cooperation](https://aclanthology.org/2026.acl-long.1349/)

ACL 2026 · Long · 扩展相关

- **Idea：**用多模态成对贡献比较为具身多 Agent 分配奖励。
- **Research Problem：**延迟反馈和动态参与人数使绝对贡献估计困难。
- **Insight：**相对排名可提供更稳定的协作归因。

#### [Model-Based Imaginative Planning for Embodied Agents](https://aclanthology.org/2026.acl-long.827/)

ACL 2026 · Long · 扩展相关

- **Idea：**让冻结 LLM 与可适应的符号世界模型共同想象未来动作。
- **Research Problem：**语言先验缺少真实具身动力学和部分可观测状态。
- **Insight：**多种可能未来与历史适配有助于稳健规划。

#### [On-policy Reinforcement Fine-tuning with Offline reward for Multi-step Embodied Planning](https://aclanthology.org/2026.acl-long.1822/)

ACL 2026 · Long · 扩展相关

- **Idea：**用离线奖励支持在线策略式具身规划微调。
- **Research Problem：**真实环境交互昂贵且终局反馈稀疏。
- **Insight：**策略更新与奖励获取可以适当解耦以降低训练成本。

#### [On-the-Fly VLA Adaptation via Test-Time Reinforcement Learning](https://aclanthology.org/2026.acl-long.1863/)

ACL 2026 · Long · 扩展相关

- **Idea：**用逐步任务进展构造密集奖励，在测试时更新 VLA 策略并保留原有训练先验。
- **Research Problem：**部署后的机器人需要适应动态新环境，而固定动作策略缺少自主调整能力。
- **Insight：**部署阶段的环境反馈本身可以成为动作策略持续适应的学习信号。

#### [PEAP: Proactive Embodied Action Sequence Planning with Joint Understanding of Vision and Audio Perception](https://aclanthology.org/2026.acl-long.1060/)

ACL 2026 · Long · 扩展相关

- **Idea：**用联合视听输入评测无显式指令的主动具身规划。
- **Research Problem：**现有规划评测多依赖用户明确提出目标。
- **Insight：**主动行动首先取决于对环境需求的正确感知。

#### [VLN-MME: Diagnosing MLLMs as Language-guided Visual Navigation Agents](https://aclanthology.org/2026.acl-long.1300/)

ACL 2026 · Long · 扩展相关

- **Idea：**用模块化框架诊断视觉语言模型的导航决策。
- **Research Problem：**静态能力不能说明多轮空间行动表现。
- **Insight：**增加思维链或反思也可能因上下文理解不足而降低性能。

## 08 · 安全与可靠性

21 篇 · CVPR 3 · ACL 18

#### [AdapAction: Adaptive Target Action Backdoor Attack against GUI Agents](https://openaccess.thecvf.com/content/CVPR2026/html/Chen_AdapAction_Adaptive_Target_Action_Backdoor_Attack_against_GUI_Agents_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**研究随界面状态变化而选择恶意动作的 GUI 后门。
- **Research Problem：**固定触发动作不足以刻画隐蔽的交互攻击。
- **Insight：**上下文一致的恶意行为更难被常规语义检查识别。

#### [AGENTSAFE: Benchmarking the Safety of Embodied Agents on Hazardous Instructions](https://openaccess.thecvf.com/content/CVPR2026/html/Ying_AGENTSAFE_Benchmarking_the_Safety_of_Embodied_Agents_on_Hazardous_Instructions_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**从感知、规划、执行三层评测危险具身指令。
- **Research Problem：**只检查最终结果无法定位安全失败环节。
- **Insight：**识别危险并不意味着能把危险判断落实为安全动作。

#### [LaSM: Layer-wise Scaling Mechanism for Defending Pop-up Attack on GUI Agents](https://openaccess.thecvf.com/content/CVPR2026/html/Yan_LaSM_Layer-wise_Scaling_Mechanism_for_Defending_Pop-up_Attack_on_GUI_CVPR_2026_paper.html)

CVPR 2026 · Main · 扩展相关

- **Idea：**调整关键层注意力与 MLP 强度抵御弹窗注入。
- **Research Problem：**恶意界面元素会把 GUI Agent 的关注点引离任务。
- **Insight：**层间注意力差异提供无需重训练的干预入口。

#### [CodeHacker: Automated Test Case Generation for Detecting Vulnerabilities in Competitive Programming Solutions](https://aclanthology.org/2026.acl-long.108/)

ACL 2026 · Long · 直接工具使用

- **Idea：**用多策略攻击生成定向测试，并先校准验证器与检查器，再寻找程序中的边界错误。
- **Research Problem：**现有代码测试覆盖不足，使错误程序被误判为正确并污染训练信号。
- **Insight：**测试生成 Agent 自身也需要先被测试，才能提供可信的执行反馈。

#### [Evo-Attacker: Memory-Augmented Reinforcement Learning for Long-Horizon Tool Attacks on LLM-MAS](https://aclanthology.org/2026.acl-long.330/)

ACL 2026 · Long · 直接工具使用

- **Idea：**用动态攻击记忆和强化学习研究长程工具输出攻击。
- **Research Problem：**静态攻击模板难以覆盖多 Agent 工具链的动态风险。
- **Insight：**工具反馈的隐式信任会沿多步协作传播攻击影响。

#### [RedCoder: Automated Multi-Turn Red Teaming for Code LLMs](https://aclanthology.org/2026.acl-long.1531/)

ACL 2026 · Long · 直接工具使用

- **Idea：**让红队 Agent 在多轮编程对话中动态检索攻击策略，诱导被测模型生成有漏洞的代码。
- **Research Problem：**单轮或人工红队测试难以覆盖交互式编程中的累积风险。
- **Insight：**漏洞诱导可以依赖跨轮策略适配，因而安全评测需覆盖完整交互过程。

#### [SafeAgent: Safeguarding LLM Agents via an Automated Risk Simulator](https://aclanthology.org/2026.acl-long.1501/)

ACL 2026 · Long · 直接工具使用

- **Idea：**自动模拟多轮工具风险并生成反思式安全训练数据。
- **Research Problem：**动态交互中的安全失败难以通过真实危险采集来覆盖。
- **Insight：**结构化风险模拟可提供可扩展的安全对齐反馈。

#### [SafeMCP: Proactive Power Regulation for LLM Agent Defense via Environment-Grounded Look-Ahead Reasoning](https://aclanthology.org/2026.acl-long.522/)

ACL 2026 · Long · 直接工具使用

- **Idea：**用环境世界模型前瞻过滤危险工具并拦截高风险执行。
- **Research Problem：**工具权限扩张会把微小错误放大为严重后果。
- **Insight：**在获取能力之前预测风险比只检查最终动作更主动。

#### [VIGIL: Defending LLM Agents Against Tool-Stream Injection via Verify-Before-Commit](https://aclanthology.org/2026.acl-long.443/)

ACL 2026 · Long · 直接工具使用

- **Idea：**以先验证再提交协议阻止工具流中的提示注入。
- **Research Problem：**静态隔离会破坏反馈，而直接信任工具又易被劫持。
- **Insight：**可允许探索性推理，再用用户意图约束实际提交的动作。

#### [AgentMark: Utility-Preserving Behavioral Watermarking for Agents](https://aclanthology.org/2026.acl-long.573/)

ACL 2026 · Long · 扩展相关

- **Idea：**在保持分布的规划采样中嵌入行为水印。
- **Research Problem：**文本水印难以追踪 Agent 的工具选择与子目标行为。
- **Insight：**规划行为也能承载可识别标记，但必须避免长程效用损失。

#### [Benchmarking Web Agent Safety under E-commerce Deceptive Interfaces](https://aclanthology.org/2026.acl-long.1009/)

ACL 2026 · Long · 扩展相关

- **Idea：**用可配置网页插件注入真实电商欺骗界面。
- **Research Problem：**静态安全测试难覆盖执行中的视觉诱导。
- **Insight：**任务进行时的前端变化可能绕过简单提示约束。

#### [Conjunctive Prompt Attacks in Multi-Agent LLM Systems](https://aclanthology.org/2026.acl-long.1577/)

ACL 2026 · Long · 扩展相关

- **Idea：**研究分散于用户输入和远端 Agent 的组合式触发攻击。
- **Research Problem：**各组件单独看来无害的输入可能组合后产生风险。
- **Insight：**防御必须理解路由后的跨组件语义。

#### [JARVIS or Ultron? A Survey on the Safety and Security Threats of Computer-Using Agents](https://aclanthology.org/2026.acl-long.2106/)

ACL 2026 · Long · 扩展相关

- **Idea：**系统梳理计算机使用 Agent 的威胁、防御与评测。
- **Research Problem：**多模态输入和软件组件扩大了传统 LLM 安全面。
- **Insight：**风险应覆盖感知、推理、操作与系统集成链条。

#### [OS-Sentinel: Towards Safety-Enhanced Mobile GUI Agents via Hybrid Validation in Realistic Workflows](https://aclanthology.org/2026.acl-long.431/)

ACL 2026 · Long · 扩展相关

- **Idea：**结合形式验证和视觉语言情境判断检测移动端风险。
- **Research Problem：**真实移动工作流的安全条件复杂且难穷举。
- **Insight：**系统级违规与情境风险需要不同验证机制。

#### [RISK: A Framework for GUI Agents in E-commerce Risk Management](https://aclanthology.org/2026.acl-long.1720/)

ACL 2026 · Long · 扩展相关

- **Idea：**为电商风控构建有状态 GUI 数据、基准和多层奖励训练。
- **Research Problem：**传统爬取难获取深层动态业务数据。
- **Insight：**领域交互流程需要单步与整任务联合监督。

#### [SecureVibeBench: Benchmarking Secure Vibe Coding of AI Agents via Reconstructing Vulnerability-Introducing Scenarios](https://aclanthology.org/2026.acl-long.1107/)

ACL 2026 · Long · 扩展相关

- **Idea：**重建真实漏洞引入场景并联合评测功能与安全。
- **Research Problem：**普通代码基准难公平反映 Agent 写入新漏洞的风险。
- **Insight：**现实上下文与静态、动态检查需要共同构成评测。

#### [Stop Fixating on Prompts: Reasoning Hijacking and Constraint Tightening for Red-Teaming LLM Agents](https://aclanthology.org/2026.acl-long.1197/)

ACL 2026 · Long · 扩展相关

- **Idea：**研究通过推理轨迹与记忆检索进行 Agent 红队测试。
- **Research Problem：**仅修改用户提示难覆盖内部工作流攻击面。
- **Insight：**安全分析需要同时关注推理和记忆路径。

#### [TAMAS: Benchmarking Adversarial Risks in Multi-Agent LLM Systems](https://aclanthology.org/2026.acl-long.1442/)

ACL 2026 · Long · 扩展相关

- **Idea：**构建多 Agent 协作中的对抗风险基准及效用—鲁棒性指标。
- **Research Problem：**单 Agent 安全评测无法覆盖协作传播风险。
- **Insight：**多 Agent 架构本身并不保证安全，协作关系也可能放大攻击。

#### [Visual Inception: Compromising Long-term Planning in Agentic Recommenders via Multimodal Memory Poisoning](https://aclanthology.org/2026.acl-long.954/)

ACL 2026 · Long · 扩展相关

- **Idea：**研究视觉记忆投毒，并用感知净化和反事实验证防御。
- **Research Problem：**长期推荐规划会重新激活早期植入的恶意记忆。
- **Insight：**安全检查需要覆盖记忆形成与未来使用两个阶段。

#### [When Efficiency Becomes a Vulnerability: Computational Cost Attacks on WebAgents](https://aclanthology.org/2026.acl-long.1775/)

ACL 2026 · Long · 扩展相关

- **Idea：**研究保持任务成功却诱发额外计算的网页注入攻击。
- **Research Problem：**只看失败率会遗漏成本放大型攻击。
- **Insight：**效率也应作为 Agent 鲁棒性的安全维度。

#### [XOXO: Stealthy Cross-Origin Context Poisoning Attacks against AI Coding Assistants](https://aclanthology.org/2026.acl-long.521/)

ACL 2026 · Long · 扩展相关

- **Idea：**以语义保持的代码变换污染跨来源上下文，并用黑盒搜索诱导编码助手产生脆弱代码。
- **Research Problem：**编码助手自动读取的代码上下文可能携带难以察觉的攻击信号。
- **Insight：**输入代码的功能不变，并不意味着它对生成模型的行为影响不变。

## 09 · 领域应用 / 数据分析

18 篇 · CVPR 1 · ACL 17

#### [Simple Agents Outperform Experts in Biomedical Imaging Workflow Optimization](https://openaccess.thecvf.com/content/CVPR2026/html/Wang_Simple_Agents_Outperform_Experts_in_Biomedical_Imaging_Workflow_Optimization_CVPR_2026_paper.html)

CVPR 2026 · Main · 直接工具使用

- **Idea：**系统评测代码 Agent 对生物医学图像流程的自动适配。
- **Research Problem：**科学家缺少标注和时间来手工修改生产工具。
- **Insight：**简单可执行反馈闭环有时优于复杂 Agent 结构。

#### [Beyond Itinerary Planning—A Real-World Benchmark for Multi-Turn and Tool-Using Travel Tasks](https://aclanthology.org/2026.acl-long.1347/)

ACL 2026 · Long · 直接工具使用

- **Idea：**用真实旅行工具测试单轮、多轮及不可解任务。
- **Research Problem：**传统行程规划未覆盖隐含偏好和能力边界。
- **Insight：**可靠工具 Agent 必须同时会执行、澄清和识别不可完成请求。

#### [BioProAgent: Neuro-Symbolic Grounding for Constrained Scientific Planning](https://aclanthology.org/2026.acl-long.1981/)

ACL 2026 · Long · 直接工具使用

- **Idea：**用有限状态机验证湿实验计划并修正设备不合规动作。
- **Research Problem：**语言幻觉在不可逆物理实验中可能导致实际失败。
- **Insight：**确定性约束应在执行前限制概率式规划。

#### [BioTool: A Comprehensive Tool-Calling Dataset for Enhancing Biomedical Capabilities of Large Language Models](https://aclanthology.org/2026.acl-long.2138/)

ACL 2026 · Long · 直接工具使用

- **Idea：**构建经人工核验的生物医学工具调用数据并微调小模型。
- **Research Problem：**通用数据难覆盖生物数据库的专业工具接口。
- **Insight：**高质量领域调用训练能让小模型成为有效的专业工具调用器。

#### [FinSight: Towards Real-World Financial Deep Research](https://aclanthology.org/2026.acl-long.265/)

ACL 2026 · Long · 直接工具使用

- **Idea：**以可编程变量空间统一数据、工具和 Agent，并结合分阶段写作与视觉反馈生成金融报告。
- **Research Problem：**通用深度研究系统难以兼顾金融分析深度、数据操作和专业图表质量。
- **Insight：**把中间分析保存为可操作的变量与结构化片段，有助于连接计算和报告生成。

#### [GCA Framework: A GCC Countries–Grounded Dataset and Agentic Pipeline for Climate Decision Support](https://aclanthology.org/2026.acl-long.1967/)

ACL 2026 · Long · 直接工具使用

- **Idea：**把地区气候数据与地理、预测工具整合为分析 Agent。
- **Research Problem：**通用模型缺少区域知识及 grounded 工具交互。
- **Insight：**地区知识适配与实时工具证据需要共同支撑决策。

#### [Interleaved Tool-Call Reasoning for Protein Function Understanding](https://aclanthology.org/2026.acl-long.592/)

ACL 2026 · Long · 直接工具使用

- **Idea：**交错执行生物工具与推理以生成蛋白功能解释。
- **Research Problem：**纯文本强化推理难以引入所需生物学知识。
- **Insight：**知识密集科学推理需要外部可验证证据，而非更长的内部思考。

#### [MedMCP-Calc: Benchmarking LLMs for Realistic Medical Calculator Scenarios via MCP Integration](https://aclanthology.org/2026.acl-long.221/)

ACL 2026 · Long · 直接工具使用

- **Idea：**构建包含病历获取、计算器选择和多步计算的 MCP 医疗评测。
- **Research Problem：**静态计算题无法检验真实临床计算工作流。
- **Insight：**选择何种计算器和主动补齐输入比单步算术更具挑战。

#### [MolMem: Memory-Augmented Agentic Reinforcement Learning for Sample-Efficient Molecular Optimization](https://aclanthology.org/2026.acl-long.2024/)

ACL 2026 · Long · 直接工具使用

- **Idea：**用静态示例与演化技能记忆减少分子优化中的 oracle 调用。
- **Research Problem：**有限评价预算难支持大量试错。
- **Insight：**昂贵交互应沉淀为后续可复用策略。

#### [MTSQL-R1: Towards Long-Horizon Multi-Turn Text-to-SQL via Agentic Training](https://aclanthology.org/2026.acl-long.1563/)

ACL 2026 · Long · 直接工具使用

- **Idea：**通过数据库执行和对话记忆验证循环训练多轮 SQL Agent。
- **Research Problem：**逐轮直接翻译容易生成不可执行或不连贯查询。
- **Insight：**执行有效性与对话一致性必须共同检验。

#### [PExA: Parallel Exploration Agent for Complex Text-to-SQL](https://aclanthology.org/2026.acl-short.48/)

ACL 2026 · Short · 直接工具使用

- **Idea：**并行执行覆盖原问题语义的原子 SQL，再合成最终查询。
- **Research Problem：**复杂 SQL 的性能改善常以更高延迟为代价。
- **Insight：**测试覆盖思路可把证据收集并行化。

#### [QBridge: Bridging Natural Language and SQL via Gold Query Rewriting with Agentic Refinement](https://aclanthology.org/2026.acl-long.402/)

ACL 2026 · Long · 直接工具使用

- **Idea：**先生成 SQL 对齐的中间问题，再用执行和语义反馈修正。
- **Research Problem：**自然语言歧义会传播成错误 SQL。
- **Insight：**可解释中间表示与实际执行反馈互补。

#### [ReCoQA: A Benchmark for Tool-Augmented and Multi-Step Reasoning in Real Estate Question and Answering](https://aclanthology.org/2026.acl-long.1242/)

ACL 2026 · Long · 直接工具使用

- **Idea：**构建同时需要 SQL 与外部 API 的房地产问答基准。
- **Research Problem：**现有数据难覆盖异构信息源混合工作流。
- **Insight：**理解、规划与专业执行分工有助于融合分散证据。

#### [ShopSimulator: Evaluating and Exploring RL-Driven LLM Agent for Shopping Assistants](https://aclanthology.org/2026.acl-long.1647/)

ACL 2026 · Long · 直接工具使用

- **Idea：**构建支持偏好对话、产品搜索和训练的购物模拟环境。
- **Research Problem：**单项购物评测未覆盖真实长程推荐流程。
- **Insight：**用户理解与相似商品甄别需要联合交互训练。

#### [SQL-Trail: Multi-Turn Reinforcement Learning with Interleaved Feedback for Text-to-SQL](https://aclanthology.org/2026.acl-long.1677/)

ACL 2026 · Long · 直接工具使用

- **Idea：**让 Text-to-SQL Agent 多轮探索数据库并利用执行反馈改写 SQL，同时自适应分配交互预算。
- **Research Problem：**单次生成缺少模式探索和纠错过程，难以处理复杂数据库问题。
- **Insight：**交互深度应匹配题目难度，执行正确性与探索效率需要联合奖励。

#### [UniDataBench: Evaluating Data Analytics Agents Across Structured and Unstructured Data](https://aclanthology.org/2026.acl-long.1556/)

ACL 2026 · Long · 直接工具使用

- **Idea：**评测跨数据库、CSV 和非结构化数据的分析 Agent。
- **Research Problem：**单一数据类型基准难代表真实业务分析。
- **Insight：**跨源关系发现与自纠错代码执行是独立挑战。

#### [LLM-Based Multi-Agent Systems for Clinical Workflows: A Survey of AI Hospitals](https://aclanthology.org/2026.acl-long.2123/)

ACL 2026 · Long · 扩展相关

- **Idea：**按临床角色、交接、工具、状态和责任梳理 AI 医院。
- **Research Problem：**只比较模型或最终答案难衡量临床工作流。
- **Insight：**临床 Agent 应在安全、过程、结果和运行四层评价。

#### [Ready Jurist One: Benchmarking Language Agents for Legal Intelligence in Dynamic Environments](https://aclanthology.org/2026.acl-long.471/)

ACL 2026 · Long · 扩展相关

- **Idea：**在动态法律环境中同时评测任务完成和程序遵循。
- **Research Problem：**法律知识答题不能代表真实流程执行能力。
- **Insight：**专业知识与合规行动之间存在独立能力缺口。
