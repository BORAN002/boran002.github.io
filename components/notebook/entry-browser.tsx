'use client';
import { useState } from 'react';
import { sections } from '@/lib/site';
import type { EntrySummary, Section } from '@/lib/content';
import { EntryList } from './entry-list';

export function EntryBrowser({
  entries,
  section,
}: {
  entries: EntrySummary[];
  section?: Section;
}) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Section | 'all'>(section ?? 'all');
  const normalized = query.trim().toLocaleLowerCase();
  const shown = entries.filter(
    (entry) =>
      (filter === 'all' || entry.section === filter) &&
      (!normalized ||
        `${entry.title} ${entry.description}`
          .toLocaleLowerCase()
          .includes(normalized)),
  );
  const filters: (Section | 'all')[] = ['all', 'notes', 'blog', 'papers'];
  return (
    <section className="entry-browser" aria-label="浏览内容">
      <div className="browse-toolbar">
        {!section ? (
          <fieldset className="browse-filters">
            <legend className="sr-only">按栏目筛选</legend>
            {filters.map((key) => (
              <button
                type="button"
                key={key}
                aria-pressed={filter === key}
                onClick={() => setFilter(key)}
              >
                {key === 'all' ? 'All' : sections[key].title}
                <span>
                  {key === 'all'
                    ? entries.length
                    : entries.filter((entry) => entry.section === key).length}
                </span>
              </button>
            ))}
          </fieldset>
        ) : (
          <h2 className="browse-title">全部内容</h2>
        )}
        <label className="search-field">
          <span aria-hidden="true">⌕</span>
          <span className="sr-only">搜索标题或主题</span>
          <input
            type="search"
            placeholder="搜索标题或主题…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
      </div>
      <div className="browse-summary">
        <span aria-live="polite">{shown.length} 篇文章 / 专题</span>
        <span>最近更新优先</span>
      </div>
      {shown.length ? (
        <EntryList entries={shown} showSection={!section} />
      ) : (
        <div className="empty-state">
          <h3>{query || !section ? '没有匹配的内容' : '还没有发布文章。'}</h3>
          <p>
            {query
              ? '试试其他关键词，或清除筛选条件。'
              : '这一栏还没有文章，可以先阅读其他栏目。'}
          </p>
          {(query || filter !== (section ?? 'all')) && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setFilter(section ?? 'all');
              }}
            >
              清除筛选
            </button>
          )}
        </div>
      )}
    </section>
  );
}
