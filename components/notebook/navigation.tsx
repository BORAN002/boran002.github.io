'use client';
import { usePathname } from 'next/navigation';
import { navigation } from '@/lib/site';
export function Navigation() {
  const pathname = usePathname();
  return (
    <nav aria-label="栏目导航" className="site-nav">
      {navigation.map(({ title, href }) => {
        const active =
          pathname === href.slice(0, -1) || pathname.startsWith(href);
        return (
          <a key={href} href={href} aria-current={active ? 'page' : undefined}>
            {title}
          </a>
        );
      })}
    </nav>
  );
}
