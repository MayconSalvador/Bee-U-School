import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Quanto tempo leva para ficar fluente?",
    answer: "Com nossa metodologia focada em conversação, a maioria dos alunos consegue se comunicar com confiança em 6 meses de prática consistente.",
  },
  {
    question: "Qual a metodologia da Bee U",
    answer: "Nossa metodologia é baseada em conversação real com professores especializados. Você fala desde o primeiro dia, como crianças aprendem naturalmente.",
  },
  {
    question: "Posso fazer as aulas no meu horário?",
    answer: "Sim! Oferecemos flexibilidade total de horários para que você possa estudar quando for mais conveniente para sua rotina.",
  },
  {
    question: "E se eu não gostar? há garantia?",
    answer: "Sim! Oferecemos garantia de 15 dias. Se não estiver satisfeito, devolvemos 100% do seu dinheiro.",
  },
  {
    question: "Preciso do material adicional?",
    answer: "Não! Todo o material necessário está incluído no seu plano. Você só precisa de um dispositivo com internet.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-[80px] px-[160px]">
      <div className="text-center mb-12">
        <span className="inline-block border border-border rounded-full px-4 py-1 text-sm text-muted-foreground mb-4">
          Tire suas Dúvidas
        </span>
        <h2 className="text-[36px] font-bold text-foreground">
          Perguntas Frequentes
        </h2>
        <p className="mt-3 text-muted-foreground text-base">
          Respondemos suas dúvidas mais comuns
        </p>
      </div>

      <div className="max-w-[720px] mx-auto space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-border rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-secondary/50 transition-colors"
            >
              <span className="text-foreground font-medium text-base">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-muted-foreground transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-5">
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
