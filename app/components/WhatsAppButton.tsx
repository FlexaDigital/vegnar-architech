// components/WhatsAppButton.tsx
'use client';

import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919998040416"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 left-5 z-50 flex items-center gap-2 bg-[#135a6e] dark:bg-[#128C7E] text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={20} className="transition-transform duration-300 group-hover:scale-110" />
      <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-300">
        Contact Us
      </span>
    </a>
  );
};

export default WhatsAppButton;
