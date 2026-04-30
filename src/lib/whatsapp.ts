export const WHATSAPP_NUMBER = "5541992028296";
export const PHONE_DISPLAY = "(41) 99202-8296";

export function whatsappLink(message?: string) {
  const text =
    message ??
    "Olá, gostaria de agendar uma avaliação estética no Espaço Elci Gomes.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
