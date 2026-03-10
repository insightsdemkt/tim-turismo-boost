import { ArrowUpRight } from "lucide-react";

const WA_BASE = "https://wa.me/5531998169654?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20";

const servicos = [
  { title: "Transporte Corporativo", desc: "Deslocamento executivo com conforto para reuniões e compromissos." },
  { title: "Receptivo Aeroporto", desc: "Transfer nos aeroportos de Confins e Pampulha com identificação." },
  { title: "Receptivo em Hotéis", desc: "Traslado entre hotéis e locais de eventos em BH." },
  { title: "Eventos Corporativos", desc: "Logística completa para convenções, congressos e feiras." },
  { title: "Eventos Sociais", desc: "Transporte para casamentos, formaturas e confraternizações." },
  { title: "Transporte de Funcionários", desc: "Fretamento contínuo ou temporário para colaboradores." },
  { title: "Sob Demanda", desc: "Serviço flexível para necessidades pontuais e urgentes." },
  { title: "Traslados para Feiras e Shows", desc: "Transporte para grandes eventos em Minas Gerais." },
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

        <div className="space-y-0 border-t border-border">
          {servicos.map((s) => (
            <a
              key={s.title}
              href={`${WA_BASE}${encodeURIComponent(s.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-6 py-5 px-1 border-b border-border hover:bg-surface/50 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5 hidden sm:block">
                  {s.desc}
                </p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="hidden md:inline text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  Solicitar orçamento
                </span>
                <div className="w-8 h-8 rounded-full border border-border group-hover:border-accent group-hover:bg-accent flex items-center justify-center transition-all">
                  <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-accent-foreground transition-colors" />
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
