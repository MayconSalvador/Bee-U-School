import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KidsHero from "@/components/kids/KidsHero";
import KidsReasons from "@/components/kids/KidsReasons";
import KidsMethodology from "@/components/kids/KidsMethodology";
import KidsBenefits from "@/components/kids/KidsBenefits";
import KidsCTABanner from "@/components/kids/KidsCTABanner";
import KidsFAQ from "@/components/kids/KidsFAQ";

const ParaSeuFilho = () => {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <KidsHero />
      <KidsReasons />
      <KidsMethodology />
      <KidsBenefits />
      <KidsCTABanner />
      <KidsFAQ />
      <Footer />
    </div>
  );
};

export default ParaSeuFilho;
