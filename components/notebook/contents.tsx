export type TocItem = { id: string; title: string; depth: number };

export function Contents({ items }: { items: TocItem[] }) {
  if (!items.length) return null;
  const links = (
    <nav className="toc-links" aria-label="章节目录">
      {items.map(({ id, title, depth }) => (
        <a
          href={`#${id}`}
          className={depth === 3 ? 'nested' : undefined}
          key={id}
        >
          {title.replace(/^•\s*/, '')}
        </a>
      ))}
    </nav>
  );
  return (
    <aside className="contents">
      <div className="contents-desktop">
        <div className="toc-label">
          Contents <span>本页目录</span>
        </div>
        {links}
        <a className="back-to-top" href="#main">
          ↑ Back to top
        </a>
      </div>
      <details className="contents-mobile">
        <summary>
          Contents <span>查看目录 · {items.length}</span>
        </summary>
        {links}
      </details>
    </aside>
  );
}
