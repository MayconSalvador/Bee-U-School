const steps = [
  {
    number: 1,
    title: "Teste gratuito",
    description: "Comece com uma aula grátis e conheça nossa metodologia.",
  },
  {
    number: 2,
    title: "Personalize seu plano",
    description: "Escolha a frequência e o nível que melhor se adequam a você.",
  },
  {
    number: 3,
    title: "Aprenda e cresça",
    description: "Estude quando quiser e acompanhe seu progresso em tempo real.",
  },
];

const JourneySection = () => {
  return (
    <section className="w-full py-[80px] px-4 md:px-8 lg:px-[160px]">
      <div className="text-center mb-12">
        <span className="inline-block border border-border rounded-full px-4 py-1 text-sm text-muted-foreground mb-4">
          Simples assim
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-foreground leading-tight">
          Sua jornada para a fluência em{" "}
          <span className="text-gold">3 passos</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-sm md:text-base max-w-[520px] mx-auto">
          Sem complicação, sem burocracia. Você começa hoje e já sente a diferença na primeira semana.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div
            key={step.number}
            className="border border-border rounded-xl p-8 flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mb-6">
              <span className="text-primary-foreground font-bold text-lg">{step.number}</span>
            </div>
            <h3 className="text-foreground font-bold text-lg mb-3">{step.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JourneySection;
