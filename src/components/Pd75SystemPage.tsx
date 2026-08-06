import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, Check, ShieldCheck, ThermometerSnowflake, Volume2 } from "lucide-react";
import FrpRelatedProducts from "@/components/FrpRelatedProducts";
import ProductFaqSection from "@/components/ProductFaqSection";
import { frpProductFaqs } from "@/content/frpProductEnhancements";
import type { PageLocale } from "@/content/pages";
import { pd75Content } from "@/content/pd75";
import { breadcrumbJsonLd, faqPageJsonLd, productJsonLd, serializeJsonLd } from "@/lib/jsonld";

type Props = {
  locale: PageLocale;
  content: (typeof pd75Content)["en"];
};

const container = "mx-auto max-w-[1200px] px-[55px] max-lg:px-6";
const benefitIcons = [ShieldCheck, ThermometerSnowflake, Volume2];

export default function Pd75SystemPage({ locale, content }: Props) {
  const canonical = `https://pindesys.com/${locale}/systems/frp/xd75`;
  const faqs = frpProductFaqs.xd75[locale];
  const homeLabel = locale === "ru" ? "Главная" : "Home";
  const systemsLabel = locale === "ru" ? "Системы" : "Systems";
  const crumbs = breadcrumbJsonLd([
    { name: homeLabel, url: `https://pindesys.com/${locale}` },
    { name: systemsLabel, url: `https://pindesys.com/${locale}/systems` },
    { name: "FRP", url: `https://pindesys.com/${locale}/systems/frp` },
    { name: "PD75", url: canonical },
  ]);
  const productSchema = productJsonLd({
    name: content.title,
    slug: "xd75",
    series: "PD75",
    description: content.seo.description,
    images: ["/images/systems/pinde-pd75-ultra-frp-core-thermal-performance.webp"],
    specs: content.specs,
  }, canonical, {
    category: "Aluminium-Composite Window Systems",
    material: "Aluminium and pultruded glass-fibre-reinforced polyurethane (GRPU)",
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqPageJsonLd(faqs)) }} />

      <nav aria-label={locale === "ru" ? "Хлебные крошки" : "Breadcrumb"} className="pt-[104px] py-4 bg-obsidian border-b border-line">
        <div className={`${container} pt-[13px] flex flex-wrap items-center gap-2 text-[11px] tracking-[2px] uppercase text-muted`}>
          <Link href={`/${locale}`} className="hover:text-alabaster transition-colors">{homeLabel}</Link>
          <span>/</span>
          <Link href={`/${locale}/systems`} className="hover:text-alabaster transition-colors">{systemsLabel}</Link>
          <span>/</span>
          <Link href={`/${locale}/systems/frp`} className="hover:text-alabaster transition-colors">FRP</Link>
          <span>/</span>
          <span className="text-warm">PD75</span>
        </div>
      </nav>

      <section className="py-[89px] bg-obsidian">
        <div className={`${container} grid items-center gap-[55px] lg:grid-cols-[1.05fr_0.95fr]`}>
          <div>
            <span className="inline-block bg-[#FF2D2D] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.08em] text-white mb-[21px]">
              {content.supplyStatus}
            </span>
            <p className="mb-[13px] text-[10px] font-bold uppercase tracking-[0.16em] text-[#DAAF37]">
              {content.eyebrow}
            </p>
            <h1 className="font-[family-name:var(--font-serif)] font-semibold text-[clamp(40px,6vw,64px)] leading-[0.95] text-alabaster mb-[21px]">
              {content.title.replace(/[.!?]+$/, "")}<span className="text-red">.</span>
            </h1>
            <p className="text-warm text-[15px] leading-[1.9] max-w-[680px]">{content.intro}</p>
          </div>
          <div className="relative aspect-[1178/756] overflow-hidden border border-line bg-white">
            <Image
              src="/images/systems/pinde-pd75-ultra-frp-core-thermal-performance.webp"
              alt={locale === "ru" ? "PD75 с Ultra FRP Core и визуализацией теплового потока" : "PD75 window with Ultra FRP Core and thermal-flow visualisation"}
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-contain"
            />
          </div>
        </div>
        <div className={`${container} mt-[34px] grid grid-cols-2 gap-[13px] sm:grid-cols-4`}>
          {content.heroCards.map((card) => (
            <div key={card.label} className="border border-line bg-surface p-5">
              <span className="block text-[22px] font-extrabold text-alabaster">{card.value}</span>
              <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.06em] text-muted">{card.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-[89px] bg-surface">
        <div className={container}>
          <h2 className="font-[family-name:var(--font-serif)] text-[32px] font-semibold text-alabaster mb-[34px]">
            {content.benefitsTitle}<span className="text-red">.</span>
          </h2>
          <div className="grid gap-[13px] lg:grid-cols-3">
            {content.benefits.map((benefit, index) => {
              const Icon = benefitIcons[index];
              return (
                <article key={benefit.title} className="border border-line bg-obsidian p-6 sm:p-8">
                  <Icon size={24} strokeWidth={1.5} className="text-[#DAAF37]" />
                  <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-red">{benefit.kicker}</p>
                  <h3 className="mt-2 text-[22px] font-extrabold text-alabaster">{benefit.title}</h3>
                  <p className="mt-4 text-[13px] leading-[1.8] text-warm">{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-[89px] bg-obsidian">
        <div className={`${container} max-w-[900px]`}>
          <h2 className="font-[family-name:var(--font-serif)] text-[32px] font-semibold text-alabaster mb-[13px]">
            {content.identityTitle}<span className="text-red">.</span>
          </h2>
          <p className="text-[14px] leading-[1.9] text-warm">{content.identity}</p>
        </div>
      </section>

      <section className="py-[89px] bg-surface">
        <div className={container}>
          <h2 className="font-[family-name:var(--font-serif)] text-[32px] font-semibold text-alabaster mb-[34px]">
            {content.variantsTitle}<span className="text-red">.</span>
          </h2>
          <div className="grid gap-[13px] lg:grid-cols-2">
            {content.variants.map((variant) => (
              <article key={variant.name} className="border border-line bg-obsidian p-6 sm:p-8">
                <h3 className="text-[24px] font-extrabold text-alabaster">{variant.name}</h3>
                <p className="mt-4 text-[14px] leading-[1.8] text-warm">{variant.description}</p>
                <ul className="mt-6 grid gap-3">
                  {variant.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-[12px] leading-[1.65] text-warm">
                      <Check size={15} className="mt-0.5 shrink-0 text-red" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[89px] bg-obsidian">
        <div className={container}>
          <h2 className="font-[family-name:var(--font-serif)] text-[32px] font-semibold text-alabaster mb-[34px]">
            {content.specsTitle}<span className="text-red">.</span>
          </h2>
          <div className="overflow-hidden border border-line bg-surface">
            <table className="w-full">
              <tbody>
                {content.specs.map((spec, index) => (
                  <tr key={spec.label} className={index % 2 === 0 ? "bg-surface" : "bg-obsidian/40"}>
                    <th scope="row" className="w-[38%] px-5 py-4 text-left text-[12px] font-bold text-muted sm:px-8">
                      {spec.label}
                    </th>
                    <td className="px-5 py-4 text-[13px] leading-[1.6] text-warm sm:px-8">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-[89px] bg-surface">
        <div className={container}>
          <div className="mb-[34px] max-w-[860px]">
            <h2 className="font-[family-name:var(--font-serif)] text-[32px] font-semibold text-alabaster mb-[13px]">
              {content.drawingsTitle}<span className="text-red">.</span>
            </h2>
            <p className="text-[13px] leading-[1.8] text-warm">{content.drawingsIntro}</p>
          </div>
          <div className="relative overflow-hidden border border-line bg-white">
            <Image
              src="/images/systems/pinde-pd75-profile-parameters.webp"
              alt={locale === "ru" ? "Сечения и параметры профилей системы PD75" : "PD75 system profile sections and parameters"}
              width={1322}
              height={1270}
              unoptimized
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="h-auto w-full"
            />
            <div className="absolute right-[4.8%] top-[2.7%] flex h-[7.4%] w-[18.5%] items-center justify-center bg-white" aria-hidden="true">
              <span className="font-sans text-[clamp(18px,4.6vw,64px)] font-bold leading-none tracking-[0.02em] text-[#4F4F4F]">PD75</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[89px] bg-obsidian">
        <div className={container}>
          <h2 className="font-[family-name:var(--font-serif)] text-[32px] font-semibold text-alabaster mb-[13px]">
            {content.performanceTitle}<span className="text-red">.</span>
          </h2>
          <p className="max-w-[860px] text-[13px] leading-[1.8] text-warm">{content.performanceIntro}</p>
          <div className="mt-[34px] overflow-x-auto border border-line">
            <table className="min-w-[850px] w-full bg-surface text-left">
              <thead className="bg-[#081D2A] text-white">
                <tr>
                  {Object.values(content.performanceColumns).map((label) => (
                    <th key={label} className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.08em]">{label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.performance.map((row) => (
                  <tr key={row.glazing} className="border-t border-line">
                    <td className="px-5 py-4 text-[12px] font-semibold text-alabaster">{row.glazing}</td>
                    <td className="px-5 py-4 text-[12px] text-warm">{row.thermal}</td>
                    <td className="px-5 py-4 text-[12px] text-warm">{row.wind}</td>
                    <td className="px-5 py-4 text-[12px] text-warm">{row.air}</td>
                    <td className="px-5 py-4 text-[12px] text-warm">{row.water}</td>
                    <td className="px-5 py-4 text-[12px] text-warm">{row.acoustic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex items-start gap-4 border-l-4 border-[#DAAF37] bg-[#F5E8D2] px-5 py-4">
            <AlertTriangle size={20} className="mt-0.5 shrink-0 text-[#DAAF37]" />
            <p className="text-[12px] leading-[1.7] text-warm">{content.note}</p>
          </div>
        </div>
      </section>

      <ProductFaqSection locale={locale} faqs={faqs} />
      <FrpRelatedProducts locale={locale} current="xd75" />

      <section className="py-[89px] bg-surface">
        <div className={`${container} text-center`}>
          <h2 className="font-[family-name:var(--font-serif)] font-semibold text-[32px] text-alabaster mb-[21px]">
            {content.ctaTitle}<span className="text-red">?</span>
          </h2>
          <div className="flex flex-col justify-center gap-[13px] sm:flex-row">
            <Link href={`/${locale}/rfq`} className="inline-flex items-center justify-center gap-[10px] bg-gold px-[34px] py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy hover:brightness-105">
              <span className="inline-block h-[5px] w-[5px] bg-red" />
              {content.cta}
            </Link>
            <Link href={`/${locale}/systems/frp`} className="inline-flex items-center justify-center gap-2 border border-line px-[34px] py-4 text-[11px] font-medium uppercase tracking-[3px] text-alabaster transition-colors hover:border-warm">
              <ArrowLeft size={13} />
              {content.backLabel}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
