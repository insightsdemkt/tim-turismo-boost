import { ArrowRight } from "lucide-react";

const WA = "https://wa.me/5531998169654?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.";

const CTAFinal = () => {
  return (
    <section className="py-20 md:py-28 bg-foreground">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary-foreground mb-4">
          Pronto para simplificar seu transporte?
        </h2>
        <p className="text-primary-foreground/60 max-w-lg mx-auto mb-10">
          Solicite um orçamento sem compromisso. Respondemos em poucos minutos pelo WhatsApp.
        </p>
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold text-sm px-8 py-4 rounded-lg hover:bg-accent/90 transition-colors"
        >
          Solicitar Orçamento Grátis
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
};

export default CTAFinal;
