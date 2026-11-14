/// <reference types="vite/client" />
import config from '@/content/data/daily-paper-topics.json';

type DailyPaper = {
  id: string;
  version: number;
  title: string;
  topic: string;
  matched: string[];
  excerpt: string;
  note?: string;
};
type Issue = { date: string; papers: DailyPaper[] };

const files = import.meta.glob<Issue>('/content/daily-papers/*.json', {
  import: 'default',
});

export const dates = Object.keys(files)
  .map((name) => name.slice(-15, -5))
  .sort()
  .reverse();

export const getIssue = (date: string) =>
  files[`/content/daily-papers/${date}.json`]?.();

export const topics = config.topics;
export const issueTitle = (date: string) => date + ' 论文推送';
export const issueUrl = (date: string) => '/papers/daily/' + date + '/';
export const rssUrl = '/papers/daily/feed.xml';
