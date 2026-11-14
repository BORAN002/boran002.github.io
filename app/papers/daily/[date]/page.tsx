import { notFound } from 'next/navigation';
import { Contents } from '@/components/notebook/contents';
import {
  dates,
  getIssue,
  issueTitle,
  issueUrl,
  topics,
} from '@/lib/daily-papers';

type Props = { params: Promise<{ date: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return dates.map((date) => ({ date }));
}
export async function generateMetadata({ params }: Props) {
  const { date } = await params;
  return { title: issueTitle(date), alternates: { canonical: issueUrl(date) } };
}
export default async function DailyIssue({ params }: Props) {
  const { date } = await params;
  const issue = await getIssue(date);
  if (!issue) notFound();
  const groups = topics
    .map((topic) => ({
      ...topic,
      papers: issue.papers.filter((p) => p.topic === topic.id),
    }))
    .filter((group) => group.papers.length);
  return (
    <main id="main" tabIndex={-1} className="article-page">
      <header className="article-head">
        <div>
          <a className="back-link" href="/papers/daily/">
            ← 推送归档
          </a>
        </div>
        <div className="article-heading">
          <h1>{issueTitle(date)}</h1>
          <p className="article-description">
            {issue.papers.length} 篇 arXiv 论文 · 基于标题与 Abstract 筛选
          </p>
        </div>
      </header>
      <div className="reading-layout">
        <Contents
          items={groups.map((g) => ({ id: g.id, title: g.label, depth: 2 }))}
        />
        <article className="article-body prose daily-issue">
          {groups.map((group) => (
            <section key={group.id}>
              <h2 id={group.id}>{group.label}</h2>
              {group.papers.map((paper) => {
                const ref = paper.id + 'v' + paper.version;
                return (
                  <div key={paper.id} className="daily-paper">
                    <h3 lang="en">
                      <a href={'https://arxiv.org/abs/' + ref}>{paper.title}</a>
                    </h3>
                    <p className="daily-match">
                      匹配词 · {paper.matched.join(' · ')}
                    </p>
                    <p lang={paper.note ? 'zh-CN' : 'en'}>
                      {paper.note || paper.excerpt}
                    </p>
                    <p className="daily-ref">
                      {paper.note
                        ? '据作者 Abstract 整理'
                        : '作者 Abstract 节选'}{' '}
                      · <a href={'https://arxiv.org/abs/' + ref}>arXiv:{ref}</a>{' '}
                      · <a href={'https://arxiv.org/pdf/' + ref}>PDF</a>
                    </p>
                  </div>
                );
              })}
            </section>
          ))}
          <nav className="article-end" aria-label="阅读结束导航">
            <a href="/papers/daily/">← 推送归档</a>
            <a href="#main">↑ 返回顶部</a>
          </nav>
        </article>
      </div>
    </main>
  );
}
