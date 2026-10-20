import {
  SiteShell,
  PageTop,
  IndexAside,
  ContactLinks,
} from '@/components/notebook/shared';
export const metadata = {
  title: '关于这个小站',
  description: '学习的切片，思考的留痕。',
  alternates: { canonical: '/about/' },
};
export default function About() {
  return (
    <SiteShell active="/about/" aside={<IndexAside />}>
      <PageTop label="关于" />
      <header className="page-heading">
        <span className="eyebrow">A LITTLE ABOUT THIS PLACE</span>
        <h1>
          关于<span>这个小站</span>
        </h1>
        <p>你好，我是 Riven Zhang。</p>
      </header>
      <div className="prose about-prose">
        <p>这里是我的个人主页，也是一个用来记录和整理的地方。</p>
        <p>
          把学到的知识、实践中的发现和零散的想法留下来。写的时候梳理一遍，回看的时候再理解一点。
        </p>
        <h2>这里有什么</h2>
        <p>
          <a href="/blog/">Blog · 博客</a> —
          放经过整理的文章，围绕一个问题展开。
        </p>
        <p>
          <a href="/notes/">Notes · 笔记</a> —
          放学习过程中的片段，允许不完整，也允许持续更新。
        </p>
        <h2>找到我</h2>
        <ContactLinks />
        <h2>关于小站</h2>
        <p>
          在 GitHub Pages 上慢慢生长。文章和笔记用 Markdown 记录，支持
          <a href="/tags/">标签索引</a>和<a href="/feed.xml">RSS 订阅</a>。
        </p>
        <p>
          如果暂时不想读文字，也可以
          <a href="/pelican-cycling.html">去海边兜风</a>。
        </p>
        <blockquote>把日子，骑慢一点。</blockquote>
      </div>
    </SiteShell>
  );
}
