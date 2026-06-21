import { Users, Star, Globe, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "50", label: "Alunos ativos" },
  { icon: Star, value: "4.3", label: "Avaliação Média" },
  { icon: Globe, value: "7+", label: "Paises Alcançados" },
  { icon: Clock, value: "90 000", label: "Horas de Aula" },
];

const HomeStats = () => {
  return (
    <section className="w-full py-10 md:py-[60px] px-6 md:px-[80px] lg:px-[160px]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
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
