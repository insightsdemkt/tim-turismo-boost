import { Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <img src="/imagens/logo.png" alt="Tim Turismo Logo" className="h-10 mb-4 brightness-0 invert" />
            <p className="font-heading font-bold text-lg text-primary-foreground mb-2">
              Tim Turismo
            </p>
            <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">
              Transporte corporativo em Belo Horizonte e região metropolitana de Minas Gerais.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm text-primary-foreground mb-4 uppercase tracking-wider">
              Navegação
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Diferenciais", href: "#diferenciais" },
                { label: "Soluções", href: "#solucoes" },
                { label: "Como Funciona", href: "#como-funciona" },
                { label: "Quem Somos", href: "#quem-somos" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm text-primary-foreground mb-4 uppercase tracking-wider">
              Contato
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5531998169654"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-primary-foreground/60 hover:text-whatsapp transition-colors"
              >
                <Phone size={14} />
                (31) 99816-9654
              </a>
              <div className="flex items-center gap-2 font-body text-sm text-primary-foreground/60">
                <MapPin size={14} />
                Belo Horizonte, MG
              </div>
              <a
                href="https://www.timturismo.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-primary-foreground/60 hover:text-accent transition-colors"
              >
                <Mail size={14} />
                www.timturismo.com.br
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Tim Turismo. Todos os direitos reservados.
          </p>
          <p className="font-body text-xs text-primary-foreground/40">
            Desenvolvido por:{" "}
            <a
              href="https://aceleradorcampanhasads.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
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
