import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Sobre", href: "#quem-somos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

const WA = "https://wa.me/5531998169654?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-[72px]">
        <a href="#inicio" className="flex items-center gap-2.5 flex-shrink-0">
          <img src="/imagens/logo.png" alt="Tim Turismo" className="h-9 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium tracking-wide text-foreground/70 hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 bg-foreground text-primary-foreground text-[13px] font-semibold px-5 py-2.5 rounded-lg hover:bg-foreground/90 transition-colors"
        >
          Solicitar Orçamento
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container py-6 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-foreground/70 hover:text-foreground py-3 px-2 rounded-md hover:bg-secondary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 text-center bg-foreground text-primary-foreground text-sm font-semibold px-5 py-3 rounded-lg hover:bg-foreground/90 transition-colors"
            >
              Solicitar Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
