import { ArrowRight, Star, TrendingUp } from "lucide-react";
import { WHATSAPP_URL } from "@/config/contact";
import heroExecutive from "@/assets/home-hero-executive.png";

const HomeHero = () => {
  return (
    <section className="w-full bg-[linear-gradient(to_bottom,hsl(213,60%,97%),hsl(0,0%,100%))] px-6 md:px-[80px] lg:px-[160px] pt-[80px] pb-[60px]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-12 items-center">
        {/* Texto */}
        <div className="max-w-[600px]">
          <h1 className="text-[40px] md:text-[52px] font-black leading-[1.1] text-foreground">
            Inglês para <span className="text-navy">falar de verdade</span>
          </h1>

          <p className="mt-8 text-muted-foreground text-base leading-relaxed max-w-[480px]">
            Aulas individuais, ao vivo, com professores especializados em fonética e conversação.
          </p>

          <p className="mt-6 text-navy font-bold text-base">
            Sem atalhos. Sem distrações. Apenas fala.
          </p>

          <div className="mt-4 space-y-4 text-muted-foreground text-sm leading-relaxed max-w-[480px]">
            <p>
              Na Bee U, o aluno não aprende inglês apenas para responder exercícios ou memorizar frases.
            </p>
            <p>
              Ele aprende a ouvir, reconhecer e produzir os sons da língua para desenvolver uma fala mais natural, clara e confiante.
            </p>
            <p>
              Nossa metodologia foca onde a comunicação começa:
              <strong className="block mt-2 text-navy text-xl font-black">NO SOM.</strong>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy text-primary-foreground font-semibold px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-navy-dark transition-colors text-sm"
            >
              Conversar com um professor de verdade — teste grátis <ArrowRight className="w-5 h-5" />
            </a>
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
                  <Star key={i} className={`w-3.5 h-3.5 text-gold ${i < 4 ? "fill-gold" : "fill-none"}`} />
                ))}
              </div>
              <p className="text-foreground font-bold text-sm">4.0 / 5.0</p>
              <p className="text-muted-foreground text-[10px]">+1.200 avaliações</p>
            </div>

            {/* Progresso badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-background rounded-xl shadow-md px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-light-blue rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-navy" />
              </div>
              <div>
                <p className="text-muted-foreground text-[11px]">Progresso semanal</p>
                <p className="text-navy font-bold text-sm">100%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
