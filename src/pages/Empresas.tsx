import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmpresasHero from "@/components/empresas/EmpresasHero";
import EmpresasClients from "@/components/empresas/EmpresasClients";
import EmpresasTestimonials from "@/components/empresas/EmpresasTestimonials";
import EmpresasBenefits from "@/components/empresas/EmpresasBenefits";
import EmpresasCTABanner from "@/components/empresas/EmpresasCTABanner";
import EmpresasMetrics from "@/components/empresas/EmpresasMetrics";
import EmpresasFAQ from "@/components/empresas/EmpresasFAQ";

const Empresas = () => {
  return (
    <div className="min-h-screen w-full bg-background">
      <Header />
      <EmpresasHero />
      <EmpresasClients />
      <EmpresasTestimonials />
      <EmpresasBenefits />
      <EmpresasCTABanner />
      <EmpresasMetrics />
      <EmpresasFAQ />
      <Footer />
    </div>
  );
};

export default Empresas;
