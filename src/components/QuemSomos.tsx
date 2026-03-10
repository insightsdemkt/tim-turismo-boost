const QuemSomos = () => {
  return (
    <section id="quem-somos" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3">
              Sobre Nós
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
              Quem está por trás do volante importa.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A <strong className="text-foreground font-semibold">Tim Turismo</strong> é referência em transporte corporativo em Belo Horizonte. Com anos de operação, entendemos que cada minuto do seu tempo tem valor — e cada viagem precisa refletir a seriedade da sua empresa.
              </p>
              <p>
                Nossa frota é própria, moderna e rigorosamente revisada. Nossos motoristas são treinados não só em direção, mas em postura, discrição e atendimento executivo.
              </p>
              <p>
                Atendemos exclusivamente Minas Gerais, o que nos dá domínio total das rotas, condições e particularidades da região. Conhecemos cada caminho — e sempre escolhemos o melhor.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "8+", label: "Anos de experiência" },
              { num: "500+", label: "Eventos atendidos" },
              { num: "10k+", label: "Passageiros transportados" },
              { num: "50+", label: "Empresas parceiras" },
            ].map((stat) => (
              <div key={stat.label} className="bg-surface rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-foreground mb-1">{stat.num}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
