import { readFile, writeFile, mkdir, copyFile, rm } from 'node:fs/promises';

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
const escapeTitle = (value) =>
  value.replaceAll('[', '\\[').replaceAll(']', '\\]');
const esc = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        c
      ],
  );
const notePath = (p) => `${base}reading/${p.id.toLowerCase()}/`;
const complete = (p) =>
  Array.isArray(p.method) &&
  p.method.length >= 3 &&
  p.evidence?.basis === 'full_text';
const paragraph = (text) => `<p>${esc(text)}</p>`;
const mdText = (text) =>
  text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const overview = (p) =>
  p.idea.split('\u3002')[0] + (p.idea.includes('\u3002') ? '\u3002' : '');

function readingPage(paper, previous, next) {
  const ready = complete(paper);
  const { evidence } = paper;
  const sections = [
    ['idea', 'Idea', paper.idea],
    ['research-problem', 'Research Problem', paper.research_problem],
    ['insight', 'Insight', paper.insight],
  ];
  const content = sections
    .map(
      ([id, title, body]) =>
        `<section aria-labelledby="${id}"><h2 id="${id}">${title}</h2>${paragraph(body)}</section>`,
    )
    .join('');
  const method = ready
    ? `<ol>${paper.method.map((step) => `<li>${esc(step)}</li>`).join('')}</ol>`
    : '<p class="reading-status">Method 详细笔记整理中；当前三栏为原有摘要笔记。</p>';
  const sources = ready
    ? `<p>阅读依据：官方 PDF 正文。核读页码按 PDF 页序计数，可能与 proceedings 页码不同。</p><p class="source-pages">${evidence.read_pages.map((page) => `<a href="${esc(evidence.pdf_url)}#page=${page}" target="_blank" rel="noopener">p. ${page}</a>`).join(' · ')}</p><p>核读章节：${evidence.sections.map(esc).join(' · ')}</p><p>${esc(evidence.note)}</p>`
    : '<p>当前概括依据官方摘要；详细版尚未完成。</p>';
  const sibling = (p, label) =>
    p
      ? `<a href="${notePath(p)}"><small>${label}</small><span>${esc(p.title)}</span></a>`
      : '<span></span>';
  return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="${esc(overview(paper))}"><title>${esc(paper.title)} · Paper Notes</title><link rel="canonical" href="https://boran002.github.io${notePath(paper)}"><link rel="stylesheet" href="${base}reading.css"></head><body><a class="skip-link" href="#main">跳至正文</a><div class="page"><header class="site-header"><a href="/">Riven Zhang</a><nav class="site-nav" aria-label="栏目导航"><a href="/notes/">Notes</a><a href="/blog/">Blog</a><a href="/papers/" aria-current="page">Papers</a></nav></header><main id="main"><a class="back-link" href="${base}">← Agent Tool Use 2026</a><article><header class="note-header"><p class="reading-meta">${esc(paper.conference)} · ${esc(paper.track)} · ${esc(paper.id)}</p><h1>${esc(paper.title)}</h1><p class="reading-meta">${esc(paper.topic)} · ${esc(paper.relevance)} · ${esc(paper.kind)}</p><div class="paper-links"><a href="${esc(paper.url)}" target="_blank" rel="noopener">官方论文页 ↗</a>${ready ? `<a href="${esc(evidence.pdf_url)}" target="_blank" rel="noopener">PDF ↗</a>` : ''}<a href="${base}explorer/">文献检索</a></div></header><nav class="reading-toc" aria-label="笔记目录"><a href="#idea">Idea</a><a href="#research-problem">Research Problem</a><a href="#insight">Insight</a><a href="#method">Method</a><a href="#sources">Sources</a></nav>${ready ? '' : '<p class="reading-status">摘要版 · 详细笔记整理中</p>'}<div class="prose">${content}<section aria-labelledby="method"><h2 id="method">Method</h2>${method}</section><section class="reading-sources" aria-labelledby="sources"><h2 id="sources">Sources & Reading Scope</h2>${sources}</section></div></article><nav class="reading-adjacent" aria-label="相邻论文">${sibling(previous, '← Previous')}${sibling(next, 'Next →')}</nav></main><footer class="reading-footer"><a href="${base}notes.md">全部笔记 · Markdown</a><a href="/data/${slug}.json">论文数据 · JSON</a></footer></div></body></html>`;
}

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
    if (!/^[A-Z]\d+$/.test(paper.id) || ids.has(paper.id))
      throw new Error(`Invalid or duplicate paper ID: ${paper.id}`);
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
    if (paper.method && !complete(paper))
      throw new Error(`Incomplete detailed note: ${paper.id}`);
    if (complete(paper)) {
      if (
        !paper.evidence.read_pages.length ||
        !paper.evidence.read_pages.every((n) => Number.isInteger(n) && n > 0)
      )
        throw new Error(`Invalid reading pages: ${paper.id}`);
      if (
        !/^https:\/\/(openaccess\.thecvf\.com|aclanthology\.org)\/.+\.pdf$/.test(
          paper.evidence.pdf_url,
        )
      )
        throw new Error(`Unexpected PDF URL: ${paper.id}`);
    }
  }
  const count = (key, value) => papers.filter((p) => p[key] === value).length;
  const cvpr = count('conference', 'CVPR 2026'),
    acl = count('conference', 'ACL 2026'),
    core = count('relevance', '直接工具使用'),
    related = count('relevance', '扩展相关');
  const detailed = papers.filter(complete).length;
  if (
    catalog.counts['CVPR 2026'] !== cvpr ||
    catalog.counts['ACL 2026'] !== acl ||
    catalog.relevance_counts['直接工具使用'] !== core ||
    catalog.relevance_counts['扩展相关'] !== related ||
    metadata.detailed_notes !== detailed
  )
    throw new Error('Catalog totals do not match paper records');
  const full = detailed === papers.length;
  const intro = `这份笔记整理 **${papers.length} 篇主会论文**：CVPR 2026 共 ${cvpr} 篇，ACL 2026 共 ${acl} 篇，覆盖 tool calling、多模态、search、GUI / Web、code execution 与 embodied agents。\n\n每篇独立阅读页按 **Idea → Research Problem → Insight → Method** 展开，中文解释保留英文专业术语。Method 写明关键模块、数据与训练流程、执行方式；Sources 提供官方 PDF 与核读页码。${full ? '' : `当前详细版已完成 ${detailed} / ${papers.length} 篇，其余暂保留摘要版。`}\n\n[打开交互式文献检索](${base}explorer/) · [下载全部笔记（Markdown）](${base}notes.md) · [结构化数据（JSON）](/data/${slug}.json)\n\n仅收录 CVPR Main 与 ACL Long / Short，排除 Findings、Workshop、Industry 和 Demo。${core} 篇标为直接工具使用，${related} 篇为相关的执行、规划、记忆、安全和评测研究；九个方向用于阅读导航，边界存在交叉。\n\n> 检索日期：${metadata.date}。详细笔记依据官方正文整理，Insight 为对论文机制的分析性概括；未独立复现实验，清单不保证零遗漏。正式录用来源为 [CVF](https://openaccess.thecvf.com/CVPR2026?day=all) 和 [ACL Anthology](https://aclanthology.org/events/acl-2026/)。\n`;
  let index = `---\ntitle: "Agent Tool Use：CVPR 与 ACL 2026 文献笔记"\ndate: "${metadata.date}"\nupdated: "${metadata.date}"\ndescription: "${papers.length} 篇主会论文，逐篇整理 Idea、Research Problem、Insight 与 Method，附正文来源。"\ndraft: false\n---\n\n${intro}`;
  let markdown = `# Agent Tool Use：CVPR 与 ACL 2026 文献笔记\n\n${intro.replaceAll('](/', '](https://boran002.github.io/')}`;
  const ordered = topics.flatMap((topic) =>
    papers.filter((p) => p.topic === topic),
  );
  await rm(`public${base}reading`, { recursive: true, force: true });
  await mkdir(`public${base}explorer`, { recursive: true });
  await mkdir('content/papers', { recursive: true });
  await mkdir('public/data', { recursive: true });
  for (const [i, paper] of ordered.entries()) {
    await mkdir(`public${notePath(paper)}`, { recursive: true });
    await writeFile(
      `public${notePath(paper)}index.html`,
      readingPage(paper, ordered[i - 1], ordered[i + 1]),
    );
  }
  for (const [i, topic] of topics.entries()) {
    const rows = ordered.filter((p) => p.topic === topic);
    const heading = `\n## ${String(i + 1).padStart(2, '0')} · ${topic}\n\n${rows.length} 篇 · CVPR ${rows.filter((p) => p.conference === 'CVPR 2026').length} · ACL ${rows.filter((p) => p.conference === 'ACL 2026').length}\n`;
    index += heading;
    markdown += heading;
    for (const p of rows) {
      index += `\n#### [${escapeTitle(p.title)}](${notePath(p)})\n\n${p.conference} · ${p.relevance}${complete(p) ? ' · 正文笔记' : ' · 摘要版'}\n\n${mdText(overview(p))}\n`;
      markdown += `\n### ${escapeTitle(p.title)}\n\n${p.conference} · ${p.track} · ${p.relevance}\n\n[官方论文](${p.url}) · [在线笔记](https://boran002.github.io${notePath(p)})\n\n#### Idea\n\n${mdText(p.idea)}\n\n#### Research Problem\n\n${mdText(p.research_problem)}\n\n#### Insight\n\n${mdText(p.insight)}\n\n#### Method\n\n${complete(p) ? p.method.map((s, j) => `${j + 1}. ${mdText(s)}`).join('\n\n') : '详细 Method 整理中。'}\n`;
      if (complete(p))
        markdown += `\n#### Sources & Reading Scope\n\n${p.evidence.read_pages.map((n) => `[PDF p. ${n}](${p.evidence.pdf_url}#page=${n})`).join(' · ')}\n\n核读章节：${p.evidence.sections.map(mdText).join(' · ')}\n\n${mdText(p.evidence.note)}\n`;
    }
  }
  await writeFile(`content/papers/${slug}.md`, index);
  await writeFile(`public${base}notes.md`, markdown);
  await copyFile(source, `public/data/${slug}.json`);
  const css = await readFile('app/globals.css', 'utf8');
  await writeFile(
    `public${base}reading.css`,
    css +
      `\n.page{max-width:864px}.reading-meta{font-size:12px;color:var(--muted);line-height:1.8}.paper-links,.reading-toc{display:flex;flex-wrap:wrap;gap:10px 22px;font-size:13px;color:var(--accent)}.reading-toc{padding:16px 0;border-block:1px solid var(--line);margin:28px 0 36px}.reading-status{padding:14px 18px;background:var(--code);color:var(--muted);font-size:13px}.prose li{margin-bottom:18px}.reading-sources{color:var(--muted);font-size:13px;border-top:1px solid var(--line);margin-top:40px}.reading-sources h2{font-size:18px}.source-pages{display:flex;flex-wrap:wrap;gap:8px}.reading-adjacent{display:grid;grid-template-columns:1fr 1fr;gap:32px;border-top:1px solid var(--line);padding-top:28px;margin-top:36px;font-size:13px;line-height:1.65}.reading-adjacent a{display:flex;flex-direction:column;gap:8px}.reading-adjacent small{color:var(--muted)}.reading-adjacent a:last-child{text-align:right}.reading-footer{display:flex;gap:24px;margin-top:48px;font-size:12px;color:var(--muted)}@media(max-width:600px){.reading-adjacent{gap:20px}.reading-toc{gap:10px 18px}}\n`,
  );
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
    DETAILED: detailed,
  }))
    explorer = explorer.replaceAll(`__${key}__`, String(value));
  await writeFile(`public${base}explorer/index.html`, explorer);
  console.log(
    `Prepared ${papers.length} reading pages (${detailed} detailed), index, Markdown, explorer and JSON.`,
  );
}
