import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "FAQ", href: "#faq" },
];

const WHATSAPP_LINK = "https://wa.me/5531998169654?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="flex items-center gap-2">
          <img src="/imagens/logo.png" alt="Tim Turismo Logo" className="h-10 md:h-12 w-auto" />
          <span className="font-heading font-bold text-lg tracking-tight text-foreground">
            Tim Turismo
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground font-heading font-semibold text-sm px-5 py-2.5 rounded hover:opacity-90 transition-opacity"
          >
            <Phone size={16} />
            Solicitar Orçamento
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Abrir menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-body text-base text-foreground hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-whatsapp text-whatsapp-foreground font-heading font-semibold text-sm px-5 py-3 rounded hover:opacity-90 transition-opacity"
            >
              <Phone size={16} />
              Solicitar Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
