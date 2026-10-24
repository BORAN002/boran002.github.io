---
title: "Agent Tool Use：CVPR 与 ACL 2026 文献笔记"
date: "2026-10-24"
updated: "2026-10-24"
description: "359 篇主会论文，逐篇整理 Idea、Research Problem、Insight 与 Method，附正文来源。"
draft: false
---

这份笔记整理 **359 篇主会论文**：CVPR 2026 共 110 篇，ACL 2026 共 249 篇，覆盖 tool calling、多模态、search、GUI / Web、code execution 与 embodied agents。

每篇独立阅读页按 **Idea → Research Problem → Insight → Method** 展开，中文解释保留英文专业术语。Method 写明关键模块、数据与训练流程、执行方式；Sources 提供官方 PDF 与核读页码。

[打开交互式文献检索](/papers/agent-tool-use-2026/explorer/) · [下载全部笔记（Markdown）](/papers/agent-tool-use-2026/notes.md) · [结构化数据（JSON）](/data/agent-tool-use-2026.json)

仅收录 CVPR Main 与 ACL Long / Short，排除 Findings、Workshop、Industry 和 Demo。172 篇标为直接工具使用，187 篇为相关的执行、规划、记忆、安全和评测研究；九个方向用于阅读导航，边界存在交叉。

> 检索日期：2026-10-24。详细笔记依据官方正文整理，Insight 为对论文机制的分析性概括；未独立复现实验，清单不保证零遗漏。正式录用来源为 [CVF](https://openaccess.thecvf.com/CVPR2026?day=all) 和 [ACL Anthology](https://aclanthology.org/events/acl-2026/)。

## 01 · 工具调用 / 训练 / 评测

64 篇 · CVPR 8 · ACL 56

#### [EpiAgent: An Agent-Centric System for Ancient Inscription Restoration](/papers/agent-tool-use-2026/reading/c39/)

CVPR 2026 · 直接工具使用 · 正文笔记

EpiAgent 将古代碑文修复组织为 Observe–Conceive–Execute–Reevaluate 循环，由 Kimi-K2 central planner 根据文字、字形、损伤程度与历史工具经验，为每个字符制定和修改修复序列。

#### [From Intuition to Investigation: A Tool-Augmented Reasoning MLLM Framework for Generalizable Face Anti-Spoofing](/papers/agent-tool-use-2026/reading/c44/)

CVPR 2026 · 直接工具使用 · 正文笔记

TAR-FAS 将 Face Anti-Spoofing 从直观的二分类或简短描述，改成 Chain-of-Thought with Visual Tools：先形成初始判断，再按需检查纹理、频率、边缘或局部区域，最后给出 Real / Spoof 结论。

#### [IPR-1: Interactive Physical Reasoner](/papers/agent-tool-use-2026/reading/c61/)

CVPR 2026 · 直接工具使用 · 正文笔记

IPR-1 用可学习的 physics-centric action code（PhysCode）连接 VLM policy 与 world model。

#### [Scaling Agentic Reinforcement Learning for Tool-Integrated Reasoning in VLMs](/papers/agent-tool-use-2026/reading/c115/)

CVPR 2026 · 直接工具使用 · 正文笔记

VISTA-Gym 将多种视觉推理任务、26 个工具、可执行交互及可验证答案统一为 agentic RL environment，并训练 VISTA-R1 学习交错 reasoning 与 tool calls。

#### [Training One Model to Master Cross-Level Agentic Actions via Reinforcement Learning](/papers/agent-tool-use-2026/reading/c140/)

CVPR 2026 · 直接工具使用 · 正文笔记

CrossHA 将 action-space selection 与具体动作内容放进同一 policy，在 Minecraft 任务中动态选择 language、grounding、motion、raw 或 latent 等不同层级接口。

#### [DRAMA: Next-Gen Dynamic Orchestration for Resilient Multi-Agent Ecosystems in Flux](/papers/agent-tool-use-2026/reading/c26/)

CVPR 2026 · 扩展相关 · 正文笔记

DRAMA 为成员随时加入、退出或恢复的 embodied multi-agent systems 提供动态任务编排。

#### [GTR-Turbo: Merged Checkpoint is Secretly a Free Teacher for Agentic VLM Training](/papers/agent-tool-use-2026/reading/c46/)

CVPR 2026 · 扩展相关 · 正文笔记

GTR-Turbo 将 agent 在持续 RL 训练中保存的历史 checkpoints 合并为 teacher，用它替代外部昂贵 VLM 的逐步 thought guidance。

#### [VS-Bench: Evaluating VLMs for Strategic Abilities in Multi-Agent Environments](/papers/agent-tool-use-2026/reading/c145/)

CVPR 2026 · 扩展相关 · 正文笔记

VS-Bench 用十种具有图像与文字观察的 multi-agent games 分别测试 VLM 的 perception、strategic reasoning 和 decision-making。

#### [A Multi-Agent Framework for High-Interaction Terminal Simulation](/papers/agent-tool-use-2026/reading/e185/)

ACL 2026 · 直接工具使用 · 正文笔记

MANTIS 将高交互 terminal simulation 拆成命令路由、状态维护与输出生成，通过真实状态快照和 state-aware history pruning 保持多轮一致性。

#### [AgentGL: Towards Agentic Graph Learning with LLMs via Reinforcement Learning](/papers/agent-tool-use-2026/reading/a50/)

ACL 2026 · 直接工具使用 · 正文笔记

AgentGL 把 Text-Attributed Graph 上的 node classification 与 link prediction 改成 graph-native 工具探索和语言推理交替进行的 RL 问题。

#### [ARCHITECT: Uncertainty-Aware Dynamic Tool Learning via Causal Intervention for Open-World Agents](/papers/agent-tool-use-2026/reading/a67/)

ACL 2026 · 直接工具使用 · 正文笔记

ARCHITECT 在动态工具生成、验证、修复和复用中引入 Causal Tool Diagnosis（CTD），同时预测可靠性与 specification/code/environment 三类失败归因。

#### [AT²PO: Agentic Turn-based Policy Optimization via Tree Search](/papers/agent-tool-use-2026/reading/e130/)

ACL 2026 · 直接工具使用 · 正文笔记

AT²PO 将 agentic RL 的采样、credit assignment 与优化粒度统一到 interaction turn：在不确定轮次分支生成轨迹，用树中后继结果估计每轮价值，再以 turn-level importance ratio 更新策略。

#### [AutoReproduce: Automatic AI Experiment Reproduction with Paper Lineage](/papers/agent-tool-use-2026/reading/d95/)

ACL 2026 · 直接工具使用 · 正文笔记

AutoReproduce 通过 paper lineage 补全论文没有写明的领域实现惯例，再让 research agent 与 code agent 协作完成数据、方法和实验管线。

#### [Beyond Accuracy: Unveiling Inefficiency Patterns in Tool-Integrated Reasoning](/papers/agent-tool-use-2026/reading/a15/)

ACL 2026 · 直接工具使用 · 正文笔记

论文提出 Prefill Token Equivalents（PTE），把 tool-integrated reasoning 中的 prefill、随 context 增长的 decode 访存成本和 KV-cache 不可复用后的重计算折合成同一单位。

#### [CAR-bench: Evaluating the Consistency and Limit-Awareness of LLM Agents under Real-World Uncertainty](/papers/agent-tool-use-2026/reading/a71/)

ACL 2026 · 直接工具使用 · 正文笔记

CAR-bench 在车载助手模拟环境中评估多轮 tool-using agent 的持续可靠性，将任务扩展为正常执行、无法完成时承认能力边界，以及存在歧义时先获取信息。

#### [Current Agents Fail to Leverage World Model as Tool for Foresight](/papers/agent-tool-use-2026/reading/a34/)

ACL 2026 · 直接工具使用 · 正文笔记

本文实证检验现有 VLM agents 能否把外部 world model 当作 foresight 工具，而不是提出新的 simulator。

#### [Discovery and Reinforcement of Tool-Integrated Reasoning Chains via Rollout Trees](/papers/agent-tool-use-2026/reading/a35/)

ACL 2026 · 直接工具使用 · 正文笔记

DART 在 RL 训练期间对现有 long CoT 轨迹构建 rollout tree，在高不确定且适合工具使用的位置插入提示并分叉，探索 Python 调用能否改善解答。

#### [Do LLMs Know Tool Irrelevance? Demystifying Structural Alignment Bias in Tool Invocations](/papers/agent-tool-use-2026/reading/a58/)

ACL 2026 · 直接工具使用 · 正文笔记

该研究识别 Structural Alignment Bias：即使工具语义无法满足目标，只要用户属性恰好能填满其参数，模型仍倾向调用。

#### [Don’t Adapt Small Language Models for Tools; Adapt Tool Schemas to the Models](/papers/agent-tool-use-2026/reading/a43/)

ACL 2026 · 直接工具使用 · 正文笔记

PA-Tool 将适配方向从微调 small language model 转为重命名 tool schema：让目标模型依据功能描述多次生成 tool/parameter names，选择输出分布中局部最密集的候选，并建立原名到新名的映射。

#### [Empowering Multi-Turn Tool-Integrated Agentic Reasoning with Group Turn Policy Optimization](/papers/agent-tool-use-2026/reading/a73/)

ACL 2026 · 直接工具使用 · 正文笔记

GTPO 将多轮 tool-integrated reasoning 的 RL 信号从整条 trajectory 下沉到 turn：每轮分配格式 reward，终局给答案 reward，再以 discounted returns 计算 turn advantages；对最终错误但代码接近成功样本的轨迹提供部分奖励。

#### [ET-Agent: Incentivizing Effective Tool-Integrated Reasoning Agent via Behavior Calibration](/papers/agent-tool-use-2026/reading/a12/)

ACL 2026 · 直接工具使用 · 正文笔记

ET-Agent 将 tool-integrated reasoning 的优化目标扩展到行为校准：通过 Self-Evolving Data Flywheel 增加有效解法，再从准确性与工具次数的组内差异挑选训练题，逐步学习正确、简洁且调用恰当的轨迹。

#### [From Proof to Program: Characterizing Tool-Induced Reasoning Hallucinations in Large Language Models](/papers/agent-tool-use-2026/reading/a72/)

ACL 2026 · 直接工具使用 · 正文笔记

本文提出 Tool-Induced Myopia：即使 Python 工具调用和执行正确，模型也可能把枚举、数值试验的结果当成完整数学论证。

#### [GenesisFunc: Multi-Agent Data Generation for Accurate and Generalizable Function-Calling](/papers/agent-tool-use-2026/reading/a55/)

ACL 2026 · 直接工具使用 · 正文笔记

GenesisFunc 是 function-calling 训练数据生成 pipeline，以筛选后的 benchmark tool schemas 为基础，让多 agent 协同控制工具组合、对话语义多样性、参数覆盖与质量筛查。

#### [Learning from the Irrecoverable: Error-Localized Policy Optimization for Tool-Integrated LLM Reasoning](/papers/agent-tool-use-2026/reading/a24/)

ACL 2026 · 直接工具使用 · 正文笔记

ELPO 从失败轨迹中定位首个在当前采样预算下不可恢复的步骤，再围绕该位置分配信用和强化纠错更新。

#### [LoopTool: Closing the Data–Training Loop for Robust LLM Tool Calls](/papers/agent-tool-use-2026/reading/a45/)

ACL 2026 · 直接工具使用 · 正文笔记

LoopTool 把 tool-call 数据生成与模型训练闭合成迭代循环：训练后用当前模型探测失败，判断错误来自预测还是旧标签，修正监督并围绕已验证弱点扩展新数据。

#### [Lost in Execution: On the Multilingual Robustness of Tool Calling in Large Language Models](/papers/agent-tool-use-2026/reading/a78/)

ACL 2026 · 直接工具使用 · 正文笔记

MLCL 将 multilingual tool calling 作为语言输入与固定执行接口之间的诊断问题，系统改变用户 query 的语言组成和措辞，同时保持 English-only tool schemas 不变。

#### [MCP-Flow: Facilitating LLM Agents to Master Real-World, Diverse and Scaling MCP Tools](/papers/agent-tool-use-2026/reading/a7/)

ACL 2026 · 直接工具使用 · 正文笔记

MCP-Flow 建立从真实 MCP marketplace 发现服务器、获取工具 schema、合成指令调用到模型训练的可扩展流水线。

#### [OctoTools: A Multi-Agent Framework with Extensible Tools for Complex Reasoning](/papers/agent-tool-use-2026/reading/a0/)

ACL 2026 · 直接工具使用 · 正文笔记

OctoTools 用标准化 tool cards 连接 planner 与 executor：planner 负责整体目标和逐步子目标，executor 将文字动作转换成可运行 Python 命令，执行结果回到共享轨迹以继续规划和检查。

#### [OptiCo: Adaptive Distributed Training Optimization via Collaborative Agent Reasoning](/papers/agent-tool-use-2026/reading/e155/)

ACL 2026 · 直接工具使用 · 正文笔记

OptiCo 把 distributed training configuration tuning 组织成四个专职 agent 的闭环：定位瓶颈、提出参数修改、真实启动验证、分析失败，并把所有结果保存在 Global Message Pool。

#### [R2IF: Aligning Reasoning with Decisions via Composite Rewards for Interpretable LLM Function Calling](/papers/agent-tool-use-2026/reading/a68/)

ACL 2026 · 直接工具使用 · 正文笔记

R2IF 用复合奖励让 function calling 的解释真正支持最终决策：除了格式与调用正确性，还衡量 reasoning prefix 是否提升 student 的调用成功率，以及是否明确说明参数 specification、modification 和 value。

#### [Rethinking the Role of Entropy in Optimizing Tool-Use Behaviors for Large Language Model Agents](/papers/agent-tool-use-2026/reading/a54/)

ACL 2026 · 直接工具使用 · 正文笔记

TEPO 用工具调用前后 reasoning segments 的 next-token entropy 变化作为工具质量代理，将其嵌入 GRPO。

#### [ReviewGrounder: Improving Review Substantiveness with Rubric-Guided, Tool-Integrated Agents](/papers/agent-tool-use-2026/reading/a59/)

ACL 2026 · 直接工具使用 · 正文笔记

ReviewGrounder 将审稿拆成 draft、针对性 grounding 和 rubric-guided synthesis：先生成结构完整的初稿，再分别核查相关文献、方法论和实验，最后根据通用 reviewer rubrics 形成具体反馈。

#### [RIMRULE: Improving Tool-Using Language Agents via MDL-Guided Rule Learning](/papers/agent-tool-use-2026/reading/a64/)

ACL 2026 · 直接工具使用 · 正文笔记

RIMRULE 从工具代理的失败经验提炼短规则，使用 Minimum Description Length 整合为精简规则库，推理时按当前任务和工具动态注入。

#### [Robust Tool Use via Fission-GRPO: Learning to Recover from Execution Errors](/papers/agent-tool-use-2026/reading/a70/)

ACL 2026 · 直接工具使用 · 正文笔记

Fission-GRPO 把当前策略产生的 tool-call 错误转换成新的 recovery contexts，并从每个错误重新采样一组修复尝试。

#### [TEA-Bench: A Systematic Benchmarking of Tool-enhanced Emotional Support Dialogue Agent](/papers/agent-tool-use-2026/reading/a82/)

ACL 2026 · 直接工具使用 · 正文笔记

TEA-Bench 把 emotional support conversation 的评价从共情表达扩展到 tool-grounded instrumental support，要求现实性建议中的时间、地点、天气等事实可追溯。

#### [Temp-R1: A Unified Autonomous Agent for Complex Temporal KGQA via Reverse Curriculum Reinforcement Learning](/papers/agent-tool-use-2026/reading/e141/)

ACL 2026 · 直接工具使用 · 正文笔记

Temp-R1 将 temporal KGQA 从固定多组件流程转为单个可训练代理，并显式区分 plan、filter、rank 等内部动作与 search 外部动作。

#### [The Confidence Dichotomy: Analyzing and Mitigating Miscalibration in Tool-Use Agents](/papers/agent-tool-use-2026/reading/a25/)

ACL 2026 · 直接工具使用 · 正文笔记

论文先比较 evidence tools 与 verification tools 对 agent verbalized confidence 的不同影响，再提出 Calibration Agentic RL，联合优化答案准确率和显式置信度。

#### [The Reasoning Trap: How Enhancing LLM Reasoning Amplifies Tool Hallucination](/papers/agent-tool-use-2026/reading/a17/)

ACL 2026 · 直接工具使用 · 正文笔记

论文用 SimpleToolHalluBench 专门测试 agent 在缺少适用工具时能否 abstain，并追踪 reasoning enhancement 与 tool hallucination 的关系。

#### [TInR: Exploring Tool-Internalized Reasoning in Large Language Models](/papers/agent-tool-use-2026/reading/a79/)

ACL 2026 · 直接工具使用 · 正文笔记

TInR-U 探索 Tool-Internalized Reasoning：把工具功能、schema 与使用方式编码进模型参数，并以专属 tool tokens 统一推理和调用，使推理时无需把完整工具文档塞进上下文。

#### [ToolPRM: Fine-Grained Inference Scaling of Structured Outputs for Function Calling](/papers/agent-tool-use-2026/reading/a40/)

ACL 2026 · 直接工具使用 · 正文笔记

ToolPRM 将 structured function calling 拆成函数选择、参数名称和值填充等 intra-call 决策，训练逐步评分器并指导 beam search。

#### [Trajectory2Task: Training Robust Tool-Calling Agents with Synthesized Yet Verifiable Data for Complex User Intents](/papers/agent-tool-use-2026/reading/a77/)

ACL 2026 · 直接工具使用 · 正文笔记

Trajectory2Task 采用 trajectory-first 数据合成：先在可执行工具环境中探索真实可运行的调用链，再反向生成用户任务，并加入 ambiguous、changing、infeasible intent。

#### [Unlocking Implicit Experience: Synthesizing Tool-Use Trajectories from Text](/papers/agent-tool-use-2026/reading/a21/)

ACL 2026 · 直接工具使用 · 正文笔记

GEM 提出 Text-to-Trajectory 数据范式：从网页语料中已有的操作经验抽取任务、工具与流程，再合成多轮工具交互。

#### [ZARA: Training-Free Motion Time-Series Reasoning via Evidence-Grounded LLM Agents](/papers/agent-tool-use-2026/reading/e81/)

ACL 2026 · 直接工具使用 · 正文笔记

ZARA 把运动传感器序列转为可解释统计证据，由 LLM agents 逐步挑特征、排除活动并作最终判断。

#### [ACIArena: Toward Unified Evaluation for Agent Cascading Injection](/papers/agent-tool-use-2026/reading/e46/)

ACL 2026 · 扩展相关 · 正文笔记

ACIArena 以统一接口评测 Agent Cascading Injection：将多种 MAS、不同注入入口和攻击目标组合成可扩展测试环境，观察受损 Agent 的内容如何通过协作传播。

#### [Action Boundary Blindness: When LLM Agents Cannot Tell Where One Action Ends and Another Begins](/papers/agent-tool-use-2026/reading/e203/)

ACL 2026 · 扩展相关 · 正文笔记

论文将 Action Boundary Blindness 定义为 agent 即使选对 action type，仍误判执行 granularity、scope 或 completion 的现象。

#### [AgentGym2: Benchmarking Large Language Model Agents in De-Idealized Real-World Environments](/papers/agent-tool-use-2026/reading/e236/)

ACL 2026 · 扩展相关 · 正文笔记

AgentGym2 以去除理想化条件的开放数字环境评测 LLM Agent：仅提供基础可组合工具，让 Agent 自行发现额外接口、处理原始附件和噪声，并完成复杂工具使用、端到端数据分析与 deep search。

#### [AgentOCR: Reimagining Agent History via Optical Self-Compression](/papers/agent-tool-use-2026/reading/e21/)

ACL 2026 · 扩展相关 · 正文笔记

AgentOCR 将不断增长的 observation–action 历史渲染为图像，让 VLM 以较少 visual tokens 读取历史；segment optical caching 复用重复文本片段的渲染结果，self-compression 则把下一步图像压缩率作为 Agent 的显式决策，与任务成功共同进行 RL 优化。

#### [Behavior Knowledge Merge in Reinforced Agentic Models](/papers/agent-tool-use-2026/reading/e186/)

ACL 2026 · 扩展相关 · 正文笔记

Reinforced Agent Merging（RAM）按 RL task vectors 的重叠分布合并不同领域 agents：多个任务共同更新的参数取平均，仅一个任务更新的参数保留原强度；RAM+ 再依据 overlap/unique ratio 放大 unique updates，以减少合并后的能力稀释。

#### [Can We Predict Before Executing Machine Learning Agents?](/papers/agent-tool-use-2026/reading/e18/)

ACL 2026 · 扩展相关 · 正文笔记

FOREAGENT 在 ML agent 的 candidate generation 与昂贵执行之间加入 Data-centric Solution Preference：给 LLM task description、Verified Data Analysis Report 和两份候选代码，先预测哪份更值得运行。

#### [DPEPO: Diverse Parallel Exploration Policy Optimization for LLM-based Agents](/papers/agent-tool-use-2026/reading/e245/)

ACL 2026 · 扩展相关 · 正文笔记

DPEPO 让一个 LLM agent 同时控制多个从相同初始状态出发的 environment copies，并共享各分支 observation。

#### [Hierarchical Reinforcement Learning with Augmented Step-Level Transitions for LLM Agents](/papers/agent-tool-use-2026/reading/e30/)

ACL 2026 · 扩展相关 · 正文笔记

STEP-HRL 用 high-level subtask policy、low-level action policy 与 local-progress policy 共同替代不断增长的完整历史。

#### [Impatient Users Confuse AI Agents: High-fidelity Simulations of Human Traits for Testing Agents](/papers/agent-tool-use-2026/reading/e206/)

ACL 2026 · 扩展相关 · 正文笔记

TraitBasis 用 activation steering 控制 user simulator 的 impatience、skepticism、confusion、incoherence 等 traits，并将其强度与组合系统化，用于测试 conversational agent 在相同任务目标、不同交互行为下的稳健性。

#### [Lost in Simulation: LLM-Simulated Users are Unreliable Proxies for Human Users in Agentic Evaluations](/papers/agent-tool-use-2026/reading/e247/)

ACL 2026 · 扩展相关 · 正文笔记

这篇工作审计 LLM-simulated users 是否能替代真实用户评价 tool-use agents：固定 agent，分别改变 user model，并让不同地区与语言背景的人完成相同 retail tasks，比较 success rate、simulation–human calibration 和交互失败模式。

#### [Mixture-of-Minds: Multi-Agent Reinforcement Learning for Table Understanding](/papers/agent-tool-use-2026/reading/e15/)

ACL 2026 · 扩展相关 · 正文笔记

Mixture-of-Minds 将 table reasoning 分为 Planning、Coding、Answering 三种 agent roles，通过真实 code execution 得到可核对的 intermediate tables，再进行答案生成。

#### [Mock Worlds, Real Skills: Building Small Agentic Language Models with Synthetic Tasks, Simulated Environments, and Rubric-Based Rewards](/papers/agent-tool-use-2026/reading/a30/)

ACL 2026 · 扩展相关 · 正文笔记

SynthAgent 同时合成 tool-use tasks、专属 virtual APIs、mock users 和 mock tools，再从 workflow 与 teacher demonstrations 中提取 task-level rubrics，供小模型进行 agentic RL。

#### [NeoAMT: Neologism-Aware Agentic Machine Translation with Reinforcement Learning](/papers/agent-tool-use-2026/reading/e32/)

ACL 2026 · 扩展相关 · 正文笔记

NeoAMT 把 neologism-aware translation 做成可主动查词的 agentic process：模型先 reasoning，再按需检索 Wiktionary definitions，结合词义修订译文。

#### [ReCreate: Reasoning and Creating Domain Agents Driven by Experience](/papers/agent-tool-use-2026/reading/e175/)

ACL 2026 · 扩展相关 · 正文笔记

ReCreate 让一个 agent-as-optimizer 阅读 task agent 的 trajectories、execution logs 与 evaluation results，再修改其 scaffold 中的 roles、workflow、tools 和 memory。

#### [Reinforcement Learning for Self-Improving Agent with Skill Library](/papers/agent-tool-use-2026/reading/e11/)

ACL 2026 · 扩展相关 · 正文笔记

SAGE 将 Skill Library 的生成与复用纳入同一次 RL rollout：agent 连续解决相似任务，第一题产生的 executable function 可被第二题使用，后续成功复用的收益再奖励前面的 skill generation。

#### [STAPO: Selective Trajectory-Aware Policy Optimization for LLM Agent Training](/papers/agent-tool-use-2026/reading/e160/)

ACL 2026 · 扩展相关 · 正文笔记

STAPO 先在相同 anchor state 的 actions 中对 entropy 做 normalization，定位异常步骤，再选择性地奖励 policy 对 task goal 与 history 的依赖，并限制 trajectory-blind policy 的漂移。

#### [Taming Actor-Observer Asymmetry in Agents via Dialectical Alignment](/papers/agent-tool-use-2026/reading/e129/)

ACL 2026 · 扩展相关 · 正文笔记

ReTAS 通过 Thesis–Antithesis–Synthesis 训练 agent 在失败诊断时先表达角色视角，再检查反面证据，最后输出 attribution 与 corrective action。

#### [Timely Machine: Awareness of Time Makes Test-Time Scaling Agentic](/papers/agent-tool-use-2026/reading/a4/)

ACL 2026 · 扩展相关 · 正文笔记

Timely Machine 用 wall-clock time 重新定义 agentic test-time scaling，让 agent 根据剩余时间与实际 tool latency 调整 reasoning 和 interaction。

#### [Towards Robust Real-World Spreadsheet Understanding with Multi-Agent Multi-Format Reasoning](/papers/agent-tool-use-2026/reading/e14/)

ACL 2026 · 扩展相关 · 正文笔记

SpreadsheetAgent 先用 incremental extraction–verification loop 理解 spreadsheet 的结构，再把 verified YAML representation 交给下游 task solver。

#### [Value of Information: A Framework for Human–Agent Communication](/papers/agent-tool-use-2026/reading/e228/)

ACL 2026 · 扩展相关 · 正文笔记

论文用 Value of Information（VoI）决定 agent 应继续 clarification 还是直接 commit：估计一个问题可能带来的 expected decision utility 增益，再扣除 communication cost；只有净收益为正时才询问用户，否则执行当前 belief 下最优 action。

#### [When Agents Look the Same: Quantifying Distillation-Induced Similarity in Tool-Use Behaviors](/papers/agent-tool-use-2026/reading/a23/)

ACL 2026 · 扩展相关 · 正文笔记

论文用 Response Pattern Similarity（RPS）与 Action Graph Similarity（AGS）分别描述 agent 的语言习惯和工具使用习惯，重点比较完成同一任务时的可选行为。

## 02 · 多模态感知与创作

81 篇 · CVPR 59 · ACL 22

#### [AeroAgent: A Vision-Physics-Decision Framework for Aerodynamic Vehicle Design](/papers/agent-tool-use-2026/reading/c8/)

CVPR 2026 · 直接工具使用 · 正文笔记

AeroAgent 将 text / image-to-3D、aerodynamic surrogate 与 design planner 接成 propose–evaluate–refine loop。

#### [Agentic Retoucher for Text-To-Image Generation](/papers/agent-tool-use-2026/reading/c11/)

CVPR 2026 · 直接工具使用 · 正文笔记

Agentic Retoucher 将生成图像的局部修复拆成 perception–reasoning–action loop：先定位 distortion，再解释 defect 类型与上下文原因，最后选择合适的 local editing tool。

#### [ARM-Thinker: Reinforcing Multimodal Generative Reward Models with Agentic Tool Use and Visual Reasoning](/papers/agent-tool-use-2026/reading/c5/)

CVPR 2026 · 直接工具使用 · 正文笔记

ARM-Thinker 把 multimodal reward model 从一次性打分器改成会主动取证的 Agent。

#### [Beyond Sequential Tools: A Unified VLM Agent System for Photographic Post-Processing via Dynamic Multi-Expert Fusion](/papers/agent-tool-use-2026/reading/c17/)

CVPR 2026 · 直接工具使用 · 正文笔记

该方法让 VLM 诊断图像中的 mixed degradations，再把对应 expert LoRAs 按权重合并进一个 diffusion restoration backbone。

#### [DiffGraph: An Automated Agent-driven Model Merging Framework for In-the-Wild Text-to-Image Generation](/papers/agent-tool-use-2026/reading/c29/)

CVPR 2026 · 直接工具使用 · 正文笔记

DiffGraph 把不断增长的 T2I expert models 组织成可更新的 graph，根据用户 prompt 检索所需 experts，再激活局部 subgraph 预测 merging coefficients。

#### [Don't Show Pixels, Show Cues: Unlocking Visual Tool Reasoning in Language Models via Perception Programs](/papers/agent-tool-use-2026/reading/c30/)

CVPR 2026 · 直接工具使用 · 正文笔记

Perception Programs（P²）把 depth、optical flow、correspondence 等 vision tool outputs 转为统一的 language-native structured cues，再交给现成 MLLM 推理。

#### [EvoGraph-R1: Self-Evolving Multimodal Knowledge Hypergraphs for Agentic Retrieval](/papers/agent-tool-use-2026/reading/c40/)

CVPR 2026 · 直接工具使用 · 正文笔记

EvoGraph-R1 将 Multimodal GraphRAG 的 knowledge hypergraph 视为可被 Agent 修改的环境。

#### [FusionAgent: A Multimodal Agent with Dynamic Model Selection for Human Recognition](/papers/agent-tool-use-2026/reading/c45/)

CVPR 2026 · 直接工具使用 · 正文笔记

FusionAgent 将 face、gait、body recognition models 作为可选择的 tools，让 MLLM 根据当前样本的可见信息逐轮决定调用哪些 experts，随后用 Anchor-based Confidence Top-k（ACT）融合其 scores。

#### [Geometrically-Constrained Agent for Spatial Reasoning](/papers/agent-tool-use-2026/reading/c51/)

CVPR 2026 · 直接工具使用 · 正文笔记

Geometrically-Constrained Agent（GCA）先将 spatial query 转成明确的 reference-frame constraint 与 objective constraint，再让 VLM 在这一固定定义下调用 perception 和 geometry tools。

#### [GeoMMBench and GeoMMAgent: Toward Expert-Level Multimodal Intelligence in Geoscience and Remote Sensing](/papers/agent-tool-use-2026/reading/c50/)

CVPR 2026 · 直接工具使用 · 正文笔记

论文同时提出 GeoMMBench 和 GeoMMAgent：前者用跨 geoscience disciplines、sensor modalities 与 task levels 的专家题目评测能力，后者以 plan–execute–evaluate workflow 组织 retrieval、perception 和 reasoning agents，连接通用模型与 RS 专用工具。

#### [Graph-to-Frame RAG: Visual-Space Knowledge Fusion for Training-Free and Auditable Video Reasoning](/papers/agent-tool-use-2026/reading/c52/)

CVPR 2026 · 直接工具使用 · 正文笔记

G2F-RAG 把检索增强的接口从追加文本改为追加一张 reasoning frame。

#### [Hybrid Agents for Image Restoration](/papers/agent-tool-use-2026/reading/c59/)

CVPR 2026 · 直接工具使用 · 正文笔记

HybridAgent 将 image restoration 的请求理解、退化识别和结果反馈分给 FastAgent、SlowAgent、FeedbackAgent，并把单类退化与 mixed distortion restoration tools 纳入统一调度。

#### [IBISAgent: Reinforcing Pixel-Level Visual Reasoning in MLLMs for Universal Biomedical Object Referring and Segmentation](/papers/agent-tool-use-2026/reading/c60/)

CVPR 2026 · 直接工具使用 · 正文笔记

IBISAgent 将 biomedical segmentation 从一次性生成隐式 segmentation token，改成 MLLM 连续输出文字推理与 positive / negative clicks 的交互过程。

#### [JarvisEvo: Towards a Self-Evolving Photo Editing Agent with Synergistic Editor-Evaluator Optimization](/papers/agent-tool-use-2026/reading/c64/)

CVPR 2026 · 直接工具使用 · 正文笔记

JarvisEvo 将修图、观察编辑结果、自评分和反思放入 interleaved multimodal chain-of-thought（iMCoT），并让同一个模型的 editor 与 evaluator 能力通过 SEPO 交替优化。

#### [Learning to Focus and Precise Cropping:A Reinforcement Learning Framework with Information Gaps and Grounding Loss for MLLMs](/papers/agent-tool-use-2026/reading/c69/)

CVPR 2026 · 直接工具使用 · 正文笔记

LFPC 用两阶段 RL 学习真正依赖 image crop 的高分辨率问答。

#### [Learning to Select Visual Tools from Experience](/papers/agent-tool-use-2026/reading/c70/)

CVPR 2026 · 直接工具使用 · 正文笔记

VisualToolAgent（VisTA）把选择视觉工具的 agent 与负责回答的 frozen reasoner 解耦，单独用 RL 学习哪些工具组合适合当前 image–question。

#### [LensWalk: Agentic Video Understanding by Planning How You See in Videos](/papers/agent-tool-use-2026/reading/c71/)

CVPR 2026 · 直接工具使用 · 正文笔记

LensWalk 把视频理解中的 observation 本身变为 Agent 决策。

#### [Lighting-grounded Video Generation with Renderer-based Agent Reasoning](/papers/agent-tool-use-2026/reading/c72/)

CVPR 2026 · 直接工具使用 · 正文笔记

LiVER 让 renderer-based agents 把自然语言中的场景布局、灯光与相机运动转成显式 3D scene proxy，再用该 proxy 条件化 video diffusion model。

#### [LongVT: Incentivizing "Thinking with Long Videos" via Native Tool Calling](/papers/agent-tool-use-2026/reading/c73/)

CVPR 2026 · 直接工具使用 · 正文笔记

LongVT 让长视频模型在全局稀疏浏览后原生调用 crop_video(start_time, end_time)，获取局部更密集的帧并继续推理，形成 interleaved Multimodal Chain-of-Tool-Thought。

#### [META: Meta Evolution of Tool Trajectory Adaptation for Long-Video Understanding](/papers/agent-tool-use-2026/reading/c74/)

CVPR 2026 · 直接工具使用 · 正文笔记

META 在 frozen Orchestrator 和 Workers 之外维护会演化的 Meta Toolset。

#### [OctoT2I: A Self-Evolving Agentic Text-to-Image Router](/papers/agent-tool-use-2026/reading/c86/)

CVPR 2026 · 直接工具使用 · 正文笔记

OctoT2I 把多个 text-to-image models 的选择定义为满足质量阈值下的成本最小化问题。

#### [OralGPT-Plus: Learning to Use Visual Tools via Reinforcement Learning for Panoramic X-ray Analysis](/papers/agent-tool-use-2026/reading/c87/)

CVPR 2026 · 直接工具使用 · 正文笔记

OralGPT-Plus 将 panoramic X-ray 理解组织成观察、局部复查与左右对照的过程。

#### [Proof-of-Perception: Certified Tool-Using Multimodal Reasoning with Compositional Conformal Guarantees](/papers/agent-tool-use-2026/reading/c93/)

CVPR 2026 · 直接工具使用 · 正文笔记

Proof-of-Perception（PoP）把多模态推理编译为 perception/fusion DAG，并让每个节点输出经过 split conformal calibration 的候选集合。

#### [REALM: An MLLM-Agent Framework for Open World 3D Reasoning Segmentation and Editing on Gaussian Splatting](/papers/agent-tool-use-2026/reading/c97/)

CVPR 2026 · 直接工具使用 · 正文笔记

REALM 在 3D Gaussian Splatting 上执行开放世界 reasoning segmentation，并将得到的 3D object mask 用于删除、替换和风格修改。

#### [Refer-Agent: A Collaborative Multi-Agent System with Reasoning and Reflection for Referring Video Object Segmentation](/papers/agent-tool-use-2026/reading/c102/)

CVPR 2026 · 直接工具使用 · 正文笔记

Refer-Agent 用无需微调的多 agent pipeline 完成 Referring Video Object Segmentation：先选择能说明用户意图的帧，再生成目标描述、定位 bounding boxes，最后调用视频分割模型传播 mask。

#### [RetouchIQ: MLLM Agents for Instruction-Based Image Retouching with Generalist Reward](/papers/agent-tool-use-2026/reading/c106/)

CVPR 2026 · 直接工具使用 · 正文笔记

RetouchIQ 训练 MLLM 将审美指令映射为可执行 Lightroom 参数，并用 Generalist Reward Model（GRM）指导 RL。

#### [REVISOR: Beyond Textual Reflection, Towards Multimodal Introspective Reasoning in Long-Form Video Understanding](/papers/agent-tool-use-2026/reading/c98/)

CVPR 2026 · 直接工具使用 · 正文笔记

REVISOR 把长视频 reflection 改成可重新获取视觉证据的两阶段推理。

#### [See and Fix the Flaws: Enabling VLMs and Diffusion Models to Comprehend Visual Artifacts via Agentic Data Synthesis](/papers/agent-tool-use-2026/reading/c120/)

CVPR 2026 · 直接工具使用 · 正文笔记

ArtiAgent 从真实图像主动合成 structural visual artifacts，同时产生有缺陷与无缺陷的成对数据和局部解释。

#### [See Further, Think Deeper: Advancing VLM's Reasoning Ability with Low-level Visual Cues and Reflection](/papers/agent-tool-use-2026/reading/c117/)

CVPR 2026 · 直接工具使用 · 正文笔记

ForeSight 让 VLM 在推理中主动调用 Canny、Zoom-In 和 Color tools，并用预测目标区域被遮挡后的图像进行 visual reflection。

#### [Seeing as Experts Do: A Knowledge-Augmented Agent for Open-Set Fine-Grained Visual Understanding](/papers/agent-tool-use-2026/reading/c122/)

CVPR 2026 · 直接工具使用 · 正文笔记

KFRA 将 fine-grained recognition 扩展为 knowledge-augmented reasoning：先生成开放类别假设，再查找其辨别性知识，把知识落实到图像区域，最后跨对象整合证据回答。

#### [SenseSearch: Empowering Vision-Language Models with High-Resolution Agentic Search-Reasoning via Reinforcement Learning](/papers/agent-tool-use-2026/reading/c124/)

CVPR 2026 · 直接工具使用 · 正文笔记

SenseSearch 在同一 agentic VLM 中协调 text search、reverse image search 和 image crop，让高分辨率细节识别与外部知识查询相互驱动。

#### [SpaceTools: Tool-Augmented Spatial Reasoning via Double Interactive RL](/papers/agent-tool-use-2026/reading/c127/)

CVPR 2026 · 直接工具使用 · 正文笔记

SpaceTools 用 Double Interactive Reinforcement Learning（DIRL）学习多种视觉与机器人工具的组合。

#### [Thinking with Programming Vision: Towards a Unified View for Thinking with Images](/papers/agent-tool-use-2026/reading/c136/)

CVPR 2026 · 直接工具使用 · 正文笔记

CodeVision 以可执行 code 统一 visual tool use，允许模型组合图像操作、读取运行错误并修复程序。

#### [Thinking With Videos: Multimodal Tool-Augmented Reinforcement Learning for Long Video Reasoning](/papers/agent-tool-use-2026/reading/c134/)

CVPR 2026 · 直接工具使用 · 正文笔记

VITAL（Video Intelligence via Tool-Augmented Learning）在视频推理链中插入按时间区间密集取帧的工具操作，使模型可再次观看回答所需证据。

#### [VideoARM: Agentic Reasoning over Hierarchical Memory for Long-Form Video Understanding](/papers/agent-tool-use-2026/reading/c150/)

CVPR 2026 · 直接工具使用 · 正文笔记

VideoARM 将按需视频观察和 hierarchical multimodal memory 的构建放在同一 observe–think–act–memorize 循环。

#### [VideoChat-M1: Collaborative Policy Planning for Video Understanding via Multi-Agent Reinforcement Learning](/papers/agent-tool-use-2026/reading/c152/)

CVPR 2026 · 直接工具使用 · 正文笔记

VideoChat-M1 通过 Collaborative Policy Planning（CPP）让多个 agents 各自产生视频工具调用计划，在执行过程中共享发现并修改后续策略，再用 multi-agent RL 训练这种协作。

#### [VideoSeek: Long-Horizon Video Agent with Tool-Guided Seeking](/papers/agent-tool-use-2026/reading/c153/)

CVPR 2026 · 直接工具使用 · 正文笔记

VideoSeek 将长视频理解变成 query-aware evidence seeking，由 thinking LLM 沿视频情节和因果线索选择 overview、skim、focus 三种观察尺度。

#### [Vinedresser3D: Towards Agentic Text-guided 3D Editing](/papers/agent-tool-use-2026/reading/c155/)

CVPR 2026 · 直接工具使用 · 正文笔记

Vinedresser3D 用 MLLM 把自然语言编辑指令转成分解后的文本、参考图与自动 3D mask，再在 Trellis 原生 3D latent space 中执行局部 inversion-inpainting。

#### [ViRC: Enhancing Visual Interleaved Mathematical CoT with Reason Chunking](/papers/agent-tool-use-2026/reading/c149/)

CVPR 2026 · 直接工具使用 · 正文笔记

ViRC 用 Reason Chunking 把视觉数学推理划为 Critical Reasoning Units（CRUs）。

#### [VISTA: A Test-Time Self-Improving Video Generation Agent](/papers/agent-tool-use-2026/reading/c144/)

CVPR 2026 · 直接工具使用 · 正文笔记

VISTA 对黑盒 text-to-video generator 进行 test-time prompt optimization：先把用户想法写成时序化场景计划，生成候选视频并选优，再由视觉、音频和情境三类评判系统指出失败，驱动 prompt agent 修订后重新生成。

#### [Visual Document Understanding and Reasoning: A Multi-Agent Collaboration Framework with Agent-Wise Adaptive Test-Time Scaling](/papers/agent-tool-use-2026/reading/c157/)

CVPR 2026 · 直接工具使用 · 正文笔记

MACT 将 visual document QA 拆成 planning、execution、judgment 与 answer 四种职能，并为各职能配置不同 test-time scaling。

#### [VULCAN: Tool-Augmented Multi Agents for Iterative 3D Object Arrangement](/papers/agent-tool-use-2026/reading/c146/)

CVPR 2026 · 直接工具使用 · 正文笔记

VULCAN 用 Planner、Executor 和 Evaluators 反复执行 3D object arrangement，把高层语言要求转成逐对象移动，并在每个中间状态检查几何和语义合理性。

#### [WorldMM: Dynamic Multimodal Memory Agent for Long Video Reasoning](/papers/agent-tool-use-2026/reading/c160/)

CVPR 2026 · 直接工具使用 · 正文笔记

WorldMM 为超长视频构建 episodic、semantic 和 visual 三类互补记忆，并由 retrieval agent 按问题动态选择来源及时间尺度，收集充分信息后交给 response agent 作答。

#### [ZoomEarth: Active Perception for Ultra-High-Resolution Geospatial Vision-Language Tasks](/papers/agent-tool-use-2026/reading/c161/)

CVPR 2026 · 直接工具使用 · 正文笔记

ZoomEarth 以低分辨率全图获取地理场景，再自主决定是否、在哪里 crop，并从原始超高分辨率图像回读局部细节。

#### [3DrawAgent: Teaching LLM to Draw in 3D with Early Contrastive Experience](/papers/agent-tool-use-2026/reading/c1/)

CVPR 2026 · 扩展相关 · 正文笔记

3DrawAgent 用冻结 LLM 将语言或参考图转成 3D Bézier curves，并通过生成结果之间的 contrastive experience 更新外部绘图知识。

#### [A Multi-Agent Perception-Action Alliance for Efficient Long Video Reasoning](/papers/agent-tool-use-2026/reading/c2/)

CVPR 2026 · 扩展相关 · 正文笔记

A4VL 让多个 VLM 先独立寻找 query-specific perception clues，再据此取视频片段作答。

#### [AREA3D: Active Reconstruction Agent with Unified Feed-Forward 3D Perception and Vision-Language Guidance](/papers/agent-tool-use-2026/reading/c4/)

CVPR 2026 · 扩展相关 · 正文笔记

AREA3D 将 feed-forward geometry confidence 与 VLM 的语义不确定性线索合并到共享 3D voxel grid，再在有限 view budget 内选择 next-best views。

#### [EVA: Efficient Reinforcement Learning for End-to-End Video Agent](/papers/agent-tool-use-2026/reading/c34/)

CVPR 2026 · 扩展相关 · 正文笔记

EVA 学习 planning-before-perception 的视频 Agent：最初仅根据问题决定如何取帧，随后在 Summary–Planning–Action–Reflection 循环中调整时间区间、帧数和空间分辨率。

#### [Graph2Eval: Automatic Multimodal Task Generation for Agents via Knowledge Graphs](/papers/agent-tool-use-2026/reading/c53/)

CVPR 2026 · 扩展相关 · 正文笔记

Graph2Eval 将外部文档和真实网页转成 heterogeneous knowledge graph，再从有结构约束的 subgraph 生成 agent 任务。

#### [Hierarchical Long Video Understanding with Audiovisual Entity Cohesion and Agentic Search](/papers/agent-tool-use-2026/reading/c57/)

CVPR 2026 · 扩展相关 · 正文笔记

HAVEN 将长视频离线组织为 global summary、scene、segment 与 canonical audiovisual entity 四层索引，再让 reasoning agent 按问题在这些层级间搜索。

#### [ModularAgent: A Task-Aware Modular Framework for Joint Optimization of Multimodal Large Language Models and World Models](/papers/agent-tool-use-2026/reading/c80/)

CVPR 2026 · 扩展相关 · 正文笔记

ModularAgent 在 latent representation 层联合训练 MLLM 与 RSSM world model，通过 task-aware modular fusion 将语义特征送入 imagined rollouts，再把 task-conditioned behavior objectives 反馈到语义表示。

#### [R4: Retrieval-Augmented Reasoning for Vision-Language Models in 4D Spatio-Temporal Space](/papers/agent-tool-use-2026/reading/c95/)

CVPR 2026 · 扩展相关 · 正文笔记

R4 为 frozen VLM 增加持续更新的 object-centric 4D memory：每个对象同时记录语义、全局三维几何和时间区间，并保留观察 agent 与可见性。

#### [Resolving Evidence Sparsity: Agentic Context Engineering for Long-Document Understanding](/papers/agent-tool-use-2026/reading/c103/)

CVPR 2026 · 扩展相关 · 正文笔记

SLEUTH 以 coarse-to-fine context engineering 解决长文档证据稀疏：先检索少量页面，再分别提取带位置的结构化 clues 与筛选必须保留的视觉页，最后按问题难度选择推理模式，在 evidence-dense context 上生成带出处的答案。

#### [SAGE: Training Smart Any-Horizon Agents for Long Video Reasoning with Reinforcement Learning](/papers/agent-tool-use-2026/reading/c109/)

CVPR 2026 · 扩展相关 · 正文笔记

SAGE 学习 any-horizon video reasoning，在短而简单的问题上直接回答，在长视频或需要外部知识的问题上多轮调用工具。

#### [SciEducator: Scientific Video Understanding and Educating via Deming-Cycle Multi-Agent System](/papers/agent-tool-use-2026/reading/c116/)

CVPR 2026 · 扩展相关 · 正文笔记

SciEducator 用 Plan–Do–Study–Act 循环理解科学视频：规划候选解释与工具链、选择并执行方案、分析证据不足的原因，再修改检索与观察策略。

#### [Select Less, Reason More: Prioritizing Evidence Purity for Video Reasoning](/papers/agent-tool-use-2026/reading/c123/)

CVPR 2026 · 扩展相关 · 正文笔记

EARL 将 video reasoning 的 frame selection 与 localized re-sampling 联合训练，并用人工核验的 key-frame labels 奖励 evidence purity。

#### [SVAgent: Storyline-guided Long Video Understanding via Cross-Modal Multi-Agent Collaboration](/papers/agent-tool-use-2026/reading/c111/)

CVPR 2026 · 扩展相关 · 正文笔记

SVAgent 用持续更新的 query-aware storyline 组织长视频证据，再通过 hypothesis formation、DPP frame selection、分离的文本/视觉决策及 meta verification 形成答案。

#### [Symphony: A Cognitively-Inspired Multi-Agent System for Long-Video Understanding](/papers/agent-tool-use-2026/reading/c128/)

CVPR 2026 · 扩展相关 · 正文笔记

Symphony 按能力而非单纯模态分工组织长视频 agent：Planning 负责推理与调度，Grounding 找证据时段，Visual Perception 检查视觉细节，Subtitle 分析字幕，Reflection 核验整条推理并驱动补充搜索。

#### [Think, Then Verify: A Hypothesis-Verification Multi-Agent Framework for Long Video Understanding](/papers/agent-tool-use-2026/reading/c133/)

CVPR 2026 · 扩展相关 · 正文笔记

VideoHV-Agent 把 multiple-choice video QA 转为 hypothesis–verification。

#### [Agentic Very Long Video Understanding](/papers/agent-tool-use-2026/reading/e246/)

ACL 2026 · 直接工具使用 · 正文笔记

EGAgent 为跨天乃至一周的 egocentric video QA 建立带时间的 entity scene graph，并让规划代理联合查询视觉帧、音频转写和实体关系。

#### [ChartAgent: A Multimodal Agent for Visually Grounded Reasoning in Complex Chart Question Answering](/papers/agent-tool-use-2026/reading/a39/)

ACL 2026 · 直接工具使用 · 正文笔记

ChartAgent 把图表 QA 的中间推理放回图像空间：agent 反复定位 legend、分割 bar 或 pie slice、标注坐标并计算数值，再查看工具输出的可视化以修正下一步。

#### [Deep-Reporter: Deep Research for Grounded Multimodal Long-Form Generation](/papers/agent-tool-use-2026/reading/d193/)

ACL 2026 · 直接工具使用 · 正文笔记

Deep-Reporter 将 deep research 扩展到包含图表、示意图和文字证据的长报告生成：按 section checklist 检索双模态材料，过滤后逐节撰写，并用压缩全局记忆加局部原文维持连续性。

#### [Doc-V*: Coarse-to-Fine Interactive Visual Reasoning for Multi-Page Document VQA](/papers/agent-tool-use-2026/reading/d216/)

ACL 2026 · 直接工具使用 · 正文笔记

Doc-V* 将 OCR-free 多页文档问答改为 coarse-to-fine 的交互式证据聚合：先看带页码的缩略图总览，再自主检索或精读指定页，并维护结构化 working memory。

#### [DocLens: A Tool-Augmented Multi-Agent Framework for Long Visual Document Understanding](/papers/agent-tool-use-2026/reading/a52/)

ACL 2026 · 直接工具使用 · 正文笔记

DocLens 把长视觉文档取证分成 page navigation 与 element localization 两个尺度：先结合整页截图和 OCR 找页，再裁出相关页的图表与表格细看。

#### [DORA: A Dual-Objective Reinforcement Learning Framework for Effective and Efficient Multimodal Agentic Search](/papers/agent-tool-use-2026/reading/e66/)

ACL 2026 · 直接工具使用 · 正文笔记

DORA 用 dual-objective RL 同时训练多模态 agent 的检索质量与回答质量，并只在正确轨迹之间奖励较少的 search calls。

#### [Enhancing Agentic Textual Graph Retrieval with Synthetic Stepwise Supervision](/papers/agent-tool-use-2026/reading/e139/)

ACL 2026 · 直接工具使用 · 正文笔记

Graph-S3 为 agentic textual graph retrieval 合成可逐步评价的监督，用经过提炼的 golden subgraphs 指导图探索策略。

#### [I2E: From Image Pixels to Actionable Interactive Environments for Text-Guided Image Editing](/papers/agent-tool-use-2026/reading/d210/)

ACL 2026 · 直接工具使用 · 正文笔记

I2E 先把图片分解为可操作的 amodal object layers 与背景，再由 physics-aware VLA agent 将编辑指令编译为 atomic actions。

#### [LongVideoAgent: Multi-Agent Reasoning with Long Videos](/papers/agent-tool-use-2026/reading/e220/)

ACL 2026 · 直接工具使用 · 正文笔记

LongVideoAgent 让 master LLM 按问题反复选择定位片段、查看局部画面或回答，借助 grounding agent 和 vision agent 从长视频中提取稀疏证据。

#### [Look Less, Reason More: Rollout-Guided Adaptive Pixel-Space Reasoning](/papers/agent-tool-use-2026/reading/d25/)

ACL 2026 · 直接工具使用 · 正文笔记

该工作让 VLM 学习按问题决定是否进行 zoom-in，而非普遍鼓励视觉工具。

#### [MatchTIR: Fine-Grained Supervision for Tool-Integrated Reasoning via Bipartite Matching](/papers/agent-tool-use-2026/reading/a27/)

ACL 2026 · 直接工具使用 · 正文笔记

MatchTIR 将 tool-integrated reasoning 的过程监督转化为 predicted 与 golden tool calls 之间的 bipartite matching，用有限的匹配信用区分有效、错误和重复调用。

#### [Shanks: Simultaneous Hearing and Thinking for Spoken Language Models](/papers/agent-tool-use-2026/reading/a18/)

ACL 2026 · 直接工具使用 · 正文笔记

Shanks 让 spoken language model 在用户仍说话时处理固定时长 speech chunks，并交错生成不播出的 thinking chunks。

#### [Simple-VGC: Enhancing Visual Grounding in Multimodal Reasoning via Adaptive Tool Composition](/papers/agent-tool-use-2026/reading/a6/)

ACL 2026 · 直接工具使用 · 正文笔记

Simple-VGC 按 visual grounding 的失败机制组合三种图像操作：reuse 重新注入原图，focus_area 聚焦区域，zoom_in 放大图像。

#### [SlideAgent: Hierarchical Agentic Framework for Multi-Page Visual Document Understanding](/papers/agent-tool-use-2026/reading/e78/)

ACL 2026 · 直接工具使用 · 正文笔记

SlideAgent 先离线式构建 query-agnostic 的 global、page、element 三层文档知识，再按问题检索和激活相应 agents。

#### [Spatial-Agent: Agentic Geo-spatial Reasoning with Scientific Core Concepts](/papers/agent-tool-use-2026/reading/e80/)

ACL 2026 · 直接工具使用 · 正文笔记

Spatial-Agent 将自然语言地理问题转换成受 GIScience core concepts 与 functional roles 约束的 GeoFlow Graph，再映射为实际 GIS operators 执行。

#### [Spec-o3: A Tool-Augmented Vision-Language Agent for Rare Celestial Object Candidate Vetting via Automated Spectral Inspection](/papers/agent-tool-use-2026/reading/a8/)

ACL 2026 · 直接工具使用 · 正文笔记

Spec-o3 将稀有天体候选复核建模为 astronomer-aligned spectral inspection：代理读取光谱总览，自主选择波长区间重新绘图，再把局部线形证据与文本判断交替积累。

#### [Speech-Hands: A Self-Reflection Voice Agentic Approach to Speech Recognition and Audio Reasoning with Omni Perception](/papers/agent-tool-use-2026/reading/e230/)

ACL 2026 · 直接工具使用 · 正文笔记

Speech-Hands 将音频理解中的信息来源选择显式化：omni model 先给出自身预测，再学习输出 internal、external 或 rewrite action token，决定信任自己的感知、采用专门模型结果，还是结合音频和候选重新生成。

#### [VoxMind: An End-to-End Agentic Spoken Dialogue System](/papers/agent-tool-use-2026/reading/a22/)

ACL 2026 · 直接工具使用 · 正文笔记

VoxMind 在 end-to-end spoken dialogue model 中加入 Think-before-Speak，并以辅助 LLM 并行检索工具，使语音 agent 先规划、再回答或调用局部工具集。

#### [Analyzing and Internalizing Complex Policy Documents for LLM Agents](/papers/agent-tool-use-2026/reading/e95/)

ACL 2026 · 扩展相关 · 正文笔记

该工作用 CC-Gen 控制工具 Agent 的 policy complexity，并提出 Category-Aware Policy Continued Pretraining（CAP-CPT），按 factual、behavioral、simple conditional、complex conditional 四类规则生成专门数据，使模型以短 policy identifier 调用内化规则，减少长政策 prompt。

#### [Beyond Single-shot Writing: Deep Research Agents are Unreliable at Multi-turn Report Revision](/papers/agent-tool-use-2026/reading/e68/)

ACL 2026 · 扩展相关 · 正文笔记

MrDRE把Deep Research Agents的能力评估从首次生成报告扩展为多轮反馈修订，同时追踪反馈是否落实和原有内容是否被破坏。

#### [SOAR: Supervision from Observation for Agentic Reinforcement Learning](/papers/agent-tool-use-2026/reading/a66/)

ACL 2026 · 扩展相关 · 正文笔记

SOAR 把 tool-returned observation tokens 也纳入训练，为其分配由前一步 action certainty 调节的正优势；原本的 reasoning/action tokens 仍接受 outcome-based GRPO 信号。

#### [Verify Before You Commit: Towards Faithful Reasoning in LLM Agents via Self-Auditing](/papers/agent-tool-use-2026/reading/e176/)

ACL 2026 · 扩展相关 · 正文笔记

SAVER 在 Agent 把推理结果用于动作或 memory 前，生成结构不同的候选 belief、筛选互补候选、审计具体证据/逻辑缺陷并最小修复。

## 03 · GUI / Web / Computer Use

47 篇 · CVPR 13 · ACL 34

#### [ReFAct: Empowering Multimodal Web Agents with Visual and Context Focusing](/papers/agent-tool-use-2026/reading/c100/)

CVPR 2026 · 直接工具使用 · 正文笔记

ReFAct 在 Reasoning–Acting loop 中增加 Focusing action，让 Multimodal Web Agent 主动决定图像中哪些区域值得检索、哪些网页内容应暂时移出 context。

#### [WebGym: Scaling Training Environments for Long-Horizon Visual Web Agents with Realistic Tasks](/papers/agent-tool-use-2026/reading/c158/)

CVPR 2026 · 直接工具使用 · 正文笔记

WebGym 将 realistic visual web agent 的训练扩展为一个完整环境：大规模任务、结构化 rubric evaluator 和 asynchronous rollout system 共同支持 online RL。

#### [DRS-GUI: Dynamic Region Search for Training-Free GUI Grounding](/papers/agent-tool-use-2026/reading/c27/)

CVPR 2026 · 扩展相关 · 正文笔记

DRS-GUI 在最终坐标预测前插入 training-free 的 dynamic region search。

#### [DualMirage: Hunting Stealthy Multimodal LLM Agents via CAPTCHAs with Contour and Adversarial Illusions](/papers/agent-tool-use-2026/reading/c33/)

CVPR 2026 · 扩展相关 · 正文笔记

DualMirage 将 contour illusion 与受约束 adversarial perturbation 叠加成 CAPTCHA。

#### [Ego2Web: A Web Agent Benchmark Grounded in Egocentric Videos](/papers/agent-tool-use-2026/reading/c36/)

CVPR 2026 · 扩展相关 · 正文笔记

Ego2Web 把 egocentric video perception 与真实网站执行放进同一 benchmark。

#### [GUI-CEval: A Hierarchical and Comprehensive Chinese Benchmark for Mobile GUI Agents](/papers/agent-tool-use-2026/reading/c47/)

CVPR 2026 · 扩展相关 · 正文笔记

GUI-CEval 将中文移动 GUI agent 的能力评价分成 foundation 与 application 两层：前者用统一 multimodal QA 分解感知、规划、反思及执行后评价，后者在对应应用和页面上测 grounding、offline action prediction 和真实设备 online execution，从而连接局部技能与端到端行为。

#### [HATS: Hardness-Aware Trajectory Synthesis for GUI Agents](/papers/agent-tool-use-2026/reading/c54/)

CVPR 2026 · 扩展相关 · 正文笔记

HATS 把 GUI trajectory synthesis 的困难定义为 action 的 semantic ambiguity，并让探索与指令修订形成闭环。

#### [HiconAgent: History Context-aware Policy Optimization for GUI Agents](/papers/agent-tool-use-2026/reading/c55/)

CVPR 2026 · 扩展相关 · 正文笔记

HiconAgent 的 History Context-aware Policy Optimization（HCPO）联合优化 GUI 历史使用与压缩：Dynamic Context Sampling 在 rollout 中改变历史长度，Anchor-guided History Compression 在浅层视觉融合后删除旧截图 tokens、保留历史 action tokens，再对齐完整与压缩分支的行为分布。

#### [iSHIFT: Lightweight Slow-Fast GUI Agent with Adaptive Perception](/papers/agent-tool-use-2026/reading/c162/)

CVPR 2026 · 扩展相关 · 正文笔记

iSHIFT 在约 2.5B 的 GUI agent 中结合 latent thinking 与 conditional visual perception。

#### [Learning to Adapt: Self-Improving Web Agent via Cognitive-Aware Exploration](/papers/agent-tool-use-2026/reading/c67/)

CVPR 2026 · 扩展相关 · 正文笔记

SCALE 让同一 web agent 分别扮演 Selector、Predictor 和固定 Judger，自主选择不熟悉动作、预测结果、实际执行并对照，再用预测失败经验更新选择与预测能力。

#### [MMBench-GUI: A Unified Hierarchical Evaluation Framework for Multi-Platform GUI Agents](/papers/agent-tool-use-2026/reading/c75/)

CVPR 2026 · 扩展相关 · 正文笔记

MMBench-GUI 提供四级 GUI 能力评测，依次检查 Content Understanding、Element Grounding、单应用 Task Automation 和跨应用 Task Collaboration。

#### [See, Think, Act: Teaching Multimodal Agents to Effectively Interact with GUI by Identifying Toggles](/papers/agent-tool-use-2026/reading/c121/)

CVPR 2026 · 扩展相关 · 正文笔记

State-aware Reasoning（StaR）专门训练 GUI agent 在 toggle 操作前比较当前与期望状态：先看开关现在是否开启，再解析用户想达到的状态，只有二者不同时才 CLICK，否则声明 COMPLETED。

#### [Towards GUI Agents: Vision-Language Diffusion Models for GUI Grounding](/papers/agent-tool-use-2026/reading/c138/)

CVPR 2026 · 扩展相关 · 正文笔记

论文将 discrete diffusion VLM LLaDA-V 适配到 GUI grounding，把截图和指令映射为包含 action type 与 bounding box 的文本，并提出 hybrid masking schedule 强化坐标之间的几何依赖。

#### [OS-Symphony: A Holistic Framework for Robust and Generalist Computer-Using Agents](/papers/agent-tool-use-2026/reading/e119/)

ACL 2026 · 直接工具使用 · 正文笔记

OS-Symphony 将通用 computer-using agent 组织为 Orchestrator、Reflection-Memory Agent 与多种专用工具代理，使长流程操作同时具备可压缩的历史、按需获取的图文教程和不同操作通道。

#### [UI-Copilot: Advancing Long-Horizon GUI Automation via Tool-Integrated Policy Optimization](/papers/agent-tool-use-2026/reading/a42/)

ACL 2026 · 直接工具使用 · 正文笔记

UI-Copilot 让 GUI policy 专注动作执行，把历史事实检索和数值计算交给按需调用的轻量 copilot。

#### [A Functionality-Grounded Benchmark for Evaluating Web Agents in E-commerce Domains](/papers/agent-tool-use-2026/reading/e10/)

ACL 2026 · 扩展相关 · 正文笔记

Amazon-Bench用网页真实可交互功能来驱动任务生成，扩大到地址、wishlist、账户、店铺及gift card等操作，并将任务失败区分为无状态损害与产生非预期状态变更两类。

#### [Anchor: Branch-Point Data Generation for GUI Agents](/papers/agent-tool-use-2026/reading/e96/)

ACL 2026 · 扩展相关 · 正文笔记

Anchor 从少量验证过的桌面轨迹中寻找 branch points，在已经到达的 GUI 状态提出可执行的新目标，复用可靠前缀并生成不同后缀。

#### [Android Coach: Improve Online Agentic Training Efficiency with Single State Multiple Actions](/papers/agent-tool-use-2026/reading/e69/)

ACL 2026 · 扩展相关 · 正文笔记

Android Coach 将在线 GUI RL 的训练单位从 Single State Single Action 扩展为 Single State Multiple Actions：昂贵 Android rollout 提供状态，策略在这些状态上重采样多个动作，再由在线训练的 critic 估值，以增加每次真实交互产生的训练信号。

#### [C-World: A Computer Use Agent Environment Creator](/papers/agent-tool-use-2026/reading/e231/)

ACL 2026 · 扩展相关 · 正文笔记

C-World提供可按需创建computer-use环境的系统，将工具动作空间、任务分布、状态转移和reward四个部分组合起来，并支持真实API与World Engine模拟两种运行方式。

#### [Closing the Spatial Execution Gap in Digital Whiteboards via Verifiable Reinforcement Learning](/papers/agent-tool-use-2026/reading/d64/)

ACL 2026 · 扩展相关 · 正文笔记

论文以 Whiteboard-8 将白板上的空间操作转为有确定性奖励的任务，训练小型 VLM 按 Identify–Reason–Verify 协议计算几何约束并输出可执行 JSON。

#### [DAC-Bench: A Decision-Aware Benchmark for Compositional Mobile GUI Tasks](/papers/agent-tool-use-2026/reading/e238/)

ACL 2026 · 扩展相关 · 正文笔记

DAC-Bench 将 mobile GUI 指令构造为带约束的有向任务图，覆盖 Sequential、Conjunctive、Conditional、Hierarchical 四类结构，使评测从单步点击匹配扩展到长序列进度和分支选择；包含 830 个复杂 episode、11,345 个动作，横跨 Android 与 iOS。

#### [Don’t Act Blindly: Robust GUI Automation via Action-Effect Verification and Self-Correction](/papers/agent-tool-use-2026/reading/e163/)

ACL 2026 · 扩展相关 · 正文笔记

VeriGUI让GUI agent在每步行动前显式检查上一动作是否产生预期视觉效果，以Thinking–Verification–Action–Expectation循环连接行动、效果预测和失败恢复。

#### [Don’t Click That: Teaching Web Agents to Resist Deceptive Interfaces](/papers/agent-tool-use-2026/reading/e28/)

ACL 2026 · 扩展相关 · 正文笔记

DUDE 在 web agent 与点击执行之间加入 task-aware evaluator，判断点击是 legitimate、deceptive 还是 ineffective，并通过 hybrid-reward learning 与经验总结提高判别。

#### [Empowering GUI Agents via Autonomous Experience Exploration and Hindsight Experience Utilization for Task Planning](/papers/agent-tool-use-2026/reading/e200/)

ACL 2026 · 扩展相关 · 正文笔记

PEEU 先让 Agent 自主探索网站，再从实际状态变化归纳 hindsight experience，重写与已执行轨迹一致、约束更具体的高层任务，用这些任务训练小型 MLLM 的规划能力。

#### [Experience-driven Multi-turn Reinforcement Learning for GUI Agents](/papers/agent-tool-use-2026/reading/e41/)

ACL 2026 · 扩展相关 · 正文笔记

EMPO把专家GUI轨迹作为可复用的环境经验，在离线截图序列上进行带自生成历史的multi-turn RL。

#### [From Off-Policy to On-Policy: Enhancing GUI Agents via Bi-level Expert-to-Policy Assimilation](/papers/agent-tool-use-2026/reading/e127/)

ACL 2026 · 扩展相关 · 正文笔记

BEPA 用两级 expert-to-policy assimilation 把强 GUI expert 的轨迹转成当前 end-to-end policy 能学习的指导：先让学生按专家计划自行执行，再用其新产生的成功轨迹持续刷新缓存。

#### [GTA: Generating Long-horizon Tasks for Web Agents at Scale](/papers/agent-tool-use-2026/reading/a41/)

ACL 2026 · 扩展相关 · 正文笔记

GTA 把网站 crawling 与任务生成解耦：先缓存网页图，再检索并组合有关联的页面生成需要跨页证据的任务，同时保存答案与可回放路径。

#### [GUI0: Self-Evolving Foundational GUI Agents in Super App Ecosystems](/papers/agent-tool-use-2026/reading/e235/)

ACL 2026 · 扩展相关 · 正文笔记

GUI0将Super App中的GUI学习做成数据合成、能力预训练、actor强化和curriculum agent协同演化的流程。

#### [InfiniteWeb: Scalable Web Environment Synthesis for GUI Agent Training](/papers/agent-tool-use-2026/reading/e161/)

ACL 2026 · 扩展相关 · 正文笔记

InfiniteWeb 自动生成可供 GUI agent 训练的多页面网站、任务与 evaluator。

#### [InquireMobile: Teaching VLM-based Mobile Agent to Request Human Assistance via Reinforcement Fine-Tuning](/papers/agent-tool-use-2026/reading/e183/)

ACL 2026 · 扩展相关 · 正文笔记

InquireMobile 在 GUI 动作空间加入 call_user，通过 SFT 冷启动和规则奖励 GRPO 学会在需要澄清或确认时向用户求助，同时保留普通点击、输入等能力。

#### [MaDS: Long-Horizon GUI Automation via Synergizing Dual-Layer Memory and Multi-Round Debate](/papers/agent-tool-use-2026/reading/e144/)

ACL 2026 · 扩展相关 · 正文笔记

MaDS将双层memory与执行前multi-round debate结合：通用交互规范提供基础约束，场景化操作经验保存成功示例及失败警告；Planner的动作在真正执行前由Evaluator结合当前视觉证据反驳和修订，执行后再将结果写回记忆。

#### [MAGNET: Towards Adaptive GUI Agents with Memory-Driven Knowledge Evolution](/papers/agent-tool-use-2026/reading/e157/)

ACL 2026 · 扩展相关 · 正文笔记

MAGNET 用双层外部记忆适应 mobile GUI 的 appearance drift 与 workflow drift：procedural memory 保存可迁移任务流程，stationary memory 将图标等视觉实例与功能意图关联。

#### [MAS-Bench: A Unified Benchmark for Shortcut-Augmented Hybrid Mobile GUI Agents](/papers/agent-tool-use-2026/reading/e29/)

ACL 2026 · 扩展相关 · 正文笔记

MAS-Bench 以 139 个真实 Android 任务评测 GUI 与 API、deep link、RPA shortcut 的混合使用，并进一步测试 Agent 能否把重复操作抽象成可复用 shortcut。

#### [Measure Twice, Click Once: Co-evolving Proposer and Visual Critic via Reinforcement Learning for GUI Grounding](/papers/agent-tool-use-2026/reading/e115/)

ACL 2026 · 扩展相关 · 正文笔记

CoPC把GUI grounding从直接输出一个坐标改为Propose-then-Critic：同一MLLM先提出多个位置，再观看标有候选ID的截图，排序并选择目标。

#### [MirrorCAPTCHA: Wild CAPTCHA, Wild Distribution, Wild Web-based Platform Meet Multimodal LLM Agents](/papers/agent-tool-use-2026/reading/e174/)

ACL 2026 · 扩展相关 · 正文笔记

MirrorCAPTCHA 将 CAPTCHA 处理作为 web agent 的独立交互能力评测，同时考虑类型覆盖和遇到不同类型的概率。

#### [Mobile-R1: Towards Interactive Capability for VLM-Based Mobile Agent via Systematic Training](/papers/agent-tool-use-2026/reading/e173/)

ACL 2026 · 扩展相关 · 正文笔记

Mobile-R1 以三阶段 curriculum 将 VLM 从格式正确的单步执行推进到在线多轮任务优化：SFT 学响应结构，action-level GRPO 学可验证动作，task-level GRPO 再奖励整条轨迹的连贯性和完成度。

#### [MobileWorld: Benchmarking Autonomous Mobile Agents in Agent-User Interactive and MCP-Augmented Environments](/papers/agent-tool-use-2026/reading/a9/)

ACL 2026 · 扩展相关 · 正文笔记

MobileWorld把mobile agent评测扩展到长程跨应用、主动询问用户和GUI/MCP混合操作，并通过可自托管的开源应用获得后端可观测性。

#### [MPR-GUI: Benchmarking and Enhancing Multilingual Perception and Reasoning in GUI Agents](/papers/agent-tool-use-2026/reading/e168/)

ACL 2026 · 扩展相关 · 正文笔记

MPR-GUI 一方面建立严格跨语言对齐的 GUI perception/reasoning benchmark，另一方面提出 GUI-XLI：从英文成功、目标语言失败的平行样例提取 hidden-state discrepancy，在推理时检索并注入残差流，改善非英语 GUI 理解。

#### [NaturalGAIA: A Verifiable Benchmark and Hierarchical Framework for Long-Horizon GUI Tasks](/papers/agent-tool-use-2026/reading/e249/)

ACL 2026 · 扩展相关 · 正文笔记

NaturalGAIA 将可验证的知识关系路径与自然语言叙述分开，构造含隐含指代、乱序意图和跨 app 依赖的长程 GUI 任务；LightManus-Jarvis 则把全局任务调度和局部界面执行分给不同模块，并随执行反馈更新下一步参数。

#### [NaviMaster: Learning a Unified Policy for GUI and Embodied Navigation Tasks](/papers/agent-tool-use-2026/reading/e213/)

ACL 2026 · 扩展相关 · 正文笔记

NaviMaster以显式visual target统一GUI与embodied navigation，把物理移动从无目标的MOVEFORWARD改写为屏幕坐标MOVETO，使二维点击和三维导航都成为看图定位后行动。

#### [Nested Browser-Use Learning for Agentic Information Seeking](/papers/agent-tool-use-2026/reading/a47/)

ACL 2026 · 扩展相关 · 正文笔记

NestBrowse 用嵌套控制结构把信息检索 agent 的全局推理与页面内 evidence extraction 分开：外层决定 search、visit、click、fill，进入新页后内层逐段读取并汇总目标相关信息，只把紧凑 workspace 传回外层。

#### [PersonalAlign: Hierarchical Implicit Intent Alignment for Personalized GUI Agent with Long-Term User-Centric Records](/papers/agent-tool-use-2026/reading/e199/)

ACL 2026 · 扩展相关 · 正文笔记

PersonalAlign 将个性化 GUI 分为两层 implicit intent：从含糊指令补齐稳定偏好，以及仅凭当前时间/场景提出惯例建议。

#### [SynthAgent: Adapting Web Agents with Synthetic Supervision](/papers/agent-tool-use-2026/reading/e86/)

ACL 2026 · 扩展相关 · 正文笔记

SynthAgent围绕新网站自动生成任务和执行轨迹，并将任务修订与轨迹清理分成两个环节：执行中只在发现冲突时改正任务，结束后再按最终目标清理历史噪声。

#### [WebClipper: Efficient Evolution of Web Agents with Graph-based Trajectory Pruning](/papers/agent-tool-use-2026/reading/a46/)

ACL 2026 · 扩展相关 · 正文笔记

WebClipper 把 web research 轨迹转换为 action–information dependency graph，寻找支撑最终答案的近似最小 DAG，再据此删去循环验证和无贡献分支。

#### [WebSTAR: Scalable Data Synthesis for Computer Use Agents with Step-Level Filtering](/papers/agent-tool-use-2026/reading/e4/)

ACL 2026 · 扩展相关 · 正文笔记

WebSTAR 将强 CUA 的嘈杂 rollout 转成可用于 SFT 的逐步监督：先筛成功轨迹，再给每一步评分，只对高质量动作计算 loss，同时保留错误历史作为上下文。

#### [WebSynthesis: World Model-Guided Monte Carlo Tree Search for Efficient WebAgent Trajectory Synthesis](/papers/agent-tool-use-2026/reading/e137/)

ACL 2026 · 扩展相关 · 正文笔记

WebSynthesis训练预测accessibility tree变化的LLM World Model，再在其中用MCTS生成多分支web trajectories。

#### [Why Do LLM-based Web Agents Fail? A Hierarchical Planning Perspective](/papers/agent-tool-use-2026/reading/e182/)

ACL 2026 · 扩展相关 · 正文笔记

论文用 hierarchical planning 把 web agent 失败拆成 high-level planning、low-level execution 和 replanning 三层，并以人工对齐的 subgoals 作为诊断参照。

## 04 · 代码 / 软件 / 科研执行

30 篇 · CVPR 7 · ACL 23

#### [CodeDance: A Dynamic Tool-integrated MLLM for Executable Visual Reasoning](/papers/agent-tool-use-2026/reading/c21/)

CVPR 2026 · 直接工具使用 · 正文笔记

CodeDance 让 MLLM 用可执行 Python 组织 visual reasoning，把 image crop、计算、绘图与标注统一为 code action。

#### [CodeV: Code with Images for Faithful Visual Reasoning via Tool-Aware Policy Optimization](/papers/agent-tool-use-2026/reading/c22/)

CVPR 2026 · 直接工具使用 · 正文笔记

CodeV 将 visual tool use 表示为 Python code，并用 Tool-Aware Policy Optimization（TAPO）同时优化 final-answer correctness 与中间工具结果的 evidence relevance。

#### [Cross-Domain Demo-to-Code via Neurosymbolic Counterfactual Reasoning](/papers/agent-tool-use-2026/reading/c25/)

CVPR 2026 · 直接工具使用 · 正文笔记

NeSyCR 将 video-to-robot-code 看作 cross-domain procedure adaptation：先从 demonstration 建立 symbolic world model，再针对 deployment environment 做 counterfactual reasoning，修正不再可行的步骤，最后生成可执行 code policy。

#### [MoReGen: Multi-Agent Motion-Reasoning Engine for Code-based Text-to-Video Synthesis](/papers/agent-tool-use-2026/reading/c79/)

CVPR 2026 · 直接工具使用 · 正文笔记

MoReGen 用 multi-agent code generation 将 text-to-video 转换为显式的 physics simulation 与 rendering。

#### [NERFIFY: A Multi-Agent Framework for Turning NeRF Papers into Code](/papers/agent-tool-use-2026/reading/c83/)

CVPR 2026 · 直接工具使用 · 正文笔记

NERFIFY 面向 NeRF paper-to-code，利用 domain knowledge、citation recovery、Graph-of-Thought repository synthesis 和 visual feedback，把论文转换为可训练的 Nerfstudio plugin。

#### [GardenDesigner: Encoding Aesthetic Principles into Jiangnan Garden Construction via a Chain of Agents](/papers/agent-tool-use-2026/reading/c48/)

CVPR 2026 · 扩展相关 · 正文笔记

GardenDesigner 把江南园林的审美与文化规则编码到四个顺序协作的 agents：地形、道路、选材、布局。

#### [ProSoftArena: Benchmarking Hierarchical Capabilities of Multi-modal Agents in Professional Software Environments](/papers/agent-tool-use-2026/reading/c90/)

CVPR 2026 · 扩展相关 · 正文笔记

ProSoftArena 建立专业软件操作的分层能力体系，并在可复位 Windows 11 VM 中提供 456 个真实任务。

#### [ChatHLS: Towards Systematic Design Automation and Optimization for High-Level Synthesis](/papers/agent-tool-use-2026/reading/d92/)

ACL 2026 · 直接工具使用 · 正文笔记

ChatHLS 把从 C/C++ 或自然语言生成 HLS-C、优化 directives 和修复综合错误组织成多 agent 闭环，并训练 HLSTuner 与 HLSFixer 两个专门模型。

#### [CodeEvo: Interaction-Driven Synthesis of Code-centric Data through Hybrid and Iterative Feedback](/papers/agent-tool-use-2026/reading/d46/)

ACL 2026 · 直接工具使用 · 正文笔记

CodeEvo 通过 Coder 与 Reviewer 的交互生成代码训练数据：以 Schema 规划题目变化，再同时使用代码执行反馈和语义审查，逐轮保留有效 instruction-code pairs。

#### [CODESTRUCT: Code Agents over Structured Action Spaces](/papers/agent-tool-use-2026/reading/e67/)

ACL 2026 · 直接工具使用 · 正文笔记

CodeStruct 将代码仓库暴露为 named AST entities 组成的 action space，用 readCode 获取完整语法单元，用 editCode 对函数、类和方法执行 insertion、replacement、removal。

#### [Discover and Prove: An Open-source Agentic Framework for Hard Mode Automated Theorem Proving in Lean 4](/papers/agent-tool-use-2026/reading/e1/)

ACL 2026 · 直接工具使用 · 正文笔记

Discover and Prove（DAP）将自动定理证明拆成发现答案与形式化证明两个环节，并用 Hard Mode benchmark 显式要求系统自己求出未知量。

#### [EGSS: Entropy-guided Stepwise Scaling for Reliable Software Engineering](/papers/agent-tool-use-2026/reading/d133/)

ACL 2026 · 直接工具使用 · 正文笔记

EGSS 将软件修复的 test-time scaling 拆为按步骤不确定性分配搜索预算，以及跨轨迹合并测试后选择补丁。

#### [FormalScience: Scalable Human-in-the-Loop Autoformalisation of Science with Agentic Code Generation in Lean](/papers/agent-tool-use-2026/reading/e124/)

ACL 2026 · 直接工具使用 · 正文笔记

FormalScience 将科学推导的 autoformalisation 组织为专家可介入的 agentic code generation 流程：先补齐自然语言问题与推导，再用 Lean4 编译反馈修复代码，并分别检查形式有效性与语义对应。

#### [MavenCoder: Competitive Code Generation via Model Adaptive Planning Strategies and Multi-Perspective Verification Enhancement](/papers/agent-tool-use-2026/reading/d137/)

ACL 2026 · 直接工具使用 · 正文笔记

MavenCoder 根据当前模型对题目的推理 confidence 选择 direct plan、reflection 或 tree decomposition，并在写完整程序之前检查 plan 的中间步骤。

#### [ParaCodex: A Profiling-Guided Autonomous Coding Agent for Reliable Parallel Code Generation and Translation](/papers/agent-tool-use-2026/reading/e89/)

ACL 2026 · 直接工具使用 · 正文笔记

ParaCodex 把 OpenMP GPU 并行化和 CUDA→OpenMP 迁移组织成有明确中间产物的工程流程：先分析热点与数据，再通过编译和数值检查建立正确实现，最后依据真实 profiler 结果优化。

#### [ReLook: Vision-Grounded RL with a Multimodal LLM Critic for Agentic Web Coding](/papers/agent-tool-use-2026/reading/e138/)

ACL 2026 · 直接工具使用 · 正文笔记

ReLook 把网页代码的视觉反馈引入 agentic RL：策略生成代码、渲染截图、调用冻结 MLLM critic 获得诊断并修改，以视觉质量奖励学习反思。

#### [SpecAgent: A Speculative Retrieval and Forecasting Agent for Code Completion](/papers/agent-tool-use-2026/reading/e98/)

ACL 2026 · 直接工具使用 · 正文笔记

SpecAgent 将昂贵的 repository 探索从代码补全的即时路径移到后台 indexing，并为每个文件预先缓存检索证据和可能新增函数的 speculative drafts。

#### [Towards Trustworthy Smart Contract Synthesis: A Multi-Agent Framework with Lean-Based Verification](/papers/agent-tool-use-2026/reading/e218/)

ACL 2026 · 直接工具使用 · 正文笔记

LeVer 将 smart contract synthesis 变成生成、形式验证、对抗执行和修复的闭环：不仅检查已有漏洞模式，还从需求推断 safety properties，并将 Solidity 抽象为 Lean 4 状态转移模型进行证明。

#### [ChipSeek: Optimizing Verilog Generation via EDA-Integrated Reinforcement Learning](/papers/agent-tool-use-2026/reading/d115/)

ACL 2026 · 扩展相关 · 正文笔记

ChipSeek 将 Icarus Verilog、Yosys 和 OpenROAD 的反馈直接接入 RTL 生成 RL，以 hierarchical rewards 同时学习格式、语法、功能、可综合性和 PPA；CDPO 在各奖励独立归一化之后组合 advantage，并随掌握程度调整基础奖励权重。

#### [CodeFlowBench: A Multi-turn, Iterative Benchmark for Complex Code Generation](/papers/agent-tool-use-2026/reading/d19/)

ACL 2026 · 扩展相关 · 正文笔记

CodeFlowBench将复杂程序拆成有依赖关系、逐轮实现的函数任务，检验模型能否复用前轮组件并最终集成完整解法。

#### [From Laboratory to Real-World Applications: Benchmarking Agentic Code Reasoning at the Repository Level](/papers/agent-tool-use-2026/reading/e38/)

ACL 2026 · 扩展相关 · 正文笔记

RepoReason 用 Abductive Assertion Verification 评测 repository-level reasoning：隐藏测试断言中的确定值，让 agent 通过跨文件阅读和状态推演补出答案。

#### [GitChameleon 2.0: Evaluating AI Code Generation Against Python Library Version Incompatibilities](/papers/agent-tool-use-2026/reading/d218/)

ACL 2026 · 扩展相关 · 正文笔记

GitChameleon 2.0 把 library version 当作代码生成必须满足的显式条件，提供 328 个 Python completion 问题及独立执行环境、可见测试和隐藏测试。

#### [KoCo-Bench: Can Large Language Models Leverage Domain Knowledge in Software Development?](/papers/agent-tool-use-2026/reading/d129/)

ACL 2026 · 扩展相关 · 正文笔记

KoCo-Bench把domain-specific coding评测改为显式提供知识语料后，测试模型能否获取并应用新框架知识。

#### [MARS2: Scaling Multi-Agent Tree Search via Reinforcement Learning for Code Generation](/papers/agent-tool-use-2026/reading/e188/)

ACL 2026 · 扩展相关 · 正文笔记

MARS2 将多个独立优化的 code-generation agents 放入同一 tree-search 环境，让不同 policy priors 在候选生成与修订中协作。

#### [MMSciCode: Real-world Evaluation of Multilingual Multi-Discipline Scientific Research Coding](/papers/agent-tool-use-2026/reading/d158/)

ACL 2026 · 扩展相关 · 正文笔记

MMSciCode 从真实论文和其代码库中挖掘核心科学算法函数，要求模型结合论文段落、公式及周边代码补全实现。

#### [OctoBench: Benchmarking Scaffold-Aware Instruction Following in Repository-Grounded Agentic Coding](/papers/agent-tool-use-2026/reading/e23/)

ACL 2026 · 扩展相关 · 正文笔记

OctoBench评测repository coding agents在真实scaffold中能否持续遵守多来源指令，将process compliance与任务结果分开观察。

#### [RepoGenesis: Benchmarking End-to-End Microservice Generation from Readme to Repository](/papers/agent-tool-use-2026/reading/d43/)

ACL 2026 · 扩展相关 · 正文笔记

RepoGenesis 把代码生成评测提升到从 README 构建完整 web microservice repository，要求模型同时交付代码、配置、依赖与启动能力。

#### [RExBench: Can coding agents autonomously implement AI research extensions?](/papers/agent-tool-use-2026/reading/e92/)

ACL 2026 · 扩展相关 · 正文笔记

RExBench 评测 coding agent 对已有 AI 研究提出的明确 extension 能否独立实现：输入论文、原 repo 和专家写的研究假设/测试要求，输出代码 patch，再运行新实验并与专家 gold 的数值结果比较。

#### [Taming System Complexity: Demystifying Software Engineering Agents in Diagnosing Linux Kernel Faults](/papers/agent-tool-use-2026/reading/e107/)

ACL 2026 · 扩展相关 · 正文笔记

论文用LinuxFLBench系统检验通用software engineering agents在Linux kernel的fault localization能力，再提出LinuxFL+对已有预测做目录与潜在原因扩展。

#### [When "Correct" Is Not Safe: Can We Trust Functionally Correct Patches Generated by Code Agents?](/papers/agent-tool-use-2026/reading/e84/)

ACL 2026 · 扩展相关 · 正文笔记

论文将 functionally correct yet vulnerable（FCV）patch 定为独立评测对象：代码修复通过功能测试，仍可能引入 CWE-defined security weakness。

## 05 · 搜索 / 检索 / Deep Research

34 篇 · CVPR 2 · ACL 32

#### [Paper2Figure: A Multi-Agent Collaborative System for Figure Generation Towards Academic Research Paper](/papers/agent-tool-use-2026/reading/c88/)

CVPR 2026 · 直接工具使用 · 正文笔记

Paper2Figure 以 FigScript 作为论文说明与可编辑图形之间的中间表示，由 generation agents 生成初稿，再由 refinement agents 查看实际渲染图并修改同一份结构。

#### [RAAS: LLM Agentic System Architecture Search with GRPO](/papers/agent-tool-use-2026/reading/c96/)

CVPR 2026 · 扩展相关 · 正文笔记

RAAS 将 Agentic Supernet 的架构搜索重点转向评估信号质量：同一 query 下比较一组候选 workflow，并对每个 workflow 重复执行后再计算相对收益，减少任务难度和随机执行对架构更新的干扰。

#### [Autonomous Knowledge Graph Exploration with Adaptive Breadth-Depth Retrieval](/papers/agent-tool-use-2026/reading/a36/)

ACL 2026 · 直接工具使用 · 正文笔记

ARK 用极简 graph-native tools 将 KG retrieval 变成自适应交互：agent 随时在全图 lexical search 和一跳 neighborhood exploration 之间切换，逐步 SELECT 证据节点并决定停止。

#### [DREAM: Deep Research Evaluation with Agentic Metrics](/papers/agent-tool-use-2026/reading/a20/)

ACL 2026 · 直接工具使用 · 正文笔记

DREAM 让 Deep Research 的评估也具备检索和工具能力，先独立于待评报告创建问题专属评价协议，再按指标调用普通 LLM、agent 或验证 workflow。

#### [FlowSearch: Advancing Deep Research with Dynamic Structured Knowledge Flow](/papers/agent-tool-use-2026/reading/d93/)

ACL 2026 · 直接工具使用 · 正文笔记

FlowSearch 以可持续修改的 Dynamic Structured Knowledge Flow 组织 deep research。

#### [IntrAgent: An LLM Agent for Content-Grounded Information Retrieval through Literature Review](/papers/agent-tool-use-2026/reading/e6/)

ACL 2026 · 直接工具使用 · 正文笔记

IntrAgent 面向 IntraView：只根据给定 scientific paper 回答细粒度研究问题，先利用 section hierarchy 推理相关位置，再逐节提取证据并检查充分性。

#### [MemSearch-o1: Empowering Large Language Models with Reasoning-Aligned Memory Growth in Agentic Search](/papers/agent-tool-use-2026/reading/e8/)

ACL 2026 · 直接工具使用 · 正文笔记

MemSearch-o1 将搜索记忆从不断拼接的历史转为由 query seed tokens 生长的细粒度 fragments，并在回答前回溯重排为连贯 memory path。

#### [MMSearch-R1: Incentivizing LMMs to Search](/papers/agent-tool-use-2026/reading/d12/)

ACL 2026 · 直接工具使用 · 正文笔记

MMSearch-R1 直接用 GRPO 训练 LMM 在真实互联网的 image search、text search 与直接回答之间作多轮决策。

#### [Paper Circle: An Open-source Multi-agent Research Discovery and Analysis Framework](/papers/agent-tool-use-2026/reading/e226/)

ACL 2026 · 直接工具使用 · 正文笔记

Paper Circle 将文献发现和单篇深读整合为共享状态的多 agent 平台：Discovery Pipeline 持续更新候选论文与排序，Analysis Pipeline 把 PDF 内容转成有 provenance 的 typed knowledge graph，支持 graph-aware Q&amp;A、覆盖检查和结构化 review。

#### [SGVEF-LOOP: Coverage-Guided Progressive Topological Exploration and Fact-Grounded Metamorphic Evaluation for MCP Agents](/papers/agent-tool-use-2026/reading/a51/)

ACL 2026 · 直接工具使用 · 正文笔记

SGVEF-LOOP 把 MCP benchmark 构造视为探索隐含工具转移图的闭环过程：主动寻找覆盖不足的工具组合，生成语义等价查询对，并检查参数可解性与执行稳定性。

#### [SPARKLE: A Structured and Plug-and-play Agentic Retrieval Policy for Adaptive RAG Models](/papers/agent-tool-use-2026/reading/e214/)

ACL 2026 · 直接工具使用 · 正文笔记

SPARKLE 用独立轻量 proxy model 控制 frozen reasoner 的 adaptive retrieval，分别承担是否检索、构造 query 和整合 evidence 三种角色。

#### [ToolOmni: Enabling Open-World Tool Use via Agentic learning with Proactive Retrieval and Grounded Execution](/papers/agent-tool-use-2026/reading/a69/)

ACL 2026 · 直接工具使用 · 正文笔记

ToolOmni 将 open-world tool retrieval 与执行放入同一个 agent 的 reasoning loop，先主动多次搜索并筛选工具，再依据检索到的 documentation 执行；训练时用 decoupled multi-objective GRPO 分别学习两种行为。

#### [What Makes AI Research Replicable? Executable Knowledge Graphs as Scientific Knowledge Representations](/papers/agent-tool-use-2026/reading/d228/)

ACL 2026 · 直接工具使用 · 正文笔记

xKG 将论文中的技术概念、层级依赖与可执行代码模块连接为 Executable Knowledge Graph，作为可插拔知识库支持 AI research replication。

#### [A Survey of Large Language Model-Based Search Agents](/papers/agent-tool-use-2026/reading/e35/)

ACL 2026 · 扩展相关 · 正文笔记

这篇 survey 用 How to Search、How to Optimize、How to Apply、How to Evaluate 四个问题整理 LLM-based Search Agents，将检索组织方式、训练方法、应用环境与评测口径放进统一 taxonomy。

#### [AMATA: Adaptive Multi-Agent Trajectory Alignment for Knowledge-Intensive Question Answering](/papers/agent-tool-use-2026/reading/e33/)

ACL 2026 · 扩展相关 · 正文笔记

AMATA 将 knowledge-intensive QA 中的 Reconstructor、Retriever、Filter、Locator、Generator、Verifier 六种功能编码为可协调的 trajectory roles，并通过 adaptive preference prefixes 与 dependency-aware DPO 学习哪些角色更重要、哪些工具链应联合使用。

#### [BrowseComp-Plus: A Fair and Disentangled Evaluation Benchmark for Deep Search Agents](/papers/agent-tool-use-2026/reading/e120/)

ACL 2026 · 扩展相关 · 正文笔记

BrowseComp-Plus 将 BrowseComp 的开放网页搜索改为固定、human-verified document corpus，使研究者可以独立替换 agent 和 retriever，分别观察 retrieval effectiveness 与端到端 answer quality。

#### [Can Compact Language Models Search Like Agents? Distillation-Guided Policy Optimization for Preserving Agentic RAG Capabilities](/papers/agent-tool-use-2026/reading/e207/)

ACL 2026 · 扩展相关 · 正文笔记

DGPO 先用 teacher-generated agentic search trajectories 为 compact model 做 Knowledge Distillation，再在 PPO 中仅对答错的 student rollouts 加 teacher KL guidance。

#### [Chaining the Evidence: Robust Reinforcement Learning for Deep Search Agents with Citation-Aware Rubric Rewards](/papers/agent-tool-use-2026/reading/e112/)

ACL 2026 · 扩展相关 · 正文笔记

CaRR 将 deep-search question 拆为涉及 hidden entities 的 atomic rubrics，要求最终解释明确识别实体、有已访问网页 citation 支持，并组成连接到 answer 的 evidence chain。

#### [Cognitive Scaffold: From Fluid Context to Crystallized Memory for Long-Horizon DeepResearch Agents](/papers/agent-tool-use-2026/reading/e140/)

ACL 2026 · 扩展相关 · 正文笔记

Cognitive Scaffold 将 long-horizon DeepResearch 的状态分为 Fluid Working Context 与 persistent Knowledge Graph：context 接近阈值时压缩成 Event Snapshot，保留轻量 Memory Note 继续推理，需要旧证据时再通过 thought-driven retrieval 回读。

#### [D2Plan: Dual-Agent Dynamic Global Planning for Complex Retrieval-Augmented Reasoning](/papers/agent-tool-use-2026/reading/e20/)

ACL 2026 · 扩展相关 · 正文笔记

D2Plan 用 Reasoner 维护 explicit global plan，用 Purifier 判断 retrieval relevance 并提取信息；每解决一项依赖就细化后续 sub-question，连续检索失败则重写剩余计划。

#### [DeepFact: Co-Evolving Benchmarks and Agents for Deep Research Factuality](/papers/agent-tool-use-2026/reading/e194/)

ACL 2026 · 扩展相关 · 正文笔记

DeepFact 把 Deep Research report 的 claim factuality verification 与 benchmark label auditing 一起设计：DeepFact-Eval 搜索、阅读并核查 claim，Audit-then-Score 允许 challenger 提交有证据的 label revision，由 auditor 接受后更新 benchmark，再计算成绩。

#### [DR-Arena: an Automated Evaluation Framework for Deep Research Agents](/papers/agent-tool-use-2026/reading/e148/)

ACL 2026 · 扩展相关 · 正文笔记

DR-Arena 让 Examiner 从新网页构建 Information Tree，并同时生成 deep reasoning 与 wide coverage 要求，再根据两个 Deep Research agents 的实际回答调整下一轮任务难度。

#### [End-to-End Optimization of LLM-Driven Multi-Agent Search Systems via Heterogeneous-Group-Based Reinforcement Learning](/papers/agent-tool-use-2026/reading/e170/)

ACL 2026 · 扩展相关 · 正文笔记

MHGPO 用 heterogeneous rollout groups 对 Multi-Agent Search System 做 end-to-end RL：把最终回答 reward 沿依赖路径向上游传播，再跨不同中间输入比较相对回报，共同更新各角色共享的 LLM backbone。

#### [Enhancing LLM-based Search Agents via Contribution Weighted Group Relative Policy Optimization](/papers/agent-tool-use-2026/reading/e179/)

ACL 2026 · 扩展相关 · 正文笔记

CW-GRPO 保留 final-answer outcome advantage，用 LLM judge 对每轮 retrieval utility 与 reasoning correctness 的判断重新分配成功轨迹中的学习权重。

#### [FS-Researcher: Test-Time Scaling for Long-Horizon Research Tasks with File-System-Based Agents](/papers/agent-tool-use-2026/reading/e25/)

ACL 2026 · 扩展相关 · 正文笔记

FS-Researcher 通过 persistent file-system workspace 协调 Context Builder 与 Report Writer：前者搜集网页、归档 sources 并建设结构化知识库，后者只基于知识库逐节写作。

#### [KARL: Reinforcement Learning for LLM Agents on Multi-Turn Knowledge-Intensive Agentic Tasks](/papers/agent-tool-use-2026/reading/a83/)

ACL 2026 · 扩展相关 · 正文笔记

KARL 将 structured knowledge acquisition 与 multi-turn tool-use RL 联合设计：agent 在完成 KG 或 Database task 时自主决定何时获取 entity descriptions、schema 与 API knowledge，并通过 task progress、format validity 和 exploration shaping 学习利用这些信息。

#### [Mitigating Context Interference for Reliable and Efficient Search Agents](/papers/agent-tool-use-2026/reading/e16/)

ACL 2026 · 扩展相关 · 正文笔记

论文先通过 context ablations 定位 search agent 的干扰来源，再训练一个 query-conditioned Context Refiner，从每轮最新检索文档中提取相关信息。

#### [OCR-Memory: Optical Context Retrieval for Long-Horizon Agent Memory](/papers/agent-tool-use-2026/reading/e51/)

ACL 2026 · 扩展相关 · 正文笔记

OCR-Memory 将历史 trajectories 渲染为带 Set-of-Mark identifiers 的图片，使用专门的 optical retrieval model 选择相关 segments，再按 identifiers 从保存的原始日志中取回准确文本。

#### [PolitNuggets: Benchmarking Agentic Discovery of Long-Tail Political Facts](/papers/agent-tool-use-2026/reading/a80/)

ACL 2026 · 扩展相关 · 正文笔记

PolitNuggets 让 agent 从开放 web 重建政治人物的履历与 long-tail facts，并用 FactNet 区分 event discovery、细粒度 attribute accuracy 和搜索效率。

#### [Reinforcing Agentic Search Via Reward Density Optimization](/papers/agent-tool-use-2026/reading/e48/)

ACL 2026 · 扩展相关 · 正文笔记

InfoFlow 将 Agentic Search 的训练效率归结为 Reward Density：每单位 exploration cost 能产生多少有效 reward。

#### [Rethinking Reasoning-Intensive Retrieval: Evaluating and Advancing Retrievers in Agentic Search Systems](/papers/agent-tool-use-2026/reading/e201/)

ACL 2026 · 扩展相关 · 正文笔记

论文同时改造 reasoning-intensive retrieval 的 benchmark 与 training data：BRIGHT-PRO 为 query 标注带权 reasoning aspects 和互补证据，并把 retriever 放进相同 agentic search loop 评估；RTriever-Synth 则按 answer aspects 合成多个 positives 与匹配的 hard negatives，用于训练 RTriever-4B。

#### [SearchGym: Bootstrapping Real-World Search Agents via Cost-Effective and High-Fidelity Environment Simulation](/papers/agent-tool-use-2026/reading/e106/)

ACL 2026 · 扩展相关 · 正文笔记

SearchGym 生成相互一致的 fictional knowledge graph、documents 和多跳 questions，构建低成本 search simulation environment。

#### [Trust Within? Seek Beyond? Knowledge Boundary Aware Policy Optimization for Agentic Search](/papers/agent-tool-use-2026/reading/e153/)

ACL 2026 · 扩展相关 · 正文笔记

KbPO 用 parametric knowledge 与 retrieval quality 的组合决定 Agentic Search 应如何行动：两者可靠时整合，只有检索可靠时依赖 external evidence，只有内部知识可靠时使用 memory，两者都不足时 refusal。

#### [WebAggregator: Enhancing Compositional Reasoning Capabilities of Deep Research Agent Foundation Models](/papers/agent-tool-use-2026/reading/e132/)

ACL 2026 · 扩展相关 · 正文笔记

WebAggregator 通过真实 web exploration 收集分散信息，再按 compositional reasoning guidelines 将它们组合成需要过滤、计算、集合操作或时间分析的 QA。

## 06 · 规划 / 记忆 / 工作流

33 篇 · CVPR 0 · ACL 33

#### [ACE-Router: Generalizing History-Aware Routing from MCP Tools to the Agent Web](/papers/agent-tool-use-2026/reading/a10/)

ACL 2026 · 直接工具使用 · 正文笔记

ACE-Router 训练能够读取当前 observation 与完整交互历史的候选选择器，以独立 routing/execution 接口接入 MCP agents。

#### [Agentic Memory: Learning Unified Long-Term and Short-Term Memory Management for Large Language Model Agents](/papers/agent-tool-use-2026/reading/e116/)

ACL 2026 · 直接工具使用 · 正文笔记

AgeMem把长期记忆LTM与短期上下文STM的管理统一为agent policy可选择的tool actions，让模型在完成任务时同时学习何时保存、检索、更新、压缩与删除信息。

#### [Beyond the Context Window: Scaling Agentic RL via End-to-end Optimized Context Compression](/papers/agent-tool-use-2026/reading/a44/)

ACL 2026 · 直接工具使用 · 正文笔记

SUPO 把 context summarization 纳入代理自身的决策与 RL 优化，使同一模型同时学习工具行为和保留任务信息的压缩策略。

#### [Branch-and-Browse: Efficient and Controllable Web Exploration with Tree-Structured Reasoning and Action Memory](/papers/agent-tool-use-2026/reading/e104/)

ACL 2026 · 直接工具使用 · 正文笔记

Branch-and-Browse 将网页操作组织为带动态 subtasks 的 tree search，并结合 nearest-URL replay、background reasoning 与 page action memory。

#### [CostBench: Evaluating Multi-Turn Cost-Optimal Planning and Adaptation in Dynamic Environments for LLM Tool-Use Agents](/papers/agent-tool-use-2026/reading/a32/)

ACL 2026 · 直接工具使用 · 正文笔记

CostBench把tool-use评测的目标从完成任务扩展为在可变成本及运行中扰动下寻找低成本执行路径。

#### [EVOTOOL: Self-Evolving Tool-Use Policy Optimization in LLM Agents via Blame-Aware Mutation and Diversity-Aware Selection](/papers/agent-tool-use-2026/reading/a75/)

ACL 2026 · 直接工具使用 · 正文笔记

EvoTool 在冻结 LLM 权重的条件下演化模块化 tool-use policy：用轨迹诊断确定 Planner、Selector、Caller 或 Synthesizer 中最需要修改的模块，再仅改动该模块规范，并保留在不同任务上有互补优势的候选。

#### [GATE: Graph-based Adaptive Tool Evolution Across Diverse Tasks](/papers/agent-tool-use-2026/reading/a1/)

ACL 2026 · 直接工具使用 · 正文笔记

GATE 将可复用程序工具组织为分层 Tool Graph，用 GraphRank 同时考虑 docstring 语义和调用结构来检索。

#### [Mem2ActBench: A Benchmark for Evaluating Long-Term Memory Utilization in Task-Oriented Autonomous Agents](/papers/agent-tool-use-2026/reading/a16/)

ACL 2026 · 直接工具使用 · 正文笔记

Mem2ActBench将长期记忆评测从回答过去发生了什么，转向把未重述的历史偏好落实为正确tool调用及参数。

#### [Mem2Evolve: Towards Self-Evolving Agents via Co-Evolutionary Capability Expansion and Experience Distillation](/papers/agent-tool-use-2026/reading/e113/)

ACL 2026 · 直接工具使用 · 正文笔记

Mem²Evolve 联合演化 Asset Memory 与 Experience Memory：前者存工具和专家代理，后者存成功策略、失败教训与实现经验。

#### [Memory-Augmented LLM-based Multi-Agent System for Automated Feature Generation on Tabular Data](/papers/agent-tool-use-2026/reading/e52/)

ACL 2026 · 直接工具使用 · 正文笔记

MALMAS 将 tabular feature generation 分成多种专门策略，并由 Router 每轮选择适用 agents；各 agent 保存尝试、下游模型反馈和抽象经验，再汇总为共享 memory，持续引导下一轮特征探索。

#### [SEARL: Joint Optimization of Policy and Tool Graph Memory for Self-Evolving Agents](/papers/agent-tool-use-2026/reading/a49/)

ACL 2026 · 直接工具使用 · 正文笔记

SEARL联合学习agent policy与Tool Graph memory：将任务拆成可复用的MCP小工具，以图的节点记录工具、边记录执行依赖，并用共享工具作为跨轨迹的step分组锚点。

#### [ToolScope: Enhancing LLM Agent Tool Use through Tool Merging and Context-Aware Filtering](/papers/agent-tool-use-2026/reading/a62/)

ACL 2026 · 直接工具使用 · 正文笔记

ToolScope 联合处理大工具库中的语义冗余和上下文容量：先通过 ToolScopeMerger 把等价工具聚类、审核并规范化，再用 ToolScopeRetriever 按查询分解和重排序只提供有限相关候选。

#### [TPS-Bench: Evaluating AI Agents’ Tool Planning & Scheduling Abilities in Compounding Tasks](/papers/agent-tool-use-2026/reading/a65/)

ACL 2026 · 直接工具使用 · 正文笔记

TPS-Bench 以复合任务测量 agent 是否既能挑对工具，又能按依赖正确安排串行/并行执行。

#### [A Goal Without a Plan Is Just a Wish: Efficient and Effective Global Planner Training for Long-Horizon Agent Tasks](/papers/agent-tool-use-2026/reading/e64/)

ACL 2026 · 扩展相关 · 正文笔记

EAGLET 训练一个独立 global planner，为冻结的 executor 提供高层计划。

#### [AgencyBench: Benchmarking the Frontiers of Autonomous Agents in 1M-Token Real-World Contexts](/papers/agent-tool-use-2026/reading/a14/)

ACL 2026 · 扩展相关 · 正文笔记

AgencyBench 将 Agent evaluation 组织为真实项目中的连续任务：agent 在同一 scenario 中逐步实现功能，交付文件或环境状态，并根据 user simulation agent 的 rubric feedback 修正结果。

#### [Agentic Rubrics as Contextual Verifiers for SWE Agents](/papers/agent-tool-use-2026/reading/e83/)

ACL 2026 · 扩展相关 · 正文笔记

Agentic Rubrics 先让 expert agent 阅读 repository 和 issue，生成针对当前代码库的 weighted checklist，再由 LLM judge 按每项 criterion 为候选 patches 评分。

#### [Aligning Agents via Planning: A Benchmark for Trajectory-Level Reward Modeling](/papers/agent-tool-use-2026/reading/a48/)

ACL 2026 · 扩展相关 · 正文笔记

Plan-RewardBench 将 reward-model evaluation 从单条回答或单次 function call 扩展到完整 tool-using trajectory 的 preference comparison。

#### [CoEvolve: Training LLM Agents via Agent-Data Mutual Evolution](/papers/agent-tool-use-2026/reading/e123/)

ACL 2026 · 扩展相关 · 正文笔记

CoEvolve 把 agent RL 与 training-task generation 接成闭环：从当前 policy 的 rollouts 中识别 forgetting、boundary 和 rare interaction signals，用这些信号引导 LLM 重新探索环境，再把探索结果抽象为可执行任务，验证后加入训练集。

#### [COMPASS: Enhancing Agent Long-Horizon Reasoning with Evolving Context](/papers/agent-tool-use-2026/reading/a2/)

ACL 2026 · 扩展相关 · 正文笔记

COMPASS 将 long-horizon agent 的执行、战略判断和 context 整理交给 Main Agent、Meta-Thinker 与 Context Manager。

#### [DeepPlanning: Benchmarking Long-Horizon Agentic Planning with Verifiable Constraints](/papers/agent-tool-use-2026/reading/a13/)

ACL 2026 · 扩展相关 · 正文笔记

DeepPlanning 构建 Travel Planning 与 Shopping Planning 两类可验证任务，要求 agent 主动调用 APIs 获取信息、满足单个选择的 local constraints，并同时满足全局时间、空间和预算约束。

#### [Evolving Agents](/papers/agent-tool-use-2026/reading/e94/)

ACL 2026 · 扩展相关 · 正文笔记

EVA 用 quasi-symbolic abstractions 统一 reasoning、memory 与 meta-control：把经验表示为 variables、transitions、constraints 和 outcome signals，由 Perceptor 构建、Actor 据此行动、Controller 决定继续、重新抽象、检索或 rollback。

#### [EvoRoute: Experience-Driven Self-Routing LLM Agent Systems](/papers/agent-tool-use-2026/reading/e211/)

ACL 2026 · 扩展相关 · 正文笔记

EvoRoute 在 agent workflow 的每个 subtask 上动态选择 LLM backbone，用历史执行经验共同估计 performance、monetary cost 与 latency。

#### [How Memory Management Impacts LLM Agents: An Empirical Study of Experience-Following Behavior](/papers/agent-tool-use-2026/reading/e5/)

ACL 2026 · 扩展相关 · 正文笔记

论文通过受控实验研究 episodic memory 的 addition 与 deletion 如何改变 agent 的长期行为，提出 experience-following：检索记录的 query 越像当前 query，agent 的输出也越容易模仿该记录。

#### [LLM-as-Scheduler: Agentic Workflow Dynamic Scheduling](/papers/agent-tool-use-2026/reading/e60/)

ACL 2026 · 扩展相关 · 正文笔记

LLM-as-Scheduler（LAS）在现有 multi-agent workflow 上加入两级 cascade：廉价 gate 先判断中间 artifact 是否值得进一步调度，随后 LLM scheduler 决定继续 verification、test、refinement，或 early exit。

#### [No More Stale Feedback: Co-Evolving Critics for Open-World Agent Learning](/papers/agent-tool-use-2026/reading/e59/)

ACL 2026 · 扩展相关 · 正文笔记

ECHO 让 policy 与生成自然语言反馈的 critic 在同一批 on-policy trajectories 上同步学习。

#### [PACE: Predictive Adaptive Context Extraction for Long-Horizon LLM Agents](/papers/agent-tool-use-2026/reading/e149/)

ACL 2026 · 扩展相关 · 正文笔记

PACE 将完整 interaction history 保存在 external memory 中，每一步根据当前 query 与最近交互估计旧 chunks 的相关性，再为每个 chunk 选择 full text、detailed summary、brief summary 或 placeholder。

#### [Powering Verifiable Learning via Automated Evolutionary Data Synthesis](/papers/agent-tool-use-2026/reading/d106/)

ACL 2026 · 扩展相关 · 正文笔记

EvoSyn 不仅合成 problem 和 solution，还生成多个 executable testing artifacts，并用演化得到的 ranking program 选择更有区分力的 tests。

#### [PRInTS: Reward Modeling for Long-Horizon Information Seeking](/papers/agent-tool-use-2026/reading/a63/)

ACL 2026 · 扩展相关 · 正文笔记

PRInTS 将 generative Process Reward Model 同时训练为 scorer 和 trajectory summarizer：前者评估候选 reasoning + tool call 对任务成功的潜在贡献，后者递归保留历史中的关键发现和计划。

#### [ProActor: Timing-Aware Reinforcement Learning for Proactive Task Scheduling Agents](/papers/agent-tool-use-2026/reading/e102/)

ACL 2026 · 扩展相关 · 正文笔记

ProActor 把 proactive task scheduling 建模为每个 dialogue turn 上选择 action、参数和 readiness status 的决策，使用可接受的 opportunity windows 而非单一触发时刻作为参考。

#### [RSMeM: Knowledge-Enhanced Memory Evolution for Remote Sensing Agents with Systematic Evaluation](/papers/agent-tool-use-2026/reading/a61/)

ACL 2026 · 扩展相关 · 正文笔记

RSMeM 为 remote-sensing agent 同时提供 task-level domain guidance 与 instance-level corrective experience。

#### [SPARK: Strategic Policy-Aware Exploration via Dynamic Branching for Long-Horizon Agentic Learning](/papers/agent-tool-use-2026/reading/e128/)

ACL 2026 · 扩展相关 · 正文笔记

SPARK 把 long-horizon agent RL 的 rollout 从互不共享的完整 chains 改为在关键状态分叉的 trajectory forest。

#### [SPIO: Ensemble and Selective Strategies via LLM-Based Multi-Agent Planning in Automated Data Science](/papers/agent-tool-use-2026/reading/e122/)

ACL 2026 · 扩展相关 · 正文笔记

SPIO 在 automated data science 的 preprocessing、feature engineering、model selection 和 hyperparameter tuning 四个阶段提出多个候选 plans，再由 optimization agent 组合选择。

#### [The Bitter Lesson of Diffusion Language Models for Agentic Workflows: A Comprehensive Reality Check](/papers/agent-tool-use-2026/reading/a76/)

ACL 2026 · 扩展相关 · 正文笔记

论文系统检验 diffusion LLMs 在 embodied interaction 与 tool calling 中的能力，并用 DiffuAgent 将它们分别替换进 memory、early-exit verification、tool selection 和 format editing 模块。

## 07 · 具身 / 导航 / 游戏

31 篇 · CVPR 17 · ACL 14

#### [SAGE: Scalable Agentic 3D Scene Generation for Embodied AI](/papers/agent-tool-use-2026/reading/c108/)

CVPR 2026 · 直接工具使用 · 正文笔记

SAGE 根据 embodied task 自动生成 simulation-ready 3D scenes。

#### [AwareVLN: Reasoning with Self-awareness for Vision-Language Navigation](/papers/agent-tool-use-2026/reading/c15/)

CVPR 2026 · 扩展相关 · 正文笔记

AwareVLN 用同一 VLM 生成导航动作和结构化 self-aware reasoning，在 subtask completion、path deviation 与 stopping error 等关键时刻解释所处场景、完成进度和下一步意图。

#### [BridgeEQA: Virtual Embodied Agents for Real Bridge Inspections](/papers/agent-tool-use-2026/reading/c19/)

CVPR 2026 · 扩展相关 · 正文笔记

BridgeEQA 用真实桥梁巡检报告构造需综合多视角证据的 embodied question answering，并要求答案给出 condition ratings 与 image citations。

#### [Context-Nav: Context-Driven Exploration and Viewpoint-Aware 3D Spatial Reasoning for Instance Navigation](/papers/agent-tool-use-2026/reading/c23/)

CVPR 2026 · 扩展相关 · 正文笔记

Context-Nav 用完整自然语言描述同时引导全局探索与候选实例验证。

#### [Counterfactual VLA: Self-Reflective Vision-Language-Action Model with Adaptive Reasoning](/papers/agent-tool-use-2026/reading/c24/)

CVPR 2026 · 扩展相关 · 正文笔记

CF-VLA 在 autonomous driving VLA 内部加入 meta-actions → counterfactual reasoning → corrected meta-actions → trajectory 的自我修正流程。

#### [DecoVLN: Decoupling Observation, Reasoning, and Correction for Vision-and-Language Navigation](/papers/agent-tool-use-2026/reading/c28/)

CVPR 2026 · 扩展相关 · 正文笔记

DecoVLN 解耦持续 observation、动作 reasoning 和 corrective fine-tuning，以紧凑历史记忆支持长程 vision-and-language navigation。

#### [Experience Transfer for Multimodal LLM Agents in Minecraft Game](/papers/agent-tool-use-2026/reading/c41/)

CVPR 2026 · 扩展相关 · 正文笔记

Echo 将 Minecraft agent 的记忆从被动存放旧轨迹，改成主动寻找可迁移规律的 Contextual State Descriptor（CSD）库。

#### [FantasyVLN: Unified Multimodal Chain-of-Thought Reasoning for Vision-and-Language Navigation](/papers/agent-tool-use-2026/reading/c42/)

CVPR 2026 · 扩展相关 · 正文笔记

FantasyVLN 将 textual、compact visual、multimodal 与 non-CoT 四种导航模式放入同一模型联合训练，并通过 cross-mode alignment 统一动作决策。

#### [History to Future: Evolving Agent with Experience and Thought for Zero-shot Vision-and-Language Navigation](/papers/agent-tool-use-2026/reading/c58/)

CVPR 2026 · 扩展相关 · 正文笔记

EvoNav 为 zero-shot VLN-CE 联合使用 Future Chain-of-Thought（F-CoT）与 History Chain-of-Experience（H-CoE）。

#### [MindPower: Enabling Theory-of-Mind Reasoning in VLM-based Embodied Agents](/papers/agent-tool-use-2026/reading/c78/)

CVPR 2026 · 扩展相关 · 正文笔记

MindPower 把 Theory of Mind 从判断故事人物信念的 QA，扩展为 robot-centric 的 perception→belief→desire→intention→decision→action 链。

#### [NitroGen: An Open Foundation Model for Generalist Gaming Agents](/papers/agent-tool-use-2026/reading/c84/)

CVPR 2026 · 扩展相关 · 正文笔记

NitroGen 从公开 gameplay video 中的 controller overlays 自动恢复玩家 actions，构建跨千种游戏的视频动作数据，再训练统一 vision-action policy。

#### [ProFocus: Proactive Perception and Focused Reasoning in Vision-and-Language Navigation](/papers/agent-tool-use-2026/reading/c89/)

CVPR 2026 · 扩展相关 · 正文笔记

ProFocus 在 training-free VLN 中把主动视觉取证和历史候选筛选联动起来。

#### [Progress-Think: Semantic Progress Reasoning for Vision-Language Navigation](/papers/agent-tool-use-2026/reading/c92/)

CVPR 2026 · 扩展相关 · 正文笔记

Progress-Think 为 VLN 显式预测“已经完成的指令语义”，再以该进度文本条件化导航 policy。

#### [Recurrent Reasoning with Vision-Language Models for Estimating Long-Horizon Embodied Task Progress](/papers/agent-tool-use-2026/reading/c101/)

CVPR 2026 · 扩展相关 · 正文笔记

R2VLM 以 recurrent reasoning 估计长程具身任务进度，每次只读取新的短 video snippet 与上一轮 CoT，更新任务分解、已完成和待完成步骤，再输出 progress percentage。

#### [RoboAgent: Chaining Basic Capabilities for Embodied Task Planning](/papers/agent-tool-use-2026/reading/c107/)

CVPR 2026 · 扩展相关 · 正文笔记

RoboAgent 将 embodied task planning 分解为 scheduler 调用五种基础 vision-language capabilities 的过程，所有角色由同一个 VLM 实现，但各自保持独立上下文。

#### [Thinking in 360deg: Humanoid Visual Search in the Wild](/papers/agent-tool-use-2026/reading/c135/)

CVPR 2026 · 扩展相关 · 正文笔记

Humanoid Visual Search 把单张 360° panorama 变成可交互观察环境，让 MLLM 通过头部 yaw / pitch rotation 寻找目标物体或通向目标的路径方向。

#### [Towards Open Environments and Instructions: General Vision-Language Navigation via Fast-Slow Interactive Reasoning](/papers/agent-tool-use-2026/reading/c139/)

CVPR 2026 · 扩展相关 · 正文笔记

slow4fast-VLN 将快速 DUET navigation policy 与 LLM 慢反思连接起来。

#### [ALDEN: Reinforcement Learning for Active Navigation and Evidence Gathering in Long Documents](/papers/agent-tool-use-2026/reading/d62/)

ACL 2026 · 直接工具使用 · 正文笔记

ALDEN 将长视觉文档问答改成可训练的多轮导航：VLM 在 semantic search、按页 fetch 和 answer 之间选择，并利用跨层级奖励学习有效取证。

#### [E-ViC: Reasoning Beyond Text via Embodied Visual Chain for Spatial Intelligence](/papers/agent-tool-use-2026/reading/e219/)

ACL 2026 · 直接工具使用 · 正文笔记

E-ViC 将 spatial reasoning 从纯文本 CoT 扩展为可执行的视觉操作链：模型在推理中主动 zoom、标点并观察反馈，然后输出坐标、bounding box 或选项。

#### [Breaking Down and Building Up: Mixture of Skill-Based Vision-and-Language Navigation Agents](/papers/agent-tool-use-2026/reading/e63/)

ACL 2026 · 扩展相关 · 正文笔记

SkillNav 将 VLN 政策拆成五个 skill-specific DUET 专家，并用无需训练的 VLM router 在每个时间步选择一个专家。

#### [Communication-Efficient Desire Alignment for Proactive Embodied Human–Agent Interaction](/papers/agent-tool-use-2026/reading/e71/)

ACL 2026 · 扩展相关 · 正文笔记

FAMER面向重复的家庭协助交互，通过跨episode的goal-relevant memory、desire-centered reasoning和选择性交流，逐渐学会用户偏好而减少重复询问。

#### [Conflict-Aware Memory for Embodied Agents: Enhancing Vector Data Quality via Detection Rules](/papers/agent-tool-use-2026/reading/e159/)

ACL 2026 · 扩展相关 · 正文笔记

论文通过 Conflict Detection Rules（CDRs）清理 embodied-agent 的 vector memory：显式比较命令中的对象和操作，识别 embedding 相近但行动语义不同的记录，并据此筛选 retrieval context、修剪 HNSW 图连接。

#### [DEFT: Demystifying VLN Failures via a Unified Dual-View Explainability Framework for LLM-based Agents](/papers/agent-tool-use-2026/reading/e167/)

ACL 2026 · 扩展相关 · 正文笔记

DEFT 用共享 VLN backbone 的双 head 联合解释黑盒导航 Agent：Mask Head 分析哪些时间步影响整条导航结果，Action Head 用可微 surrogate ensemble 提取这些决策相关的视觉证据，连接“何时关键”与“看到了什么”。

#### [Embodied-Reasoner: Synergizing Visual Search, Reasoning, and Action for Embodied Interactive Tasks](/papers/agent-tool-use-2026/reading/e223/)

ACL 2026 · 扩展相关 · 正文笔记

Embodied-Reasoner通过观察—思考—动作交替的训练语料，把视觉搜索、任务推理与失败反思结合到具身高层agent。

#### [Mango: Multi-Agent Web Navigation via Global-View Optimization](/papers/agent-tool-use-2026/reading/e73/)

ACL 2026 · 扩展相关 · 正文笔记

Mango 在实际导航前构建网站的有限全局视图，主动选择更合适的入口 URL，并把这些入口作为 multi-armed bandit 的 arms 分配后续导航预算。

#### [MARS-RA: Rank Aggregation for Credit Assignment via Multimodal Comparisons in Embodied Multi-Agent Cooperation](/papers/agent-tool-use-2026/reading/e165/)

ACL 2026 · 扩展相关 · 正文笔记

MARS-RA 将多 Agent credit assignment 转为相对比较和 rank aggregation：LMM 看活跃 Agent 的第一视角图像，判断谁贡献更大；Bradley–Terry 将比较汇总成连续分数，再以 potential-based reward shaping 注入合作 RL。

#### [Model-Based Imaginative Planning for Embodied Agents](/papers/agent-tool-use-2026/reading/e101/)

ACL 2026 · 扩展相关 · 正文笔记

IMPLEMENT用可学习的symbolic world model支撑冻结LLM planner在测试时进行imagine–evaluate–refine。

#### [On-policy Reinforcement Fine-tuning with Offline reward for Multi-step Embodied Planning](/papers/agent-tool-use-2026/reading/e216/)

ACL 2026 · 扩展相关 · 正文笔记

ORBIT 用 offline expert trajectories 提供奖励，却由当前 policy 采样候选进行 GRPO：输入某一步专家观察和历史，预测剩余动作序列，再按与专家的正确前缀长度评分。

#### [On-the-Fly VLA Adaptation via Test-Time Reinforcement Learning](/papers/agent-tool-use-2026/reading/d188/)

ACL 2026 · 扩展相关 · 正文笔记

TT-VLA 在一个部署 episode 内持续更新 VLA：用预训练 progress estimator 比较动作前后任务进度，直接以进度增量驱动 value-free PPO，并用 LoRA 快速适应当前环境，作为既有 SFT/RL policy 的附加适应阶段。

#### [PEAP: Proactive Embodied Action Sequence Planning with Joint Understanding of Vision and Audio Perception](/papers/agent-tool-use-2026/reading/e125/)

ACL 2026 · 扩展相关 · 正文笔记

PEAP构建同时需要视觉、背景声音和文本任务描述的主动具身行动规划评测，要求模型从场景与声音的联系推断是否需要帮助及合理行动方向。

#### [VLN-MME: Diagnosing MLLMs as Language-guided Visual Navigation Agents](/papers/agent-tool-use-2026/reading/e158/)

ACL 2026 · 扩展相关 · 正文笔记

VLN-MME 用可互换的 Model、Agent、Task 模块和预渲染导航资产，降低比较 MLLM navigation agents 的成本，并把 memory、CoT 与 self-reflection 的影响分开诊断。

## 08 · 安全与可靠性

21 篇 · CVPR 3 · ACL 18

#### [AdapAction: Adaptive Target Action Backdoor Attack against GUI Agents](/papers/agent-tool-use-2026/reading/c7/)

CVPR 2026 · 扩展相关 · 正文笔记

AdapAction 研究 GUI agents 的 training-data backdoor 风险，将攻击目标从固定 trigger-action mapping 转为根据 instruction 和当前 GUI state 选择的 adaptive malicious policy。

#### [AGENTSAFE: Benchmarking the Safety of Embodied Agents on Hazardous Instructions](/papers/agent-tool-use-2026/reading/c3/)

CVPR 2026 · 扩展相关 · 正文笔记

AGENTSAFE 将 embodied agent 的危险指令测试分成可交互 SAFE-THOR sandbox、SAFE-VERSE 任务集合和 SAFE-DIAGNOSE 分阶段指标。

#### [LaSM: Layer-wise Scaling Mechanism for Defending Pop-up Attack on GUI Agents](/papers/agent-tool-use-2026/reading/c66/)

CVPR 2026 · 扩展相关 · 正文笔记

LaSM 通过对一段 Transformer layers 的 attention 与 MLP projection weights 施加统一 scaling factor，改善 GUI Agent 面对恶意 pop-up 时的动作选择。

#### [CodeHacker: Automated Test Case Generation for Detecting Vulnerabilities in Competitive Programming Solutions](/papers/agent-tool-use-2026/reading/d11/)

ACL 2026 · 直接工具使用 · 正文笔记

CodeHacker 面向具体竞赛程序生成合法反例，先校准输入 Validator 和输出 Checker，再依据代码分析与执行观察组合多种 test generation 策略。

#### [Evo-Attacker: Memory-Augmented Reinforcement Learning for Long-Horizon Tool Attacks on LLM-MAS](/papers/agent-tool-use-2026/reading/a11/)

ACL 2026 · 直接工具使用 · 正文笔记

Evo-Attacker 将针对 LLM multi-agent systems 的 tool-return 安全测试建模为带动态经验记忆的长期 RL 交互。

#### [RedCoder: Automated Multi-Turn Red Teaming for Code LLMs](/papers/agent-tool-use-2026/reading/d150/)

ACL 2026 · 直接工具使用 · 正文笔记

RedCoder 把 Code LLM 的安全评估从静态单轮提示扩展为可随回答变化的多轮对话测试。

#### [SafeAgent: Safeguarding LLM Agents via an Automated Risk Simulator](/papers/agent-tool-use-2026/reading/a60/)

ACL 2026 · 直接工具使用 · 正文笔记

SafeAgent 通过自动风险模拟生成安全对齐数据：先构造容易诱发危险行为的指令与历史，再在同一决策点用 trial-reflection 搜索安全动作，最后把该行为监督内化到模型。

#### [SafeMCP: Proactive Power Regulation for LLM Agent Defense via Environment-Grounded Look-Ahead Reasoning](/papers/agent-tool-use-2026/reading/a26/)

ACL 2026 · 直接工具使用 · 正文笔记

SafeMCP 将 agent 安全控制放到 MCP server 侧，在动作执行前预测环境后果，并据此过滤下一步可获得的工具；若当前调用本身预测会进入 unsafe state，则立即阻止。

#### [VIGIL: Defending LLM Agents Against Tool-Stream Injection via Verify-Before-Commit](/papers/agent-tool-use-2026/reading/a19/)

ACL 2026 · 直接工具使用 · 正文笔记

VIGIL 用 verify-before-commit 保护 tool-using agent：从可信用户请求建立 intent constraints，允许在不执行动作的假设空间中探索候选路径，再分别检查约束一致性和与用户目标的关系，只有通过验证的路径才能提交。

#### [AgentMark: Utility-Preserving Behavioral Watermarking for Agents](/papers/agent-tool-use-2026/reading/a31/)

ACL 2026 · 扩展相关 · 正文笔记

AgentMark在agent的planning behavior选择中编码provenance watermark，而不改写最终tool参数或输出措辞。

#### [Benchmarking Web Agent Safety under E-commerce Deceptive Interfaces](/papers/agent-tool-use-2026/reading/e117/)

ACL 2026 · 扩展相关 · 正文笔记

WebDecept 通过可配置、状态触发的 frontend intervention，把常见电商 deceptive interfaces 加入正常购物任务，研究 agent 在完成任务的同时是否受到误导。

#### [Conjunctive Prompt Attacks in Multi-Agent LLM Systems](/papers/agent-tool-use-2026/reading/e192/)

ACL 2026 · 扩展相关 · 正文笔记

本文研究多 Agent 流程中的 conjunctive prompt attack：用户输入中的 trigger 与某个受损远端 Agent 的模板分别单独不触发异常，但经过分段与路由后在同一远端汇合，才激活目标行为。

#### [JARVIS or Ultron? A Survey on the Safety and Security Threats of Computer-Using Agents](/papers/agent-tool-use-2026/reading/e241/)

ACL 2026 · 扩展相关 · 正文笔记

这篇survey以CUA的Perception、Brain和Action架构为共同坐标，把内部能力缺陷与外部攻击分开，再将防御机制、评测环境及指标映射到相应威胁。

#### [OS-Sentinel: Towards Safety-Enhanced Mobile GUI Agents via Hybrid Validation in Realistic Workflows](/papers/agent-tool-use-2026/reading/e42/)

ACL 2026 · 扩展相关 · 正文笔记

OS-Sentinel 将确定性 system-state checks 与 VLM contextual judgment 结合，用于检测 mobile GUI agent 在真实流程中的风险。

#### [RISK: A Framework for GUI Agents in E-commerce Risk Management](/papers/agent-tool-use-2026/reading/e204/)

ACL 2026 · 扩展相关 · 正文笔记

RISK 将电商风险信息检索的真实浏览流程组织为专用数据、benchmark 与 RFT 配方。

#### [SecureVibeBench: Benchmarking Secure Vibe Coding of AI Agents via Reconstructing Vulnerability-Introducing Scenarios](/papers/agent-tool-use-2026/reading/e131/)

ACL 2026 · 扩展相关 · 正文笔记

SecureVibeBench重建真实漏洞最初被引入时的开发场景，让coding agent从引入前repository状态和普通功能需求出发生成patch，再同时检查功能与安全。

#### [Stop Fixating on Prompts: Reasoning Hijacking and Constraint Tightening for Red-Teaming LLM Agents](/papers/agent-tool-use-2026/reading/e143/)

ACL 2026 · 扩展相关 · 正文笔记

JailAgent 研究保留原始用户 prompt、改动 agent memory/retrieval 与候选选择过程的 red-teaming。

#### [TAMAS: Benchmarking Adversarial Risks in Multi-Agent LLM Systems](/papers/agent-tool-use-2026/reading/a57/)

ACL 2026 · 扩展相关 · 正文笔记

TAMAS 为多 Agent 系统建立跨 prompt、environment 与 compromised-agent 三种攻击面的受控 benchmark，覆盖六类威胁、五个业务情景和 211 个合成工具，并同时观察攻击抵抗与正常任务能力。

#### [Visual Inception: Compromising Long-term Planning in Agentic Recommenders via Multimodal Memory Poisoning](/papers/agent-tool-use-2026/reading/e114/)

ACL 2026 · 扩展相关 · 正文笔记

Visual Inception 将多模态 agent 的攻击面从当前输入扩展到长期记忆：用户上传的图像可以被存储、在未来相关查询中检索，并持续影响推荐规划。

#### [When Efficiency Becomes a Vulnerability: Computational Cost Attacks on WebAgents](/papers/agent-tool-use-2026/reading/e212/)

ACL 2026 · 扩展相关 · 正文笔记

CostBomb 将 web-agent 安全评测扩展到 computational cost：目标不是让任务失败，而是通过网页中的不可信内容诱发冗长 reasoning，使成功任务也付出更多生成成本。

#### [XOXO: Stealthy Cross-Origin Context Poisoning Attacks against AI Coding Assistants](/papers/agent-tool-use-2026/reading/d53/)

ACL 2026 · 扩展相关 · 正文笔记

XOXO 研究 coding assistant 自动收集跨来源代码上下文时的推理期风险：攻击者只对共享代码作保持其功能的变换，也可能使后续生成的目标函数出现 bug 或 vulnerability。

## 09 · 领域应用 / 数据分析

18 篇 · CVPR 1 · ACL 17

#### [Simple Agents Outperform Experts in Biomedical Imaging Workflow Optimization](/papers/agent-tool-use-2026/reading/c125/)

CVPR 2026 · 直接工具使用 · 正文笔记

论文系统研究 coding agents 如何为固定 biomedical imaging tools 自动生成 preprocessing/postprocessing functions，用少量标注验证集优化已有生产流程。

#### [Beyond Itinerary Planning—A Real-World Benchmark for Multi-Turn and Tool-Using Travel Tasks](/papers/agent-tool-use-2026/reading/a56/)

ACL 2026 · 直接工具使用 · 正文笔记

TravelBench把旅行agent评测扩展到真实用户的地点发现、导航、方案比较等需求，并同时设置single-turn、需要主动澄清隐含偏好的multi-turn及unsolvable任务。

#### [BioProAgent: Neuro-Symbolic Grounding for Constrained Scientific Planning](/papers/agent-tool-use-2026/reading/e227/)

ACL 2026 · 直接工具使用 · 正文笔记

BioProAgent 把科学协议生成改为由 deterministic finite-state machine 约束的 neuro-symbolic planning：LLM 负责提出科学步骤和修订方案，显式状态、操作权限及物理规则决定何时可以推进。

#### [BioTool: A Comprehensive Tool-Calling Dataset for Enhancing Biomedical Capabilities of Large Language Models](/papers/agent-tool-use-2026/reading/a81/)

ACL 2026 · 直接工具使用 · 正文笔记

BioTool 为 biomedical tool calling 构建可微调数据，覆盖 NCBI、Ensembl、UniProt 的 34 类工具与 124 个 endpoints。

#### [FinSight: Towards Real-World Financial Deep Research](/papers/agent-tool-use-2026/reading/d29/)

ACL 2026 · 直接工具使用 · 正文笔记

FinSight用Code Agent with Variable Memory将财务数据、工具和其他agents共同放入可编程变量空间，让financial deep research通过实际数据操作与递归协作产出多模态报告。

#### [GCA Framework: A GCC Countries–Grounded Dataset and Agentic Pipeline for Climate Decision Support](/papers/agent-tool-use-2026/reading/a74/)

ACL 2026 · 直接工具使用 · 正文笔记

GCA 将 Gulf Cooperation Council 六国的气候知识、时序环境图和可调用工具组织为统一 dataset 与 agentic pipeline，让回答既能引用地区政策背景，也能查询空气质量、遥感或天气等具体信息。

#### [Interleaved Tool-Call Reasoning for Protein Function Understanding](/papers/agent-tool-use-2026/reading/a33/)

ACL 2026 · 直接工具使用 · 正文笔记

PFUA 将蛋白功能问答的推理与领域工具交错：LLM 分解问题、按需要获取 sequence statistics、homology、domain 和 membrane topology evidence，再修订功能假设并生成解释。

#### [MedMCP-Calc: Benchmarking LLMs for Realistic Medical Calculator Scenarios via MCP Integration](/papers/agent-tool-use-2026/reading/a5/)

ACL 2026 · 直接工具使用 · 正文笔记

MedMCP-Calc把medical calculator评测从给定病历和公式的计算题，扩展为agent主动查询EHR、识别含糊临床目标、选择计算器并执行多步计算的交互任务。

#### [MolMem: Memory-Augmented Agentic Reinforcement Learning for Sample-Efficient Molecular Optimization](/papers/agent-tool-use-2026/reading/e233/)

ACL 2026 · 直接工具使用 · 正文笔记

MolMem 在多轮 molecular optimization 中同时利用静态分子 exemplars 和训练过程积累的 editing skills，并让 retrieval 与 agentic reinforcement learning 共同工作。

#### [MTSQL-R1: Towards Long-Horizon Multi-Turn Text-to-SQL via Agentic Training](/papers/agent-tool-use-2026/reading/e191/)

ACL 2026 · 直接工具使用 · 正文笔记

MTSQL-R1 将 multi-turn Text-to-SQL 改写为在数据库与持久 dialogue memory 中运行的 Agent 训练问题。

#### [PExA: Parallel Exploration Agent for Complex Text-to-SQL](/papers/agent-tool-use-2026/reading/e254/)

ACL 2026 · 直接工具使用 · 正文笔记

PExA将复杂Text-to-SQL视为收集语义测试证据后再合成完整查询的问题。

#### [QBridge: Bridging Natural Language and SQL via Gold Query Rewriting with Agentic Refinement](/papers/agent-tool-use-2026/reading/e39/)

ACL 2026 · 直接工具使用 · 正文笔记

QBridge 在自然语言问题与 SQL 之间加入 Gold Query：按 SQL clause 顺序组织、仍以自然语言表达的 schema-aware 中间表示。

#### [ReCoQA: A Benchmark for Tool-Augmented and Multi-Step Reasoning in Real Estate Question and Answering](/papers/agent-tool-use-2026/reading/a53/)

ACL 2026 · 直接工具使用 · 正文笔记

ReCoQA 将房地产问答组织为跨结构化房产数据与地图工具的 benchmark，提供 29,270 条问题及 intent、slot、SQL、API 参数、中间结果与答案。

#### [ShopSimulator: Evaluating and Exploring RL-Driven LLM Agent for Shopping Assistants](/papers/agent-tool-use-2026/reading/e198/)

ACL 2026 · 直接工具使用 · 正文笔记

ShopSimulator在中文商品环境中同时引入多轮需求澄清、长期个性化profile和高度相似商品辨别，并提供可用于RL的reward。

#### [SQL-Trail: Multi-Turn Reinforcement Learning with Interleaved Feedback for Text-to-SQL](/papers/agent-tool-use-2026/reading/d168/)

ACL 2026 · 直接工具使用 · 正文笔记

SQL-Trail 把 Text-to-SQL 训练目标从一次输出查询转向 reason–execute–observe 多轮过程，使模型能主动查值、试探 schema 并根据真实 SQL engine 的报错修正。

#### [UniDataBench: Evaluating Data Analytics Agents Across Structured and Unstructured Data](/papers/agent-tool-use-2026/reading/e190/)

ACL 2026 · 直接工具使用 · 正文笔记

UniDataBench 评测从高层业务目标出发、联合 CSV、SQLite、NoSQL 与文本发现 insight 的数据分析 Agent；它以真实行业报告的结论为起点合成可分析数据，并提出 ReActInsight 先发现跨源连接、再规划和执行分析的系统。

#### [LLM-Based Multi-Agent Systems for Clinical Workflows: A Survey of AI Hospitals](/papers/agent-tool-use-2026/reading/e242/)

ACL 2026 · 扩展相关 · 正文笔记

这篇 Survey 用 workflow state transition 组织 AI hospitals 研究：agent 不仅回答医学问题，还需承担明确 role、传递 shared state、关联 evidence、使用 tools，并在 safety gates 下推进或 escalation。

#### [Ready Jurist One: Benchmarking Language Agents for Legal Intelligence in Dynamic Environments](/papers/agent-tool-use-2026/reading/e50/)

ACL 2026 · 扩展相关 · 正文笔记

J1-ENVS 将法律 agent 放入由多个角色互动的动态环境，覆盖 consultation、document drafting 和 judicial adjudication；J1-EVAL 同时评价最终输出与执行过程。
