import { MessageSquareText, Users, Globe, TrendingUp } from "lucide-react";

const cards = [
  {
    tag: "Fala Primeiro",
    icon: MessageSquareText,
    title: "Método Natural",
    description:
      "Crianças não estudam gramática — elas falam. A Bee U replica esse método natural. Você pratica fala desde o dia 1, e a gramática vem naturalmente. Resultado: Fluência real.",
    cta: "Como crianças aprendem",
  },
  {
    tag: "Especialistas em Fala",
    icon: Users,
    title: "Professores Especializados",
    description:
      "Nossos professores são especialistas em conversação profissional. Entendem sotaque, medo de falar, confiança. Cada aula é adaptada ao SEU progresso e objetivos reais.",
    cta: "Especialistas em conversação",
  },
  {
    tag: "Pessoas Reais",
    icon: Globe,
    title: "Comunidade de Conversação",
    description:
      "Estude com uma comunidade de pessoas reais que também querem falar com confiança. Conversas reais, feedback real, progresso real. Você não está sozinho.",
    cta: "Conversação com pessoas reais",
  },
  {
    tag: "Fluência Comprovada",
    icon: TrendingUp,
    title: "Resultado Mensurável",
    description:
      "98% dos nossos alunos conseguem conversar com confiança em 6 meses. Resultado mensurável: você fala, se comunica, negocia em inglês.",
    cta: "Resultado que importa",
  },
];

const DifferentiatorsSection = () => {
  return (
    <section className="w-full bg-navy py-[80px] px-[160px]">
      <div className="text-center mb-12">
        <span className="inline-block border border-primary-foreground/30 rounded-full px-4 py-1 text-sm text-primary-foreground mb-4">
          Diferenciadores
        </span>
        <h2 className="text-[40px] font-bold text-primary-foreground leading-tight">
          Por que Conversação Pura{" "}
          <em className="italic">Funciona Melhor</em>
        </h2>
        <p className="mt-4 text-primary-foreground/70 text-base max-w-[600px] mx-auto">
          Combinamos especialização em conversação, professores reais e comunidade de falantes para criar o método mais eficiente do mercado.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-navy-dark border border-primary-foreground/10 rounded-2xl p-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                <card.icon className="w-6 h-6 text-navy" />
              </div>
              <span className="text-gold text-xs font-semibold tracking-wider uppercase">
                {card.tag}
              </span>
            </div>
            <h3 className="text-primary-foreground font-bold text-xl mb-3">{card.title}</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              {card.description}
            </p>
            <span className="inline-block bg-gold text-navy text-xs font-bold px-4 py-2 rounded-md">
              {card.cta}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
