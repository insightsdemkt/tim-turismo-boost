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

          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden aspect-[16/10]">
              <img
                src="/imagens/frota-garagem-frontal.jpg"
                alt="Frota Tim Turismo estacionada"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl overflow-hidden aspect-[4/3]">
                <img src="/imagens/frota-garagem.jpg" alt="Garagem Tim Turismo" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="rounded-xl overflow-hidden aspect-[4/3]">
                <img src="/imagens/frota-van-branca.jpg" alt="Van Tim Turismo" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              {[
                { num: "8+", label: "Anos" },
                { num: "500+", label: "Eventos" },
                { num: "10k+", label: "Passageiros" },
                { num: "50+", label: "Empresas" },
              ].map((stat) => (
                <div key={stat.label} className="bg-surface rounded-xl p-3 text-center">
                  <p className="text-lg sm:text-xl font-bold text-foreground">{stat.num}</p>
                  <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
