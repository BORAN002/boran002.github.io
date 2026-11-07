import { sections } from '@/lib/site';
import type { EntrySummary } from '@/lib/content';

export function FeaturedEntry({ entry }: { entry: EntrySummary }) {
  return (
    <a
      className="featured-entry"
      href={entry.url}
      aria-label={`阅读 ${entry.title}`}
    >
      <div className="featured-mark" aria-hidden="true">
        <span className="feature-orbit" />
        <span>{sections[entry.section].title[0]}</span>
      </div>
      <div>
        <div className="featured-label">
          <span>Featured {sections[entry.section].title}</span>
          <span className="feature-number">01 /</span>
        </div>
        <h2>{entry.title}</h2>
        <p>{entry.description}</p>
        <span className="read-link">开始阅读 →</span>
      </div>
    </a>
  );
}
