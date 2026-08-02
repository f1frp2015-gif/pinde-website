export const marketChrome = {
  en: {
    nav: [
      { label: "Systems", href: "/systems" },
      { label: "Supply formats", href: "/supply" },
      { label: "How it works", href: "/process" },
      { label: "Engineering", href: "/engineering" },
      { label: "Certification", href: "/certification" },
      { label: "About PINDÉ", href: "/about" },
    ],
    headerCta: "Send an RFQ",
    rfqEyebrow: "Technical RFQ",
    footer: {
      description:
        "Aluminium and FRP window-system materials, machined components and glass-free CKD kits from Chongqing for local fabrication.",
      systems: "System supply",
      company: "Working model",
      contact: "Contact",
      copyright: "PINDÉ Window System Supply",
      tagline: "System materials · Local fabrication",
    },
  },
  ru: {
    nav: [
      { label: "Системы", href: "/systems" },
      { label: "Форматы поставки", href: "/supply" },
      { label: "Порядок работы", href: "/process" },
      { label: "Техподдержка", href: "/engineering" },
      { label: "Сертификация", href: "/certification" },
      { label: "О компании", href: "/about" },
    ],
    headerCta: "Отправить запрос",
    rfqEyebrow: "Технический запрос",
    footer: {
      description:
        "Алюминиевые и стеклокомпозитные системные материалы, детали с обработкой и CKD-комплекты без стеклопакетов из Чунцина для локального производства.",
      systems: "Системные поставки",
      company: "Модель работы",
      contact: "Контакты",
      copyright: "PINDÉ · Поставки оконных систем",
      tagline: "Системные материалы · Локальное производство",
    },
  },
} as const;

export type MarketLocale = keyof typeof marketChrome;

export function isMarketLocale(value: string): value is MarketLocale {
  return value === "en" || value === "ru";
}
