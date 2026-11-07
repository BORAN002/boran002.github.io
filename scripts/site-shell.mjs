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
  return `<header class="site-header"><nav class="site-nav" aria-label="栏目导航">${navigation.map(([path, title]) => `<a href="/${path}/" data-key="[${title[0]}]"${path === active ? ' aria-current="page"' : ''}>${title}</a>`).join('')}</nav></header>`;
}

export function siteFooter() {
  return `<footer class="site-footer"><div><p class="footer-title">学习 · 实践 · 阅读</p><p>Insight &amp; Method</p></div><nav aria-label="页脚导航">${navigation.map(([path, title]) => `<a href="/${path}/">${title}</a>`).join('')}</nav><div class="footer-tools"><button class="motion-toggle" type="button" data-motion-toggle aria-pressed="false" aria-label="开启背景动效" disabled><span class="motion-icon" aria-hidden="true">✳</span><span data-motion-label>静态</span></button><a href="https://github.com/BORAN002/boran002.github.io">GitHub ↗</a></div></footer>`;
}

export function readingContents(items) {
  const links = `<nav class="toc-links" aria-label="章节目录">${items.map(([id, title]) => `<a href="#${esc(id)}">${esc(title)}</a>`).join('')}</nav>`;
  return `<aside class="contents"><div class="contents-desktop"><div class="toc-label">Contents <span>本页目录</span></div>${links}<a class="back-to-top" href="#main">↑ Back to top</a></div><details class="contents-mobile"><summary>Contents <span>查看目录 · ${items.length}</span></summary>${links}</details></aside>`;
}

export function siteAtmosphere() {
  return `<div class="ambient-scene" aria-hidden="true"><canvas data-ambient></canvas></div><script type="module" src="/scripts/atmosphere-standalone.js"></script>`;
}
