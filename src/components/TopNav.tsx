"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/portfolio";

export function TopNav() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Assadavoot portfolio home">
        <span className="brand-mark">A</span>
        <span className="brand-text">ART.DEV</span>
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link key={item.href} href={item.href} className={isActive ? "nav-link is-active" : "nav-link"}>
              <Icon size={16} aria-hidden="true" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
