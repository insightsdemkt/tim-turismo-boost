const QuemSomos = () => {
  return (
    <section id="quem-somos" className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-3xl">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-accent text-center mb-3">
          Quem Somos
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-10">
          Tim Turismo Transporte Corporativo
        </h2>

        <div className="space-y-6 font-body text-muted-foreground leading-relaxed text-center md:text-left">
          <p>
            A <strong className="text-foreground">Tim Turismo</strong> é referência em transporte corporativo em Belo Horizonte e região metropolitana de Minas Gerais. Com anos de experiência no mercado, oferecemos soluções de logística de transporte para empresas que valorizam pontualidade, segurança e conforto.
          </p>
          <p>
            Nossa frota moderna e nossos motoristas experientes garantem que cada deslocamento — seja um receptivo no aeroporto, um evento corporativo ou o transporte diário de funcionários — seja realizado com excelência e profissionalismo.
          </p>
          <p>
            Atendemos exclusivamente o estado de Minas Gerais, o que nos permite conhecer profundamente as rotas, condições e necessidades da região, oferecendo um serviço verdadeiramente especializado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
