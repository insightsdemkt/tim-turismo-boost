import { ArrowUpRight } from "lucide-react";

const WA_BASE = "https://wa.me/5531998169654?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20";

const servicos = [
  { title: "Transporte Corporativo", desc: "Deslocamento executivo com conforto para reuniões e compromissos.", img: "/imagens/servico-corporativo.jpg" },
  { title: "Receptivo Aeroporto", desc: "Transfer nos aeroportos de Confins e Pampulha com identificação.", img: "/imagens/servico-aeroporto.jpg" },
  { title: "Receptivo em Hotéis", desc: "Traslado entre hotéis e locais de eventos em BH.", img: "/imagens/servico-hotel.jpg" },
  { title: "Eventos Corporativos", desc: "Logística completa para convenções, congressos e feiras.", img: "/imagens/servico-eventos-corp.jpg" },
  { title: "Eventos Sociais", desc: "Transporte para casamentos, formaturas e confraternizações.", img: "/imagens/servico-eventos-social.jpg" },
  { title: "Transporte de Funcionários", desc: "Fretamento contínuo ou temporário para colaboradores.", img: "/imagens/servico-funcionarios.jpg" },
  { title: "Sob Demanda", desc: "Serviço flexível para necessidades pontuais e urgentes.", img: "/imagens/servico-demanda.jpg" },
  { title: "Traslados para Feiras e Shows", desc: "Transporte para grandes eventos em Minas Gerais.", img: "/imagens/servico-feiras.jpg" },
];

const Solucoes = () => {
  return (
    <section id="solucoes" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3">
            Soluções
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
            Tudo que sua operação precisa
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Cada serviço desenhado para resolver um problema real do seu dia a dia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicos.map((s) => (
            <a
              key={s.title}
              href={`${WA_BASE}${encodeURIComponent(s.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden bg-surface border border-border hover:border-accent/30 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={`${s.title} - Tim Turismo BH`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-sm text-foreground group-hover:text-accent transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                  <div className="w-7 h-7 rounded-full border border-border group-hover:border-accent group-hover:bg-accent flex items-center justify-center flex-shrink-0 mt-0.5 transition-all">
                    <ArrowUpRight size={12} className="text-muted-foreground group-hover:text-accent-foreground transition-colors" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solucoes;
