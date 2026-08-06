import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, Check, ShieldCheck, Snowflake, ThermometerSnowflake } from "lucide-react";
import type { PageLocale } from "@/content/pages";
import type { ColdClimateFrpSystemContent } from "@/content/coldClimateFrp";
import { breadcrumbJsonLd } from "@/lib/jsonld";

type Props = {
  locale: PageLocale;
  content: ColdClimateFrpSystemContent;
};

const container = "mx-auto max-w-[1200px] px-[55px] max-lg:px-6";
const climateIcons = [ThermometerSnowflake, Snowflake, ShieldCheck];

export default function ColdClimateFrpSystemPage({ locale, content }: Props) {
  const canonical = `https://pindesys.com/${locale}/systems/frp/${content.slug}`;
  const crumbs = breadcrumbJsonLd([
    { name: "Home", url: `https://pindesys.com/${locale}` },
    { name: "Systems", url: `https://pindesys.com/${locale}/systems` },
    { name: "FRP", url: `https://pindesys.com/${locale}/systems/frp` },
    { name: content.designation, url: canonical },
  ]);
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: content.title,
    description: content.seo.description,
    image: `https://pindesys.com${content.image.src}`,
    url: canonical,
    category: content.productType,
    brand: { "@type": "Brand", name: "PINDÉ" },
    additionalProperty: content.specs.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.label,
      value: spec.value,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />

      <nav aria-label="Breadcrumb" className="border-b border-line bg-obsidian pt-[104px] py-4">
        <div className={`${container} flex flex-wrap items-center gap-2 pt-[13px] text-[11px] uppercase tracking-[2px] text-muted`}>
          <Link href={`/${locale}`} className="transition-colors hover:text-alabaster">Home</Link>
          <span>/</span>
          <Link href={`/${locale}/systems`} className="transition-colors hover:text-alabaster">Systems</Link>
          <span>/</span>
          <Link href={`/${locale}/systems/frp`} className="transition-colors hover:text-alabaster">FRP</Link>
          <span>/</span>
          <span className="text-warm">{content.designation}</span>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-[#0D2440] py-[89px] text-white">
        <div className="pointer-events-none absolute inset-0 opacity-35" aria-hidden="true">
          <div className="absolute -right-28 -top-36 h-[480px] w-[480px] rounded-full border border-white/20" />
          <div className="absolute -right-12 -top-20 h-[340px] w-[340px] rounded-full border border-white/15" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
        <div className={`${container} relative grid items-center gap-[55px] lg:grid-cols-[1.05fr_0.95fr]`}>
          <div>
            <span className="mb-[21px] inline-block bg-red px-3 py-2 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
              {content.supplyStatus}
            </span>
            <p className="mb-[13px] text-[10px] font-bold uppercase tracking-[0.16em] text-[#E5C47F]">
              {content.eyebrow}
            </p>
            <h1 className="mb-[21px] font-[family-name:var(--font-serif)] text-[clamp(40px,6vw,64px)] font-semibold leading-[0.95] text-white">
              {content.title.replace(/[.!?]+$/, "")}<span className="text-red">.</span>
            </h1>
            <p className="max-w-[680px] text-[15px] leading-[1.9] text-white/75">{content.intro}</p>
          </div>
          <div className="relative aspect-square overflow-hidden border border-white/15 bg-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,#ffffff_0%,#f5f7f9_70%,#e9edf2_100%)]" />
            <Image
              src={content.image.src}
              alt={content.image.alt}
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="relative object-contain p-[8%]"
            />
            <div className="absolute bottom-5 left-5 border-l-2 border-red bg-white/90 px-4 py-2 backdrop-blur-sm">
              <span className="block text-[11px] font-extrabold uppercase tracking-[0.12em] text-navy">{content.designation}</span>
              <span className="mt-0.5 block text-[10px] text-muted">{content.productType}</span>
            </div>
          </div>
        </div>
        <div className={`${container} relative mt-[34px] grid grid-cols-2 gap-[13px] sm:grid-cols-4`}>
          {content.heroCards.map((card) => (
            <div key={card.label} className="border border-white/15 bg-white/[0.06] p-5 backdrop-blur-sm">
              <span className="block text-[22px] font-extrabold text-white">{card.value}</span>
              <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.06em] text-white/60">{card.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-[89px]">
        <div className={container}>
          <div className="mb-[34px] max-w-[860px]">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-red">{content.designation} · cold-climate engineering</p>
            <h2 className="mb-[13px] font-[family-name:var(--font-serif)] text-[32px] font-semibold text-alabaster">
              {content.climateTitle}<span className="text-red">.</span>
            </h2>
            <p className="text-[14px] leading-[1.9] text-warm">{content.climateIntro}</p>
          </div>
          <div className="grid gap-[13px] lg:grid-cols-3">
            {content.climateFeatures.map((feature, index) => {
              const Icon = climateIcons[index];
              return (
                <article key={feature.title} className="border border-line bg-obsidian p-6 sm:p-8">
                  <Icon size={25} strokeWidth={1.5} className="text-[#C7A154]" />
                  <h3 className="mt-6 text-[21px] font-extrabold text-alabaster">{feature.title}</h3>
                  <p className="mt-4 text-[13px] leading-[1.8] text-warm">{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-obsidian py-[89px]">
        <div className={container}>
          <div className="mb-[34px] max-w-[860px]">
            <h2 className="mb-[13px] font-[family-name:var(--font-serif)] text-[32px] font-semibold text-alabaster">
              {content.ratingsTitle}<span className="text-red">.</span>
            </h2>
            <p className="text-[13px] leading-[1.8] text-warm">{content.ratingsIntro}</p>
          </div>
          <div className="grid gap-[13px] sm:grid-cols-2 lg:grid-cols-5">
            {content.ratings.map((rating) => (
              <article key={rating.label} className="border border-line bg-surface p-5">
                <span className="block text-[10px] font-bold uppercase tracking-[0.08em] text-muted">{rating.label}</span>
                <strong className="mt-3 block text-[23px] font-extrabold text-alabaster">{rating.value}</strong>
                <span className="mt-3 block text-[10px] leading-[1.55] text-muted">{rating.note}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0D2440] py-[89px] text-white">
        <div className={`${container} grid gap-[55px] lg:grid-cols-[0.8fr_1.2fr]`}>
          <div>
            <h2 className="mb-[13px] font-[family-name:var(--font-serif)] text-[32px] font-semibold text-white">
              {content.openingsTitle}<span className="text-red">.</span>
            </h2>
            <p className="text-[13px] leading-[1.8] text-white/70">{content.openingsIntro}</p>
          </div>
          <ul className="grid gap-[13px] sm:grid-cols-2">
            {content.openingModes.map((mode) => (
              <li key={mode} className="flex items-start gap-3 border border-white/15 bg-white/[0.06] p-5 text-[13px] leading-[1.65] text-white/80">
                <Check size={16} className="mt-0.5 shrink-0 text-[#E5C47F]" />
                {mode}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface py-[89px]">
        <div className={container}>
          <h2 className="mb-[34px] font-[family-name:var(--font-serif)] text-[32px] font-semibold text-alabaster">
            {content.specsTitle}<span className="text-red">.</span>
          </h2>
          <div className="overflow-hidden border border-line bg-obsidian">
            <table className="w-full">
              <tbody>
                {content.specs.map((spec, index) => (
                  <tr key={spec.label} className={index % 2 === 0 ? "bg-obsidian" : "bg-surface/70"}>
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

      <section className="bg-obsidian py-[89px]">
        <div className={container}>
          <div className="mb-[34px] max-w-[860px]">
            <h2 className="mb-[13px] font-[family-name:var(--font-serif)] text-[32px] font-semibold text-alabaster">
              {content.glazingTitle}<span className="text-red">.</span>
            </h2>
            <p className="text-[13px] leading-[1.8] text-warm">{content.glazingIntro}</p>
          </div>
          <div className="overflow-x-auto border border-line">
            <table className="w-full min-w-[850px] bg-surface text-left">
              <thead className="bg-[#0D2440] text-white">
                <tr>
                  {Object.values(content.glazingColumns).map((label) => (
                    <th key={label} className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.08em]">{label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.glazingRows.map((row) => (
                  <tr key={row.glazing} className="border-t border-line">
                    <td className="px-5 py-4 text-[12px] font-semibold text-alabaster">{row.glazing}</td>
                    <td className="px-5 py-4 text-[12px] text-warm">{row.ug}</td>
                    <td className="px-5 py-4 text-[12px] text-warm">{row.uf}</td>
                    <td className="px-5 py-4 text-[12px] text-warm">{row.uw}</td>
                    <td className="px-5 py-4 text-[12px] text-warm">{row.hardware}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex items-start gap-4 border-l-4 border-[#C7A154] bg-[#F8F4E9] px-5 py-4">
            <AlertTriangle size={20} className="mt-0.5 shrink-0 text-[#C7A154]" />
            <p className="text-[12px] leading-[1.7] text-warm">{content.note}</p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-[89px]">
        <div className={`${container} text-center`}>
          <h2 className="mb-[21px] font-[family-name:var(--font-serif)] text-[32px] font-semibold text-alabaster">
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
