import { navigation } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-title">学习 · 实践 · 阅读</p>
        <p>Insight &amp; Method</p>
      </div>
      <nav aria-label="页脚导航">
        {navigation.map(({ title, href }) => (
          <a href={href} key={href}>
            {title}
          </a>
        ))}
      </nav>
      <div className="footer-tools">
        <button
          className="motion-toggle"
          type="button"
          data-motion-toggle=""
          aria-pressed="false"
          aria-label="开启背景动效"
          disabled
        >
          <span className="motion-icon" aria-hidden="true">
            ✳
          </span>
          <span data-motion-label="">静态</span>
        </button>
        <a href="https://github.com/BORAN002/boran002.github.io">GitHub ↗</a>
      </div>
    </footer>
  );
}
