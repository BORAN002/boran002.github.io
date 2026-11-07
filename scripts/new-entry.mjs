import { readFile, writeFile, mkdir } from 'node:fs/promises';

const [kind, slug, title] = process.argv.slice(2);
const directories = { note: 'notes', blog: 'blog', paper: 'papers' };
if (kind === '--help') {
  console.log('npm run new -- <note|blog|paper> <lowercase-slug> "Title"');
  process.exit(0);
}
if (
  !Object.hasOwn(directories, kind) ||
  !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug ?? '') ||
  slug === 'index' ||
  !title?.trim()
) {
  throw new Error(
    'Usage: npm run new -- <note|blog|paper> <lowercase-slug> "Title"',
  );
}
const date = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Asia/Singapore',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
}).format(new Date());
const template = await readFile(`content/templates/${kind}.md`, 'utf8');
const content = template
  .replace('{{title}}', JSON.stringify(title.trim()))
  .replaceAll('{{date}}', date);
const path = `content/${directories[kind]}/${slug}.md`;
await mkdir(`content/${directories[kind]}`, { recursive: true });
await writeFile(path, content, { flag: 'wx' });
console.log(`Created draft: ${path}`);
