import { Users, Star, Globe, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "+5.000", label: "Alunos ativos" },
  { icon: Star, value: "4.9", label: "Avaliação Média" },
  { icon: Globe, value: "+15", label: "Paises Alcançados" },
  { icon: Clock, value: "+120 000", label: "Horas de Aula" },
];

const StatsSection = () => {
  return (
    <section className="w-full py-[60px] px-[160px]">
      <div className="flex items-center justify-between">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-navy flex items-center justify-center">
              <stat.icon className="w-5 h-5 text-navy" />
            </div>
            <div>
              <p className="text-[40px] font-bold text-foreground leading-none">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
