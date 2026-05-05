import { MessageSquareText, User, Heart, TrendingUp } from "lucide-react";

const values = [
  {
    icon: MessageSquareText,
    title: "Conversa é o centro",
    description: "Fluência não é sobre saber regras. É sobre saber se expressar.",
  },
  {
    icon: User,
    title: "Professores, não bots",
    description:
      "Pessoas entendem pessoas. Eisso muda tudo no aprendizado.",
  },
  {
    icon: Heart,
    title: "Erro faz parte",
    description: "Aqui, errar não é falha. É processo acontecendo.",
  },
  {
    icon: TrendingUp,
    title: "Evolução real",
    description:
      'você não "completa niveis" Você começa a viver o idioma.',
  },
];

const EssenceSection = () => {
  return (
    <section className="w-full bg-light-blue py-[80px] px-[160px]">
      <div className="text-center mb-12">
        <span className="inline-block border border-border rounded-full px-4 py-1 text-sm text-muted-foreground mb-4">
          NOSSA ESSÊNCIA
        </span>
        <h2 className="text-[36px] font-bold text-foreground">
          O que nos move todos os dias
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-[650px] mx-auto">
          Acreditamos quem aprender um idioma vai muito além da gramatica.
          <br />É sobre pessoas, conexão e novas possibilidades.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {values.map((value) => (
          <div
            key={value.title}
            className="bg-background border border-border rounded-xl p-8 text-center"
          >
            <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center mx-auto mb-5">
              <value.icon className="w-6 h-6 text-navy" />
            </div>
            <h3 className="text-navy font-bold text-lg mb-3">{value.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EssenceSection;
