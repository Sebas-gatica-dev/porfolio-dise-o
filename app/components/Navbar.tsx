"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationLinks } from "@/lib/site-data";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="site-width site-header__inner">
        <div className="site-header__row">
          <Link href="/" aria-label="Ir al inicio" className="site-logo" />

          <nav className="site-nav" aria-label="Navegación principal">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="site-header__line" />
      </div>
    </header>
  );
}
