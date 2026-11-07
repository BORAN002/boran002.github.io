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
        <span>
          Fieldnotes<span className="brand-dot">.</span>
        </span>
      </a>
      <Navigation />
      <div className="header-actions">
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
        <a
          className="source-link"
          href="https://github.com/BORAN002/boran002.github.io"
        >
          GitHub ↗
        </a>
      </div>
    </header>
  );
}
