import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesCards from "@/components/FeaturesCards";
import EssenceSection from "@/components/EssenceSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <Hero />
      <FeaturesCards />
      <EssenceSection />
      <StatsSection />
      <AboutSection />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
