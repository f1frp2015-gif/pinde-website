import type { Product } from "@/data/products";

export type ProductPageLocale = "en" | "ru";
export type ProductFaq = { question: string; answer: string };

type SeoFields = { title: string; heading: string; keywords: string[] };
type LocalizedSeo = Record<ProductPageLocale, SeoFields>;

function defineSeo(
  enTitle: string,
  enHeading: string,
  enKeywords: string[],
  ruTitle: string,
  ruHeading: string,
  ruKeywords: string[],
): LocalizedSeo {
  return {
    en: { title: enTitle, heading: enHeading, keywords: enKeywords },
    ru: { title: ruTitle, heading: ruHeading, keywords: ruKeywords },
  };
}

const aluminiumProductSeo: Record<string, LocalizedSeo> = {
  "a65-casement-window": defineSeo(
    "A65 Aluminium Casement Window System | Thermal Break | PINDÉ",
    "A65 thermally broken aluminium casement window system",
    ["aluminium casement window system", "65mm thermal break window", "A65 aluminium window profile"],
    "Алюминиевое окно A65 с терморазрывом | PINDÉ",
    "Алюминиевая оконная система A65 с терморазрывом",
    ["алюминиевая оконная система A65", "окно 65 мм с терморазрывом", "алюминиевый профиль для створчатого окна"],
  ),
  "a110-casement-window": defineSeo(
    "A110 110mm Aluminium Casement Window System | PINDÉ",
    "A110 110mm thermal break aluminium casement window system",
    ["110mm aluminium casement window", "wide thermal break window profile", "A110 aluminium window system"],
    "Алюминиевое окно A110 110 мм с терморазрывом | PINDÉ",
    "Алюминиевая оконная система A110 110 мм с терморазрывом",
    ["алюминиевое окно A110 110 мм", "широкий оконный профиль с терморазрывом", "оконная система A110"],
  ),
  "a120-casement-window": defineSeo(
    "A120 Passive Aluminium Window System | 120mm Profile | PINDÉ",
    "A120 120mm passive thermal break aluminium window system",
    ["120mm aluminium window system", "passive house aluminium window profile", "A120 thermal break window"],
    "Пассивная алюминиевая система A120 120 мм | PINDÉ",
    "Алюминиевая оконная система A120 120 мм для пассивных зданий",
    ["алюминиевая оконная система A120 120 мм", "алюминиевый профиль для пассивного дома", "окно A120 с терморазрывом"],
  ),
  "s175-push-out-window": defineSeo(
    "S175 Aluminium Push-Out Window | Heavy-Duty System | PINDÉ",
    "S175 175mm heavy-duty aluminium push-out window system",
    ["aluminium push out window system", "heavy duty aluminium window profile", "S175 parallel push out window"],
    "Выдвижное алюминиевое окно S175 175 мм | PINDÉ",
    "Усиленная алюминиевая система S175 175 мм с параллельным выдвижением",
    ["алюминиевое окно с параллельным выдвижением", "усиленный оконный профиль S175", "выдвижное окно 175 мм"],
  ),
  "s132-side-pressed-window": defineSeo(
    "S132 Aluminium Side-Pressed Window | 132mm Profile | PINDÉ",
    "S132 132mm thermally broken aluminium side-pressed window",
    ["aluminium side pressed window", "132mm aluminium window profile", "S132 thermal break window"],
    "Прижимное алюминиевое окно S132 132 мм | PINDÉ",
    "Алюминиевая оконная система S132 132 мм с боковым прижимом",
    ["алюминиевое окно с боковым прижимом", "оконный профиль S132 132 мм", "прижимная оконная система с терморазрывом"],
  ),
  "s96n-inward-casement-window": defineSeo(
    "S96N Inward Aluminium Window | Tilt-and-Turn Profile | PINDÉ",
    "S96N 96mm tilt-and-turn aluminium inward casement window",
    ["aluminium inward casement window", "tilt and turn aluminium profile", "S96N 96mm window system"],
    "Поворотно-откидное алюминиевое окно S96N 96 мм | PINDÉ",
    "Алюминиевая поворотно-откидная оконная система S96N 96 мм",
    ["алюминиевое поворотно-откидное окно", "оконный профиль S96N 96 мм", "алюминиевое окно с открыванием внутрь"],
  ),
  "s115-sliding-window": defineSeo(
    "S115 Aluminium Sliding Window System | 115mm Profile | PINDÉ",
    "S115 115mm thermal break aluminium sliding window system",
    ["aluminium sliding window system", "115mm sliding window profile", "S115 thermal break window"],
    "Раздвижная алюминиевая система S115 115 мм | PINDÉ",
    "Алюминиевая раздвижная оконная система S115 115 мм с терморазрывом",
    ["алюминиевая раздвижная оконная система", "раздвижной оконный профиль S115 115 мм", "раздвижное окно с терморазрывом"],
  ),
  "s126-sliding-window": defineSeo(
    "S126 Heavy-Duty Aluminium Sliding Window | PINDÉ",
    "S126 126mm heavy-duty aluminium sliding window system",
    ["heavy duty aluminium sliding window", "126mm window profile", "S126 aluminium sliding system"],
    "Усиленное раздвижное алюминиевое окно S126 | PINDÉ",
    "Усиленная алюминиевая раздвижная оконная система S126 126 мм",
    ["усиленное алюминиевое раздвижное окно", "оконный профиль S126 126 мм", "раздвижная алюминиевая система S126"],
  ),
  "s150-vertical-lifting-window": defineSeo(
    "S150 Aluminium Vertical Lifting Window System | PINDÉ",
    "S150 150mm thermal break aluminium vertical lifting window",
    ["aluminium vertical lifting window", "150mm aluminium window profile", "S150 electric lifting window"],
    "Вертикально-подъёмное алюминиевое окно S150 | PINDÉ",
    "Алюминиевая вертикально-подъёмная оконная система S150 150 мм",
    ["алюминиевое вертикально-подъёмное окно", "оконный профиль S150 150 мм", "электрическое подъёмное окно"],
  ),
  "a65-swing-door": defineSeo(
    "A65 Aluminium Swing Door System | Thermal Break Profile | PINDÉ",
    "A65 65mm thermal break aluminium swing door system",
    ["aluminium swing door system", "thermal break aluminium door profile", "A65 aluminium entrance door"],
    "Распашная алюминиевая дверь A65 с терморазрывом | PINDÉ",
    "Алюминиевая распашная дверная система A65 65 мм с терморазрывом",
    ["алюминиевая распашная дверная система", "дверной профиль A65 с терморазрывом", "алюминиевая входная дверь A65"],
  ),
  "ap187-50-sliding-door": defineSeo(
    "AP187 50 Aluminium Sliding Door | Slim Profile System | PINDÉ",
    "AP187 50 slim-profile aluminium sliding door system",
    ["aluminium sliding door profile system", "slim aluminium door profile", "AP187 50 sliding door"],
    "Раздвижная алюминиевая дверь AP187 50 | Узкий профиль | PINDÉ",
    "Алюминиевая раздвижная дверная система AP187 50 с узким профилем",
    ["алюминиевая раздвижная дверная система", "узкий алюминиевый дверной профиль", "раздвижная дверь AP187 50"],
  ),
  "ap187-88-sliding-door": defineSeo(
    "AP187 88 Heavy-Duty Aluminium Sliding Door | PINDÉ",
    "AP187 88 heavy-duty aluminium sliding door system",
    ["heavy duty aluminium sliding door", "88mm aluminium door profile", "AP187 88 sliding door"],
    "Усиленная раздвижная алюминиевая дверь AP187 88 | PINDÉ",
    "Усиленная алюминиевая раздвижная дверная система AP187 88",
    ["усиленная алюминиевая раздвижная дверь", "алюминиевый дверной профиль 88 мм", "раздвижная дверь AP187 88"],
  ),
  "s150-sliding-door": defineSeo(
    "S150 Aluminium Sliding Door | Thermal Break Profile | PINDÉ",
    "S150 150mm thermal break aluminium sliding door system",
    ["150mm aluminium sliding door", "thermal break patio door profile", "S150 aluminium door system"],
    "Раздвижная алюминиевая дверь S150 с терморазрывом | PINDÉ",
    "Алюминиевая раздвижная дверная система S150 150 мм с терморазрывом",
    ["алюминиевая раздвижная дверь 150 мм", "профиль терморазрывной двери для террасы", "дверная система S150"],
  ),
  "s93-heavy-duty-folding-door": defineSeo(
    "S93 Heavy-Duty Aluminium Folding Door System | PINDÉ",
    "S93 93mm heavy-duty thermal break aluminium folding door",
    ["aluminium folding door system", "heavy duty aluminium folding door", "S93 thermal break folding door"],
    "Усиленная складная алюминиевая дверь S93 | PINDÉ",
    "Усиленная складная алюминиевая дверная система S93 93 мм",
    ["алюминиевая складная дверная система", "усиленная алюминиевая дверь-гармошка", "складная дверь S93 с терморазрывом"],
  ),
  "perfect-system-non-interlocking-door": defineSeo(
    "Perfect System Aluminium Interior Sliding Door | PINDÉ",
    "Perfect System non-interlocking aluminium interior sliding door",
    ["aluminium interior door system", "non interlocking aluminium door", "Perfect System sliding door"],
    "Межкомнатная алюминиевая дверь Perfect System | PINDÉ",
    "Межкомнатная раздвижная алюминиевая дверь Perfect System без сцепления",
    ["алюминиевая межкомнатная дверная система", "раздвижная дверь без сцепления", "межкомнатная дверь Perfect System"],
  ),
  "perfect-system-phantom-door": defineSeo(
    "Perfect System Phantom Aluminium Sliding Door | PINDÉ",
    "Perfect System hidden phantom aluminium sliding door",
    ["aluminium phantom door", "hidden sliding aluminium door", "Perfect System suspended door"],
    "Скрытая алюминиевая дверь Phantom Perfect System | PINDÉ",
    "Скрытая подвесная алюминиевая дверь Phantom Perfect System",
    ["скрытая алюминиевая раздвижная дверь", "подвесная дверь без нижней направляющей", "дверь Phantom Perfect System"],
  ),
  "1645-bathroom-door": defineSeo(
    "1645 Aluminium Bathroom Door System | Interior Profile | PINDÉ",
    "1645 aluminium bathroom interior door system",
    ["aluminium bathroom door system", "interior aluminium door profile", "1645 waterproof bathroom door"],
    "Алюминиевая дверь для ванной 1645 | Межкомнатная система | PINDÉ",
    "Алюминиевая дверная система 1645 для ванной комнаты",
    ["алюминиевая дверь для ванной комнаты", "межкомнатный алюминиевый дверной профиль", "влагостойкая дверь 1645"],
  ),
  "perfect-system-opposite-direction-linkage": defineSeo(
    "Perfect System Opposite-Direction Aluminium Linkage Door | PINDÉ",
    "Perfect System opposite-direction aluminium linkage door",
    ["aluminium linkage door", "opposite direction aluminium door", "synchronised interior sliding door"],
    "Синхронная алюминиевая дверь Perfect System | PINDÉ",
    "Алюминиевая дверь Perfect System с синхронным встречным открыванием",
    ["алюминиевая синхронная раздвижная дверь", "дверь со встречным открыванием", "система связанных дверей Perfect System"],
  ),
  "perfect-system-folding-door": defineSeo(
    "Perfect System Aluminium Interior Folding Door | PINDÉ",
    "Perfect System aluminium interior folding door system",
    ["aluminium interior folding door", "folding aluminium door system", "Perfect System folding door"],
    "Складная алюминиевая дверь Perfect System | PINDÉ",
    "Межкомнатная складная алюминиевая дверь Perfect System",
    ["алюминиевая межкомнатная складная дверь", "складная алюминиевая дверная система", "дверь-гармошка Perfect System"],
  ),
};

function truncateAtWord(value: string, maximum = 158) {
  if (value.length <= maximum) return value;
  const shortened = value.slice(0, maximum + 1);
  return `${shortened.slice(0, shortened.lastIndexOf(" ")).replace(/[.,;:—-]+$/, "")}…`;
}

function specValue(product: Product, label: string) {
  return product.specs.find((spec) => spec.label.toLowerCase().includes(label))?.value;
}

function description(product: Product, locale: ProductPageLocale, heading: string) {
  if (locale === "en" && product.slug === "a65-casement-window") {
    return "65mm thermally broken aluminium casement window with PA66GF25 breaks and triple EPDM seals. System kit or glass-free CKD supply for fabricators.";
  }
  if (locale === "en") {
    const firstSentence = product.description.split(/(?<=\.)\s/)[0];
    return truncateAtWord(`${heading}. ${firstSentence}`);
  }

  const depth = specValue(product, "profile depth");
  const glazing = specValue(product, "max glass");
  const facts = [
    depth ? `глубина профиля ${depth}` : null,
    glazing ? `стеклопакет до ${glazing.replace("≤ ", "")}` : null,
  ].filter(Boolean).join(", ");
  return truncateAtWord(`${heading}${facts ? `: ${facts}` : ""}. Профили, компоненты и CKD-комплекты без стекла для локального производства.`);
}

function aluminiumFaqs(product: Product, locale: ProductPageLocale): ProductFaq[] {
  const depth = specValue(product, "profile depth");
  const glazing = specValue(product, "max glass");
  const alloy = specValue(product, "aluminum alloy") ?? "6063-T5";
  const thermalBreak = specValue(product, "thermal break") ?? (product.category === "interior-doors" ? null : "PA66GF25");
  const seals = specValue(product, "seals") ?? (product.category === "interior-doors" ? null : "EPDM");
  const firstSentence = product.description.split(/(?<=\.)\s/)[0];

  if (locale === "ru") {
    return [
      {
        question: depth ? `Какова глубина профиля системы ${product.name}?` : `Для каких задач предназначена система ${product.name}?`,
        answer: depth
          ? `Для ${product.name} указана глубина профиля ${depth}${glazing ? ` и толщина заполнения до ${glazing.replace("≤ ", "")}` : ""}. Значения подтверждаются по актуальному техническому листу.`
          : `${firstSentence} Размеры, схема створок и фурнитура фиксируются в техническом предложении.`,
      },
      {
        question: `Какие материалы применяются в системе ${product.name}?`,
        answer: product.category === "interior-doors"
          ? `Система использует алюминиевую конструкцию и скрытую или специализированную фурнитуру. Отделку и комплектующие согласовывают перед заказом.`
          : `В справочной конфигурации указаны алюминий ${alloy}${thermalBreak ? `, терморазрыв ${thermalBreak}` : ""}${seals ? ` и уплотнения ${seals}` : ""}. Итоговая спецификация зависит от проекта.`,
      },
      {
        question: `Можно ли заказать ${product.name} как комплект для локального производства?`,
        answer: "Да. PINDÉ проверяет размеры, схему открывания, стеклопакет, фурнитуру и требования проекта. Форматы поставки включают системные компоненты, обработанные профили и CKD-комплект без стекла.",
      },
    ];
  }

  return [
    {
      question: depth ? `What is the profile depth of the ${product.name}?` : `What is the ${product.name} designed for?`,
      answer: depth
        ? `${product.name} is listed with a profile depth of ${depth}${glazing ? ` and glazing capacity up to ${glazing.replace("≤ ", "")}` : ""}. Confirm the selected build against the current technical data sheet.`
        : `${firstSentence} Final dimensions, panel arrangement and hardware are confirmed in the project-specific technical offer.`,
    },
    {
      question: `Which materials does the ${product.name} use?`,
      answer: product.category === "interior-doors"
        ? "The system uses an aluminium construction with concealed or application-specific hardware. Finish and component schedules are confirmed before release."
        : `The reference build lists ${alloy} aluminium${thermalBreak ? `, ${thermalBreak} thermal breaks` : ""}${seals ? ` and ${seals} seals` : ""}. The released bill of materials remains project-specific.`,
    },
    {
      question: `Can fabricators order the ${product.name} as a production kit?`,
      answer: "Yes. PINDÉ checks dimensions, opening layout, glazing, hardware and destination requirements. Supply can include system components, machined profiles or a glass-free CKD kit.",
    },
  ];
}

export function getAluminiumProductSeo(product: Product, locale: ProductPageLocale) {
  const localized = aluminiumProductSeo[product.slug]?.[locale];
  if (!localized) throw new Error(`Missing ${locale} SEO configuration for ${product.slug}`);
  return {
    ...localized,
    description: description(product, locale, localized.heading),
    faqs: aluminiumFaqs(product, locale),
  };
}

export const aluminiumProductSeoSlugs = Object.keys(aluminiumProductSeo);
