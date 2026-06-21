import { ArrowRight, Sparkles, Star, Heart } from "lucide-react";
import { WHATSAPP_URL } from "@/config/contact";
import kidsHero from "@/assets/kids-hero.jpg";

const KidsHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--gradient-kids)] px-6 md:px-[80px] lg:px-[160px] pt-[80px] pb-[80px]">
      {/* Floating decorations */}
      <div className="pointer-events-none absolute top-12 left-[8%] w-16 h-16 rounded-full bg-gold/40 blur-2xl" />
      <div className="pointer-events-none absolute bottom-20 right-[6%] w-24 h-24 rounded-full bg-kids-bubble blur-2xl" />
      <Star className="absolute top-24 right-[20%] w-6 h-6 text-gold fill-gold animate-bounce-slow" />
      <Sparkles className="absolute bottom-32 left-[10%] w-7 h-7 text-navy/60 animate-wiggle" />
      <Heart className="absolute top-1/2 right-[8%] w-5 h-5 text-kids-bubble fill-current" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur text-navy text-xs font-bold tracking-wider px-4 py-2 rounded-full mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-gold" />
            NOVIDADE • BEE U KIDS
          </div>
          <h1 className="text-[40px] md:text-[52px] font-black leading-[1.05] text-foreground">
            Aprender inglês <br />
            pode ser tão <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-navy">divertido</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-gold/60 -z-0 rounded-full" />
            </span>{" "}
            quanto brincar.
          </h1>
          <p className="mt-6 text-foreground/80 text-base leading-relaxed max-w-[480px]">
            Aulas ao vivo, professores que encantam e uma jornada lúdica criada
            especialmente para crianças de 6 a 14 anos. Aprendizado de verdade,
            do jeitinho que eles amam.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-10">
            <a
              href={WHATSAPP_URL}
              className="bg-navy text-primary-foreground font-bold px-8 py-4 rounded-full flex items-center gap-2 hover:bg-navy-dark transition-all hover:scale-105 shadow-lg shadow-navy/20 text-sm"
            >
              Aula Experimental Grátis <ArrowRight className="w-5 h-5" />
            </a>
            <button className="bg-gold text-navy font-bold px-6 py-4 rounded-full hover:bg-gold-light transition-all hover:scale-105 text-sm shadow-md">
              Ver Metodologia
            </button>
          </div>

          <div className="flex items-center gap-3 mt-8">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-background bg-gradient-to-br from-kids-sky to-kids-bubble flex items-center justify-center text-xs font-bold text-navy"
                >
                  {["A", "M", "L", "J"][i]}
                </div>
              ))}
            </div>
            <p className="text-xs text-foreground/70">
              <strong className="text-navy">+2.000 famílias</strong> já confiam na Bee U Kids
            </p>
          </div>
        </div>

        {/* Hero illustration */}
        <div className="relative h-[480px] flex items-center justify-center">
          {/* Big rounded photo card */}
          <div className="relative w-full max-w-[420px] aspect-square">
            <div className="absolute -top-4 -left-4 w-full h-full rounded-[40px] bg-gold rotate-[-4deg]" />
            <div className="absolute top-4 left-4 w-full h-full rounded-[40px] bg-navy rotate-[3deg]" />
            <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl border-4 border-background">
              <img
                src={kidsHero}
                alt="Crianças felizes aprendendo inglês online"
                width={1280}
                height={1280}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-2 sm:-right-6 bg-background rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2 animate-float">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-xl">
                🎉
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground font-medium">Diversão</p>
                <p className="text-sm font-black text-navy">100%</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-2 sm:-left-6 bg-background rounded-2xl shadow-xl px-4 py-3 animate-bounce-slow">
              <p className="text-[10px] text-muted-foreground font-medium">Idade ideal</p>
              <p className="text-base font-black text-navy">6 a 14 anos</p>
            </div>

            <div className="absolute top-1/2 -right-4 sm:-right-10 bg-navy text-primary-foreground rounded-2xl shadow-xl px-4 py-3 animate-float">
              <p className="text-3xl font-black text-gold leading-none">9/10</p>
              <p className="text-[10px] mt-1 leading-tight max-w-[100px]">
                vagas pedem inglês
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KidsHero;
