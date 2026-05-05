import { Monitor, Users, Gamepad2, BarChart3 } from "lucide-react";

const reasons = [
  {
    icon: Gamepad2,
    title: "Aprender brincando",
    text: "Jogos, histórias e desafios mantêm seu filho engajado do começo ao fim. Inglês deixa de ser dever e vira o momento favorito do dia.",
    bg: "bg-kids-peach",
    emoji: "🎮",
  },
  {
    icon: Users,
    title: "Professores que encantam",
    text: "Educadores especialistas em infância, treinados para ensinar com leveza, paciência e muita didática. Acolhimento em cada aula.",
    bg: "bg-kids-mint",
    emoji: "👩‍🏫",
  },
  {
    icon: Monitor,
    title: "100% online e seguro",
    text: "Aulas ao vivo direto da sua casa, em ambiente protegido e monitorado. Sem deslocamentos, com toda a comodidade da rotina familiar.",
    bg: "bg-kids-sky",
    emoji: "🏡",
  },
  {
    icon: BarChart3,
    title: "Pais sempre por dentro",
    text: "Relatórios periódicos com a evolução, conquistas e próximos passos do seu filho. Você acompanha tudo, sem precisar adivinhar nada.",
    bg: "bg-kids-lavender",
    emoji: "📊",
  },
];

const KidsReasons = () => {
  return (
    <section className="w-full bg-background px-6 md:px-[80px] lg:px-[160px] py-20">
      <div className="text-center max-w-[680px] mx-auto mb-14">
        <p className="inline-block bg-gold/20 text-navy font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
          Por que escolher
        </p>
        <h2 className="text-[32px] md:text-[42px] font-black text-navy leading-tight">
          Tudo o que seu filho precisa{" "}
          <span className="relative inline-block">
            <span className="relative z-10">para amar inglês</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-gold/50 -z-0 rounded-full" />
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
        {reasons.map((reason, idx) => (
          <article
            key={reason.title}
            className={`${reason.bg} rounded-3xl p-7 flex gap-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-4 border-background`}
            style={{ transform: idx % 2 === 1 ? "rotate(0.5deg)" : "rotate(-0.5deg)" }}
          >
            <div className="shrink-0 w-16 h-16 rounded-2xl bg-background flex items-center justify-center text-3xl shadow-md">
              {reason.emoji}
            </div>
            <div>
              <h3 className="text-navy font-black text-lg mb-2">{reason.title}</h3>
              <p className="text-foreground/75 text-sm leading-relaxed">{reason.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default KidsReasons;
