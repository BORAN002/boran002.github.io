import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  FileText,
  CodeXml as Github,
  Mail,
} from 'lucide-react';
import { entries, searchEntries, formatDate, type Entry } from '@/lib/content';
import { Shell } from './shell';
export function SiteShell(props: {
  children: React.ReactNode;
  active?: string;
  aside?: React.ReactNode;
  article?: boolean;
}) {
  return <Shell {...props} entries={searchEntries} />;
}
export function PageTop({ label }: { label: string }) {
  return (
    <div className="page-top">
      <span>
        <a href="/">Riven&apos;s notebook</a>
        <span className="breadcrumb-separator">/</span>
        {label}
      </span>
      <span className="top-note">一点一滴，积累成篇</span>
    </div>
  );
}
export function EntryRow({ entry }: { entry: Entry }) {
  return (
    <a className="entry-row" href={entry.url}>
      <div className="entry-meta">
        <time dateTime={entry.date}>{formatDate(entry.date)}</time>
        <span>{entry.minutes} 分钟阅读</span>
      </div>
      <div className="entry-row-body">
        <div>
          <h3>{entry.title}</h3>
          <p>{entry.description}</p>
          <div className="entry-tags">
            {entry.tags.map((tag) => (
              <span key={tag}># {tag}</span>
            ))}
          </div>
        </div>
        <ArrowUpRight size={20} />
      </div>
    </a>
  );
}
export function HomeAside() {
  return (
    <>
      <div className="aside-block">
        <p className="aside-label">ON THIS PAGE</p>
        <h2>在这里</h2>
        <nav className="aside-toc" aria-label="首页目录">
          <a href="#hello">你好，欢迎来访</a>
          <a href="#writing">最近写下</a>
          <a href="#notebooks">学习笔记</a>
        </nav>
      </div>
      <div className="aside-block site-note">
        <div className="tiny-leaf" aria-hidden="true">
          ✳
        </div>
        <h2>一个慢慢生长的小站</h2>
        <p>记录学到的东西，也保留还没想明白的问题。</p>
        <a href="/about/">
          关于这里 <ArrowUpRight size={13} />
        </a>
      </div>
      <div className="aside-stats">
        <span>
          <b>
            {entries
              .filter((e) => e.kind === 'blog')
              .length.toString()
              .padStart(2, '0')}
          </b>
          篇博客
        </span>
        <span>
          <b>
            {entries
              .filter((e) => e.kind === 'notes')
              .length.toString()
              .padStart(2, '0')}
          </b>
          条笔记
        </span>
      </div>
      <p className="aside-footnote">WRITE. LEARN. REPEAT.</p>
    </>
  );
}
export function SectionTitle({
  label,
  title,
  href,
  linkLabel,
}: {
  label: string;
  title: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{label}</span>
        <h2>{title}</h2>
      </div>
      <a href={href}>
        {linkLabel}
        <ArrowRight size={15} />
      </a>
    </div>
  );
}
export function EmptyNotes() {
  return (
    <div className="empty-notes">
      <span className="empty-note-icon">
        <FileText size={25} strokeWidth={1.4} />
      </span>
      <div>
        <h3>下一次理解，从这里记起。</h3>
        <p>这里还没有公开笔记。读到的、试过的、想明白的，会慢慢收录在这里。</p>
      </div>
    </div>
  );
}
export function ContactLinks() {
  return (
    <div className="contact-links">
      <a href="https://github.com/BORAN002">
        <Github size={16} />
        GitHub
        <ArrowUpRight size={13} />
      </a>
      <a href="mailto:BORAN002@e.ntu.edu.sg">
        <Mail size={16} />
        Email
        <ArrowUpRight size={13} />
      </a>
    </div>
  );
}
export function IndexAside() {
  return (
    <>
      <div className="aside-block">
        <p className="aside-label">THE NOTEBOOK</p>
        <h2>两种记录方式</h2>
        <a className="aside-index-link" href="/blog/">
          <BookOpen size={16} />
          Blog
        </a>
        <p>把一个问题展开，写成一篇完整的文章。</p>
        <a className="aside-index-link" href="/notes/">
          <FileText size={16} />
          Notes
        </a>
        <p>留住片段、疑问和实践中的一点发现。</p>
      </div>
      <div className="aside-block">
        <h2>保持连接</h2>
        <p>通过 RSS 订阅，新文章会出现在你的阅读器里。</p>
        <a className="text-link" href="/feed.xml">
          订阅更新 <ArrowUpRight size={13} />
        </a>
      </div>
    </>
  );
}
