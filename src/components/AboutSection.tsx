const AboutSection = () => {
  return (
    <section className="w-full px-[160px] py-[60px]">
      <div className="grid grid-cols-2 gap-8">
        {/* Left card */}
        <div>
          <span className="inline-block border border-border rounded-full px-4 py-1 text-sm text-muted-foreground mb-4">
            QUEM ESTÁ POR TRÁS
          </span>
          <h2 className="text-[28px] font-bold text-foreground leading-tight mb-4">
            Feita por pessoas que acreditam em comunicação de verdade
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Professores que não seguem roteiro.Que se adaptam a você. que entendem que cada aluno tem seu tempo, sua história e seu jeiro de aprender.
          </p>
        </div>

        {/* Right card */}
        <div className="bg-light-blue rounded-2xl p-10">
          <span className="inline-block border border-border rounded-full px-4 py-1 text-sm text-muted-foreground mb-4">
            NOSSA MISSÃO
          </span>
          <h2 className="text-[28px] font-bold text-foreground leading-tight mb-4">
            Fazer você se sentir confortavel falando em um novo idioma
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Porque o mundo é grande demais pra você ficar preso na barreira do idioma.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
