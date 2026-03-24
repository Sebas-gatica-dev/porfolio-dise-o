"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import type { PortfolioSection, ProjectCard } from "@/lib/site-data";

type PortfolioSectionPageProps = {
  section: PortfolioSection;
};

export default function PortfolioSectionPage({
  section,
}: PortfolioSectionPageProps) {
  const [activeProject, setActiveProject] = useState<ProjectCard | null>(null);

  useEffect(() => {
    if (!activeProject) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  return (
    <>
      <section className="portfolio-page">
        <header className="portfolio-page__header">
          <h1>{section.label}</h1>
          <p>{section.description}</p>
        </header>

        <div className="portfolio-page__grid">
          {section.projects.map((project) => (
            <button
              key={project.title}
              type="button"
              aria-label={project.title}
              className="project-frame"
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>
      </section>

      {activeProject ? (
        <div
          className="project-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <button
            type="button"
            className="project-modal__backdrop"
            aria-label="Cerrar modal"
            onClick={() => setActiveProject(null)}
          />

          <div className="project-modal__panel project-modal__panel--scrollable">
            <div className="project-modal__scroll custom-scrollbar">
              <div className="project-modal__header">
                <div>
                  <span className="project-modal__eyebrow">{section.label}</span>
                  <h2 id="project-modal-title" className="project-modal__title">
                    {activeProject.title}
                  </h2>
                </div>

                <button
                  type="button"
                  className="project-modal__close"
                  aria-label="Cerrar modal"
                  onClick={() => setActiveProject(null)}
                >
                  cerrar
                </button>
              </div>

              <div className="project-modal__intro">
                <div className="project-modal__meta">
                  <span>categoría: {section.label}</span>
                  <span>año: {activeProject.year}</span>
                  <span>cliente: {activeProject.client}</span>
                </div>

                <p className="project-modal__lead">{activeProject.subtitle}</p>
                <p className="project-modal__summary">{activeProject.overview}</p>
              </div>

              <div className="project-modal__cover">
                <Image
                  src={activeProject.imageSrc}
                  alt={activeProject.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 960px"
                  className="project-modal__cover-image"
                />
              </div>

              <div className="project-modal__body">
                {activeProject.modalSections.map((item) => (
                  <section key={item.title} className="project-modal__content-block">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
