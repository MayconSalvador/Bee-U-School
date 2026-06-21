import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const current =
    PARA_VOCE_OPTIONS.find((o) => o.to === pathname) ?? PARA_VOCE_OPTIONS[0];

  return (
    <header className="w-full bg-navy h-[72px] md:h-[92px] flex items-center px-4 md:px-[60px] relative z-50">
      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-8">
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

      {/* Desktop right */}
      <div className="hidden md:flex ml-auto items-center gap-8">
        <a
          href={WHATSAPP_URL}
          className="flex items-center gap-1 text-primary-foreground text-sm font-medium tracking-wider hover:text-gold transition-colors"
        >
          (15) 97400-0448
        </a>
        <a
          href={WHATSAPP_URL}
          className="bg-gold text-navy font-bold text-sm tracking-wider px-8 py-3 rounded-md hover:bg-gold-light transition-colors"
        >
          COMECE AGORA
        </a>
      </div>

      {/* Mobile layout */}
      <div className="flex md:hidden items-center justify-between w-full">
        <Link to="/" className="text-primary-foreground font-black text-xl tracking-wide">
          Bee U
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-primary-foreground p-2"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="absolute top-[72px] left-0 right-0 bg-navy border-t border-primary-foreground/10 shadow-xl md:hidden">
          <nav className="flex flex-col px-4 py-6 gap-1">
            <p className="text-primary-foreground/50 text-xs uppercase tracking-wider font-semibold mb-3">
              Menu
            </p>
            {PARA_VOCE_OPTIONS.map((opt) => (
              <Link
                key={opt.to}
                to={opt.to}
                onClick={() => setMobileOpen(false)}
                className="text-primary-foreground text-base font-medium hover:text-gold transition-colors py-3 border-b border-primary-foreground/10"
              >
                {opt.label}
              </Link>
            ))}
            <Link
              to="/sobre"
              onClick={() => setMobileOpen(false)}
              className="text-primary-foreground text-base font-medium hover:text-gold transition-colors py-3 border-b border-primary-foreground/10"
            >
              Sobre
            </Link>
            <div className="pt-5 flex flex-col gap-3">
              <a
                href={WHATSAPP_URL}
                className="text-primary-foreground text-base font-medium hover:text-gold transition-colors"
              >
                (15) 97400-0448
              </a>
              <a
                href={WHATSAPP_URL}
                onClick={() => setMobileOpen(false)}
                className="bg-gold text-navy font-bold text-sm tracking-wider px-6 py-3 rounded-md hover:bg-gold-light transition-colors text-center"
              >
                COMECE AGORA
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
