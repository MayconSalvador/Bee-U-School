import { Check } from "lucide-react";
import heroImg from "@/assets/empresas-hero.png";

const bullets = [
  "Foco total em vocabulário de alta gestão e conversação",
  "Fluência 4x mais rápida para quem não pode esperar",
  "Imersão e cultura de time-sprint, em squads de até 6 pessoas",
  "Suba de nível sem teoria fácil",
];

const EmpresasHero = () => {
  return (
    <section className="w-full bg-light-blue px-6 md:px-[80px] lg:px-[120px] py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-8 lg:gap-10 items-center">
        {/* Imagem */}
        <div className="rounded-2xl overflow-hidden h-[420px] lg:h-[460px]">
          <img
            src={heroImg}
            alt="Profissional usando tablet em ambiente corporativo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texto */}
        <div>
          <h1 className="text-[28px] md:text-[34px] font-black leading-[1.15] text-navy">
            Seus concorrentes já falam inglês fluente.
          </h1>
          <h2 className="mt-3 text-[18px] md:text-[20px] font-bold text-navy">
            Você ainda está perdendo tempo com gramática?
          </h2>
          <p className="mt-4 text-muted-foreground text-[14px] leading-relaxed">
            Enquanto sua time hesita traduzindo, o mercado global fecha contratos em
            inglês. Na Bee U, nós não ensinamos inglês: nós destravamos lucros.
          </p>

          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-[13px] text-foreground">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-gold" strokeWidth={3} />
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Formulário */}
        <div className="bg-navy rounded-2xl p-6 md:p-8 shadow-xl">
          <p className="text-primary-foreground text-center text-sm font-semibold mb-5">
            Capacite sua equipe hoje
          </p>
          <form className="space-y-3">
            {[
              "Nome da empresa",
              "E-mail corporativo",
              "Cargo",
              "Segmento",
              "Tamanho da empresa",
              "Número de pessoas para capacitar",
            ].map((ph) => (
              <input
                key={ph}
                type="text"
                placeholder={ph}
                className="w-full bg-transparent border-b border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 text-sm py-2 outline-none focus:border-gold transition-colors"
              />
            ))}
            <button
              type="submit"
              className="w-full mt-4 bg-gold text-navy font-bold text-sm tracking-wider py-3 rounded-md hover:bg-gold-light transition-colors"
            >
              CONHEÇA AGORA
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmpresasHero;
