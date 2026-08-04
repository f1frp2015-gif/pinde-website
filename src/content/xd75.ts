import type { PageLocale } from "@/content/pages";

type Xd75Variant = {
  name: string;
  description: string;
  features: string[];
};

type Xd75Content = {
  locale: string;
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
  identityTitle: string;
  identity: string;
  variantsTitle: string;
  variants: Xd75Variant[];
  specsTitle: string;
  specs: { label: string; value: string }[];
  performanceTitle: string;
  performanceIntro: string;
  performanceColumns: {
    glazing: string;
    thermal: string;
    wind: string;
    air: string;
    water: string;
    acoustic: string;
  };
  performance: {
    glazing: string;
    thermal: string;
    wind: string;
    air: string;
    water: string;
    acoustic: string;
  }[];
  note: string;
  ctaTitle: string;
  cta: string;
  backLabel: string;
};

export const xd75Content: Record<PageLocale, Xd75Content> = {
  en: {
    locale: "en_US",
    seo: {
      title: "XD75 Aluminium-GRPU Composite Window System | PINDÉ",
      description:
        "XD75 hybrid window system with aluminium shells and a 45mm pultruded glass-fibre reinforced polyurethane thermal core. Outward-opening and inward tilt-turn configurations for qualified projects.",
      keywords: [
        "XD75 window system",
        "aluminium GRPU window system",
        "glass fibre thermal break window",
        "75mm composite window profile",
        "pultruded polyurethane thermal barrier",
      ],
    },
    title: "XD75 aluminium-GRPU composite window system",
    eyebrow: "FRP family · XD75 series",
    intro:
      "A 75mm hybrid platform that keeps aluminium inner and outer shells while replacing a conventional narrow polyamide break with a 45mm pultruded glass-fibre reinforced polyurethane structural thermal core. Two opening configurations share one qualified system family.",
    supplyStatus: "Engineering programme — project qualification required",
    heroCards: [
      { label: "Platform depth", value: "75 mm" },
      { label: "GRPU thermal core", value: "45 mm" },
      { label: "Aluminium wall", value: "1.8 mm" },
      { label: "Opening modes", value: "2 variants" },
    ],
    identityTitle: "Why XD75 sits in the FRP family",
    identity:
      "XD75 is a hybrid aluminium-composite system, not a full-FRP frame. Its inner and outer aluminium shells are structurally joined by pultruded GRPU thermal components. PINDÉ therefore manages XD75 under the FRP engineering programme, with composite-material traceability, connection testing and project-specific whole-window verification.",
    variantsTitle: "XD75 configurations",
    variants: [
      {
        name: "Outward-opening window",
        description:
          "The sash opens outward to preserve usable interior space. Straight inner and outer sightlines, a European C-groove hardware interface and dry-glazing gaskets support repeatable local fabrication.",
        features: [
          "Outward-opening sash",
          "European C-groove hardware interface",
          "Automotive-grade EPDM foam equalisation gasket",
          "Dry glazing without wet sealant",
        ],
      },
      {
        name: "Inward tilt-turn window",
        description:
          "The inward-opening sash supports both full opening and tilt ventilation. In tilt mode, ventilation remains available while helping limit direct rain entry.",
        features: [
          "Inward turn and tilt ventilation",
          "Shared 45mm GRPU thermal-core platform",
          "European C-groove hardware interface",
          "Straight frame-and-sash interior geometry",
        ],
      },
    ],
    specsTitle: "System reference specifications",
    specs: [
      { label: "System family", value: "XD75" },
      { label: "Construction", value: "Aluminium shells + pultruded GRPU structural thermal core" },
      { label: "Nominal platform depth", value: "75 mm" },
      { label: "Thermal-core width", value: "45 mm" },
      { label: "Aluminium profile wall", value: "1.8 mm" },
      { label: "Hardware interface", value: "European C-groove; project schedule required" },
      { label: "Glazing", value: "Double or triple insulating glass; project-specific build-up" },
      { label: "Supply route", value: "Qualified system profiles or glass-free CKD package" },
    ],
    performanceTitle: "Source-catalogue performance references",
    performanceIntro:
      "The source system catalogue reports the following values for the listed glazing build-ups. They are reference results for the catalogue specimen, not automatic ratings for another size, glazing package, fabrication route or national standard.",
    performanceColumns: {
      glazing: "Catalogue glazing",
      thermal: "K-value / grade",
      wind: "Wind",
      air: "Air",
      water: "Water",
      acoustic: "Acoustic",
    },
    performance: [
      {
        glazing: "6Low-E + 12Ar + 6",
        thermal: "1.84 W/(m²·K) · Grade 7",
        wind: "Grade 9",
        air: "Grade 8",
        water: "Grade 4",
        acoustic: "Grade 4",
      },
      {
        glazing: "6Low-E + 12Ar + 6Low-E + 12Ar + 6",
        thermal: "1.31 W/(m²·K) · Grade 8",
        wind: "Grade 9",
        air: "Grade 8",
        water: "Grade 4",
        acoustic: "Grade 4",
      },
    ],
    note:
      "Qualification gate: final thermal, air, water, wind, acoustic and durability claims must be confirmed for the ordered window size, glass, warm edge, hardware, joints, installation node and destination-market test method. Catalogue values must not be reused as a project guarantee.",
    ctaTitle: "Evaluate XD75 for your project",
    cta: "Request the XD75 qualification pack",
    backLabel: "Back to FRP systems",
  },
  ru: {
    locale: "ru_RU",
    seo: {
      title: "Оконная система XD75: алюминий + GRPU | PINDÉ",
      description:
        "Гибридная система XD75: алюминиевые оболочки и пултрузионный стеклокомпозитный термомост GRPU шириной 45 мм. Наружное открывание и поворотно-откидная конфигурация для квалифицированных проектов.",
      keywords: [
        "оконная система XD75",
        "алюминий GRPU оконная система",
        "стеклокомпозитный термомост для окон",
        "композитный оконный профиль 75 мм",
        "пултрузионная полиуретановая термовставка",
      ],
    },
    title: "Оконная система XD75: алюминий + GRPU",
    eyebrow: "Семейство FRP · серия XD75",
    intro:
      "Гибридная платформа глубиной 75 мм сохраняет внутреннюю и наружную алюминиевые оболочки, а вместо узкой полиамидной термовставки использует несущий пултрузионный стеклокомпозитный элемент GRPU шириной 45 мм. Две схемы открывания входят в одно квалифицируемое семейство.",
    supplyStatus: "Инженерная программа — требуется квалификация проекта",
    heroCards: [
      { label: "Глубина платформы", value: "75 мм" },
      { label: "Термомост GRPU", value: "45 мм" },
      { label: "Стенка алюминия", value: "1,8 мм" },
      { label: "Схемы открывания", value: "2 варианта" },
    ],
    identityTitle: "Почему XD75 относится к семейству FRP",
    identity:
      "XD75 — это гибридная алюминиево-композитная система, а не полностью стеклокомпозитная рама. Внутренняя и наружная алюминиевые оболочки конструктивно соединены пултрузионными элементами GRPU. Поэтому PINDÉ ведёт XD75 в инженерной программе FRP: с прослеживаемостью композита, испытаниями соединений и проверкой готового окна под конкретный проект.",
    variantsTitle: "Конфигурации XD75",
    variants: [
      {
        name: "Окно с наружным открыванием",
        description:
          "Створка открывается наружу и не занимает полезное пространство внутри. Прямые линии рамы и створки, европаз C и сухое остекление рассчитаны на воспроизводимую локальную сборку.",
        features: [
          "Наружное открывание створки",
          "Европаз C для фурнитуры",
          "Вспененный EPDM-уплотнитель автомобильного класса",
          "Сухое остекление без мокрого герметика",
        ],
      },
      {
        name: "Поворотно-откидное окно",
        description:
          "Створка открывается внутрь и поддерживает поворотный и откидной режимы. Откидное положение даёт проветривание и помогает ограничить прямое попадание дождя.",
        features: [
          "Поворотное и откидное открывание внутрь",
          "Единая платформа с термомостом GRPU 45 мм",
          "Европаз C для фурнитуры",
          "Прямая внутренняя геометрия рамы и створки",
        ],
      },
    ],
    specsTitle: "Справочные характеристики системы",
    specs: [
      { label: "Семейство", value: "XD75" },
      { label: "Конструкция", value: "Алюминиевые оболочки + несущий пултрузионный термомост GRPU" },
      { label: "Номинальная глубина", value: "75 мм" },
      { label: "Ширина термомоста", value: "45 мм" },
      { label: "Стенка алюминиевого профиля", value: "1,8 мм" },
      { label: "Интерфейс фурнитуры", value: "Европаз C; спецификация согласуется по проекту" },
      { label: "Остекление", value: "Двойное или тройное остекление по расчёту проекта" },
      { label: "Форма поставки", value: "Квалифицированная система профилей или CKD без стеклопакета" },
    ],
    performanceTitle: "Справочные показатели исходного каталога",
    performanceIntro:
      "В исходном каталоге системы приведены следующие значения для указанных стеклопакетов. Это результаты каталожного образца, а не автоматический рейтинг для другого размера, стеклопакета, технологии сборки или национального стандарта.",
    performanceColumns: {
      glazing: "Стеклопакет каталога",
      thermal: "K / класс",
      wind: "Ветер",
      air: "Воздух",
      water: "Вода",
      acoustic: "Звук",
    },
    performance: [
      {
        glazing: "6Low-E + 12Ar + 6",
        thermal: "1,84 Вт/(м²·K) · класс 7",
        wind: "класс 9",
        air: "класс 8",
        water: "класс 4",
        acoustic: "класс 4",
      },
      {
        glazing: "6Low-E + 12Ar + 6Low-E + 12Ar + 6",
        thermal: "1,31 Вт/(м²·K) · класс 8",
        wind: "класс 9",
        air: "класс 8",
        water: "класс 4",
        acoustic: "класс 4",
      },
    ],
    note:
      "Квалификационный барьер: итоговые показатели теплотехники, воздухо- и водопроницаемости, ветровой нагрузки, звукоизоляции и долговечности подтверждаются для заказанного размера, стеклопакета, дистанционной рамки, фурнитуры, соединений, монтажного узла и метода испытаний целевого рынка. Каталожные значения нельзя использовать как гарантию проекта.",
    ctaTitle: "Оценить XD75 для вашего проекта",
    cta: "Запросить квалификационный пакет XD75",
    backLabel: "Назад к системам FRP",
  },
};
