import assert from 'node:assert/strict';
import { readFile, access, readdir } from 'node:fs/promises';
const read = (path) => readFile(path, 'utf8');
const entries = JSON.parse(await read('content/generated.json'));
assert.ok(
  entries.some(
    ({ section, slug }) =>
      section === 'papers' && slug === 'agent-tool-use-2026',
  ),
);
assert.ok(
  !entries.some(
    ({ section, slug }) =>
      section === 'notes' && slug === 'agent-tool-use-2026',
  ),
);
assert.ok(
  entries.every(
    ({ section, url }) =>
      ['notes', 'blog', 'papers'].includes(section) &&
      url.startsWith('/' + section + '/'),
  ),
);
const source = await read('content/data/agent-tool-use-2026.json');
assert.equal(await read('docs/data/agent-tool-use-2026.json'), source);
assert.equal(
  await read('docs/agent-tool-use-2026/agent-tool-use-2026.json'),
  source,
);
const legacyExplorer = await read('docs/agent-tool-use-2026/index.html');
assert.ok(legacyExplorer.includes('/papers/agent-tool-use-2026/explorer/'));
assert.ok(legacyExplorer.includes('location.search + location.hash'));
const papers = JSON.parse(source).papers;
const note = await read('docs/papers/agent-tool-use-2026/index.html');
const explorer = await read(
  'docs/papers/agent-tool-use-2026/explorer/index.html',
);
const embedded = explorer.slice(
  explorer.indexOf('const papers=') + 13,
  explorer.indexOf(';const $'),
);
assert.deepEqual(JSON.parse(embedded), papers);
assert.equal((note.match(/<h4 /g) || []).length, papers.length);
assert.equal(
  (note.match(/<strong>Idea：<\/strong>/g) || []).length,
  papers.length,
);
assert.ok(!note.includes('**Idea：**'));
assert.ok(
  (await read('docs/notes/agent-tool-use-2026/index.html')).includes(
    'location.hash',
  ),
);
if (!entries.some(({ section }) => section === 'blog'))
  assert.ok((await read('docs/blog/index.html')).includes('还没有发布文章。'));
for (const section of ['notes', 'blog', 'papers']) {
  const html = await read('docs/' + section + '/index.html');
  assert.ok(html.includes('aria-current="page"'));
}
const sitemap = await read('docs/sitemap.xml');
assert.ok(sitemap.includes('/papers/agent-tool-use-2026/explorer/'));
assert.ok(!sitemap.includes('/notes/agent-tool-use-2026/'));
assert.ok(
  !sitemap.includes('<loc>https://boran002.github.io/agent-tool-use-2026/'),
);
async function htmlFiles(path) {
  const files = [];
  for (const entry of await readdir(path, { withFileTypes: true })) {
    const name = path + '/' + entry.name;
    if (entry.isDirectory()) files.push(...(await htmlFiles(name)));
    else if (entry.name.endsWith('.html')) files.push(name);
  }
  return files;
}
for (const file of await htmlFiles('docs')) {
  const html = await read(file);
  assert.ok(
    !html.includes('https://github.com/BORAN002/agent-tool-use-2026'),
    'Stale repository link in ' + file,
  );
  assert.ok(
    !html.includes('https://boran002.github.io/agent-tool-use-2026/'),
    'Stale explorer link in ' + file,
  );
  for (const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
    const pathname = decodeURIComponent(match[1]);
    await access(
      'docs' + pathname + (pathname.endsWith('/') ? 'index.html' : ''),
    );
  }
}
console.log(
  'Export verified: all internal links resolve; catalog, article, explorer and downloads agree; legacy redirect and section indexes exist.',
);
