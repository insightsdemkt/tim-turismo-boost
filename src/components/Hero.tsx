import { ArrowRight, CheckCircle } from "lucide-react";

const WA = "https://wa.me/5531998169654?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.";

const badges = [
  "Frota própria e revisada",
  "Atendimento 24h",
  "Cobertura em todo MG",
];

const Hero = () => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-background pt-[72px]">
      <div className="container py-20 md:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Transporte Corporativo em BH
            </div>

            <h1 className="text-4xl md:text-[3.25rem] lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight text-foreground text-balance mb-5">
              Seu time no lugar certo,
              <span className="text-accent"> na hora certa.</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
              Transporte executivo para empresas que não podem se dar ao luxo de atrasos. Receptivos, traslados e eventos em Minas Gerais.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-semibold text-sm px-7 py-3.5 rounded-lg hover:bg-accent/90 transition-colors"
              >
                Solicitar Orçamento Grátis
                <ArrowRight size={16} />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-semibold text-sm px-7 py-3.5 rounded-lg hover:bg-secondary/80 transition-colors"
              >
                Como funciona?
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {badges.map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle size={15} className="text-whatsapp flex-shrink-0" />
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="/imagens/hero-bg.jpg"
                alt="Frota Tim Turismo - Transporte corporativo em Belo Horizonte"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 bg-background rounded-xl p-4 shadow-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-whatsapp/10 flex items-center justify-center">
                  <CheckCircle size={18} className="text-whatsapp" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Clientes atendidos</p>
                  <p className="text-lg font-bold text-foreground">10.000+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
