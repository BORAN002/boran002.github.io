import {
  entriesFor,
  entrySummary,
  sections,
  type Section,
} from '@/lib/content';
import { dates, issueTitle, issueUrl, rssUrl } from '@/lib/daily-papers';
import { EntryBrowser } from './entry-browser';

export function SectionIndex({ section }: { section: Section }) {
  const entries = entriesFor(section).map(entrySummary);
  if (section === 'papers') {
    entries.push(
      ...dates.map((date) => ({
        slug: 'daily/' + date,
        section,
        title: issueTitle(date),
        date,
        updated: date,
        url: issueUrl(date),
        description:
          '每日 arXiv · VLM、多模态内容理解、检索与排序、视觉感知与反馈、剪辑与创作、Multimodal Harness。',
      })),
    );
    entries.sort((a, b) => b.updated.localeCompare(a.updated));
  }
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
        {section === 'papers' && dates.length > 0 && (
          <section className="collection-link daily-feature">
            <p className="eyebrow">每日 arXiv</p>
            <h2>
              <a href={issueUrl(dates[0])}>{issueTitle(dates[0])}</a>
            </h2>
            <p>
              VLM、多模态理解与检索排序、视觉感知与反馈、多模态剪辑与创作、Multimodal
              Harness。
            </p>
            <div className="daily-links">
              <a href={issueUrl(dates[0])}>阅读本期 →</a>
              <a href="/papers/daily/">往期推送</a>
              <a href={rssUrl}>RSS</a>
            </div>
          </section>
        )}
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
        <EntryBrowser entries={entries} section={section} />
      </div>
    </main>
  );
}
