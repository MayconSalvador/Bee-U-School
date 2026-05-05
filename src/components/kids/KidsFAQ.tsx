import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "A partir de qual idade meu filho pode começar?",
    a: "Recebemos crianças a partir dos 6 anos. Cada turma é organizada por faixa etária e nível, garantindo que o conteúdo faça sentido em cada fase.",
  },
  {
    q: "Como funcionam as aulas online para crianças?",
    a: "São encontros ao vivo, em pequenos grupos, com professores especializados. A plataforma é simples, segura e pensada para manter a criança engajada do começo ao fim.",
  },
  {
    q: "Os pais conseguem acompanhar a evolução?",
    a: "Sim. Você recebe relatórios periódicos, pode conversar com o professor e tem acesso a um painel com presença, conquistas e próximos objetivos.",
  },
  {
    q: "Preciso comprar material extra?",
    a: "Não. Todo o material didático está incluso na mensalidade e é enviado de forma 100% digital, atualizado constantemente.",
  },
  {
    q: "E se meu filho não se adaptar?",
    a: "Você tem 15 dias para experimentar. Se não for o ideal para sua família, devolvemos o valor integralmente, sem burocracia.",
  },
];

const KidsFAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="w-full bg-light-blue px-6 md:px-[80px] lg:px-[160px] py-20">
      <div className="text-center mb-12">
        <p className="inline-block bg-gold text-navy font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
          Perguntas frequentes
        </p>
        <h2 className="text-[32px] md:text-[42px] font-black text-navy leading-tight">
          A gente responde tudo 💛
        </h2>
      </div>

      <div className="max-w-[820px] mx-auto space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = open === idx;
          return (
            <div
              key={faq.q}
              className={`bg-background rounded-2xl overflow-hidden border-2 transition-all ${
                isOpen ? "border-gold shadow-lg" : "border-transparent"
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left gap-4"
              >
                <span className="text-navy font-bold text-sm">{faq.q}</span>
                <div
                  className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                    isOpen ? "bg-gold rotate-180" : "bg-secondary"
                  }`}
                >
                  <ChevronDown className="w-5 h-5 text-navy" />
                </div>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-foreground/75 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default KidsFAQ;
