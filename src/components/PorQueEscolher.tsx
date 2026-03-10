import { Award, TrendingUp, Heart, Zap, ThumbsUp, Lock } from "lucide-react";

const reasons = [
  { icon: Award, title: "Experiência comprovada", desc: "Anos atendendo grandes empresas e eventos em MG." },
  { icon: TrendingUp, title: "Custo-benefício", desc: "Preços justos com qualidade de serviço premium." },
  { icon: Heart, title: "Dedicação ao cliente", desc: "Cada detalhe é pensado para sua satisfação." },
  { icon: Zap, title: "Resposta rápida", desc: "Orçamento e confirmação em minutos pelo WhatsApp." },
  { icon: ThumbsUp, title: "Flexibilidade", desc: "Serviços sob demanda adaptados à sua necessidade." },
  { icon: Lock, title: "Confiabilidade", desc: "Compromisso com sigilo e profissionalismo em cada viagem." },
];

const PorQueEscolher = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-accent text-center mb-3">
          Por que Nos Escolher?
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-16">
          Motivos para confiar na Tim Turismo
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <r.icon size={28} strokeWidth={1.5} className="text-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                  {r.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PorQueEscolher;
