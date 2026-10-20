'use client';
import { useEffect, useRef, useState } from 'react';
import type { Entry } from '@/lib/content';
import { Check, Link as LinkIcon } from 'lucide-react';
export function TableOfContents({ toc }: { toc: Entry['toc'] }) {
  const [active, setActive] = useState(toc[0]?.id ?? '');
  useEffect(() => {
    function update() {
      let current = toc[0]?.id ?? '';
      for (const heading of toc) {
        const element = document.getElementById(heading.id);
        if (element && element.getBoundingClientRect().top < 150)
          current = heading.id;
      }
      setActive(current);
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, [toc]);
  return (
    <div className="aside-block">
      <p className="aside-label">ON THIS PAGE</p>
      <h2>文章目录</h2>
      <nav className="aside-toc article-toc" aria-label="文章目录">
        {toc.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`${active === item.id ? 'current' : ''} ${item.depth === 3 ? 'nested' : ''}`}
            aria-current={active === item.id ? 'location' : undefined}
          >
            {item.title}
          </a>
        ))}
      </nav>
    </div>
  );
}
export function CopyLink() {
  const [state, setState] = useState('');
  return (
    <button
      className="copy-link"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(location.href);
          setState('链接已复制');
        } catch {
          setState('请从地址栏复制链接');
        }
      }}
    >
      {state === '链接已复制' ? <Check size={15} /> : <LinkIcon size={15} />}
      <span aria-live="polite">{state || '复制文章链接'}</span>
    </button>
  );
}
export function ArticleBody({ html }: { html: string }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const buttons: HTMLButtonElement[] = [];
    root.current?.querySelectorAll('pre').forEach((pre) => {
      const code = pre.querySelector('code');
      if (!code) return;
      const button = document.createElement('button');
      button.className = 'copy-code';
      button.textContent = '复制';
      button.setAttribute('aria-label', '复制代码');
      button.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(code.textContent ?? '');
          button.textContent = '已复制';
        } catch {
          button.textContent = '请手动选择复制';
        }
      });
      pre.appendChild(button);
      buttons.push(button);
    });
    return () => buttons.forEach((button) => button.remove());
  }, [html]);
  return (
    <div
      className="prose"
      ref={root}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
