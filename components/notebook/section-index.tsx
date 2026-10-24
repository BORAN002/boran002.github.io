import { entriesFor, sections, type Section } from '@/lib/content';
import { EntryList } from './entry-list';
export function SectionIndex({ section }: { section: Section }) {
  const entries = entriesFor(section);
  return (
    <main id="main" tabIndex={-1}>
      <h1 className="index-title">{sections[section].title}</h1>
      <p className="section-description">{sections[section].description}</p>
      {section === 'papers' && (
        <aside className="collection-link">
          <span className="eyebrow">文献专题 · 2026</span>
          <a href="/papers/agent-tool-use-2026/explorer/">
            Agent Tool Use 文献交互表 <span aria-hidden="true">↗</span>
          </a>
          <p>
            按会议、方向与相关程度筛选论文，逐篇查看 Idea、Research Problem 与
            Insight。
          </p>
        </aside>
      )}
      {entries.length ? (
        <EntryList entries={entries} />
      ) : (
        <p className="empty">还没有发布文章。</p>
      )}
    </main>
  );
}
