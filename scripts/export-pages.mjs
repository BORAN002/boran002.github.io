import {
  cp,
  mkdir,
  rm,
  access,
  readFile,
  writeFile,
  readdir,
} from 'node:fs/promises';
const sourceCatalog = JSON.parse(
  await readFile('content/data/agent-tool-use-2026.json', 'utf8'),
);
if (
  sourceCatalog.papers.some(
    (p) => !p.method || p.evidence?.basis !== 'full_text',
  ) &&
  process.env.PAPER_NOTES_PREVIEW !== '1'
) {
  throw new Error(
    'Detailed paper notes are incomplete. Set PAPER_NOTES_PREVIEW=1 only for a local preview.',
  );
}
const entries = JSON.parse(await readFile('content/generated.json', 'utf8'));
const dailyDir = 'content/daily-papers';
const dailyDates = (await readdir(dailyDir))
  .filter((name) => /^\d{4}-\d{2}-\d{2}\.json$/.test(name))
  .map((name) => name.slice(0, -5))
  .sort()
  .reverse();
const paths = [
  '/',
  '/notes/',
  '/blog/',
  '/papers/',
  '/papers/daily/',
  ...dailyDates.map((date) => '/papers/daily/' + date + '/'),
  '/about/',
  ...entries.map((entry) => entry.url),
];
const sourceFor = (path) =>
  path === '/'
    ? 'dist/client/index.html'
    : 'dist/client' + path.slice(0, -1) + '.html';
for (const path of paths) await access(sourceFor(path));
await rm('docs', { recursive: true, force: true });
await mkdir('docs', { recursive: true });
await cp('dist/client', 'docs', { recursive: true });
await cp('public/404.html', 'docs/404.html');
for (const path of paths) {
  if (path === '/') continue;
  await mkdir('docs' + path, { recursive: true });
  await cp(sourceFor(path), 'docs' + path + 'index.html');
  await rm('docs' + path.slice(0, -1) + '.html');
}
// These routes live in the main site so bookmarks survive removal of the old project repository.
const legacyRoutes = {
  '/notes/agent-tool-use-2026/': '/papers/agent-tool-use-2026/',
  '/agent-tool-use-2026/': '/papers/agent-tool-use-2026/explorer/',
};
for (const [legacyPath, destination] of Object.entries(legacyRoutes)) {
  await mkdir('docs' + legacyPath, { recursive: true });
  await writeFile(
    'docs' + legacyPath + 'index.html',
    `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0;url=${destination}"><link rel="canonical" href="https://boran002.github.io${destination}"><title>文献笔记已迁至 Paper</title></head><body><main><p>文献笔记已迁至 Paper。</p><a href="${destination}">打开文献笔记</a></main><script>location.replace(${JSON.stringify(destination)} + location.search + location.hash)</script></body></html>`,
  );
}
await cp(
  'docs/data/agent-tool-use-2026.json',
  'docs/agent-tool-use-2026/agent-tool-use-2026.json',
);
const catalog = JSON.parse(
  await readFile('content/data/agent-tool-use-2026.json', 'utf8'),
);
const canonicalPaths = [
  ...paths,
  '/papers/agent-tool-use-2026/explorer/',
  ...catalog.papers.map(
    (p) => `/papers/agent-tool-use-2026/reading/${p.id.toLowerCase()}/`,
  ),
];
await writeFile(
  'docs/sitemap.xml',
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    canonicalPaths
      .map(
        (path) => `  <url><loc>https://boran002.github.io${path}</loc></url>`,
      )
      .join('\n') +
    '\n</urlset>\n',
);
const dailyBase = 'https://boran002.github.io/papers/daily/';
const feedItems = [];
for (const day of dailyDates.slice(0, 30)) {
  const { papers } = JSON.parse(
    await readFile(dailyDir + '/' + day + '.json', 'utf8'),
  );
  const titles = papers
    .map((paper) => paper.title)
    .join(' · ')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
  const link = dailyBase + day + '/';
  feedItems.push(
    `<item><title>${day} 论文推送</title><link>${link}</link><guid>${link}</guid><pubDate>${new Date(day + 'T00:00:00Z').toUTCString()}</pubDate><description>${titles}</description></item>`,
  );
}
await writeFile(
  'docs/papers/daily/feed.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>每日 arXiv 论文推送</title><link>${dailyBase}</link><description>多模态论文，按 arXiv 公告日期归档。</description><language>zh-CN</language>${feedItems.join('\n')}</channel></rss>\n`,
);
await writeFile('docs/.nojekyll', '');
console.log(
  `Exported ${paths.length} pages, the paper explorer and legacy routes.`,
);
