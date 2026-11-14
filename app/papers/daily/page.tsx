import {
  dates,
  issueTitle,
  issueUrl,
  rssUrl,
  topics,
} from '@/lib/daily-papers';

export const metadata = {
  title: '每日 arXiv 论文推送',
  alternates: {
    canonical: '/papers/daily/',
    types: { 'application/rss+xml': rssUrl },
  },
};

export default function DailyArchive() {
  return (
    <main id="main" tabIndex={-1} className="article-page">
      <header className="article-head">
        <div>
          <a className="back-link" href="/papers/">
            ← Paper
          </a>
        </div>
        <div className="article-heading">
          <h1>每日 arXiv 论文推送</h1>
          <p className="article-description">
            按 arXiv 公告日期归档，每期最多 5 篇。标题和 Abstract
            命中关注方向时收录。
          </p>
          <a className="daily-action" href={rssUrl}>
            订阅 RSS
          </a>
        </div>
      </header>
      <div className="reading-layout">
        <aside className="daily-topics">
          <details>
            <summary>关注方向与检索词</summary>
            {topics.map((t) => (
              <div key={t.id}>
                <h3>{t.label}</h3>
                <p lang="en">{t.terms.join(' · ')}</p>
                {t.contextual.length > 0 && (
                  <p>需搭配视觉或多模态语境：{t.contextual.join(' · ')}</p>
                )}
              </div>
            ))}
          </details>
        </aside>
        <section aria-label="往期推送" className="article-body daily-archive">
          <h2>按日期浏览</h2>
          <ul>
            {dates.map((date) => (
              <li key={date}>
                <a href={issueUrl(date)}>
                  {issueTitle(date)} <span aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
