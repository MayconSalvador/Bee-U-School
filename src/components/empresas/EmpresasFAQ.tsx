import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Quanto tempo leva para ficar fluente?",
    a: "Com a metodologia Bee U Corporate, a maioria dos profissionais atinge fluência conversacional em 6 a 9 meses, com prática diária focada em cenários reais do seu negócio.",
  },
  {
    q: "Qual a metodologia da Bee U?",
    a: "Combinamos conversação 100% ao vivo, simulações de debate corporativo e vocabulário blindado para o seu nicho — tudo com mentores nativos e foco total em fala.",
  },
  {
    q: "Posso fazer as aulas no meu horário?",
    a: "Sim. Os horários são flexíveis e adaptados à rotina executiva da sua equipe, com janelas em diferentes fusos para times distribuídos.",
  },
  {
    q: "Preciso de material adicional?",
    a: "Não. Todo o conteúdo, roteiros de prática e biblioteca de vocabulário corporativo já estão incluídos no programa.",
  },
];

const EmpresasFAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="w-full bg-background px-6 md:px-[80px] lg:px-[160px] py-16">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="inline-block bg-light-blue text-navy text-[11px] font-semibold tracking-wider px-4 py-1.5 rounded-full">
          TIRE SUAS DÚVIDAS
        </span>
        <h2 className="mt-5 text-[28px] md:text-[34px] font-bold text-navy">
          Perguntas Frequentes
        </h2>
        <p className="mt-2 text-muted-foreground text-sm">
          Respondemos suas dúvidas mais comuns
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((f, i) => (
          <div
            key={i}
            className="border border-border rounded-lg overflow-hidden bg-background"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-secondary/40 transition-colors"
            >
              <span className="font-medium text-foreground text-sm">{f.q}</span>
              <ChevronDown
                className={`w-4 h-4 text-muted-foreground transition-transform ${
                  open === i ? "rotate-180" : ""
                }`}
              />
            </button>
            {open === i && (
              <div className="px-5 pb-4 text-muted-foreground text-sm leading-relaxed">
                {f.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmpresasFAQ;
