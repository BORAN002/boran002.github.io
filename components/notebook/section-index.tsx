import {
  entriesFor,
  entrySummary,
  sections,
  type Section,
} from '@/lib/content';
import { EntryBrowser } from './entry-browser';

export function SectionIndex({ section }: { section: Section }) {
  const entries = entriesFor(section);
  return (
    <main id="main" tabIndex={-1} className="index-layout">
      <aside className="index-intro">
        <p className="eyebrow">
          [{sections[section].title[0]}] /{' '}
          {section === 'notes'
            ? 'Topic notes'
            : section === 'blog'
              ? 'Writing & Practice'
              : 'Reading & Research'}
        </p>
        <h1>{sections[section].title}</h1>
        <p>{sections[section].description}</p>
      </aside>
      <div className="index-main">
        {section === 'papers' && (
          <a
            className="collection-link"
            href="/papers/agent-tool-use-2026/explorer/"
          >
            <span className="eyebrow">Literature Explorer</span>
            <h2>
              Agent Tool Use <span aria-hidden="true">↗</span>
            </h2>
            <p>
              检索 CVPR / ACL 2026 的 359 篇论文，按会议、方向与相关程度筛选。
            </p>
            <span className="read-link">打开文献检索 →</span>
          </a>
        )}
        <EntryBrowser entries={entries.map(entrySummary)} section={section} />
      </div>
    </main>
  );
}
