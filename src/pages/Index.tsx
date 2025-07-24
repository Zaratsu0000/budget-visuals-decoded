import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PieChartsSection from "@/components/PieChartsSection";
import BudgetCards from "@/components/BudgetCards";
import SubsidiesSection from "@/components/SubsidiesSection";
import KeyHighlights from "@/components/KeyHighlights";
import TaxSection from "@/components/TaxSection";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <PieChartsSection />
      <BudgetCards />
      <SubsidiesSection />
      <KeyHighlights />
      <TaxSection />
      <ResourcesSection />
      <Footer />
    </div>
  );
};

export default Index;