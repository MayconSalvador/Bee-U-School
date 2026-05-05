import { ArrowRight } from "lucide-react";
import parisBg from "@/assets/home-cta-paris.png";

const HomeCTABanner = () => {
  return (
    <section className="w-full relative">
      <div
        className="w-full h-[500px] relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${parisBg})` }}
      >
        {/* Overlay azul marinho */}
        <div className="absolute inset-0 bg-navy/75" />

        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-[80px] lg:px-[160px]">
          <h2 className="text-[36px] md:text-[44px] font-bold text-primary-foreground leading-tight max-w-[650px]">
            O mundo é muito grande para você ficar preso na{" "}
            <span className="text-gold">barreira do idioma.</span>
          </h2>
          <p className="mt-6 text-primary-foreground/85 text-base leading-relaxed max-w-[520px]">
            Imagine a sensação de entrar em uma sala de reunião e conduzir a apresentação em inglês com total naturalidade. O inglês não é apenas um idioma. É o seu passaporte para a liberdade.
          </p>
          <div className="mt-8">
            <button
              onClick={() => document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gold text-navy font-bold px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-gold-light transition-colors text-sm"
            >
              Quero essa liberdade <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTABanner;
