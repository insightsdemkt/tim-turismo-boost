import { Award, TrendingUp, Heart, Zap, ThumbsUp, Lock } from "lucide-react";

const reasons = [
  { icon: Award, title: "Experiência real", desc: "Anos atendendo grandes empresas e eventos em MG." },
  { icon: TrendingUp, title: "Melhor custo-benefício", desc: "Qualidade premium a preços que fazem sentido." },
  { icon: Heart, title: "Obsessão pelo cliente", desc: "Cada detalhe pensado para sua satisfação." },
  { icon: Zap, title: "Orçamento em minutos", desc: "Resposta rápida. Sem burocracia." },
  { icon: ThumbsUp, title: "Total flexibilidade", desc: "Sob demanda, recorrente ou pontual." },
  { icon: Lock, title: "Confiança e sigilo", desc: "Profissionalismo e discrição em cada viagem." },
];

const PorQueEscolher = () => {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3">
            Por que a Tim Turismo?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            6 motivos para fechar com a gente
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-4 p-5 rounded-xl bg-background border border-border">
              <div className="w-10 h-10 rounded-lg bg-accent/8 flex items-center justify-center flex-shrink-0">
                <r.icon size={20} strokeWidth={1.5} className="text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PorQueEscolher;
