const EmpresasClients = () => {
  return (
    <section className="w-full bg-background px-6 md:px-[80px] lg:px-[160px] py-16">
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-block bg-light-blue text-navy text-[11px] font-semibold tracking-wider px-4 py-1.5 rounded-full">
          CLIENTES
        </span>
        <h2 className="mt-5 text-[26px] md:text-[32px] font-bold text-foreground leading-tight">
          Mais de 1.000 Empresas que já destravaram seus lucros e
          <br className="hidden md:block" /> resultados treinando com a Bee U
        </h2>
        <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto">
          A Bee U Corporate é a entrega da fluência estratégica que a sua liderança exige.
          Implemente um programa de aceleração real com foco em business, mentoria de alta
          e linguagem aplicada para acelerar times que dominam negociações remotas, vendas
          ou o essencial.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-5 max-w-5xl mx-auto">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="aspect-[4/3] rounded-xl border border-border bg-secondary/40 hover:border-gold transition-colors"
          />
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-navy" />
        <span className="w-2 h-2 rounded-full bg-border" />
        <span className="w-2 h-2 rounded-full bg-border" />
      </div>
    </section>
  );
};

export default EmpresasClients;
