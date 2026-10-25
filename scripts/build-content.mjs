import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import texmath from 'markdown-it-texmath';
import katex from 'katex';
import hljs from 'highlight.js';
import { buildPaperCatalog } from './build-paper-catalog.mjs';
await buildPaperCatalog();
const md = new MarkdownIt({
  html: false,
  linkify: true,
  highlight(code, lang) {
    return lang && hljs.getLanguage(lang)
      ? hljs.highlight(code, { language: lang }).value
      : '';
  },
}).use(texmath, {
  engine: katex,
  delimiters: 'dollars',
  katexOptions: { throwOnError: false, trust: false },
});
const entries = [];
for (const section of ['notes', 'blog', 'papers']) {
  await mkdir(`content/${section}`, { recursive: true });
  for (const file of (await readdir(`content/${section}`))
    .filter((file) => file.endsWith('.md'))
    .sort()) {
    const { data, content } = matter(
      await readFile(`content/${section}/${file}`, 'utf8'),
    );
    if (data.draft !== undefined && typeof data.draft !== 'boolean')
      throw new Error(`${file}: draft must be true or false`);
    if (data.showDate !== undefined && typeof data.showDate !== 'boolean')
      throw new Error(`${file}: showDate must be true or false`);
    if (data.draft === true) continue;
    const slug = file.replace(/\.md$/, '');
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || slug === 'index')
      throw new Error(`${file}: use a lowercase URL slug other than index`);
    for (const key of ['title', 'date']) {
      if (typeof data[key] !== 'string' || !data[key].trim())
        throw new Error(`${file}: ${key} must be a quoted, nonempty string`);
    }
    for (const date of [data.date, data.updated].filter(
      (value) => value !== undefined,
    )) {
      if (
        typeof date !== 'string' ||
        !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
        !Number.isFinite(Date.parse(date)) ||
        new Date(date).toISOString().slice(0, 10) !== date
      )
        throw new Error(`${file}: invalid date`);
    }
    if (data.description !== undefined && typeof data.description !== 'string')
      throw new Error(`${file}: description must be a string`);
    const tokens = md.parse(content, {}),
      toc = [],
      ids = new Map();
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i].type !== 'heading_open') continue;
      if (tokens[i].tag === 'h1')
        throw new Error(`${file}: use ## headings; the title is already H1`);
      const title = (tokens[i + 1].children ?? [])
        .map((token) => token.content)
        .join('');
      const base =
        title
          .toLowerCase()
          .replace(/[^\p{L}\p{N}]+/gu, '-')
          .replace(/^-|-$/g, '') || 'section';
      const count = (ids.get(base) ?? 0) + 1;
      ids.set(base, count);
      const id = count === 1 ? base : `${base}-${count}`;
      tokens[i].attrSet('id', id);
      if (['h2', 'h3'].includes(tokens[i].tag))
        toc.push({ id, title, depth: Number(tokens[i].tag.slice(1)) });
    }
    entries.push({
      slug,
      section,
      title: data.title.trim(),
      date: data.date,
      showDate: data.showDate ?? true,
      description: data.description?.trim() ?? '',
      updated: data.updated ?? data.date,
      url: `/${section}/${slug}/`,
      toc,
      html: md.renderer.render(tokens, md.options, {}),
    });
  }
}
entries.sort(
  (a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug),
);
await writeFile(
  'content/generated.json',
  JSON.stringify(entries, null, 2) + '\n',
);
console.log(
  `Prepared ${entries.length} entries across Notes, Blog and Papers. Drafts are excluded.`,
);
