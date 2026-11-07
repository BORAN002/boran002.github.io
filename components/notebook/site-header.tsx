import { Navigation } from './navigation';

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="site-home" href="/" aria-label="首页">
        <svg viewBox="0 0 64 64" width="32" height="32" aria-hidden="true">
          <path
            d="M16 10h32v44H16zM24 22h16M24 32h16M24 42h10"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Home</span>
      </a>
      <Navigation />
      <a
        className="source-link"
        href="https://github.com/BORAN002/boran002.github.io"
      >
        GitHub ↗
      </a>
    </header>
  );
}
