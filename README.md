# Riven Zhang · 博客与笔记

个人主页：<https://boran002.github.io/>

暖白与鼠尾草绿的个人笔记站。桌面为左侧导航、正文和右侧目录；移动端为单栏和折叠菜单。提供全文搜索、标签筛选、深浅色主题、文章目录、专注阅读、RSS、Markdown 代码高亮和 KaTeX 数学公式。保留独立的海边骑行动画。

## 写一篇文章

1. 复制 `content/templates/post.md` 到 `content/blog/my-first-post.md`；短笔记放入 `content/notes/`。
2. 文件名使用小写英文字母、数字和连字符，它就是文章永久链接。
3. 填写 `title`、`description`、`date`（引号包住的 YYYY-MM-DD），可填写 `tags`、`updated`。
4. 用 Markdown 写正文；从 `##` 开始写小节，目录会自动生成。代码块可带语言名，数学公式用 `$...$` 或 `$$...$$`。
5. 写完后将 `draft: true` 改为 `draft: false`。草稿不会进入页面、搜索、RSS 或站点地图。

首页、博客/笔记索引、标签页和 RSS 会从文章自动生成。普通 Markdown 站内链接，例如 `[文章](/blog/hello-world/)`，会产生对应反向链接；相同标签用于推荐继续阅读。图片放在 `public/images/`，正文用 `/images/文件名` 引用。

## 本地与发布

需要 Node.js 22.13 以上。

```sh
npm ci
npm run dev
```

修改 Markdown 后执行 `npm run content` 重新生成内容，开发服务会热更新。新增或删除文章时重启开发服务以刷新静态路由。

发布前：

```sh
npm run content
npx tsc --noEmit
npm run build:pages
```

GitHub Pages 沿用 main 分支 `/docs` 发布。把源码和生成的 `docs/` 一起提交并推送到 main。导出会先核验路由，再替换旧输出。

## 文件位置

- `content/blog/`、`content/notes/`：文章与笔记。
- `content/templates/post.md`：不会公开的写作模板。
- `app/page.tsx`：首页文字与布局。
- `app/about/page.tsx`：关于页面。
- `app/globals.css`：主题和响应式样式。
- `components/notebook/`：导航、搜索、索引与文章阅读组件。
- `scripts/build-content.mjs`：Markdown 编译、目录和内容校验。
- `scripts/export-pages.mjs`：GitHub Pages 目录结构、RSS、站点地图。

旧论文专区已从源码和公开页面移除；历史版本仍保存在 Git 历史中。新站未迁移或改写旧论文解析。
