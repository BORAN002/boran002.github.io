import { entries, entrySummary } from '@/lib/content';
import { EntryBrowser } from '@/components/notebook/entry-browser';
import { FeaturedEntry } from '@/components/notebook/featured-entry';
import { HomeHero } from '@/components/notebook/home-hero';

export default function Home() {
  const summaries = entries.map(entrySummary);
  const featured =
    summaries.find((entry) => entry.slug === 'agent-loop') ?? summaries[0];
  return (
    <main id="main" tabIndex={-1} className="home-page">
      <HomeHero />
      <div className="index-layout home-notebook" id="notebook">
        <aside className="index-intro">
          <p className="eyebrow">THE NOTEBOOK / 01</p>
          <h2>
            持续生长的
            <br />
            知识库。
          </h2>
          <p>
            从一个概念到一篇论文，
            <br />
            把思考留下，把方法连起来。
          </p>
          <a className="text-link" href="/about/">
            关于本站 ↗
          </a>
          <div className="intro-links">
            <a href="/notes/">主题笔记 →</a>
            <a href="/papers/agent-tool-use-2026/explorer/">论文检索 →</a>
          </div>
        </aside>
        <div className="index-main">
          {featured && <FeaturedEntry entry={featured} />}
          <EntryBrowser entries={summaries} />
        </div>
      </div>
    </main>
  );
}
