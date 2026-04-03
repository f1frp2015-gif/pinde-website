"use client";

import { MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/constants";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${BRAND.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello, I'm interested in PINDE windows & doors. Could you provide more information?")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="hidden sm:inline text-sm font-medium">Chat with us</span>
    </a>
  );
}
