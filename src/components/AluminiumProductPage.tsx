import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProductFaqSection from "@/components/ProductFaqSection";
import { getLocalizedAluminiumProduct } from "@/content/aluminiumProductCopy";
import { getAluminiumProductSeo } from "@/content/aluminiumProductSeo";
import type { PageLocale } from "@/content/pages";
import type { Product } from "@/data/products";
import { products } from "@/data/products";
import { breadcrumbJsonLd, faqPageJsonLd, productJsonLd, serializeJsonLd } from "@/lib/jsonld";
import { productImageAlt } from "@/lib/product-image-alt";
import PindeMark from "@/components/PindeMark";

type Props = {
  locale: PageLocale;
  product: Product;
};

const container = "mx-auto max-w-[1200px] px-[55px] max-lg:px-6";

const labels = {
  en: {
    home: "Home",
    systems: "Systems",
    aluminium: "Aluminium",
    family: "Aluminium window and door system",
    features: "Construction and configuration",
    quote: "Request a quote",
    specs: "Technical specifications",
    specNote: "Catalogue dimensions describe the reference configuration. Confirm the infill, hardware, opening limits and released bill of materials before ordering.",
    related: "Related aluminium systems",
    back: "All aluminium systems",
    details: "Specifications",
    breadcrumb: "Breadcrumb",
  },
  ru: {
    home: "Главная",
    systems: "Системы",
    aluminium: "Алюминий",
    family: "Алюминиевая профильная система",
    features: "Конструкция и комплектация",
    quote: "Запросить предложение",
    specs: "Технические характеристики",
    specNote: "Размеры относятся к каталожной конфигурации. До заказа согласуйте заполнение, фурнитуру, ограничения открывания и рабочую спецификацию комплектации.",
    related: "Другие алюминиевые системы",
    back: "Все алюминиевые системы",
    details: "Характеристики",
    breadcrumb: "Хлебные крошки",
  },
} as const;

export default function AluminiumProductPage({ locale, product }: Props) {
  const text = labels[locale];
  const seo = getAluminiumProductSeo(product, locale);
  const localizedProduct = getLocalizedAluminiumProduct(product, locale);
  const canonical = `https://pindesys.com/${locale}/systems/aluminium/${product.slug}`;
  const crumbs = breadcrumbJsonLd([
    { name: text.home, url: `https://pindesys.com/${locale}` },
    { name: text.systems, url: `https://pindesys.com/${locale}/systems` },
    { name: text.aluminium, url: `https://pindesys.com/${locale}/systems/aluminium` },
    { name: localizedProduct.name, url: canonical },
  ]);
  const related = products
    .filter((candidate) => candidate.category === product.category && candidate.slug !== product.slug)
    .slice(0, 3);

  return (
    <article lang={locale}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(productJsonLd(localizedProduct, canonical)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqPageJsonLd(seo.faqs)) }} />

      <nav aria-label={text.breadcrumb} className="pt-[104px] py-4 bg-obsidian border-b border-line">
        <div className={`${container} pt-[13px] flex flex-wrap items-center gap-2 text-[11px] tracking-[2px] uppercase text-muted`}>
          <Link href={`/${locale}`} className="hover:text-alabaster transition-colors">{text.home}</Link>
          <span>/</span>
          <Link href={`/${locale}/systems`} className="hover:text-alabaster transition-colors">{text.systems}</Link>
          <span>/</span>
          <Link href={`/${locale}/systems/aluminium`} className="hover:text-alabaster transition-colors">{text.aluminium}</Link>
          <span>/</span>
          <span className="text-warm">{product.series}</span>
        </div>
      </nav>

      <section className="py-[89px] bg-obsidian">
        <div className={`${container} grid gap-[55px] lg:grid-cols-2 lg:gap-[89px]`}>
          <div className="relative aspect-[4/3] overflow-hidden border border-line bg-surface">
            {product.images.length > 0 ? (
              <Image
                src={product.images[0]}
                alt={productImageAlt(localizedProduct, locale)}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="eager"
                fetchPriority="high"
                unoptimized
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <PindeMark size={55} frame="#D9D9D9" />
              </div>
            )}
          </div>

          <div>
            <p className="mb-[13px] text-[10px] font-medium uppercase tracking-[3px] text-bronze">
              {text.family} · {product.series}
            </p>
            <h1 className="font-[family-name:var(--font-serif)] font-semibold text-[clamp(32px,4vw,48px)] leading-[1.1] text-alabaster mb-[21px]">
              {seo.heading}<span className="text-red">.</span>
            </h1>
            <p className="text-warm text-[15px] leading-[1.9] mb-[34px]">{localizedProduct.description}</p>

            <div className="mb-[34px]">
              <h2 className="mb-[21px] text-[10px] font-medium uppercase tracking-[3px] text-muted">{text.features}</h2>
              <ul className="space-y-[13px]">
                {localizedProduct.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-[13px] text-[13px] text-warm">
                    <span className="mt-1.5 inline-block h-[5px] w-[5px] shrink-0 rounded-full bg-red" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link href={`/${locale}/rfq`} className="inline-flex items-center gap-[10px] bg-gold px-[34px] py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy hover:brightness-105">
              <span className="inline-block h-[5px] w-[5px] bg-red" />
              {text.quote}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-[89px] bg-surface">
        <div className={container}>
          <h2 className="font-[family-name:var(--font-serif)] font-semibold text-[32px] text-alabaster mb-[34px]">
            {text.specs}<span className="text-red">.</span>
          </h2>
          <div className="overflow-hidden border border-line bg-obsidian">
            <table className="w-full">
              <tbody>
                {localizedProduct.specs.map((spec, index) => (
                  <tr key={spec.label} className={index % 2 === 0 ? "bg-obsidian" : "bg-surface/50"}>
                    <th scope="row" className="w-[38%] px-5 py-4 text-left text-[12px] font-bold text-muted sm:px-8">{spec.label}</th>
                    <td className="px-5 py-4 text-[13px] text-warm sm:px-8">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-[13px] text-[11px] leading-[1.6] text-muted">{text.specNote}</p>
        </div>
      </section>

      <ProductFaqSection locale={locale} faqs={seo.faqs} />

      <section className="py-[89px] bg-obsidian">
        <div className={container}>
          <div className="mb-[34px] flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="font-[family-name:var(--font-serif)] font-semibold text-[32px] text-alabaster">
              {text.related}<span className="text-red">.</span>
            </h2>
            <Link href={`/${locale}/systems/aluminium#aluminium-catalog`} className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#DAAF37] hover:text-red">
              <ArrowLeft size={13} /> {text.back}
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-[13px] sm:grid-cols-3">
            {related.map((candidate) => {
              const localizedCandidate = getLocalizedAluminiumProduct(candidate, locale);
              return (
                <Link key={candidate.slug} href={`/${locale}/systems/aluminium/${candidate.slug}`} className="group block border border-line bg-surface p-[34px] transition-colors hover:border-warm/40">
                  <p className="mb-[8px] text-[9px] uppercase tracking-[2px] text-bronze">{candidate.series} {locale === "ru" ? "серия" : "series"}</p>
                  <h3 className="font-[family-name:var(--font-serif)] text-[20px] font-normal text-alabaster transition-colors group-hover:text-bronze">{localizedCandidate.name}</h3>
                  <span className="mt-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-muted">
                    {text.details} <ArrowRight size={12} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </article>
  );
}
