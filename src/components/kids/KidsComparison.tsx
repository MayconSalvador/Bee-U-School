import { Check, X } from "lucide-react";

const rows = [
  "Professores treinados em educação infantil",
  "Aulas ao vivo com conversação desde o início",
  "Material adaptado para cada faixa etária",
  "Relatórios de progresso para os pais",
  "Plataforma segura e sem propagandas",
  "Aulas de reposição sem custo adicional",
  "Suporte humano para a família",
];

const KidsComparison = () => {
  return (
    <section className="w-full bg-background px-6 md:px-[80px] lg:px-[160px] py-20">
      <div className="text-center mb-12 max-w-[680px] mx-auto">
        <p className="inline-block bg-kids-mint text-navy font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
          A diferença na prática
        </p>
        <h2 className="text-[32px] md:text-[42px] font-black text-navy leading-tight">
          Por que somos a{" "}
          <span className="relative inline-block">
            <span className="relative z-10">escolha certa</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-gold/50 -z-0 rounded-full" />
          </span>
        </h2>
      </div>

      <div className="max-w-[820px] mx-auto bg-background border-4 border-light-blue rounded-3xl overflow-hidden shadow-lg">
        <div className="grid grid-cols-3 bg-navy text-primary-foreground">
          <div className="p-5 font-bold text-sm">Características</div>
          <div className="p-5 font-bold text-sm text-center border-l border-navy-dark">
            Outras escolas
          </div>
          <div className="p-5 font-black text-sm text-center bg-gold text-navy">
            🐝 Bee U Kids
          </div>
        </div>
        {rows.map((row, idx) => (
          <div
            key={row}
            className={`grid grid-cols-3 ${idx % 2 === 0 ? "bg-background" : "bg-light-blue/40"}`}
          >
            <div className="p-5 text-foreground text-sm font-medium">{row}</div>
            <div className="p-5 flex justify-center border-l border-border">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <X className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
            <div className="p-5 flex justify-center border-l border-border bg-gold/10">
              <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center shadow-sm">
                <Check className="w-4 h-4 text-navy" strokeWidth={3} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KidsComparison;
