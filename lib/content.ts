import data from '@/content/generated.json';
export type Entry = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated: string;
  url: string;
  toc: { id: string; title: string; depth: number }[];
  html: string;
};
export const entries: Entry[] = data;
export const findEntry = (slug: string) =>
  entries.find((entry) => entry.slug === slug);
export const formatDate = (date: string) => date.replaceAll('-', '.');
