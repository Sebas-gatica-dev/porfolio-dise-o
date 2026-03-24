import Link from "next/link";

import { BehanceIcon, LinkedInIcon } from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-width">
        <div className="site-footer__line" />

        <div className="site-footer__content">
          <p>©2026 Sg.dev. Todos los derecho reservados</p>

          <div className="site-footer__socials" aria-label="Redes sociales">
            <Link href="https://www.behance.net/" target="_blank" rel="noreferrer">
              <BehanceIcon />
            </Link>
            <Link href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
