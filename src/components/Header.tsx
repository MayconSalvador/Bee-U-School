import { ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { WHATSAPP_URL } from "@/config/contact";

const PARA_VOCE_OPTIONS = [
  { to: "/", label: "Para Você" },
  { to: "/para-seu-filho", label: "Para seu Filho" },
  { to: "/empresas", label: "Para sua Empresa" },
];

const Header = () => {
  const { pathname } = useLocation();
  const current =
    PARA_VOCE_OPTIONS.find((o) => o.to === pathname) ?? PARA_VOCE_OPTIONS[0];

  return (
    <header className="relative w-full bg-navy h-20 md:h-[92px] flex items-center px-4 md:px-[60px]">
      <nav className="hidden md:flex items-center gap-8">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 text-primary-foreground text-xs md:text-sm font-medium tracking-wider outline-none hover:text-gold transition-colors uppercase">
            {current.label} <ChevronDown className="w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56 bg-background border border-border">
            {PARA_VOCE_OPTIONS.map((opt) => (
              <DropdownMenuItem key={opt.to} asChild>
                <Link to={opt.to} className="cursor-pointer text-foreground font-medium">
                  {opt.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Link
          to="/sobre"
          className="flex items-center gap-1 text-primary-foreground text-xs md:text-sm font-medium tracking-wider hover:text-gold transition-colors"
        >
          SOBRE <ChevronDown className="w-4 h-4" />
        </Link>
      </nav>

      <Link
        to="/"
        aria-label="Ir para a página inicial da Bee U"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <img
          src="/favicon.ico"
          alt="Bee U"
          className="h-12 w-12 md:h-14 md:w-14 rounded-xl object-contain"
        />
      </Link>

      <div className="ml-auto flex items-center gap-4 md:gap-8">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-1 text-primary-foreground text-xs md:text-sm font-medium tracking-wider hover:text-gold transition-colors"
        >
          (15) 97400-0448 <ChevronDown className="w-4 h-4" />
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold text-navy font-bold text-xs max-[370px]:text-[10px] md:text-sm tracking-wider px-4 max-[370px]:px-3 md:px-8 py-2 md:py-3 rounded-md hover:bg-gold-light transition-colors"
        >
          COMECE AGORA
        </a>
      </div>
    </header>
  );
};

export default Header;
