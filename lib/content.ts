import data from '@/content/generated.json';
export type Kind = 'blog' | 'notes';
export type Entry = {
  slug: string;
  kind: string;
  title: string;
  description: string;
  date: string;
  updated: string;
  tags: string[];
  url: string;
  minutes: number;
  toc: { id: string; title: string; depth: number }[];
  html: string;
  text: string;
};
export const entries: Entry[] = data;
export const searchEntries = entries.map(
  ({ html: _html, toc: _toc, ...entry }) => entry,
);
export const tags = [...new Set(entries.flatMap((entry) => entry.tags))];
export const byKind = (kind: Kind) =>
  entries.filter((entry) => entry.kind === kind);
export const findEntry = (kind: Kind, slug: string) =>
  entries.find((entry) => entry.kind === kind && entry.slug === slug);
export const formatDate = (date: string) => date.replaceAll('-', '.');
