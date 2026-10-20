import type { Metadata } from 'next';
import 'katex/dist/katex.min.css';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://boran002.github.io'),
  title: { default: 'Notes · Riven Zhang', template: '%s · Riven Zhang' },
  description: 'Riven Zhang 的笔记。',
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
            <a href="/">Riven Zhang</a>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
