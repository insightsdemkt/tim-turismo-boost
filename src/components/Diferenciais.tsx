import { Clock, Shield, Users, MapPin, Car, Headphones } from "lucide-react";

const items = [
  { icon: Clock, title: "Pontualidade garantida", desc: "Chegamos antes para que você nunca se atrase." },
  { icon: Shield, title: "Segurança total", desc: "Motoristas treinados e veículos revisados." },
  { icon: Users, title: "Atendimento dedicado", desc: "Um consultor focado na sua operação." },
  { icon: MapPin, title: "Cobertura em MG", desc: "BH, região metropolitana e interior." },
  { icon: Car, title: "Frota premium", desc: "Veículos modernos, limpos e climatizados." },
  { icon: Headphones, title: "Suporte 24h", desc: "Disponíveis quando você precisar." },
];

const Diferenciais = () => {
  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-surface">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3">
            Diferenciais
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            O padrão que sua empresa merece
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="group p-6 rounded-xl bg-background border border-border hover:border-accent/20 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/8 flex items-center justify-center mb-4 group-hover:bg-accent/12 transition-colors">
                <item.icon size={20} strokeWidth={1.5} className="text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-1.5">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
