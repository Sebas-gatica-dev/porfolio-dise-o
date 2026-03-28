"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationLinks } from "@/lib/site-data";

import { useTheme } from "@/components/ThemeProvider";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 3.5V1.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 22.2V20.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M20.5 12h1.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M1.8 12h1.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M18.3 5.7L19.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4.5 19.5L5.7 18.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M18.3 18.3L19.5 19.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4.5 4.5L5.7 5.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.8 14.6a7.9 7.9 0 1 1-10.4-10 8.5 8.5 0 1 0 10.4 10Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const { toggleTheme } = useTheme();

  return (
    <header className="site-header">
      <div className="site-width site-header__inner">
        <div className="site-header__row">
          <Link href="/" aria-label="Ir al inicio" className="site-logo">
            <Image
              src="/logos/signature-black.svg"
              alt=""
              width={138}
              height={42}
              priority
              className="site-logo__mark site-logo__mark--light"
            />
            <Image
              src="/logos/signature-white.svg"
              alt=""
              width={138}
              height={42}
              priority
              className="site-logo__mark site-logo__mark--dark"
            />
          </Link>

          <div className="site-header__actions">
            <nav className="site-nav" aria-label="Navegacion principal">
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

            <button
              type="button"
              className="theme-toggle"
              aria-label="Cambiar tema"
              onClick={toggleTheme}
            >
              <span className="theme-toggle__icons" aria-hidden="true">
                <span className="theme-icon theme-icon--sun">
                  <SunIcon />
                </span>
                <span className="theme-icon theme-icon--moon">
                  <MoonIcon />
                </span>
              </span>
            </button>
          </div>
        </div>

        <div className="site-header__line" />
      </div>
    </header>
  );
}
