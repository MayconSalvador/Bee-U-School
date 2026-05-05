import { ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    <header className="w-full bg-navy h-[92px] flex items-center px-[60px]">
      <nav className="flex items-center gap-8">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 text-primary-foreground text-sm font-medium tracking-wider outline-none hover:text-gold transition-colors uppercase">
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
          className="flex items-center gap-1 text-primary-foreground text-sm font-medium tracking-wider hover:text-gold transition-colors"
        >
          SOBRE <ChevronDown className="w-4 h-4" />
        </Link>
      </nav>
      <div className="ml-auto flex items-center gap-8">
        <a
          href="#"
          className="flex items-center gap-1 text-primary-foreground text-sm font-medium tracking-wider hover:text-gold transition-colors"
        >
          (44)91234-5678 <ChevronDown className="w-4 h-4" />
        </a>
        <button className="bg-gold text-navy font-bold text-sm tracking-wider px-8 py-3 rounded-md hover:bg-gold-light transition-colors">
          COMECE AGORA
        </button>
      </div>
    </header>
  );
};

export default Header;
