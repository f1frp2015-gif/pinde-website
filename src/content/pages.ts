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
      title: "Window Profile Systems — Aluminium & FRP for Fabricators | PINDÉ",
      description:
        "Two material platforms for window fabricators: thermally broken aluminium profile systems (commercial mainline) and pultruded FRP composite systems (engineering programme). Supplied as system kits, machined components, or glass-free CKD kits from Chongqing.",
      keywords: [
        "aluminium window profile systems",
        "FRP window profiles",
        "window system supplier China",
        "thermally broken aluminium profiles",
        "pultruded window profiles",
        "window profile systems for fabricators",
      ],
    },
    title: "Window profile systems for local fabrication.",
    intro:
      "Two material platforms, one supply model. Choose the system that matches your market requirements, production capability and thermal performance targets. Every system ships with a complete BOM, fabrication package and evidence register — not just loose profiles.",
    platforms: [
      {
        code: "AL",
        label: "Commercial mainline",
        title: "Thermally broken aluminium",
        description:
          "6063-T5 aluminium alloy with PA66GF25 thermal break strips. 19 systems across casement, sliding, folding, push-out, swing door and interior configurations. Surface finishes by Akzo Nobel powder coating, anodising, or wood-grain. Compatible with SIEGENIA, G-U, Roto and KIN LONG hardware.",
        features: [
          "19 standard systems — casement, sliding, folding, push-out, swing, interior",
          "PA66GF25 thermal break — 500× lower conductivity than aluminium (0.3 vs 160 W/m·K)",
          "Triple EPDM sealing for air tightness Class 4",
          "Max glazing up to 206mm (S150 vertical lifting window)",
          "Surface: Akzo Nobel powder coating, anodising, wood-grain",
          "Hardware: SIEGENIA, G-U, Roto, KIN LONG",
        ],
        href: "/systems/aluminium",
        cta: "Explore aluminium systems",
      },
      {
        code: "FRP",
        label: "Engineering programme",
        title: "FRP & aluminium-GRPU composite",
        description:
          "FD90 and FDTL140 are full-FRP cold-climate flagships. PD75 and PD95 form the aluminium-composite window range, with different platform depths and thermal-break geometries. Each system is released against a defined BOM, connection method and project test plan.",
        features: [
          "FD90: 90mm full-FRP cold-climate casement and tilt-turn window",
          "FDTL140: 140mm full-FRP side-press sliding door",
          "PD75: 75mm aluminium-composite window platform",
          "PD95: nominal 95mm aluminium-composite passive-performance platform",
          "45mm Ultra FRP Core for strength, insulation and acoustic separation",
          "Grade 10 catalogue thermal systems for demanding cold regions",
          "Qualification, pilot kits and project-specific whole-unit verification",
        ],
        href: "/systems/frp",
        cta: "Explore FRP systems",
      },
    ],
    note: "Thermal, structural and weather-performance values are stated only for verified specimens, glazing build-ups and test scopes. Unverified values remain project targets — not sales claims.",
  },
  ru: {
    lang: "ru",
    locale: "ru_RU",
    seo: {
      title: "Оконные профильные системы — Алюминий и стеклокомпозит | PINDÉ",
      description:
        "Две материальные платформы для оконных производств: тёплые алюминиевые профильные системы и пултрузионные стеклокомпозитные системы FRP. Поставляются как системные комплекты, детали с обработкой или CKD-комплекты без стеклопакетов из Чунцина.",
      keywords: [
        "алюминиевые профильные системы",
        "стеклокомпозитный оконный профиль",
        "оконные системы из Китая",
        "тёплые алюминиевые оконные системы",
        "пултрузионный оконный профиль",
        "профильные системы для оконных производств",
      ],
    },
    title: "Оконные профильные системы для локального производства.",
    intro:
      "Две материальные платформы, одна модель поставок. Выберите систему под требования вашего рынка, производственные возможности и целевые показатели теплотехники. Каждая система поставляется с полным BOM, технологическим пакетом и реестром доказательств — а не просто разрозненными хлыстами.",
    platforms: [
      {
        code: "AL",
        label: "Основная коммерческая линейка",
        title: "Тёплый алюминий с терморазрывом",
        description:
          "Алюминиевый сплав 6063-T5 с термовставками PA66GF25. 19 систем — поворотные, раздвижные, складные, параллельно-выдвижные, распашные двери и межкомнатные решения. Отделка: порошковая окраска Akzo Nobel, анодирование, декор под дерево. Совместимость с фурнитурой SIEGENIA, G-U, Roto, KIN LONG.",
        features: [
          "19 стандартных систем — поворотные, раздвижные, складные, выдвижные, распашные, межкомнатные",
          "Термовставка PA66GF25 — теплопроводность в 500 раз ниже алюминия (0,3 против 160 Вт/м·K)",
          "Тройное уплотнение EPDM, класс воздухопроницаемости 4",
          "Максимальное остекление до 206 мм (S150 вертикально-подъёмное окно)",
          "Отделка: порошковая окраска Akzo Nobel, анодирование, декор под дерево",
          "Фурнитура: SIEGENIA, G-U, Roto, KIN LONG",
        ],
        href: "/systems/aluminium",
        cta: "Алюминиевые системы",
      },
      {
        code: "FRP",
        label: "Инженерная программа",
        title: "FRP и гибридный алюминий-GRPU",
        description:
          "FD90 и FDTL140 — флагманские полностью FRP системы для холодного климата. PD75 и PD95 образуют линейку алюминиево-композитных окон с разной глубиной и геометрией терморазрыва. Каждая система имеет свой BOM, технологию соединений и план испытаний.",
        features: [
          "FD90: 90-мм полностью FRP поворотное и поворотно-откидное окно",
          "FDTL140: 140-мм полностью FRP раздвижная дверь с боковым прижимом",
          "PD75: алюминиево-композитная оконная платформа глубиной 75 мм",
          "PD95: алюминиево-композитная платформа номинальной глубиной 95 мм для пассивных зданий",
          "Ultra FRP Core 45 мм для прочности, теплоизоляции и акустической развязки",
          "Каталожный класс теплоизоляции 10 для суровых холодных регионов",
          "Квалификация, опытные комплекты и проектная проверка готового изделия",
        ],
        href: "/systems/frp",
        cta: "Стеклокомпозитные системы",
      },
    ],
    note: "Показатели теплотехники, прочности и герметичности указываются только для проверенных образцов, стеклопакетов и объёмов испытаний. Непроверенные значения остаются целями проекта, а не рекламными обещаниями.",
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
      title: "Aluminium Window Profile Systems from China — Thermally Broken | PINDÉ",
      description:
        "Thermally broken aluminium window-and-door profile systems for fabricators. 19 standard systems, PA66GF25 thermal break, 6063-T5 alloy, supplied as system kits, machined components or glass-free CKD from Chongqing. GOST, EN, NFRC compliant.",
      keywords: [
        "aluminium window profile systems China",
        "thermally broken aluminium profiles",
        "aluminium window profiles for fabricators",
        "wholesale aluminium window profiles",
        "aluminium profile systems export",
        "Chongqing window system supplier",
      ],
    },
    title: "Thermally broken aluminium window-and-door systems.",
    intro:
      "6063-T5 aluminium alloy with PA66GF25 thermal break strips, supplied as a complete system — not loose profiles. 19 standard systems across casement, sliding, folding, push-out, swing door and interior configurations. Each system ships with a full BOM, fabrication package, and evidence register.",
    supplyStatus: "Commercial mainline — available for immediate qualification",
    heroCards: [
      { label: "Profile Depth", value: "65–196.8 mm" },
      { label: "Thermal Break", value: "PA66GF25 (0.3 W/m·K)" },
      { label: "Alloy", value: "6063-T5, ≥1.4mm wall" },
      { label: "Max Glazing", value: "Up to 206 mm" },
    ],
    sections: [
      {
        title: "Profile & thermal break technology",
        content:
          "All PINDÉ aluminium systems use 6063-T5 alloy with a minimum wall thickness of 1.4mm. The PA66GF25 (polyamide 66 with 25% glass fibre) thermal break strip creates an insulating barrier between interior and exterior profiles. At 0.3 W/m·K, PA66GF25 conducts heat roughly 500 times slower than aluminium (160 W/m·K). Our flagship A120 system uses a 35.3mm wide thermal break strip — among the widest in its class — enabling Uw values below 1.0 W/m²K with appropriate triple glazing.",
      },
      {
        title: "Surface finishing",
        content:
          "Profiles are finished on an automated Akzo Nobel powder coating line with degreasing and chromating pre-treatment. Available finishes include standard RAL colours, anodising, and wood-grain effect. All finishes are tested for UV stability, adhesion, and corrosion resistance per Qualicoat and AAMA 2604 standards.",
      },
      {
        title: "Sealing & weather performance",
        content:
          "Triple EPDM (ethylene propylene diene monomer) rubber seals provide multi-layer protection against air infiltration, water ingress, and wind pressure. Systems are tested to EN 12207 (air permeability), EN 12208 (water tightness), and EN 12210 (wind load resistance). Drain-type water discharge with pressure-equalised chambers prevents standing water in the glazing rebate.",
      },
      {
        title: "Hardware compatibility",
        content:
          "All systems are compatible with premium European and Chinese hardware brands including SIEGENIA, G-U, Roto, and KIN LONG. Hardware schedules are included in the system BOM. Each system supports multiple opening modes — outward, inward, tilt-turn, and fixed — with consistent profile geometry across modes.",
      },
      {
        title: "Fabrication & supply formats",
        content:
          "Systems are supplied at three readiness levels: P1 (complete system kit — profiles, gaskets, cleats, connectors, BOM), P2 (cut-to-length & machined — optimised cutting, CNC work, part identification), and P3 (glass-free CKD — machined profiles packed by opening with seals, joints, hardware, spares). The right level depends on your equipment, labour, and import economics.",
      },
      {
        title: "Standards & certification",
        content:
          "Systems are tested and certified to AS2047 (Australian windows), NFRC 100/200 (North American thermal rating), CE/EN 14351-1 (European product standard), and ISO 9001/14001. For EAEU markets, GOST 23166 and GOST 30673 testing can be arranged with a local applicant and agreed sample scope before first shipment.",
      },
    ],
    catalogTitle: "PINDÉ aluminium system catalogue",
    catalogIntro:
      "All 19 original PINDÉ aluminium window-and-door products now live inside the Aluminium family. Filter by application, then open the system page for its configuration, features and reference specifications.",
    cta: "Request aluminium system technical pack",
    productLinkLabel: "Browse 19 aluminium systems",
  },
  ru: {
    lang: "ru",
    locale: "ru_RU",
    seo: {
      title: "Алюминиевые оконные профильные системы из Китая — с терморазрывом | PINDÉ",
      description:
        "Тёплые алюминиевые оконно-дверные профильные системы для производств. 19 стандартных систем, термовставка PA66GF25, сплав 6063-T5. Поставка системными комплектами, деталями с обработкой или CKD без стеклопакетов из Чунцина. ГОСТ, EN, NFRC.",
      keywords: [
        "алюминиевые профильные системы из Китая",
        "тёплые алюминиевые оконные системы",
        "алюминиевый оконный профиль оптом",
        "профиль для производства алюминиевых окон",
        "алюминиевые оконные системы с терморазрывом",
        "поставщик оконных систем Чунцин",
      ],
    },
    title: "Тёплые алюминиевые оконно-дверные системы.",
    intro:
      "Алюминиевый сплав 6063-T5 с термовставками PA66GF25, поставляется как полная система — не разрозненные хлысты. 19 стандартных систем: поворотные, раздвижные, складные, параллельно-выдвижные, распашные двери и межкомнатные решения. Каждая система отгружается с полным BOM, технологическим пакетом и реестром доказательств.",
    supplyStatus: "Основная коммерческая линейка — доступна для немедленной квалификации",
    heroCards: [
      { label: "Монтажная глубина", value: "65–196,8 мм" },
      { label: "Терморазрыв", value: "PA66GF25 (0,3 Вт/м·K)" },
      { label: "Сплав", value: "6063-T5, стенка ≥1,4 мм" },
      { label: "Макс. остекление", value: "до 206 мм" },
    ],
    sections: [
      {
        title: "Профиль и технология терморазрыва",
        content:
          "Все алюминиевые системы PINDÉ изготавливаются из сплава 6063-T5 с минимальной толщиной стенки 1,4 мм. Термовставка PA66GF25 (полиамид 66 с 25% стекловолокна) создаёт изолирующий барьер между внутренним и наружным профилями. При теплопроводности 0,3 Вт/м·K PA66GF25 проводит тепло примерно в 500 раз медленнее алюминия (160 Вт/м·K). Флагманская система A120 использует термовставку шириной 35,3 мм — одну из самых широких в своём классе — что позволяет достичь Uw ниже 1,0 Вт/м²K с соответствующим тройным остеклением.",
      },
      {
        title: "Отделка поверхности",
        content:
          "Профили окрашиваются на автоматизированной линии Akzo Nobel с предварительным обезжириванием и хроматированием. Доступные варианты: стандартные цвета RAL, анодирование и декор под дерево. Все покрытия проверены на устойчивость к УФ-излучению, адгезию и коррозионную стойкость по стандартам Qualicoat и AAMA 2604.",
      },
      {
        title: "Уплотнение и защита от непогоды",
        content:
          "Тройные уплотнители из EPDM (этилен-пропилен-диеновый каучук) обеспечивают многослойную защиту от продувания, протечек и ветровой нагрузки. Системы испытаны по EN 12207 (воздухопроницаемость), EN 12208 (водонепроницаемость) и EN 12210 (сопротивление ветровой нагрузке). Дренажная система с камерами выравнивания давления предотвращает застой воды в фальце остекления.",
      },
      {
        title: "Совместимость с фурнитурой",
        content:
          "Все системы совместимы с фурнитурой премиальных европейских и китайских брендов: SIEGENIA, G-U, Roto, KIN LONG. Спецификации фурнитуры включены в BOM системы. Каждая система поддерживает несколько режимов открывания — наружу, внутрь, поворотно-откидной и фиксированный — с единой геометрией профиля.",
      },
      {
        title: "Изготовление и форматы поставки",
        content:
          "Системы поставляются на трёх уровнях готовности: P1 (полный системный комплект — профили, уплотнители, угловые и соединительные элементы, BOM), P2 (размерный раскрой и обработка — оптимизация раскроя, CNC, маркировка деталей), P3 (CKD без стеклопакетов — обработанные детали по проёмам, уплотнители, соединения, фурнитура, ЗИП). Нужный уровень зависит от оборудования, загрузки и экономики импорта.",
      },
      {
        title: "Стандарты и сертификация",
        content:
          "Системы испытаны и сертифицированы по AS2047 (австралийский стандарт на окна), NFRC 100/200 (североамериканский тепловой рейтинг), CE/EN 14351-1 (европейский стандарт на продукцию), а также ISO 9001/14001. Для рынков ЕАЭС испытания по ГОСТ 23166 и ГОСТ 30673 могут быть организованы с локальным заявителем и согласованным объёмом образцов до первой отгрузки.",
      },
    ],
    catalogTitle: "Каталог алюминиевых систем PINDÉ",
    catalogIntro:
      "Все 19 исходных алюминиевых оконно-дверных продуктов PINDÉ теперь находятся внутри семейства Aluminium. Отфильтруйте системы по применению и откройте страницу нужной конфигурации с характеристиками и справочными параметрами.",
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
      title: "FD90, FDTL140, PD75 & PD95 FRP Systems | PINDÉ",
      description:
        "FD90 and FDTL140 full-FRP cold-climate systems plus PD75 and PD95 aluminium-composite window platforms. Qualified profile and CKD programmes from Chongqing.",
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
    title: "FRP window and door systems for engineered climates.",
    intro:
      "Two composite routes sit in this family. FD90 and FDTL140 are full-FRP flagships for demanding cold regions. PD75 and PD95 form the aluminium-composite window range: PD75 uses a 45mm Ultra FRP Core, while PD95 adds a nominal 95mm passive-performance platform with an 80mm insulated profile zone. Each programme is released against a defined BOM, connection method and project test plan.",
    supplyStatus: "Engineering programme — released by project qualification",
    heroCards: [
      { label: "Cold-climate flagships", value: "FD90 + FDTL140" },
      { label: "Catalogue thermal grade", value: "Grade 10" },
      { label: "Aluminium-composite range", value: "PD75 + PD95" },
      { label: "Supply", value: "Qualification → pilot → project" },
    ],
    aluminiumCompositeLabel: "One category · two platform depths",
    aluminiumCompositeTitle: "PD aluminium-composite window systems",
    aluminiumCompositeIntro:
      "PD75 and PD95 are presented together because both separate inner and outer aluminium sections with a low-conductivity structural zone. PD75 foregrounds its documented 45mm Ultra FRP Core; PD95 extends the platform to a nominal 95mm depth and an 80mm insulated profile zone for passive-performance projects, subject to renewed evidence.",
    coldClimateTitle: "Extreme-cold full-FRP flagships",
    coldClimateIntro:
      "FD90 targets high-insulation casement and tilt-turn openings; FDTL140 brings side-press sealing and a 200kg leaf capacity to large sliding doors. Both are catalogue Grade 10 thermal systems and remain subject to project-specific whole-window or whole-door verification.",
    coldClimateLabel: "Cold-climate flagship",
    coldClimateCategoryCta: "Explore the cold-climate category",
    sections: [
      {
        title: "PD75 and PD95 aluminium-composite platforms",
        content:
          "PD75 retains aluminium inner and outer shells and structurally joins them with a documented 45mm pultruded glass-fibre reinforced polyurethane Ultra FRP Core. PD95 uses a deeper aluminium-composite architecture with an 80mm insulated profile zone and a passive-performance glazing reference. Neither is presented as a full-FRP frame; each requires its own BOM, material evidence and whole-window qualification.",
      },
      {
        title: "Full-FRP route",
        content:
          "For projects that require composite profiles throughout the frame, PINDÉ also supports a full pultruded FRP route. Continuous glass-fibre rovings and mats are pulled through a resin system and heated die, producing low-conductivity profiles without a separate metal thermal bridge. Full-FRP systems use their own BOM, corner-joint method, tooling parameters and validation plan and are not represented by PD-series catalogue values.",
      },
      {
        title: "Composite manufacturing & connection control",
        content:
          "PD75 and PD95 require controlled aluminium-to-insulating-core assembly, batch traceability and connection testing before profiles reach a fabricator. The full-FRP route uses mechanical fastening plus structural adhesive at corner joints and adds composite-specific cutting, drilling, bonding and HEPA dust-control parameters. The fabrication package identifies which process applies to each system rather than treating all composite windows alike.",
      },
      {
        title: "Pilot programme",
        content:
          "Every new FRP fabricator starts with a qualification review (equipment, volume, target standard), followed by section samples and corner joint specimens. The paid pilot consists of 3–10 glass-free kits for local fabrication and testing. Only after yield, fit, logistics, and claims data are accepted does the programme move to micro-batch, project batch, and repeat supply.",
      },
      {
        title: "Performance evidence",
        content:
          "Thermal, structural and weather-performance values are stated only for a verified specimen, glazing build-up and test scope. Cold-climate suitability is confirmed system by system. Frame depth or material conductivity alone is not used to infer whole-window performance. An evidence register tracks every test report number, laboratory, specimen size, glazing, hardware, and date.",
      },
      {
        title: "Standards & compliance",
        content:
          "Full-FRP profiles are qualified against the agreed composite-profile and whole-window standards for the destination market. PD75 and PD95, as aluminium-composite window systems, require separate material and product routes plus whole-window testing for the ordered size, glazing, hardware and installation node. EAEU conformity is confirmed separately for Russia, Kazakhstan and Belarus with a local applicant and an agreed sample scope.",
      },
    ],
    cta: "Enquire about FRP pilot programme",
    note: "PD75, PD95 and full-FRP systems are supplied through an engineering programme, not as interchangeable off-the-shelf profiles. Catalogue and historical certificate values apply only to the identified specimen, glazing and scope. Destination-market claims require project-specific verification and current evidence.",
  },
  ru: {
    lang: "ru",
    locale: "ru_RU",
    seo: {
      title: "Системы FRP FD90, FDTL140, PD75 и PD95 | PINDÉ",
      description:
        "Полностью FRP системы FD90 и FDTL140 для холодного климата плюс алюминиево-композитные оконные платформы PD75 и PD95. Квалифицированные профили и CKD из Чунцина.",
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
    title: "Оконные и дверные системы FRP для расчётного климата.",
    intro:
      "В этом семействе два композитных маршрута. FD90 и FDTL140 — флагманские полностью FRP системы для суровых холодных регионов. PD75 и PD95 образуют линейку алюминиево-композитных окон: PD75 использует Ultra FRP Core шириной 45 мм, а PD95 добавляет платформу номинальной глубиной 95 мм с теплоизоляционной зоной 80 мм для пассивных зданий. Каждая программа имеет свой BOM, технологию соединений и план испытаний.",
    supplyStatus: "Инженерная программа — поставка по проектной квалификации",
    heroCards: [
      { label: "Флагманы для холодного климата", value: "FD90 + FDTL140" },
      { label: "Каталожный класс теплоизоляции", value: "Класс 10" },
      { label: "Алюминиево-композитная линейка", value: "PD75 + PD95" },
      { label: "Поставка", value: "Квалификация → пилот → проект" },
    ],
    aluminiumCompositeLabel: "Одна категория · две глубины платформы",
    aluminiumCompositeTitle: "Алюминиево-композитные оконные системы PD",
    aluminiumCompositeIntro:
      "PD75 и PD95 представлены вместе, поскольку обе системы разделяют внутренний и наружный алюминий низкотеплопроводной конструктивной зоной. PD75 основана на документированном Ultra FRP Core шириной 45 мм; PD95 увеличивает номинальную глубину до 95 мм и теплоизоляционную зону до 80 мм для проектов пассивных зданий при условии обновления доказательной базы.",
    coldClimateTitle: "Флагманы полностью FRP для экстремального холода",
    coldClimateIntro:
      "FD90 рассчитана на высокотеплоизоляционные поворотные и поворотно-откидные проёмы; FDTL140 переносит боковой прижим и створку до 200 кг на крупные раздвижные двери. Обе системы имеют каталожный класс теплоизоляции 10 и требуют проектного подтверждения готового окна или двери.",
    coldClimateLabel: "Флагман для холодного климата",
    coldClimateCategoryCta: "Открыть категорию для холодного климата",
    sections: [
      {
        title: "Алюминиево-композитные платформы PD75 и PD95",
        content:
          "PD75 сохраняет внутреннюю и наружную алюминиевые оболочки и конструктивно соединяет их документированным Ultra FRP Core шириной 45 мм из пултрузионного стеклокомпозита GRPU. PD95 использует более глубокую алюминиево-композитную архитектуру с теплоизоляционной зоной 80 мм и справочной конфигурацией для пассивных зданий. Ни одна из них не представлена как полностью FRP-рама; для каждой требуется свой BOM, подтверждение материалов и квалификация готового окна.",
      },
      {
        title: "Полностью FRP-маршрут",
        content:
          "Для проектов, которым нужны композитные профили по всему сечению рамы, PINDÉ также поддерживает полностью пултрузионный маршрут FRP. Непрерывные стеклянные ровинги и маты протягиваются через связующее и нагретую фильеру, формируя низкотеплопроводные профили без металлического термомоста. Такие системы имеют собственные BOM, угловые соединения, режимы обработки и план испытаний; значения каталогов серии PD на них не распространяются.",
      },
      {
        title: "Контроль композита и соединений",
        content:
          "PD75 и PD95 требуют контролируемой сборки алюминия с теплоизоляционным сердечником, прослеживаемости партий и испытаний соединений до передачи профиля изготовителю окон. Полностью FRP-маршрут использует механический крепёж с конструкционным клеем и добавляет специальные режимы резки, сверления, склеивания и HEPA-удаления стеклянной пыли. Технологический пакет явно разделяет процессы систем.",
      },
      {
        title: "Программа опытной партии",
        content:
          "Каждый новый производитель FRP начинает с квалификационной проверки (оборудование, объём, целевой стандарт), затем получает образцы сечений и угловых соединений. Платная опытная партия состоит из 3–10 комплектов без стеклопакетов для локального изготовления и испытаний. Только после подтверждения выхода годных, стыковки, логистики и показателей программа переходит к микропартии, проектной поставке и регулярным отгрузкам.",
      },
      {
        title: "Доказательная база",
        content:
          "Показатели теплотехники, прочности и герметичности указываются только для проверенного образца, стеклопакета и объёма испытаний. Пригодность для холодного климата подтверждается по каждой системе. Монтажная глубина или теплопроводность материала сами по себе не заменяют показатель готового окна. Реестр доказательств отслеживает номер каждого отчёта, лабораторию, размер образца, стеклопакет, фурнитуру и дату.",
      },
      {
        title: "Стандарты и соответствие",
        content:
          "Полностью FRP-профили квалифицируются по согласованным для целевого рынка стандартам на композитные профили и готовые окна. Для PD75 и PD95 как алюминиево-композитных оконных систем требуются отдельные маршруты по материалам и продукции, а также испытания готового окна для заказанного размера, стеклопакета, фурнитуры и монтажного узла. Соответствие ЕАЭС подтверждается отдельно для России, Казахстана и Беларуси с локальным заявителем и согласованным объёмом образцов.",
      },
    ],
    cta: "Запросить программу опытной партии FRP",
    note: "PD75, PD95 и полностью FRP-системы поставляются в рамках инженерной программы и не являются взаимозаменяемыми складскими профилями. Каталожные значения и исторический сертификат относятся только к указанному образцу, стеклопакету и объёму проверки. Заявления для целевого рынка требуют проектного подтверждения и актуальной доказательной базы.",
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
      title: "CKD Window Kits & System Supply Formats — P1/P2/P3 | PINDÉ",
      description:
        "Three supply formats for window fabricators: P1 (complete system kit), P2 (cut-to-length & machined), P3 (glass-free CKD kits). From Chongqing for local fabrication. CKD window kits, machined window profiles, system materials.",
      keywords: [
        "CKD window kits",
        "glass-free window kits",
        "window profile CKD supply",
        "machined aluminium window profiles",
        "window system supply formats",
        "cut-to-length window profiles",
      ],
    },
    title: "From system materials to assembly-ready semi-finished kits.",
    intro:
      "Three supply-readiness levels — P1, P2, P3. The right level depends on your equipment, labour, order mix and import economics. Every quote separates profile value, processing, components, packing and freight — so you see exactly what you pay for.",
    formats: [
      {
        level: "P1",
        tag: "Default",
        title: "Complete system kit",
        from: "Finished profiles, gaskets, cleats, connectors, drainage parts, BOM and fabrication documents.",
        local: "Cutting, machining, hardware, glazing, assembly, QA and installation.",
        fit: "Established fabricators with cutting and corner-joining capability.",
      },
      {
        level: "P2",
        tag: "Upgrade",
        title: "Cut-to-length & machined",
        from: "Optimised cutting, drainage and lock machining, CNC work and part identification.",
        local: "Corner joining, hardware, glazing, adjustment, final inspection and installation.",
        fit: "Factories that need capacity relief or controlled first production.",
      },
      {
        level: "P3",
        tag: "Project",
        title: "Glass-free CKD kit",
        from: "Machined profiles packed by opening with seals, joints, selected hardware and a spares pack.",
        local: "Final dimensions, assembly, insulating-glass units, commissioning, compliance and site work.",
        fit: "Paid pilot runs, time-sensitive projects and lower-capability production cells.",
      },
    ],
    labels: {
      chongqing: "From Chongqing",
      local: "Kept local",
      fit: "Best fit",
      matrix: "Supply responsibility matrix",
    },
    note: "Rail-compatible export packing from Chongqing. FCA, CIP and DAP options are quoted per shipment; freight and import charges are never presented as fixed long-term rates.",
    cta: "Send window schedule for format recommendation",
  },
  ru: {
    lang: "ru",
    locale: "ru_RU",
    seo: {
      title: "CKD-комплекты окон и форматы системных поставок — P1/P2/P3 | PINDÉ",
      description:
        "Три формата поставки для оконных производств: P1 (полный системный комплект), P2 (размерный раскрой и обработка), P3 (CKD-комплекты без стеклопакетов). Из Чунцина для локального производства.",
      keywords: [
        "оконные CKD комплекты",
        "комплекты алюминиевых окон для сборки",
        "CKD поставка оконных систем",
        "алюминиевый профиль с обработкой",
        "форматы поставки оконных систем",
        "оконный профиль размерный раскрой",
      ],
    },
    title: "От системных материалов до полуфабрикатов, готовых к сборке.",
    intro:
      "Три уровня готовности поставки — P1, P2, P3. Нужный уровень зависит от оборудования, загрузки, номенклатуры заказов и экономики импорта. В каждом предложении отдельно указываются профиль, обработка, комплектующие, упаковка и перевозка — вы видите, за что платите.",
    formats: [
      {
        level: "P1",
        tag: "Основной",
        title: "Полный системный комплект",
        from: "Готовые профили, уплотнители, угловые и соединительные элементы, водоотвод, BOM и технологические документы.",
        local: "Раскрой, обработка, фурнитура, стеклопакеты, сборка, контроль качества и монтаж.",
        fit: "Действующие оконные производства с пилами и оборудованием для сборки углов.",
      },
      {
        level: "P2",
        tag: "Расширенный",
        title: "Размерный раскрой и обработка",
        from: "Оптимизация раскроя, фрезеровка водоотводов и отверстий под замок, CNC-обработка и маркировка деталей.",
        local: "Сборка углов, установка фурнитуры и стеклопакетов, регулировка, приёмка и монтаж.",
        fit: "Предприятиям, которым нужна дополнительная мощность или контролируемый запуск новой системы.",
      },
      {
        level: "P3",
        tag: "Проектный",
        title: "CKD-комплект без стеклопакетов",
        from: "Обработанные детали по каждому проёму, уплотнения, соединители, согласованная фурнитура и комплект ЗИП.",
        local: "Подтверждение размеров, окончательная сборка, стеклопакеты, наладка, соответствие требованиям страны и монтаж.",
        fit: "Платная опытная партия, срочный проект или производственный участок с ограниченной обработкой.",
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
      title: "Window Profile Machining & Engineering — CNC, Surface Treatment | PINDÉ",
      description:
        "Engineering before volume: system definition, fabrication package, evidence register and launch support. CNC window profile processing, aluminium profile deep processing, surface treatment from Chongqing.",
      keywords: [
        "window profile machining China",
        "CNC window profile processing",
        "aluminium profile deep processing",
        "window system engineering",
        "profile extrusion China",
        "window fabrication engineering support",
      ],
    },
    title: "Documents a production team can use — not a marketing PDF alone.",
    intro:
      "Before the first shipment, we freeze the system definition, fabrication package and evidence register. Cold-climate suitability is confirmed system by system — frame depth, thermal-break width or material conductivity alone is not used to infer whole-window performance.",
    deliverables: [
      {
        title: "System definition",
        description:
          "Profile sections with kg/m, complete bill of materials, colour and batch rules, gasket and connector mapping. Every component is identified by part number and supplier.",
      },
      {
        title: "Fabrication package",
        description:
          "Cutting and machining drawings with tolerances, drainage slot positions, corner joint method and tooling recommendations, process parameters (feeds, speeds, blade types), inspection points and acceptance criteria.",
      },
      {
        title: "Evidence register",
        description:
          "A structured log of every test report: report number, laboratory name, specimen size, glazing build-up, hardware used, test date, and the exact scope each result supports. No test result is applied beyond the specimen it was measured on.",
      },
      {
        title: "Launch support",
        description:
          "Profile section samples and corner joint specimens for your team to inspect. First-article review — we check your first fabricated units against the reference build. Remote fabrication training, issue traceability, engineering change control, and replenishment planning.",
      },
    ],
    manufacturingSteps: [
      {
        step: "01",
        title: "Extrusion",
        description:
          "3600-ton press, automated cutting at ±0.5mm tolerance. 6063-T5 billets with batch traceability. In-line quenching and straightening.",
      },
      {
        step: "02",
        title: "Surface treatment",
        description:
          "Automated Akzo Nobel powder coating line. Degreasing → chromating → coating → curing. Anodising and wood-grain options available. Qualicoat and AAMA 2604 tested.",
      },
      {
        step: "03",
        title: "CNC & deep processing",
        description:
          "CNC machining centres for drainage slots, lock cut-outs, handle holes, and corner preparation. Part labelling and identification for P2/P3 kits. Optimised nesting for material yield.",
      },
      {
        step: "04",
        title: "Inspection & packing",
        description:
          "Batch QA with dimensional checks, surface inspection, and hardware fit-testing. Rail-compatible export packing with moisture protection. Documentation package per shipment.",
      },
    ],
    cta: "Request engineering package for your system",
  },
  ru: {
    lang: "ru",
    locale: "ru_RU",
    seo: {
      title: "Обработка оконного профиля и инженерная поддержка — CNC, покрытие | PINDÉ",
      description:
        "Сначала инженерия, затем объём: состав системы, технологический пакет, реестр доказательств и поддержка запуска. CNC-обработка оконного профиля, глубокая переработка алюминиевого профиля из Чунцина.",
      keywords: [
        "обработка оконного профиля Китай",
        "CNC обработка алюминиевого профиля",
        "глубокая переработка алюминиевого профиля",
        "инженерная поддержка оконных систем",
        "экструзия алюминиевого профиля Китай",
        "производство оконных систем поддержка",
      ],
    },
    title: "Документы для производства, а не только рекламный каталог.",
    intro:
      "До первой отгрузки мы фиксируем состав системы, технологический пакет и реестр доказательств. Пригодность для холодного климата подтверждается по каждой системе — монтажная глубина, ширина терморазрыва или теплопроводность материала сами по себе не заменяют показатель готового окна.",
    deliverables: [
      {
        title: "Состав системы",
        description:
          "Сечения профилей с массой кг/м, полная спецификация, правила цвета и партий, карта уплотнений и соединительных элементов. Каждый компонент идентифицирован по номеру детали и поставщику.",
      },
      {
        title: "Технологический пакет",
        description:
          "Чертежи раскроя и обработки с допусками, позиции водоотводных пазов, способ углового соединения и рекомендации по оснастке, режимы процесса (подачи, скорости, типы дисков), точки контроля и критерии приёмки.",
      },
      {
        title: "Реестр доказательств",
        description:
          "Структурированный журнал каждого протокола испытаний: номер отчёта, название лаборатории, размер образца, состав стеклопакета, использованная фурнитура, дата испытания и точная область применимости результата. Ни один результат испытаний не распространяется за пределы измеренного образца.",
      },
      {
        title: "Поддержка запуска",
        description:
          "Образцы сечений профилей и угловых соединений для проверки вашей командой. Приёмка первого изделия — мы проверяем ваши первые собранные единицы на соответствие эталону. Дистанционное обучение производству, прослеживаемость проблем, управление инженерными изменениями и планирование пополнения.",
      },
    ],
    manufacturingSteps: [
      {
        step: "01",
        title: "Экструзия",
        description:
          "Пресс 3 600 тонн, автоматическая резка с допуском ±0,5 мм. Заготовки 6063-T5 с прослеживаемостью партий. Поточная закалка и правка.",
      },
      {
        step: "02",
        title: "Отделка поверхности",
        description:
          "Автоматизированная линия порошковой окраски Akzo Nobel. Обезжиривание → хроматирование → окраска → полимеризация. Доступны анодирование и декор под дерево. Испытано по Qualicoat и AAMA 2604.",
      },
      {
        step: "03",
        title: "CNC и глубокая переработка",
        description:
          "Обрабатывающие центры с ЧПУ для водоотводных пазов, вырезов под замок, отверстий под ручки и подготовки углов. Маркировка и идентификация деталей для комплектов P2/P3. Оптимизированный раскрой для выхода материала.",
      },
      {
        step: "04",
        title: "Контроль и упаковка",
        description:
          "Контроль партии: проверка размеров, осмотр поверхности и примерка фурнитуры. Экспортная упаковка для железнодорожной перевозки с влагозащитой. Комплект документации на каждую отгрузку.",
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
      title: "How We Work — Fabricator Qualification & Supply Process | PINDÉ",
      description:
        "A controlled route from drawing to repeat supply: qualify the system → freeze the reference build → run a paid pilot → scale by evidence. Window system supplier qualification process from Chongqing.",
      keywords: [
        "window system supplier qualification",
        "window profile supply process",
        "fabricator enablement process",
        "window system pilot order",
        "aluminium window system procurement",
        "how to buy window profiles from China",
      ],
    },
    title: "A controlled route from drawing to repeat supply.",
    intro:
      "Four steps from first contact to regular shipments. Every step produces verifiable deliverables — not sales promises. Qualification → pilot → repeat supply.",
    steps: [
      {
        number: "01",
        title: "Qualify the system",
        description:
          "We review your equipment list, annual volume, current window systems, typical window schedule, glazing specifications, and target-country requirements. This tells us which system and supply format fits your operation — before any quotation.",
      },
      {
        number: "02",
        title: "Freeze the reference build",
        description:
          "We agree on: system code, representative sizes, complete BOM, mechanical interfaces, available performance evidence, and a responsibility matrix (what Chongqing supplies vs what your factory does). This becomes the contract baseline.",
      },
      {
        number: "03",
        title: "Run a paid pilot",
        description:
          "Start with profile section samples and corner joint specimens for your team to inspect. Then 3–10 glass-free kits for your factory to fabricate, assemble, and test locally. Sample and freight costs can be credited against an agreed first purchase threshold.",
      },
      {
        number: "04",
        title: "Scale by evidence",
        description:
          "Move through micro-batch → project batch → repeat programme. Each stage gates on yield data, fit consistency, logistics performance, and claims resolution. No volume commitment until the evidence supports it.",
      },
    ],
    cta: "Start the qualification process",
  },
  ru: {
    lang: "ru",
    locale: "ru_RU",
    seo: {
      title: "Порядок работы — Квалификация производств и процесс поставок | PINDÉ",
      description:
        "Контролируемый путь от чертежа до регулярных поставок: квалификация системы → фиксация эталонной конструкции → платная опытная партия → масштабирование по результатам. Процесс работы с поставщиком оконных систем из Чунцина.",
      keywords: [
        "квалификация поставщика оконных систем",
        "процесс поставки оконного профиля",
        "внедрение оконной системы на производстве",
        "опытная партия оконных систем",
        "закупка алюминиевых оконных систем",
        "как купить оконный профиль из Китая",
      ],
    },
    title: "Контролируемый путь от чертежа до регулярных поставок.",
    intro:
      "Четыре шага от первого контакта до регулярных отгрузок. Каждый шаг создаёт проверяемые результаты — не коммерческие обещания. Квалификация → опытная партия → регулярные поставки.",
    steps: [
      {
        number: "01",
        title: "Квалификация системы",
        description:
          "Проверяем список оборудования, годовой объём, текущие оконные системы, типовую оконную ведомость, спецификации стеклопакетов и требования страны назначения. Это определяет, какая система и формат поставки подходят вашему производству — до любого предложения.",
      },
      {
        number: "02",
        title: "Фиксация эталонной конструкции",
        description:
          "Согласуем: код системы, типоразмеры, полный BOM, механические сопряжения, доступную доказательную базу и матрицу ответственности (что поставляет Чунцин, а что выполняет ваше производство). Это становится базой контракта.",
      },
      {
        number: "03",
        title: "Платная опытная партия",
        description:
          "Начинаем с образцов сечений профилей и угловых соединений для проверки вашей командой. Затем 3–10 комплектов без стеклопакетов для изготовления, сборки и испытаний на вашем производстве. Стоимость образцов и перевозки может быть зачтена при достижении согласованного объёма первой закупки.",
      },
      {
        number: "04",
        title: "Масштабирование по результатам",
        description:
          "Переходим по цепочке: микропартия → проектная поставка → регулярная программа. Каждый этап открывается по данным выхода годных, стабильности стыковки, логистическим показателям и урегулированию претензий. Никаких обязательств по объёму, пока доказательная база этого не подтверждает.",
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
      title: "EAC Window Certification — EAEU Compliance for Window Imports | PINDÉ",
      description:
        "Country-specific conformity for window system imports: EAC certification for Russia, Kazakhstan, Belarus. GOST, EN, AS2047, NFRC standards. Customs union is not one window certificate — each country requires separate confirmation.",
      keywords: [
        "EAC window certification China",
        "window export to Russia compliance",
        "GOST window certification",
        "EAEU window import requirements",
        "window system certification for CIS",
        "aluminium window profile certification",
      ],
    },
    title: "Customs union is not the same as one window certificate.",
    intro:
      "Russia, Kazakhstan and Belarus require separate confirmation of the applicable national route, importer/applicant, sample scope and labelling. We align classification and documentation with the actual supply form before the first shipment — we do not market one generic EAEU certificate as universal approval.",
    sections: [
      {
        title: "The EAEU reality",
        content:
          "The Eurasian Economic Union harmonises many technical regulations, but window and door products sit at the intersection of multiple conformity routes: construction products, fire safety, sanitary-epidemiological requirements, and energy efficiency labelling. Each member state (Russia, Kazakhstan, Belarus, Armenia, Kyrgyzstan) applies these through its own national conformity assessment bodies. A certificate issued by a Russian accredited body does not automatically satisfy Kazakh or Belarusian market surveillance.",
      },
      {
        title: "Per-country approach",
        content:
          "For each destination country, we confirm: the applicable national standard (GOST R for Russia, ST RK for Kazakhstan, STB for Belarus), the accredited certification body and testing laboratory in that country, the sample scope and quantity required, the importer/applicant (your local entity or authorised representative), and the marking and labelling requirements (EAC mark plus any national marks). We do this before the first shipment — not after customs holds the container.",
      },
      {
        title: "Documentation alignment",
        content:
          "The HS code, commercial invoice, packing list, and certificate of origin must align with the actual supply form. P1 (system kit), P2 (machined components), and P3 (glass-free CKD) may classify differently depending on the destination country's tariff schedule. We work with your customs broker to ensure the documentation set matches both the physical goods and the conformity certificate scope.",
      },
      {
        title: "Test evidence",
        content:
          "Existing test reports (EN 12207/12208/12210, EN ISO 10077, NFRC, AS/NZS 4420) can support conformity applications but rarely replace local testing entirely. We provide the full evidence register — report numbers, laboratory details, specimen descriptions — so your local certification body can assess equivalence and define the additional testing scope if needed.",
      },
      {
        title: "Our certifications",
        content:
          "PINDÉ holds ISO 9001 (quality management), ISO 14001 (environmental management), CE (European conformity), AS2047 (Australian windows), AS1288 (glass in buildings), and NFRC (North American fenestration rating). These demonstrate a quality management foundation — they do not replace product-specific conformity assessment in your destination market.",
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
      title: "Сертификация EAC для окон — Соответствие ЕАЭС при импорте окон | PINDÉ",
      description:
        "Соблюдение требований по странам для импорта оконных систем: сертификация EAC для России, Казахстана, Беларуси. ГОСТ, EN, AS2047, NFRC. Таможенный союз не означает единый сертификат на окна — каждая страна требует отдельного подтверждения.",
      keywords: [
        "сертификация EAC для окон из Китая",
        "экспорт окон в Россию соответствие",
        "ГОСТ сертификация окон",
        "требования ЕАЭС импорт окон",
        "сертификация оконных систем для СНГ",
        "сертификация алюминиевого оконного профиля",
      ],
    },
    title: "Таможенный союз не означает единый сертификат на окна.",
    intro:
      "Для России, Казахстана и Беларуси отдельно уточняются национальная процедура, заявитель/импортёр, объём образцов и маркировка. До первой отправки код товара и комплект документов привязываются к фактическому формату поставки. Мы не выдаём общий документ ЕАЭС за универсальное разрешение для всех стран.",
    sections: [
      {
        title: "Реальность ЕАЭС",
        content:
          "Евразийский экономический союз гармонизирует многие технические регламенты, но оконно-дверная продукция находится на пересечении нескольких путей подтверждения соответствия: строительная продукция, пожарная безопасность, санитарно-эпидемиологические требования и маркировка энергоэффективности. Каждое государство-член (Россия, Казахстан, Беларусь, Армения, Кыргызстан) применяет их через собственные национальные органы по оценке соответствия. Сертификат, выданный российским аккредитованным органом, не обеспечивает автоматического признания при надзоре за рынком в Казахстане или Беларуси.",
      },
      {
        title: "Подход по каждой стране",
        content:
          "Для каждой страны назначения мы подтверждаем: применимый национальный стандарт (ГОСТ Р для России, СТ РК для Казахстана, СТБ для Беларуси), аккредитованный орган по сертификации и испытательную лабораторию в этой стране, требуемый объём и количество образцов, импортёра/заявителя (ваше локальное юридическое лицо или уполномоченного представителя), а также требования к маркировке (знак EAC плюс национальные знаки). Всё это делается до первой отгрузки — а не после того, как таможня задержала контейнер.",
      },
      {
        title: "Согласование документации",
        content:
          "Код ТН ВЭД, коммерческий инвойс, упаковочный лист и сертификат происхождения должны соответствовать фактическому формату поставки. P1 (системный комплект), P2 (детали с обработкой) и P3 (CKD без стеклопакетов) могут классифицироваться по-разному в зависимости от тарифного расписания страны назначения. Мы работаем с вашим таможенным брокером, чтобы комплект документации соответствовал и физическому товару, и области действия сертификата соответствия.",
      },
      {
        title: "Доказательная база испытаний",
        content:
          "Существующие протоколы испытаний (EN 12207/12208/12210, EN ISO 10077, NFRC, AS/NZS 4420) могут поддерживать заявки на соответствие, но редко полностью заменяют локальные испытания. Мы предоставляем полный реестр доказательств — номера отчётов, данные лабораторий, описание образцов — чтобы ваш местный орган по сертификации мог оценить эквивалентность и определить дополнительный объём испытаний при необходимости.",
      },
      {
        title: "Наши сертификаты",
        content:
          "PINDÉ имеет ISO 9001 (менеджмент качества), ISO 14001 (экологический менеджмент), CE (европейское соответствие), AS2047 (австралийский стандарт на окна), AS1288 (стекло в строительстве) и NFRC (североамериканский рейтинг светопрозрачных конструкций). Это демонстрирует фундамент системы менеджмента качества — но не заменяет оценку соответствия конкретной продукции на вашем рынке.",
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
