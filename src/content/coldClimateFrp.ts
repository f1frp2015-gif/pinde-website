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
        title: "FD90 FRP Window for Cold Regions | PHI Component | PINDÉ",
        description:
          "FD90 is a 90 mm full-FRP casement and tilt-and-turn window system. PHI certificate 2491wi03 lists class phB and Uw 0.78 W/(m²·K) for its certified build.",
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
      title: "FD90 full-FRP window system for cold regions",
      eyebrow: "90 mm full-FRP window · PHI component",
      intro:
        "FD90 is a 90 mm full-FRP casement and tilt-and-turn window system. Passive House Institute certificate 2491wi03 covers the Fengdu Passive GFRP 90 Series in the cool, temperate climate zone at class phB. The certificate records Uw 0.78 W/(m²·K) for the stated window build; that value does not transfer automatically to other sizes, glass or installation details.",
      supplyStatus: "PHI certificate 2491wi03 · configuration control required",
      heroCards: [
        { label: "Frame construction depth", value: "90 mm" },
        { label: "PHI efficiency class", value: "phB" },
        { label: "Certified whole-window Uw", value: "0.78" },
        { label: "Certificate valid through", value: "2026" },
      ],
      cardDescription:
        "A 90 mm full-FRP casement and tilt-and-turn system. PHI certificate 2491wi03 records class phB and Uw 0.78 W/(m²·K) for the certified configuration.",
      cardCta: "Explore FD90",
      climateTitle: "Configuration control for cold-region envelopes",
      climateIntro:
        "PHI certification provides an independent component reference for passive-building use in the cool, temperate climate zone. FD90 is also positioned for cold-region, ultra-low-energy and nearly-zero-energy projects, subject to matching the certified build and verifying project size, glazing, edge spacer, hardware, joints and installation.",
      climateFeatures: [
        {
          title: "PHI-certified passive component",
          description:
            "Component 2491wi03 is certified at phB for the cool, temperate climate zone, with Uw 0.78 W/(m²·K) and installed Uw values meeting the certificate criterion of 0.85 W/(m²·K) or better.",
        },
        {
          title: "Profiles or glass-free CKD supply",
          description:
            "The system can be quoted as qualified profiles or as a glass-free CKD package. Final glazing and assembly may remain local, subject to fabrication controls and the project specification.",
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
        "The 90 mm profile family supports the opening types listed below. Sizes, hardware and reinforcement requirements are checked for each schedule.",
      openingModes: ["Inward casement", "Inward tilt-turn", "Double casement", "Inward or outward door configuration"],
      specsTitle: "System reference specifications",
      specs: [
        { label: "System designation", value: "FD90 / 90 Series" },
        { label: "Construction", value: "Pultruded glass-fibre reinforced composite (full-FRP) profiles" },
        { label: "Nominal frame construction depth", value: "90 mm" },
        { label: "Load-bearing profile wall", value: "3.0 mm" },
        { label: "Maximum sash load", value: "130 kg" },
        { label: "Catalogue frame Uf", value: "0.85 W/(m²·K)" },
        { label: "PHI component certificate", value: "2491wi03 · phB · valid through 31 December 2026" },
        { label: "PHI certified whole-window Uw", value: "0.78 W/(m²·K), with Ug 0.70 W/(m²·K)" },
        { label: "Glazing", value: "Project-selected double- or triple-glazed insulating glass unit" },
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
        valueTitle: "What the certificate covers",
        valueIntro:
          "Certificate 2491wi03 provides an independent thermal reference for the stated frame, glazing, warm-edge spacer, seals and installation conditions. Profile or glass-free CKD supply can keep glazing and assembly local, but the fabricator must preserve the qualified construction.",
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
          "оконный блок FD90 из стеклокомпозита",
          "оконная система FRP 90 мм",
          "окно для холодного климата",
          "стеклопластиковое окно пассивный дом",
          "сертифицированное окно Passive House Institute",
          "оконный компонент PHI phB",
          "окно FRP с двухкамерным стеклопакетом",
          "пултрузионная композитная оконная коробка",
        ],
      },
      title: "Оконная система FD90 из FRP для холодных регионов",
      eyebrow: "Оконный блок 90 мм из FRP · компонент PHI",
      intro:
        "FD90 — поворотная и поворотно-откидная оконная система из FRP с монтажной глубиной 90 мм. Сертификат Passive House Institute 2491wi03 распространяется на Fengdu Passive GFRP 90 Series для прохладной умеренной климатической зоны и указывает класс phB. Значение Uw 0,78 Вт/(м²·K) относится к описанной в сертификате конструкции и не переносится автоматически на другие размеры, стеклопакеты или монтажные узлы.",
      supplyStatus: "Сертификат PHI 2491wi03 · требуется контроль конфигурации",
      heroCards: [
        { label: "Монтажная глубина", value: "90 мм" },
        { label: "Класс эффективности PHI", value: "phB" },
        { label: "Сертифицированный Uw окна", value: "0,78" },
        { label: "Сертификат действует до", value: "2026" },
      ],
      cardDescription:
        "Поворотная и поворотно-откидная система из FRP с монтажной глубиной 90 мм. Сертификат PHI 2491wi03 указывает класс phB и Uw 0,78 Вт/(м²·K) для сертифицированной конфигурации.",
      cardCta: "Открыть FD90",
      climateTitle: "Контроль конфигурации для холодных регионов",
      climateIntro:
        "Сертификация PHI даёт независимую основу для применения компонента в пассивных зданиях прохладной умеренной климатической зоны. FD90 также предназначена для холодных регионов, сверхнизкоэнергетических и почти нулевых зданий при совпадении сертифицированной конструкции и проверке размеров, стеклопакета, дистанционной рамки, фурнитуры, стыков и монтажа.",
      climateFeatures: [
        {
          title: "Сертифицированный компонент PHI",
          description:
            "Компонент 2491wi03 сертифицирован по классу phB для прохладной умеренной зоны: Uw 0,78 Вт/(м²·K), а установленные окна выполняют критерий сертификата Uw не выше 0,85 Вт/(м²·K).",
        },
        {
          title: "Профили или CKD без стеклопакета",
          description:
            "Систему можно поставить как комплект квалифицированных профилей или CKD без стеклопакета. Остекление и сборка могут выполняться на месте при соблюдении требований к изготовлению и проектной спецификации.",
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
        "Семейство профилей с монтажной глубиной 90 мм поддерживает указанные ниже типы открывания. Размеры, фурнитуру и необходимость усиления проверяют по ведомости заполнения проёмов.",
      openingModes: ["Поворотное внутрь", "Поворотно-откидное внутрь", "Двустворчатое", "Дверное полотно с открыванием внутрь или наружу"],
      specsTitle: "Справочные характеристики системы",
      specs: [
        { label: "Обозначение системы", value: "FD90 / серия 90" },
        { label: "Конструкция", value: "Пултрузионные стеклокомпозитные профили (полностью FRP)" },
        { label: "Номинальная монтажная глубина", value: "90 мм" },
        { label: "Стенка несущего профиля", value: "3,0 мм" },
        { label: "Максимальная масса створки", value: "130 кг" },
        { label: "Каталожный Uf коробки", value: "0,85 Вт/(м²·K)" },
        { label: "Сертификат компонента PHI", value: "2491wi03 · phB · действует до 31 декабря 2026 года" },
        { label: "Сертифицированный Uw окна PHI", value: "0,78 Вт/(м²·K) при Ug 0,70 Вт/(м²·K)" },
        { label: "Остекление", value: "Однокамерный или двухкамерный стеклопакет по проекту" },
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
        valueTitle: "Область сертификата",
        valueIntro:
          "Сертификат 2491wi03 независимо подтверждает теплотехнические показатели указанной конструкции коробки, стеклопакета, тёплой дистанционной рамки, уплотнений и монтажа. Поставка профилей или CKD без стеклопакета позволяет оставить остекление и сборку на местном производстве, если изготовитель сохраняет квалифицированную конструкцию.",
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
        uf: "Uf коробки",
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
      productType: "Full-FRP compression-seal sliding door set",
      image: {
        src: "/images/systems/pinde-fdtl140-cold-climate-frp-sliding-door.webp",
        width: 423,
        height: 423,
        alt: "FDTL140 full-FRP 140 Series compression-seal sliding door section",
      },
      seo: {
        title: "FDTL140 FRP Sliding Door | 140mm Cold-Climate Profile | PINDÉ",
        description:
          "FDTL140 is a 140 mm full-FRP compression-seal sliding door set. The catalogue lists a 200 kg leaf limit and Uw 1.02 W/(m²·K) for one stated build.",
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
      eyebrow: "140 mm full-FRP sliding door set",
      intro:
        "FDTL140 is a 140 mm full-FRP sliding door set with a closing sequence that compresses the leaf against the seals. The catalogue lists a maximum leaf mass of 200 kg and Uw 1.02 W/(m²·K) for one two-cavity insulating glass build. Ordered dimensions, glass mass, hardware and installation details require project review.",
      supplyStatus: "Catalogue data available · project qualification required",
      heroCards: [
        { label: "Frame construction depth", value: "140 mm" },
        { label: "Catalogue frame Uf", value: "0.90" },
        { label: "Uw of listed build", value: "1.02" },
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
          title: "140 mm full-FRP frame",
          description:
            "The catalogue pairs the 140 mm frame with triple-glazed insulating glass units and lists frame Uf 0.90 W/(m²·K).",
        },
        {
          title: "Compression-seal closing action",
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
      openingModes: ["Horizontal sliding", "Leaf compression at closing", "Triple-glazed insulating glass unit", "Hardware interface listed in the source catalogue"],
      specsTitle: "System reference specifications",
      specs: [
        { label: "System designation", value: "FDTL140 / 140 Series" },
        { label: "Construction", value: "Pultruded glass-fibre reinforced composite (full-FRP) profiles" },
        { label: "Nominal frame construction depth", value: "140 mm" },
        { label: "Load-bearing profile wall", value: "3.0 mm" },
        { label: "Maximum leaf load", value: "200 kg" },
        { label: "Catalogue frame Uf", value: "0.90 W/(m²·K)" },
        { label: "Operating type", value: "Sliding with leaf compression at closing" },
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
      productType: "Раздвижной дверной блок из FRP с прижимом створки",
      image: {
        src: "/images/systems/pinde-fdtl140-cold-climate-frp-sliding-door.webp",
        width: 423,
        height: 423,
        alt: "Сечение раздвижного дверного блока FDTL140 серии 140 из FRP с прижимом створки",
      },
      seo: {
        title: "Раздвижная дверь FRP FDTL140 140 мм для холодного климата | PINDÉ",
        description:
          "Раздвижной дверной блок FDTL140 из FRP с монтажной глубиной 140 мм: створка до 200 кг и Uw 1,02 Вт/(м²·K) для указанной каталожной конструкции.",
        keywords: [
          "стеклокомпозитная раздвижная дверь FDTL140",
          "дверная система FRP 140 мм",
          "дверь с прижимом створки для холодного климата",
          "теплая стеклопластиковая портальная дверь",
          "композитная дверь с двухкамерным стеклопакетом",
          "пултрузионная дверная система FRP",
        ],
      },
      title: "Раздвижной дверной блок FDTL140 из FRP для холодного климата",
      eyebrow: "Раздвижной дверной блок 140 мм из FRP",
      intro:
        "FDTL140 — раздвижной дверной блок из FRP с монтажной глубиной 140 мм. При закрывании створка прижимается к уплотнениям. Каталог указывает предельную массу створки 200 кг и Uw 1,02 Вт/(м²·K) для одной конструкции с двухкамерным стеклопакетом. Размеры, масса заполнения, фурнитура и монтажный узел проверяются по проекту.",
      supplyStatus: "Каталожные данные доступны · требуется квалификация проекта",
      heroCards: [
        { label: "Монтажная глубина", value: "140 мм" },
        { label: "Каталожный Uf коробки", value: "0,90" },
        { label: "Uw указанной конструкции", value: "1,02" },
        { label: "Максимальная масса створки", value: "200 кг" },
      ],
      cardDescription:
        "Раздвижной дверной блок с монтажной глубиной 140 мм и прижимом створки: масса створки до 200 кг, Uw 1,02 Вт/(м²·K) для указанной каталожной конструкции.",
      cardCta: "Открыть FDTL140",
      climateTitle: "Большие проёмы с зимней энергоэффективностью",
      climateIntro:
        "Исходный каталог относит FDTL140 к высокоэффективным зданиям вплоть до пассивных или почти нулевых и нулевых по энергопотреблению. Для размера проёма, массы стекла, фурнитуры, дренажа, уплотнений и монтажного узла требуется проектная квалификация.",
      climateFeatures: [
        {
          title: "Коробка из FRP глубиной 140 мм",
          description:
            "Каталог сочетает коробку глубиной 140 мм с двухкамерными стеклопакетами и указывает Uf коробки 0,90 Вт/(м²·K).",
        },
        {
          title: "Закрывание с прижимом створки",
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
        "Створка FDTL140 перемещается горизонтально, а в конце цикла закрывания прижимается к контуру уплотнений.",
      openingModes: ["Горизонтальное раздвижное открывание", "Закрывание с прижимом створки", "Двухкамерный стеклопакет", "Интерфейс фурнитуры по исходному каталогу"],
      specsTitle: "Справочные характеристики системы",
      specs: [
        { label: "Обозначение системы", value: "FDTL140 / серия 140" },
        { label: "Конструкция", value: "Пултрузионные стеклокомпозитные профили (полностью FRP)" },
        { label: "Номинальная монтажная глубина", value: "140 мм" },
        { label: "Стенка несущего профиля", value: "3,0 мм" },
        { label: "Максимальная масса створки", value: "200 кг" },
        { label: "Каталожный Uf коробки", value: "0,90 Вт/(м²·K)" },
        { label: "Тип открывания", value: "Раздвижное с прижимом створки при закрывании" },
        { label: "Форма поставки", value: "Квалифицированная система профилей или CKD без стеклопакета" },
      ],
      glazingTitle: "Рекомендуемые конфигурации для холодного климата",
      glazingIntro:
        "Теплотехнические значения перенесены из предоставленного каталога 2026 года для указанных стеклопакетов. Единицы — Вт/(м²·K).",
      glazingColumns: {
        glazing: "Стеклопакет каталога",
        ug: "Ug стекла",
        uf: "Uf коробки",
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
