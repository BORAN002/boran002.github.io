import { entries, entrySummary } from '@/lib/content';
import { EntryBrowser } from '@/components/notebook/entry-browser';
import { FeaturedEntry } from '@/components/notebook/featured-entry';

export default function Home() {
  const summaries = entries.map(entrySummary);
  const featured =
    summaries.find((entry) => entry.slug === 'agent-loop') ?? summaries[0];
  return (
    <main id="main" tabIndex={-1} className="index-layout">
      <aside className="index-intro">
        <p className="eyebrow">Learning / Research</p>
        <h1>学习与研究</h1>
        <p className="intro-topics">AI · Agents · Systems</p>
        <p>记录概念与实践，整理值得保留的 Insight 和可以复用的 Method。</p>
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
    </main>
  );
}
