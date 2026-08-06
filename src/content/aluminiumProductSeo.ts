import type { Product } from "@/data/products";
import { getLocalizedAluminiumProduct } from "@/content/aluminiumProductCopy";

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
    "A120 120mm Aluminium Casement Window System | PINDÉ",
    "A120 120mm thermally broken aluminium casement window system",
    ["120mm aluminium casement window", "deep aluminium window frame", "A120 thermal break window"],
    "Поворотное алюминиевое окно A120 120 мм | PINDÉ",
    "Алюминиевая поворотная оконная система A120 120 мм",
    ["алюминиевая оконная система A120 120 мм", "алюминиевый профиль с глубокой коробкой", "окно A120 с термовставкой"],
  ),
  "s175-push-out-window": defineSeo(
    "S175 Aluminium Parallel-Projecting Window | PINDÉ",
    "S175 175mm aluminium parallel-projecting window system",
    ["parallel projecting aluminium window", "parallel opening window profile", "S175 projecting window"],
    "Параллельно-выдвижное алюминиевое окно S175 | PINDÉ",
    "Алюминиевая система S175 175 мм с параллельно-выдвижным открыванием",
    ["алюминиевое окно с параллельно-выдвижным открыванием", "оконный профиль S175", "выдвижное окно 175 мм"],
  ),
  "s132-side-pressed-window": defineSeo(
    "S132 Aluminium Compression-Seal Sliding Window | PINDÉ",
    "S132 132mm thermally broken sliding window with compression sealing",
    ["compression seal aluminium window", "132mm aluminium sliding window", "S132 sliding window with compression"],
    "Раздвижное алюминиевое окно S132 с прижимом | PINDÉ",
    "Алюминиевая раздвижная система S132 132 мм с прижимом створки",
    ["алюминиевое раздвижное окно с прижимом", "оконный профиль S132 132 мм", "раздвижная система с термовставкой"],
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
    "S150 Aluminium Vertical Sliding Window System | PINDÉ",
    "S150 150mm aluminium window with a vertical sliding sash",
    ["aluminium vertical sliding window", "150mm aluminium window profile", "S150 motorised sash window"],
    "Алюминиевое окно S150 с вертикально-сдвижной створкой | PINDÉ",
    "Алюминиевая оконная система S150 150 мм с вертикально-сдвижной створкой",
    ["алюминиевое окно с вертикально-сдвижной створкой", "оконный профиль S150 150 мм", "моторизованное подъёмное окно"],
  ),
  "a65-swing-door": defineSeo(
    "A65 Aluminium Hinged Door System | Thermal Break | PINDÉ",
    "A65 65mm thermally broken aluminium hinged-door system",
    ["aluminium hinged door system", "thermally broken aluminium door profile", "A65 aluminium entrance door"],
    "Распашная алюминиевая дверь A65 с термовставкой | PINDÉ",
    "Алюминиевый распашной дверной блок A65 глубиной 65 мм",
    ["алюминиевый распашной дверной блок", "дверной профиль A65 с термовставкой", "алюминиевая входная дверь A65"],
  ),
  "ap187-50-sliding-door": defineSeo(
    "AP187 50 Aluminium Sliding Door | Slim Profile System | PINDÉ",
    "AP187 50 slim-profile aluminium sliding door system",
    ["aluminium sliding door profile system", "slim aluminium door profile", "AP187 50 sliding door"],
    "Раздвижной дверной блок AP187 50 | Узкий профиль | PINDÉ",
    "Алюминиевый раздвижной дверной блок AP187 50 с узким профилем",
    ["алюминиевая раздвижная дверная система", "узкий алюминиевый дверной профиль", "раздвижная дверь AP187 50"],
  ),
  "ap187-88-sliding-door": defineSeo(
    "AP187 88 Heavy-Duty Aluminium Sliding Door | PINDÉ",
    "AP187 88 heavy-duty aluminium sliding door system",
    ["heavy duty aluminium sliding door", "88mm aluminium door profile", "AP187 88 sliding door"],
    "Раздвижной дверной блок AP187 88 | Усиленный профиль | PINDÉ",
    "Алюминиевый раздвижной дверной блок AP187 88 с усиленным профилем",
    ["усиленная алюминиевая раздвижная дверь", "алюминиевый дверной профиль 88 мм", "раздвижная дверь AP187 88"],
  ),
  "s150-sliding-door": defineSeo(
    "S150 Aluminium Sliding Door | Thermal Break Profile | PINDÉ",
    "S150 150mm thermal break aluminium sliding door system",
    ["150mm aluminium sliding door", "thermal break patio door profile", "S150 aluminium door system"],
    "Раздвижной дверной блок S150 с термовставками | PINDÉ",
    "Алюминиевый раздвижной дверной блок S150 с термоизоляционными вставками",
    ["алюминиевая раздвижная дверь 150 мм", "профиль терморазрывной двери для террасы", "дверная система S150"],
  ),
  "s93-heavy-duty-folding-door": defineSeo(
    "S93 Heavy-Duty Aluminium Folding Door System | PINDÉ",
    "S93 93mm heavy-duty thermal break aluminium folding door",
    ["aluminium folding door system", "heavy duty aluminium folding door", "S93 thermal break folding door"],
    "Складной алюминиевый дверной блок S93 | PINDÉ",
    "Складной алюминиевый дверной блок S93 93 мм с термоизоляционными вставками",
    ["алюминиевая складная дверная система", "усиленная алюминиевая дверь-гармошка", "складная дверь S93 с терморазрывом"],
  ),
  "perfect-system-non-interlocking-door": defineSeo(
    "Perfect System Independent or Linked-Panel Sliding Door | PINDÉ",
    "Perfect System interior sliding partition with independent or linked panels",
    ["aluminium sliding partition", "linked panel sliding door", "Perfect System interior door"],
    "Раздвижная перегородка Perfect System | PINDÉ",
    "Раздвижная перегородка Perfect System с независимыми или связанными полотнами",
    ["алюминиевая раздвижная перегородка", "связанные раздвижные полотна", "межкомнатная система Perfect System"],
  ),
  "perfect-system-phantom-door": defineSeo(
    "Perfect System Top-Hung Concealed-Track Sliding Door | PINDÉ",
    "Perfect System top-hung interior sliding door with a concealed track",
    ["top hung aluminium sliding door", "concealed track interior door", "Perfect System suspended door"],
    "Верхнеподвесной блок Perfect System | PINDÉ",
    "Верхнеподвесной раздвижной дверной блок Perfect System со скрытой направляющей",
    ["верхнеподвесная раздвижная дверь", "дверь без сплошной напольной направляющей", "скрытая направляющая Perfect System"],
  ),
  "1645-bathroom-door": defineSeo(
    "1645 Aluminium Bathroom Door Set | Interior System | PINDÉ",
    "1645 aluminium door set for bathrooms and interior wet areas",
    ["aluminium bathroom door system", "interior aluminium door profile", "1645 bathroom door set"],
    "Алюминиевый дверной блок 1645 для ванной комнаты | PINDÉ",
    "Алюминиевый дверной блок 1645 для ванной комнаты",
    ["алюминиевый дверной блок для ванной", "межкомнатный алюминиевый дверной профиль", "дверной блок 1645"],
  ),
  "perfect-system-opposite-direction-linkage": defineSeo(
    "Perfect System Synchronised Bi-Parting Sliding Door | PINDÉ",
    "Perfect System synchronised bi-parting aluminium sliding door",
    ["synchronised sliding door", "bi parting aluminium door", "linked interior sliding panels"],
    "Синхронный раздвижной дверной блок Perfect System | PINDÉ",
    "Алюминиевый дверной блок Perfect System с синхронным двусторонним открыванием",
    ["синхронная раздвижная дверь", "двустороннее открывание полотен", "связанные полотна Perfect System"],
  ),
  "perfect-system-folding-door": defineSeo(
    "Perfect System Aluminium Interior Folding Door | PINDÉ",
    "Perfect System aluminium interior folding door system",
    ["aluminium interior folding door", "folding aluminium door system", "Perfect System folding door"],
    "Складной алюминиевый дверной блок Perfect System | PINDÉ",
    "Межкомнатный складной алюминиевый дверной блок Perfect System",
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
    return "65 mm aluminium casement window with PA66GF25 thermal barriers, three EPDM sealing levels and system-kit or glass-free CKD supply for fabricators.";
  }
  if (locale === "en") {
    const firstSentence = product.description.split(/(?<=\.)\s/)[0];
    return truncateAtWord(`${heading}. ${firstSentence}`);
  }

  const depth = specValue(product, "frame depth");
  const facts = depth ? `, монтажная глубина ${depth}` : "";
  return truncateAtWord(`${heading}${facts}. Профили с обработкой и CKD-комплекты без стеклопакетов для локального производства.`);
}

function aluminiumFaqs(product: Product, locale: ProductPageLocale): ProductFaq[] {
  const localized = getLocalizedAluminiumProduct(product, locale);
  const depth = specValue(product, "frame depth") ?? specValue(product, "system depth");
  const alloy = specValue(product, "aluminium alloy") ?? "6063-T5";
  const thermalBarrier = specValue(product, "thermal barrier") ?? (product.category === "interior-doors" ? null : "PA66GF25");
  const gaskets = specValue(product, "gaskets") ?? (product.category === "interior-doors" ? null : "EPDM");
  const firstSentence = product.description.split(/(?<=\.)\s/)[0];

  if (locale === "ru") {
    return [
      {
        question: depth ? `Какова монтажная глубина системы ${localized.name}?` : `Для каких проёмов предназначена система ${localized.name}?`,
        answer: depth
          ? `В каталоге для ${localized.name} указана монтажная глубина ${depth}. Заполнение, размеры створок или полотен и фурнитуру проверяют по актуальному техническому листу и оконной ведомости.`
          : `${localized.description.split(/(?<=\.)\s/)[0]} Размеры, схема открывания и фурнитура фиксируются в техническом предложении.`,
      },
      {
        question: `Какие материалы входят в базовую комплектацию ${localized.name}?`,
        answer: product.category === "interior-doors"
          ? "В основе системы — алюминиевые профили и фурнитура для выбранной схемы движения полотен. Покрытие, заполнение, крепёж и комплект фурнитуры согласовывают до выпуска заказа."
          : `Базовая конфигурация включает алюминий ${alloy}${thermalBarrier ? `, термоизоляционные вставки ${thermalBarrier}` : ""}${gaskets ? ` и уплотнители ${gaskets}` : ""}. Рабочей считается только согласованная спецификация комплектации.`,
      },
      {
        question: `Можно ли заказать ${localized.name} для сборки на местном производстве?`,
        answer: "Да. PINDÉ проверяет ведомость проёмов, способ открывания, стеклопакет, фурнитуру и требования страны назначения. Поставка возможна как системный комплект, профили с механической обработкой или CKD-комплект без стеклопакетов.",
      },
    ];
  }

  return [
    {
      question: depth ? `What is the frame depth of the ${localized.name}?` : `Which openings is the ${localized.name} intended for?`,
      answer: depth
        ? `${localized.name} has a listed frame depth of ${depth}. Confirm the infill, sash or leaf limits and hardware against the current technical data sheet and opening schedule.`
        : `${firstSentence} Final dimensions, panel arrangement and hardware are confirmed in the project-specific technical offer.`,
    },
    {
      question: `Which materials are listed for the ${localized.name}?`,
      answer: product.category === "interior-doors"
        ? "The system uses aluminium profiles with hardware selected for the specified panel movement. Finish, infill, fixings and hardware are confirmed before release."
        : `The reference build lists ${alloy} aluminium${thermalBarrier ? `, ${thermalBarrier} polyamide thermal barriers` : ""}${gaskets ? ` and ${gaskets} gaskets` : ""}. The released bill of materials remains project-specific.`,
    },
    {
      question: `Can a fabricator order the ${localized.name} as a production kit?`,
      answer: "Yes. PINDÉ checks the opening schedule, opening type, glazing, hardware and destination requirements. Supply can include a system kit, machined profiles or a glass-free CKD kit.",
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
