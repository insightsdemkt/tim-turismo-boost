import { MessageSquare, ClipboardList, CheckCircle, ArrowRight } from "lucide-react";

const WA = "https://wa.me/5531998169654?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.";

const steps = [
  {
    num: "1",
    icon: MessageSquare,
    title: "Conte sua necessidade",
    desc: "Envie uma mensagem pelo WhatsApp. Diga o tipo de serviço, data, horário e quantidade de passageiros.",
  },
  {
    num: "2",
    icon: ClipboardList,
    title: "Receba a proposta",
    desc: "Em minutos, nossa equipe envia a melhor solução com rota otimizada e veículos adequados.",
  },
  {
    num: "3",
    icon: CheckCircle,
    title: "Viaje com tranquilidade",
    desc: "No dia marcado, motorista pontual no local combinado. Veículo limpo, confortável e climatizado.",
  },
];

const ComoFunciona = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-surface">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3">
            Como Funciona
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
            Três passos. Zero complicação.
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Do primeiro contato à execução, tudo pensado para ser simples e rápido.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {steps.map((step, i) => (
            <div key={step.num} className="relative text-center md:text-left">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-40px)] h-px bg-border" />
              )}
              <div className="flex flex-col items-center md:items-start">
                <div className="w-16 h-16 rounded-2xl bg-background border border-border flex items-center justify-center mb-5 relative z-10">
                  <step.icon size={24} strokeWidth={1.5} className="text-accent" />
                </div>
                <span className="text-xs font-bold text-accent tracking-wide mb-2">
                  PASSO {step.num}
                </span>
                <h3 className="font-bold text-lg text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold text-sm px-8 py-4 rounded-lg hover:bg-accent/90 transition-colors"
          >
            Solicitar Orçamento Agora
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
