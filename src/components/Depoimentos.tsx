import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const depoimentos = [
  { nome: "Rafael Ribeiro Reis", estrelas: 5, texto: "Excelente empresa de turismo. Ônibus muito confortável e motoristas muito profissionais. A viagem foi tranquila do início ao fim." },
  { nome: "Juliana Martins", estrelas: 5, texto: "Equipe muito organizada e atendimento excelente. Fizemos uma excursão com eles e foi tudo perfeito. Recomendo!" },
  { nome: "Carlos Eduardo Lopes", estrelas: 4, texto: "Boa empresa de fretamento. Ônibus limpo e confortável. Apenas houve um pequeno atraso na saída." },
  { nome: "Fernanda Souza", estrelas: 5, texto: "Já viajei algumas vezes com a Timm Tur e sempre fui muito bem atendida. Motoristas educados e viagem segura." },
  { nome: "Marcelo Andrade", estrelas: 5, texto: "Empresa séria e confiável. Atendimento rápido e ótima organização nas viagens." },
  { nome: "Patrícia Gomes", estrelas: 5, texto: "Experiência ótima. Veículos bem conservados e viagem super confortável." },
];

const Depoimentos = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? depoimentos.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === depoimentos.length - 1 ? 0 : c + 1));

  const visible = [
    depoimentos[current],
    depoimentos[(current + 1) % depoimentos.length],
  ];

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3">
              Avaliações Reais
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              O que dizem no Google
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Avaliações verificadas de clientes reais no Google Maps.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {visible.map((d, i) => (
            <div
              key={`${current}-${i}`}
              className="bg-surface rounded-xl p-7 border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                {/* Google icon */}
                <svg className="h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star
                      key={si}
                      size={14}
                      className={si < d.estrelas ? "fill-accent text-accent" : "text-border"}
                    />
                  ))}
                </div>
              </div>
              <p className="text-foreground leading-relaxed mb-6">
                "{d.texto}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-xs font-bold text-accent">
                  {d.nome.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{d.nome}</p>
                  <p className="text-xs text-muted-foreground">Avaliação no Google</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
