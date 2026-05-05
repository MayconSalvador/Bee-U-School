const Footer = () => {
  return (
    <footer className="w-full bg-navy-dark pt-16 pb-8 px-[160px]">
      <div className="grid grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Transformando carreiras através do inglês fluente.
          </p>
        </div>

        {/* Produto */}
        <div>
          <h4 className="text-primary-foreground font-bold text-base mb-4">Produto</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-primary-foreground/70 text-sm hover:text-primary-foreground">Planos</a></li>
            <li><a href="#" className="text-primary-foreground/70 text-sm hover:text-primary-foreground">Metodologia</a></li>
            <li><a href="#" className="text-primary-foreground/70 text-sm hover:text-primary-foreground">Depoimentos</a></li>
          </ul>
        </div>

        {/* Empresa */}
        <div>
          <h4 className="text-primary-foreground font-bold text-base mb-4">Empresa</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-primary-foreground/70 text-sm hover:text-primary-foreground">Sobre</a></li>
            <li><a href="#" className="text-primary-foreground/70 text-sm hover:text-primary-foreground">Blog</a></li>
            <li><a href="#" className="text-primary-foreground/70 text-sm hover:text-primary-foreground">Contato</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-primary-foreground font-bold text-base mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-primary-foreground/70 text-sm hover:text-primary-foreground">Privacidade</a></li>
            <li><a href="#" className="text-primary-foreground/70 text-sm hover:text-primary-foreground">Termos</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 pt-6 flex items-center justify-between">
        <p className="text-primary-foreground/50 text-sm">
          © 2026 Perceus Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground text-sm font-bold">f</a>
          <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground text-sm font-bold">𝕏</a>
          <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground text-sm font-bold">in</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
