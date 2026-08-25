import type { PageLocale } from "@/content/pages";

type SupplyStage = {
  code: string;
  title: string;
  fromPinde: string;
  local: string;
  fit: string;
};

export type FrpWindowProfilesSupplyContent = {
  locale: string;
  seo: { title: string; description: string; keywords: string[] };
  eyebrow: string;
  title: string;
  intro: string;
  buyerNote: string;
  formatsTitle: string;
  formatsIntro: string;
  formats: SupplyStage[];
  labels: { fromPinde: string; local: string; fit: string };
  qualificationTitle: string;
  qualificationIntro: string;
  qualification: { title: string; description: string }[];
  inputsTitle: string;
  inputs: string[];
  complianceTitle: string;
  compliance: string;
  faqs: { question: string; answer: string }[];
  relatedTitle: string;
  related: { href: string; title: string; description: string }[];
  ctaTitle: string;
  cta: string;
};

export const frpWindowProfilesSupplyContent: Record<PageLocale, FrpWindowProfilesSupplyContent> = {
  en: {
    locale: "en_US",
    seo: {
      title: "FRP Window Profiles & Glass-Free CKD Kits | PINDÉ",
      description:
        "Pultruded FRP window profiles, machined components and glass-free CKD kits for qualified local window and sliding-door fabrication.",
      keywords: [
        "FRP window profiles",
        "fiberglass window profile supplier",
        "pultruded window profiles",
        "FRP window profile manufacturer",
        "glass-free CKD window kits",
        "fiberglass window fabrication system",
      ],
    },
    eyebrow: "B2B supply for window fabricators",
    title: "FRP window profiles and glass-free CKD kits",
    intro:
      "PINDÉ supplies qualified FRP window-system materials to manufacturers, importers and project fabricators. The scope can stop at long profiles, include cut-to-length machining, or reach an opening-by-opening CKD kit without insulating glass. Final glazing, assembly, conformity and installation can remain in the destination market.",
    buyerNote:
      "This is a B2B profile and fabrication-system offer, not an installed retail-window service. A project starts from the target system, window schedule, factory capability and destination requirements.",
    formatsTitle: "Choose the fabrication responsibility split",
    formatsIntro:
      "The three formats use the same released reference build. They differ in which cutting, machining and kit-preparation operations are completed in Chongqing.",
    formats: [
      {
        code: "P1",
        title: "FRP system profile kit",
        fromPinde: "Pultruded frame, sash, mullion and bead profiles with seals, joints, connectors, BOM and fabrication documents.",
        local: "Cutting, drilling, bonding, fastening, hardware, glazing, final QA and installation.",
        fit: "An established fabricator with qualified composite-profile tooling and process control.",
      },
      {
        code: "P2",
        title: "Cut and machined FRP profiles",
        fromPinde: "Cutting-list optimisation, cut-to-length parts, drainage, hardware machining, corner preparation and part identification.",
        local: "Corner joining, seals, hardware, glazing, adjustment, finished-unit testing and installation.",
        fit: "A factory introducing FRP while retaining window assembly and glazing locally.",
      },
      {
        code: "P3",
        title: "Glass-free FRP CKD kit",
        fromPinde: "Machined parts packed by opening with seals, approved joints, agreed hardware and replacement items.",
        local: "Incoming inspection, final assembly, locally sourced insulating glass, conformity, commissioning and site work.",
        fit: "A paid pilot of 3–10 units, a scheduled project or a cell with limited profile machining.",
      },
    ],
    labels: { fromPinde: "From PINDÉ", local: "Kept local", fit: "Typical fit" },
    qualificationTitle: "Release a system before repeat supply",
    qualificationIntro:
      "A profile is only one part of an operable window. PINDÉ therefore qualifies the system, manufacturing process and evidence together before repeat orders.",
    qualification: [
      { title: "1. System fit", description: "Review opening types, glass, loads, climate, target performance and factory equipment." },
      { title: "2. Reference build", description: "Freeze profile sections, BOM, joints, seals, hardware interfaces and drawing revision." },
      { title: "3. Paid pilot", description: "Inspect sections and corner specimens, then fabricate and test a typical 3–10 glass-free-kit batch." },
      { title: "4. Repeat release", description: "Review yield, dimensions, packing, assembly time and closure of non-conformities before scale-up." },
    ],
    inputsTitle: "Inputs required for an FRP profile quotation",
    inputs: [
      "Window and door schedule with size, quantity and opening type",
      "Glass build-up, spacer, hardware preference and colour",
      "Target Uw, wind, air, water, acoustic and design-temperature requirements",
      "Factory saws, drills, dust extraction, joining and glazing capability",
      "Preferred P1, P2 or P3 scope, annual volume and pilot timing",
      "Destination country, project location, delivery term and local conformity party",
    ],
    complianceTitle: "Profiles, windows and market approval are different scopes",
    compliance:
      "A structural pultruded-profile standard does not by itself approve a finished window. The ordered frame, glass, hardware, seals, dimensions and installation determine the whole-unit test and conformity scope. For EAEU destinations, the local applicant, laboratory, classification, samples and labelling are agreed for the actual supply form before shipment.",
    faqs: [
      { question: "Does PINDÉ sell FRP window profiles without finished glass?", answer: "Yes. P1 supplies system materials, P2 adds cutting and machining, and P3 supplies an opening-by-opening glass-free CKD kit. The exact scope is fixed in the quotation and BOM." },
      { question: "What is the minimum order for an FRP window system?", answer: "A new programme normally starts with profile and corner samples followed by a paid pilot of about 3–10 glass-free units. Repeat-order quantities are set after the pilot and packing review rather than claimed as one universal MOQ." },
      { question: "Can insulating glass be sourced in the destination market?", answer: "Yes. Local glazing can reduce transport risk and align the unit with local glass requirements, provided the build matches the released thickness, weight, edge and thermal specification." },
      { question: "How is FRP window-profile pricing prepared?", answer: "Pricing uses the profile kg or metres, opening schedule, machining, joints, seals, hardware scope, packing, test work and delivery term. A drawing or schedule is required for a comparable quotation." },
    ],
    relatedTitle: "Systems and engineering references",
    related: [
      { href: "/systems/frp/fd90", title: "FD90 full-FRP window", description: "90 mm casement and tilt-turn platform with configuration-specific PHI evidence." },
      { href: "/systems/frp/fdtl140", title: "FDTL140 full-FRP sliding door", description: "140 mm side-press platform for qualified large openings." },
      { href: "/engineering/fiberglass-windows", title: "Fiberglass-window buyer guide", description: "Understand construction, price inputs, benefits and limits before RFQ." },
    ],
    ctaTitle: "Ready to define the first FRP profile or CKD batch?",
    cta: "Send the schedule and factory capability",
  },
  ru: {
    locale: "ru_RU",
    seo: {
      title: "Стеклопластиковые оконные профили и CKD | PINDÉ",
      description:
        "Пултрузионные FRP-профили, обработанные детали и CKD без стеклопакетов для квалифицированного локального производства окон и дверей.",
      keywords: [
        "стеклопластиковый оконный профиль",
        "оконный профиль из стеклопластика",
        "производитель стеклопластиковых оконных профилей",
        "пултрузионный профиль для окон",
        "CKD комплект окон без стеклопакета",
        "профили FRP для производства окон",
      ],
    },
    eyebrow: "B2B-поставка для производителей окон",
    title: "Стеклопластиковые оконные профили и CKD без стеклопакетов",
    intro:
      "PINDÉ поставляет квалифицированные материалы оконных систем FRP производителям, импортёрам и проектным переработчикам. Объём может ограничиваться длинномерными профилями, включать резку и обработку либо доходить до CKD по каждому проёму без стеклопакета. Остекление, финальная сборка, соответствие и монтаж могут оставаться в стране назначения.",
    buyerNote:
      "Это B2B-предложение профильной системы для производства, а не установка розничных окон. Проект начинается с выбранной системы, ведомости проёмов, возможностей завода и требований страны назначения.",
    formatsTitle: "Распределите производственные операции",
    formatsIntro:
      "Во всех трёх форматах используется одна утверждённая эталонная конструкция. Отличается место выполнения раскроя, механической обработки и комплектации.",
    formats: [
      {
        code: "P1",
        title: "Комплект системных профилей FRP",
        fromPinde: "Пултрузионные профили коробки, створки, импоста и штапика, уплотнения, стыки, соединители, BOM и технологические документы.",
        local: "Резка, сверление, склеивание, крепёж, фурнитура, стеклопакеты, финальный контроль и монтаж.",
        fit: "Производство с квалифицированной оснасткой и процессами обработки композитного профиля.",
      },
      {
        code: "P2",
        title: "FRP-профили в размер с обработкой",
        fromPinde: "Оптимизация раскроя, детали в размер, водоотвод, обработка под фурнитуру, подготовка углов и маркировка.",
        local: "Угловая сборка, уплотнения, фурнитура, остекление, регулировка, испытания и монтаж.",
        fit: "Завод, внедряющий FRP и сохраняющий у себя сборку окна и стеклопакеты.",
      },
      {
        code: "P3",
        title: "CKD-комплект FRP без стеклопакета",
        fromPinde: "Обработанные детали по каждому проёму, уплотнения, утверждённые стыки, согласованная фурнитура и запасные элементы.",
        local: "Входной контроль, финальная сборка, местные стеклопакеты, соответствие, регулировка и монтаж.",
        fit: "Платная партия 3–10 изделий, проектный заказ или участок с ограниченной обработкой профиля.",
      },
    ],
    labels: { fromPinde: "От PINDÉ", local: "На месте", fit: "Кому подходит" },
    qualificationTitle: "Выпустите систему до регулярной поставки",
    qualificationIntro:
      "Профиль — только одна часть открывающегося окна. Поэтому до повторных заказов PINDÉ совместно квалифицирует систему, производственный процесс и доказательную базу.",
    qualification: [
      { title: "1. Соответствие системы", description: "Проверяем открывание, стекло, нагрузки, климат, целевые показатели и оборудование завода." },
      { title: "2. Эталонная конструкция", description: "Фиксируем сечения, BOM, стыки, уплотнения, интерфейсы фурнитуры и ревизию чертежей." },
      { title: "3. Платный пилот", description: "Проверяем сечения и угловые образцы, затем собираем и испытываем 3–10 комплектов без стекла." },
      { title: "4. Регулярный выпуск", description: "До роста объёма оцениваем выход годных, размеры, упаковку, время сборки и закрытие несоответствий." },
    ],
    inputsTitle: "Данные для расчёта оконного профиля FRP",
    inputs: [
      "Ведомость окон и дверей с размерами, количеством и открыванием",
      "Стеклопакет, дистанционная рамка, фурнитура и цвет",
      "Целевые Uw, ветер, воздух, вода, акустика и расчётная температура",
      "Пилы, сверление, удаление пыли, угловая сборка и остекление на заводе",
      "Формат P1, P2 или P3, годовой объём и сроки опытной партии",
      "Страна и город проекта, базис доставки и местная сторона соответствия",
    ],
    complianceTitle: "Профиль, готовое окно и допуск рынка — разные области",
    compliance:
      "Стандарт на конструкционный пултрузионный профиль сам по себе не разрешает готовое окно. Область испытаний определяют заказная рама, стекло, фурнитура, уплотнения, размеры и монтаж. Для стран ЕАЭС до отгрузки согласуют местного заявителя, лабораторию, классификацию, образцы и маркировку фактической формы поставки.",
    faqs: [
      { question: "Поставляет ли PINDÉ оконные профили FRP без готового стеклопакета?", answer: "Да. P1 включает системные материалы, P2 добавляет резку и обработку, P3 представляет CKD без стекла по каждому проёму. Точный объём фиксируют в предложении и BOM." },
      { question: "Какой минимальный заказ для оконной системы FRP?", answer: "Новая программа обычно начинается с образцов профиля и углов, затем следует платная партия примерно из 3–10 комплектов без стекла. Повторный объём устанавливают после пилота и проверки упаковки, а не как единый MOQ для всех проектов." },
      { question: "Можно ли купить стеклопакеты в стране назначения?", answer: "Да. Местное остекление снижает транспортный риск и учитывает национальные требования к стеклу, если соблюдены выпущенные толщина, масса, край и теплотехническая спецификация." },
      { question: "Как рассчитывается цена оконного профиля FRP?", answer: "Расчёт учитывает массу или метраж профиля, ведомость проёмов, обработку, стыки, уплотнения, фурнитуру, упаковку, испытания и доставку. Для сравнимой цены нужен чертёж или ведомость." },
    ],
    relatedTitle: "Системы и инженерные материалы",
    related: [
      { href: "/systems/frp/fd90", title: "Полностью FRP окно FD90", description: "Поворотная и поворотно-откидная система 90 мм с доказательной базой PHI для конкретной комплектации." },
      { href: "/systems/frp/fdtl140", title: "Раздвижная дверь FDTL140", description: "Система с прижимом и полностью FRP коробкой 140 мм для квалифицированных крупных проёмов." },
      { href: "/engineering/fiberglass-windows", title: "Руководство по стеклопластиковым окнам", description: "Конструкция, факторы цены, преимущества и ограничения до отправки RFQ." },
    ],
    ctaTitle: "Готовы определить первую партию профиля FRP или CKD?",
    cta: "Отправить ведомость и возможности производства",
  },
};
