import { useEffect, useState } from "react";
import {
  MessageSquareText,
  Users,
  Presentation,
  Briefcase,
  Rocket,
  Target,
  Globe,
  TrendingUp,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: MessageSquareText,
    title: "Conversação de Alto Impacto",
    description:
      "Aulas focadas em fala 100% do tempo, em vivos práticos com seu negócio para destravar negociações reais.",
  },
  {
    icon: Users,
    title: "Mentoria 100% Ao Vivo",
    description:
      "Esqueça plataformas robóticas. A sua equipe fala ao vivo com nativos e escala fluência real e competitiva, com a nossa rede.",
  },
  {
    icon: Presentation,
    title: "Simulações de debate Corporativo",
    description:
      "Não fazemos aulas escritas. Realizamos role-plays, prática de venda e tarefas reais com nativos.",
  },
  {
    icon: Briefcase,
    title: "Vocabulário Blindado para o seu Nicho",
    description:
      "Fazer utilização técnica e assertiva, alinhada exclusivamente à fluência de jurídico, financeiro ou seu time-sprint, lançam ao mercado.",
  },
  {
    icon: Rocket,
    title: "Aceleração Bee U: 2x mais rápido",
    description:
      "Com nosso foco e o nosso método prático, sua equipe atinge resultados em metade do tempo dos concorrentes.",
  },
  {
    icon: Target,
    title: "Performance sob Pressão",
    description:
      "Treinamos sua confiança. O objetivo é que sua equipe se sinta tranquila em qualquer contexto, ser fluente em qualquer idioma nativo.",
  },
  {
    icon: Globe,
    title: "Networking e Cultura Global",
    description:
      "Aulas conectam, conversam. O inglês entra de uma forma natural, a partir de conversas e cases que extraem o melhor da nossa empresa.",
  },
  {
    icon: TrendingUp,
    title: "ROI Transparente e Expansão",
    description:
      "Tracking corporativos com Excel. Cada colaborador recebe relatório de evolução para acelerar o seu negócio.",
  },
];

const EmpresasBenefits = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!api) return;
    setScrollSnaps(api.scrollSnapList());
    setSelectedIndex(api.selectedScrollSnap());
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    api.on("select", onSelect);
    api.on("reInit", () => {
      setScrollSnaps(api.scrollSnapList());
      setSelectedIndex(api.selectedScrollSnap());
    });
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="w-full bg-background px-6 md:px-[80px] lg:px-[160px] py-16 overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block bg-light-blue text-navy text-[11px] font-semibold tracking-wider px-4 py-1.5 rounded-full">
          NOSSA ESSÊNCIA
        </span>
        <h2 className="mt-5 text-[26px] md:text-[32px] font-bold text-foreground leading-tight">
          Descubra nossos benefícios!
        </h2>
        <p className="mt-3 text-muted-foreground text-sm">
          A sua time vai mais longe quando o inglês deixa de ser barreira e vira
          alavanca de resultado, contrato e novas oportunidades.
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative py-12">
        <Carousel
          setApi={setApi}
          opts={{ align: "center", loop: true, dragFree: false }}
          className="w-full [&>div]:!overflow-visible"
        >
          <CarouselContent className="-ml-4">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              const isActive = idx === selectedIndex;
              return (
                <CarouselItem
                  key={b.title}
                  className="pl-4 basis-[80%] sm:basis-1/2 lg:basis-1/3"
                >
                  <div
                    className={cn(
                      "h-full bg-background border border-border rounded-xl p-6 transition-all duration-500 ease-in-out origin-center",
                      isActive
                        ? "scale-110 lg:scale-[1.15] opacity-100 border-gold shadow-2xl"
                        : "scale-90 opacity-40 shadow-sm"
                    )}
                  >
                    <div
                      className={cn(
                        "rounded-full bg-gold flex items-center justify-center mb-4 transition-all duration-500",
                        isActive ? "w-12 h-12" : "w-11 h-11"
                      )}
                    >
                      <Icon className="w-5 h-5 text-navy" strokeWidth={2.5} />
                    </div>
                    <h3 className="font-bold text-navy text-[15px] leading-tight mb-2">
                      {b.title}
                    </h3>
                    <p
                      className={cn(
                        "text-muted-foreground text-[12px] leading-relaxed transition-opacity duration-300",
                        isActive ? "opacity-100" : "opacity-0 lg:opacity-60 line-clamp-2"
                      )}
                    >
                      {b.description}
                    </p>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12 h-10 w-10 border-border text-navy hover:bg-navy hover:text-primary-foreground z-10" />
          <CarouselNext className="hidden md:flex -right-4 lg:-right-12 h-10 w-10 border-border text-navy hover:bg-navy hover:text-primary-foreground z-10" />
        </Carousel>

        <div className="flex justify-center gap-2 mt-10">
          {scrollSnaps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => api?.scrollTo(idx)}
              aria-label={`Ir para slide ${idx + 1}`}
              className={cn(
                "h-2 rounded-full transition-all",
                idx === selectedIndex ? "w-6 bg-navy" : "w-2 bg-border hover:bg-muted-foreground"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmpresasBenefits;
