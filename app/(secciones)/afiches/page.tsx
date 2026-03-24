import PortfolioSectionPage from "@/components/PortfolioSectionPage";
import { portfolioSections } from "@/lib/site-data";

export default function AfichesPage() {
  return (
    <div className="site-width">
      <PortfolioSectionPage section={portfolioSections[3]} />
    </div>
  );
}
