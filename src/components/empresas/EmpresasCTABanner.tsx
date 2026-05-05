import { ArrowRight } from "lucide-react";

const EmpresasCTABanner = () => {
  return (
    <section className="w-full px-6 md:px-[80px] lg:px-[160px] py-10">
      <div className="bg-navy rounded-2xl px-8 md:px-14 py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <h3 className="text-primary-foreground text-[22px] md:text-[26px] font-bold leading-snug max-w-md">
          O Programa de idioma mais funcional para formar equipes fluentes em inglês
        </h3>
        <button className="bg-background text-navy font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-secondary transition-colors text-sm">
          Quero conhecer
          <span className="w-6 h-6 rounded-full bg-navy flex items-center justify-center">
            <ArrowRight className="w-3.5 h-3.5 text-primary-foreground" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default EmpresasCTABanner;
