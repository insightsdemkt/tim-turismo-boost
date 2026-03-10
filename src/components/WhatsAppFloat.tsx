import { MessageCircle } from "lucide-react";

const WA = "https://wa.me/5531998169654?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20grátis.";

const WhatsAppFloat = () => {
  return (
    <a
      href={WA}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-whatsapp text-whatsapp-foreground font-semibold text-sm px-5 py-3.5 rounded-full shadow-lg shadow-whatsapp/20 hover:shadow-whatsapp/30 hover:scale-105 transition-all"
      aria-label="Orçamento Grátis no Local"
    >
      <MessageCircle size={18} />
      <span className="hidden sm:inline">Orçamento Grátis no Local</span>
    </a>
  );
};

export default WhatsAppFloat;
