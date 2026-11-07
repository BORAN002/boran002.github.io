import type { Metadata } from 'next';
import { Navigation } from '@/components/notebook/navigation';
import 'katex/dist/katex.min.css';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://boran002.github.io'),
  title: {
    default: 'Note, Blog & Paper',
    template: '%s · Note, Blog & Paper',
  },
  description: '学习记录、博客与论文笔记。',
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        <a className="skip-link" href="#main">
          跳至正文
        </a>
        <div className="page">
          <header className="site-header">
            <a href="/">Note, Blog &amp; Paper</a>
            <Navigation />
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
