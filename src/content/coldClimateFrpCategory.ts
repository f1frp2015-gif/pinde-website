import type { PageLocale } from "@/content/pages";

export type ColdClimateFrpCategoryContent = {
  locale: string;
  breadcrumbLabel: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  title: string;
  eyebrow: string;
  intro: string;
  supplyStatus: string;
  heroCards: { label: string; value: string }[];
  scopeTitle: string;
  scopeIntro: string;
  scopeItems: { title: string; description: string }[];
  productsTitle: string;
  productsIntro: string;
  categoryLabel: string;
  comparisonTitle: string;
  comparisonIntro: string;
  comparisonColumns: {
    criterion: string;
    fd90: string;
    fdtl140: string;
  };
  comparisonRows: { criterion: string; fd90: string; fdtl140: string }[];
  note: string;
  ctaTitle: string;
  cta: string;
  backLabel: string;
};

export const coldClimateFrpCategoryContent: Record<PageLocale, ColdClimateFrpCategoryContent> = {
  en: {
    locale: "en_US",
    breadcrumbLabel: "Cold-climate systems",
    seo: {
      title: "Cold-Climate FRP Window & Door Systems | PINDÉ",
      description:
        "Cold-climate full-FRP category with PHI-certified FD90 phB passive window system and FDTL140 side-press sliding doors for qualified winter projects.",
      keywords: [
        "cold climate FRP systems",
        "fiberglass windows for extreme cold",
        "FRP window and door category",
        "FD90 window",
        "PHI certified passive house window",
        "FDTL140 sliding door",
        "Grade 10 thermal window system",
      ],
    },
    title: "Cold-climate flagship systems",
    eyebrow: "Dedicated FRP category · FD90 + FDTL140",
    intro:
      "A focused category for the two full-FRP systems engineered around demanding winter envelopes. FD90 covers high-insulation casement and tilt-turn openings; FDTL140 extends cold-climate performance to large side-press sliding doors. No other PINDÉ systems are grouped in this category.",
    supplyStatus: "Dedicated cold-climate category — project qualification required",
    heroCards: [
      { label: "Systems in category", value: "2" },
      { label: "Frame depths", value: "90 + 140 mm" },
      { label: "Catalogue thermal grade", value: "Grade 10" },
      { label: "Product route", value: "Full-FRP" },
    ],
    scopeTitle: "A category with a clear boundary",
    scopeIntro:
      "This category is defined by material route, winter-performance positioning and verified product scope. PD75 remains a separate aluminium-composite engineering platform within the broader FRP family.",
    scopeItems: [
      {
        title: "Only two named systems",
        description:
          "The category contains FD90 and FDTL140 only, giving buyers a direct path to the two winter-focused full-FRP platforms.",
      },
      {
        title: "Full-FRP construction",
        description:
          "Both systems use pultruded glass-fibre composite profiles throughout the frame rather than an aluminium shell with a composite thermal core.",
      },
      {
        title: "Cold-climate qualification",
        description:
          "FD90 adds PHI component certification at phB for the cool, temperate climate zone; both systems retain project-specific verification of glass, seals, hardware, joints and installation.",
      },
    ],
    productsTitle: "Two systems in the category",
    productsIntro:
      "Choose by opening type and scale: FD90 for casement and tilt-turn windows, or FDTL140 for heavy side-press sliding doors.",
    categoryLabel: "Cold-climate category",
    comparisonTitle: "Category comparison",
    comparisonIntro:
      "The comparison separates the supplied 2026 catalogue values from FD90's PHI certificate. Every thermal value remains tied to its identified configuration rather than serving as a universal project guarantee.",
    comparisonColumns: {
      criterion: "Criterion",
      fd90: "FD90",
      fdtl140: "FDTL140",
    },
    comparisonRows: [
      { criterion: "Product type", fd90: "Casement / tilt-turn window", fdtl140: "Side-press sliding door" },
      { criterion: "Construction", fd90: "Full-FRP", fdtl140: "Full-FRP" },
      { criterion: "Nominal frame depth", fd90: "90 mm", fdtl140: "140 mm" },
      { criterion: "Maximum sash / leaf load", fd90: "130 kg", fdtl140: "200 kg" },
      { criterion: "Catalogue frame Uf", fd90: "0.85 W/(m²·K)", fdtl140: "0.90 W/(m²·K)" },
      { criterion: "Best listed whole-unit Uw", fd90: "0.85 W/(m²·K)", fdtl140: "1.02 W/(m²·K)" },
      { criterion: "Catalogue thermal grade", fd90: "Grade 10", fdtl140: "Grade 10" },
      { criterion: "PHI component certificate", fd90: "2491wi03 · phB · valid through 2026", fdtl140: "Not stated" },
    ],
    note:
      "Category inclusion does not replace project qualification. Final thermal, structural, air, water, acoustic and durability claims must be confirmed for the ordered size, glazing, hardware, joints and installation method.",
    ctaTitle: "Select a cold-climate FRP system",
    cta: "Request category technical pack",
    backLabel: "Back to all FRP systems",
  },
  ru: {
    locale: "ru_RU",
    breadcrumbLabel: "Системы для холодного климата",
    seo: {
      title: "Системы FRP для холодного климата | PINDÉ",
      description:
        "Категория полностью FRP для холодного климата: сертифицированные PHI окна FD90 класса phB и раздвижные двери FDTL140 для квалифицированных зимних проектов.",
      keywords: [
        "системы FRP для холодного климата",
        "стеклокомпозитные окна для сильного мороза",
        "категория окон и дверей FRP",
        "окно FD90",
        "сертифицированное PHI окно пассивного дома",
        "раздвижная дверь FDTL140",
        "оконная система класс теплоизоляции 10",
      ],
    },
    title: "Флагманские системы для холодного климата",
    eyebrow: "Отдельная категория FRP · FD90 + FDTL140",
    intro:
      "Специализированная категория из двух полностью FRP систем для суровых зимних ограждающих конструкций. FD90 закрывает поворотные и поворотно-откидные проёмы, а FDTL140 переносит зимнюю энергоэффективность на крупные раздвижные двери с боковым прижимом. Другие системы PINDÉ в эту категорию не входят.",
    supplyStatus: "Отдельная категория для холодного климата — требуется квалификация проекта",
    heroCards: [
      { label: "Систем в категории", value: "2" },
      { label: "Глубина рам", value: "90 + 140 мм" },
      { label: "Каталожный класс теплоизоляции", value: "Класс 10" },
      { label: "Материальный маршрут", value: "Полностью FRP" },
    ],
    scopeTitle: "Категория с чёткими границами",
    scopeIntro:
      "Категория определяется материалом, зимним позиционированием и подтверждённым продуктовым составом. PD75 остаётся отдельной алюминиево-композитной инженерной платформой внутри более широкого семейства FRP.",
    scopeItems: [
      {
        title: "Только две системы",
        description:
          "В категорию входят исключительно FD90 и FDTL140 — прямой выбор между двумя зимними платформами полностью FRP.",
      },
      {
        title: "Конструкция полностью FRP",
        description:
          "Обе системы используют пултрузионные стеклокомпозитные профили по всему сечению рамы, а не алюминиевые оболочки с композитным сердечником.",
      },
      {
        title: "Квалификация для холода",
        description:
          "FD90 имеет сертификат компонента PHI класса phB для прохладной умеренной зоны; обе системы требуют проектной проверки стекла, уплотнений, фурнитуры, соединений и монтажа.",
      },
    ],
    productsTitle: "Две системы в категории",
    productsIntro:
      "Выбор определяется типом и масштабом проёма: FD90 для поворотных и поворотно-откидных окон, FDTL140 для тяжёлых раздвижных дверей с боковым прижимом.",
    categoryLabel: "Категория для холодного климата",
    comparisonTitle: "Сравнение систем категории",
    comparisonIntro:
      "В сравнении отдельно показаны значения каталога 2026 года и сертификата PHI для FD90. Каждый теплотехнический показатель относится к конкретной конфигурации и не является универсальной гарантией проекта.",
    comparisonColumns: {
      criterion: "Критерий",
      fd90: "FD90",
      fdtl140: "FDTL140",
    },
    comparisonRows: [
      { criterion: "Тип продукта", fd90: "Поворотное / поворотно-откидное окно", fdtl140: "Раздвижная дверь с боковым прижимом" },
      { criterion: "Конструкция", fd90: "Полностью FRP", fdtl140: "Полностью FRP" },
      { criterion: "Номинальная глубина рамы", fd90: "90 мм", fdtl140: "140 мм" },
      { criterion: "Максимальная масса створки", fd90: "130 кг", fdtl140: "200 кг" },
      { criterion: "Каталожный Uf рамы", fd90: "0,85 Вт/(м²·K)", fdtl140: "0,90 Вт/(м²·K)" },
      { criterion: "Лучший каталожный Uw изделия", fd90: "0,85 Вт/(м²·K)", fdtl140: "1,02 Вт/(м²·K)" },
      { criterion: "Каталожный класс теплоизоляции", fd90: "Класс 10", fdtl140: "Класс 10" },
      { criterion: "Сертификат компонента PHI", fd90: "2491wi03 · phB · действует до конца 2026 года", fdtl140: "Не указан" },
    ],
    note:
      "Принадлежность к категории не заменяет проектную квалификацию. Итоговые показатели теплотехники, прочности, воздухо- и водопроницаемости, звукоизоляции и долговечности подтверждаются для заказанных размеров, стеклопакета, фурнитуры, соединений и монтажа.",
    ctaTitle: "Выбрать систему FRP для холодного климата",
    cta: "Запросить технический пакет категории",
    backLabel: "Назад ко всем системам FRP",
  },
};
