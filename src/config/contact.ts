// Configuração de contato WhatsApp
export const WHATSAPP_NUMBER = "5515974000448";

// Mensagem padrão (opcional, pode ser customizada por página)
export const WHATSAPP_MESSAGE =
  "Olá vim atraves do site da Bee U School, Gostaria de saber sobre os planos, por favor.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
