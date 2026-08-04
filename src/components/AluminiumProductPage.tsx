import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { PageLocale } from "@/content/pages";
import type { Product } from "@/data/products";
import { products } from "@/data/products";
import { breadcrumbJsonLd, productJsonLd } from "@/lib/jsonld";
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
    family: "Aluminium family",
    features: "Key features",
    quote: "Request a quote",
    specs: "Technical specifications",
    specNote: "Specifications are reference values and may vary by configuration. Request the current technical data sheet and BOM before ordering.",
    related: "Related aluminium systems",
    back: "All aluminium systems",
    details: "Specifications",
  },
  ru: {
    home: "Главная",
    systems: "Системы",
    aluminium: "Алюминий",
    family: "Семейство Aluminium",
    features: "Ключевые особенности",
    quote: "Запросить предложение",
    specs: "Технические характеристики",
    specNote: "Характеристики являются справочными и зависят от конфигурации. До заказа запросите актуальный технический лист и BOM.",
    related: "Другие алюминиевые системы",
    back: "Все алюминиевые системы",
    details: "Характеристики",
  },
} as const;

export default function AluminiumProductPage({ locale, product }: Props) {
  const text = labels[locale];
  const canonical = `https://pindesys.com/${locale}/systems/aluminium/${product.slug}`;
  const crumbs = breadcrumbJsonLd([
    { name: text.home, url: `https://pindesys.com/${locale}` },
    { name: text.systems, url: `https://pindesys.com/${locale}/systems` },
    { name: text.aluminium, url: `https://pindesys.com/${locale}/systems/aluminium` },
    { name: product.name, url: canonical },
  ]);
  const related = products
    .filter((candidate) => candidate.category === product.category && candidate.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd(product, canonical)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />

      <nav aria-label="Breadcrumb" className="pt-[104px] py-4 bg-obsidian border-b border-line">
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
                alt={`${product.name} — ${product.series} aluminium system`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="eager"
                fetchPriority="high"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <PindeMark size={55} frame="#DCE1E6" />
              </div>
            )}
          </div>

          <div>
            <p className="mb-[13px] text-[10px] font-medium uppercase tracking-[3px] text-bronze">
              {text.family} · {product.series}
            </p>
            <h1 className="font-[family-name:var(--font-serif)] font-semibold text-[clamp(32px,4vw,48px)] leading-[1.1] text-alabaster mb-[21px]">
              {product.name}<span className="text-red">.</span>
            </h1>
            <p className="text-warm text-[15px] leading-[1.9] mb-[34px]">{product.description}</p>

            <div className="mb-[34px]">
              <h2 className="mb-[21px] text-[10px] font-medium uppercase tracking-[3px] text-muted">{text.features}</h2>
              <ul className="space-y-[13px]">
                {product.features.map((feature) => (
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
                {product.specs.map((spec, index) => (
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

      <section className="py-[89px] bg-obsidian">
        <div className={container}>
          <div className="mb-[34px] flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="font-[family-name:var(--font-serif)] font-semibold text-[32px] text-alabaster">
              {text.related}<span className="text-red">.</span>
            </h2>
            <Link href={`/${locale}/systems/aluminium#aluminium-catalog`} className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#C7A154] hover:text-red">
              <ArrowLeft size={13} /> {text.back}
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-[13px] sm:grid-cols-3">
            {related.map((candidate) => (
              <Link key={candidate.slug} href={`/${locale}/systems/aluminium/${candidate.slug}`} className="group block border border-line bg-surface p-[34px] transition-colors hover:border-warm/40">
                <p className="mb-[8px] text-[9px] uppercase tracking-[2px] text-bronze">{candidate.series} Series</p>
                <h3 className="font-[family-name:var(--font-serif)] text-[20px] font-normal text-alabaster transition-colors group-hover:text-bronze">{candidate.name}</h3>
                <span className="mt-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-muted">
                  {text.details} <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
