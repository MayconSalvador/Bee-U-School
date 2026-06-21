import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmpresasHero from "@/components/empresas/EmpresasHero";
import EmpresasBenefits from "@/components/empresas/EmpresasBenefits";
import EmpresasCTABanner from "@/components/empresas/EmpresasCTABanner";
import EmpresasFAQ from "@/components/empresas/EmpresasFAQ";

const Empresas = () => {
  return (
    <div className="min-h-screen w-full bg-background">
      <Header />
      <EmpresasHero />
      <EmpresasBenefits />
      <EmpresasCTABanner />
      <EmpresasFAQ />
      <Footer />
    </div>
  );
};

export default Empresas;
