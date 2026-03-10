import { Phone, ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5531998169654?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20";

const servicos = [
  { title: "Transporte Corporativo", desc: "Deslocamento de executivos e equipes com conforto e pontualidade para reuniões, visitas e compromissos." },
  { title: "Receptivos para Aeroporto", desc: "Recepção e traslado de passageiros no Aeroporto de Confins e Pampulha com placa de identificação." },
  { title: "Receptivos em Hotéis", desc: "Transfer entre hotéis e locais de eventos, restaurantes ou pontos turísticos em BH." },
  { title: "Eventos Corporativos", desc: "Logística de transporte completa para convenções, feiras, congressos e eventos empresariais." },
  { title: "Eventos Sociais", desc: "Transporte organizado para casamentos, formaturas, confraternizações e celebrações." },
  { title: "Transporte de Funcionários", desc: "Fretamento contínuo ou temporário para deslocamento de colaboradores da sua empresa." },
  { title: "Transporte Sob Demanda", desc: "Serviço flexível para necessidades pontuais, com agendamento rápido e eficiente." },
  { title: "Traslados para Feiras e Shows", desc: "Transporte para grandes eventos, feiras de negócios e shows em Minas Gerais." },
];

const Solucoes = () => {
  return (
    <section id="solucoes" className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-accent text-center mb-3">
          Nossas Soluções
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-16">
          Serviços de transporte corporativo
        </h2>

        <div className="flex flex-col gap-0">
          {servicos.map((s, i) => (
            <div
              key={s.title}
              className={`flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 py-6 px-2 ${
                i < servicos.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <h3 className="font-heading font-semibold text-lg text-foreground md:w-1/4 flex-shrink-0">
                {s.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed md:flex-1">
                {s.desc}
              </p>
              <a
                href={`${WHATSAPP_LINK}${encodeURIComponent(s.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground font-heading font-semibold text-sm px-5 py-2.5 rounded hover:opacity-90 transition-opacity flex-shrink-0 w-fit"
              >
                <Phone size={14} />
                Solicitar Orçamento
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solucoes;
