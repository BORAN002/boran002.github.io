const navigation = [
  ['notes', 'Note'],
  ['blog', 'Blog'],
  ['papers', 'Paper'],
  ['about', 'About'],
];
const esc = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        char
      ],
  );

export function siteHeader(active = 'papers') {
  return `<header class="site-header"><a class="site-home" href="/" aria-label="首页"><img src="/favicon.svg" width="32" height="32" alt=""><span>Home</span></a><nav class="site-nav" aria-label="栏目导航">${navigation.map(([path, title]) => `<a href="/${path}/" data-key="[${title[0]}]"${path === active ? ' aria-current="page"' : ''}>${title}</a>`).join('')}</nav><a class="source-link" href="https://github.com/BORAN002/boran002.github.io">GitHub ↗</a></header>`;
}

export function siteFooter() {
  return `<footer class="site-footer"><div><a class="footer-title" href="/">Note, Blog &amp; Paper</a><p>AI · Agent · Insight · Method</p></div><nav aria-label="页脚导航">${navigation.map(([path, title]) => `<a href="/${path}/">${title}</a>`).join('')}<a href="https://github.com/BORAN002/boran002.github.io">GitHub ↗</a></nav></footer>`;
}

export function readingContents(items) {
  const links = `<nav class="toc-links" aria-label="章节目录">${items.map(([id, title]) => `<a href="#${esc(id)}">${esc(title)}</a>`).join('')}</nav>`;
  return `<aside class="contents"><div class="contents-desktop"><div class="toc-label">Contents <span>本页目录</span></div>${links}<a class="back-to-top" href="#main">↑ Back to top</a></div><details class="contents-mobile"><summary>Contents <span>查看目录 · ${items.length}</span></summary>${links}</details></aside>`;
}
