import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';

const slug = 'agent-tool-use-2026';
const base = `/papers/${slug}/`;
const topics = [
  '工具调用 / 训练 / 评测',
  '多模态感知与创作',
  'GUI / Web / Computer Use',
  '代码 / 软件 / 科研执行',
  '搜索 / 检索 / Deep Research',
  '规划 / 记忆 / 工作流',
  '具身 / 导航 / 游戏',
  '安全与可靠性',
  '领域应用 / 数据分析',
];
const escapeTitle = (value) => value.replace(/[\[\]]/g, '\\$&');

export async function buildPaperCatalog() {
  const source = `content/data/${slug}.json`;
  const catalog = JSON.parse(await readFile(source, 'utf8'));
  const { papers, metadata } = catalog;
  const ids = new Set();
  for (const paper of papers) {
    for (const field of [
      'id',
      'title',
      'url',
      'conference',
      'track',
      'topic',
      'relevance',
      'kind',
      'idea',
      'research_problem',
      'insight',
    ]) {
      if (typeof paper[field] !== 'string' || !paper[field].trim())
        throw new Error(`Invalid ${field} in ${paper.id}`);
    }
    if (ids.has(paper.id)) throw new Error(`Duplicate paper ID: ${paper.id}`);
    ids.add(paper.id);
    if (!topics.includes(paper.topic))
      throw new Error(`Unknown topic: ${paper.topic}`);
    if (!['CVPR 2026', 'ACL 2026'].includes(paper.conference))
      throw new Error(`Unknown conference: ${paper.conference}`);
    if (!['直接工具使用', '扩展相关'].includes(paper.relevance))
      throw new Error(`Unknown relevance: ${paper.relevance}`);
    if (
      !/^https:\/\/(openaccess\.thecvf\.com|aclanthology\.org)\//.test(
        paper.url,
      )
    )
      throw new Error(`Unexpected paper URL: ${paper.url}`);
  }
  const count = (key, value) =>
    papers.filter((paper) => paper[key] === value).length;
  const cvpr = count('conference', 'CVPR 2026'),
    acl = count('conference', 'ACL 2026');
  const core = count('relevance', '直接工具使用'),
    related = count('relevance', '扩展相关');
  if (
    catalog.counts['CVPR 2026'] !== cvpr ||
    catalog.counts['ACL 2026'] !== acl ||
    catalog.relevance_counts['直接工具使用'] !== core ||
    catalog.relevance_counts['扩展相关'] !== related
  ) {
    throw new Error('Catalog totals do not match the paper records');
  }
  let note = `---
title: "Agent Tool Use：CVPR 与 ACL 2026 文献笔记"
date: "${metadata.date}"
description: "${papers.length} 篇主会论文，按九个方向整理，每篇记录 Idea、Research Problem 与 Insight。"
draft: false
---

这份笔记整理 **${papers.length} 篇主会论文**：CVPR 2026 共 ${cvpr} 篇，ACL 2026 共 ${acl} 篇，覆盖工具调用、多模态、搜索、GUI/Web、代码与具身执行。

每篇用三句话记录 **Idea、Research Problem、Insight**，标题链接到官方论文页。可以打开[交互式文献表](${base}explorer/)按会议、方向与相关程度筛选，或下载[结构化数据（JSON）](/data/${slug}.json)与[完整笔记（Markdown）](${base}notes.md)。

仅收录 CVPR Main 与 ACL Long / Short，排除 Findings、Workshop、Industry 和 Demo。${core} 篇标为直接工具使用，${related} 篇为相关的执行、规划、记忆、安全和评测研究。以下分类用于阅读导航，方向之间存在交叉。

> 检索日期：${metadata.date}。概括依据官方摘要，Insight 为分析性提炼，不是作者原话；这份清单不保证零遗漏，也不代表已独立复现论文结论。正式录用来源为 [CVF](https://openaccess.thecvf.com/CVPR2026?day=all) 和 [ACL Anthology](https://aclanthology.org/events/acl-2026/)。
`;
  for (const [index, topic] of topics.entries()) {
    const rows = papers.filter((paper) => paper.topic === topic);
    note += `\n## ${String(index + 1).padStart(2, '0')} · ${topic}\n\n${rows.length} 篇 · CVPR ${rows.filter((paper) => paper.conference === 'CVPR 2026').length} · ACL ${rows.filter((paper) => paper.conference === 'ACL 2026').length}\n`;
    for (const paper of rows) {
      note += `\n#### [${escapeTitle(paper.title)}](${paper.url})\n\n${paper.conference} · ${paper.track} · ${paper.relevance}\n\n- **Idea：** ${paper.idea}\n- **Research Problem：** ${paper.research_problem}\n- **Insight：** ${paper.insight}\n`;
    }
  }
  await mkdir('content/papers', { recursive: true });
  await mkdir(`public${base}explorer`, { recursive: true });
  await mkdir('public/data', { recursive: true });
  await writeFile(`content/papers/${slug}.md`, note);
  await writeFile(`public${base}notes.md`, note);
  await copyFile(source, `public/data/${slug}.json`);
  let explorer = await readFile(
    'content/templates/paper-explorer.html',
    'utf8',
  );
  for (const [key, value] of Object.entries({
    PAPERS: JSON.stringify(papers).replaceAll('<', '\\u003c'),
    TOTAL: papers.length,
    CVPR: cvpr,
    ACL: acl,
    CORE: core,
    RELATED: related,
  }))
    explorer = explorer.replaceAll(`__${key}__`, String(value));
  await writeFile(`public${base}explorer/index.html`, explorer);
  console.log(
    `Prepared ${papers.length} papers from one catalog: Markdown, explorer and JSON download.`,
  );
}
