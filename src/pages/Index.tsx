import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PieChartsSection from "@/components/PieChartsSection";
import BudgetCards from "@/components/BudgetCards";
import SubsidiesSection from "@/components/SubsidiesSection";
import KeyHighlights from "@/components/KeyHighlights";
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
      <ResourcesSection />
      <Footer />
    </div>
  );
};

export default Index;