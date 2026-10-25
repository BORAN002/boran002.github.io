import { notFound } from 'next/navigation';
import { findEntry, type Section } from '@/lib/content';
import { Article } from './article';
export type EntryProps = { params: Promise<{ slug: string }> };
export async function entryMetadata(section: Section, { params }: EntryProps) {
  const entry = findEntry(section, (await params).slug);
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.description || entry.title,
    alternates: { canonical: entry.url },
    openGraph: {
      type: 'article' as const,
      title: entry.title,
      description: entry.description || entry.title,
      url: entry.url,
      ...(entry.showDate === false
        ? {}
        : {
            publishedTime: entry.date,
            modifiedTime: entry.updated,
          }),
    },
  };
}
export async function EntryPage({
  section,
  params,
}: EntryProps & { section: Section }) {
  const entry = findEntry(section, (await params).slug);
  if (!entry) notFound();
  return <Article entry={entry} />;
}
