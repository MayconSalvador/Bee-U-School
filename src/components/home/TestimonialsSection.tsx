const testimonials = [
  {
    quote:
      '"Em 3 meses consegui passar em uma entrevista em inglês e consegui meu emprego dos sonhos em uma multinacional."',
    name: "Marina Silva",
    role: "Gerente de Projetos",
    featured: false,
  },
  {
    quote:
      '"A metodologia da Bee U é diferente. Aprendi inglês de verdade, não apenas decorar regras. Agora consigo negociar com clientes internacionais."',
    name: "João Santos",
    role: "Empreendedor",
    featured: true,
  },
  {
    quote:
      '"Viajei para 8 países e conversei com confiança em todos. A Bee U me deu a liberdade que eu procurava."',
    name: "Maycon Salvador",
    role: "Garoto de Programa",
    featured: false,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="w-full bg-light-blue py-[80px] px-[160px]">
      <div className="text-center mb-12">
        <span className="inline-block border border-border rounded-full px-4 py-1 text-sm text-muted-foreground mb-4">
          Historias Reais
        </span>
        <h2 className="text-[40px] font-bold text-foreground leading-tight">
          Não ouça apenas a gente.
          <br />
          Veja quem já{" "}
          <span className="text-navy font-bold">destravou a carreira.</span>
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className={`rounded-2xl p-8 flex flex-col justify-between ${
              t.featured
                ? "bg-[hsl(220,50%,65%)] text-primary-foreground"
                : "bg-background border border-border"
            }`}
          >
            <div>
              <div className="text-4xl font-bold mb-6 opacity-40">"</div>
              <p
                className={`text-sm leading-relaxed mb-8 ${
                  t.featured ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {t.quote}
              </p>
            </div>
            <div className="border-t border-current/20 pt-4 mt-auto">
              <p
                className={`font-bold text-base ${
                  t.featured ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {t.name}
              </p>
              <p
                className={`text-sm ${
                  t.featured ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}
              >
                {t.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-8">
        <div className="w-3 h-3 rounded-full bg-navy" />
        <div className="w-3 h-3 rounded-full bg-navy/30" />
        <div className="w-3 h-3 rounded-full bg-navy/30" />
      </div>
    </section>
  );
};

export default TestimonialsSection;
