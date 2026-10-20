import { SiteShell, PageTop, IndexAside } from '@/components/notebook/shared';
import { Collection } from '@/components/notebook/collection';
import { searchEntries } from '@/lib/content';
export const metadata = {
  title: 'Blog 博客',
  description: '整理过的想法，展开写成文章。',
  alternates: { canonical: '/blog/' },
};
export default function Blog() {
  return (
    <SiteShell active="/blog/" aside={<IndexAside />}>
      <PageTop label="博客" />
      <header className="page-heading">
        <span className="eyebrow">THOUGHTS, IN WORDS</span>
        <h1>
          Blog<span>博客</span>
        </h1>
        <p>
          围绕一个问题，展开一些思考。
          <br />
          把零散的理解，慢慢写成文章。
        </p>
      </header>
      <Collection
        kind="blog"
        entries={searchEntries.filter((entry) => entry.kind === 'blog')}
      />
    </SiteShell>
  );
}
