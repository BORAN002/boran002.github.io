import data from '@/content/generated.json';
export const sections = {
  notes: { title: 'Notes', description: '学习记录、技术实践与随手笔记。' },
  blog: { title: 'Blog', description: '想法、经验与长文章。' },
  papers: { title: 'Papers', description: '论文阅读、文献综述与研究线索。' },
} as const;
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
