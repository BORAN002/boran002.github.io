# Notes, Blog & Papers · Riven Zhang

[打开网站](https://boran002.github.io/) · [Notes](https://boran002.github.io/notes/) · [Blog](https://boran002.github.io/blog/) · [Papers](https://boran002.github.io/papers/)

统一维护学习笔记、博客和论文阅读。Agent Tool Use 2026 的全文笔记、交互表和论文数据也在本仓库中。

## 阅读

- [Agent Loop：从闭环决策到开源实现](https://boran002.github.io/notes/agent-loop/)
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

`content/data/agent-tool-use-2026.json` 是该专题的唯一数据源。修改论文记录时更新这里，并保持统计字段一致。

`npm run content` 会生成：

- `content/papers/agent-tool-use-2026.md`：完整 Markdown 文献笔记（自动生成，请勿直接修改）。
- `public/papers/agent-tool-use-2026/explorer/index.html`：可搜索、筛选的交互表。
- `public/papers/agent-tool-use-2026/notes.md`：Markdown 下载。
- `public/data/agent-tool-use-2026.json`：JSON 下载。

展示模板在 `content/templates/paper-explorer.html`，专题文案生成逻辑在 `scripts/build-paper-catalog.mjs`。独立旧仓库只作为迁移入口，不再维护内容。旧文章路径 `/notes/agent-tool-use-2026/` 会保留章节锚点并跳转到 Papers。

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

提交源码与生成的 `docs/`，推送 main 后由 GitHub Pages 发布。草稿不会导出；`public/` 中的文献产物由构建生成，不需要手动提交。
