import { Quote } from "lucide-react";

const EmpresasTestimonials = () => {
  return (
    <section className="w-full bg-light-blue px-6 md:px-[80px] lg:px-[160px] py-16">
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-block bg-background text-navy text-[11px] font-semibold tracking-wider px-4 py-1.5 rounded-full">
          DEPOIMENTOS
        </span>
        <h2 className="mt-5 text-[26px] md:text-[32px] font-bold text-foreground leading-tight">
          Veja as empresas que aceleraram suas
          <br className="hidden md:block" /> equipes com a Bee U.
        </h2>
      </div>

      <div className="mt-10 max-w-4xl mx-auto bg-background rounded-2xl p-8 md:p-12 shadow-sm">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-24 h-24 rounded-full bg-navy flex-shrink-0 flex items-center justify-center text-primary-foreground font-black">
            LOGO
          </div>
          <div className="flex-1">
            <Quote className="w-8 h-8 text-gold mb-3" />
            <p className="text-foreground text-base leading-relaxed">
              "Saber o que mais entra em um negócio? ... As clientes."
            </p>
            <div className="mt-6 border-t border-border pt-4">
              <p className="font-bold text-foreground">Matheus Ellen</p>
              <p className="text-muted-foreground text-sm">Head Marketing</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-navy" />
        <span className="w-2 h-2 rounded-full bg-border" />
        <span className="w-2 h-2 rounded-full bg-border" />
      </div>
    </section>
  );
};

export default EmpresasTestimonials;
