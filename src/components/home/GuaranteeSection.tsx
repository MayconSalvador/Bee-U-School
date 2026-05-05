import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="w-full bg-light-blue py-[80px] px-[160px]">
      <div className="text-center mb-6">
        <span className="inline-block border border-navy/20 rounded-full px-4 py-1 text-sm text-navy mb-4">
          Risco zero
        </span>
      </div>
      <div className="flex items-center justify-center gap-16 max-w-[800px] mx-auto">
        <div className="w-[120px] h-[120px] bg-navy rounded-full flex items-center justify-center flex-shrink-0">
          <ShieldCheck className="w-14 h-14 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-[36px] font-bold text-foreground mb-4">
            Garantia de 15 Dias
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Comece sua jornada sem risco. Se não estiver satisfeito nos primeiros 15 dias, devolvemos 100% do seu dinheiro. Sem perguntas, sem complicações.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
