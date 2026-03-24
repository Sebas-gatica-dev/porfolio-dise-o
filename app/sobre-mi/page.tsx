import { FigmaIcon, InDesignIcon, PhotoshopIcon, IllustratorIcon, AfterEffectsIcon } from "@/components/SocialIcons";
import { aboutParagraphs, educationItems } from "@/lib/site-data";

function EyeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="1.5"
      className="education-eye-icon"
      aria-hidden="true"
    >
      <path
        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div className="site-width info-page">
      <section className="info-page__hero">
        <h1>sobre mi</h1>
        {aboutParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section className="about-grid">
        <div className="about-column">
          <h2>formacion academica</h2>

          <div className="education-list">
            {educationItems.map((item) => (
              <article key={item.title} className="education-item">
                <h3>{item.title}</h3>
                <p>{item.institution}</p>
                <span>{item.detail}</span>
                {item.meta ? <span>{item.meta}</span> : null}
                {item.certificateUrl ? (
                  <a
                    href={item.certificateUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="education-item__link"
                    aria-label="Ver certificado"
                  >
                    <EyeIcon />
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>

        <div className="about-column">
          <h2>aptitudes</h2>

          <div className="skills-row" aria-label="Herramientas y aptitudes">
            <InDesignIcon className="skill-badge" />
            <PhotoshopIcon className="skill-badge" />
            <AfterEffectsIcon className="skill-badge" />
            <IllustratorIcon className="skill-badge" />
            <FigmaIcon className="skill-icon skill-icon--figma" />
          </div>
        </div>
      </section>
    </div>
  );
}
