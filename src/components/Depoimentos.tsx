import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const depoimentos = [
  { nome: "Carlos M.", cargo: "Gerente de Logística", texto: "Serviço impecável. Nossos executivos sempre chegam no horário e com total conforto. Recomendo a Tim Turismo para qualquer empresa em BH.", estrelas: 5 },
  { nome: "Ana Paula S.", cargo: "Assistente Executiva", texto: "Contratamos para um evento corporativo com 200 convidados. A logística foi perfeita, sem nenhum atraso. Profissionalismo exemplar.", estrelas: 5 },
  { nome: "Roberto F.", cargo: "Diretor Comercial", texto: "Utilizo o serviço de receptivo no aeroporto toda semana. Motoristas educados, veículos limpos e pontuais. Excelente custo-benefício.", estrelas: 5 },
  { nome: "Mariana L.", cargo: "Coordenadora de RH", texto: "O transporte de funcionários da nossa empresa é feito pela Tim Turismo há 3 anos. Nunca tivemos problemas. Confiança total.", estrelas: 5 },
  { nome: "Felipe G.", cargo: "Organizador de Eventos", texto: "Já trabalhei com diversas empresas de transporte, mas a Tim Turismo se destaca pela organização e comunicação. Parceria duradoura.", estrelas: 5 },
  { nome: "Juliana R.", cargo: "Gerente de Hotelaria", texto: "Nossos hóspedes sempre elogiam o serviço de transfer. A Tim Turismo é nossa parceira de confiança para receptivos em hotéis.", estrelas: 5 },
];

const Depoimentos = () => {
  const [current, setCurrent] = useState(0);
  const itemsPerView = typeof window !== "undefined" && window.innerWidth >= 768 ? 2 : 1;
  const maxIndex = depoimentos.length - itemsPerView;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-accent text-center mb-3">
          Depoimentos
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-16">
          O que dizem nossos clientes
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * (100 / itemsPerView)}%)` }}
            >
              {depoimentos.map((d, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="border border-border rounded p-6 h-full bg-background">
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: d.estrelas }).map((_, si) => (
                        <Star key={si} size={16} className="fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="font-body text-muted-foreground leading-relaxed mb-6 italic">
                      "{d.texto}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-heading font-bold text-sm text-foreground">
                        {d.nome.charAt(0)}
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-sm text-foreground">{d.nome}</p>
                        <p className="font-body text-xs text-muted-foreground">{d.cargo}</p>
                      </div>
                      <img
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_42x16dp.png"
                        alt="Google"
                        className="ml-auto h-4 opacity-60"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              disabled={current === 0}
              className="p-2 border border-border rounded text-accent hover:bg-secondary disabled:opacity-30 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              disabled={current >= maxIndex}
              className="p-2 border border-border rounded text-accent hover:bg-secondary disabled:opacity-30 transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
