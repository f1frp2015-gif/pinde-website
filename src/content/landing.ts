export type LandingLocale = "en" | "ru";

export const landingLocales = ["en", "ru"] as const;

export function isLandingLocale(value: string): value is LandingLocale {
  return landingLocales.includes(value as LandingLocale);
}

export const landingContent = {
  en: {
    lang: "en",
    locale: "en_US",
    languageName: "English",
    seo: {
      title: "Aluminium & FRP Window Profile Systems from China | PINDÉ",
      description:
        "Aluminium and FRP window-and-door profile systems, machined components and glass-free CKD kits from Chongqing for fabricators in Russia, Kazakhstan and the CIS.",
      keywords: [
        "aluminium window profile systems China",
        "FRP window profiles",
        "window system materials",
        "glass-free CKD window kits",
        "machined aluminium window profiles",
        "window profiles for fabricators",
        "Chongqing window system supplier",
        "window profile systems for Russia",
        "window profile systems for Kazakhstan",
      ],
    },
    nav: [
      { label: "Systems", href: "#systems" },
      { label: "Supply formats", href: "#formats" },
      { label: "How it works", href: "#process" },
      { label: "Engineering", href: "#engineering" },
    ],
    headerCta: "Send an RFQ",
    hero: {
      eyebrow: "Chongqing · Window system supply · Eurasia",
      title: "Window system materials built for local fabrication.",
      description:
        "Aluminium and FRP profile systems, machined components and glass-free CKD kits for window manufacturers, system fabricators and project suppliers across Russian-speaking markets.",
      primaryCta: "Request the technical pack",
      secondaryCta: "View supply formats",
      note: "Not a retail window shop. Glazing, final assembly, testing and installation stay local.",
      cards: [
        {
          code: "AL",
          name: "Aluminium systems",
          detail: "Thermally broken profiles · components · BOM",
        },
        {
          code: "FRP",
          name: "Composite systems",
          detail: "Pultruded profiles · joints · fabrication package",
        },
        {
          code: "CKD",
          name: "Machined kits",
          detail: "Cut · drilled · labelled · packed by opening",
        },
      ],
    },
    audience: {
      label: "Built for",
      items: [
        "Window manufacturers",
        "Profile-system fabricators",
        "Importers & regional stockists",
        "Project procurement teams",
      ],
    },
    systems: {
      eyebrow: "Two material platforms",
      title: "Choose the system. Keep production close to the project.",
      intro:
        "We supply the material, interfaces and production information required to make a repeatable window system—not loose profiles without a manufacturing plan.",
      items: [
        {
          number: "01",
          label: "Commercial mainline",
          title: "Thermally broken aluminium window-and-door systems",
          description:
            "Surface-finished aluminium profiles supplied as a complete system for local cutting and fabrication, or upgraded to project-specific machined and CKD kits.",
          included: [
            "Frame, sash, mullion and glazing-bead profiles",
            "Thermal breaks, EPDM gaskets, cleats and connectors",
            "Drainage parts, compatible hardware schedule and complete BOM",
            "Processing drawings, assembly instructions and spare-parts list",
          ],
          keywords:
            "For buyers searching aluminium window profiles wholesale, thermally broken window systems or profiles for aluminium window production.",
        },
        {
          number: "02",
          label: "Engineering programme",
          title: "FRP / glass-fibre composite window profile systems",
          description:
            "Pultruded FRP profile sets for fabricators evaluating a low-conductivity material platform. Each programme is released against a defined BOM, joint method and project test plan.",
          included: [
            "Frame, sash, mullion and glazing-bead profile set",
            "Corner joints, seals and approved fastening interfaces",
            "Cutting, drilling, bonding and dust-control parameters",
            "Pilot kits, first-article inspection and fabrication training",
          ],
          keywords:
            "For qualified searches around FRP window profiles, glass-fibre composite window systems and pultruded profiles for window fabrication.",
        },
      ],
      evidence:
        "Thermal, structural and weather-performance values are stated only for a verified specimen, glazing build-up and test scope. Unverified values remain project targets—not sales claims.",
    },
    formats: {
      eyebrow: "Supply formats",
      title: "From system materials to assembly-ready semi-finished kits.",
      intro:
        "The right level depends on your equipment, labour, order mix and import economics. Every quote separates profile value, processing, components, packing and freight.",
      items: [
        {
          level: "P1",
          title: "Complete system kit",
          tag: "Default",
          from: "Finished profiles, gaskets, cleats, connectors, drainage parts, BOM and fabrication documents.",
          local: "Cutting, machining, hardware, glazing, assembly, QA and installation.",
          fit: "Established fabricators with cutting and corner-joining capability.",
        },
        {
          level: "P2",
          title: "Cut-to-length & machined",
          tag: "Upgrade",
          from: "Optimised cutting, drainage and lock machining, CNC work and part identification.",
          local: "Corner joining, hardware, glazing, adjustment, final inspection and installation.",
          fit: "Factories that need capacity relief or controlled first production.",
        },
        {
          level: "P3",
          title: "Glass-free CKD kit",
          tag: "Project",
          from: "Machined profiles packed by opening with seals, joints, selected hardware and a spares pack.",
          local: "Final dimensions, assembly, insulating-glass units, commissioning, compliance and site work.",
          fit: "Paid pilot runs, time-sensitive projects and lower-capability production cells.",
        },
      ],
      labels: {
        chongqing: "From Chongqing",
        local: "Kept local",
        fit: "Best fit",
      },
    },
    process: {
      eyebrow: "Fabricator enablement",
      title: "A controlled route from drawing to repeat supply.",
      items: [
        {
          number: "01",
          title: "Qualify the system",
          text: "Review your equipment, annual volume, current systems, window schedule, glazing and target-country requirements.",
        },
        {
          number: "02",
          title: "Freeze the reference build",
          text: "Agree the system code, representative sizes, BOM, interfaces, performance evidence and responsibility matrix.",
        },
        {
          number: "03",
          title: "Run a paid pilot",
          text: "Start with section samples and corner joints, then 3–10 glass-free kits for local fabrication and testing.",
        },
        {
          number: "04",
          title: "Scale by evidence",
          text: "Move through a micro-batch, project batch and repeat programme only after yield, fit, logistics and claims data are accepted.",
        },
      ],
    },
    split: {
      eyebrow: "One coordinated supply chain",
      title: "Chongqing prepares the system. Your market completes the window.",
      chongqing: {
        title: "PINDÉ · Chongqing",
        items: [
          "System engineering and BOM control",
          "Profile production, finishing and batch QA",
          "Optional cutting, CNC and kit identification",
          "Packing, documentation and replacement parts",
        ],
      },
      destination: {
        title: "Local fabricator · Destination market",
        items: [
          "Final opening and dimension confirmation",
          "Locally sourced glazing and approved hardware",
          "Assembly, adjustment and finished-window QA",
          "National conformity, installation and first-line service",
        ],
      },
      route:
        "Rail-compatible export packing from Chongqing. FCA, CIP and DAP options are quoted per shipment; freight and import charges are never presented as fixed long-term rates.",
    },
    engineering: {
      eyebrow: "Engineering before volume",
      title: "Documents a production team can use—not a marketing PDF alone.",
      items: [
        {
          title: "System definition",
          text: "Profile sections, kg/m, bill of materials, colour and batch rules, gasket and connector mapping.",
        },
        {
          title: "Fabrication package",
          text: "Cutting and machining drawings, drainage, joint method, tooling, process parameters and inspection points.",
        },
        {
          title: "Evidence register",
          text: "Report number, laboratory, specimen size, glazing, hardware, date and the exact scope a result supports.",
        },
        {
          title: "Launch support",
          text: "Samples, first-article review, remote training, issue traceability, change control and replenishment planning.",
        },
      ],
      note:
        "Cold-climate suitability is confirmed system by system. Frame depth, thermal-break width or material conductivity alone is not used to infer whole-window performance.",
    },
    compliance: {
      label: "Country-specific conformity",
      title: "Customs union is not the same as one window certificate.",
      text:
        "Russia, Kazakhstan and Belarus require separate confirmation of the applicable national route, importer/applicant, sample scope and labelling. We align classification and documentation with the actual supply form before the first shipment; we do not market one generic EAEU certificate as universal approval.",
    },
    factory: {
      eyebrow: "Manufacturing base · Chongqing, China",
      title: "A 100,000 m² integrated base supporting profiles, finishing, machining and system assembly.",
      text:
        "Export programmes are released by system and process capacity—not by a headline factory number. Equipment, inspection points, packing and monthly capacity are confirmed during qualification.",
      imageAlt: "PINDÉ integrated manufacturing base in Chongqing, China",
    },
    faq: {
      eyebrow: "Procurement questions",
      title: "Before you request a quote.",
      items: [
        {
          q: "Do you ship complete glazed windows for retail projects?",
          a: "Not as the default model. We focus on complete profile-system kits, machined semi-finished parts and glass-free CKD kits. Glazing, final assembly, national testing and installation remain local. A finished sample window can be supplied for certification, training or a qualified high-value project.",
        },
        {
          q: "Can aluminium and FRP be included in the same enquiry?",
          a: "Yes. They are quoted as separate system lines with separate BOMs, processing methods, evidence registers and quality plans. A shared shipment does not merge product identity or performance responsibility.",
        },
        {
          q: "What do you need for a technical quotation?",
          a: "Your company role, destination country and city, current system, annual volume, equipment list, window schedule or drawings, glazing concept, target standard and preferred supply format. Upload a PDF, DWG, DXF, spreadsheet or ZIP with the RFQ.",
        },
        {
          q: "How are samples and pilot orders handled?",
          a: "We begin with profile sections and corner samples, then a paid pilot of 3–10 glass-free kits. Sample and freight costs can be credited against an agreed first purchase threshold.",
        },
        {
          q: "Do you provide one EAC certificate for all EAEU countries?",
          a: "No. Customs circulation and technical conformity are different matters. The route is checked for the actual product form and first country of sale, with a local applicant and testing scope agreed before shipment.",
        },
        {
          q: "Which commercial terms are available?",
          a: "Initial quotations can be structured on FCA, CIP or DAP terms, with freight, duty and tax shown separately. New programmes start with prepayment; credit terms are considered only after successful repeat business.",
        },
      ],
    },
    rfq: {
      eyebrow: "Technical RFQ",
      title: "Send the window schedule. We will map the supply format.",
      text:
        "Tell us what your factory can do and what must arrive from Chongqing. We will respond with the information gaps, recommended pilot level and the documents needed for a comparable quote.",
      response: "Technical review target: within 2 business days",
      email: "doris.li@pinde-alu.com",
      fields: {
        name: "Contact name",
        namePlaceholder: "Your name",
        company: "Company",
        companyPlaceholder: "Legal or trading name",
        email: "Business email",
        country: "Destination market",
        countryPlaceholder: "Select a market",
        role: "Company role",
        rolePlaceholder: "Select your role",
        system: "System interest",
        systemPlaceholder: "Select a system line",
        format: "Preferred supply format",
        formatPlaceholder: "Select a format",
        volume: "Estimated annual volume",
        volumePlaceholder: "e.g. 20 t profiles or 5,000 m² windows",
        standard: "Target standard / test scope",
        standardPlaceholder: "Country standard, project specification or unknown",
        message: "Project and fabrication requirements",
        messagePlaceholder:
          "Current system, equipment, window types, glazing, sizes, finish, required delivery city and target date...",
        file: "Window schedule / BOM / drawings",
        fileHelp: "PDF, DWG, DXF, XLS/XLSX, CSV or ZIP · max 8 MB",
        consent:
          "I agree that PINDÉ may use these details to evaluate and respond to this business enquiry.",
      },
      countries: [
        "Russia",
        "Kazakhstan",
        "Belarus",
        "Uzbekistan",
        "Armenia",
        "Kyrgyzstan",
        "Other CIS / Eurasia",
        "Other market",
      ],
      roles: [
        "Window manufacturer / fabricator",
        "Profile-system processor",
        "Importer / regional stockist",
        "Contractor / developer",
        "Architect / engineering consultant",
        "Other",
      ],
      systems: [
        "Aluminium profile systems",
        "FRP / glass-fibre composite systems",
        "Both material platforms",
        "Project-specific / not decided",
      ],
      formats: [
        "P1 · Complete system kit",
        "P2 · Cut-to-length & machined",
        "P3 · Glass-free CKD kit",
        "Samples / pilot only",
        "Not decided",
      ],
      submit: "Send technical RFQ",
      sending: "Sending…",
      successTitle: "RFQ received",
      successText:
        "Thank you. Our team will review the destination, system and attachments and respond by email.",
      error:
        "The RFQ could not be sent. Please try again or email the files directly to doris.li@pinde-alu.com.",
      fileError: "The attachment must be an allowed file type and no larger than 8 MB.",
    },
    footer: {
      description:
        "Aluminium and FRP window-system materials, machined components and glass-free CKD kits from Chongqing for local fabrication.",
      systems: "System supply",
      company: "Working model",
      contact: "Contact",
      copyright: "PINDÉ Window System Supply",
      tagline: "System materials · Local fabrication",
    },
  },
  ru: {
    lang: "ru",
    locale: "ru_RU",
    languageName: "Русский",
    seo: {
      title: "Алюминиевые и стеклокомпозитные оконные системы из Китая | PINDÉ",
      description:
        "Профильные системы, полуфабрикаты и комплекты для сборки окон без стеклопакетов из Чунцина для производителей в России, Казахстане и СНГ.",
      keywords: [
        "алюминиевые профильные системы",
        "оконно-дверные системы из Китая",
        "алюминиевый оконный профиль оптом",
        "профиль для производства алюминиевых окон",
        "тёплые алюминиевые оконные системы",
        "комплекты алюминиевых окон для сборки",
        "оконные CKD комплекты",
        "стеклокомпозитный оконный профиль",
        "стеклопластиковый профиль для окон",
        "пултрузионный оконный профиль",
      ],
    },
    nav: [
      { label: "Системы", href: "#systems" },
      { label: "Форматы поставки", href: "#formats" },
      { label: "Порядок работы", href: "#process" },
      { label: "Техподдержка", href: "#engineering" },
    ],
    headerCta: "Отправить запрос",
    hero: {
      eyebrow: "Чунцин · Системные поставки · Евразия",
      title: "Системные материалы для локального производства окон.",
      description:
        "Алюминиевые и стеклокомпозитные профильные системы, детали с механической обработкой и комплекты CKD без стеклопакетов — для оконных производств, переработчиков профильных систем и проектных поставщиков в русскоязычных странах.",
      primaryCta: "Получить технический пакет",
      secondaryCta: "Форматы поставки",
      note: "Мы не продаём окна в розницу. Остекление, окончательная сборка, испытания и монтаж выполняются на месте.",
      cards: [
        {
          code: "AL",
          name: "Алюминиевые системы",
          detail: "Тёплые профили · комплектующие · BOM",
        },
        {
          code: "FRP",
          name: "Стеклокомпозитные системы",
          detail: "Пултрузионные профили · соединения · технология",
        },
        {
          code: "CKD",
          name: "Комплекты с обработкой",
          detail: "Раскрой · фрезеровка · маркировка · упаковка",
        },
      ],
    },
    audience: {
      label: "Для кого",
      items: [
        "Оконные производства",
        "Переработчики профильных систем",
        "Импортёры и региональные склады",
        "Проектные отделы снабжения",
      ],
    },
    systems: {
      eyebrow: "Две материальные платформы",
      title: "Выберите систему. Оставьте изготовление готового окна ближе к объекту.",
      intro:
        "Мы поставляем не набор разрозненных хлыстов, а материалы, сопряжения и производственную документацию, необходимые для стабильного изготовления оконно-дверной системы.",
      items: [
        {
          number: "01",
          label: "Основная коммерческая линейка",
          title: "Тёплые алюминиевые оконно-дверные системы",
          description:
            "Окрашенные и анодированные профили поставляются как полный системный комплект для раскроя и обработки на месте либо как детали с обработкой и проектные CKD-комплекты.",
          included: [
            "Профили рамы, створки, импоста и штапика",
            "Термовставки, уплотнители EPDM, угловые и соединительные элементы",
            "Водоотводные детали, ведомость совместимой фурнитуры и полный BOM",
            "Чертежи обработки, инструкция по сборке и перечень запасных частей",
          ],
          keywords:
            "Для закупок по запросам «алюминиевый оконный профиль оптом», «тёплые алюминиевые системы» и «профиль для производства алюминиевых окон».",
        },
        {
          number: "02",
          label: "Инженерная программа",
          title: "Оконные системы из стеклокомпозита / FRP",
          description:
            "Комплекты пултрузионных профилей из стеклопластика для производителей, которые внедряют материал с низкой теплопроводностью. Каждая система привязана к конкретному BOM, способу соединения и плану испытаний.",
          included: [
            "Профили рамы, створки, импоста и штапика",
            "Угловые соединения, уплотнения и проверенные узлы крепления",
            "Режимы резки, сверления, склеивания и удаления пыли",
            "Пробные комплекты, приёмка первого изделия и обучение производству",
          ],
          keywords:
            "Для целевых запросов «стеклокомпозитный оконный профиль», «стеклопластиковый профиль для окон» и «пултрузионный оконный профиль».",
        },
      ],
      evidence:
        "Показатели теплотехники, прочности и герметичности указываются только для проверенного образца, стеклопакета и объёма испытаний. Непроверенные значения остаются целями проекта, а не рекламными обещаниями.",
    },
    formats: {
      eyebrow: "Форматы поставки",
      title: "От системных материалов до полуфабрикатов, готовых к сборке.",
      intro:
        "Уровень подготовки зависит от оборудования, загрузки, номенклатуры заказов и экономики импорта. В предложении отдельно указываются профиль, обработка, комплектующие, упаковка и перевозка.",
      items: [
        {
          level: "P1",
          title: "Полный системный комплект",
          tag: "Основной",
          from: "Готовые профили, уплотнители, угловые и соединительные элементы, водоотвод, BOM и технологические документы.",
          local: "Раскрой, обработка, фурнитура, стеклопакеты, сборка, контроль качества и монтаж.",
          fit: "Действующие оконные производства с пилами и оборудованием для сборки углов.",
        },
        {
          level: "P2",
          title: "Размерный раскрой и обработка",
          tag: "Расширенный",
          from: "Оптимизация раскроя, фрезеровка водоотводов и отверстий под замок, CNC-обработка и маркировка деталей.",
          local: "Сборка углов, установка фурнитуры и стеклопакетов, регулировка, приёмка и монтаж.",
          fit: "Предприятиям, которым нужна дополнительная мощность или контролируемый запуск новой системы.",
        },
        {
          level: "P3",
          title: "CKD-комплект без стеклопакетов",
          tag: "Проектный",
          from: "Обработанные детали по каждому проёму, уплотнения, соединители, согласованная фурнитура и комплект запасных частей.",
          local: "Подтверждение размеров, окончательная сборка, стеклопакеты, наладка, соответствие требованиям страны и монтаж.",
          fit: "Платная опытная партия, срочный проект или производственный участок с ограниченной обработкой.",
        },
      ],
      labels: {
        chongqing: "Из Чунцина",
        local: "Выполняется на месте",
        fit: "Кому подходит",
      },
    },
    process: {
      eyebrow: "Внедрение у переработчика",
      title: "Контролируемый путь от чертежа до регулярных поставок.",
      items: [
        {
          number: "01",
          title: "Квалификация системы",
          text: "Проверяем оборудование, годовой объём, текущие системы, оконную ведомость, стеклопакеты и требования страны назначения.",
        },
        {
          number: "02",
          title: "Фиксация эталонной конструкции",
          text: "Согласуем код системы, типоразмеры, BOM, сопряжения, доказательную базу и матрицу ответственности.",
        },
        {
          number: "03",
          title: "Платная опытная партия",
          text: "Начинаем с образцов сечений и углов, затем поставляем 3–10 комплектов без стеклопакетов для местной сборки и испытаний.",
        },
        {
          number: "04",
          title: "Масштабирование по результатам",
          text: "Переходим к микропартии, проектной поставке и регулярной программе после подтверждения выхода годных, стыковки, логистики и показателей.",
        },
      ],
    },
    split: {
      eyebrow: "Одна согласованная цепочка",
      title: "Чунцин подготавливает систему. Ваш рынок завершает изготовление окна.",
      chongqing: {
        title: "PINDÉ · Чунцин",
        items: [
          "Проектирование системы и управление BOM",
          "Изготовление профилей, отделка и контроль партии",
          "Опционально — раскрой, CNC и маркировка комплектов",
          "Экспортная упаковка, документы и запасные части",
        ],
      },
      destination: {
        title: "Местный производитель · Рынок назначения",
        items: [
          "Подтверждение проёмов и окончательных размеров",
          "Местные стеклопакеты и согласованная фурнитура",
          "Сборка, регулировка и контроль готового окна",
          "Национальное соответствие, монтаж и первичный сервис",
        ],
      },
      route:
        "Экспортная упаковка из Чунцина рассчитана в том числе на железнодорожную перевозку. FCA, CIP и DAP рассчитываются для каждой партии; фрахт и импортные платежи не фиксируются как постоянная ставка.",
    },
    engineering: {
      eyebrow: "Сначала инженерия, затем объём",
      title: "Документы для производства, а не только рекламный каталог.",
      items: [
        {
          title: "Состав системы",
          text: "Сечения, масса кг/м, спецификация, правила цвета и партий, карта уплотнений и соединительных элементов.",
        },
        {
          title: "Технологический пакет",
          text: "Чертежи раскроя и обработки, водоотвод, угловое соединение, оснастка, режимы процесса и точки контроля.",
        },
        {
          title: "Реестр доказательств",
          text: "Номер отчёта, лаборатория, размер образца, стеклопакет, фурнитура, дата и точная область применимости результата.",
        },
        {
          title: "Поддержка запуска",
          text: "Образцы, приёмка первого изделия, дистанционное обучение, прослеживаемость проблем, управление изменениями и пополнение.",
        },
      ],
      note:
        "Пригодность для холодного климата подтверждается по каждой системе. Монтажная глубина, ширина терморазрыва или теплопроводность материала сами по себе не заменяют показатель готового окна.",
    },
    compliance: {
      label: "Соответствие по каждой стране",
      title: "Таможенный союз не означает единый сертификат на окна.",
      text:
        "Для России, Казахстана и Беларуси отдельно уточняются национальная процедура, заявитель/импортёр, объём образцов и маркировка. До первой отправки код товара и комплект документов привязываются к фактическому формату поставки. Мы не выдаём общий документ ЕАЭС за универсальное разрешение для всех стран.",
    },
    factory: {
      eyebrow: "Производственная база · Чунцин, Китай",
      title: "Интегрированная база площадью 100 000 м² для профилей, отделки, обработки и сборки систем.",
      text:
        "Экспортная программа подтверждается по конкретной системе и процессу, а не общей цифрой завода. Оборудование, точки контроля, упаковка и месячная мощность уточняются при квалификации.",
      imageAlt: "Интегрированная производственная база PINDÉ в Чунцине, Китай",
    },
    faq: {
      eyebrow: "Вопросы отдела снабжения",
      title: "Что важно до запроса цены.",
      items: [
        {
          q: "Вы поставляете готовые окна со стеклопакетами для розницы?",
          a: "Не в качестве основной модели. Мы поставляем полные комплекты профильной системы, полуфабрикаты с обработкой и CKD-комплекты без стеклопакетов. Остекление, окончательная сборка, национальные испытания и монтаж остаются на месте. Готовый образец возможен для сертификации, обучения или согласованного высокобюджетного проекта.",
        },
        {
          q: "Можно запросить алюминий и FRP в одной заявке?",
          a: "Да. Это две отдельные системные позиции с собственными BOM, технологией, реестром доказательств и планом качества. Совместная перевозка не объединяет идентичность продукции и ответственность за показатели.",
        },
        {
          q: "Что требуется для технического предложения?",
          a: "Роль компании, страна и город назначения, текущая система, годовой объём, список оборудования, оконная ведомость или чертежи, стеклопакет, целевой стандарт и предпочтительный формат поставки. К запросу можно приложить PDF, DWG, DXF, таблицу или ZIP.",
        },
        {
          q: "Как заказываются образцы и опытная партия?",
          a: "Сначала поставляются образцы сечений и угловых соединений, затем платная партия из 3–10 комплектов без стеклопакетов. Стоимость образцов и перевозки может быть зачтена при достижении согласованного объёма первой закупки.",
        },
        {
          q: "Есть ли единый сертификат EAC для всех стран ЕАЭС?",
          a: "Нет. Таможенное обращение и техническое соответствие — разные вопросы. Процедура определяется для фактического вида товара и первой страны продажи; местный заявитель и объём испытаний согласуются до отправки.",
        },
        {
          q: "На каких условиях возможна поставка?",
          a: "Первичное предложение можно подготовить на условиях FCA, CIP или DAP с отдельным указанием перевозки, пошлин и налогов. Новые программы начинаются с предоплаты; отсрочка обсуждается после успешных повторных заказов.",
        },
      ],
    },
    rfq: {
      eyebrow: "Технический запрос",
      title: "Пришлите оконную ведомость — мы предложим формат поставки.",
      text:
        "Укажите, какие операции выполняет ваше производство и что должно прибыть из Чунцина. В ответ мы обозначим недостающие данные, рекомендуемый уровень опытной партии и документы для сопоставимого предложения.",
      response: "Целевой срок технического разбора — 2 рабочих дня",
      email: "doris.li@pinde-alu.com",
      fields: {
        name: "Контактное лицо",
        namePlaceholder: "Имя и фамилия",
        company: "Компания",
        companyPlaceholder: "Юридическое или торговое наименование",
        email: "Рабочий e-mail",
        country: "Рынок назначения",
        countryPlaceholder: "Выберите рынок",
        role: "Роль компании",
        rolePlaceholder: "Выберите роль",
        system: "Интересующая система",
        systemPlaceholder: "Выберите линейку",
        format: "Предпочтительный формат",
        formatPlaceholder: "Выберите формат",
        volume: "Ориентировочный годовой объём",
        volumePlaceholder: "например, 20 т профиля или 5 000 м² окон",
        standard: "Целевой стандарт / испытания",
        standardPlaceholder: "ГОСТ, требования проекта или пока не определено",
        message: "Проект и возможности производства",
        messagePlaceholder:
          "Текущая система, оборудование, типы окон, стеклопакеты, размеры, отделка, город поставки и требуемый срок...",
        file: "Оконная ведомость / BOM / чертежи",
        fileHelp: "PDF, DWG, DXF, XLS/XLSX, CSV или ZIP · до 8 МБ",
        consent:
          "Я согласен на использование этих данных компанией PINDÉ для оценки и ответа на деловой запрос.",
      },
      countries: [
        "Россия",
        "Казахстан",
        "Беларусь",
        "Узбекистан",
        "Армения",
        "Кыргызстан",
        "Другая страна СНГ / Евразии",
        "Другой рынок",
      ],
      roles: [
        "Производитель окон / переработчик",
        "Переработчик профильных систем",
        "Импортёр / региональный склад",
        "Подрядчик / девелопер",
        "Архитектор / проектировщик",
        "Другое",
      ],
      systems: [
        "Алюминиевые профильные системы",
        "Системы из стеклокомпозита / FRP",
        "Обе материальные платформы",
        "Проектная система / пока не определено",
      ],
      formats: [
        "P1 · Полный системный комплект",
        "P2 · Размерный раскрой и обработка",
        "P3 · CKD-комплект без стеклопакетов",
        "Только образцы / опытная партия",
        "Пока не определено",
      ],
      submit: "Отправить технический запрос",
      sending: "Отправка…",
      successTitle: "Запрос получен",
      successText:
        "Спасибо. Мы проверим рынок назначения, систему и вложения и ответим по электронной почте.",
      error:
        "Не удалось отправить запрос. Повторите попытку или отправьте файлы напрямую на doris.li@pinde-alu.com.",
      fileError: "Допустимы только указанные форматы файлов размером не более 8 МБ.",
    },
    footer: {
      description:
        "Алюминиевые и стеклокомпозитные системные материалы, детали с обработкой и CKD-комплекты без стеклопакетов из Чунцина для локального производства.",
      systems: "Системные поставки",
      company: "Модель работы",
      contact: "Контакты",
      copyright: "PINDÉ · Поставки оконных систем",
      tagline: "Системные материалы · Локальное производство",
    },
  },
} as const;

export type LandingContent = (typeof landingContent)[LandingLocale];
