import about from '@/content/about.generated.json';

export const metadata = {
  title: about.title,
  description: about.description,
  alternates: { canonical: '/about/' },
};

export default function About() {
  return (
    <main id="main" tabIndex={-1}>
      <h1 className="index-title">{about.title}</h1>
      <div className="prose" dangerouslySetInnerHTML={{ __html: about.html }} />
    </main>
  );
}
