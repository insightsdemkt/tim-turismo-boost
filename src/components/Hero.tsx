import { Phone } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5531998169654?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center justify-center pt-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/imagens/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="container relative z-10 text-center py-20">
        <p className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-primary-foreground/70 mb-4">
          Transporte Corporativo em Belo Horizonte
        </p>
        <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight max-w-3xl mx-auto mb-6">
          Pontualidade e conforto para sua empresa
        </h1>
        <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto mb-10">
          Transporte executivo, receptivos, traslados e eventos em toda a região metropolitana de BH e estado de Minas Gerais.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-whatsapp text-whatsapp-foreground font-heading font-bold text-base md:text-lg px-8 py-4 rounded hover:opacity-90 transition-opacity"
        >
          <Phone size={20} />
          Solicitar Orçamento Grátis
        </a>
      </div>
    </section>
  );
};

export default Hero;
