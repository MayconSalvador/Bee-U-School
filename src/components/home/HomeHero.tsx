import { ArrowRight, Star, TrendingUp, Check } from "lucide-react";
import heroExecutive from "@/assets/home-hero-executive.png";

const HomeHero = () => {
  return (
    <section className="w-full bg-[linear-gradient(to_bottom,hsl(213,60%,97%),hsl(0,0%,100%))] px-6 md:px-[80px] lg:px-[160px] pt-[80px] pb-[60px]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-12 items-center">
        {/* Texto */}
        <div className="max-w-[600px]">
          <h1 className="text-[40px] md:text-[52px] font-black leading-[1.1] text-foreground">
            Conversação Real.{" "}
            <br />
            <span className="text-navy">
              Professores de
              <br />
              Verdade.
            </span>{" "}
            Sem
            <br />
            Algoritmos.
          </h1>

          <p className="mt-8 text-muted-foreground text-base leading-relaxed max-w-[480px]">
            Enquanto outras plataformas oferecem múltiplas abordagens (IA, material físico, apps), a Bee U se especializa em{" "}
            <strong className="text-navy">UM método comprovado: conversação com professores especializados.</strong>
          </p>

          <p className="mt-6 text-navy font-bold text-base">
            Sem atalhos. Sem distrações. Apenas fala.
          </p>

          <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-[420px]">
            Como as crianças aprendem: falam primeiro, escrevem depois. A Bee U replica esse método natural com especialistas em conversação.
          </p>

          <div className="mt-8 space-y-3">
            {[
              "Professores especializados em conversação profissional",
              "Método comunicativo + IA adaptativa",
              "98% dos alunos falam com confiança em 6 meses",
            ].map((t) => (
              <div key={t} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-gold flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-gold" />
                </div>
                <p className="text-foreground text-sm font-medium">{t}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-10 flex-wrap">
            <button
              onClick={() => document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-navy text-primary-foreground font-semibold px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-navy-dark transition-colors text-sm"
            >
              Conversar com um Professor de Verdade - Teste Grátis <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-navy text-navy font-semibold px-6 py-4 rounded-lg flex items-center gap-2 hover:bg-secondary transition-colors text-sm">
              <ArrowRight className="w-4 h-4" /> Ver como Funciona
            </button>
          </div>
        </div>

        {/* Imagem */}
        <div className="relative w-full max-w-[520px] justify-self-center lg:justify-self-end">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
            <img
              src={heroExecutive}
              alt="Executiva sorrindo em escritório com vista da cidade ao pôr do sol"
              className="w-full h-full object-cover"
            />

            {/* Rating badge */}
            <div className="absolute top-4 right-4 bg-background/95 backdrop-blur rounded-xl shadow-lg p-3 border border-border">
              <div className="flex gap-0.5 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground font-bold text-sm">4.9 / 5.0</p>
              <p className="text-muted-foreground text-[10px]">+1.200 avaliações</p>
            </div>

            {/* Progresso badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-background rounded-xl shadow-md px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-light-blue rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-navy" />
              </div>
              <div>
                <p className="text-muted-foreground text-[11px]">Progresso Semanal</p>
                <p className="text-navy font-bold text-sm">+340% Mais rápido</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
