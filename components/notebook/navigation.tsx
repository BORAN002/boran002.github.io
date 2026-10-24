'use client';
import { usePathname } from 'next/navigation';
export function Navigation() {
  const pathname = usePathname();
  return (
    <nav aria-label="栏目导航" className="site-nav">
      {['Notes', 'Blog', 'Papers'].map((label) => {
        const href = `/${label.toLowerCase()}/`;
        const active =
          pathname === href.slice(0, -1) || pathname.startsWith(href);
        return (
          <a key={href} href={href} aria-current={active ? 'page' : undefined}>
            {label}
          </a>
        );
      })}
    </nav>
  );
}
