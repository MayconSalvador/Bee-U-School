import { Mic, BookOpen, Trophy } from "lucide-react";
import kidLearning1 from "@/assets/kid-learning-1.jpg";

const pillars = [
  {
    icon: Mic,
    emoji: "🗣️",
    title: "Conversação desde o dia 1",
    text: "Seu filho fala inglês desde a primeira aula, do mesmo jeito natural que aprendeu o português.",
    color: "bg-kids-sun",
  },
  {
    icon: BookOpen,
    emoji: "📚",
    title: "Conteúdo do universo infantil",
    text: "Temas, personagens e situações que fazem sentido para a idade. Aprender vira algo familiar.",
    color: "bg-kids-mint",
  },
  {
    icon: Trophy,
    emoji: "🏆",
    title: "Conquistas que motivam",
    text: "Cada etapa concluída vira uma vitória reconhecida, alimentando a vontade de continuar evoluindo.",
    color: "bg-kids-bubble",
  },
];

const KidsMethodology = () => {
  return (
    <section className="relative w-full overflow-hidden bg-light-blue px-6 md:px-[80px] lg:px-[160px] py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-[1200px] mx-auto">
        {/* Photo side */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-gold/30 blur-2xl" />
          <div className="relative rounded-[36px] overflow-hidden border-[6px] border-background shadow-2xl rotate-[-2deg]">
            <img
              src={kidLearning1}
              alt="Criança feliz aprendendo inglês com fones de ouvido"
              width={768}
              height={768}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-navy text-primary-foreground rounded-2xl px-5 py-3 shadow-xl rotate-[3deg]">
            <p className="text-3xl font-black text-gold leading-none">+15</p>
            <p className="text-[11px] mt-1">anos de experiência</p>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="inline-block bg-gold text-navy font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
            Método Bee U Kids
          </p>
          <h2 className="text-[32px] md:text-[42px] font-black text-navy leading-tight">
            Uma metodologia testada,{" "}
            <span className="text-gold">pensada para crianças</span>
          </h2>
          <p className="mt-5 text-foreground/75 text-base leading-relaxed">
            Adaptamos o que já funciona com adultos para o universo infantil:
            conversação real, professores especialistas e zero enrolação.
          </p>

          <div className="mt-8 space-y-4">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="bg-background rounded-2xl p-5 flex items-center gap-4 hover:translate-x-1 transition-transform shadow-sm border border-border"
              >
                <div
                  className={`shrink-0 w-14 h-14 rounded-2xl ${pillar.color} flex items-center justify-center text-2xl`}
                >
                  {pillar.emoji}
                </div>
                <div>
                  <h3 className="text-navy font-black text-base mb-1">{pillar.title}</h3>
                  <p className="text-foreground/70 text-sm leading-snug">{pillar.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KidsMethodology;
