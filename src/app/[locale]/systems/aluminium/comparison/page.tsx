import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductFaqSection from "@/components/ProductFaqSection";
import { getLocalizedAluminiumProduct } from "@/content/aluminiumProductCopy";
import { isPageLocale, pageLocales } from "@/content/pages";
import { products } from "@/data/products";
import { breadcrumbJsonLd, faqPageJsonLd, serializeJsonLd } from "@/lib/jsonld";

type Props = { params: Promise<{ locale: string }> };

const baseUrl = "https://pindesys.com";
const windowSlugs = [
  "a65-casement-window",
  "a110-casement-window",
  "a120-casement-window",
  "s175-push-out-window",
  "s132-side-pressed-window",
  "s96n-inward-casement-window",
  "s115-sliding-window",
  "s126-sliding-window",
  "s150-vertical-lifting-window",
] as const;

const copy = {
  en: {
    title: "Aluminium Window System Comparison | A65–S175 Profiles | PINDÉ",
    description: "Compare nine PINDÉ thermally broken aluminium window systems by opening type, frame depth, catalogue reference dimension and selection criteria.",
    keywords: ["aluminium window system comparison", "A65 vs A110 aluminium window", "thermal break window profile sizes", "aluminium window profile selection"],
    eyebrow: "Selection guide · 9 exterior window systems",
    heading: "Compare thermally broken aluminium window systems",
    intro: "Use the table to shortlist a system by opening mode and reference geometry. The final selection is checked against opening size, glass, wind load, thermal target, hardware, fabrication method and destination standard.",
    home: "Home",
    systems: "Systems",
    aluminium: "Aluminium",
    breadcrumb: "Comparison",
    tableLabel: "Aluminium window profile comparison",
    columns: { system: "System", opening: "Opening type", depth: "Frame depth", glazing: "Catalogue reference", use: "Selection starting point" },
    openings: {
      "a65-casement-window": "Outward / inward casement",
      "a110-casement-window": "Casement",
      "a120-casement-window": "Casement",
      "s175-push-out-window": "Parallel push-out",
      "s132-side-pressed-window": "Compression-seal",
      "s96n-inward-casement-window": "Inward / tilt-and-turn",
      "s115-sliding-window": "Horizontal sliding",
      "s126-sliding-window": "Heavy-duty sliding",
      "s150-vertical-lifting-window": "Vertical lifting",
    },
    uses: {
      "a65-casement-window": "Compact casement construction",
      "a110-casement-window": "Deeper frame construction",
      "a120-casement-window": "Cold-region projects requiring a 120.6 mm frame",
      "s175-push-out-window": "Controlled ventilation for high-rise or coastal use",
      "s132-side-pressed-window": "Flush appearance and multi-layer compression sealing",
      "s96n-inward-casement-window": "Interior cleaning and tilt ventilation",
      "s115-sliding-window": "Practical residential sliding openings",
      "s126-sliding-window": "Large, clean-sightline sliding windows",
      "s150-vertical-lifting-window": "Automated or manual vertical openings",
    },
    note: "Values are catalogue references, not a performance guarantee. Request the current drawings, BOM and evidence scope before specifying a system.",
    faq: [
      { question: "What is the difference between A65, A110 and A120 aluminium windows?", answer: "They form a progressively deeper casement range. A65 has a 65 mm frame, A110 uses a 110.5 mm frame, and A120 uses a 120.6 mm frame with a 35.3 mm PA66GF25 thermal barrier. Whole-window thermal performance must be verified for the released construction." },
      { question: "Which PINDÉ aluminium systems use sliding operation?", answer: "S115 and S126 are horizontal sliding window systems. S150 lifts vertically, while S175 moves outward in parallel and S132 uses a side-pressed closing action. Select by opening geometry as well as load, sealing and hardware requirements." },
      { question: "Can profile depth alone determine thermal performance?", answer: "No. Whole-window performance depends on the complete profile build, thermal breaks, glazing, spacers, seals, dimensions, hardware, joints and installation. Catalogue geometry is only the starting point for qualification." },
    ],
  },
  ru: {
    title: "Сравнение алюминиевых оконных систем | Профили A65–S175 | PINDÉ",
    description: "Сравните девять тёплых алюминиевых оконных систем PINDÉ по типу открывания, глубине профиля, остеклению и назначению.",
    keywords: ["сравнение алюминиевых оконных систем", "A65 или A110 алюминиевое окно", "размеры профиля с терморазрывом", "выбор алюминиевой оконной системы"],
    eyebrow: "Руководство по выбору · 9 наружных оконных систем",
    heading: "Сравнение тёплых алюминиевых оконных систем",
    intro: "Таблица помогает выбрать систему по типу открывания и справочной геометрии. Итоговый выбор проверяют с учётом размера проёма, стеклопакета, ветровой нагрузки, теплотехники, фурнитуры, способа изготовления и норм страны назначения.",
    home: "Главная",
    systems: "Системы",
    aluminium: "Алюминий",
    breadcrumb: "Сравнение",
    tableLabel: "Сравнение алюминиевых оконных профилей",
    columns: { system: "Система", opening: "Тип открывания", depth: "Монтажная глубина", glazing: "Справочный размер каталога", use: "Отправная точка выбора" },
    openings: {
      "a65-casement-window": "Поворотное наружу / внутрь",
      "a110-casement-window": "Поворотное",
      "a120-casement-window": "Поворотное",
      "s175-push-out-window": "Параллельно-выдвижное",
      "s132-side-pressed-window": "С прижимом створки",
      "s96n-inward-casement-window": "Внутрь / поворотно-откидное",
      "s115-sliding-window": "Горизонтально-раздвижное",
      "s126-sliding-window": "Усиленное раздвижное",
      "s150-vertical-lifting-window": "Вертикально-подъёмное",
    },
    uses: {
      "a65-casement-window": "Компактная поворотная система",
      "a110-casement-window": "Коробка увеличенной глубины",
      "a120-casement-window": "Холодные регионы, коробка 120,6 мм",
      "s175-push-out-window": "Управляемая вентиляция для высотных и прибрежных объектов",
      "s132-side-pressed-window": "Плоский вид и многослойное прижимное уплотнение",
      "s96n-inward-casement-window": "Уход изнутри и откидное проветривание",
      "s115-sliding-window": "Практичные жилые раздвижные проёмы",
      "s126-sliding-window": "Крупные раздвижные окна с чистыми линиями",
      "s150-vertical-lifting-window": "Автоматические или ручные вертикальные проёмы",
    },
    note: "Значения являются справочными данными каталога, а не гарантией. До выбора запросите актуальные чертежи, BOM и область доказательной базы.",
    faq: [
      { question: "Чем отличаются алюминиевые окна A65, A110 и A120?", answer: "Это поворотные системы с последовательно увеличивающейся монтажной глубиной. A65 имеет коробку 65 мм, A110 — 110,5 мм, A120 — 120,6 мм и полиамидную термоизоляционную вставку PA66GF25 шириной 35,3 мм. Теплотехнические показатели оконного блока подтверждают для рабочей комплектации." },
      { question: "Какие алюминиевые системы PINDÉ являются раздвижными?", answer: "S115 и S126 — горизонтально-раздвижные оконные системы. Створка S150 перемещается вертикально, S175 параллельно выдвигается наружу, а S132 закрывается с прижимом к уплотнениям. Выбор учитывает геометрию, нагрузки, уплотнение и фурнитуру." },
      { question: "Можно ли определить теплотехнику только по монтажной глубине?", answer: "Нет. Показатели оконного блока зависят от полного сечения, термоизоляционных вставок, стеклопакета, дистанционной рамки, уплотнений, размеров, фурнитуры, соединений и монтажа. Геометрия каталога служит только отправной точкой." },
    ],
  },
} as const;

function spec(product: (typeof products)[number], label: string) {
  return product.specs.find((item) => item.label.toLowerCase().includes(label))?.value ?? "—";
}

function catalogueReference(product: (typeof products)[number], locale: string) {
  const item = product.specs.find((candidate) =>
    ["catalogue interface dimension", "catalogue sash travel"].includes(candidate.label.toLowerCase()),
  );
  if (!item) return "—";
  const sashTravel = item.label.toLowerCase().includes("sash travel");
  const label = locale === "ru"
    ? (sashTravel ? "Ход створки" : "Интерфейсный размер")
    : (sashTravel ? "Sash travel" : "Interface dimension");
  return `${label}: ${item.value}`;
}

export function generateStaticParams() {
  return pageLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isPageLocale(locale)) notFound();
  const content = copy[locale];
  const canonical = `${baseUrl}/${locale}/systems/aluminium/comparison`;
  return {
    title: { absolute: content.title },
    description: content.description,
    keywords: [...content.keywords],
    alternates: {
      canonical,
      languages: {
        en: `${baseUrl}/en/systems/aluminium/comparison`,
        ru: `${baseUrl}/ru/systems/aluminium/comparison`,
        "x-default": `${baseUrl}/en/systems/aluminium/comparison`,
      },
    },
    openGraph: { type: "website", url: canonical, siteName: "PINDÉ", locale: locale === "ru" ? "ru_RU" : "en_US", title: content.title, description: content.description },
    twitter: { card: "summary_large_image", title: content.title, description: content.description },
  };
}

export default async function AluminiumComparisonPage({ params }: Props) {
  const { locale } = await params;
  if (!isPageLocale(locale)) notFound();
  const content = copy[locale];
  const canonical = `${baseUrl}/${locale}/systems/aluminium/comparison`;
  const comparisonProducts = windowSlugs.map((slug) => products.find((product) => product.slug === slug)).filter((product): product is (typeof products)[number] => Boolean(product));
  const crumbs = breadcrumbJsonLd([
    { name: content.home, url: `${baseUrl}/${locale}` },
    { name: content.systems, url: `${baseUrl}/${locale}/systems` },
    { name: content.aluminium, url: `${baseUrl}/${locale}/systems/aluminium` },
    { name: content.breadcrumb, url: canonical },
  ]);
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: content.tableLabel,
    itemListElement: comparisonProducts.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: getLocalizedAluminiumProduct(product, locale).name,
      url: `${baseUrl}/${locale}/systems/aluminium/${product.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqPageJsonLd([...content.faq])) }} />

      <nav aria-label={locale === "ru" ? "Хлебные крошки" : "Breadcrumb"} className="border-b border-line bg-obsidian pt-[104px] py-4">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-2 px-[55px] pt-[13px] text-[11px] uppercase tracking-[2px] text-muted max-lg:px-6">
          <Link href={`/${locale}`}>{content.home}</Link><span>/</span>
          <Link href={`/${locale}/systems`}>{content.systems}</Link><span>/</span>
          <Link href={`/${locale}/systems/aluminium`}>{content.aluminium}</Link><span>/</span>
          <span className="text-warm">{content.breadcrumb}</span>
        </div>
      </nav>

      <section className="bg-obsidian py-[89px]">
        <div className="mx-auto max-w-[1200px] px-[55px] max-lg:px-6">
          <p className="mb-[13px] text-[10px] font-bold uppercase tracking-[0.16em] text-[#DAAF37]">{content.eyebrow}</p>
          <h1 className="max-w-[940px] font-[family-name:var(--font-serif)] text-[clamp(40px,6vw,64px)] font-semibold leading-[0.98] text-alabaster">
            {content.heading}<span className="text-red">.</span>
          </h1>
          <p className="mt-[21px] max-w-[820px] text-[15px] leading-[1.9] text-warm">{content.intro}</p>
        </div>
      </section>

      <section className="bg-surface py-[89px]">
        <div className="mx-auto max-w-[1400px] px-[55px] max-lg:px-6">
          <div className="overflow-x-auto border border-line">
            <table className="w-full min-w-[1040px] bg-obsidian text-left">
              <caption className="sr-only">{content.tableLabel}</caption>
              <thead className="bg-[#081D2A] text-white">
                <tr>{Object.values(content.columns).map((column) => <th key={column} className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.08em]">{column}</th>)}</tr>
              </thead>
              <tbody>
                {comparisonProducts.map((product) => {
                  const localizedProduct = getLocalizedAluminiumProduct(product, locale);
                  return (
                  <tr key={product.slug} className="border-t border-line align-top">
                    <td className="px-5 py-5"><Link href={`/${locale}/systems/aluminium/${product.slug}`} className="font-bold text-[#DAAF37] hover:text-red">{product.series}</Link><span className="mt-1 block text-[11px] text-muted">{localizedProduct.name}</span></td>
                    <td className="px-5 py-5 text-[12px] leading-[1.6] text-warm">{content.openings[product.slug as keyof typeof content.openings]}</td>
                    <td className="px-5 py-5 text-[12px] font-semibold text-alabaster">{spec(product, "frame depth")}</td>
                    <td className="px-5 py-5 text-[12px] text-warm">{catalogueReference(product, locale)}</td>
                    <td className="px-5 py-5 text-[12px] leading-[1.6] text-warm">{content.uses[product.slug as keyof typeof content.uses]}</td>
                  </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-5 border-l-4 border-[#DAAF37] bg-obsidian px-5 py-4 text-[12px] leading-[1.7] text-muted">{content.note}</p>
        </div>
      </section>

      <ProductFaqSection locale={locale} faqs={[...content.faq]} />
    </>
  );
}
