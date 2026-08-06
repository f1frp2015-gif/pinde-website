import type { PageLocale } from "@/content/pages";

export type Pd95Content = {
  locale: string;
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
  identityTitle: string;
  identity: string;
  benefitsTitle: string;
  benefits: { kicker: string; title: string; description: string }[];
  specsTitle: string;
  specs: { label: string; value: string }[];
  drawingsTitle: string;
  drawingsIntro: string;
  performanceTitle: string;
  performanceIntro: string;
  performanceColumns: {
    glazing: string;
    thermal: string;
    wind: string;
    air: string;
    water: string;
    acoustic: string;
  };
  performance: {
    glazing: string;
    thermal: string;
    wind: string;
    air: string;
    water: string;
    acoustic: string;
  }[];
  certificateTitle: string;
  certificateIntro: string;
  certificateStatus: string;
  certificateFacts: { label: string; value: string }[];
  certificateNote: string;
  certificateDownload: string;
  note: string;
  ctaTitle: string;
  cta: string;
  backLabel: string;
};

export const pd95Content: Record<PageLocale, Pd95Content> = {
  en: {
    locale: "en_US",
    seo: {
      title: "PD95 Aluminium-Composite Window | 95mm System | PINDÉ",
      description:
        "PD95 is a 95 mm aluminium-composite window system with an 80 mm insulated profile zone and catalogue data for one triple-glazed window build.",
      keywords: [
        "PD95 window system",
        "95mm passive window profile",
        "80mm thermal break window",
        "aluminium composite window system",
        "triple glazed passive window",
        "high insulation window profile",
      ],
    },
    title: "PD95 95 mm aluminium-composite window system",
    eyebrow: "FRP family · aluminium-composite · PD95 series",
    intro:
      "PD95 is an aluminium-composite window system with a nominal construction depth of 95 mm and an 80 mm insulated profile zone. The source catalogue includes one triple-glazed reference build. The historical Passive House document shown below expired in 2024 and cannot be used as a current PD95 certificate.",
    supplyStatus: "Historical certificate only · current evidence required",
    heroCards: [
      { label: "Nominal system depth", value: "95 mm" },
      { label: "Insulated profile width", value: "80 mm" },
      { label: "Catalogue thermal value", value: "0.98 W/(m²·K)" },
      { label: "Catalogue acoustic value", value: "39 dB" },
    ],
    identityTitle: "The deeper aluminium-composite option",
    identity:
      "PD95 is grouped with PD75 because both use an aluminium-composite thermal-break architecture rather than a full-FRP frame. The supplied drawings identify an 80mm insulated profile zone and retain XMG95ES component codes for source traceability. The exact polymer or FRP formulation is not stated in the supplied sheets, so Ultra FRP Core material claims remain subject to BOM and material-certificate confirmation before release.",
    benefitsTitle: "Construction and source data",
    benefits: [
      {
        kicker: "Thermal path",
        title: "80mm insulated zone",
        description:
          "The wide thermal-break geometry separates the interior and exterior aluminium sections and lengthens the conductive heat-flow path. Final whole-window performance still depends on the verified frame build, spacers, glass, seals and installation node.",
      },
      {
        kicker: "Glazing",
        title: "Triple-glazed IGU reference",
        description:
          "The source catalogue pairs the system with 6Low-E + 16Ar + 6 + 16Ar + 6 glazing. Glass make-up, coatings, gas fill, edge system and panel dimensions must be respecified for each destination project.",
      },
      {
        kicker: "Envelope",
        title: "Weather and acoustic references",
        description:
          "The supplied specimen table records Grade 9 wind resistance, Grade 8 airtightness, Grade 5 watertightness and 39dB acoustic insulation. These values belong to the identified catalogue configuration, not every PD95 build.",
      },
    ],
    specsTitle: "System reference specifications",
    specs: [
      { label: "Public series name", value: "PD95" },
      { label: "Source identifiers", value: "ES95 / XMG95ES component family" },
      { label: "Construction", value: "Aluminium-composite frame with an insulated structural zone" },
      { label: "Nominal frame construction depth", value: "95 mm; source frame sections list 95.5–95.8 mm" },
      { label: "Insulated profile width", value: "80 mm" },
      { label: "Aluminium profile wall", value: "1.8 mm" },
      { label: "Catalogue frame Uf reference", value: "Minimum 0.73 W/(m²·K), as stated in the source sheet" },
      { label: "Catalogue glazing range", value: "Ug 0.8–1.1 W/(m²·K), depending on configuration" },
      { label: "Joint appearance", value: "Source sheet describes a visually continuous welded joint; process qualification required" },
      { label: "Supply route", value: "Qualified system profiles or glass-free CKD package" },
    ],
    drawingsTitle: "PD95 system architecture",
    drawingsIntro:
      "The supplied sections show the frame, mullion and flush-sash profiles, an 80mm thermal-break profile width and principal XMG95ES component references. The source identifiers remain visible for technical traceability; PD95 is the public series name used by PINDÉ.",
    performanceTitle: "Source-catalogue performance references",
    performanceIntro:
      "The supplied catalogue records the following values for a 6Low-E + 16Ar + 6 + 16Ar + 6 specimen. They must be tied to the original test reports before quotation and must not be transferred to a different size, glass, hardware, fabrication process or test standard.",
    performanceColumns: {
      glazing: "Catalogue glazing",
      thermal: "Thermal / grade",
      wind: "Wind",
      air: "Air",
      water: "Water",
      acoustic: "Acoustic",
    },
    performance: [
      {
        glazing: "6Low-E + 16Ar + 6 + 16Ar + 6",
        thermal: "0.98 W/(m²·K) · Grade 10",
        wind: "P3 ≥ 5.0 · Grade 9",
        air: "±q1 ≤ 0.42; ±q2 ≤ 0.70 · Grade 8",
        water: "350 Pa · Grade 5",
        acoustic: "39 dB · Grade 4",
      },
    ],
    certificateTitle: "Historical Passive House certificate reference",
    certificateIntro:
      "The supplied Passive House Institute document identifies the certified component as XMG ES95 from Guangdong Sightmengroup Energy Conservation Technology Co., LTD. It is retained here as historical evidence for the source system and is not presented as a current PD95 certificate.",
    certificateStatus: "Expired 31 December 2024 — renewal required",
    certificateFacts: [
      { label: "Certificate", value: "2063wi03" },
      { label: "Source product", value: "XMG ES95" },
      { label: "Climate / class", value: "Cool, temperate · phB" },
      { label: "Certificate Uw", value: "0.80 W/(m²·K)" },
      { label: "Installed Uw", value: "≤ 0.85 W/(m²·K), with Ug 0.70 W/(m²·K)" },
      { label: "Hygiene criterion", value: "fRsi=0.25 ≥ 0.70" },
    ],
    certificateNote:
      "Before any Passive House claim is used in a quotation, the renewed certificate, current database entry, tested BOM and the identity mapping between PD95 and XMG ES95 must all be verified.",
    certificateDownload: "Download the PHI certificate PDF",
    note:
      "Qualification gate: catalogue and historical certificate values apply only to the identified specimens and evidence scope. Final thermal, air, water, wind, acoustic, durability and certification claims require current reports for the ordered PD95 window and destination-market method.",
    ctaTitle: "Evaluate PD95 for your project",
    cta: "Request the PD95 evidence pack",
    backLabel: "Back to FRP systems",
  },
  ru: {
    locale: "ru_RU",
    seo: {
      title: "Алюминиево-композитное окно PD95 95 мм для пассивных зданий | PINDÉ",
      description:
        "Оконная система PD95 с монтажной глубиной 95 мм, теплоизоляционной зоной 80 мм и каталожными данными для одного оконного блока с двухкамерным стеклопакетом.",
      keywords: [
        "оконная система PD95",
        "пассивное окно 95 мм",
        "окно с теплоизоляционной вставкой 80 мм",
        "алюминиево-композитное окно",
        "окно с двухкамерным стеклопакетом",
        "энергоэффективный оконный профиль",
      ],
    },
    title: "Алюминиево-композитная оконная система PD95 95 мм",
    eyebrow: "Семейство FRP · алюминиево-композитная система · PD95",
    intro:
      "PD95 — алюминиево-композитная оконная система с номинальной монтажной глубиной 95 мм и теплоизоляционной зоной шириной 80 мм. В исходном каталоге приведена одна конструкция с двухкамерным стеклопакетом. Показанный ниже исторический документ Passive House истёк в 2024 году и не является действующим сертификатом PD95.",
    supplyStatus: "Только исторический сертификат · требуются актуальные документы",
    heroCards: [
      { label: "Номинальная глубина", value: "95 мм" },
      { label: "Ширина теплоизоляционной зоны", value: "80 мм" },
      { label: "Каталожная теплотехника", value: "0,98 Вт/(м²·K)" },
      { label: "Каталожная звукоизоляция", value: "39 дБ" },
    ],
    identityTitle: "Алюминиево-композитная конструкция PD95",
    identity:
      "PD95 объединена с PD75, поскольку обе системы используют алюминиево-композитные профили, а не полностью стеклокомпозитные коробку и створку. На предоставленных чертежах указана теплоизоляционная зона шириной 80 мм; коды XMG95ES сохранены для прослеживаемости источника. Точный состав полимера или FRP в материалах не указан, поэтому состав сердечника можно заявлять только после проверки спецификации комплектации (BOM) и сертификатов материала.",
    benefitsTitle: "Конструкция и исходные данные",
    benefits: [
      {
        kicker: "Тепловой путь",
        title: "Теплоизоляционная зона 80 мм",
        description:
          "Широкая теплоизоляционная зона разделяет внутреннюю и наружную алюминиевые части и удлиняет путь теплопередачи. Итоговый показатель оконного блока зависит от подтверждённой конструкции коробки и створки, дистанционной рамки, стеклопакета, уплотнений и монтажного узла.",
      },
      {
        kicker: "Остекление",
        title: "Справочный двухкамерный стеклопакет",
        description:
          "В исходном каталоге система показана со стеклопакетом 6Low-E + 16Ar + 6 + 16Ar + 6. Стекло, покрытия, заполнение газом, кромочная система и размеры пересогласуются для каждого проекта.",
      },
      {
        kicker: "Оболочка",
        title: "Погода и акустика",
        description:
          "Таблица образца указывает класс 9 по ветровой нагрузке, класс 8 по воздухопроницаемости, класс 5 по водонепроницаемости и 39 дБ звукоизоляции. Эти значения относятся к указанной каталожной комплектации.",
      },
    ],
    specsTitle: "Справочные характеристики системы",
    specs: [
      { label: "Публичное название", value: "PD95" },
      { label: "Исходные обозначения", value: "ES95 / семейство компонентов XMG95ES" },
      { label: "Конструкция", value: "Алюминиево-композитные профили с теплоизоляционной зоной" },
      { label: "Номинальная монтажная глубина", value: "95 мм; на чертежах коробки указано 95,5–95,8 мм" },
      { label: "Ширина теплоизоляционного профиля", value: "80 мм" },
      { label: "Стенка алюминиевого профиля", value: "1,8 мм" },
      { label: "Справочный Uf коробки", value: "Минимум 0,73 Вт/(м²·K) по исходному листу" },
      { label: "Диапазон Ug стеклопакета", value: "0,8–1,1 Вт/(м²·K) в зависимости от конфигурации" },
      { label: "Внешний вид соединения", value: "Исходный лист описывает визуально непрерывный сварной стык; требуется квалификация процесса" },
      { label: "Форма поставки", value: "Квалифицированная система профилей или CKD без стеклопакета" },
    ],
    drawingsTitle: "Архитектура системы PD95",
    drawingsIntro:
      "На предоставленных сечениях показаны коробка, импост, створка вровень, теплоизоляционный профиль шириной 80 мм и основные коды XMG95ES. Исходные обозначения сохранены для технической прослеживаемости; PD95 — публичное название серии PINDÉ.",
    performanceTitle: "Справочные показатели исходного каталога",
    performanceIntro:
      "В предоставленном каталоге приведены следующие значения для образца со стеклопакетом 6Low-E + 16Ar + 6 + 16Ar + 6. До предложения они должны быть связаны с оригинальными протоколами и не переносятся на другой размер, стеклопакет, фурнитуру, технологию сборки или стандарт испытаний.",
    performanceColumns: {
      glazing: "Стеклопакет каталога",
      thermal: "Теплотехника / класс",
      wind: "Ветер",
      air: "Воздух",
      water: "Вода",
      acoustic: "Звук",
    },
    performance: [
      {
        glazing: "6Low-E + 16Ar + 6 + 16Ar + 6",
        thermal: "0,98 Вт/(м²·K) · класс 10",
        wind: "P3 ≥ 5,0 · класс 9",
        air: "±q1 ≤ 0,42; ±q2 ≤ 0,70 · класс 8",
        water: "350 Па · класс 5",
        acoustic: "39 дБ · класс 4",
      },
    ],
    certificateTitle: "Историческая справка о сертификате Passive House",
    certificateIntro:
      "В предоставленном документе Passive House Institute сертифицированный компонент указан как XMG ES95 производства Guangdong Sightmengroup Energy Conservation Technology Co., LTD. Документ сохранён как историческое подтверждение исходной системы и не представлен как действующий сертификат PD95.",
    certificateStatus: "Срок истёк 31 декабря 2024 года — требуется продление",
    certificateFacts: [
      { label: "Сертификат", value: "2063wi03" },
      { label: "Исходный продукт", value: "XMG ES95" },
      { label: "Климат / класс", value: "Умеренно-холодный · phB" },
      { label: "Uw сертификата", value: "0,80 Вт/(м²·K)" },
      { label: "Uw после монтажа", value: "≤ 0,85 Вт/(м²·K) при Ug 0,70 Вт/(м²·K)" },
      { label: "Гигиенический критерий", value: "fRsi=0,25 ≥ 0,70" },
    ],
    certificateNote:
      "До включения утверждений Passive House в предложение необходимо проверить продлённый сертификат, актуальную запись в базе, испытанную спецификацию комплектации (BOM) и соответствие PD95 исходной системе XMG ES95.",
    certificateDownload: "Скачать сертификат PHI в PDF",
    note:
      "Квалификационный барьер: каталожные показатели и исторический сертификат относятся только к идентифицированным образцам и объёму доказательств. Итоговые показатели теплотехники, воздуха, воды, ветра, звука, долговечности и сертификации требуют актуальных документов для заказанного окна PD95 и метода целевого рынка.",
    ctaTitle: "Оценить PD95 для вашего проекта",
    cta: "Запросить доказательный пакет PD95",
    backLabel: "Назад к системам FRP",
  },
};
