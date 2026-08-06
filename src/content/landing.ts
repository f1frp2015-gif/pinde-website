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
      title: "Window and door systems prepared for your production line.",
      description:
        "PINDÉ supplies aluminium and FRP profile systems, machined parts and glass-free CKD kits to fabricators in Russia and Central Asia. The opening schedule and available machinery determine how far the parts are prepared in Chongqing.",
      primaryCta: "Send an opening schedule",
      secondaryCta: "Compare supply formats",
      note: "Business-to-business supply. Insulating glass units, final assembly, destination-market conformity and installation normally remain local.",
      cards: [
        {
          code: "AL",
          name: "Aluminium systems",
          detail: "Thermally broken profiles · components · bill of materials",
        },
        {
          code: "FRP",
          name: "Composite systems",
          detail: "Pultruded profiles · qualified joints · fabrication pack",
        },
        {
          code: "CKD",
          name: "Machined kits",
          detail: "Cut · machined · labelled · packed by opening",
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
      eyebrow: "Two material families",
      title: "Select the construction before choosing the supply format.",
      intro:
        "The technical offer identifies the profile set, gaskets, connectors, hardware interfaces and fabrication documents for the selected construction. Local responsibilities are recorded in the same revision.",
      items: [
        {
          number: "01",
          label: "Regular production range",
          title: "Thermally broken aluminium window-and-door systems",
          description:
            "Exterior window and door systems use aluminium profiles with polyamide thermal barriers. Interior sliding and folding systems are listed separately. Supply can stop at finished profile lengths or include project-specific cutting, machining and kit preparation.",
          included: [
            "Frame, sash or door-leaf, mullion and glazing-bead profiles",
            "Polyamide barriers, EPDM gaskets, cleats and connectors",
            "Drainage parts, hardware schedule and bill of materials",
            "Machining drawings, assembly instructions and spare-parts list",
          ],
          keywords:
            "For buyers searching aluminium window profiles wholesale, thermally broken window systems or profiles for aluminium window production.",
        },
        {
          number: "02",
          label: "Project-qualified range",
          title: "FRP / glass-fibre composite window profile systems",
          description:
            "Full-FRP and aluminium-composite systems are released from a defined reference build. The joint method, adhesive or fasteners, processing controls and test plan belong to that system and are not transferred from another composite product.",
          included: [
            "Frame, sash, mullion and glazing-bead profile set",
            "Qualified corner joints, gaskets and fastening interfaces",
            "Cutting, drilling, bonding and dust-control parameters",
            "Pilot kits, first-article inspection and fabrication training",
          ],
          keywords:
            "For qualified searches around FRP window profiles, glass-fibre composite window systems and pultruded profiles for window fabrication.",
        },
      ],
      evidence:
        "A thermal, structural or weather value is quoted with the specimen, insulating-glass make-up and report scope. A different construction keeps the value as a project requirement until it is verified.",
    },
    logistics: {
      eyebrow: "Chongqing rail connection",
      title: "Rail dispatch from Chongqing to Central Asia and Russia.",
      intro:
        "Chongqing's international rail network serves hubs in Kazakhstan and onward routes across Central Asia and Russia. A planning range of roughly 7–20 days may be used for the rail leg in a current quotation, but the booked service, border transfer, customs and last mile determine the actual delivery date.",
      facts: [
        { value: "Chongqing", label: "Origin and production dispatch" },
        { value: "Central Asia", label: "Rail hubs and onward regional routes" },
        { value: "~7–20 days", label: "Planning range for the rail leg only" },
      ],
      mapAlt:
        "Yuxinou railway freight route map from Chongqing to Kazakhstan, Uzbekistan, Turkmenistan, Tajikistan, Kyrgyzstan and Russia",
      mapCaption: "Yuxinou freight route from Chongqing to Central Asia and Russia",
      openMap: "Open full route map",
      note:
        "Transit times are indicative, not guaranteed. Actual timing depends on train schedules, consolidation, customs clearance, destination and last-mile arrangements; freight is confirmed for each shipment.",
    },
    formats: {
      eyebrow: "Supply formats",
      title: "Choose how much processing stays in Chongqing.",
      intro:
        "P1, P2 and P3 distribute cutting, machining and kit preparation between PINDÉ and the local fabricator. Quotations separate profiles, processing, components, packing and freight.",
      items: [
        {
          level: "P1",
          title: "System material kit",
          tag: "Material supply",
          from: "Finished profiles, gaskets, cleats, connectors, drainage parts, bill of materials and fabrication documents.",
          local: "Cutting, machining, hardware, glazing, assembly, QA and installation.",
          fit: "A fabricator with cutting, machining and corner-joining equipment.",
        },
        {
          level: "P2",
          title: "Cut-to-length and machined profiles",
          tag: "Machined supply",
          from: "Cutting-list optimisation, drainage and lock machining, CNC work and part identification.",
          local: "Corner joining, hardware, glazing, adjustment, final inspection and installation.",
          fit: "A factory introducing a system or moving selected machining work upstream.",
        },
        {
          level: "P3",
          title: "Glass-free CKD kit",
          tag: "Opening-by-opening",
          from: "Machined profiles packed by opening with seals, joints, selected hardware and a spares pack.",
          local: "Final dimensional check, assembly, insulating glass units, adjustment, conformity work and installation.",
          fit: "A paid pilot, scheduled project or production cell with limited machining capacity.",
        },
      ],
      labels: {
        chongqing: "From Chongqing",
        local: "Kept local",
        fit: "Typical buyer",
      },
    },
    process: {
      eyebrow: "Production launch",
      title: "Four decisions before repeat supply.",
      items: [
        {
          number: "01",
          title: "Qualify the system",
          text: "Review the equipment list, expected volume, current systems, opening schedule, glazing and destination requirements.",
        },
        {
          number: "02",
          title: "Freeze the reference build",
          text: "Agree the system code, representative sizes, bill of materials, joints, evidence and responsibility split.",
        },
        {
          number: "03",
          title: "Run a paid pilot",
          text: "Inspect profile sections and corner joints, then assemble and test a typical 3–10 glass-free kit pilot.",
        },
        {
          number: "04",
          title: "Scale by evidence",
          text: "Review yield, fit, packing, delivery and closed non-conformities before a project batch or repeat order.",
        },
      ],
    },
    split: {
      eyebrow: "Responsibility split",
      title: "Prepared parts from Chongqing, finished units near the project.",
      chongqing: {
        title: "PINDÉ · Chongqing",
        items: [
          "System definition and bill-of-materials control",
          "Profile production, finishing and batch QA",
          "Optional cutting, CNC machining and kit identification",
          "Packing, documentation and replacement parts",
        ],
      },
      destination: {
        title: "Local fabricator · Destination market",
        items: [
          "Final opening and unit-dimension confirmation",
          "Locally sourced glazing and approved hardware",
          "Assembly, adjustment and finished-unit inspection",
          "National conformity, installation and first-line service",
        ],
      },
      route:
        "Rail-compatible export packing from Chongqing. FCA, CIP and DAP options are quoted per shipment; freight and import charges are never presented as fixed long-term rates.",
    },
    engineering: {
      eyebrow: "Technical release",
      title: "Production documents tied to the approved construction.",
      items: [
        {
          title: "System definition",
          text: "Profile sections, mass per metre, bill of materials, colour and batch rules, plus gasket and connector maps.",
        },
        {
          title: "Fabrication package",
          text: "Cutting and machining drawings, drainage, joint method, tooling, process parameters and inspection points.",
        },
        {
          title: "Evidence register",
          text: "Report number, laboratory, specimen size, insulating-glass make-up, hardware, date and stated scope.",
        },
        {
          title: "Launch support",
          text: "Samples, first-article review, remote training, issue log, change control and replacement-part planning.",
        },
      ],
      note:
        "Cold-region performance is checked for the finished construction. Frame depth, thermal-barrier width and material conductivity do not establish whole-window performance on their own.",
    },
    compliance: {
      label: "Country-specific conformity",
      title: "Confirm the route for the product and destination.",
      text:
        "The importer and a local conformity body determine the applicable standard, applicant, specimen and marking. P1 material kits, P2 machined parts, P3 CKD kits and finished units may not share the same customs or conformity scope.",
    },
    factory: {
      eyebrow: "Manufacturing base · Chongqing, China",
      title: "One 100,000 m² site for profiles, finishing, machining and system assembly.",
      text:
        "The factory area describes the manufacturing base, not the capacity reserved for an order. Equipment, inspection points, packing method and available monthly output are confirmed for the selected system during qualification.",
      imageAlt: "PINDÉ integrated manufacturing base in Chongqing, China",
    },
    faq: {
      eyebrow: "Procurement questions",
      title: "Before you request a quote.",
      items: [
        {
          q: "Do you ship complete glazed windows for retail projects?",
          a: "Normally no. The regular scope is a system material kit, machined profiles or a glass-free CKD kit. Insulating glass units, final assembly, destination-market assessment and installation remain local. A finished sample may be quoted for testing or training when its size and purpose are agreed.",
        },
        {
          q: "Can aluminium and FRP be included in the same enquiry?",
          a: "Yes. They remain separate lines with their own bill of materials, processing method, evidence register and inspection plan. Sharing a container does not make the constructions or their performance evidence interchangeable.",
        },
        {
          q: "What do you need for a technical quotation?",
          a: "Send the destination city, company role, expected volume, equipment list, opening schedule or drawings, glazing concept, required finish, target standard and preferred supply format. PDF, DWG, DXF, spreadsheet and ZIP attachments are accepted.",
        },
        {
          q: "How are samples and pilot orders handled?",
          a: "The normal sequence is profile sections, corner-joint specimens and then a paid pilot of 3–10 glass-free kits. Any credit for sample or freight cost is written into the quotation.",
        },
        {
          q: "Can one generic EAC document cover every shipment?",
          a: "It should not be assumed. The importer and appointed local body check the actual goods, intended use, destination and applicable technical regulation or national standard. The applicant and specimen scope are agreed before shipment.",
        },
        {
          q: "Which commercial terms are available?",
          a: "Initial quotations can be structured on FCA, CIP or DAP terms, with freight, duty and tax shown separately. New accounts start with prepayment; credit terms are considered only after successful repeat business.",
        },
      ],
    },
    rfq: {
      eyebrow: "Technical RFQ",
      title: "Send the opening schedule and equipment list.",
      text:
        "State which operations your factory performs and which parts must arrive ready from Chongqing. The technical reply will list missing data, a proposed pilot format and the documents used for the quotation.",
      response: "Technical review target: within 2 business days",
      email: "inquiry@pindesys.com",
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
        file: "Opening schedule / BOM / drawings",
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
        "Both material families",
        "Project-specific / not decided",
      ],
      formats: [
        "P1 · System material kit",
        "P2 · Cut-to-length and machined profiles",
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
        "The RFQ could not be sent. Please try again or email the files directly to inquiry@pindesys.com.",
      fileError: "The attachment must be an allowed file type and no larger than 8 MB.",
    },
    footer: {
      description:
        "Aluminium and FRP profile systems, machined components and glass-free CKD kits from Chongqing for local window and door fabrication.",
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
      title: "Оконные и дверные системы, подготовленные под ваше производство.",
      description:
        "PINDÉ поставляет производителям в России и Центральной Азии алюминиевые и стеклокомпозитные профильные системы, обработанные детали и CKD-комплекты без стеклопакетов. Степень подготовки в Чунцине определяется по ведомости проёмов и оборудованию заказчика.",
      primaryCta: "Отправить ведомость проёмов",
      secondaryCta: "Сравнить форматы поставки",
      note: "Поставка для бизнеса. Стеклопакеты, окончательная сборка, местное подтверждение соответствия и монтаж обычно выполняются в стране назначения.",
      cards: [
        {
          code: "AL",
          name: "Алюминиевые системы",
          detail: "Профили с термовставкой · комплектующие · спецификация",
        },
        {
          code: "FRP",
          name: "Стеклокомпозитные системы",
          detail: "Пултрузионные профили · квалифицированные соединения · технология",
        },
        {
          code: "CKD",
          name: "Комплекты с обработкой",
          detail: "Раскрой · механическая обработка · маркировка · упаковка",
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
      eyebrow: "Два семейства материалов",
      title: "Сначала конструкция, затем формат поставки.",
      intro:
        "В техническом предложении перечислены профили, уплотнители, соединители, интерфейсы фурнитуры и производственные документы для выбранной конструкции. Ответственность местного производства фиксируется в той же ревизии.",
      items: [
        {
          number: "01",
          label: "Серийная производственная линейка",
          title: "Алюминиевые оконные и дверные системы с термовставкой",
          description:
            "В наружных оконных и дверных блоках применяются алюминиевые профили с полиамидными термоизоляционными вставками. Интерьерные раздвижные и складные системы выделены отдельно. Поставка может ограничиваться готовыми хлыстами или включать проектный раскрой, обработку и комплектацию.",
          included: [
            "Профили коробки, створки или полотна, импоста и штапика",
            "Полиамидные термовставки, уплотнители EPDM, угловые и соединительные элементы",
            "Детали водоотвода, спецификация фурнитуры и комплектации",
            "Чертежи механической обработки, инструкция по сборке и перечень запасных частей",
          ],
          keywords:
            "Для закупок по запросам «алюминиевый оконный профиль оптом», «тёплые алюминиевые системы» и «профиль для производства алюминиевых окон».",
        },
        {
          number: "02",
          label: "Линейка с проектной квалификацией",
          title: "Оконные системы из стеклокомпозита / FRP",
          description:
            "Полностью стеклокомпозитные и алюминиево-композитные системы выпускаются по определённому установочному образцу. Соединения, клей или крепёж, режимы обработки и план испытаний относятся к этой системе и не переносятся с другого композитного изделия.",
          included: [
            "Профили рамы, створки, импоста и штапика",
            "Квалифицированные угловые соединения, уплотнители и узлы крепления",
            "Режимы резки, сверления, склеивания и удаления пыли",
            "Пробные комплекты, приёмка первого изделия и обучение производству",
          ],
          keywords:
            "Для целевых запросов «стеклокомпозитный оконный профиль», «стеклопластиковый профиль для окон» и «пултрузионный оконный профиль».",
        },
      ],
      evidence:
        "Теплотехническое, прочностное или климатическое значение приводится вместе с образцом, формулой стеклопакета и областью протокола. Для другой конструкции оно остаётся требованием проекта до подтверждения.",
    },
    logistics: {
      eyebrow: "Железнодорожная связь из Чунцина",
      title: "Железнодорожная отправка из Чунцина в Центральную Азию и Россию.",
      intro:
        "Международная железнодорожная сеть Чунцина работает через узлы Казахстана и дальнейшие маршруты по Центральной Азии и России. В актуальном расчёте для железнодорожного плеча может использоваться ориентир около 7–20 дней, но фактическую дату определяют забронированный сервис, перегрузка на границе, таможенное оформление и последняя миля.",
      facts: [
        { value: "Чунцин", label: "Производство и отправление" },
        { value: "Центральная Азия", label: "Железнодорожные узлы и региональные маршруты" },
        { value: "~7–20 дней", label: "Плановый диапазон только для железнодорожного плеча" },
      ],
      mapAlt:
        "Схема железнодорожного грузового маршрута Юйсиньоу из Чунцина в Казахстан, Узбекистан, Туркменистан, Таджикистан, Кыргызстан и Россию",
      mapCaption: "Грузовой маршрут Юйсиньоу из Чунцина в Центральную Азию и Россию",
      openMap: "Открыть карту маршрута",
      note:
        "Сроки указаны ориентировочно и не гарантируются. Фактическое время зависит от графика поездов, консолидации, таможенного оформления, пункта назначения и последней мили; стоимость перевозки подтверждается для каждой партии.",
    },
    formats: {
      eyebrow: "Форматы поставки",
      title: "Определите, какая обработка выполняется в Чунцине.",
      intro:
        "P1, P2 и P3 распределяют раскрой, обработку и комплектацию между PINDÉ и местным производством. В предложении отдельно указываются профили, обработка, комплектующие, упаковка и перевозка.",
      items: [
        {
          level: "P1",
          title: "Системный комплект материалов",
          tag: "Поставка материалов",
          from: "Готовые профили, уплотнители, угловые и соединительные элементы, детали водоотвода, спецификация комплектации и технологические документы.",
          local: "Раскрой, обработка, фурнитура, стеклопакеты, сборка, контроль качества и монтаж.",
          fit: "Производство с оборудованием для раскроя, обработки и сборки углов.",
        },
        {
          level: "P2",
          title: "Профили в размер с механической обработкой",
          tag: "Поставка с обработкой",
          from: "Оптимизация карты раскроя, фрезерование водоотводов и вырезов под замок, обработка на ЧПУ и маркировка деталей.",
          local: "Сборка углов, установка фурнитуры и стеклопакетов, регулировка, приёмка и монтаж.",
          fit: "Производство, запускающее систему или передающее часть обработки поставщику.",
        },
        {
          level: "P3",
          title: "CKD-комплект без стеклопакетов",
          tag: "По каждому проёму",
          from: "Обработанные детали по каждому проёму, уплотнения, соединители, согласованная фурнитура и комплект запасных частей.",
          local: "Контроль размеров, окончательная сборка, стеклопакеты, регулировка, подтверждение соответствия и монтаж.",
          fit: "Платная опытная партия, проектная поставка или участок с ограниченными возможностями обработки.",
        },
      ],
      labels: {
        chongqing: "Из Чунцина",
        local: "Выполняется на месте",
        fit: "Кому подходит",
      },
    },
    process: {
      eyebrow: "Запуск производства",
      title: "Четыре решения до регулярных поставок.",
      items: [
        {
          number: "01",
          title: "Квалификация системы",
          text: "Проверяем оборудование, ожидаемый объём, текущие системы, ведомость проёмов, стеклопакеты и требования страны назначения.",
        },
        {
          number: "02",
          title: "Фиксация эталонной конструкции",
          text: "Согласуем код системы, типоразмеры, спецификацию комплектации, соединения, протоколы и распределение ответственности.",
        },
        {
          number: "03",
          title: "Платная опытная партия",
          text: "Проверяем образцы профилей и углов, затем собираем и испытываем типовую партию из 3–10 комплектов без стеклопакетов.",
        },
        {
          number: "04",
          title: "Масштабирование по результатам",
          text: "До проектной партии проверяем выход годных, точность сопряжений, упаковку, доставку и закрытие несоответствий.",
        },
      ],
    },
    split: {
      eyebrow: "Распределение ответственности",
      title: "Подготовленные детали из Чунцина, готовое изделие рядом с объектом.",
      chongqing: {
        title: "PINDÉ · Чунцин",
        items: [
          "Описание системы и управление спецификацией комплектации",
          "Изготовление профилей, отделка и контроль партии",
          "Опционально — раскрой, обработка на ЧПУ и маркировка комплектов",
          "Экспортная упаковка, документы и запасные части",
        ],
      },
      destination: {
        title: "Местный производитель · Рынок назначения",
        items: [
          "Подтверждение проёмов и окончательных размеров",
          "Местные стеклопакеты и согласованная фурнитура",
          "Сборка, регулировка и контроль готового оконного или дверного блока",
          "Национальное соответствие, монтаж и первичный сервис",
        ],
      },
      route:
        "Экспортная упаковка из Чунцина рассчитана в том числе на железнодорожную перевозку. FCA, CIP и DAP рассчитываются для каждой партии; фрахт и импортные платежи не фиксируются как постоянная ставка.",
    },
    engineering: {
      eyebrow: "Технический выпуск",
      title: "Производственные документы для утверждённой конструкции.",
      items: [
        {
          title: "Состав системы",
          text: "Сечения, масса профилей на метр, спецификация комплектации, правила по цвету и партиям, карты уплотнителей и соединителей.",
        },
        {
          title: "Технологический пакет",
          text: "Чертежи раскроя и обработки, водоотвод, угловое соединение, оснастка, режимы процесса и точки контроля.",
        },
        {
          title: "Реестр доказательств",
          text: "Номер протокола, лаборатория, размер образца, формула стеклопакета, фурнитура, дата и заявленная область применения.",
        },
        {
          title: "Поддержка запуска",
          text: "Образцы, проверка первого изделия, дистанционное обучение, журнал замечаний, управление изменениями и планирование запасных деталей.",
        },
      ],
      note:
        "Показатели для холодного региона проверяются на готовой конструкции. Монтажная глубина, ширина термовставки и теплопроводность материала сами по себе не определяют характеристики оконного блока.",
    },
    compliance: {
      label: "Соответствие по каждой стране",
      title: "Процедуру определяют для товара и страны назначения.",
      text:
        "Импортёр и местный орган по оценке соответствия определяют применимый стандарт, заявителя, образец и маркировку. Системные материалы P1, обработанные детали P2, CKD-комплекты P3 и готовые изделия могут иметь разную таможенную классификацию и область оценки.",
    },
    factory: {
      eyebrow: "Производственная база · Чунцин, Китай",
      title: "На одной площадке 100 000 м² выполняются профили, отделка, обработка и сборка систем.",
      text:
        "Площадь описывает производственную базу, но не зарезервированную мощность заказа. Оборудование, контрольные операции, упаковка и доступный месячный выпуск подтверждаются для выбранной системы при квалификации.",
      imageAlt: "Интегрированная производственная база PINDÉ в Чунцине, Китай",
    },
    faq: {
      eyebrow: "Вопросы отдела снабжения",
      title: "Что важно до запроса цены.",
      items: [
        {
          q: "Вы поставляете готовые окна со стеклопакетами для розницы?",
          a: "Обычно нет. Основной формат — системный комплект материалов, обработанные профили или CKD-комплект без стеклопакетов. Стеклопакеты, окончательная сборка, местная оценка соответствия и монтаж остаются в стране назначения. Готовый образец можно рассчитать для испытаний или обучения после согласования размера и назначения.",
        },
        {
          q: "Можно запросить алюминий и FRP в одной заявке?",
          a: "Да. Это остаются две отдельные позиции со своими спецификациями комплектации, технологиями, реестрами протоколов и планами контроля. Перевозка в одном контейнере не делает конструкции и их доказательную базу взаимозаменяемыми.",
        },
        {
          q: "Что требуется для технического предложения?",
          a: "Укажите город назначения, роль компании, ожидаемый объём, перечень оборудования, ведомость проёмов или чертежи, формулу стеклопакета, покрытие, целевой стандарт и формат поставки. Можно приложить PDF, DWG, DXF, таблицу или ZIP.",
        },
        {
          q: "Как заказываются образцы и опытная партия?",
          a: "Обычная последовательность: образцы профилей, образцы угловых соединений и затем платная партия из 3–10 комплектов без стеклопакетов. Зачёт стоимости образцов или перевозки действует только тогда, когда он указан в предложении.",
        },
        {
          q: "Можно ли использовать один общий документ EAC для любой поставки?",
          a: "Это нельзя принимать по умолчанию. Импортёр и назначенный местный орган проверяют фактический товар, назначение, страну обращения и применимый техрегламент либо национальный стандарт. Заявитель и образец согласуются до отправки.",
        },
        {
          q: "На каких условиях возможна поставка?",
          a: "Первичное предложение можно подготовить на условиях FCA, CIP или DAP с отдельным указанием перевозки, пошлин и налогов. Новые программы начинаются с предоплаты; отсрочка обсуждается после успешных повторных заказов.",
        },
      ],
    },
    rfq: {
      eyebrow: "Технический запрос",
      title: "Пришлите ведомость проёмов и перечень оборудования.",
      text:
        "Укажите, какие операции выполняются на вашем производстве и какие детали должны прибыть из Чунцина готовыми. В техническом ответе будут перечислены недостающие данные, предлагаемый формат пилота и документы, положенные в основу расчёта.",
      response: "Целевой срок технического разбора — 2 рабочих дня",
      email: "inquiry@pindesys.com",
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
        file: "Ведомость проёмов / спецификация / чертежи",
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
        "Обе группы материалов",
        "Проектная система / пока не определено",
      ],
      formats: [
        "P1 · Системный комплект материалов",
        "P2 · Профили в размер с обработкой",
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
        "Не удалось отправить запрос. Повторите попытку или отправьте файлы напрямую на inquiry@pindesys.com.",
      fileError: "Допустимы только указанные форматы файлов размером не более 8 МБ.",
    },
    footer: {
      description:
        "Алюминиевые и стеклокомпозитные профильные системы, обработанные детали и CKD-комплекты без стеклопакетов из Чунцина для локального производства окон и дверей.",
      systems: "Системные поставки",
      company: "Модель работы",
      contact: "Контакты",
      copyright: "PINDÉ · Поставки оконных систем",
      tagline: "Системные материалы · Локальное производство",
    },
  },
} as const;

export type LandingContent = (typeof landingContent)[LandingLocale];
