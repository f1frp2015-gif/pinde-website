export const marketChrome = {
  en: {
    nav: [
      { label: "Systems", href: "/systems" },
      { label: "Supply formats", href: "/supply" },
      { label: "How it works", href: "/process" },
      { label: "Engineering support", href: "/engineering" },
      { label: "Conformity", href: "/certification" },
      { label: "About PINDÉ", href: "/about" },
    ],
    headerCta: "Send an RFQ",
    rfqEyebrow: "Technical RFQ",
    footer: {
      description:
        "Aluminium and FRP profile systems, machined components and glass-free CKD kits from Chongqing for local window and door fabrication.",
      systems: "System supply",
      company: "Working model",
      contact: "Contact",
      copyright: "PINDÉ Profile System Supply",
      tagline: "Prepared in Chongqing · Fabricated locally",
    },
  },
  ru: {
    nav: [
      { label: "Системы", href: "/systems" },
      { label: "Форматы поставки", href: "/supply" },
      { label: "Порядок работы", href: "/process" },
      { label: "Инженерная поддержка", href: "/engineering" },
      { label: "Соответствие", href: "/certification" },
      { label: "О компании", href: "/about" },
    ],
    headerCta: "Отправить запрос",
    rfqEyebrow: "Технический запрос",
    footer: {
      description:
        "Алюминиевые и стеклокомпозитные профильные системы, обработанные детали и CKD-комплекты без стеклопакетов из Чунцина для местного производства окон и дверей.",
      systems: "Системные поставки",
      company: "Модель работы",
      contact: "Контакты",
      copyright: "PINDÉ · Поставки профильных систем",
      tagline: "Подготовка в Чунцине · Сборка на месте",
    },
  },
} as const;

export type MarketLocale = keyof typeof marketChrome;

export function isMarketLocale(value: string): value is MarketLocale {
  return value === "en" || value === "ru";
}
