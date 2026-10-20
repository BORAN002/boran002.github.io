'use client';
import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  BookOpen,
  ChevronRight,
  FileText,
  CodeXml as Github,
  Home,
  Mail,
  Menu,
  Moon,
  Search,
  Sun,
  X,
  Rss,
  PanelLeftClose,
  PanelLeftOpen,
} from 'lucide-react';
import type { Entry } from '@/lib/content';
type SearchEntry = Omit<Entry, 'html' | 'toc'>;
type Props = {
  children: React.ReactNode;
  active?: string;
  aside?: React.ReactNode;
  entries: SearchEntry[];
  article?: boolean;
};
export function Shell({
  children,
  active = '/',
  aside,
  entries,
  article = false,
}: Props) {
  const [theme, setTheme] = useState('light'),
    [menu, setMenu] = useState(false),
    [focus, setFocus] = useState(false),
    [query, setQuery] = useState('');
  const dialog = useRef<HTMLDialogElement>(null),
    searchInput = useRef<HTMLInputElement>(null);
  useEffect(() => {
    setTheme(document.documentElement.dataset.theme ?? 'light');
    function keyboard(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        dialog.current?.showModal();
        searchInput.current?.focus();
      }
      if (event.key === 'Escape') setMenu(false);
    }
    document.addEventListener('keydown', keyboard);
    return () => document.removeEventListener('keydown', keyboard);
  }, []);
  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('notebook-theme', next);
    } catch {
      /* Theme works without storage. */
    }
  }
  function openSearch() {
    dialog.current?.showModal();
    searchInput.current?.focus();
  }
  const matches = entries.filter((entry) =>
    `${entry.title} ${entry.description} ${entry.tags.join(' ')} ${entry.text}`
      .toLowerCase()
      .includes(query.trim().toLowerCase()),
  );
  const nav = [
    { href: '/', label: '首页', sub: 'Home', icon: Home },
    { href: '/blog/', label: '博客', sub: 'Blog', icon: BookOpen },
    { href: '/notes/', label: '笔记', sub: 'Notes', icon: FileText },
  ];
  return (
    <div className={`notebook ${focus ? 'focus-mode' : ''}`}>
      <a className="skip-link" href="#main">
        跳至正文
      </a>
      <header className="mobile-header">
        <a href="/" className="mobile-brand">
          Riven<span> / notebook</span>
        </a>
        <div className="toolbar">
          <button
            className="icon-button"
            onClick={openSearch}
            aria-label="搜索文章"
          >
            <Search size={18} />
          </button>
          <button
            className="icon-button"
            onClick={() => setMenu(!menu)}
            aria-expanded={menu}
            aria-controls="sidebar"
            aria-label={menu ? '关闭导航' : '打开导航'}
          >
            {menu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>
      {menu && (
        <button
          className="nav-backdrop"
          aria-label="关闭导航遮罩"
          onClick={() => setMenu(false)}
        />
      )}
      <div className="site-grid">
        <aside className={`sidebar ${menu ? 'is-open' : ''}`} id="sidebar">
          <a href="/" className="brand" aria-label="Riven Zhang 首页">
            <span className="brand-mark">
              r<span>.</span>
            </span>
            <span className="brand-name">
              Riven Zhang<span>A personal notebook</span>
            </span>
          </a>
          <p className="sidebar-intro">学习的切片，思考的留痕。</p>
          <button className="search-trigger" onClick={openSearch}>
            <Search size={16} />
            <span>搜索文章与笔记</span>
            <kbd>⌘ K</kbd>
          </button>
          <div className="sidebar-label">EXPLORE / 探索</div>
          <nav className="primary-nav" aria-label="主导航">
            {nav.map(({ href, label, sub, icon: Icon }) => (
              <a
                key={href}
                href={href}
                aria-current={active === href ? 'page' : undefined}
              >
                <Icon size={17} />
                <span>{label}</span>
                <small>{sub}</small>
                {active === href && <span className="active-dot" />}
              </a>
            ))}
          </nav>
          <div className="sidebar-collection">
            <div className="sidebar-label">PAGES / 页面</div>
            <a href="/about/">
              <span>关于这个小站</span>
              <ArrowUpRight size={14} />
            </a>
            <a href="/tags/">
              <span>标签索引</span>
              <ArrowUpRight size={14} />
            </a>
            <a href="/pelican-cycling.html">
              <span>去海边兜风</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
          {entries.length > 0 && (
            <div className="sidebar-recent">
              <div className="sidebar-label">RECENT / 最近写下</div>
              {entries.slice(0, 4).map((entry) => (
                <a key={entry.url} href={entry.url}>
                  <ChevronRight size={13} />
                  <span>{entry.title}</span>
                </a>
              ))}
            </div>
          )}
          <div className="sidebar-bottom">
            <div className="social-links">
              <a href="https://github.com/BORAN002" aria-label="GitHub">
                <Github size={17} />
              </a>
              <a href="mailto:BORAN002@e.ntu.edu.sg" aria-label="邮件联系">
                <Mail size={17} />
              </a>
              <a href="/feed.xml" aria-label="RSS 订阅">
                <Rss size={16} />
              </a>
              <button
                onClick={toggleTheme}
                className="icon-button theme-button"
                aria-label={theme === 'dark' ? '切换浅色模式' : '切换深色模式'}
              >
                {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
              </button>
            </div>
            <span className="sidebar-signoff">保持好奇，慢慢积累。</span>
          </div>
        </aside>
        <div className="content-column">
          <main id="main" tabIndex={-1}>
            {children}
          </main>
          <footer className="site-footer">
            <span>© {new Date().getFullYear()} Riven Zhang</span>
            <span>把日子，骑慢一点。</span>
            <a href="/feed.xml">
              RSS <ArrowUpRight size={12} />
            </a>
          </footer>
        </div>
        <aside className="right-sidebar" aria-label="页面补充信息">
          {aside}
        </aside>
      </div>
      {article && (
        <button
          className="focus-toggle"
          aria-pressed={focus}
          onClick={() => setFocus(!focus)}
        >
          {focus ? <PanelLeftOpen size={16} /> : <PanelLeftClose size={16} />}
          <span>{focus ? '退出专注阅读' : '专注阅读'}</span>
        </button>
      )}
      <dialog
        ref={dialog}
        className="search-dialog"
        aria-labelledby="search-title"
        onClick={(event) => {
          if (event.target === dialog.current) dialog.current?.close();
        }}
      >
        <div className="search-dialog-heading">
          <h2 id="search-title">搜索文章与笔记</h2>
          <button
            className="icon-button"
            aria-label="关闭搜索"
            onClick={() => dialog.current?.close()}
          >
            <X size={20} />
          </button>
        </div>
        <div className="search-field">
          <Search size={20} />
          <input
            ref={searchInput}
            aria-label="搜索关键词"
            placeholder="输入标题、关键词或正文…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <kbd>ESC</kbd>
        </div>
        <p className="search-count" aria-live="polite">
          {query ? `找到 ${matches.length} 篇内容` : '从最近的记录开始'}
        </p>
        <div className="search-results">
          {matches.length ? (
            matches.slice(0, 30).map((entry) => (
              <a key={entry.url} href={entry.url}>
                <span className="entry-kind">
                  {entry.kind === 'blog' ? 'BLOG' : 'NOTE'}
                </span>
                <strong>{entry.title}</strong>
                <p>{entry.description}</p>
                <span className="search-date">{entry.date}</span>
              </a>
            ))
          ) : (
            <div className="empty-search">
              <Search size={25} />
              <p>没有找到相关内容</p>
              <span>试试其他关键词，或浏览全部文章。</span>
              <button onClick={() => setQuery('')}>清除搜索</button>
            </div>
          )}
        </div>
      </dialog>
    </div>
  );
}
