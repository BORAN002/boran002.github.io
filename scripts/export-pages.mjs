import { cp, mkdir, rm, access, readFile, writeFile } from 'node:fs/promises';
const entries = JSON.parse(await readFile('content/generated.json', 'utf8'));
const paths = [
  '/',
  '/notes/',
  '/blog/',
  '/papers/',
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
// Preserve article bookmarks after moving the literature collection to Papers.
const legacyPath = '/notes/agent-tool-use-2026/';
const destination = '/papers/agent-tool-use-2026/';
await mkdir('docs' + legacyPath, { recursive: true });
await writeFile(
  'docs' + legacyPath + 'index.html',
  `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0;url=${destination}"><link rel="canonical" href="https://boran002.github.io${destination}"><title>文献笔记已迁至 Papers</title></head><body><main><p>文献笔记已迁至 Papers。</p><a href="${destination}">打开文献笔记</a></main><script>location.replace(${JSON.stringify(destination)} + location.search + location.hash)</script></body></html>`,
);
const canonicalPaths = [...paths, '/papers/agent-tool-use-2026/explorer/'];
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
await writeFile('docs/.nojekyll', '');
console.log(
  `Exported ${paths.length} pages, the paper explorer and a legacy article redirect.`,
);
