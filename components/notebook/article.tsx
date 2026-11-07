import { formatDate, sections, type Entry } from '@/lib/content';
import { Contents } from './contents';
import { AgentLoopScene } from './agent-loop-scene';

export function Article({ entry }: { entry: Entry }) {
  return (
    <main id="main" tabIndex={-1} className="article-page">
      <header className="article-head">
        <div className="article-context">
          <a className="back-link" href={`/${entry.section}/`}>
            ← {sections[entry.section].title}
          </a>
        </div>
        <div className="article-heading">
          <p className="eyebrow">
            [{sections[entry.section].title[0]}] /{' '}
            {sections[entry.section].title}
          </p>
          <h1>{entry.title}</h1>
          {entry.description && (
            <p className="article-description">{entry.description}</p>
          )}
          {entry.showDate !== false && (
            <div className="article-meta">
              Updated{' '}
              <time dateTime={entry.updated}>{formatDate(entry.updated)}</time>
            </div>
          )}
        </div>
      </header>
      <div className="reading-layout">
        <Contents items={entry.toc} />
        <article className="article-body">
          {entry.section === 'notes' && entry.slug === 'agent-loop' && (
            <AgentLoopScene />
          )}
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: entry.html }}
          />
          <nav className="article-end" aria-label="阅读结束导航">
            <a href={`/${entry.section}/`}>
              ← 更多 {sections[entry.section].title}
            </a>
            <a href="#main">↑ Back to top</a>
          </nav>
        </article>
      </div>
    </main>
  );
}
