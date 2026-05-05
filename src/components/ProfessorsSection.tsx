import { ArrowRight } from "lucide-react";

const professors = [
  {
    name: "MAYCON SALVADOR",
    description: "Bom professor",
    tags: ["SABE INGLES", "PROGRADOR"],
  },
  {
    name: "CRISTOFER ROMÃO",
    description: "Bom professor",
    tags: ["SABE PORTUGUES", "DESIGNER"],
  },
  {
    name: "ALVARO ROMAGNOLE",
    description: "Bom professor",
    tags: ["DONO DE EMPRESA", "VELHO"],
  },
];

const ProfessorsSection = () => {
  return (
    <section className="w-full px-[160px] py-[60px]">
      <div className="text-center mb-10">
        <span className="inline-block border border-border rounded-full px-4 py-1 text-sm text-muted-foreground mb-4">
          Conheça professores
        </span>
        <h2 className="text-[36px] font-bold text-foreground">
          Professores reais, Conexões que transformam.
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Cada professor traz sua experiência, seu jeito único de ensinar e o mesmo objetivo: o seu progresso.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {professors.map((prof) => (
          <div
            key={prof.name}
            className="border border-border rounded-xl overflow-hidden"
          >
            <div className="w-full h-[220px] bg-secondary" />
            <div className="p-6">
              <h3 className="text-navy font-bold text-lg mb-1">{prof.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{prof.description}</p>
              <div className="flex gap-2">
                {prof.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-navy text-navy text-xs font-medium px-3 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="border-2 border-navy text-navy font-semibold px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-secondary transition-colors">
          Ver todos os Professores <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default ProfessorsSection;
