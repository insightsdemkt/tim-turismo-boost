import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Quais tipos de veículos estão disponíveis?", a: "Trabalhamos com sedans executivos, vans e micro-ônibus, todos climatizados, revisados e higienizados. O veículo é escolhido conforme o número de passageiros e tipo de serviço." },
  { q: "Vocês atendem fora de Belo Horizonte?", a: "Sim, atendemos toda a região metropolitana e o interior de Minas Gerais. Não realizamos transporte para fora do estado." },
  { q: "Como solicitar um orçamento?", a: "Envie uma mensagem pelo WhatsApp (31) 99816-9654 com data, horário, local de partida, destino e número de passageiros. Respondemos em poucos minutos." },
  { q: "É possível contratar transporte recorrente?", a: "Sim, oferecemos planos de fretamento contínuo com rotas e horários fixos ou flexíveis conforme a necessidade da empresa." },
  { q: "Os motoristas são qualificados?", a: "Todos os motoristas possuem habilitação adequada, treinamento em direção defensiva e postura profissional para atendimento corporativo." },
  { q: "Vocês fazem receptivo no Aeroporto de Confins?", a: "Sim, realizamos receptivos nos aeroportos de Confins e Pampulha com placa de identificação e acompanhamento do status do voo." },
  { q: "Qual a antecedência mínima para reservar?", a: "Recomendamos 48 horas, mas atendemos demandas urgentes conforme disponibilidade da frota." },
  { q: "Quais formas de pagamento são aceitas?", a: "PIX, transferência bancária, cartão de crédito e faturamento para empresas com contrato." },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-surface">
      <div className="container max-w-3xl">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Perguntas frequentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border py-1">
              <AccordionTrigger className="font-semibold text-[15px] text-foreground text-left hover:text-accent hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
