import Header from "@/components/Header";
import HomeHero from "@/components/home/HomeHero";
import HomeStats from "@/components/home/HomeStats";
import DifferentiatorsSection from "@/components/home/DifferentiatorsSection";
import JourneySection from "@/components/home/JourneySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import HomeCTABanner from "@/components/home/HomeCTABanner";
import FAQSection from "@/components/home/FAQSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <HomeHero />
      <HomeStats />
      <DifferentiatorsSection />
      <JourneySection />
      <TestimonialsSection />
      <HomeCTABanner />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Home;
