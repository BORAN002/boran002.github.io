import data from '@/content/generated.json';
import { sections } from './site';
export { sections } from './site';
export type Section = keyof typeof sections;
export type Entry = {
  slug: string;
  section: Section;
  title: string;
  description: string;
  date: string;
  showDate?: boolean;
  updated: string;
  url: string;
  toc: { id: string; title: string; depth: number }[];
  html: string;
};
export const entries = data as Entry[];
export const entriesFor = (section: Section) =>
  entries.filter((entry) => entry.section === section);
export const findEntry = (section: Section, slug: string) =>
  entries.find((entry) => entry.section === section && entry.slug === slug);
export const formatDate = (date: string) => date.replaceAll('-', '.');
