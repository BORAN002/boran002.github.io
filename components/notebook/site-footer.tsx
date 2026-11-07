import { navigation } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <a className="footer-title" href="/">
          Note, Blog &amp; Paper
        </a>
        <p>AI · Agent · Insight · Method</p>
      </div>
      <nav aria-label="页脚导航">
        {navigation.map(({ title, href }) => (
          <a href={href} key={href}>
            {title}
          </a>
        ))}
        <a href="https://github.com/BORAN002/boran002.github.io">GitHub ↗</a>
      </nav>
    </footer>
  );
}
