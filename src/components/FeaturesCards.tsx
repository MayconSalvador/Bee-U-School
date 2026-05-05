import { Users, GraduationCap, Video } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Nome do Grupo",
    description:
      "A Bee U não apenas forma falantes, mas dominadores da lingua, transformando o inglês em segunda Lingua Mãe. Ensinando de forma natural e imersiva.",
  },
  {
    icon: GraduationCap,
    title: "Professores",
    description:
      "Somos um grupo de professores que tirou o ensino e aprendizado do convencional, focando em eficiencia e comunicação real",
  },
  {
    icon: Video,
    title: "Aulas online",
    description:
      "Aulas online de sucesso, com flexibilidade de horários e foco em prática no conforto da sua rotina.",
  },
];

const FeaturesCards = () => {
  return (
    <section className="w-full px-[160px] pb-[80px]">
      <div className="grid grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="border border-border rounded-xl p-8 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mb-6">
              <feature.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-navy font-bold text-xl mb-4">{feature.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesCards;
