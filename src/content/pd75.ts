import type { PageLocale } from "@/content/pages";

type Pd75Variant = {
  name: string;
  description: string;
  features: string[];
};

type Pd75Content = {
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
  benefitsTitle: string;
  benefits: { kicker: string; title: string; description: string }[];
  variants: Pd75Variant[];
  specsTitle: string;
  specs: { label: string; value: string }[];
  drawingsTitle: string;
  drawingsIntro: string;
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

export const pd75Content: Record<PageLocale, Pd75Content> = {
  en: {
    locale: "en_US",
    seo: {
      title: "PD75 Aluminium-Composite Window | 45mm Ultra FRP Core | PINDÉ",
      description:
        "PD75 75mm aluminium-composite window system with a 45mm Ultra FRP Core engineered to support strength, energy-efficient insulation and acoustic separation.",
      keywords: [
        "PD75 window system",
        "Ultra FRP Core window",
        "aluminium GRPU window system",
        "structural FRP thermal core",
        "75mm composite window profile",
        "energy efficient acoustic window",
      ],
    },
    title: "PD75 aluminium-composite window with 45mm Ultra FRP Core",
    eyebrow: "FRP family · PD75 series",
    intro:
      "A 75mm aluminium-composite platform built around a 45mm Ultra FRP Core: a pultruded glass-fibre reinforced polyurethane (GRPU) element that structurally connects the inner and outer aluminium shells. The wide, low-conductivity core supports connection strength, energy-efficient insulation and acoustic separation in one system.",
    supplyStatus: "Engineering programme — project qualification required",
    heroCards: [
      { label: "Platform depth", value: "75 mm" },
      { label: "Ultra FRP Core", value: "45 mm" },
      { label: "Strength · thermal · acoustic", value: "3-in-1" },
      { label: "Opening modes", value: "2 variants" },
    ],
    identityTitle: "The structural heart of PD75",
    identity:
      "PD75 is an aluminium-composite system, not a full-FRP frame. Its Ultra FRP Core replaces a conventional narrow polyamide bridge and forms the structural connection between the inner and outer aluminium shells. Continuous glass-fibre reinforcement and a polyurethane matrix combine rigidity and dimensional stability with low thermal conductivity. PINDÉ therefore manages PD75 under the FRP engineering programme, with composite-material traceability, connection testing and project-specific whole-window verification.",
    benefitsTitle: "One core, three contributions",
    benefits: [
      {
        kicker: "Strength",
        title: "Structural continuity",
        description:
          "Continuous glass-fibre reinforcement helps transfer loads between the aluminium shells and maintain the composite section. Connection strength and whole-window wind resistance remain verified for each ordered build.",
      },
      {
        kicker: "Energy",
        title: "Thermal insulation",
        description:
          "The 45mm low-conductivity core lengthens the heat-flow path between indoor and outdoor aluminium, helping limit thermal bridging, heat loss and cold interior surfaces.",
      },
      {
        kicker: "Acoustics",
        title: "Vibration separation",
        description:
          "The core's material damping and physical separation of the aluminium shells help reduce structure-borne vibration transfer. Final sound insulation also depends on glazing, seals, joints and installation.",
      },
    ],
    variantsTitle: "PD75 configurations",
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
          "Shared 45mm Ultra FRP Core platform",
          "European C-groove hardware interface",
          "Straight frame-and-sash interior geometry",
        ],
      },
    ],
    specsTitle: "System reference specifications",
    specs: [
      { label: "System family", value: "PD75" },
      { label: "Core identity", value: "Ultra FRP Core" },
      { label: "Construction", value: "Aluminium shells + pultruded GRPU structural core" },
      { label: "Nominal platform depth", value: "75 mm" },
      { label: "Thermal-core width", value: "45 mm" },
      { label: "Aluminium profile wall", value: "1.8 mm" },
      { label: "Hardware interface", value: "European C-groove; project schedule required" },
      { label: "Glazing", value: "Double or triple insulating glass; project-specific build-up" },
      { label: "Supply route", value: "Qualified system profiles or glass-free CKD package" },
    ],
    drawingsTitle: "PD75 system architecture",
    drawingsIntro:
      "The section drawings show the 75mm platform, 45mm core and principal frame, sash and mullion references. XDCX codes are retained as component identifiers; PD75 is the updated system-series name.",
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
    ctaTitle: "Evaluate PD75 for your project",
    cta: "Request the PD75 qualification pack",
    backLabel: "Back to FRP systems",
  },
  ru: {
    locale: "ru_RU",
    seo: {
      title: "Алюминиево-композитное окно PD75 | Ultra FRP Core 45 мм | PINDÉ",
      description:
        "Оконная система PD75 глубиной 75 мм с Ultra FRP Core шириной 45 мм для прочности соединения, энергоэффективной теплоизоляции и акустического разделения.",
      keywords: [
        "оконная система PD75",
        "Ultra FRP Core окно",
        "алюминий GRPU оконная система",
        "несущий стеклокомпозитный термомост",
        "композитный оконный профиль 75 мм",
        "энергоэффективное звукоизоляционное окно",
      ],
    },
    title: "Алюминиево-композитное окно PD75 с Ultra FRP Core 45 мм",
    eyebrow: "Семейство FRP · серия PD75",
    intro:
      "Алюминиево-композитная платформа глубиной 75 мм построена вокруг Ultra FRP Core шириной 45 мм — пултрузионного стеклокомпозитного элемента GRPU, который конструктивно соединяет внутреннюю и наружную алюминиевые оболочки. Широкий низкотеплопроводный сердечник одновременно поддерживает прочность, энергоэффективную теплоизоляцию и акустическое разделение.",
    supplyStatus: "Инженерная программа — требуется квалификация проекта",
    heroCards: [
      { label: "Глубина платформы", value: "75 мм" },
      { label: "Ultra FRP Core", value: "45 мм" },
      { label: "Прочность · тепло · звук", value: "3 в 1" },
      { label: "Схемы открывания", value: "2 варианта" },
    ],
    identityTitle: "Несущая основа PD75",
    identity:
      "PD75 — алюминиево-композитная система, а не полностью стеклокомпозитная рама. Ultra FRP Core заменяет обычную узкую полиамидную вставку и формирует конструктивную связь внутренней и наружной алюминиевых оболочек. Непрерывное стекловолокно и полиуретановая матрица объединяют жёсткость и стабильность геометрии с низкой теплопроводностью. Поэтому PINDÉ ведёт PD75 в инженерной программе FRP: с прослеживаемостью композита, испытаниями соединений и проектной проверкой готового окна.",
    benefitsTitle: "Один сердечник — три функции",
    benefits: [
      {
        kicker: "Прочность",
        title: "Конструктивная непрерывность",
        description:
          "Непрерывное стекловолокно помогает передавать нагрузки между алюминиевыми оболочками и сохранять совместную работу сечения. Прочность соединений и ветровая стойкость готового окна проверяются для конкретной комплектации.",
      },
      {
        kicker: "Энергия",
        title: "Теплоизоляция",
        description:
          "Низкотеплопроводный сердечник шириной 45 мм удлиняет путь теплового потока между внутренним и наружным алюминием, помогая уменьшить мостик холода, теплопотери и охлаждение внутренней поверхности.",
      },
      {
        kicker: "Акустика",
        title: "Развязка вибраций",
        description:
          "Демпфирование материала и физическое разделение алюминиевых оболочек помогают снизить передачу структурных вибраций. Итоговая звукоизоляция также зависит от стеклопакета, уплотнений, стыков и монтажа.",
      },
    ],
    variantsTitle: "Конфигурации PD75",
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
          "Единая платформа с Ultra FRP Core 45 мм",
          "Европаз C для фурнитуры",
          "Прямая внутренняя геометрия рамы и створки",
        ],
      },
    ],
    specsTitle: "Справочные характеристики системы",
    specs: [
      { label: "Семейство", value: "PD75" },
      { label: "Наименование сердечника", value: "Ultra FRP Core" },
      { label: "Конструкция", value: "Алюминиевые оболочки + несущий пултрузионный сердечник GRPU" },
      { label: "Номинальная глубина", value: "75 мм" },
      { label: "Ширина термомоста", value: "45 мм" },
      { label: "Стенка алюминиевого профиля", value: "1,8 мм" },
      { label: "Интерфейс фурнитуры", value: "Европаз C; спецификация согласуется по проекту" },
      { label: "Остекление", value: "Двойное или тройное остекление по расчёту проекта" },
      { label: "Форма поставки", value: "Квалифицированная система профилей или CKD без стеклопакета" },
    ],
    drawingsTitle: "Архитектура системы PD75",
    drawingsIntro:
      "На чертежах показаны платформа глубиной 75 мм, сердечник шириной 45 мм и основные сечения рамы, створки и импоста. Коды XDCX сохранены как обозначения компонентов; PD75 — обновлённое название серии.",
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
    ctaTitle: "Оценить PD75 для вашего проекта",
    cta: "Запросить квалификационный пакет PD75",
    backLabel: "Назад к системам FRP",
  },
};
