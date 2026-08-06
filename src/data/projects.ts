export interface CapabilityCase {
  slug: string;
  title: string;
  systemType: string;
  targetMarket: string;
  description: string;
  performanceHighlights: string[];
  applicableStandards: string[];
  images: string[];
}

type LocalizedCapabilityCase = Omit<CapabilityCase, "title" | "systemType" | "targetMarket" | "description" | "performanceHighlights"> & {
  copy: Record<"en" | "ru", Pick<CapabilityCase, "title" | "systemType" | "targetMarket" | "description" | "performanceHighlights">>;
};

// Supply configurations, not completed-project claims. Standards indicate the
// qualification route; compliance remains configuration- and market-specific.
const localizedCapabilityCases: LocalizedCapabilityCase[] = [
  {
    slug: "thermally-broken-casement-residential",
    copy: {
      en: {
        title: "A120 Casement Window — Cold-Region Reference Build",
        systemType: "A120 casement window system",
        targetMarket: "Central Asia and Russian-speaking markets",
        description:
          "A reference construction for inward-opening, outward-opening or fixed window units. The 120.6 mm frame uses a 35.3 mm PA66GF25 thermal barrier, three EPDM sealing levels and project-selected insulating glass. Unit size, opening type, hardware and Uw are fixed during qualification.",
        performanceHighlights: [
          "120.6 mm nominal frame construction depth",
          "35.3 mm PA66GF25 polyamide thermal barrier",
          "Three EPDM sealing levels and a drained glazing rebate",
          "6063-T5 aluminium; 1.4 mm reference wall thickness",
        ],
      },
      ru: {
        title: "Оконный блок A120 — конфигурация для холодных регионов",
        systemType: "Поворотная оконная система A120",
        targetMarket: "Центральная Азия и русскоязычные рынки",
        description:
          "Справочная конструкция для оконных блоков с открыванием внутрь, наружу или глухим заполнением. Коробка глубиной 120,6 мм оснащена полиамидной термоизоляционной вставкой PA66GF25 шириной 35,3 мм, тремя контурами EPDM-уплотнений и стеклопакетом по проекту. Размер, тип открывания, фурнитуру и Uw фиксируют при квалификации.",
        performanceHighlights: [
          "Номинальная монтажная глубина коробки 120,6 мм",
          "Полиамидная термоизоляционная вставка PA66GF25 35,3 мм",
          "Три контура EPDM-уплотнений и дренируемый фальц остекления",
          "Алюминий 6063-T5; справочная толщина стенки 1,4 мм",
        ],
      },
    },
    applicableStandards: ["ГОСТ 21519-2022", "ГОСТ 23166-2024", "EN 14351-1"],
    images: [],
  },
  {
    slug: "sliding-door-large-opening-eaeu",
    copy: {
      en: {
        title: "AP187 88 Sliding Door — Large-Opening Reference Build",
        systemType: "AP187 88 sliding door system",
        targetMarket: "Kazakhstan, Uzbekistan and Armenia",
        description:
          "A thermally broken sliding door reference with a 196.8 mm frame and an 88 mm visible leaf section. Panel dimensions, glass mass, rollers, deflection limits, track drainage and the optional security lock are coordinated before machining.",
        performanceHighlights: [
          "196.8 mm nominal frame construction depth",
          "88 mm visible leaf section in the reference profile",
          "High- and low-track arrangements available",
          "Novabes rollers and Bao Ma lock in the reference hardware set",
        ],
      },
      ru: {
        title: "Раздвижной дверной блок AP187 88 — крупный проём",
        systemType: "Раздвижная дверная система AP187 88",
        targetMarket: "Казахстан, Узбекистан и Армения",
        description:
          "Раздвижной дверной блок с термоизоляционными вставками, коробкой глубиной 196,8 мм и видимой частью створки 88 мм. Размеры полотна, массу стеклопакета, ролики, допустимый прогиб, дренаж направляющей и опциональный противовзломный замок согласуют до механической обработки.",
        performanceHighlights: [
          "Номинальная монтажная глубина коробки 196,8 мм",
          "Видимая часть створки 88 мм в справочном профиле",
          "Высокий и низкий варианты направляющей",
          "Ролики Novabes и замок Bao Ma в справочной комплектации",
        ],
      },
    },
    applicableStandards: ["ГОСТ 23747-2015", "ГОСТ 23166-2024", "EN 14351-1"],
    images: [],
  },
  {
    slug: "frp-window-system-pilot",
    copy: {
      en: {
        title: "FRP Window System — First-Article Qualification",
        systemType: "Pultruded FRP window system",
        targetMarket: "Northern Kazakhstan, Siberia and the Russian Far East",
        description:
          "A controlled first-article route for fabricators evaluating pultruded glass-fibre composite window profiles. The release set defines the bill of materials (BOM), joint method, machining parameters, glazing and project test plan before repeat supply.",
        performanceHighlights: [
          "Pultruded glass-fibre composite frame and sash profiles",
          "Material grade and glass content fixed by certificate and BOM",
          "Mechanical and bonded joints qualified on the selected section",
          "First-article inspection before repeat profile or CKD supply",
        ],
      },
      ru: {
        title: "Оконная система из FRP — квалификация первого образца",
        systemType: "Оконная система из пултрузионного стеклокомпозита",
        targetMarket: "Север Казахстана, Сибирь и Дальний Восток",
        description:
          "Порядок квалификации первого образца для производств, оценивающих пултрузионные стеклокомпозитные оконные профили. До серийной поставки в комплекте выпуска фиксируют спецификацию комплектации (BOM), способ соединения, параметры обработки, стеклопакет и план испытаний.",
        performanceHighlights: [
          "Пултрузионные стеклокомпозитные профили коробки и створки",
          "Марка материала и содержание стекловолокна по сертификату и BOM",
          "Механические и клеевые соединения квалифицируют на выбранном сечении",
          "Контроль первого образца до повторной поставки профилей или CKD",
        ],
      },
    },
    applicableStandards: ["GOST R 57790", "EN 13706-3", "ASTM E283"],
    images: [],
  },
  {
    slug: "ckd-supply-multi-opening-project",
    copy: {
      en: {
        title: "Glass-Free CKD — Mixed Opening Schedule",
        systemType: "Mixed aluminium systems · machined CKD",
        targetMarket: "Kyrgyzstan, Armenia and Belarus",
        description:
          "A glass-free CKD supply example combining A65 casement windows, AP187 50 sliding doors and A65 hinged doors. Profiles are cut, drilled, machined and labelled by opening; the local fabricator confirms dimensions and installs the specified glass.",
        performanceHighlights: [
          "Machined profiles packed by opening mark",
          "Separate bill of materials for each system and opening type",
          "Seals, connectors, approved hardware and spares identified",
          "Export packing prepared for the agreed rail or road route",
        ],
      },
      ru: {
        title: "CKD без стеклопакетов — смешанная ведомость проёмов",
        systemType: "Несколько алюминиевых систем · обработанный CKD",
        targetMarket: "Кыргызстан, Армения и Беларусь",
        description:
          "Пример поставки CKD без стеклопакетов, объединяющей поворотные окна A65, раздвижные двери AP187 50 и распашные двери A65. Профили нарезают, сверлят, обрабатывают и маркируют по проёмам; местное производство подтверждает размеры и устанавливает предусмотренные стеклопакеты.",
        performanceHighlights: [
          "Обработанные профили упакованы по марке проёма",
          "Отдельная спецификация комплектации для каждой системы и типа открывания",
          "Уплотнения, соединители, согласованная фурнитура и запасные части обозначены",
          "Экспортная упаковка под согласованный железнодорожный или автомобильный маршрут",
        ],
      },
    },
    applicableStandards: ["ГОСТ 21519-2022", "ГОСТ 23747-2015", "Требования страны назначения"],
    images: [],
  },
];

export function getCapabilityCases(locale: string): CapabilityCase[] {
  const language = locale === "ru" ? "ru" : "en";
  return localizedCapabilityCases.map(({ copy, ...shared }) => ({ ...shared, ...copy[language] }));
}

// Compatibility exports for code that expects the English collection.
export const capabilityCases = getCapabilityCases("en");
export const projects = capabilityCases;
