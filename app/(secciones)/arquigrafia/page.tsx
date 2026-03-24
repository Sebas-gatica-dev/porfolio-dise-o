import PortfolioSectionPage from "@/components/PortfolioSectionPage";
import { portfolioSections } from "@/lib/site-data";

export default function ArquigrafiaPage() {
  return (
    <div className="site-width">
      <PortfolioSectionPage section={portfolioSections[4]} />
    </div>
  );
}
