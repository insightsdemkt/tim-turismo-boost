import { Clock, Shield, Users, MapPin, Car, Headphones } from "lucide-react";

const items = [
  { icon: Clock, title: "Pontualidade", desc: "Compromisso com horários rigorosos para sua tranquilidade." },
  { icon: Shield, title: "Segurança", desc: "Motoristas treinados e veículos revisados periodicamente." },
  { icon: Users, title: "Atendimento Personalizado", desc: "Soluções sob medida para cada tipo de evento ou demanda." },
  { icon: MapPin, title: "Cobertura Regional", desc: "Atendemos BH e toda a região metropolitana de Minas Gerais." },
  { icon: Car, title: "Frota Moderna", desc: "Veículos confortáveis, limpos e com ar-condicionado." },
  { icon: Headphones, title: "Suporte 24h", desc: "Equipe disponível para atender suas necessidades a qualquer momento." },
];

const Diferenciais = () => {
  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-background">
      <div className="container">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-accent text-center mb-3">
          Diferenciais
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-16">
          Por que confiar na Tim Turismo?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <item.icon size={28} strokeWidth={1.5} className="text-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
