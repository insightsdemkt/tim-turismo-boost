import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Quais tipos de veículos a Tim Turismo disponibiliza?", a: "Trabalhamos com sedans executivos, vans e micro-ônibus, todos com ar-condicionado, revisados e higienizados. A escolha do veículo é feita conforme a quantidade de passageiros e o tipo de serviço." },
  { q: "Vocês atendem fora de Belo Horizonte?", a: "Sim, atendemos toda a região metropolitana de Belo Horizonte e demais cidades do estado de Minas Gerais. Não realizamos transporte para fora do estado." },
  { q: "Como solicitar um orçamento?", a: "Basta enviar uma mensagem pelo WhatsApp (31) 99816-9654 com as informações do serviço desejado: data, horário, local de partida, destino e número de passageiros. Respondemos em poucos minutos." },
  { q: "É possível contratar transporte de funcionários de forma contínua?", a: "Sim, oferecemos planos de fretamento contínuo para transporte de colaboradores, com rotas e horários fixos ou flexíveis conforme a necessidade da empresa." },
  { q: "Os motoristas são treinados?", a: "Todos os nossos motoristas são profissionais experientes, com habilitação adequada, treinamento em direção defensiva e postura de atendimento ao cliente corporativo." },
  { q: "Vocês fazem receptivo no Aeroporto de Confins?", a: "Sim, realizamos receptivos nos aeroportos de Confins e Pampulha, com placa de identificação e acompanhamento do voo para ajuste de horário em caso de atrasos." },
  { q: "Qual a antecedência mínima para reservar?", a: "Recomendamos pelo menos 48 horas de antecedência para garantir disponibilidade, mas atendemos também demandas de última hora conforme a disponibilidade da frota." },
  { q: "Quais formas de pagamento são aceitas?", a: "Aceitamos pagamento via transferência bancária, PIX, cartão de crédito e faturamento para empresas com contrato. Consulte condições especiais para contratos recorrentes." },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-3xl">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-accent text-center mb-3">
          Perguntas Frequentes
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-16">
          Tire suas dúvidas
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="font-heading font-semibold text-base text-foreground text-left hover:text-accent hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground leading-relaxed">
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
