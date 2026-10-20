import { notFound } from 'next/navigation';
import { byKind, findEntry } from '@/lib/content';
import { Article } from '@/components/notebook/article';
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return byKind('blog').map(({ slug }) => ({ slug }));
}
export const dynamicParams = false;
export async function generateMetadata({ params }: Props) {
  const entry = findEntry('blog', (await params).slug);
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.description,
    alternates: { canonical: entry.url },
    openGraph: {
      type: 'article',
      title: entry.title,
      description: entry.description,
      url: entry.url,
      publishedTime: entry.date,
      modifiedTime: entry.updated,
    },
  };
}
export default async function Post({ params }: Props) {
  const entry = findEntry('blog', (await params).slug);
  if (!entry) notFound();
  return <Article entry={entry} />;
}
