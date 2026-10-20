import { cp, mkdir, rm, access, readFile, writeFile } from 'node:fs/promises';
const entries = JSON.parse(await readFile('content/generated.json', 'utf8'));
const paths = ['/', '/notes/', ...entries.map((entry) => entry.url)];
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
const canonicalPaths = paths.filter((path) => path !== '/notes/');
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
console.log(`Exported Notes: ${paths.length} pages.`);
