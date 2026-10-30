# Notes, Blog & Papers

[打开网站](https://boran002.github.io/) · [Notes](https://boran002.github.io/notes/) · [Blog](https://boran002.github.io/blog/) · [Papers](https://boran002.github.io/papers/)

统一维护学习笔记、博客和论文阅读。Agent Tool Use 2026 的详细笔记、交互表和论文数据也在本仓库中。

## 阅读

- [Agent](https://boran002.github.io/notes/agent-loop/)
- [Agent Tool Use：CVPR 与 ACL 2026 文献笔记](https://boran002.github.io/papers/agent-tool-use-2026/)
- [359 篇论文交互表](https://boran002.github.io/papers/agent-tool-use-2026/explorer/)
- [下载论文数据（JSON）](https://boran002.github.io/data/agent-tool-use-2026.json)

## 写作

将 `content/templates/post.md` 复制到相应目录：

| 栏目   | 文件位置                      | 页面地址             |
| ------ | ----------------------------- | -------------------- |
| Notes  | `content/notes/your-slug.md`  | `/notes/your-slug/`  |
| Blog   | `content/blog/your-slug.md`   | `/blog/your-slug/`   |
| Papers | `content/papers/your-slug.md` | `/papers/your-slug/` |

文件名使用小写字母、数字和连字符。填写标题、日期与正文，将 `draft` 改为 `false` 后发布；日期需加引号。支持代码高亮、表格与数学公式。正文从 `##` 标题开始，三个及以上小节显示折叠目录。Blog 暂无文章时显示空状态。

## 文献专题的数据来源

`content/data/agent-tool-use-2026.json` 是该专题的唯一数据源。修改论文记录时更新这里，并保持统计字段一致。详细笔记保留英文专业术语；`method` 为按执行顺序展开的步骤数组，`evidence` 记录官方 PDF、实际核读页码、章节与阅读边界。不要把仅据摘要的概括标为正文笔记。

`npm run content` 会生成：

- `content/papers/agent-tool-use-2026.md`：按方向整理的文献目录（自动生成，请勿直接修改）。
- `public/papers/agent-tool-use-2026/reading/<id>/index.html`：每篇独立阅读页，包含 Idea、Research Problem、Insight、Method 与 PDF 核读页码。
- `public/papers/agent-tool-use-2026/explorer/index.html`：可搜索、筛选的交互表。
- `public/papers/agent-tool-use-2026/notes.md`：包含所有详细笔记的 Markdown 下载。
- `public/data/agent-tool-use-2026.json`：JSON 下载。

展示模板在 `content/templates/paper-explorer.html`，专题文案生成逻辑在 `scripts/build-paper-catalog.mjs`。主站直接承接旧文章路径 `/notes/agent-tool-use-2026/`、旧交互表路径 `/agent-tool-use-2026/` 和旧 JSON 下载地址；跳转保留章节锚点，不再依赖独立旧仓库。

## 预览与发布

Node.js 22.13+：

```sh
npm ci
npm run dev
```

修改 Markdown 后运行 `npm run content`；新增文件后重启预览。

```sh
npm run build:pages
npx tsc --noEmit
node scripts/check-export.mjs
```

发布构建会阻止尚缺 Method 或正文依据的条目；本地查看编辑中的版本可用 `PAPER_NOTES_PREVIEW=1 npm run build:pages`，预览产物不要推送。

提交源码与生成的 `docs/`，推送 main 后由 GitHub Pages 发布。草稿不会导出；`public/` 中的文献产物由构建生成，不需要手动提交。
