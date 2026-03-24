import { FigmaIcon, InDesignIcon, PhotoshopIcon, IllustratorIcon, AfterEffectsIcon } from "@/components/SocialIcons";
import { aboutParagraphs, educationItems } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <div className="site-width info-page">
      <section className="info-page__hero">
        <h1>sobre mí</h1>
        {aboutParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section className="about-grid">
        <div className="about-column">
          <h2>formación academica</h2>

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
                  >
                    ver
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
