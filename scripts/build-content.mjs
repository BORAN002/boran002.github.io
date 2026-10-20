import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import texmath from 'markdown-it-texmath';
import katex from 'katex';
import hljs from 'highlight.js';
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
const posts = [];
for (const kind of ['blog', 'notes']) {
  await mkdir(`content/${kind}`, { recursive: true });
  for (const file of (await readdir(`content/${kind}`))
    .filter((f) => f.endsWith('.md'))
    .sort()) {
    const { data, content } = matter(
      await readFile(`content/${kind}/${file}`, 'utf8'),
    );
    if (data.draft === true) continue;
    const slug = file.replace(/\.md$/, '');
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))
      throw new Error(`Use a lowercase URL slug: ${file}`);
    for (const key of ['title', 'description', 'date']) {
      if (typeof data[key] !== 'string' || !data[key].trim())
        throw new Error(`${file}: ${key} must be a quoted, nonempty string`);
    }
    for (const date of [data.date, data.updated].filter(Boolean)) {
      if (
        !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
        new Date(date).toISOString().slice(0, 10) !== date
      )
        throw new Error(`${file}: invalid date ${date}`);
    }
    if (
      data.tags &&
      (!Array.isArray(data.tags) ||
        data.tags.some((tag) => typeof tag !== 'string'))
    )
      throw new Error(`${file}: tags must be a list of strings`);
    const tokens = md.parse(content, {});
    const toc = [],
      ids = new Map();
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i].type !== 'heading_open') continue;
      if (tokens[i].tag === 'h1')
        throw new Error(`${file}: use ## headings; the title is already H1`);
      const title = (tokens[i + 1].children ?? [])
        .map((t) => t.content)
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
    const html = md.renderer.render(tokens, md.options, {});
    const text = content
      .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
      .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
      .replace(/[#*`>$]/g, '')
      .trim();
    const cjk = (text.match(/[\u3400-\u9fff]/g) ?? []).length;
    const words = text
      .replace(/[\u3400-\u9fff]/g, '')
      .split(/\s+/)
      .filter(Boolean).length;
    posts.push({
      slug,
      kind,
      title: data.title.trim(),
      description: data.description.trim(),
      date: data.date,
      updated: data.updated ?? data.date,
      tags: [...new Set(data.tags ?? [])],
      url: `/${kind}/${slug}/`,
      minutes: Math.max(1, Math.ceil(cjk / 350 + words / 220)),
      toc,
      html,
      text,
    });
  }
}
posts.sort(
  (a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug),
);
await writeFile(
  'content/generated.json',
  JSON.stringify(posts, null, 2) + '\n',
);
console.log(
  `Prepared ${posts.length} published articles. Drafts are excluded.`,
);
