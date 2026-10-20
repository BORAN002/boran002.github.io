# Notes · Riven Zhang

<https://boran002.github.io/>

## 添加笔记

复制 `content/templates/post.md` 到 `content/notes/your-slug.md`。文件名用小写字母、数字和连字符，对应 `/notes/your-slug/`。

填写标题、日期和 Markdown 正文，将 `draft` 改为 `false` 后发布。正文支持代码高亮、表格和数学公式；使用 `##` 写小节，三个及以上小节会显示折叠目录。`description`、`updated` 是可选元数据，不增加页面文案。

## 预览与发布

Node.js 22.13+：

```sh
npm ci
npm run dev
```

修改 Markdown 后运行 `npm run content`；新增文件后重启预览。

```sh
npm run content
npx tsc --noEmit
npm run build:pages
```

提交源码与生成的 `docs/`，推送 main 后由 GitHub Pages 发布。草稿不会导出。
