export type PageLocale = "en" | "ru";

export const pageLocales = ["en", "ru"] as const;

export function isPageLocale(value: string): value is PageLocale {
  return pageLocales.includes(value as PageLocale);
}

// ──────────────────────────────────────────
// SYSTEMS INDEX
// ──────────────────────────────────────────
export const systemsIndexContent = {
  en: {
    lang: "en",
    locale: "en_US",
    seo: {
      title: "Window Profile Systems for Fabricators | PINDÉ",
      description:
        "Thermally broken aluminium and pultruded FRP profiles, machined components and glass-free CKD sets for window fabricators.",
      keywords: [
        "aluminium window profile systems",
        "FRP window profiles",
        "window system supplier China",
        "thermally broken aluminium profiles",
        "pultruded window profiles",
        "window profile systems for fabricators",
      ],
    },
    title: "Profile systems prepared for local fabrication.",
    intro:
      "PINDÉ supplies thermally broken aluminium and glass-fibre composite systems to window and door fabricators. The system choice starts with the opening schedule, target performance and available equipment. The agreed delivery then includes the profiles, component schedule, machining data and supporting test records for that configuration.",
    platforms: [
      {
        code: "AL",
        label: "Regular production range",
        title: "Thermally broken aluminium",
        description:
          "The catalogue covers 19 exterior and interior systems based mainly on 6063-T5 aluminium and PA66GF25 polyamide thermal barriers. Opening types include casement, tilt-and-turn, sliding, parallel-projecting, folding and hinged configurations. Finish and hardware are fixed in the released bill of materials.",
        features: [
          "19 systems for exterior windows, exterior doors and interior partitions",
          "PA66GF25 polyamide barriers in thermally broken exterior systems",
          "EPDM gasket arrangements defined by system section",
          "Frame depths from 65 to 196.8 mm across the catalogue",
          "Powder coating, anodising and wood-effect finishes by specification",
          "Hardware schedules available around SIEGENIA, G-U, Roto or KIN LONG components",
        ],
        href: "/systems/aluminium",
        cta: "Explore aluminium systems",
      },
      {
        code: "FRP",
        label: "Project qualification range",
        title: "FRP and aluminium-composite",
        description:
          "FD90 and FDTL140 use pultruded glass-fibre reinforced polymer profiles throughout the load-bearing frame. PD75 and PD95 combine aluminium with an FRP thermal section. These systems enter production through a controlled reference build, joint qualification and a project test plan.",
        features: [
          "FD90: 90 mm full-FRP casement and tilt-and-turn window",
          "FDTL140: 140 mm full-FRP sliding door with compression sealing",
          "PD75: 75 mm aluminium-composite window system",
          "PD95: nominal 95 mm aluminium-composite window system",
          "45 mm Ultra FRP Core in the PD75 reference section",
          "Catalogue thermal classes tied to the listed test configurations",
          "Pilot kits and whole-unit verification before repeat supply",
        ],
        href: "/systems/frp",
        cta: "Explore FRP systems",
      },
    ],
    note: "Thermal, structural and weather results belong to the tested specimen, glazing build-up and report scope. Any other size or configuration is treated as a project target until it is verified.",
  },
  ru: {
    lang: "ru",
    locale: "ru_RU",
    seo: {
      title: "Профильные системы для оконных производств | PINDÉ",
      description:
        "Алюминиевые профили с термовставками, пултрузионный FRP, обработанные детали и CKD без стеклопакетов для оконных производств.",
      keywords: [
        "алюминиевые профильные системы",
        "стеклокомпозитный оконный профиль",
        "оконные системы из Китая",
        "тёплые алюминиевые оконные системы",
        "пултрузионный оконный профиль",
        "профильные системы для оконных производств",
      ],
    },
    title: "Профильные системы для локального производства окон и дверей.",
    intro:
      "PINDÉ поставляет производителям окон и дверей алюминиевые системы с термовставками и стеклокомпозитные системы. Выбор начинается с ведомости проёмов, требуемых характеристик и перечня оборудования. В согласованную поставку входят профили, спецификация комплектации, данные по обработке и протоколы, относящиеся к выбранной конструкции.",
    platforms: [
      {
        code: "AL",
        label: "Серийная производственная линейка",
        title: "Алюминиевые профили с термовставкой",
        description:
          "Каталог включает 19 наружных и интерьерных систем, преимущественно из алюминия 6063-T5 с термоизоляционными вставками PA66GF25. Представлены поворотные, поворотно-откидные, раздвижные, параллельно-выдвижные, складные и распашные конструкции. Покрытие и комплект фурнитуры фиксируются в рабочей спецификации.",
        features: [
          "19 систем: наружные окна, наружные дверные блоки и интерьерные перегородки",
          "Термоизоляционные вставки из полиамида PA66GF25 в наружных системах",
          "Схема уплотнителей EPDM определяется сечением системы",
          "Монтажная глубина от 65 до 196,8 мм по каталогу",
          "Порошковая окраска, анодирование и декор под дерево по спецификации",
          "Комплекты фурнитуры на базе SIEGENIA, G-U, Roto или KIN LONG",
        ],
        href: "/systems/aluminium",
        cta: "Алюминиевые системы",
      },
      {
        code: "FRP",
        label: "Линейка с проектной квалификацией",
        title: "Стеклокомпозит и алюминиево-композитные системы",
        description:
          "В FD90 и FDTL140 несущие элементы коробки и створки выполнены из пултрузионного стеклокомпозита. PD75 и PD95 объединяют алюминиевые профили со стеклокомпозитным теплоизоляционным участком. Запуск таких систем включает установочный образец, квалификацию соединений и проектный план испытаний.",
        features: [
          "FD90: оконный блок глубиной 90 мм с поворотным и поворотно-откидным открыванием",
          "FDTL140: раздвижной дверной блок глубиной 140 мм с прижимом створки",
          "PD75: алюминиево-композитная оконная система глубиной 75 мм",
          "PD95: алюминиево-композитная оконная система номинальной глубиной 95 мм",
          "Стеклокомпозитный участок Ultra FRP Core шириной 45 мм в базовом сечении PD75",
          "Каталожные классы теплотехники относятся к указанным испытательным конфигурациям",
          "Опытные комплекты и проверка готового оконного блока до серийных поставок",
        ],
        href: "/systems/frp",
        cta: "Стеклокомпозитные системы",
      },
    ],
    note: "Результаты теплотехнических, прочностных и климатических испытаний относятся к конкретному образцу, стеклопакету и области протокола. Для другой конструкции это проектное требование до получения подтверждения.",
  },
} as const;

// ──────────────────────────────────────────
// SYSTEMS — ALUMINIUM
// ──────────────────────────────────────────
export const systemsAluminiumContent = {
  en: {
    lang: "en",
    locale: "en_US",
    seo: {
      title: "Thermally Broken Aluminium Window Profiles | PINDÉ",
      description:
        "Nineteen aluminium window, door and partition systems for fabricators. System kits, machined profiles and glass-free CKD supply from Chongqing.",
      keywords: [
        "aluminium window profile systems China",
        "thermally broken aluminium profiles",
        "aluminium window profiles for fabricators",
        "wholesale aluminium window profiles",
        "aluminium profile systems export",
        "Chongqing window system supplier",
      ],
    },
    title: "Aluminium systems for window and door fabrication.",
    intro:
      "The range covers 19 casement, tilt-and-turn, sliding, parallel-projecting, folding, hinged and interior systems. For exterior construction, the reference sections use 6063-T5 aluminium and PA66GF25 polyamide barriers. PINDÉ can supply material kits, profiles machined to the cutting list or CKD kits packed by opening.",
    supplyStatus: "Regular production range · qualification starts from the selected system",
    heroCards: [
      { label: "Frame depth", value: "65–196.8 mm" },
      { label: "Polyamide barrier", value: "PA66GF25" },
      { label: "Reference alloy", value: "6063-T5" },
      { label: "Catalogue range", value: "19 systems" },
    ],
    sections: [
      {
        title: "Profiles and thermal barriers",
        content:
          "Exterior systems are based on 6063-T5 aluminium profiles with PA66GF25 polyamide thermal barriers in the reference sections. The A120 section, for example, lists a 35.3 mm barrier. These component values explain the construction; they do not establish Uw for a finished window. Uw is checked against the unit size, frame fraction, insulating glass unit, spacer, hardware and installation detail.",
      },
      {
        title: "Surface finish",
        content:
          "The manufacturing route includes pretreatment and an automated Akzo Nobel powder-coating line. RAL powder colours, anodised finishes and wood-effect decoration are available by specification. Colour, gloss, coating thickness and the required exposure class are recorded in the approved sample and purchase specification.",
      },
      {
        title: "Gaskets, drainage and weather testing",
        content:
          "Exterior sections use EPDM gaskets and drained, pressure-equalised rebates. The exact number and position of sealing levels vary by system. Air permeability, watertightness and resistance to wind load must be read from the report for the tested unit; references to EN 12207, EN 12208 or EN 12210 do not transfer automatically to another size or hardware set.",
      },
      {
        title: "Hardware compatibility",
        content:
          "Hardware schedules can be prepared around SIEGENIA, G-U, Roto or KIN LONG components where the selected system and destination permit. The released BOM identifies every fitting. Opening types are defined per system and may include inward-opening, outward-opening, tilt-and-turn or fixed units.",
      },
      {
        title: "Fabrication and supply formats",
        content:
          "P1 is a material kit with profiles, gaskets, cleats, connectors and a bill of materials. P2 adds cutting, CNC machining and part identification. P3 is a glass-free CKD kit: machined parts, gaskets, connectors, hardware and agreed spares packed by opening. The choice depends on the buyer's machinery, labour plan and customs treatment.",
      },
      {
        title: "Standards and destination-market conformity",
        content:
          "The evidence register may include AS 2047, NFRC, CE/EN and management-system documents, depending on the selected product. For Russia and Central Asia, the importer and local conformity body determine the applicable route. Aluminium window units are normally assessed against the current destination-market adoption of standards such as ГОСТ 23166 and ГОСТ 21519, using an agreed specimen and scope.",
      },
    ],
    catalogTitle: "PINDÉ aluminium system catalogue",
    catalogIntro:
      "Filter the 19 systems by opening application. Each page identifies the construction, opening type and catalogue dimensions, with project limits left for the released technical package.",
    cta: "Request aluminium system technical pack",
    productLinkLabel: "Browse 19 aluminium systems",
  },
  ru: {
    lang: "ru",
    locale: "ru_RU",
    seo: {
      title: "Алюминиевые оконные профили с термовставкой | PINDÉ",
      description:
        "Девятнадцать алюминиевых систем для окон, дверей и перегородок. Системные комплекты, обработанные профили и CKD без стеклопакетов из Чунцина.",
      keywords: [
        "алюминиевые профильные системы из Китая",
        "тёплые алюминиевые оконные системы",
        "алюминиевый оконный профиль оптом",
        "профиль для производства алюминиевых окон",
        "алюминиевые оконные системы с терморазрывом",
        "поставщик оконных систем Чунцин",
      ],
    },
    title: "Алюминиевые системы для производства окон и дверей.",
    intro:
      "В линейке 19 поворотных, поворотно-откидных, раздвижных, параллельно-выдвижных, складных, распашных и интерьерных систем. В базовых сечениях наружных конструкций применяются алюминий 6063-T5 и термоизоляционные вставки PA66GF25. Поставка возможна материалами, профилями по карте раскроя и обработки либо CKD-комплектами по проёмам.",
    supplyStatus: "Серийная линейка · квалификация начинается с выбранной системы",
    heroCards: [
      { label: "Монтажная глубина", value: "65–196,8 мм" },
      { label: "Полиамидная вставка", value: "PA66GF25" },
      { label: "Базовый сплав", value: "6063-T5" },
      { label: "Каталожная линейка", value: "19 систем" },
    ],
    sections: [
      {
        title: "Профили и термоизоляционные вставки",
        content:
          "Наружные системы строятся на профилях из алюминия 6063-T5 с термоизоляционными вставками PA66GF25. Например, в сечении A120 указана вставка шириной 35,3 мм. Эти параметры описывают профиль, но сами по себе не определяют Uw оконного блока. Для расчёта и испытаний учитывают размер изделия, долю коробки и створки, стеклопакет, дистанционную рамку, фурнитуру и монтажный узел.",
      },
      {
        title: "Защитно-декоративное покрытие",
        content:
          "Производственный маршрут включает подготовку поверхности и автоматизированную линию порошковой окраски Akzo Nobel. По спецификации доступны цвета RAL, анодирование и декор под дерево. Цвет, степень блеска, толщина покрытия и требуемая категория эксплуатации фиксируются в утверждённом образце и заказной спецификации.",
      },
      {
        title: "Уплотнители, дренаж и климатические испытания",
        content:
          "В наружных системах применяются уплотнители EPDM и дренируемые фальцы с выравниванием давления. Число и положение контуров зависят от сечения. Класс воздухопроницаемости, водонепроницаемости и сопротивления ветровой нагрузке берут из протокола на испытанный оконный или дверной блок; ссылка на EN 12207, EN 12208 или EN 12210 не переносит результат на другую конструкцию автоматически.",
      },
      {
        title: "Совместимость с фурнитурой",
        content:
          "Для ряда систем можно подготовить комплект фурнитуры на базе компонентов SIEGENIA, G-U, Roto или KIN LONG, если это допускают выбранное сечение и рынок назначения. Каждый элемент указывается в рабочей спецификации. Способ открывания задаётся по системе: поворотный, поворотно-откидной, раздвижной, параллельно-выдвижной, складной или глухое остекление.",
      },
      {
        title: "Обработка и форматы поставки",
        content:
          "P1 — системный комплект материалов: профили, уплотнители, угловые и соединительные элементы, спецификация комплектации. P2 добавляет раскрой, механическую обработку на ЧПУ и маркировку деталей. P3 — CKD-комплект без стеклопакетов: обработанные детали, уплотнители, соединители, фурнитура и согласованный ЗИП, упакованные по проёмам. Формат выбирают по оборудованию, загрузке производства и условиям импорта.",
      },
      {
        title: "Стандарты и подтверждение соответствия",
        content:
          "Состав реестра документов зависит от выбранного продукта и может включать материалы AS 2047, NFRC, CE/EN и документы по системе менеджмента. Для России и стран Центральной Азии применимый маршрут определяют импортёр и местный орган по оценке соответствия. Алюминиевые оконные блоки обычно рассматривают по действующим в стране редакциям ГОСТ 23166 и ГОСТ 21519 на согласованном образце и в установленной области оценки.",
      },
    ],
    catalogTitle: "Каталог алюминиевых систем PINDÉ",
    catalogIntro:
      "Отфильтруйте 19 систем по назначению. На странице системы указаны конструкция, способ открывания и каталожные размеры; проектные ограничения входят в рабочий технический пакет.",
    cta: "Запросить технический пакет по алюминиевым системам",
    productLinkLabel: "Смотреть 19 алюминиевых систем",
  },
} as const;

// ──────────────────────────────────────────
// SYSTEMS — FRP
// ──────────────────────────────────────────
export const systemsFrpContent = {
  en: {
    lang: "en",
    locale: "en_US",
    seo: {
      title: "FRP Window Profiles & Composite Systems | PINDÉ",
      description:
        "Full-FRP FD90 and FDTL140 systems plus PD75 and PD95 aluminium-composite windows, supplied as qualified profiles or glass-free CKD sets.",
      keywords: [
        "FRP window profiles",
        "pultruded window profiles",
        "fiberglass window profiles China",
        "glass-fibre composite window systems",
        "pultruded profiles for window fabrication",
        "FRP window system supplier",
        "PD75 window system",
        "PD95 passive window system",
        "Ultra FRP Core",
        "aluminium GRPU window profile",
        "FD90 cold climate FRP window",
        "FDTL140 FRP sliding door",
      ],
    },
    title: "FRP systems for cold-region window and door fabrication.",
    intro:
      "FD90 and FDTL140 use pultruded FRP for the load-bearing frame sections. PD75 and PD95 retain aluminium faces and introduce an FRP insulating section. The four systems have different joints, fabrication methods and evidence, so each is qualified from its own reference build rather than treated as a common material substitution.",
    supplyStatus: "Project-qualified range · reference build required before supply",
    heroCards: [
      { label: "Full-FRP systems", value: "FD90 + FDTL140" },
      { label: "Catalogue thermal grade", value: "Grade 10" },
      { label: "Aluminium-composite range", value: "PD75 + PD95" },
      { label: "Release sequence", value: "Sample → pilot → project" },
    ],
    aluminiumCompositeLabel: "One category · two construction depths",
    aluminiumCompositeTitle: "PD aluminium-composite window systems",
    aluminiumCompositeIntro:
      "Both systems separate the inner and outer aluminium sections with a lower-conductivity structural zone. The PD75 reference section uses a documented 45 mm Ultra FRP Core. PD95 has a nominal 95 mm system depth and an 80 mm insulated zone. Certificate or catalogue values apply only to the identified specimen and must be rechecked for the ordered construction.",
    coldClimateTitle: "Full-FRP systems for severe winter envelopes",
    coldClimateIntro:
      "FD90 covers casement and tilt-and-turn window units. FDTL140 is a sliding door with compression sealing and a listed maximum leaf mass of 200 kg. Both carry catalogue Grade 10 thermal classifications, tied to the source test configurations and subject to whole-unit verification for the project.",
    coldClimateLabel: "Full-FRP cold-region system",
    coldClimateCategoryCta: "Explore the cold-climate category",
    sections: [
      {
        title: "PD75 and PD95 aluminium-composite construction",
        content:
          "PD75 joins the inner and outer aluminium profiles with a documented 45 mm pultruded glass-fibre reinforced polyurethane section. PD95 uses a deeper frame with an 80 mm insulated zone and a certificate-linked glazing reference. Neither product is a full-FRP frame. Each requires a separate bill of materials, material record and finished-window assessment.",
      },
      {
        title: "Full-FRP construction",
        content:
          "In FD90 and FDTL140, continuous glass-fibre rovings and mats are pulled through resin and a heated die to form the frame profiles. There is no separate aluminium thermal bridge in the load-bearing section. These systems use their own corner joints, fasteners, adhesive, tooling parameters and test plan; PD-series values do not describe them.",
      },
      {
        title: "Machining and joint control",
        content:
          "PD75 and PD95 require controlled assembly of the aluminium and insulating section, traceable batches and qualified connections. Full-FRP corners combine mechanical fasteners with structural adhesive and need defined cutting, drilling, bonding and dust-extraction procedures. The fabrication pack states the process for the selected system and the inspection points for the first article.",
      },
      {
        title: "First project",
        content:
          "A new fabricator first reviews the system sections, equipment and target standard. PINDÉ then supplies profile samples and corner-joint specimens. A typical paid pilot contains 3–10 glass-free kits for local assembly and testing. Repeat supply starts only after the team records acceptable yield, fit, packing and issue-resolution results.",
      },
      {
        title: "How performance values are used",
        content:
          "A thermal, structural or weather result is quoted with its report number, specimen size, glazing, hardware and date. Frame depth and material conductivity are component facts, not finished-window results. Where the ordered construction differs from the tested specimen, the difference is recorded and the required calculation or retest is agreed before the claim is used.",
      },
      {
        title: "Standards and conformity",
        content:
          "Full-FRP profiles are qualified against the agreed composite-profile and whole-window standards for the destination market. PD75 and PD95, as aluminium-composite window systems, require separate material and product routes plus whole-window testing for the ordered size, glazing, hardware and installation node. EAEU conformity is confirmed separately for Russia, Kazakhstan and Belarus with a local applicant and an agreed sample scope.",
      },
    ],
    cta: "Discuss an FRP qualification project",
    note: "PD75, PD95, FD90 and FDTL140 are separate constructions. Catalogue and certificate values apply only to the identified specimen, glazing and report scope. Claims for the destination market require current, project-specific evidence.",
  },
  ru: {
    lang: "ru",
    locale: "ru_RU",
    seo: {
      title: "Стеклокомпозитные оконные профили и системы | PINDÉ",
      description:
        "Системы FD90 и FDTL140 из FRP, алюминиево-композитные окна PD75 и PD95, квалифицированные профили и CKD без стеклопакетов.",
      keywords: [
        "стеклокомпозитный оконный профиль",
        "стеклопластиковый профиль для окон",
        "пултрузионный оконный профиль",
        "FRP оконные системы",
        "композитные оконные профили из Китая",
        "стеклокомпозитные оконные системы поставщик",
        "оконная система PD75",
        "оконная система PD95",
        "Ultra FRP Core",
        "оконный профиль алюминий GRPU",
        "окно FRP FD90 для холодного климата",
        "раздвижная дверь FRP FDTL140",
      ],
    },
    title: "Стеклокомпозитные системы для окон и дверей в холодных регионах.",
    intro:
      "В FD90 и FDTL140 несущие профили коробки и створки выполнены из пултрузионного стеклокомпозита. PD75 и PD95 сохраняют алюминиевые поверхности и используют стеклокомпозитный теплоизоляционный участок. У четырёх систем разные соединения, технология обработки и доказательная база, поэтому каждая запускается по собственному установочному образцу.",
    supplyStatus: "Проектная линейка · до поставки требуется установочный образец",
    heroCards: [
      { label: "Полностью стеклокомпозитные системы", value: "FD90 + FDTL140" },
      { label: "Каталожный класс теплоизоляции", value: "Класс 10" },
      { label: "Алюминиево-композитная линейка", value: "PD75 + PD95" },
      { label: "Порядок запуска", value: "Образец → пилот → проект" },
    ],
    aluminiumCompositeLabel: "Одна категория · две монтажные глубины",
    aluminiumCompositeTitle: "Алюминиево-композитные оконные системы PD",
    aluminiumCompositeIntro:
      "В обеих системах внутренний и наружный алюминиевые профили разделены конструктивной зоной с меньшей теплопроводностью. В базовом сечении PD75 применяется документированный Ultra FRP Core шириной 45 мм. PD95 имеет номинальную глубину 95 мм и теплоизоляционную зону 80 мм. Сертификат или каталог описывает только указанный образец; заказную конструкцию проверяют отдельно.",
    coldClimateTitle: "Полностью стеклокомпозитные системы для суровой зимы",
    coldClimateIntro:
      "FD90 предназначена для поворотных и поворотно-откидных оконных блоков. FDTL140 — раздвижной дверной блок с прижимом и указанной в каталоге максимальной массой створки 200 кг. Для обеих систем приведён каталожный класс теплоизоляции 10, относящийся к исходной испытательной конфигурации.",
    coldClimateLabel: "Полностью стеклокомпозитная система для холодного региона",
    coldClimateCategoryCta: "Открыть категорию для холодного климата",
    sections: [
      {
        title: "Конструкция PD75 и PD95",
        content:
          "В PD75 внутренний и наружный алюминиевые профили соединены документированным пултрузионным стеклокомпозитным участком Ultra FRP Core шириной 45 мм. В PD95 применяется более глубокая коробка с теплоизоляционной зоной 80 мм и привязанной к сертификату конфигурацией остекления. Ни одна из систем не является полностью стеклокомпозитной; для каждой нужны отдельная спецификация комплектации, документы на материалы и оценка готового оконного блока.",
      },
      {
        title: "Полностью стеклокомпозитная конструкция",
        content:
          "В FD90 и FDTL140 непрерывные стеклянные ровинги и маты протягиваются через связующее и нагретую фильеру, образуя несущие профили коробки и створки. Отдельного алюминиевого мостика холода в этих сечениях нет. Для систем установлены собственные угловые соединения, крепёж, клей, режимы обработки и план испытаний; значения серии PD к ним не относятся.",
      },
      {
        title: "Обработка и контроль соединений",
        content:
          "PD75 и PD95 требуют контролируемой сборки алюминия с теплоизоляционным сердечником, прослеживаемости партий и испытаний соединений до передачи профиля изготовителю окон. Полностью FRP-маршрут использует механический крепёж с конструкционным клеем и добавляет специальные режимы резки, сверления, склеивания и HEPA-удаления стеклянной пыли. Технологический пакет явно разделяет процессы систем.",
      },
      {
        title: "Программа опытной партии",
        content:
          "Новое производство сначала проверяет сечения системы, оборудование и целевой стандарт. Затем PINDÉ поставляет образцы профилей и угловых соединений. Типовая платная опытная партия содержит 3–10 комплектов без стеклопакетов для местной сборки и испытаний. Регулярные поставки начинаются после приемлемых результатов по выходу годных, точности сопряжений, упаковке и разбору замечаний.",
      },
      {
        title: "Применение результатов испытаний",
        content:
          "Теплотехнический, прочностной или климатический результат приводится вместе с номером протокола, размером образца, формулой стеклопакета, фурнитурой и датой. Монтажная глубина и теплопроводность материала не заменяют показатели готового оконного блока. Если заказная конструкция отличается от испытанной, отклонение фиксируют и до применения значения согласуют расчёт или повторное испытание.",
      },
      {
        title: "Стандарты и соответствие",
        content:
          "Полностью FRP-профили квалифицируются по согласованным для целевого рынка стандартам на композитные профили и готовые окна. Для PD75 и PD95 как алюминиево-композитных оконных систем требуются отдельные маршруты по материалам и продукции, а также испытания готового окна для заказанного размера, стеклопакета, фурнитуры и монтажного узла. Соответствие ЕАЭС подтверждается отдельно для России, Казахстана и Беларуси с локальным заявителем и согласованным объёмом образцов.",
      },
    ],
    cta: "Запросить программу опытной партии FRP",
    note: "PD75, PD95, FD90 и FDTL140 — разные конструкции. Каталожные и сертификационные значения относятся только к указанному образцу, стеклопакету и области протокола. Для рынка назначения нужна актуальная проектная доказательная база.",
  },
} as const;

// ──────────────────────────────────────────
// SUPPLY
// ──────────────────────────────────────────
export const supplyContent = {
  en: {
    lang: "en",
    locale: "en_US",
    seo: {
      title: "CKD Window Kits & Machined Profile Supply | PINDÉ",
      description:
        "P1 material kits, P2 cut and machined profiles, and P3 glass-free CKD sets from Chongqing for local window fabrication.",
      keywords: [
        "CKD window kits",
        "glass-free window kits",
        "window profile CKD supply",
        "machined aluminium window profiles",
        "window system supply formats",
        "cut-to-length window profiles",
      ],
    },
    title: "Choose how much processing stays in Chongqing.",
    intro:
      "P1, P2 and P3 describe who cuts, machines and prepares the system before local assembly. The decision depends on your saws and CNC capacity, labour plan, order mix and customs treatment. Quotations separate profiles, processing, components, packing and freight so the comparison remains usable.",
    formats: [
      {
        level: "P1",
        tag: "Material supply",
        title: "System material kit",
        from: "Finished profiles, gaskets, cleats, connectors, drainage parts, bill of materials and fabrication documents.",
        local: "Cutting, machining, hardware, glazing, assembly, QA and installation.",
        fit: "A fabricator with its own cutting, machining and corner-joining line.",
      },
      {
        level: "P2",
        tag: "Machined supply",
        title: "Cut-to-length and machined profiles",
        from: "Cutting-list optimisation, drainage and lock machining, CNC work and part identification.",
        local: "Corner joining, hardware, glazing, adjustment, final inspection and installation.",
        fit: "A factory introducing a new system or moving selected machining work upstream.",
      },
      {
        level: "P3",
        tag: "Opening-by-opening",
        title: "Glass-free CKD kit",
        from: "Machined profiles packed by opening with seals, joints, selected hardware and a spares pack.",
        local: "Final dimensional check, assembly, insulating glass units, adjustment, conformity work and installation.",
        fit: "A paid pilot, a scheduled project or a production cell with limited machining capacity.",
      },
    ],
    labels: {
      chongqing: "From Chongqing",
      local: "Kept local",
      fit: "Typical buyer",
      matrix: "Supply responsibility matrix",
    },
    note: "Rail-compatible export packing from Chongqing. FCA, CIP and DAP options are quoted per shipment; freight and import charges are never presented as fixed long-term rates.",
    cta: "Send window schedule for format recommendation",
  },
  ru: {
    lang: "ru",
    locale: "ru_RU",
    seo: {
      title: "CKD-комплекты и обработанные оконные профили | PINDÉ",
      description:
        "P1 — комплект материалов, P2 — профили в размер с обработкой, P3 — CKD без стеклопакетов из Чунцина для локального производства.",
      keywords: [
        "оконные CKD комплекты",
        "комплекты алюминиевых окон для сборки",
        "CKD поставка оконных систем",
        "алюминиевый профиль с обработкой",
        "форматы поставки оконных систем",
        "оконный профиль размерный раскрой",
      ],
    },
    title: "Определите, какая обработка выполняется в Чунцине.",
    intro:
      "P1, P2 и P3 распределяют раскрой, механическую обработку и комплектацию между Чунцином и местным производством. Выбор зависит от пил, станков с ЧПУ, загрузки, номенклатуры и таможенной классификации. В предложении отдельно показаны профили, обработка, комплектующие, упаковка и перевозка.",
    formats: [
      {
        level: "P1",
        tag: "Поставка материалов",
        title: "Системный комплект материалов",
        from: "Готовые профили, уплотнители, угловые и соединительные элементы, детали водоотвода, спецификация комплектации и технологические документы.",
        local: "Раскрой, обработка, фурнитура, стеклопакеты, сборка, контроль качества и монтаж.",
        fit: "Производство со своими пилами, обработкой профиля и оборудованием для сборки углов.",
      },
      {
        level: "P2",
        tag: "Поставка с обработкой",
        title: "Профили в размер с механической обработкой",
        from: "Оптимизация карты раскроя, фрезерование водоотводов и вырезов под замок, обработка на ЧПУ и маркировка деталей.",
        local: "Сборка углов, установка фурнитуры и стеклопакетов, регулировка, приёмка и монтаж.",
        fit: "Производство, запускающее новую систему или передающее часть обработки поставщику.",
      },
      {
        level: "P3",
        tag: "По каждому проёму",
        title: "CKD-комплект без стеклопакетов",
        from: "Обработанные детали по каждому проёму, уплотнения, соединители, согласованная фурнитура и комплект ЗИП.",
        local: "Контроль размеров, окончательная сборка, стеклопакеты, регулировка, подтверждение соответствия и монтаж.",
        fit: "Платная опытная партия, проектная поставка или участок с ограниченными возможностями обработки.",
      },
    ],
    labels: {
      chongqing: "Из Чунцина",
      local: "Выполняется на месте",
      fit: "Кому подходит",
      matrix: "Матрица ответственности по поставке",
    },
    note: "Экспортная упаковка из Чунцина рассчитана в том числе на железнодорожную перевозку. FCA, CIP и DAP рассчитываются для каждой партии; фрахт и импортные платежи не фиксируются как постоянная ставка.",
    cta: "Отправить оконную ведомость для подбора формата",
  },
} as const;

// ──────────────────────────────────────────
// ENGINEERING
// ──────────────────────────────────────────
export const engineeringContent = {
  en: {
    lang: "en",
    locale: "en_US",
    seo: {
      title: "Window Profile Machining & System Engineering | PINDÉ",
      description:
        "System definition, machining drawings, CNC processing, evidence registers and first-article support for aluminium and FRP window profiles.",
      keywords: [
        "window profile machining China",
        "CNC window profile processing",
        "aluminium profile deep processing",
        "window system engineering",
        "profile extrusion China",
        "window fabrication engineering support",
      ],
    },
    title: "Production documents tied to the released construction.",
    intro:
      "Before the first shipment, the parties approve the system definition, fabrication pack and evidence register. The documents identify the profiles, joints, machining and inspection points for one construction. Cold-region performance is taken from the applicable report or calculation, not inferred from frame depth or material conductivity.",
    deliverables: [
      {
        title: "System definition",
        description:
          "Profile sections and mass per metre, bill of materials, colour and batch rules, plus the gasket, connector and hardware maps. Purchased components are identified by part number and approved source.",
      },
      {
        title: "Fabrication package",
        description:
          "Cutting and machining drawings show tolerances, drainage positions, corner-joint method and required tooling. The pack records blade type, feed and speed where these are process-critical, together with inspection points and acceptance criteria.",
      },
      {
        title: "Evidence register",
        description:
          "Each test entry records the report number, laboratory, specimen size, insulating-glass make-up, hardware, date and stated scope. A value is not assigned to another size or configuration without an engineering basis.",
      },
      {
        title: "Launch support",
        description:
          "The launch pack includes profile sections and corner-joint specimens. The first locally fabricated units are compared with the reference build, with findings entered in the issue log. Remote training, change control and replacement-part planning follow the same revision record.",
      },
    ],
    manufacturingSteps: [
      {
        step: "01",
        title: "Extrusion",
        description:
          "The company brochure lists a 3,600-tonne press, automated cutting at ±0.5 mm, 6063-T5 billet control, in-line quenching and straightening. Order-specific capability is confirmed during qualification.",
      },
      {
        step: "02",
        title: "Surface treatment",
        description:
          "The powder-coating route covers pretreatment, coating and curing on an automated Akzo Nobel line. Anodised and wood-effect finishes are also listed. The applicable finish standard and exposure class are confirmed in the order specification.",
      },
      {
        step: "03",
        title: "CNC machining",
        description:
          "CNC centres machine drainage slots, lock cut-outs, handle holes and corner details. P2 and P3 parts are labelled to the cutting list and opening number. Nesting is reviewed before release to control offcut and replacement quantities.",
      },
      {
        step: "04",
        title: "Inspection & packing",
        description:
          "Batch inspection covers listed dimensions, visible finish and hardware interfaces. Profiles and kits are packed for the selected rail or road route with moisture protection. The packing list, part register and inspection record travel with the shipment documents.",
      },
    ],
    cta: "Request engineering package for your system",
  },
  ru: {
    lang: "ru",
    locale: "ru_RU",
    seo: {
      title: "Обработка оконного профиля и инжиниринг | PINDÉ",
      description:
        "Состав системы, чертежи обработки, ЧПУ, реестр протоколов и поддержка первого образца для алюминиевых и FRP-профилей.",
      keywords: [
        "обработка оконного профиля Китай",
        "CNC обработка алюминиевого профиля",
        "глубокая переработка алюминиевого профиля",
        "инженерная поддержка оконных систем",
        "экструзия алюминиевого профиля Китай",
        "производство оконных систем поддержка",
      ],
    },
    title: "Производственные документы для согласованной конструкции.",
    intro:
      "До первой отгрузки стороны утверждают состав системы, технологический пакет и реестр протоколов. В документах указаны профили, соединения, обработка и контрольные операции для одной конструкции. Пригодность для холодного региона берут из применимого расчёта или протокола, а не выводят из монтажной глубины или теплопроводности материала.",
    deliverables: [
      {
        title: "Состав системы",
        description:
          "Сечения и масса профилей на метр, спецификация комплектации, правила по цвету и партиям, карты уплотнителей, соединителей и фурнитуры. Покупные компоненты указываются по номеру детали и согласованному источнику.",
      },
      {
        title: "Технологический пакет",
        description:
          "На чертежах раскроя и обработки показаны допуски, водоотводные пазы, способ углового соединения и оснастка. Для критичных операций указываются тип диска, подача и скорость, а также контрольные точки и критерии приёмки.",
      },
      {
        title: "Реестр доказательств",
        description:
          "Для каждого протокола записываются номер, лаборатория, размер образца, формула стеклопакета, фурнитура, дата и область применения. Значение не переносят на другой размер или конструкцию без инженерного обоснования.",
      },
      {
        title: "Поддержка запуска",
        description:
          "Производство получает образцы профилей и угловых соединений. Первые локально собранные изделия сравниваются с установочным образцом, а замечания вносятся в журнал. Дистанционное обучение, изменения и заказ запасных деталей ведутся по той же ревизии документов.",
      },
    ],
    manufacturingSteps: [
      {
        step: "01",
        title: "Экструзия",
        description:
          "В корпоративной презентации указан пресс 3 600 тонн, автоматическая резка с допуском ±0,5 мм, контроль заготовок 6063-T5, поточная закалка и правка. Возможность выполнить конкретный заказ подтверждается при квалификации.",
      },
      {
        step: "02",
        title: "Отделка поверхности",
        description:
          "Маршрут порошковой окраски включает подготовку поверхности, нанесение покрытия и полимеризацию на автоматизированной линии Akzo Nobel. Также в каталоге указаны анодирование и декор под дерево. Стандарт покрытия и категория эксплуатации фиксируются в заказной спецификации.",
      },
      {
        step: "03",
        title: "Механическая обработка на ЧПУ",
        description:
          "На обрабатывающих центрах выполняются водоотводные пазы, вырезы под замок, отверстия под ручки и подготовка углов. Детали P2 и P3 маркируются по карте раскроя и номеру проёма. Раскладка проверяется до выпуска, чтобы учесть обрезь и запасные детали.",
      },
      {
        step: "04",
        title: "Контроль и упаковка",
        description:
          "При приёмке партии проверяются указанные размеры, видимая поверхность и сопряжения с фурнитурой. Профили и комплекты упаковываются под согласованный железнодорожный или автомобильный маршрут с влагозащитой. К отгрузке прилагаются упаковочный лист, реестр деталей и протокол контроля.",
      },
    ],
    cta: "Запросить инженерный пакет на вашу систему",
  },
} as const;

// ──────────────────────────────────────────
// PROCESS
// ──────────────────────────────────────────
export const processContent = {
  en: {
    lang: "en",
    locale: "en_US",
    seo: {
      title: "Window System Qualification & Supply Process | PINDÉ",
      description:
        "From system review and a released reference build to a paid first batch, recorded results and repeat window-profile supply.",
      keywords: [
        "window system supplier qualification",
        "window profile supply process",
        "fabricator enablement process",
        "window system pilot order",
        "aluminium window system procurement",
        "how to buy window profiles from China",
      ],
    },
    title: "Four decisions before repeat supply.",
    intro:
      "The work moves from factory fit to an approved reference build, then to a paid pilot and a recorded repeat order. Each stage has a document or inspection result that both sides can review before the next commitment.",
    steps: [
      {
        number: "01",
        title: "Qualify the system",
        description:
          "We review the equipment list, expected volume, current systems, a typical opening schedule, glazing specifications and destination-market requirements. That information narrows the system and decides whether P1, P2 or P3 is practical before a commercial offer is prepared.",
      },
      {
        number: "02",
        title: "Freeze the reference build",
        description:
          "The reference build records the system code, representative sizes, bill of materials, joints, available performance evidence and responsibility split. It also states what is supplied from Chongqing and what the local fabricator completes. The same revision becomes the technical baseline for the pilot.",
      },
      {
        number: "03",
        title: "Run a paid pilot",
        description:
          "The team first inspects profile sections and corner-joint specimens. A typical pilot then uses 3–10 glass-free kits for local machining where applicable, assembly and testing. Any credit for sample or freight cost is stated in the quotation rather than assumed.",
      },
      {
        number: "04",
        title: "Scale by evidence",
        description:
          "After the pilot, the parties review yield, dimensional fit, packing condition, delivery time and how non-conformities were closed. A project batch follows only when those records are acceptable. Reorder quantities and stock rules are then based on actual consumption data.",
      },
    ],
    cta: "Start the qualification process",
  },
  ru: {
    lang: "ru",
    locale: "ru_RU",
    seo: {
      title: "Квалификация оконной системы и порядок поставки | PINDÉ",
      description:
        "От проверки системы и утверждённого образца до платной первой партии, фиксации результатов и повторных поставок оконного профиля.",
      keywords: [
        "квалификация поставщика оконных систем",
        "процесс поставки оконного профиля",
        "внедрение оконной системы на производстве",
        "опытная партия оконных систем",
        "закупка алюминиевых оконных систем",
        "как купить оконный профиль из Китая",
      ],
    },
    title: "Четыре решения до регулярных поставок.",
    intro:
      "Работа идёт от проверки производства к утверждённому установочному образцу, затем к платной опытной партии и документированной повторной поставке. Перед каждым следующим обязательством у сторон есть чертёж, спецификация или результат контроля.",
    steps: [
      {
        number: "01",
        title: "Квалификация системы",
        description:
          "Проверяем перечень оборудования, ожидаемый объём, используемые системы, типовую ведомость проёмов, спецификации стеклопакетов и требования страны назначения. Эти данные определяют систему и практичный формат P1, P2 или P3 до подготовки коммерческого предложения.",
      },
      {
        number: "02",
        title: "Фиксация эталонной конструкции",
        description:
          "В установочном образце фиксируются код системы, типоразмеры, спецификация комплектации, соединения, доступные протоколы и распределение ответственности. Отдельно указано, что поставляет Чунцин и что завершает местное производство. Эта ревизия становится технической основой опытной партии.",
      },
      {
        number: "03",
        title: "Платная опытная партия",
        description:
          "Сначала команда проверяет образцы профилей и угловых соединений. Типовая опытная партия содержит 3–10 комплектов без стеклопакетов для местной обработки, если она предусмотрена, сборки и испытаний. Зачёт стоимости образцов или перевозки действует только тогда, когда он указан в предложении.",
      },
      {
        number: "04",
        title: "Масштабирование по результатам",
        description:
          "После пилота стороны рассматривают выход годных, точность сопряжений, состояние упаковки, срок доставки и закрытие несоответствий. Проектная партия выпускается при приемлемых результатах. Объём повторного заказа и складской запас затем рассчитываются по фактическому расходу.",
      },
    ],
    cta: "Начать процесс квалификации",
  },
} as const;

// ──────────────────────────────────────────
// CERTIFICATION
// ──────────────────────────────────────────
export const certificationContent = {
  en: {
    lang: "en",
    locale: "en_US",
    seo: {
      title: "Window Conformity for Russia & Central Asia | PINDÉ",
      description:
        "Plan window and door conformity by destination, product scope and supply form. Documentation support for Russia, Kazakhstan and other EAEU markets.",
      keywords: [
        "EAC window certification China",
        "window export to Russia compliance",
        "GOST window certification",
        "EAEU window import requirements",
        "window system certification for CIS",
        "aluminium window profile certification",
      ],
    },
    title: "Confirm the conformity route before the first shipment.",
    intro:
      "A profile bundle, machined component set, CKD kit and finished window may follow different customs and conformity routes. The importer and an accredited local body must confirm the applicable rules, applicant, specimen and marking for the destination. PINDÉ prepares the product file around that written scope.",
    sections: [
      {
        title: "EAEU framework and national application",
        content:
          "The EAEU harmonises a number of technical regulations, but construction products are still assessed through the rules in force for the product and country of placement. Ordinary window units, fire-rated doors, façade elements and hardware do not share one scope. The project therefore begins with the destination, intended use and exact form of the imported goods.",
      },
      {
        title: "Standards for the actual product",
        content:
          "For Russian-language specifications, current reference documents include ГОСТ 23166-2024 for window and balcony units, ГОСТ 21519-2022 for aluminium window units, ГОСТ 30777-2023 for opening hardware and ГОСТ 23747-2015 for aluminium door units. Their legal use and national adoption must be checked for the destination, including Kazakhstan, Kyrgyzstan, Belarus and Armenia. The local body defines the specimen and acceptance scope.",
      },
      {
        title: "Documentation alignment",
        content:
          "The HS code, invoice description, packing list and certificate of origin must describe the physical shipment consistently. P1 material kits, P2 machined parts and P3 glass-free CKD kits may be classified differently under the destination tariff schedule. The buyer's customs broker makes the classification decision; PINDÉ supplies the component list, material description and packing breakdown needed for that review.",
      },
      {
        title: "Test evidence",
        content:
          "An existing EN, NFRC or AS/NZS report can support the technical file only when its specimen and method are relevant. The evidence register identifies the laboratory, report number, size, glazing, hardware and date. The appointed conformity body decides whether the report is accepted, supplemented by calculation or followed by local sampling and testing.",
      },
      {
        title: "Company and product documents",
        content:
          "The company document register includes ISO management-system certificates and product evidence referring to CE/EN, AS 2047, AS 1288 or NFRC scopes. The exact certificate number, holder, product and validity are checked during the RFQ. A company certificate or report for another specimen does not replace conformity assessment for the ordered product.",
      },
    ],
    certifications: [
      { name: "ISO 9001", description: "Quality Management Systems" },
      { name: "ISO 14001", description: "Environmental Management" },
      { name: "CE", description: "European Conformity (EN 14351-1)" },
      { name: "AS2047", description: "Australian Windows & Glazed Doors" },
      { name: "AS1288", description: "Glass in Buildings" },
      { name: "NFRC", description: "North American Fenestration Rating" },
    ],
    cta: "Discuss certification route for your market",
  },
  ru: {
    lang: "ru",
    locale: "ru_RU",
    seo: {
      title: "Соответствие окон для России и Центральной Азии | PINDÉ",
      description:
        "Подготовка соответствия окон и дверей по стране, виду продукции и формату поставки. Документы для России, Казахстана и других рынков ЕАЭС.",
      keywords: [
        "сертификация EAC для окон из Китая",
        "экспорт окон в Россию соответствие",
        "ГОСТ сертификация окон",
        "требования ЕАЭС импорт окон",
        "сертификация оконных систем для СНГ",
        "сертификация алюминиевого оконного профиля",
      ],
    },
    title: "Маршрут подтверждения соответствия определяют до первой отгрузки.",
    intro:
      "Хлысты профиля, обработанные детали, CKD-комплект и готовый оконный блок могут иметь разные коды и процедуры. Импортёр вместе с аккредитованным местным органом подтверждает применимые требования, заявителя, образец и маркировку. PINDÉ формирует техническое досье под письменную область оценки.",
    sections: [
      {
        title: "Правила ЕАЭС и национальное применение",
        content:
          "ЕАЭС гармонизирует ряд технических регламентов, однако строительная продукция оценивается по правилам, действующим для конкретного изделия и страны обращения. Обычный оконный блок, противопожарная дверь, фасадный элемент и фурнитура относятся к разным областям. Поэтому проверка начинается со страны назначения, применения и точного состава ввозимого товара.",
      },
      {
        title: "Стандарты для конкретного изделия",
        content:
          "В русскоязычной спецификации применяются, в частности, ГОСТ 23166-2024 на оконные и балконные блоки, ГОСТ 21519-2022 на алюминиевые оконные блоки, ГОСТ 30777-2023 на фурнитуру и ГОСТ 23747-2015 на алюминиевые дверные блоки. Действие и национальное принятие документа проверяют для страны назначения, включая Казахстан, Кыргызстан, Беларусь и Армению. Местный орган задаёт образец и область оценки.",
      },
      {
        title: "Согласование документации",
        content:
          "Код ТН ВЭД, описание в инвойсе, упаковочный лист и сертификат происхождения должны одинаково описывать фактический товар. P1, P2 и P3 могут классифицироваться по-разному по тарифу страны назначения. Решение принимает таможенный представитель покупателя; PINDÉ предоставляет перечень деталей, описание материалов и разбивку упаковочных мест.",
      },
      {
        title: "Доказательная база испытаний",
        content:
          "Протокол EN, NFRC или AS/NZS может войти в техническое досье, если совпадают метод и испытанный образец. В реестре указываются лаборатория, номер протокола, размер, стеклопакет, фурнитура и дата. Назначенный орган решает, принять ли документ, дополнить его расчётом или провести местный отбор и испытания.",
      },
      {
        title: "Документы компании и продукции",
        content:
          "В реестре компании есть сертификаты систем менеджмента ISO и документы по отдельным областям CE/EN, AS 2047, AS 1288 или NFRC. При запросе проверяются номер, держатель, продукция и срок действия каждого документа. Сертификат предприятия или протокол на другой образец не заменяет оценку заказного изделия.",
      },
    ],
    certifications: [
      { name: "ISO 9001", description: "Системы менеджмента качества" },
      { name: "ISO 14001", description: "Экологический менеджмент" },
      { name: "CE", description: "Европейское соответствие (EN 14351-1)" },
      { name: "AS2047", description: "Австралийский стандарт на окна и остеклённые двери" },
      { name: "AS1288", description: "Стекло в строительстве" },
      { name: "NFRC", description: "Североамериканский рейтинг светопрозрачных конструкций" },
    ],
    cta: "Обсудить маршрут сертификации для вашего рынка",
  },
} as const;

// ──────────────────────────────────────────
// SHARED HELPER
// ──────────────────────────────────────────
export type PageContent = Record<string, unknown>;

// Extract content types for component Props
export type SystemsIndexContentItem = (typeof systemsIndexContent)["en"];
export type SystemsAluminiumContentItem = (typeof systemsAluminiumContent)["en"];
export type SystemsFrpContentItem = (typeof systemsFrpContent)["en"];
export type SupplyContentItem = (typeof supplyContent)["en"];
export type EngineeringContentItem = (typeof engineeringContent)["en"];
export type ProcessContentItem = (typeof processContent)["en"];
export type CertificationContentItem = (typeof certificationContent)["en"];
