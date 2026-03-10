import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5531998169654?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20grátis%20no%20local.";

const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-whatsapp text-whatsapp-foreground font-heading font-semibold text-sm px-5 py-3.5 rounded-full shadow-lg hover:opacity-90 transition-opacity"
      aria-label="Orçamento Grátis no Local"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">Orçamento Grátis no Local</span>
    </a>
  );
};

export default WhatsAppFloat;
