import type { PageLocale } from "@/content/pages";

export type ColdClimateFrpSystemSlug = "fd90" | "fdtl140";

type PerformanceRating = {
  label: string;
  value: string;
  note: string;
};

type GlazingRow = {
  glazing: string;
  ug: string;
  uf: string;
  uw: string;
  hardware: string;
};

type PhiCertificateContent = {
  title: string;
  intro: string;
  status: string;
  facts: { label: string; value: string }[];
  valueTitle: string;
  valueIntro: string;
  valuePoints: string[];
  note: string;
  downloadLabel: string;
  openLabel: string;
  filePath: string;
  preview: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
};

export type ColdClimateFrpSystemContent = {
  slug: ColdClimateFrpSystemSlug;
  locale: string;
  designation: string;
  productType: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
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
  cardDescription: string;
  cardCta: string;
  climateTitle: string;
  climateIntro: string;
  climateFeatures: { title: string; description: string }[];
  ratingsTitle: string;
  ratingsIntro: string;
  ratings: PerformanceRating[];
  openingsTitle: string;
  openingsIntro: string;
  openingModes: string[];
  specsTitle: string;
  specs: { label: string; value: string }[];
  phiCertificate?: PhiCertificateContent;
  glazingTitle: string;
  glazingIntro: string;
  glazingColumns: {
    glazing: string;
    ug: string;
    uf: string;
    uw: string;
    hardware: string;
  };
  glazingRows: GlazingRow[];
  note: string;
  ctaTitle: string;
  cta: string;
  backLabel: string;
};

export const coldClimateFrpSystemSlugs: ColdClimateFrpSystemSlug[] = ["fd90", "fdtl140"];

export function isColdClimateFrpSystemSlug(slug: string): slug is ColdClimateFrpSystemSlug {
  return coldClimateFrpSystemSlugs.includes(slug as ColdClimateFrpSystemSlug);
}

export const coldClimateFrpSystems: Record<
  ColdClimateFrpSystemSlug,
  Record<PageLocale, ColdClimateFrpSystemContent>
> = {
  fd90: {
    en: {
      slug: "fd90",
      locale: "en_US",
      designation: "FD90",
      productType: "Full-FRP casement window system",
      image: {
        src: "/images/systems/pinde-fd90-cold-climate-frp-window.webp",
        width: 430,
        height: 430,
        alt: "FD90 full-FRP 90 Series cold-climate casement window section",
      },
      seo: {
        title: "FD90 FRP Cold-Climate Window | PHI-Certified Profile | PINDÉ",
        description:
          "PHI-certified FD90 full-FRP 90mm window system for passive buildings in cool, temperate climates: phB, certified Uw 0.78 W/(m²·K), valid through 2026.",
        keywords: [
          "FD90 FRP window",
          "90mm fiberglass window system",
          "cold climate FRP window",
          "passive house fiberglass window",
          "Passive House Institute certified window",
          "PHI phB window component",
          "triple glazed FRP window",
          "pultruded composite window frame",
        ],
      },
      title: "FD90 PHI-certified FRP cold-climate window system",
      eyebrow: "Extreme-cold flagship · full-FRP",
      intro:
        "A 90mm full-FRP casement platform for demanding winter envelopes. Passive House Institute certificate 2491wi03 covers the Fengdu Passive GFRP 90 Series for the cool, temperate climate zone at efficiency class phB, with a certified whole-window Uw of 0.78 W/(m²·K). Its pultruded full-FRP route is positioned for a strong performance-to-cost ratio in qualified passive-building programmes.",
      supplyStatus: "PHI-certified cold-climate flagship — configuration control required",
      heroCards: [
        { label: "Frame depth", value: "90 mm" },
        { label: "PHI efficiency class", value: "phB" },
        { label: "Certified whole-window Uw", value: "0.78" },
        { label: "Certificate valid through", value: "2026" },
      ],
      cardDescription:
        "PHI-certified 90mm casement and tilt-turn platform: phB for the cool, temperate climate zone, certified Uw 0.78 W/(m²·K), and a value-focused full-FRP supply route.",
      cardCta: "Explore FD90",
      climateTitle: "Built for demanding winter envelopes",
      climateIntro:
        "PHI certification provides an independent component reference for passive-building use in the cool, temperate climate zone. FD90 is also positioned for cold-region, ultra-low-energy and nearly-zero-energy projects, subject to matching the certified build and verifying project size, glazing, edge spacer, hardware, joints and installation.",
      climateFeatures: [
        {
          title: "PHI-certified passive component",
          description:
            "Component 2491wi03 is certified at phB for the cool, temperate climate zone, with Uw 0.78 W/(m²·K) and installed Uw values meeting the certificate criterion of 0.85 W/(m²·K) or better.",
        },
        {
          title: "High performance-to-cost route",
          description:
            "Pultruded full-FRP profiles, a 90mm platform and flexible profile or glass-free CKD supply combine certified thermal capability with a value-engineered route for qualified production programmes.",
        },
        {
          title: "Weather and acoustic control",
          description:
            "Catalogue grades reach 9 for wind resistance, 8 for airtightness, 6 for watertightness and 5 for sound insulation.",
        },
      ],
      ratingsTitle: "Source-catalogue performance grades",
      ratingsIntro:
        "The grade values below are catalogue references for the FD90 system. They must be verified against the ordered specimen and the applicable local standard.",
      ratings: [
        { label: "Thermal insulation", value: "Grade 10", note: "Highest grade listed in the catalogue" },
        { label: "Sound insulation", value: "Grade 5", note: "Depends on glass, seals and installation" },
        { label: "Watertightness", value: "Grade 6", note: "Whole-window catalogue grade" },
        { label: "Airtightness", value: "Grade 8", note: "Whole-window catalogue grade" },
        { label: "Wind resistance", value: "Grade 9", note: "Whole-window catalogue grade" },
      ],
      openingsTitle: "Opening configurations",
      openingsIntro:
        "One 90mm platform supports familiar cold-climate opening formats while retaining the same full-FRP frame family.",
      openingModes: ["Inward casement", "Inward tilt-turn", "Double casement", "Inward or outward door configuration"],
      specsTitle: "System reference specifications",
      specs: [
        { label: "System designation", value: "FD90 / 90 Series" },
        { label: "Construction", value: "Pultruded glass-fibre reinforced composite (full-FRP) profiles" },
        { label: "Nominal frame depth", value: "90 mm" },
        { label: "Load-bearing profile wall", value: "3.0 mm" },
        { label: "Maximum sash load", value: "130 kg" },
        { label: "Catalogue frame Uf", value: "0.85 W/(m²·K)" },
        { label: "PHI component certificate", value: "2491wi03 · phB · valid through 31 December 2026" },
        { label: "PHI certified whole-window Uw", value: "0.78 W/(m²·K), with Ug 0.70 W/(m²·K)" },
        { label: "Glazing route", value: "Project-selected double or triple insulating glazing" },
        { label: "Supply route", value: "Qualified system profiles or glass-free CKD package" },
      ],
      phiCertificate: {
        title: "PHI-certified for passive buildings",
        intro:
          "The official Passive House Institute certificate identifies the certified window-frame component as Fengdu Passive GFRP 90 Series by Chongqing Xianju New Material Co., Ltd. It satisfies the component criteria stated in the certificate for the cool, temperate climate zone.",
        status: "Current PHI certificate · valid through 31 December 2026",
        facts: [
          { label: "Component ID", value: "2491wi03" },
          { label: "Certified product", value: "Fengdu Passive GFRP 90 Series" },
          { label: "Climate / class", value: "Cool, temperate · phB" },
          { label: "Certified Uw", value: "0.78 W/(m²·K), with Ug 0.70 W/(m²·K)" },
          { label: "Installed Uw criterion", value: "≤ 0.85 W/(m²·K)" },
          { label: "Hygiene criterion", value: "fRsi=0.25 ≥ 0.70" },
        ],
        valueTitle: "Certified performance with a value-engineered route",
        valueIntro:
          "FD90 combines an independently certified thermal reference with a pultruded full-FRP platform and flexible local-fabrication supply. This supports a strong performance-to-cost proposition for passive and cold-region building programmes; the actual commercial advantage is confirmed project by project against glazing, hardware, fabrication and logistics.",
        valuePoints: [
          "Certified whole-window Uw 0.78 W/(m²·K) for the identified PHI configuration",
          "Pultruded full-FRP profiles avoid a continuous metal thermal path",
          "System-profile or glass-free CKD supply keeps final glazing and assembly local",
        ],
        note:
          "Certificate scope is configuration-specific. Any quotation or project that cites PHI certification must match the certified frame build, glazing, warm-edge spacer, seals and installation conditions identified in certificate 2491wi03; destination-market approval remains separate.",
        downloadLabel: "Download official PHI certificate (PDF)",
        openLabel: "Open certificate",
        filePath: "/certificates/fd90-passive-house-institute-certificate-2491wi03.pdf",
        preview: {
          src: "/images/systems/pinde-fd90-passive-house-institute-certificate-2491wi03.webp",
          width: 900,
          height: 1273,
          alt: "Passive House Institute certificate 2491wi03 for Fengdu Passive GFRP 90 Series",
        },
      },
      glazingTitle: "Recommended cold-climate configurations",
      glazingIntro:
        "Thermal values are reproduced from the supplied 2026 catalogue for the listed glass build-ups. Slash-separated values reflect the catalogue alternatives; units are W/(m²·K).",
      glazingColumns: {
        glazing: "Catalogue glazing",
        ug: "Glass Ug",
        uf: "Frame Uf",
        uw: "Window Uw",
        hardware: "Hardware",
      },
      glazingRows: [
        {
          glazing: "5 Low-E + 16A/Ar + 5 + 16A/Ar + 5",
          ug: "1.20 / 1.10",
          uf: "0.85",
          uw: "1.35 / 1.30",
          hardware: "Project schedule",
        },
        {
          glazing: "5 Low-E + 16A/Ar + 5 Low-E + 16A/Ar + 5",
          ug: "0.90 / 0.80",
          uf: "0.85",
          uw: "1.10 / 1.05",
          hardware: "Project schedule",
        },
        {
          glazing: "5 Low-E + 18A/Ar warm edge + 5 Low-E + 18A/Ar warm edge + 5",
          ug: "0.85 / 0.70",
          uf: "0.85",
          uw: "0.95 / 0.85",
          hardware: "Project schedule",
        },
      ],
      note:
        "Qualification gate: catalogue thermal and performance values apply only to the identified configuration. Final claims must be confirmed for the ordered dimensions, glazing, spacer, hardware, seals, corner joints, installation node and destination-market test method.",
      ctaTitle: "Qualify FD90 for your cold-climate project",
      cta: "Request the FD90 technical pack",
      backLabel: "Back to cold-climate category",
    },
    ru: {
      slug: "fd90",
      locale: "ru_RU",
      designation: "FD90",
      productType: "Полностью FRP поворотная оконная система",
      image: {
        src: "/images/systems/pinde-fd90-cold-climate-frp-window.webp",
        width: 430,
        height: 430,
        alt: "Сечение стеклокомпозитного окна FD90 серии 90 для холодного климата",
      },
      seo: {
        title: "Окно FRP FD90 для холодного климата | Сертификат PHI | PINDÉ",
        description:
          "Сертифицированная PHI система FD90 из FRP глубиной 90 мм для пассивных зданий: класс phB, Uw 0,78 Вт/(м²·K), сертификат действует до конца 2026 года.",
        keywords: [
          "стеклокомпозитное окно FD90",
          "оконная система FRP 90 мм",
          "окно для холодного климата",
          "стеклопластиковое окно пассивный дом",
          "сертифицированное окно Passive House Institute",
          "оконный компонент PHI phB",
          "окно FRP с тройным стеклопакетом",
          "пултрузионная композитная оконная рама",
        ],
      },
      title: "Сертифицированная PHI оконная система FRP FD90 для холодного климата",
      eyebrow: "Флагман для экстремального холода · полностью FRP",
      intro:
        "Полностью стеклокомпозитная поворотная платформа глубиной 90 мм для суровых зимних ограждающих конструкций. Сертификат Passive House Institute 2491wi03 распространяется на Fengdu Passive GFRP 90 Series для прохладной умеренной климатической зоны: класс эффективности phB и Uw готового окна 0,78 Вт/(м²·K). Пултрузионная система FRP обеспечивает сильное соотношение характеристик и стоимости для квалифицированных проектов пассивных зданий.",
      supplyStatus: "Сертифицированный PHI зимний флагман — требуется контроль конфигурации",
      heroCards: [
        { label: "Глубина рамы", value: "90 мм" },
        { label: "Класс эффективности PHI", value: "phB" },
        { label: "Сертифицированный Uw окна", value: "0,78" },
        { label: "Сертификат действует до", value: "2026" },
      ],
      cardDescription:
        "Сертифицированная PHI 90-мм поворотная и поворотно-откидная платформа: phB для прохладной умеренной зоны, Uw 0,78 Вт/(м²·K) и выгодный маршрут поставки полностью FRP.",
      cardCta: "Открыть FD90",
      climateTitle: "Для самых требовательных зимних оболочек",
      climateIntro:
        "Сертификация PHI даёт независимую основу для применения компонента в пассивных зданиях прохладной умеренной климатической зоны. FD90 также предназначена для холодных регионов, сверхнизкоэнергетических и почти нулевых зданий при совпадении сертифицированной конструкции и проверке размеров, стеклопакета, дистанционной рамки, фурнитуры, стыков и монтажа.",
      climateFeatures: [
        {
          title: "Сертифицированный компонент PHI",
          description:
            "Компонент 2491wi03 сертифицирован по классу phB для прохладной умеренной зоны: Uw 0,78 Вт/(м²·K), а установленные окна выполняют критерий сертификата Uw не выше 0,85 Вт/(м²·K).",
        },
        {
          title: "Высокое отношение характеристик к стоимости",
          description:
            "Пултрузионные профили полностью FRP, глубина 90 мм и поставка профилей либо CKD без стеклопакета объединяют сертифицированную теплотехнику с экономичным производственным маршрутом.",
        },
        {
          title: "Погода и акустика",
          description:
            "Каталожные классы: ветровая стойкость 9, воздухопроницаемость 8, водонепроницаемость 6 и звукоизоляция 5.",
        },
      ],
      ratingsTitle: "Классы характеристик исходного каталога",
      ratingsIntro:
        "Ниже приведены каталожные значения системы FD90. Их необходимо подтвердить для заказанного образца по применимому местному стандарту.",
      ratings: [
        { label: "Теплоизоляция", value: "Класс 10", note: "Высший класс, указанный в каталоге" },
        { label: "Звукоизоляция", value: "Класс 5", note: "Зависит от стекла, уплотнений и монтажа" },
        { label: "Водонепроницаемость", value: "Класс 6", note: "Каталожный класс готового окна" },
        { label: "Воздухопроницаемость", value: "Класс 8", note: "Каталожный класс готового окна" },
        { label: "Ветровая стойкость", value: "Класс 9", note: "Каталожный класс готового окна" },
      ],
      openingsTitle: "Варианты открывания",
      openingsIntro:
        "Единая 90-мм платформа поддерживает привычные для холодного климата варианты открывания в одном семействе рам FRP.",
      openingModes: ["Поворотное внутрь", "Поворотно-откидное внутрь", "Двустворчатое", "Дверная конфигурация внутрь или наружу"],
      specsTitle: "Справочные характеристики системы",
      specs: [
        { label: "Обозначение системы", value: "FD90 / серия 90" },
        { label: "Конструкция", value: "Пултрузионные стеклокомпозитные профили (полностью FRP)" },
        { label: "Номинальная глубина рамы", value: "90 мм" },
        { label: "Стенка несущего профиля", value: "3,0 мм" },
        { label: "Максимальная масса створки", value: "130 кг" },
        { label: "Каталожный Uf рамы", value: "0,85 Вт/(м²·K)" },
        { label: "Сертификат компонента PHI", value: "2491wi03 · phB · действует до 31 декабря 2026 года" },
        { label: "Сертифицированный Uw окна PHI", value: "0,78 Вт/(м²·K) при Ug 0,70 Вт/(м²·K)" },
        { label: "Остекление", value: "Двойной или тройной стеклопакет по проекту" },
        { label: "Форма поставки", value: "Квалифицированная система профилей или CKD без стеклопакета" },
      ],
      phiCertificate: {
        title: "Сертифицировано PHI для пассивных зданий",
        intro:
          "Официальный сертификат Passive House Institute называет сертифицированный оконный компонент Fengdu Passive GFRP 90 Series производства Chongqing Xianju New Material Co., Ltd. Компонент соответствует указанным в документе критериям для прохладной умеренной климатической зоны.",
        status: "Действующий сертификат PHI · до 31 декабря 2026 года",
        facts: [
          { label: "ID компонента", value: "2491wi03" },
          { label: "Сертифицированный продукт", value: "Fengdu Passive GFRP 90 Series" },
          { label: "Климат / класс", value: "Прохладный умеренный · phB" },
          { label: "Сертифицированный Uw", value: "0,78 Вт/(м²·K) при Ug 0,70 Вт/(м²·K)" },
          { label: "Критерий установленного Uw", value: "≤ 0,85 Вт/(м²·K)" },
          { label: "Гигиенический критерий", value: "fRsi=0.25 ≥ 0,70" },
        ],
        valueTitle: "Сертифицированные характеристики и экономичный маршрут",
        valueIntro:
          "FD90 сочетает независимое подтверждение теплотехники с пултрузионной платформой полностью FRP и гибкой локальной сборкой. Это формирует высокое отношение характеристик к стоимости для пассивных зданий и проектов в холодных регионах; фактическое коммерческое преимущество подтверждается по проекту с учётом стекла, фурнитуры, производства и логистики.",
        valuePoints: [
          "Uw готового окна 0,78 Вт/(м²·K) для сертифицированной конфигурации PHI",
          "Профили полностью FRP не создают непрерывного металлического пути теплопередачи",
          "Поставка профилей или CKD без стеклопакета сохраняет локальное остекление и сборку",
        ],
        note:
          "Область сертификата ограничена конкретной конфигурацией. При ссылке на PHI в предложении или проекте конструкция рамы, стеклопакет, тёплая дистанционная рамка, уплотнения и монтаж должны соответствовать сертификату 2491wi03; разрешение для целевого рынка оформляется отдельно.",
        downloadLabel: "Скачать официальный сертификат PHI (PDF)",
        openLabel: "Открыть сертификат",
        filePath: "/certificates/fd90-passive-house-institute-certificate-2491wi03.pdf",
        preview: {
          src: "/images/systems/pinde-fd90-passive-house-institute-certificate-2491wi03.webp",
          width: 900,
          height: 1273,
          alt: "Сертификат Passive House Institute 2491wi03 для Fengdu Passive GFRP 90 Series",
        },
      },
      glazingTitle: "Рекомендуемые конфигурации для холодного климата",
      glazingIntro:
        "Теплотехнические значения перенесены из предоставленного каталога 2026 года для указанных стеклопакетов. Значения через косую черту отражают варианты каталога; единицы — Вт/(м²·K).",
      glazingColumns: {
        glazing: "Стеклопакет каталога",
        ug: "Ug стекла",
        uf: "Uf рамы",
        uw: "Uw окна",
        hardware: "Фурнитура",
      },
      glazingRows: [
        {
          glazing: "5 Low-E + 16A/Ar + 5 + 16A/Ar + 5",
          ug: "1,20 / 1,10",
          uf: "0,85",
          uw: "1,35 / 1,30",
          hardware: "По спецификации проекта",
        },
        {
          glazing: "5 Low-E + 16A/Ar + 5 Low-E + 16A/Ar + 5",
          ug: "0,90 / 0,80",
          uf: "0,85",
          uw: "1,10 / 1,05",
          hardware: "По спецификации проекта",
        },
        {
          glazing: "5 Low-E + 18A/Ar тёплая рамка + 5 Low-E + 18A/Ar тёплая рамка + 5",
          ug: "0,85 / 0,70",
          uf: "0,85",
          uw: "0,95 / 0,85",
          hardware: "По спецификации проекта",
        },
      ],
      note:
        "Квалификационный барьер: каталожные теплотехнические и эксплуатационные значения относятся только к указанной конфигурации. Итоговые показатели подтверждаются для заказанных размеров, стеклопакета, дистанционной рамки, фурнитуры, уплотнений, угловых соединений, монтажного узла и метода испытаний целевого рынка.",
      ctaTitle: "Квалифицировать FD90 для холодного климата",
      cta: "Запросить технический пакет FD90",
      backLabel: "Назад в категорию холодного климата",
    },
  },
  fdtl140: {
    en: {
      slug: "fdtl140",
      locale: "en_US",
      designation: "FDTL140",
      productType: "Full-FRP side-press sliding door system",
      image: {
        src: "/images/systems/pinde-fdtl140-cold-climate-frp-sliding-door.webp",
        width: 423,
        height: 423,
        alt: "FDTL140 full-FRP 140 Series cold-climate side-press sliding door section",
      },
      seo: {
        title: "FDTL140 FRP Sliding Door | 140mm Cold-Climate Profile | PINDÉ",
        description:
          "FDTL140 full-FRP 140mm side-press sliding door for extreme cold climates, with a 200kg leaf capacity and listed whole-door Uw of 1.02 W/(m²·K).",
        keywords: [
          "FDTL140 FRP sliding door",
          "140mm fiberglass sliding door",
          "cold climate side press door",
          "high insulation FRP patio door",
          "triple glazed composite sliding door",
          "pultruded FRP door system",
        ],
      },
      title: "FDTL140 140mm cold-climate FRP sliding door system",
      eyebrow: "Extreme-cold flagship · full-FRP",
      intro:
        "A 140mm full-FRP sliding-door platform that combines side-press closing, triple-glazing configurations and a 200kg leaf capacity. The listed build-ups reach whole-door Uw values of 1.02 W/(m²·K), bringing cold-climate envelope performance to large sliding openings.",
      supplyStatus: "Cold-climate flagship — project qualification required",
      heroCards: [
        { label: "Frame depth", value: "140 mm" },
        { label: "Catalogue frame Uf", value: "0.90" },
        { label: "Best listed Uw", value: "1.02" },
        { label: "Maximum leaf load", value: "200 kg" },
      ],
      cardDescription:
        "A 140mm side-press sliding door for large winter openings: Grade 10 thermal insulation, 200kg leaf capacity and listed Uw of 1.02 W/(m²·K).",
      cardCta: "Explore FDTL140",
      climateTitle: "Large openings without abandoning winter performance",
      climateIntro:
        "The source catalogue positions FDTL140 across high-performance building selections through passive or nearly-zero-energy and zero-energy applications. Project qualification is required for the ordered opening size, glass weight, hardware, drainage, seals and installation node.",
      climateFeatures: [
        {
          title: "140mm insulated platform",
          description:
            "The deep full-FRP frame supports triple-glazing build-ups while maintaining a catalogue frame Uf of 0.90 W/(m²·K).",
        },
        {
          title: "Side-press closing action",
          description:
            "Sliding travel is paired with side-pressure closing to support compression at the seals, subject to the qualified hardware schedule.",
        },
        {
          title: "Heavy-leaf capability",
          description:
            "The catalogue lists a maximum leaf load of 200kg together with Grade 9 wind resistance and Grade 8 airtightness.",
        },
      ],
      ratingsTitle: "Source-catalogue performance grades",
      ratingsIntro:
        "The grade values below are catalogue references for the FDTL140 system. They must be verified against the ordered specimen and the applicable local standard.",
      ratings: [
        { label: "Thermal insulation", value: "Grade 10", note: "Highest grade listed in the catalogue" },
        { label: "Sound insulation", value: "Grade 4", note: "Depends on glass, seals and installation" },
        { label: "Watertightness", value: "Grade 6", note: "Whole-door catalogue grade" },
        { label: "Airtightness", value: "Grade 8", note: "Whole-door catalogue grade" },
        { label: "Wind resistance", value: "Grade 9", note: "Whole-door catalogue grade" },
      ],
      openingsTitle: "Operating configuration",
      openingsIntro:
        "FDTL140 combines space-efficient horizontal movement with a closing sequence that presses the leaf toward the seals.",
      openingModes: ["Horizontal sliding", "Side-press closing", "Triple insulating glazing", "Universal hardware interface in the source catalogue"],
      specsTitle: "System reference specifications",
      specs: [
        { label: "System designation", value: "FDTL140 / 140 Series" },
        { label: "Construction", value: "Pultruded glass-fibre reinforced composite (full-FRP) profiles" },
        { label: "Nominal frame depth", value: "140 mm" },
        { label: "Load-bearing profile wall", value: "3.0 mm" },
        { label: "Maximum leaf load", value: "200 kg" },
        { label: "Catalogue frame Uf", value: "0.90 W/(m²·K)" },
        { label: "Operating type", value: "Sliding with side-press closing" },
        { label: "Supply route", value: "Qualified system profiles or glass-free CKD package" },
      ],
      glazingTitle: "Recommended cold-climate configurations",
      glazingIntro:
        "Thermal values are reproduced from the supplied 2026 catalogue for the listed glass build-ups. Units are W/(m²·K).",
      glazingColumns: {
        glazing: "Catalogue glazing",
        ug: "Glass Ug",
        uf: "Frame Uf",
        uw: "Door Uw",
        hardware: "Hardware",
      },
      glazingRows: [
        {
          glazing: "5 + 16Ar + 5 Low-E + 16Ar + 5 Low-E",
          ug: "0.79",
          uf: "0.90",
          uw: "1.02",
          hardware: "Universal hardware",
        },
        {
          glazing: "5 + 12Ar + 5 Low-E + 12Ar + 5 Low-E",
          ug: "0.81",
          uf: "0.90",
          uw: "1.04",
          hardware: "Universal hardware",
        },
        {
          glazing: "5 + 12Ar + 5 + 12Ar + 5 Low-E",
          ug: "1.12",
          uf: "0.90",
          uw: "1.25",
          hardware: "Universal hardware",
        },
      ],
      note:
        "Qualification gate: catalogue thermal and performance values apply only to the identified configuration. Final claims must be confirmed for the ordered dimensions, glass weight, spacer, hardware, seals, drainage, corner joints, installation node and destination-market test method.",
      ctaTitle: "Qualify FDTL140 for your cold-climate project",
      cta: "Request the FDTL140 technical pack",
      backLabel: "Back to cold-climate category",
    },
    ru: {
      slug: "fdtl140",
      locale: "ru_RU",
      designation: "FDTL140",
      productType: "Полностью FRP раздвижная дверь с боковым прижимом",
      image: {
        src: "/images/systems/pinde-fdtl140-cold-climate-frp-sliding-door.webp",
        width: 423,
        height: 423,
        alt: "Сечение стеклокомпозитной двери FDTL140 серии 140 с боковым прижимом",
      },
      seo: {
        title: "Раздвижная дверь FRP FDTL140 140 мм для холодного климата | PINDÉ",
        description:
          "Полностью стеклокомпозитная дверь FDTL140 глубиной 140 мм с боковым прижимом: створка до 200 кг и каталожный Uw до 1,02 Вт/(м²·K).",
        keywords: [
          "стеклокомпозитная раздвижная дверь FDTL140",
          "дверная система FRP 140 мм",
          "дверь с боковым прижимом для холодного климата",
          "теплая стеклопластиковая портальная дверь",
          "композитная дверь с тройным стеклопакетом",
          "пултрузионная дверная система FRP",
        ],
      },
      title: "Раздвижная дверная система FRP FDTL140 140 мм для холодного климата",
      eyebrow: "Флагман для экстремального холода · полностью FRP",
      intro:
        "Полностью стеклокомпозитная раздвижная платформа глубиной 140 мм с боковым прижимом, тройными стеклопакетами и створкой до 200 кг. В указанных конфигурациях Uw готовой двери достигает 1,02 Вт/(м²·K), перенося зимнюю энергоэффективность на крупноформатные раздвижные проёмы.",
      supplyStatus: "Флагман для холодного климата — требуется квалификация проекта",
      heroCards: [
        { label: "Глубина рамы", value: "140 мм" },
        { label: "Каталожный Uf рамы", value: "0,90" },
        { label: "Лучший Uw в каталоге", value: "1,02" },
        { label: "Максимальная масса створки", value: "200 кг" },
      ],
      cardDescription:
        "140-мм дверь с боковым прижимом для больших зимних проёмов: класс теплоизоляции 10, створка до 200 кг и Uw 1,02 Вт/(м²·K).",
      cardCta: "Открыть FDTL140",
      climateTitle: "Большие проёмы с зимней энергоэффективностью",
      climateIntro:
        "Исходный каталог относит FDTL140 к высокоэффективным зданиям вплоть до пассивных или почти нулевых и нулевых по энергопотреблению. Для размера проёма, массы стекла, фурнитуры, дренажа, уплотнений и монтажного узла требуется проектная квалификация.",
      climateFeatures: [
        {
          title: "Теплоизолированная платформа 140 мм",
          description:
            "Глубокая рама полностью FRP поддерживает тройное остекление при каталожном Uf рамы 0,90 Вт/(м²·K).",
        },
        {
          title: "Закрывание с боковым прижимом",
          description:
            "Горизонтальное перемещение сочетается с прижимом створки к уплотнениям при закрывании; применяется квалифицированная спецификация фурнитуры.",
        },
        {
          title: "Тяжёлая створка",
          description:
            "Каталог указывает массу створки до 200 кг, ветровую стойкость класса 9 и воздухопроницаемость класса 8.",
        },
      ],
      ratingsTitle: "Классы характеристик исходного каталога",
      ratingsIntro:
        "Ниже приведены каталожные значения системы FDTL140. Их необходимо подтвердить для заказанного образца по применимому местному стандарту.",
      ratings: [
        { label: "Теплоизоляция", value: "Класс 10", note: "Высший класс, указанный в каталоге" },
        { label: "Звукоизоляция", value: "Класс 4", note: "Зависит от стекла, уплотнений и монтажа" },
        { label: "Водонепроницаемость", value: "Класс 6", note: "Каталожный класс готовой двери" },
        { label: "Воздухопроницаемость", value: "Класс 8", note: "Каталожный класс готовой двери" },
        { label: "Ветровая стойкость", value: "Класс 9", note: "Каталожный класс готовой двери" },
      ],
      openingsTitle: "Схема работы",
      openingsIntro:
        "FDTL140 сочетает компактное горизонтальное перемещение со схемой закрывания, прижимающей створку к уплотнениям.",
      openingModes: ["Горизонтальное раздвижное открывание", "Закрывание с боковым прижимом", "Тройной стеклопакет", "Универсальный интерфейс фурнитуры по исходному каталогу"],
      specsTitle: "Справочные характеристики системы",
      specs: [
        { label: "Обозначение системы", value: "FDTL140 / серия 140" },
        { label: "Конструкция", value: "Пултрузионные стеклокомпозитные профили (полностью FRP)" },
        { label: "Номинальная глубина рамы", value: "140 мм" },
        { label: "Стенка несущего профиля", value: "3,0 мм" },
        { label: "Максимальная масса створки", value: "200 кг" },
        { label: "Каталожный Uf рамы", value: "0,90 Вт/(м²·K)" },
        { label: "Тип открывания", value: "Раздвижное с боковым прижимом" },
        { label: "Форма поставки", value: "Квалифицированная система профилей или CKD без стеклопакета" },
      ],
      glazingTitle: "Рекомендуемые конфигурации для холодного климата",
      glazingIntro:
        "Теплотехнические значения перенесены из предоставленного каталога 2026 года для указанных стеклопакетов. Единицы — Вт/(м²·K).",
      glazingColumns: {
        glazing: "Стеклопакет каталога",
        ug: "Ug стекла",
        uf: "Uf рамы",
        uw: "Uw двери",
        hardware: "Фурнитура",
      },
      glazingRows: [
        {
          glazing: "5 + 16Ar + 5 Low-E + 16Ar + 5 Low-E",
          ug: "0,79",
          uf: "0,90",
          uw: "1,02",
          hardware: "Универсальная",
        },
        {
          glazing: "5 + 12Ar + 5 Low-E + 12Ar + 5 Low-E",
          ug: "0,81",
          uf: "0,90",
          uw: "1,04",
          hardware: "Универсальная",
        },
        {
          glazing: "5 + 12Ar + 5 + 12Ar + 5 Low-E",
          ug: "1,12",
          uf: "0,90",
          uw: "1,25",
          hardware: "Универсальная",
        },
      ],
      note:
        "Квалификационный барьер: каталожные теплотехнические и эксплуатационные значения относятся только к указанной конфигурации. Итоговые показатели подтверждаются для заказанных размеров, массы стекла, дистанционной рамки, фурнитуры, уплотнений, дренажа, угловых соединений, монтажного узла и метода испытаний целевого рынка.",
      ctaTitle: "Квалифицировать FDTL140 для холодного климата",
      cta: "Запросить технический пакет FDTL140",
      backLabel: "Назад в категорию холодного климата",
    },
  },
};
