import { useEffect, useRef, useState } from "react";
import { MessageSquare, ClipboardList, CheckCircle } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Entre em Contato",
    desc: "Envie uma mensagem pelo WhatsApp ou ligue. Informe o tipo de serviço, data, horário e quantidade de passageiros.",
  },
  {
    num: "02",
    icon: ClipboardList,
    title: "Planejamento",
    desc: "Nossa equipe elabora a melhor solução para sua demanda, com rota otimizada e veículos adequados.",
  },
  {
    num: "03",
    icon: CheckCircle,
    title: "Execução Impecável",
    desc: "No dia agendado, nosso motorista estará no local combinado, pontualmente, com veículo limpo e confortável.",
  },
];

const ComoFunciona = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = Number(entry.target.getAttribute("data-step"));
            setActiveStep(stepIndex);
          }
        });
      },
      { threshold: 0.6 }
    );

    const stepElements = sectionRef.current?.querySelectorAll("[data-step]");
    stepElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-background" ref={sectionRef}>
      <div className="container">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-accent text-center mb-3">
          Como Funciona
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-16">
          Simples, rápido e eficiente
        </h2>

        <div className="max-w-2xl mx-auto flex flex-col gap-12">
          {steps.map((step, i) => (
            <div
              key={step.num}
              data-step={i}
              className={`flex gap-6 transition-opacity duration-700 ${
                i === activeStep ? "opacity-100" : "opacity-30"
              }`}
            >
              <div className="flex flex-col items-center flex-shrink-0">
                <span className="font-heading font-bold text-2xl text-accent">
                  {step.num}
                </span>
                {i < steps.length - 1 && (
                  <div className="w-px h-full bg-border mt-2" />
                )}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <step.icon size={22} strokeWidth={1.5} className="text-foreground" />
                  <h3 className="font-heading font-semibold text-xl text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
