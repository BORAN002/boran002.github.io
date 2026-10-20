import type { Metadata } from 'next';
import 'katex/dist/katex.min.css';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://boran002.github.io'),
  title: { default: 'Riven Zhang · 博客与笔记', template: '%s · Riven Zhang' },
  description:
    'Riven Zhang 的个人小站。写博客、整理学习笔记，记录一路上的思考。',
  alternates: { canonical: '/', types: { 'application/rss+xml': '/feed.xml' } },
  icons: { icon: '/favicon.svg' },
};
const themeScript = `try{var t=localStorage.getItem('notebook-theme');document.documentElement.dataset.theme=t==='light'||t==='dark'?t:matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'}catch(e){}`;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
