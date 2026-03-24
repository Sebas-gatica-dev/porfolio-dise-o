import PortfolioSectionPage from "@/components/PortfolioSectionPage";
import { portfolioSections } from "@/lib/site-data";

export default function UxUiPage() {
  return (
    <div className="site-width">
      <PortfolioSectionPage section={portfolioSections[0]} />
    </div>
  );
}
