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
        "Full-FRP systems for cold-region projects: the FD90 PHI component window and the FDTL140 compression-seal sliding door set, both subject to configuration review.",
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
    title: "Full-FRP systems for cold-region projects",
    eyebrow: "FD90 window · FDTL140 sliding door set",
    intro:
      "This category contains two full-FRP systems. FD90 covers casement and tilt-and-turn window units; FDTL140 covers large sliding door sets with leaf compression at closing. Each project is checked against the cited certificate or catalogue configuration.",
    supplyStatus: "Catalogue and certificate data available · project qualification required",
    heroCards: [
      { label: "Systems in category", value: "2" },
      { label: "Construction depths", value: "90 + 140 mm" },
      { label: "Catalogue thermal grade", value: "Grade 10" },
      { label: "Profile construction", value: "Full-FRP" },
    ],
    scopeTitle: "A category with a clear boundary",
    scopeIntro:
      "The grouping is based on profile construction and documented cold-region data. PD75 and PD95 use aluminium-composite sections and therefore remain in a separate category.",
    scopeItems: [
      {
        title: "Only two named systems",
        description:
          "The category contains FD90 and FDTL140 only: one window system and one compression-seal sliding door system.",
      },
      {
        title: "Full-FRP construction",
        description:
          "Both systems use pultruded glass-fibre composite profiles for the frame construction rather than aluminium shells connected by a composite insulating core.",
      },
      {
        title: "Cold-climate qualification",
        description:
          "FD90 adds PHI component certification at phB for the cool, temperate climate zone; both systems retain project-specific verification of glass, seals, hardware, joints and installation.",
      },
    ],
    productsTitle: "Two systems in the category",
    productsIntro:
      "Choose by opening type and leaf size: FD90 for casement and tilt-and-turn windows, or FDTL140 for compression-seal sliding doors.",
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
      { criterion: "Product type", fd90: "Casement / tilt-and-turn window", fdtl140: "Compression-seal sliding door set" },
      { criterion: "Construction", fd90: "Full-FRP", fdtl140: "Full-FRP" },
      { criterion: "Nominal construction depth", fd90: "90 mm", fdtl140: "140 mm" },
      { criterion: "Maximum sash / leaf load", fd90: "130 kg", fdtl140: "200 kg" },
      { criterion: "Catalogue frame Uf", fd90: "0.85 W/(m²·K)", fdtl140: "0.90 W/(m²·K)" },
      { criterion: "Listed whole-unit Uw", fd90: "0.85 W/(m²·K)", fdtl140: "1.02 W/(m²·K)" },
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
        "Системы из FRP для холодных регионов: оконный блок FD90 с сертификатом компонента PHI и раздвижной дверной блок FDTL140 с прижимом створки.",
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
    title: "Системы из FRP для холодных регионов",
    eyebrow: "Оконный блок FD90 · раздвижной дверной блок FDTL140",
    intro:
      "В категорию входят две системы из FRP. FD90 предназначена для поворотных и поворотно-откидных оконных блоков; FDTL140 — для крупных раздвижных дверных блоков с прижимом створки при закрывании. Каждый проект проверяется по конфигурации, указанной в сертификате или каталоге.",
    supplyStatus: "Доступны данные каталога и сертификата · требуется квалификация проекта",
    heroCards: [
      { label: "Систем в категории", value: "2" },
      { label: "Монтажная глубина", value: "90 + 140 мм" },
      { label: "Каталожный класс теплоизоляции", value: "Класс 10" },
      { label: "Конструкция профилей", value: "Полностью FRP" },
    ],
    scopeTitle: "Категория с чёткими границами",
    scopeIntro:
      "Группировка основана на конструкции профилей и документированных данных для холодного климата. PD75 и PD95 имеют алюминиево-композитные сечения и поэтому остаются в отдельной категории.",
    scopeItems: [
      {
        title: "Только две системы",
        description:
          "В категорию входят только FD90 и FDTL140: одна оконная и одна раздвижная дверная система.",
      },
      {
        title: "Конструкция полностью FRP",
        description:
          "Обе системы используют пултрузионные стеклокомпозитные профили в конструкции коробки и створки, без алюминиевых оболочек, соединённых композитным теплоизоляционным сердечником.",
      },
      {
        title: "Квалификация для холода",
        description:
          "FD90 имеет сертификат компонента PHI класса phB для прохладной умеренной зоны; обе системы требуют проектной проверки стекла, уплотнений, фурнитуры, соединений и монтажа.",
      },
    ],
    productsTitle: "Две системы в категории",
    productsIntro:
      "Выбор определяется типом открывания и размером створки: FD90 для поворотных и поворотно-откидных окон, FDTL140 для раздвижных дверных блоков с прижимом створки.",
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
      { criterion: "Тип изделия", fd90: "Поворотный / поворотно-откидной оконный блок", fdtl140: "Раздвижной дверной блок с прижимом створки" },
      { criterion: "Конструкция", fd90: "Полностью FRP", fdtl140: "Полностью FRP" },
      { criterion: "Номинальная монтажная глубина", fd90: "90 мм", fdtl140: "140 мм" },
      { criterion: "Максимальная масса створки", fd90: "130 кг", fdtl140: "200 кг" },
      { criterion: "Каталожный Uf коробки", fd90: "0,85 Вт/(м²·K)", fdtl140: "0,90 Вт/(м²·K)" },
      { criterion: "Каталожный Uw изделия", fd90: "0,85 Вт/(м²·K)", fdtl140: "1,02 Вт/(м²·K)" },
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
