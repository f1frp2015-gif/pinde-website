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
        "See the manufacturing platform behind PINDÉ: group roots since 2002, a 100,000 m² Chongqing base, system R&D, profile machining, glass processing know-how and batch QA.",
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
      title: "Industrial depth behind every system we supply.",
      intro:
        "PINDÉ connects Chongqing’s integrated window-and-door manufacturing base with professional fabricators across Russian-speaking markets. Group manufacturing roots support system R&D, profile processing, glass know-how and controlled batch supply.",
      primaryCta: "Discuss an export programme",
      secondaryCta: "View the supply model",
      imageAlt: "Integrated PINDÉ manufacturing base in Chongqing, China",
      note:
        "The 2002 date refers to the manufacturing group’s roots. PINDÉ’s export system programmes operate on this industrial platform.",
    },
    facts: [
      { value: "2002", label: "Group manufacturing roots" },
      { value: "100,000 m²", label: "Integrated manufacturing base" },
      { value: "R&D → QA", label: "Controlled production workflow" },
      { value: "Chongqing", label: "Engineering, production and dispatch" },
    ],
    story: {
      eyebrow: "From manufacturing group to export system supply",
      title: "A long production chain, focused on professional buyers.",
      paragraphs: [
        "The industrial story began in Chongqing in 2002 with Mingde Doors & Windows and a group R&D function. The platform later expanded into energy-efficient glass, curtain-wall and door-and-window businesses, building connected experience across materials, interfaces and finished assemblies.",
        "PINDÉ uses that base for a different commercial model: aluminium and FRP system materials, machined semi-finished parts and glass-free CKD kits for local fabrication. The factory provides process depth; each export programme is still released against a defined BOM, drawings, inspection points and market-specific validation scope.",
      ],
      scopeLabel: "Current export scope",
      scopeItems: [
        "Thermally broken aluminium profile systems",
        "FRP / glass-fibre composite profile programmes",
        "Cut-to-length and CNC-machined components",
        "Glass-free CKD kits packed by opening",
      ],
    },
    capabilities: {
      eyebrow: "Integrated industrial capability",
      title: "Five linked disciplines—not a loose-profile catalogue.",
      intro:
        "The 2026 company brochure documents the production processes below. For export buyers, their value lies in coordinated interfaces and repeatable release control.",
      items: [
        {
          code: "01",
          title: "System R&D and definition",
          evidence: "Independent development team, product design and system iteration.",
          value: "Profile maps, BOM control, joint logic and documented change management.",
        },
        {
          code: "02",
          title: "Profile and surface processes",
          evidence: "Extrusion, pretreatment, coating routes and dimensional inspection.",
          value: "A controlled route from specified alloy and finish to batch-ready profiles.",
        },
        {
          code: "03",
          title: "CNC and deep processing",
          evidence: "Double-head cutting, drilling, tapping, milling and corner preparation.",
          value: "Cut-to-length parts and machined kits that reduce local setup work.",
        },
        {
          code: "04",
          title: "Glass processing know-how",
          evidence: "CNC cutting, tempering, lamination and insulating-glass processes.",
          value: "Glazing interfaces are engineered even when insulating glass is sourced locally.",
        },
        {
          code: "05",
          title: "Assembly, inspection and traceability",
          evidence: "Integrated production flow with in-process and finished-part checks.",
          value: "First-article approval, batch identification and a clearer route to replacements.",
        },
      ],
      evidenceLabel: "Brochure evidence",
      valueLabel: "Value for the fabricator",
    },
    timeline: {
      eyebrow: "Industrial development",
      title: "The platform behind PINDÉ, milestone by milestone.",
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
          text: "The industrial platform is adapted to aluminium and FRP materials, machined components and glass-free CKD programmes for export buyers.",
        },
      ],
    },
    workflow: {
      eyebrow: "Manufacturing logic",
      title: "Capability becomes useful only when it follows a controlled sequence.",
      intro:
        "Every programme moves from an agreed reference build to prepared parts, inspection and a traceable shipment package.",
      items: [
        { number: "01", title: "Freeze the system", text: "Reference opening, sections, BOM, finish, hardware interfaces and supply level." },
        { number: "02", title: "Prepare profiles", text: "Extrusion and surface route confirmed to the system and accepted sample." },
        { number: "03", title: "Machine the parts", text: "Cutting, drainage, drilling, milling and identification to released drawings." },
        { number: "04", title: "Verify interfaces", text: "Corner, seal, hardware and glazing interfaces checked on the reference build." },
        { number: "05", title: "Inspect and pack", text: "Batch checks, packing by system or opening, document register and replacement mapping." },
      ],
    },
    quality: {
      eyebrow: "Evidence before claims",
      title: "Factory scale shows capability. It does not replace system validation.",
      text:
        "Thermal, structural, air-, water- and wind-performance claims belong to a specific specimen, glazing build-up, hardware set and test scope. PINDÉ records that evidence separately from general factory credentials, so buyers can see what is proven, what remains a project target and what must be confirmed locally.",
      tags: ["Reference build", "BOM revision", "First article", "Batch ID", "Inspection record", "Change control"],
    },
    partners: {
      eyebrow: "Supply-chain ecosystem",
      title: "Components are selected by BOM—not by logo count.",
      intro:
        "The 2026 brochure names established profile, hardware, sealant and glass brands within the group’s supply ecosystem.",
      brands: ["SIEGENIA", "GU", "Roto", "KIN LONG", "XINYI GLASS", "XINGFA ALUMINIUM", "BAIYUN", "RUNAS"],
      note:
        "Names above are reproduced from the company brochure. Availability, technical compatibility and inclusion are confirmed for each quotation; no brand is implied to be present in every system or order.",
    },
    cta: {
      eyebrow: "Qualify the platform for your factory",
      title: "Bring us a system, an opening schedule or a target supply format.",
      text: "We will map the required profiles, processing, documents and local responsibilities before a pilot batch is quoted.",
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
      title: "Производственная база за каждой системой PINDÉ.",
      intro:
        "PINDÉ связывает интегрированную производственную площадку в Чунцине с профессиональными оконными предприятиями русскоязычных рынков. Производственный опыт группы поддерживает разработку систем, обработку профиля, стекольные технологии и управляемый выпуск партий.",
      primaryCta: "Обсудить программу поставок",
      secondaryCta: "Смотреть модель поставки",
      imageAlt: "Интегрированная производственная база PINDÉ в Чунцине, Китай",
      note:
        "2002 год — начало производственной истории группы. Экспортные программы PINDÉ используют эту промышленную платформу.",
    },
    facts: [
      { value: "2002", label: "Начало производственной истории группы" },
      { value: "100 000 м²", label: "Интегрированная производственная база" },
      { value: "R&D → ОТК", label: "Управляемая производственная цепочка" },
      { value: "Чунцин", label: "Инжиниринг, производство и отгрузка" },
    ],
    story: {
      eyebrow: "От промышленной группы к системным поставкам",
      title: "Длинная производственная цепочка для профессионального заказчика.",
      paragraphs: [
        "Производственная история началась в Чунцине в 2002 году с компании Mingde Doors & Windows и собственного направления НИОКР. В дальнейшем группа развила предприятия по энергосберегающему стеклу, фасадным конструкциям, окнам и дверям — от материалов и узлов до готовых изделий.",
        "PINDÉ использует эту базу в другой коммерческой модели: поставляет алюминиевые и стеклокомпозитные системные материалы, детали с механической обработкой и CKD-комплекты без стеклопакетов для локального производства. Возможности завода создают основу, но каждая экспортная программа выпускается по зафиксированной спецификации, чертежам, контрольным точкам и согласованному объёму испытаний.",
      ],
      scopeLabel: "Текущий экспортный ассортимент",
      scopeItems: [
        "Алюминиевые системы с терморазрывом",
        "Стеклокомпозитные (FRP) профильные системы",
        "Профили в размер и детали с ЧПУ-обработкой",
        "CKD-комплекты без стеклопакетов по проёмам",
      ],
    },
    capabilities: {
      eyebrow: "Интегрированные производственные компетенции",
      title: "Пять связанных процессов — не просто каталог профилей.",
      intro:
        "Корпоративная презентация 2026 года подтверждает перечисленные ниже процессы. Для импортёра и производителя их ценность — в согласованных узлах и повторяемом выпуске.",
      items: [
        {
          code: "01",
          title: "Разработка и описание системы",
          evidence: "Собственная команда разработчиков, конструирование и развитие продуктовых серий.",
          value: "Карта профилей, спецификация, логика соединений и управляемые изменения.",
        },
        {
          code: "02",
          title: "Профиль и защитно-декоративное покрытие",
          evidence: "Экструзия, подготовка поверхности, варианты покрытия и размерный контроль.",
          value: "Контролируемый маршрут от заданного сплава и цвета до серийной партии профиля.",
        },
        {
          code: "03",
          title: "Механическая обработка на ЧПУ",
          evidence: "Двухголовая резка, сверление, нарезание резьбы, фрезерование и подготовка углов.",
          value: "Профили в размер и обработанные комплекты, сокращающие подготовку на вашем участке.",
        },
        {
          code: "04",
          title: "Компетенции в переработке стекла",
          evidence: "Раскрой с ЧПУ, закалка, ламинирование и производство стеклопакетов.",
          value: "Узлы примыкания стеклопакета прорабатываются, даже если заполнение закупается локально.",
        },
        {
          code: "05",
          title: "Сборка, контроль и прослеживаемость",
          evidence: "Единый производственный поток с межоперационным и выходным контролем.",
          value: "Согласование первого образца, маркировка партии и понятная схема замены деталей.",
        },
      ],
      evidenceLabel: "Подтверждено презентацией",
      valueLabel: "Ценность для производителя",
    },
    timeline: {
      eyebrow: "Развитие производства",
      title: "Промышленная платформа PINDÉ — по этапам.",
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
      eyebrow: "Производственная логика",
      title: "Оборудование приносит пользу только в управляемом процессе.",
      intro:
        "Каждая программа проходит путь от согласованного эталонного изделия до подготовленных деталей, контроля и прослеживаемого комплекта отгрузочных документов.",
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
      title: "Масштаб завода подтверждает возможности, но не заменяет испытания системы.",
      text:
        "Теплотехника, прочность, воздухо- и водопроницаемость, ветровая нагрузка относятся к конкретному образцу, стеклопакету, комплекту фурнитуры и программе испытаний. PINDÉ отделяет такие протоколы от общих данных о заводе, чтобы заказчик видел: что подтверждено, что остаётся проектной целью и что необходимо проверить на месте.",
      tags: ["Эталонное изделие", "Ревизия спецификации", "Первый образец", "Номер партии", "Протокол контроля", "Управление изменениями"],
    },
    partners: {
      eyebrow: "Экосистема комплектующих",
      title: "Комплектующие выбираются по спецификации, а не по количеству логотипов.",
      intro:
        "В презентации 2026 года указаны известные бренды профиля, фурнитуры, герметиков и стекла, входящие в экосистему поставок группы.",
      brands: ["SIEGENIA", "GU", "Roto", "KIN LONG", "XINYI GLASS", "XINGFA ALUMINIUM", "BAIYUN", "RUNAS"],
      note:
        "Названия приведены по корпоративной презентации. Наличие, техническая совместимость и включение подтверждаются в каждой спецификации; ни один бренд не подразумевается как обязательный для всех систем и заказов.",
    },
    cta: {
      eyebrow: "Проверить возможности под ваше производство",
      title: "Пришлите систему, оконную ведомость или требуемый формат поставки.",
      text: "До расчёта опытной партии мы определим состав профилей, обработку, документацию и ответственность локального производства.",
      primary: "Отправить технический запрос",
      secondary: "Смотреть форматы систем",
    },
  },
} as const;

export type AboutContent = (typeof aboutContent)[AboutLocale];
