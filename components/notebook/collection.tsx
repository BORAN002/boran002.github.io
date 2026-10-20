'use client';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Search, X, FileText } from 'lucide-react';
import type { Entry } from '@/lib/content';
type Summary = Omit<Entry, 'html' | 'toc'>;
export function Collection({
  entries,
  kind,
}: {
  entries: Summary[];
  kind: 'blog' | 'notes';
}) {
  const [query, setQuery] = useState(''),
    [tag, setTag] = useState('');
  useEffect(() => {
    const restore = () => {
      const params = new URLSearchParams(location.search);
      setQuery(params.get('q') ?? '');
      setTag(params.get('tag') ?? '');
    };
    restore();
    window.addEventListener('popstate', restore);
    return () => window.removeEventListener('popstate', restore);
  }, []);
  function update(nextQuery: string, nextTag: string) {
    setQuery(nextQuery);
    setTag(nextTag);
    const params = new URLSearchParams();
    if (nextQuery) params.set('q', nextQuery);
    if (nextTag) params.set('tag', nextTag);
    history.replaceState(
      null,
      '',
      location.pathname + (params.size ? '?' + params.toString() : ''),
    );
  }
  const tags = [...new Set(entries.flatMap((entry) => entry.tags))];
  const results = entries.filter(
    (entry) =>
      (!tag || entry.tags.includes(tag)) &&
      `${entry.title} ${entry.description} ${entry.text} ${entry.tags.join(' ')}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  let year = '';
  return (
    <>
      <div className="collection-tools">
        <div className="collection-search">
          <Search size={17} />
          <input
            aria-label={kind === 'blog' ? '搜索博客' : '搜索笔记'}
            placeholder={kind === 'blog' ? '搜索博客…' : '搜索笔记…'}
            value={query}
            onChange={(event) => update(event.target.value, tag)}
          />
          {query && (
            <button
              className="icon-button"
              aria-label="清除关键词"
              onClick={() => update('', tag)}
            >
              <X size={15} />
            </button>
          )}
        </div>
        <span aria-live="polite">
          {results.length} {kind === 'blog' ? '篇文章' : '条笔记'}
        </span>
      </div>
      {(tags.length > 0 || tag) && (
        <div className="filter-tags" aria-label="按标签筛选">
          <button
            className={!tag ? 'selected' : ''}
            aria-pressed={!tag}
            onClick={() => update(query, '')}
          >
            全部
          </button>
          {[...new Set([...tags, ...(tag ? [tag] : [])])].map((item) => (
            <button
              key={item}
              className={tag === item ? 'selected' : ''}
              aria-pressed={tag === item}
              onClick={() => update(query, item)}
            >
              # {item}
            </button>
          ))}
        </div>
      )}
      <div className="collection-list">
        {results.map((entry) => {
          const showYear = year !== entry.date.slice(0, 4);
          year = entry.date.slice(0, 4);
          return (
            <div key={entry.url}>
              {showYear && (
                <h2 className="archive-year">
                  {year}
                  <span />
                </h2>
              )}
              <a className="entry-row" href={entry.url}>
                <div className="entry-meta">
                  <time dateTime={entry.date}>
                    {entry.date.replaceAll('-', '.')}
                  </time>
                  <span>{entry.minutes} 分钟阅读</span>
                </div>
                <div className="entry-row-body">
                  <div>
                    <h3>{entry.title}</h3>
                    <p>{entry.description}</p>
                    <div className="entry-tags">
                      {entry.tags.map((t) => (
                        <span key={t}># {t}</span>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight size={20} />
                </div>
              </a>
            </div>
          );
        })}
      </div>
      {results.length === 0 && (
        <div className="collection-empty">
          <FileText size={32} strokeWidth={1.3} />
          <h2>
            {entries.length ? '没有找到相关内容' : '留一点空白，给下一次发现。'}
          </h2>
          <p>
            {entries.length
              ? '换一个关键词，或清除筛选再看看。'
              : '笔记会慢慢收录在这里。不急，先认真学一点东西。'}
          </p>
          {(query || tag) && (
            <button className="text-button" onClick={() => update('', '')}>
              清除筛选 →
            </button>
          )}
        </div>
      )}
    </>
  );
}
