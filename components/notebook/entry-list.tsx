import { sections } from '@/lib/site';
import type { EntrySummary } from '@/lib/content';

export function EntryList({
  entries,
  showSection = false,
}: {
  entries: EntrySummary[];
  showSection?: boolean;
}) {
  return (
    <ul className="entry-list">
      {entries.map((entry) => (
        <li key={entry.url} data-section={entry.section}>
          <a className="entry-row" href={entry.url}>
            <div className="entry-meta">
              {showSection && <span>{sections[entry.section].title}</span>}
              {entry.showDate !== false && (
                <time dateTime={entry.updated}>
                  {entry.updated.replaceAll('-', '.')}
                </time>
              )}
              {entry.showDate === false && <span>主题笔记</span>}
            </div>
            <div className="entry-text">
              <h3>{entry.title}</h3>
              {entry.description && <p>{entry.description}</p>}
            </div>
            <span className="entry-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
