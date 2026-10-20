import { notFound } from 'next/navigation';
import { entries, findEntry } from '@/lib/content';
import { Article } from '@/components/notebook/article';
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return entries.map(({ slug }) => ({ slug }));
}
export const dynamicParams = false;
export async function generateMetadata({ params }: Props) {
  const entry = findEntry((await params).slug);
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.description || entry.title,
    alternates: { canonical: entry.url },
    openGraph: {
      type: 'article',
      title: entry.title,
      description: entry.description || entry.title,
      url: entry.url,
      publishedTime: entry.date,
      modifiedTime: entry.updated,
    },
  };
}
export default async function Note({ params }: Props) {
  const entry = findEntry((await params).slug);
  if (!entry) notFound();
  return <Article entry={entry} />;
}
