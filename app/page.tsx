import { ArrowUpRight } from 'lucide-react';
import {
  SiteShell,
  PageTop,
  HomeAside,
  SectionTitle,
  EntryRow,
  EmptyNotes,
  ContactLinks,
} from '@/components/notebook/shared';
import { byKind } from '@/lib/content';
export default function Home() {
  const blogs = byKind('blog'),
    notes = byKind('notes');
  return (
    <SiteShell aside={<HomeAside />}>
      <PageTop label="首页" />
      <section className="home-intro" id="hello">
        <div className="hello-line">
          <span className="status-dot" />
          HELLO, I&apos;M RIVEN
          <span className="hello-rule" />
        </div>
        <h1>
          学习、记录，
          <br />
          保持
          <span className="curiosity">
            好奇
            <svg viewBox="0 0 170 12" aria-hidden="true">
              <path d="M3 8Q80 0 167 6" />
            </svg>
          </span>
          。
        </h1>
        <p className="hero-description">
          我是 Riven Zhang，欢迎来到我的个人小站。
          <br />
          在这里，写博客、整理笔记，记录一路上的思考。
        </p>
        <ContactLinks />
        <div className="intro-note">
          <span className="note-line" />
          <p>把零散的想法，写成可以再次出发的地方。</p>
        </div>
      </section>
      <section className="home-section" id="writing">
        <SectionTitle
          label="LATEST WRITING"
          title="最近写下"
          href="/blog/"
          linkLabel="全部博客"
        />
        {blogs.slice(0, 3).map((entry) => (
          <EntryRow key={entry.url} entry={entry} />
        ))}
      </section>
      <section className="home-section" id="notebooks">
        <SectionTitle
          label="LEARNING IN PUBLIC"
          title="学习笔记"
          href="/notes/"
          linkLabel="浏览笔记"
        />
        {notes.length ? (
          notes
            .slice(0, 3)
            .map((entry) => <EntryRow key={entry.url} entry={entry} />)
        ) : (
          <EmptyNotes />
        )}
      </section>
      <div className="home-bottom">
        <span>不止于答案，也记录寻找答案的过程。</span>
        <a href="/about/">
          关于这个小站
          <ArrowUpRight size={14} />
        </a>
      </div>
    </SiteShell>
  );
}
