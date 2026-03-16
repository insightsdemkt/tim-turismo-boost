import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 bg-foreground border-t border-primary-foreground/5">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src="/imagens/logo.png" alt="Tim Turismo" className="h-8 mb-4 brightness-0 invert" />
            <p className="text-sm text-primary-foreground/50 leading-relaxed max-w-sm">
              Transporte corporativo em Belo Horizonte e Minas Gerais. Pontualidade, conforto e segurança para sua empresa.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs font-semibold text-primary-foreground/40 uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "Soluções", href: "#solucoes" },
                { label: "Como Funciona", href: "#como-funciona" },
                { label: "Sobre", href: "#quem-somos" },
                { label: "Depoimentos", href: "#depoimentos" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-primary-foreground/40 uppercase tracking-wider mb-4">
              Contato
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5531998169654"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              >
                <Phone size={14} />
                (31) 99816-9654
              </a>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/50">
                <MapPin size={14} />
                Belo Horizonte, MG
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary-foreground/30">
            © {year} Tim Turismo. Todos os direitos reservados.
          </p>
          <p className="text-xs text-primary-foreground/30">
            Desenvolvido por{" "}
            <a
              href="https://aceleradorcampanhasads.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent/70 hover:text-accent transition-colors"
            >
              Acelerador Campanhas ADS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
