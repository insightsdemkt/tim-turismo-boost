import { Briefcase } from "lucide-react";

const projetos = [
  { num: "500+", label: "Eventos atendidos" },
  { num: "10.000+", label: "Passageiros transportados" },
  { num: "8+", label: "Anos de experiência" },
  { num: "50+", label: "Empresas parceiras" },
];

const ProjetosRealizados = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-accent text-center mb-3">
          Projetos Realizados
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-16">
          Números que falam por nós
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {projetos.map((p) => (
            <div key={p.label} className="text-center">
              <Briefcase size={24} strokeWidth={1.5} className="text-foreground mx-auto mb-3" />
              <p className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-1">
                {p.num}
              </p>
              <p className="font-body text-sm text-muted-foreground">{p.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjetosRealizados;
