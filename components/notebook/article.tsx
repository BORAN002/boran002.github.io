import { formatDate, sections, type Entry } from '@/lib/content';
export function Article({ entry }: { entry: Entry }) {
  return (
    <main id="main" tabIndex={-1}>
      <a className="back-link" href={`/${entry.section}/`}>
        ← {sections[entry.section].title}
      </a>
      <article>
        <header className="note-header">
          <h1>{entry.title}</h1>
          {entry.showDate !== false && (
            <time dateTime={entry.date}>{formatDate(entry.date)}</time>
          )}
        </header>
        {entry.toc.filter((item) => item.depth === 2).length >= 3 && (
          <details className="toc">
            <summary>目录</summary>
            <nav aria-label="笔记目录">
              {entry.toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={item.depth === 3 ? 'nested' : undefined}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </details>
        )}
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: entry.html }}
        />
      </article>
    </main>
  );
}
