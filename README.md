# Note / Blog / Paper / About

[网站](https://boran002.github.io/) · [Note](https://boran002.github.io/notes/) · [Blog](https://boran002.github.io/blog/) · [Paper](https://boran002.github.io/papers/) · [About](https://boran002.github.io/about/)

学习笔记、实践文章与论文阅读统一在本仓库维护。显示名称采用单数，已发布的 `/notes/`、`/papers/` 地址保持不变。

## 分类

| 栏目 | 内容 | 当前归类 |
| --- | --- | --- |
| Note | 持续维护的概念、主题与方法笔记，先解释 Basic，再提炼 Insight 与 Method | [Agent / Context Engineering](https://boran002.github.io/notes/agent-loop/) |
| Blog | 围绕具体问题展开的完整文章：项目复盘、实验记录、观点分析 | 暂无已发布文章 |
| Paper | 单篇论文阅读、文献专题与综述，保留原文及证据来源 | [Agent Tool Use 2026](https://boran002.github.io/papers/agent-tool-use-2026/)，含 359 篇阅读笔记与 [Explorer](https://boran002.github.io/papers/agent-tool-use-2026/explorer/) |
| About | 本站内容范围、阅读方式与反馈入口 | `content/about.md` |

一篇内容只维护一份正文。讨论可复用机制的文章放 Note，围绕一次实践得出结论的文章放 Blog，围绕原论文展开的阅读放 Paper；跨栏目关联使用链接。

## 更新流程

参考 [Self Research: How This Blog Is Maintained with AI](https://tingdeliu.github.io/en/building-blog-with-skills/)，将分类、写作与检查落实为仓库规则、模板和脚本。具体约定见 [AGENTS.md](AGENTS.md)。

1. **查重与归类**：先查已有主题和论文链接；已有 Note 优先原位更新。
2. **建立草稿**：使用对应模板；保留原始来源，关键术语使用英文。
3. **核读与整理**：解释机制、具体例子、Insight 和 Method；区分论文结论、自己的判断与实际验证。
4. **检查与发布**：本地检查后提交；GitHub Actions 从源码重新构建，检查全部通过后部署，失败时保留上一次成功发布的网站。

Node.js 22.13+：

```sh
npm ci
npm run new -- note memory "Memory"
npm run new -- blog agent-evaluation "Agent Evaluation 实践"
npm run new -- paper example-paper "论文标题"
npm run dev
```

每条 `new` 命令只创建对应草稿，不发布，也不会覆盖文件。模板在 `content/templates/note.md`、`blog.md`、`paper.md`；About 直接编辑 `content/about.md`。

完成正文后设置 `draft: false`。保留创建日期 `date`，实质更新时修改 `updated`；首页按 `updated` 排序。Note 默认 `showDate: false`，Agent 继续隐藏日期。正文从 `##` 开始，支持代码高亮、表格和数学公式。

```sh
npm run check
```

这个命令执行静态构建、TypeScript 检查和导出检查，涵盖四栏导航、内部链接、论文目录与下载一致性、旧路径跳转。修改 Markdown 后可单独运行 `npm run content`；新增路由后重启本地预览。

`.github/workflows/pages.yml` 在 PR 和 main 上运行检查，只有 main 的成功构建会部署。GitHub Pages 的发布来源使用 **GitHub Actions**。`docs/` 是本地导出快照，CI 会从源码重新构建，不要手动修改生成文件。

## 文献专题的数据来源

`content/data/agent-tool-use-2026.json` 是 Agent Tool Use 专题的唯一数据源。`method` 保存有顺序的方法步骤；`evidence` 保存官方 PDF、实际核读页码、章节与阅读范围。保留稳定 ID，增删论文时同步计数。不要将仅依据摘要的概括标为正文阅读，更不能将阅读写成实验复现。

`npm run content` 自动生成目录、359 篇独立阅读页、Explorer、[JSON 下载](https://boran002.github.io/data/agent-tool-use-2026.json) 和 [Markdown 下载](https://boran002.github.io/papers/agent-tool-use-2026/notes.md)。生成器为 `scripts/build-paper-catalog.mjs`，Explorer 模板为 `content/templates/paper-explorer.html`。

发布构建会阻止缺少 Method 或正文依据的条目。本地查看编辑中的版本可用 `PAPER_NOTES_PREVIEW=1 npm run build:pages`；预览模式不能用于发布。

主站保留 `/notes/agent-tool-use-2026/`、`/agent-tool-use-2026/` 与旧 JSON 路径的兼容，跳转保留 query 和 hash，不依赖旧仓库。
