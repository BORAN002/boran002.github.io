import { entries, formatDate } from '@/lib/content';
export default function Notes() {
  return (
    <main id="main" tabIndex={-1}>
      <h1 className="index-title">Notes</h1>
      {entries.length ? (
        <ul className="note-list">
          {entries.map((entry) => (
            <li key={entry.slug}>
              <a href={entry.url}>
                <span>{entry.title}</span>
                <time dateTime={entry.date}>{formatDate(entry.date)}</time>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty">暂无笔记。</p>
      )}
    </main>
  );
}
