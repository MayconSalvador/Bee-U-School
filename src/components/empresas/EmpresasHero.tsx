import { Check } from "lucide-react";
import { WHATSAPP_URL } from "@/config/contact";
import heroImg from "@/assets/empresas-hero.png";

const bullets = [
  "Foco total em vocabulário de alta gestão e fonética avançada",
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

        {/* WhatsApp CTA */}
        <div className="bg-navy rounded-2xl p-6 md:p-8 shadow-xl">
          <p className="text-primary-foreground text-center text-sm font-semibold mb-6">
            Capacite sua equipe hoje
          </p>
          <p className="text-primary-foreground/80 text-center text-sm leading-relaxed mb-8">
            Clique no botão abaixo para conversar com nossos especialistas em programas corporativos via WhatsApp.
          </p>
          <a
            href={WHATSAPP_URL}
            className="w-full bg-gold text-navy font-bold text-sm tracking-wider py-3 rounded-md hover:bg-gold-light transition-colors inline-block text-center"
          >
            CONHEÇA AGORA
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmpresasHero;
