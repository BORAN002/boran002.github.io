import { formatDate, sections, type Entry } from '@/lib/content';
export function EntryList({
  entries,
  showSection = false,
}: {
  entries: Entry[];
  showSection?: boolean;
}) {
  return (
    <ul className="note-list">
      {entries.map((entry) => (
        <li key={entry.url}>
          <a href={entry.url}>
            <span>
              {showSection && (
                <small className="entry-section">
                  {sections[entry.section].title}
                </small>
              )}
              {entry.title}
            </span>
            {entry.showDate !== false && (
              <time dateTime={entry.date}>{formatDate(entry.date)}</time>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
