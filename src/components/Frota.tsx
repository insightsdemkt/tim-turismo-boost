import { Users, Snowflake, ShieldCheck, Sparkles } from "lucide-react";

const veiculos = [
  { img: "/imagens/frota-sedan.jpg", title: "Sedan Executivo", cap: "Até 4 passageiros" },
  { img: "/imagens/frota-van.jpg", title: "Van Executiva", cap: "Até 15 passageiros" },
  { img: "/imagens/frota-micro.jpg", title: "Micro-ônibus", cap: "Até 28 passageiros" },
  { img: "/imagens/frota-interior.jpg", title: "Interior Premium", cap: "Conforto total" },
];

const destaques = [
  { icon: Snowflake, label: "Ar-condicionado" },
  { icon: ShieldCheck, label: "Revisão periódica" },
  { icon: Sparkles, label: "Higienizados" },
  { icon: Users, label: "Capacidade flexível" },
];

const Frota = () => {
  return (
    <section id="frota" className="py-20 md:py-28 bg-surface">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3">
            Nossa Frota
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
            Veículos para cada necessidade
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Frota própria, moderna e rigorosamente mantida para garantir conforto e segurança em cada viagem.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {veiculos.map((v) => (
            <div key={v.title} className="group rounded-xl overflow-hidden bg-background border border-border">
              <div className="aspect-square overflow-hidden">
                <img
                  src={v.img}
                  alt={`${v.title} - Frota Tim Turismo`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-sm text-foreground">{v.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{v.cap}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {destaques.map((d) => (
            <div key={d.label} className="flex items-center gap-2 text-sm text-muted-foreground">
              <d.icon size={16} strokeWidth={1.5} className="text-accent" />
              {d.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Frota;
