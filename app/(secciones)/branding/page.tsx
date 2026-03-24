import PortfolioSectionPage from "@/components/PortfolioSectionPage";
import { portfolioSections } from "@/lib/site-data";

export default function BrandingPage() {
  return (
    <div className="site-width">
      <PortfolioSectionPage section={portfolioSections[2]} />
    </div>
  );
}
