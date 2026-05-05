import { ArrowRight, Sparkles, Star } from "lucide-react";

const KidsCTABanner = () => {
  return (
    <section className="w-full px-6 md:px-[80px] lg:px-[160px] py-16">
      <div className="relative bg-navy rounded-[40px] px-8 md:px-12 py-14 overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-gold/20 blur-2xl" />
        <div className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full bg-kids-bubble/20 blur-3xl" />
        <Star className="absolute top-8 right-12 w-6 h-6 text-gold fill-gold animate-bounce-slow" />
        <Sparkles className="absolute bottom-10 left-12 w-7 h-7 text-gold animate-wiggle" />
        <div className="absolute top-1/2 left-[40%] text-4xl animate-float">🎈</div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-gold text-navy font-black text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
              🎁 Oferta especial
            </span>
            <h2 className="text-primary-foreground text-[28px] md:text-[36px] font-black leading-tight">
              Comece a aventura com{" "}
              <span className="text-gold">aula grátis!</span>
            </h2>
            <p className="text-primary-foreground/80 mt-4 text-base leading-relaxed">
              Mensalidades acessíveis, planos flexíveis e a primeira aula 100% gratuita para seu filho experimentar a Bee U Kids.
            </p>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-5">
            <div className="bg-background/10 backdrop-blur rounded-2xl px-6 py-4 border border-gold/30">
              <p className="text-gold/80 text-xs font-bold uppercase tracking-wider">A partir de</p>
              <p className="text-gold font-black text-4xl md:text-5xl">R$ 149<span className="text-lg">/mês</span></p>
            </div>
            <button
              onClick={() => document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gold text-navy font-black px-8 py-4 rounded-full flex items-center gap-2 hover:bg-gold-light hover:scale-105 transition-all text-sm shadow-xl"
            >
              Quero a Aula Grátis <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KidsCTABanner;
