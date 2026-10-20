import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SiteShell, PageTop, EntryRow } from './shared';
import { ArticleBody, CopyLink, TableOfContents } from './article-tools';
import { entries, formatDate, type Entry } from '@/lib/content';
export function Article({ entry }: { entry: Entry }) {
  const related = entries
    .filter(
      (item) =>
        item.url !== entry.url &&
        item.tags.some((tag) => entry.tags.includes(tag)),
    )
    .slice(0, 3);
  const backlinks = entries.filter(
    (item) =>
      item.url !== entry.url && item.html.includes(`href="${entry.url}"`),
  );
  return (
    <SiteShell
      active={`/${entry.kind}/`}
      article
      aside={
        <>
          <TableOfContents toc={entry.toc} />
          <div className="aside-block">
            <h2>这篇记录</h2>
            <p>
              {entry.minutes} 分钟阅读
              <br />
              更新于 {formatDate(entry.updated)}
            </p>
            <CopyLink />
          </div>
          {backlinks.length > 0 && (
            <div className="aside-block">
              <h2>提到这篇内容</h2>
              {backlinks.map((item) => (
                <a className="backlink" key={item.url} href={item.url}>
                  {item.title}
                  <ArrowRight size={13} />
                </a>
              ))}
            </div>
          )}
        </>
      }
    >
      <PageTop label={entry.kind === 'blog' ? '博客' : '笔记'} />
      <article className="article">
        <header className="article-header">
          <a className="back-link" href={`/${entry.kind}/`}>
            <ArrowLeft size={14} />
            返回{entry.kind === 'blog' ? '博客' : '笔记'}
          </a>
          <h1>{entry.title}</h1>
          <p className="article-description">{entry.description}</p>
          <div className="article-meta">
            <span>Riven Zhang</span>
            <span>·</span>
            <time dateTime={entry.date}>{formatDate(entry.date)}</time>
            <span>·</span>
            <span>{entry.minutes} 分钟阅读</span>
          </div>
          <div className="article-tags">
            {entry.tags.map((tag) => (
              <a
                key={tag}
                href={`/${entry.kind}/?tag=${encodeURIComponent(tag)}`}
              >
                # {tag}
              </a>
            ))}
          </div>
        </header>
        {entry.toc.length > 0 && (
          <details className="mobile-toc">
            <summary>文章目录</summary>
            <nav>
              {entry.toc.map((item) => (
                <a href={`#${item.id}`} key={item.id}>
                  {item.title}
                </a>
              ))}
            </nav>
          </details>
        )}
        <ArticleBody html={entry.html} />
        <div className="article-end">
          <span>· · ·</span>
          <p>感谢阅读。思考在这里暂时停笔。</p>
          <CopyLink />
        </div>
      </article>
      {related.length > 0 && (
        <section className="related">
          <h2>继续阅读</h2>
          {related.map((item) => (
            <EntryRow key={item.url} entry={item} />
          ))}
        </section>
      )}
      <a className="back-link article-back" href={`/${entry.kind}/`}>
        <ArrowLeft size={15} />
        浏览全部{entry.kind === 'blog' ? '博客' : '笔记'}
      </a>
    </SiteShell>
  );
}
