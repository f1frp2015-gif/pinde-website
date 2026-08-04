import { MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/constants";
import type { MarketLocale } from "@/content/marketChrome";

export default function WhatsAppButton({ locale }: { locale: MarketLocale }) {
  const isRussian = locale === "ru";
  const message = isRussian
    ? "Здравствуйте! Интересуют профильные системы и комплекты PINDÉ для оконного производства."
    : "Hello! I am interested in PINDÉ profile systems and kits for window fabrication.";
  const whatsappUrl = `https://wa.me/${BRAND.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex min-h-12 items-center gap-2 bg-[#168B47] px-4 py-3 text-white shadow-[0_8px_28px_rgba(16,47,69,0.22)] transition-colors hover:bg-[#10753B]"
      aria-label={isRussian ? "Написать в WhatsApp" : "Chat on WhatsApp"}
    >
      <MessageCircle size={24} />
      <span className="hidden text-[12px] font-bold sm:inline">WhatsApp</span>
    </a>
  );
}
