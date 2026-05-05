import { Users, Star, Globe, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "+5.000", label: "Alunos ativos" },
  { icon: Star, value: "4.9", label: "Avaliação Média" },
  { icon: Globe, value: "+15", label: "Paises Alcançados" },
  { icon: Clock, value: "+120 000", label: "Horas de Aula" },
];

const HomeStats = () => {
  return (
    <section className="w-full py-[60px] px-[160px]">
      <div className="flex items-center justify-between">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full border-2 border-navy flex items-center justify-center mb-4">
              <stat.icon className="w-6 h-6 text-navy" />
            </div>
            <p className="text-[40px] font-bold text-foreground leading-none">
              {stat.value}
            </p>
            <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeStats;
