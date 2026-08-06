export const aboutLocales = ["en", "ru"] as const;

export type AboutLocale = (typeof aboutLocales)[number];

export function isAboutLocale(value: string): value is AboutLocale {
  return aboutLocales.includes(value as AboutLocale);
}

export const aboutContent = {
  en: {
    lang: "en",
    locale: "en_US",
    seo: {
      title: "About PINDÉ | Chongqing Window System Manufacturing Base",
      description:
        "PINDÉ develops and machines aluminium and FRP window systems at a 100,000 m² Chongqing base, with batch inspection and group roots dating to 2002.",
      keywords: [
        "PINDÉ window systems",
        "Chongqing window system manufacturer",
        "aluminium profile machining China",
        "window system manufacturing base",
        "aluminium window profile supplier Russia",
        "FRP window system supplier",
        "glass-free CKD window kits",
        "window system engineering China",
      ],
    },
    breadcrumb: "About PINDÉ",
    hero: {
      eyebrow: "Company & manufacturing base · Chongqing",
      title: "The Chongqing production base behind PINDÉ.",
      intro:
        "PINDÉ prepares aluminium and FRP system supplies for fabricators in Russia and Central Asia. The work draws on the group's window, door and glass operations in Chongqing, while each export order is released from its own drawings, specification and inspection plan.",
      primaryCta: "Discuss a supply project",
      secondaryCta: "View the supply model",
      imageAlt: "Integrated PINDÉ manufacturing base in Chongqing, China",
      note:
        "The 2002 date refers to the manufacturing group's roots. PINDÉ Doors & Windows (Chongqing) was established later, as recorded in the 2026 company brochure.",
    },
    facts: [
      { value: "2002", label: "Group manufacturing roots" },
      { value: "100,000 m²", label: "Integrated manufacturing base" },
      { value: "R&D → QA", label: "Controlled production workflow" },
      { value: "Chongqing", label: "Engineering, production and dispatch" },
    ],
    story: {
      eyebrow: "From manufacturing group to export system supply",
      title: "From a local manufacturing group to system supply for fabricators.",
      paragraphs: [
        "The group history in the 2026 brochure begins in Chongqing in 2002 with Mingde Doors & Windows and an in-house development function. Later businesses added energy-efficient glass, curtain-wall work and further window and door production. That history explains the range of processes available at the current site.",
        "PINDÉ applies those processes to business-to-business system supply: aluminium or FRP materials, machined profiles and glass-free CKD kits. Factory capability is only the starting point. The order itself is governed by a released bill of materials, drawings, inspection points and the evidence applicable to the destination market.",
      ],
      scopeLabel: "Current export scope",
      scopeItems: [
        "Thermally broken aluminium profile systems",
        "FRP / glass-fibre composite profile supply",
        "Cut-to-length and CNC-machined components",
        "Glass-free CKD kits packed by opening",
      ],
    },
    capabilities: {
      eyebrow: "Integrated industrial capability",
      title: "Five processes used in one released system.",
      intro:
        "The 2026 company brochure documents the processes below. For a fabricator, the practical question is how they connect: the same profile revision must carry through machining, assembly checks, packing and replacements.",
      items: [
        {
          code: "01",
          title: "System R&D and definition",
          evidence: "Independent development team, product design and system iteration.",
          value: "Profile maps, bill-of-materials control, joint details and recorded changes.",
        },
        {
          code: "02",
          title: "Profile and surface processes",
          evidence: "Extrusion, pretreatment, coating routes and dimensional inspection.",
          value: "The specified alloy, finish sample and profile dimensions stay tied to the batch record.",
        },
        {
          code: "03",
          title: "CNC and deep processing",
          evidence: "Double-head cutting, drilling, tapping, milling and corner preparation.",
          value: "Profiles can arrive cut, machined and labelled to the local production schedule.",
        },
        {
          code: "04",
          title: "Glass processing know-how",
          evidence: "CNC cutting, tempering, lamination and insulating-glass processes.",
          value: "Glazing rebates and setting details are defined even when the insulating glass unit is sourced locally.",
        },
        {
          code: "05",
          title: "Assembly, inspection and traceability",
          evidence: "Integrated production flow with in-process and finished-part checks.",
          value: "First-article approval and batch identification make replacement parts easier to trace.",
        },
      ],
      evidenceLabel: "Brochure evidence",
      valueLabel: "Value for the fabricator",
    },
    timeline: {
      eyebrow: "Industrial development",
      title: "Milestones recorded in the company brochure.",
      note: "Milestones are summarised from the 2026 company brochure; wording has been narrowed to claims the document directly supports.",
      items: [
        {
          year: "2002",
          title: "Manufacturing roots in Chongqing",
          text: "Mingde Doors & Windows is established and the group begins its door-and-window R&D path.",
        },
        {
          year: "2009–14",
          title: "Glass and quality capability expands",
          text: "The group establishes its glass business and develops a broader quality-management base.",
        },
        {
          year: "2019–22",
          title: "Industrial base grows in phases",
          text: "System development and production capacity expand through new operating companies and factory phases.",
        },
        {
          year: "2023",
          title: "PINDÉ company and integrated campus",
          text: "PINDÉ Doors & Windows (Chongqing) is established; the brochure records a 100,000 m² campus and an intelligent glass line.",
        },
        {
          year: "Today",
          title: "System supply for local fabrication",
          text: "Production covers aluminium and FRP profiles, machined components and glass-free CKD sets for export fabricators.",
        },
      ],
    },
    workflow: {
      eyebrow: "Production release",
      title: "The approved revision follows the parts to packing.",
      intro:
        "The sequence begins with a reference opening and ends with labelled parts, inspection records and a packing list that points back to the same drawings.",
      items: [
        { number: "01", title: "Freeze the system", text: "Reference opening, sections, bill of materials, finish, hardware interfaces and supply level." },
        { number: "02", title: "Prepare profiles", text: "Extrusion and surface route confirmed to the system and accepted sample." },
        { number: "03", title: "Machine the parts", text: "Cutting, drainage, drilling, milling and identification to released drawings." },
        { number: "04", title: "Verify interfaces", text: "Corner, seal, hardware and glazing interfaces checked on the reference build." },
        { number: "05", title: "Inspect and pack", text: "Batch checks, packing by system or opening, document register and replacement mapping." },
      ],
    },
    quality: {
      eyebrow: "Evidence before claims",
      title: "Factory credentials and product evidence answer different questions.",
      text:
        "Thermal, structural, air-permeability, watertightness and wind-load results belong to a specific specimen, glazing, hardware set and report scope. They are recorded separately from factory certificates so the buyer can see which result applies to the ordered construction and which requirement still needs local confirmation.",
      tags: ["Reference build", "BOM revision", "First article", "Batch ID", "Inspection record", "Change control"],
    },
    partners: {
      eyebrow: "Supply-chain ecosystem",
      title: "The released bill of materials decides which brand is supplied.",
      intro:
        "The 2026 brochure names established profile, hardware, sealant and glass brands within the group’s supply ecosystem.",
      brands: ["SIEGENIA", "GU", "Roto", "KIN LONG", "XINYI GLASS", "XINGFA ALUMINIUM", "BAIYUN", "RUNAS"],
      note:
        "Names above are reproduced from the company brochure. Availability, technical compatibility and inclusion are confirmed for each quotation; no brand is implied to be present in every system or order.",
    },
    cta: {
      eyebrow: "Check the fit with your production line",
      title: "Send an opening schedule, current system or required supply format.",
      text: "Before quoting a pilot, we will identify the profile set, processing scope, documents and work that remains with the local fabricator.",
      primary: "Send a technical RFQ",
      secondary: "Review system formats",
    },
  },
  ru: {
    lang: "ru",
    locale: "ru_RU",
    seo: {
      title: "О компании PINDÉ | Производственная база оконных систем в Чунцине",
      description:
        "Производственная база PINDÉ: опыт группы с 2002 года, завод 100 000 м² в Чунцине, разработка систем, обработка профиля, стекольные технологии и контроль партий.",
      keywords: [
        "PINDÉ оконные системы",
        "производитель оконных систем Китай",
        "завод алюминиевого профиля Чунцин",
        "обработка алюминиевого профиля Китай",
        "алюминиевые профильные системы оптом",
        "стеклокомпозитные оконные профили",
        "CKD комплекты окон без стеклопакетов",
        "поставщик оконных систем для России",
        "профильные системы для оконного производства",
      ],
    },
    breadcrumb: "О компании PINDÉ",
    hero: {
      eyebrow: "Компания и производство · Чунцин",
      title: "Производственная база PINDÉ в Чунцине.",
      intro:
        "PINDÉ готовит алюминиевые и стеклокомпозитные системы для производств в России и Центральной Азии. В работе используются оконные, дверные и стекольные процессы группы в Чунцине, но каждый экспортный заказ выпускается по собственной спецификации, чертежам и плану контроля.",
      primaryCta: "Обсудить поставку",
      secondaryCta: "Смотреть модель поставки",
      imageAlt: "Интегрированная производственная база PINDÉ в Чунцине, Китай",
      note:
        "2002 год относится к началу производственной истории группы. Компания PINDÉ Doors & Windows (Chongqing) создана позднее, что отражено в презентации 2026 года.",
    },
    facts: [
      { value: "2002", label: "Начало производственной истории группы" },
      { value: "100 000 м²", label: "Интегрированная производственная база" },
      { value: "R&D → ОТК", label: "Управляемая производственная цепочка" },
      { value: "Чунцин", label: "Инжиниринг, производство и отгрузка" },
    ],
    story: {
      eyebrow: "От промышленной группы к системным поставкам",
      title: "От местной промышленной группы к системным поставкам для производителей.",
      paragraphs: [
        "Согласно презентации 2026 года, история группы началась в Чунцине в 2002 году с Mingde Doors & Windows и собственного конструкторского направления. Позднее появились предприятия по энергосберегающему стеклу, фасадным конструкциям, окнам и дверям. Этим объясняется набор процессов на нынешней площадке.",
        "PINDÉ использует их для системных поставок производителям: алюминиевые и стеклокомпозитные материалы, обработанные профили и CKD-комплекты без стеклопакетов. Возможности завода — исходная база. Сам заказ выпускается по утверждённой спецификации комплектации, чертежам, контрольным операциям и доказательной базе для рынка назначения.",
      ],
      scopeLabel: "Текущий экспортный ассортимент",
      scopeItems: [
        "Алюминиевые системы с термоизоляционными вставками",
        "Стеклокомпозитные (FRP) профильные системы",
        "Профили в размер и детали с ЧПУ-обработкой",
        "CKD-комплекты без стеклопакетов по проёмам",
      ],
    },
    capabilities: {
      eyebrow: "Интегрированные производственные компетенции",
      title: "Пять процессов в одной выпущенной системе.",
      intro:
        "Корпоративная презентация 2026 года описывает перечисленные ниже процессы. Для производителя важна их связь: одна ревизия профиля должна сохраняться в обработке, контрольной сборке, упаковке и заказе замены.",
      items: [
        {
          code: "01",
          title: "Разработка и описание системы",
          evidence: "Собственная команда разработчиков, конструирование и развитие продуктовых серий.",
          value: "Карта профилей, спецификация комплектации, узлы соединений и журнал изменений.",
        },
        {
          code: "02",
          title: "Профиль и защитно-декоративное покрытие",
          evidence: "Экструзия, подготовка поверхности, варианты покрытия и размерный контроль.",
          value: "Заданный сплав, образец покрытия и размеры профиля привязаны к записи о партии.",
        },
        {
          code: "03",
          title: "Механическая обработка на ЧПУ",
          evidence: "Двухголовая резка, сверление, нарезание резьбы, фрезерование и подготовка углов.",
          value: "Профили могут поступать в размер, с обработкой и маркировкой по местной производственной ведомости.",
        },
        {
          code: "04",
          title: "Компетенции в переработке стекла",
          evidence: "Раскрой с ЧПУ, закалка, ламинирование и производство стеклопакетов.",
          value: "Фальц остекления и установка подкладок определяются, даже если стеклопакет закупается локально.",
        },
        {
          code: "05",
          title: "Сборка, контроль и прослеживаемость",
          evidence: "Единый производственный поток с межоперационным и выходным контролем.",
          value: "Согласование установочного образца и маркировка партии упрощают поиск деталей для замены.",
        },
      ],
      evidenceLabel: "Подтверждено презентацией",
      valueLabel: "Ценность для производителя",
    },
    timeline: {
      eyebrow: "Развитие производства",
      title: "Этапы, зафиксированные в корпоративной презентации.",
      note: "Этапы кратко изложены по корпоративной презентации 2026 года; формулировки ограничены фактами, которые прямо подтверждены документом.",
      items: [
        {
          year: "2002",
          title: "Начало производства в Чунцине",
          text: "Создана Mingde Doors & Windows; группа начинает развивать НИОКР в области окон и дверей.",
        },
        {
          year: "2009–14",
          title: "Развитие стекольного направления и системы качества",
          text: "Группа создаёт стекольное предприятие и расширяет базу управления качеством.",
        },
        {
          year: "2019–22",
          title: "Поэтапное расширение площадки",
          text: "Разработка систем и производство расширяются за счёт новых предприятий и очередей завода.",
        },
        {
          year: "2023",
          title: "Компания PINDÉ и интегрированная площадка",
          text: "Создана PINDÉ Doors & Windows (Chongqing); в презентации указаны площадка 100 000 м² и интеллектуальная линия переработки стекла.",
        },
        {
          year: "Сегодня",
          title: "Системные поставки для локального производства",
          text: "Промышленная база адаптирована под экспорт алюминиевых и FRP-материалов, обработанных деталей и CKD-комплектов без стеклопакетов.",
        },
      ],
    },
    workflow: {
      eyebrow: "Выпуск в производство",
      title: "Утверждённая ревизия следует за деталями до упаковки.",
      intro:
        "Последовательность начинается с установочного проёма и заканчивается маркированными деталями, протоколом контроля и упаковочным листом, связанными с теми же чертежами.",
      items: [
        { number: "01", title: "Зафиксировать систему", text: "Эталонный проём, сечения, спецификация, цвет, интерфейсы фурнитуры и уровень комплектации." },
        { number: "02", title: "Подготовить профиль", text: "Маршрут экструзии и покрытия подтверждается по системе и согласованному образцу." },
        { number: "03", title: "Выполнить обработку", text: "Резка, дренаж, сверление, фрезерование и маркировка по выпущенным чертежам." },
        { number: "04", title: "Проверить узлы", text: "Углы, уплотнения, фурнитура и примыкание стеклопакета проверяются на эталонном изделии." },
        { number: "05", title: "Проконтролировать и упаковать", text: "Контроль партии, упаковка по системе или проёму, реестр документов и карта запасных деталей." },
      ],
    },
    quality: {
      eyebrow: "Сначала доказательства, затем заявления",
      title: "Документы завода и протокол на изделие отвечают на разные вопросы.",
      text:
        "Теплотехнические показатели, прочность, воздухопроницаемость, водонепроницаемость и сопротивление ветровой нагрузке относятся к конкретному образцу, стеклопакету, фурнитуре и области протокола. Эти данные хранятся отдельно от сертификатов предприятия, чтобы было понятно, какой результат относится к заказной конструкции.",
      tags: ["Эталонное изделие", "Ревизия спецификации", "Первый образец", "Номер партии", "Протокол контроля", "Управление изменениями"],
    },
    partners: {
      eyebrow: "Экосистема комплектующих",
      title: "Марку комплектующего определяет рабочая спецификация.",
      intro:
        "В презентации 2026 года указаны известные бренды профиля, фурнитуры, герметиков и стекла, входящие в экосистему поставок группы.",
      brands: ["SIEGENIA", "GU", "Roto", "KIN LONG", "XINYI GLASS", "XINGFA ALUMINIUM", "BAIYUN", "RUNAS"],
      note:
        "Названия приведены по корпоративной презентации. Наличие, техническая совместимость и включение подтверждаются в каждой спецификации; ни один бренд не подразумевается как обязательный для всех систем и заказов.",
    },
    cta: {
      eyebrow: "Проверка под ваше производство",
      title: "Пришлите ведомость проёмов, текущую систему или требуемый формат поставки.",
      text: "До расчёта опытной партии мы определим набор профилей, обработку, документацию и операции местного производства.",
      primary: "Отправить технический запрос",
      secondary: "Смотреть форматы систем",
    },
  },
} as const;

export type AboutContent = (typeof aboutContent)[AboutLocale];
