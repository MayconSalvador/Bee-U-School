const metrics = [
  "Dá pra ver as métricas assim",
  "assim",
  "e também assim",
];

const EmpresasMetrics = () => {
  return (
    <section className="w-full bg-light-blue px-6 md:px-[80px] lg:px-[160px] py-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-block bg-background text-navy text-[11px] font-semibold tracking-wider px-4 py-1.5 rounded-full">
          SIMPLES ASSIM
        </span>
        <h2 className="mt-5 text-[26px] md:text-[32px] font-bold text-foreground leading-tight">
          Controle total sobre a fluência e os resultados da sua equipe
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {metrics.map((m, i) => (
          <div key={i} className="space-y-3">
            <div className="aspect-[4/3] rounded-xl bg-background border border-border" />
            <p className="text-muted-foreground text-sm text-center">{m}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmpresasMetrics;
