import { SiteShell, PageTop, IndexAside } from '@/components/notebook/shared';
import { Collection } from '@/components/notebook/collection';
import { searchEntries } from '@/lib/content';
export const metadata = {
  title: 'Notes 学习笔记',
  description: '学习中的片段、疑问和实践记录。',
  alternates: { canonical: '/notes/' },
};
export default function Notes() {
  return (
    <SiteShell active="/notes/" aside={<IndexAside />}>
      <PageTop label="笔记" />
      <header className="page-heading">
        <span className="eyebrow">SMALL STEPS, EVERY DAY</span>
        <h1>
          Notes<span>学习笔记</span>
        </h1>
        <p>
          读到的、试过的、想明白的。
          <br />
          记录过程，也留下一些尚未解决的问题。
        </p>
      </header>
      <Collection
        kind="notes"
        entries={searchEntries.filter((entry) => entry.kind === 'notes')}
      />
    </SiteShell>
  );
}
