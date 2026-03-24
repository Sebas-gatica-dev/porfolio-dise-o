import PortfolioSectionPage from "@/components/PortfolioSectionPage";
import { portfolioSections } from "@/lib/site-data";

export default function EditorialPage() {
  return (
    <div className="site-width">
      <PortfolioSectionPage section={portfolioSections[1]} />
    </div>
  );
}
