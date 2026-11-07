import about from '@/content/about.generated.json';
import { Contents } from '@/components/notebook/contents';

export const metadata = {
  title: about.title,
  description: about.description,
  alternates: { canonical: '/about/' },
};
export default function About() {
  return (
    <main id="main" tabIndex={-1} className="article-page">
      <header className="article-head">
        <div className="article-context">
          <a className="back-link" href="/notes/">
            ← Note
          </a>
        </div>
        <div className="article-heading">
          <p className="eyebrow">[A] / About this site</p>
          <h1>About</h1>
          <p className="article-description">{about.description}</p>
        </div>
      </header>
      <div className="reading-layout">
        <Contents items={about.toc} />
        <article className="article-body">
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: about.html }}
          />
        </article>
      </div>
    </main>
  );
}
