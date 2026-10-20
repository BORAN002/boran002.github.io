import { cp, mkdir, rm, access, readFile, writeFile } from 'node:fs/promises';
const entries = JSON.parse(await readFile('content/generated.json', 'utf8'));
const paths = [
  '/',
  '/blog/',
  '/notes/',
  '/about/',
  '/tags/',
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
const base = 'https://boran002.github.io';
const xml = (value) =>
  value.replace(
    /[<>&"']/g,
    (c) =>
      ({
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&apos;',
      })[c],
  );
await writeFile(
  'docs/sitemap.xml',
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    paths.map((path) => `  <url><loc>${base}${path}</loc></url>`).join('\n') +
    '\n</urlset>\n',
);
await writeFile(
  'docs/feed.xml',
  '<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Riven Zhang · 博客与笔记</title><link>' +
    base +
    '</link><description>学习的切片，思考的留痕。</description><language>zh-CN</language><atom:link href="' +
    base +
    '/feed.xml" rel="self" type="application/rss+xml"/>' +
    entries
      .slice(0, 30)
      .map(
        (entry) =>
          `<item><title>${xml(entry.title)}</title><link>${base}${entry.url}</link><guid isPermaLink="true">${base}${entry.url}</guid><pubDate>${new Date(entry.date + 'T00:00:00+08:00').toUTCString()}</pubDate><description>${xml(entry.description)}</description>${entry.tags.map((tag) => `<category>${xml(tag)}</category>`).join('')}</item>`,
      )
      .join('') +
    '</channel></rss>\n',
);
await writeFile('docs/.nojekyll', '');
console.log(
  `GitHub Pages ready: ${paths.length} pages, RSS and sitemap. No legacy section exported.`,
);
