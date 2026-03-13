import { Users, Snowflake, ShieldCheck, Sparkles } from "lucide-react";

const veiculos = [
  { img: "/imagens/frota-van-branca.jpg", title: "Van Executiva", cap: "Até 18 passageiros" },
  { img: "/imagens/frota-micro-onibus.jpg", title: "Micro-ônibus", cap: "Até 32 passageiros" },
  { img: "/imagens/frota-van-executiva.jpg", title: "Van Comfort", cap: "Até 20 passageiros" },
  { img: "/imagens/frota-van-estrada.jpg", title: "Van Sprinter", cap: "Até 15 passageiros" },
];

const galeria = [
  { img: "/imagens/frota-garagem.jpg", alt: "Frota estacionada na garagem" },
  { img: "/imagens/frota-evento.jpg", alt: "Transporte para eventos" },
  { img: "/imagens/frota-hotel.jpg", alt: "Receptivo em hotéis" },
  { img: "/imagens/frota-aeroporto.jpg", alt: "Transfer no aeroporto" },
  { img: "/imagens/frota-comboio.jpg", alt: "Comboio de veículos" },
  { img: "/imagens/frota-garagem-frontal.jpg", alt: "Garagem com frota completa" },
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

        {/* Cards principais */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {veiculos.map((v) => (
            <div key={v.title} className="group rounded-xl overflow-hidden bg-background border border-border">
              <div className="aspect-[4/3] overflow-hidden">
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

        {/* Galeria de fotos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
          {galeria.map((g) => (
            <div key={g.alt} className="rounded-xl overflow-hidden aspect-[16/10]">
              <img
                src={g.img}
                alt={g.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
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
