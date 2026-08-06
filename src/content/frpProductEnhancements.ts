import type { ProductFaq, ProductPageLocale } from "@/content/aluminiumProductSeo";

export type FrpProductSlug = "xd75" | "pd95" | "fd90" | "fdtl140";

export const frpProductLinks: {
  slug: FrpProductSlug;
  name: string;
  type: Record<ProductPageLocale, string>;
}[] = [
  { slug: "xd75", name: "PD75", type: { en: "75mm aluminium-composite window", ru: "Алюминиево-композитное окно 75 мм" } },
  { slug: "pd95", name: "PD95", type: { en: "95mm passive aluminium-composite window", ru: "Пассивное алюминиево-композитное окно 95 мм" } },
  { slug: "fd90", name: "FD90", type: { en: "PHI-certified full-FRP window", ru: "Сертифицированное PHI окно полностью FRP" } },
  { slug: "fdtl140", name: "FDTL140", type: { en: "140mm full-FRP sliding door", ru: "Раздвижная дверь полностью FRP 140 мм" } },
];

export const frpProductFaqs: Record<FrpProductSlug, Record<ProductPageLocale, ProductFaq[]>> = {
  xd75: {
    en: [
      {
        question: "Is PD75 a full-FRP window frame?",
        answer: "No. PD75 is an aluminium-composite window system. A 45mm pultruded GRPU Ultra FRP Core structurally connects the inner and outer aluminium shells and provides a low-conductivity thermal path.",
      },
      {
        question: "What are the key PD75 profile dimensions?",
        answer: "PD75 has a nominal 75mm platform depth and a 45mm Ultra FRP Core. Final sash, glazing, hardware and connection details are fixed for the ordered configuration.",
      },
      {
        question: "How can a fabricator qualify the PD75 system?",
        answer: "PINDÉ starts with drawings, BOM and destination requirements, then qualifies material traceability, corner connections and the selected whole-window build before repeat profile or glass-free CKD supply.",
      },
    ],
    ru: [
      {
        question: "Является ли PD75 полностью стеклокомпозитным окном?",
        answer: "Нет. PD75 — алюминиево-композитная система. Пултрузионный сердечник Ultra FRP Core шириной 45 мм конструктивно соединяет внутреннюю и наружную алюминиевые оболочки и формирует низкотеплопроводный терморазрыв.",
      },
      {
        question: "Каковы основные размеры профиля PD75?",
        answer: "Номинальная глубина платформы составляет 75 мм, ширина Ultra FRP Core — 45 мм. Створка, стеклопакет, фурнитура и соединения фиксируются для выбранной комплектации.",
      },
      {
        question: "Как производителю квалифицировать систему PD75?",
        answer: "PINDÉ согласовывает чертежи, BOM и требования рынка, затем проверяет прослеживаемость материалов, угловые соединения и выбранную конструкцию окна до серийной поставки профилей или CKD без стекла.",
      },
    ],
  },
  pd95: {
    en: [
      {
        question: "What type of window system is PD95?",
        answer: "PD95 is a nominal 95mm aluminium-composite window platform with an 80mm insulated profile zone. It is not presented as a full-FRP frame.",
      },
      {
        question: "Which PD95 performance references are documented?",
        answer: "The source catalogue records a triple-glazed reference, whole-window thermal value of 0.98 W/(m²·K), Grade 9 wind resistance and 39dB acoustic insulation for the identified specimen. These are not universal project guarantees.",
      },
      {
        question: "What must be verified before ordering PD95?",
        answer: "The released BOM, insulated-core material, glazing, hardware, dimensions, test scope and current destination-market evidence must be confirmed before production or claims are approved.",
      },
    ],
    ru: [
      {
        question: "К какому типу оконных систем относится PD95?",
        answer: "PD95 — алюминиево-композитная оконная платформа номинальной глубиной 95 мм с теплоизоляционной зоной 80 мм. Она не заявляется как полностью FRP-рама.",
      },
      {
        question: "Какие показатели PD95 документированы?",
        answer: "В исходном каталоге для указанного образца приведены тройной стеклопакет, Uw 0,98 Вт/(м²·K), класс ветровой стойкости 9 и звукоизоляция 39 дБ. Эти значения не являются гарантией для любой комплектации.",
      },
      {
        question: "Что нужно проверить перед заказом PD95?",
        answer: "До производства и публикации заявлений необходимо подтвердить BOM, материал теплоизоляционной зоны, стеклопакет, фурнитуру, размеры, область испытаний и актуальные документы целевого рынка.",
      },
    ],
  },
  fd90: {
    en: [
      {
        question: "Is the FD90 FRP window PHI certified?",
        answer: "Yes. Passive House Institute certificate 2491wi03 covers the Fengdu Passive GFRP 90 Series for the cool, temperate climate zone at efficiency class phB, subject to the certificate scope and controlled configuration.",
      },
      {
        question: "What is the certified FD90 whole-window thermal value?",
        answer: "The certificate records Uw 0.78 W/(m²·K) for the identified 90mm full-FRP window configuration. Ordered size, glazing, spacer, hardware, joints and installation must match the qualified build or be reverified.",
      },
      {
        question: "Can FD90 be supplied for local window fabrication?",
        answer: "Yes, after project qualification. PINDÉ can scope system profiles or glass-free CKD supply with the controlled BOM, connection method, fabrication instructions and evidence pack required for the destination project.",
      },
    ],
    ru: [
      {
        question: "Сертифицировано ли окно FRP FD90 институтом PHI?",
        answer: "Да. Сертификат Passive House Institute 2491wi03 распространяется на Fengdu Passive GFRP 90 Series для прохладной умеренной зоны, класс эффективности phB, при соблюдении области сертификата и контролируемой комплектации.",
      },
      {
        question: "Какой Uw сертифицирован для окна FD90?",
        answer: "В сертификате указан Uw 0,78 Вт/(м²·K) для идентифицированной 90-мм системы полностью FRP. Размер, стеклопакет, дистанционная рамка, фурнитура, стыки и монтаж должны соответствовать квалифицированной конструкции либо проверяться повторно.",
      },
      {
        question: "Можно ли поставлять FD90 для локального производства окон?",
        answer: "Да, после квалификации проекта. PINDÉ может предложить системные профили или CKD без стекла с контролируемым BOM, методом соединения, производственными инструкциями и доказательной базой проекта.",
      },
    ],
  },
  fdtl140: {
    en: [
      {
        question: "What is an FDTL140 side-press sliding door?",
        answer: "FDTL140 combines sliding travel with a side-pressure closing action that compresses the seals at closure. The hardware and sealing schedule must be qualified for the ordered opening.",
      },
      {
        question: "What are the key FDTL140 capacity references?",
        answer: "The catalogue lists a 140mm full-FRP frame, up to 200kg leaf capacity and a best listed whole-door Uw of 1.02 W/(m²·K), subject to the identified glazing and configuration.",
      },
      {
        question: "What must be checked before ordering FDTL140?",
        answer: "PINDÉ verifies opening size, glass weight, rollers, locking hardware, drainage, seals, corner joints, installation node and destination-market test requirements before release.",
      },
    ],
    ru: [
      {
        question: "Что означает боковой прижим в двери FDTL140?",
        answer: "FDTL140 сочетает раздвижное движение с боковым прижимом створки, который сжимает уплотнения при закрывании. Фурнитура и схема уплотнений квалифицируются для конкретного проёма.",
      },
      {
        question: "Каковы основные справочные показатели FDTL140?",
        answer: "В каталоге указаны рама полностью FRP глубиной 140 мм, створка до 200 кг и лучший Uw готовой двери 1,02 Вт/(м²·K) для идентифицированной комплектации и стеклопакета.",
      },
      {
        question: "Что проверяется перед заказом FDTL140?",
        answer: "PINDÉ проверяет размер проёма, массу стекла, ролики, замки, дренаж, уплотнения, угловые соединения, монтажный узел и требования к испытаниям целевого рынка.",
      },
    ],
  },
};
