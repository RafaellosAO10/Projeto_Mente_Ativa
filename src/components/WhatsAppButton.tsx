
import React from "react";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton = ({ phoneNumber, message = "Olá! Gostaria de informações sobre os serviços da Mente Ativa." }: WhatsAppButtonProps) => {
  const formatPhoneNumber = (phone: string) => {
    // Remove non-numeric characters
    return phone.replace(/\D/g, "");
  };

  const handleClick = () => {
    const formattedPhone = formatPhoneNumber(phoneNumber);
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
      aria-label="Entre em contato pelo WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
      <span className="absolute right-16 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-md text-sm font-medium opacity-0 transition-opacity duration-300 pointer-events-none whitespace-nowrap group-hover:opacity-100">
        Fale conosco
      </span>
    </button>
  );
};

export default WhatsAppButton;
