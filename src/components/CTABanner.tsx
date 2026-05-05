import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="w-full px-[160px] py-[40px]">
      <div className="bg-navy rounded-2xl px-16 py-12 flex items-center justify-between">
        <div>
          <h2 className="text-primary-foreground text-[28px] font-bold mb-2">
            Chega de estudar sem falar.
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Comece hoje e descubra como é aprender de verdade.
          </p>
        </div>
        <button className="bg-gold text-navy font-bold px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-gold-light transition-colors text-lg">
          Teste Grátis <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default CTABanner;
