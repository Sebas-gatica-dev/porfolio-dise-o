"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { homeIntro, portfolioSections } from "@/lib/site-data";

function ArrowDownIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 15L12 9L18 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function animateScrollToY(targetY: number, duration = 400) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  const easeInOutCubic = (value: number) =>
    value < 0.5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2;

  const frame = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo({ top: startY + distance * eased });

    if (progress < 1) {
      window.requestAnimationFrame(frame);
    }
  };

  window.requestAnimationFrame(frame);
}

export default function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 520);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (slug: string) => {
    const target = document.getElementById(`home-section-${slug}`);

    if (!target) {
      return;
    }

    animateScrollToY(target.getBoundingClientRect().top + window.scrollY - 110, 400);
  };

  return (
    <>
      <div className="site-width home-page">
        <section className="hero">
          <div className="hero__content">
            <h1 className="hero__title">{homeIntro}</h1>

            <div className="hero__pills" aria-label="Categorias del portfolio">
              {portfolioSections.map((section) => (
                <button
                  key={section.slug}
                  type="button"
                  className="pill-link"
                  onClick={() => handleScrollToSection(section.slug)}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="hero__arrow"
            aria-label="Ir a las secciones"
            onClick={() => handleScrollToSection(portfolioSections[0].slug)}
          >
            <ArrowDownIcon />
          </button>
        </section>

        <section id="portfolio-sections" className="home-sections" aria-label="Secciones del portfolio">
          {portfolioSections.map((section) => (
            <Link
              key={section.slug}
              id={`home-section-${section.slug}`}
              href={`/${section.slug}`}
              className="section-preview"
            >
              <h2 className="section-preview__title">{section.label}</h2>
            </Link>
          ))}
        </section>
      </div>

      {showScrollTop ? (
        <button
          type="button"
          className="scroll-top-button"
          aria-label="Volver arriba"
          onClick={() => animateScrollToY(0, 500)}
        >
          <ArrowUpIcon />
        </button>
      ) : null}
    </>
  );
}
