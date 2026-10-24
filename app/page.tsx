import { entries, entriesFor, sections, type Section } from '@/lib/content';
import { EntryList } from '@/components/notebook/entry-list';
export default function Home() {
  return (
    <main id="main" tabIndex={-1}>
      <h1 className="index-title">Notes, Blog &amp; Papers</h1>
      <p className="section-description">记录学习，整理想法，读懂论文。</p>
      <div className="section-grid">
        {(Object.keys(sections) as Section[]).map((section) => (
          <a className="section-card" href={`/${section}/`} key={section}>
            <h2>
              {sections[section].title}
              <span aria-hidden="true">↗</span>
            </h2>
            <p>{sections[section].description}</p>
            <small>{entriesFor(section).length} 篇</small>
          </a>
        ))}
      </div>
      <h2 className="list-heading">最近更新</h2>
      <EntryList entries={entries.slice(0, 8)} showSection />
    </main>
  );
}
