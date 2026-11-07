import { entries, entriesFor, sections, type Section } from '@/lib/content';
import { EntryList } from '@/components/notebook/entry-list';
export default function Home() {
  return (
    <main id="main" tabIndex={-1}>
      <h1 className="index-title">Note, Blog &amp; Paper</h1>
      <p className="section-description">记录学习，整理想法，读懂论文。</p>
      <div className="section-grid">
        {(Object.keys(sections) as Section[]).map((section) => (
          <a className="section-card" href={`/${section}/`} key={section}>
            <h2>
              {sections[section].title}
              <span aria-hidden="true">↗</span>
            </h2>
            <p>{sections[section].description}</p>
            <small>
              {entriesFor(section).length}
              {section === 'papers' ? ' 个专题' : ' 篇'}
            </small>
          </a>
        ))}
        <a className="section-card" href="/about/">
          <h2>
            About<span aria-hidden="true">↗</span>
          </h2>
          <p>本站的内容范围、分类方式与阅读说明。</p>
          <small>关于本站</small>
        </a>
      </div>
      <h2 className="list-heading">最近更新</h2>
      <EntryList entries={entries.slice(0, 8)} showSection />
    </main>
  );
}
