import { Phone } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5531998169654?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.";

const CTAFinal = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/imagens/cta-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      <div className="container relative z-10 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
          Solicite seu orçamento agora
        </h2>
        <p className="font-body text-lg text-primary-foreground/80 max-w-xl mx-auto mb-10">
          Entre em contato pelo WhatsApp e receba um orçamento personalizado em minutos. Atendimento rápido e sem compromisso.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-whatsapp text-whatsapp-foreground font-heading font-bold text-base md:text-lg px-8 py-4 rounded hover:opacity-90 transition-opacity"
        >
          <Phone size={20} />
          Fale Conosco no WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CTAFinal;
