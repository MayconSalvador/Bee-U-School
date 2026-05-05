import { Check } from "lucide-react";
import kidLearning2 from "@/assets/kid-learning-2.jpg";
import kidLearning3 from "@/assets/kid-learning-3.jpg";

const benefits = [
  {
    emoji: "💬",
    title: "Confiança para se expressar",
    text: "Crianças que falam inglês cedo desenvolvem mais segurança em qualquer ambiente social.",
    color: "bg-kids-peach",
  },
  {
    emoji: "🧠",
    title: "Cérebro mais ágil",
    text: "Estudos mostram que o bilinguismo na infância amplia memória, foco e raciocínio.",
    color: "bg-kids-mint",
  },
  {
    emoji: "🌍",
    title: "Portas abertas no futuro",
    text: "Universidades, intercâmbios e carreiras internacionais começam a se desenhar agora.",
    color: "bg-kids-sky",
  },
  {
    emoji: "✨",
    title: "Curiosidade pelo mundo",
    text: "Inglês é a chave para filmes, jogos, livros e amigos espalhados pelo planeta.",
    color: "bg-kids-lavender",
  },
];

const KidsBenefits = () => {
  return (
    <section className="w-full bg-background px-6 md:px-[80px] lg:px-[160px] py-20">
      <div className="text-center mb-14 max-w-[680px] mx-auto">
        <p className="inline-block bg-kids-bubble text-navy font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
          Muito além do idioma
        </p>
        <h2 className="text-[32px] md:text-[42px] font-black text-navy leading-tight">
          Benefícios que florescem
          <br />
          <span className="text-gold">por toda a vida</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1100px] mx-auto items-center">
        {/* Left photo */}
        <div className="relative hidden lg:block">
          <div className="rounded-[32px] overflow-hidden border-[6px] border-background shadow-xl rotate-[-3deg]">
            <img
              src={kidLearning2}
              alt="Crianças se divertindo com tablet"
              width={768}
              height={768}
              loading="lazy"
              className="w-full h-full object-cover aspect-square"
            />
          </div>
          <div className="absolute -top-3 -right-3 bg-gold text-navy rounded-full w-16 h-16 flex items-center justify-center font-black text-xl shadow-lg rotate-[12deg]">
            😊
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:col-span-1">
          {benefits.map((b, idx) => (
            <div
              key={b.title}
              className={`${b.color} rounded-2xl p-5 border-4 border-background hover:-translate-y-1 transition-transform`}
              style={{ transform: `rotate(${idx % 2 === 0 ? "-1deg" : "1deg"})` }}
            >
              <div className="text-3xl mb-2">{b.emoji}</div>
              <h3 className="text-navy font-black text-sm mb-1">{b.title}</h3>
              <p className="text-foreground/75 text-xs leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>

        {/* Right photo */}
        <div className="relative hidden lg:block">
          <div className="rounded-[32px] overflow-hidden border-[6px] border-background shadow-xl rotate-[3deg]">
            <img
              src={kidLearning3}
              alt="Criança feliz com livros"
              width={768}
              height={768}
              loading="lazy"
              className="w-full h-full object-cover aspect-square"
            />
          </div>
          <div className="absolute -bottom-3 -left-3 bg-navy text-gold rounded-full w-16 h-16 flex items-center justify-center font-black shadow-lg -rotate-[12deg]">
            <Check className="w-7 h-7" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KidsBenefits;
