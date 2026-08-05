import { ArrowRight, Star, TrendingUp } from "lucide-react";
import { WHATSAPP_URL } from "@/config/contact";

const Hero = () => {
  return (
    <section className="w-full bg-background px-4 md:px-8 lg:px-[160px] pt-[40px] md:pt-[60px] lg:pt-[80px] pb-[40px] md:pb-[60px] lg:pb-[60px] relative">
      <div className="max-w-[650px]">
        <h1 className="text-3xl md:text-4xl lg:text-[48px] font-black leading-[1.15] text-foreground">
          Mais que uma escola.{" "}
          <br />
          Um novo jeito de{" "}
          <br />
          <span className="text-navy">aprender idiomas</span>
        </h1>

        <p className="mt-6 md:mt-8 text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed max-w-[580px]">
          A Bee U nasceu para transformar a forma como as pessoas
          aprendem inglês. Com professores reais, aulas online e uma
          metodologia que coloca a conversa no centro de tudo.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8 md:mt-10">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-navy text-primary-foreground font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg flex items-center gap-2 hover:bg-navy-dark transition-colors text-sm md:text-base">
            Conheça a plataforma <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="border-2 border-navy text-navy font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg flex items-center gap-2 hover:bg-secondary transition-colors text-sm md:text-base">
            Fale com um professor <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
          </a>
        </div>
      </div>

      {/* Rating badge */}
      <div className="hidden lg:block absolute top-[100px] right-[180px] bg-background rounded-xl shadow-lg p-5 border border-border">
        <div className="flex gap-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-gold text-gold" />
          ))}
        </div>
        <p className="text-foreground font-bold text-xl">4.9 / 5.0</p>
        <p className="text-muted-foreground text-xs">+1.200 avaliações</p>
      </div>

      {/* Aulas ao Vivo badge */}
      <div className="absolute top-[300px] right-[140px] bg-secondary rounded-xl shadow-md px-6 py-4 flex items-center gap-3">
        <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center shadow-sm">
          <TrendingUp className="w-6 h-6 text-navy" />
        </div>
        <div>
          <p className="text-foreground font-bold text-base">Aulas ao vivo</p>
          <p className="text-muted-foreground text-sm">Fale, pratique, evolua.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
