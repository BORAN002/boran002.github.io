import { ArrowUpRight } from 'lucide-react';
import { SiteShell, PageTop, IndexAside } from '@/components/notebook/shared';
import { entries, tags } from '@/lib/content';
export const metadata = {
  title: '标签索引',
  alternates: { canonical: '/tags/' },
};
export default function Tags() {
  return (
    <SiteShell active="/tags/" aside={<IndexAside />}>
      <PageTop label="标签" />
      <header className="page-heading">
        <span className="eyebrow">FOLLOW A THREAD</span>
        <h1>
          Tags<span>标签索引</span>
        </h1>
        <p>沿着一个关键词，找到相关的记录。</p>
      </header>
      <div className="tag-index">
        {tags.map((tag) => (
          <section key={tag}>
            <h2>
              # {tag}
              <span>
                {entries.filter((entry) => entry.tags.includes(tag)).length}
              </span>
            </h2>
            {entries
              .filter((entry) => entry.tags.includes(tag))
              .map((entry) => (
                <a key={entry.url} href={entry.url}>
                  <span>
                    {entry.title}
                    <small>
                      {entry.kind === 'blog' ? 'Blog' : 'Notes'} · {entry.date}
                    </small>
                  </span>
                  <ArrowUpRight size={18} />
                </a>
              ))}
          </section>
        ))}
      </div>
    </SiteShell>
  );
}
