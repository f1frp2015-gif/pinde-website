import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, ArrowRight, Check, ShieldCheck, Snowflake, ThermometerSnowflake } from "lucide-react";
import type { PageLocale } from "@/content/pages";
import type { ColdClimateFrpCategoryContent } from "@/content/coldClimateFrpCategory";
import { coldClimateFrpSystems, coldClimateFrpSystemSlugs } from "@/content/coldClimateFrp";
import { breadcrumbJsonLd } from "@/lib/jsonld";

type Props = {
  locale: PageLocale;
  content: ColdClimateFrpCategoryContent;
};

const container = "mx-auto max-w-[1200px] px-[55px] max-lg:px-6";
const scopeIcons = [Snowflake, ShieldCheck, ThermometerSnowflake];

export default function ColdClimateFrpCategoryPage({ locale, content }: Props) {
  const systems = coldClimateFrpSystemSlugs.map((slug) => coldClimateFrpSystems[slug][locale]);
  const canonical = `https://pindesys.com/${locale}/systems/frp/cold-climate`;
  const homeLabel = locale === "ru" ? "Главная" : "Home";
  const systemsLabel = locale === "ru" ? "Системы" : "Systems";
  const crumbs = breadcrumbJsonLd([
    { name: homeLabel, url: `https://pindesys.com/${locale}` },
    { name: systemsLabel, url: `https://pindesys.com/${locale}/systems` },
    { name: "FRP", url: `https://pindesys.com/${locale}/systems/frp` },
    { name: content.breadcrumbLabel, url: canonical },
  ]);
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: content.title,
    description: content.seo.description,
    url: canonical,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: systems.length,
      itemListElement: systems.map((system, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: system.title,
        url: `https://pindesys.com/${locale}/systems/frp/${system.slug}`,
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />

      <nav aria-label={locale === "ru" ? "Хлебные крошки" : "Breadcrumb"} className="border-b border-line bg-obsidian pt-[104px] py-4">
        <div className={`${container} flex flex-wrap items-center gap-2 pt-[13px] text-[11px] uppercase tracking-[2px] text-muted`}>
          <Link href={`/${locale}`} prefetch={false} className="transition-colors hover:text-alabaster">{homeLabel}</Link>
          <span>/</span>
          <Link href={`/${locale}/systems`} prefetch={false} className="transition-colors hover:text-alabaster">{systemsLabel}</Link>
          <span>/</span>
          <Link href={`/${locale}/systems/frp`} prefetch={false} className="transition-colors hover:text-alabaster">FRP</Link>
          <span>/</span>
          <span className="text-warm">{content.breadcrumbLabel}</span>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-[#0D2440] py-[89px] text-white">
        <div className="pointer-events-none absolute inset-0 opacity-35" aria-hidden="true">
          <div className="absolute -right-28 -top-36 h-[480px] w-[480px] rounded-full border border-white/20" />
          <div className="absolute -right-12 -top-20 h-[340px] w-[340px] rounded-full border border-white/15" />
        </div>
        <div className={`${container} relative grid items-center gap-[55px] lg:grid-cols-[1.05fr_0.95fr]`}>
          <div>
            <span className="mb-[21px] inline-block bg-red px-3 py-2 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
              {content.supplyStatus}
            </span>
            <p className="mb-[13px] text-[10px] font-bold uppercase tracking-[0.16em] text-[#E5C47F]">{content.eyebrow}</p>
            <h1 className="mb-[21px] font-[family-name:var(--font-serif)] text-[clamp(40px,6vw,64px)] font-semibold leading-[0.95] text-white">
              {content.title.replace(/[.!?]+$/, "")}<span className="text-red">.</span>
            </h1>
            <p className="max-w-[680px] text-[15px] leading-[1.9] text-white/75">{content.intro}</p>
          </div>
          <div className="grid grid-cols-2 gap-[13px]">
            {systems.map((system) => (
              <Link key={system.slug} href={`/${locale}/systems/frp/${system.slug}`} className="group overflow-hidden border border-white/15 bg-white">
                <div className="relative aspect-square bg-[radial-gradient(circle_at_50%_42%,#ffffff_0%,#f5f7f9_70%,#e9edf2_100%)]">
                  <Image
                    src={system.image.src}
                    alt={system.image.alt}
                    fill
                    loading="eager"
                    sizes="(max-width: 1024px) 45vw, 22vw"
                    className="object-contain p-[9%] transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="border-t border-line bg-white px-4 py-3">
                  <strong className="block text-[16px] font-extrabold text-navy">{system.designation}</strong>
                  <span className="mt-1 block text-[9px] uppercase tracking-[0.08em] text-muted">{system.productType}</span>
                </div>
              </Link>
            ))}
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
            <h2 className="mb-[13px] font-[family-name:var(--font-serif)] text-[32px] font-semibold text-alabaster">
              {content.scopeTitle}<span className="text-red">.</span>
            </h2>
            <p className="text-[14px] leading-[1.9] text-warm">{content.scopeIntro}</p>
          </div>
          <div className="grid gap-[13px] lg:grid-cols-3">
            {content.scopeItems.map((item, index) => {
              const Icon = scopeIcons[index];
              return (
                <article key={item.title} className="border border-line bg-obsidian p-6 sm:p-8">
                  <Icon size={25} strokeWidth={1.5} className="text-[#C7A154]" />
                  <h3 className="mt-6 text-[21px] font-extrabold text-alabaster">{item.title}</h3>
                  <p className="mt-4 text-[13px] leading-[1.8] text-warm">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#0D2440] py-[89px] text-white">
        <div className={container}>
          <div className="mb-[34px] max-w-[860px]">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#E5C47F]">{content.categoryLabel}</p>
            <h2 className="mb-[13px] font-[family-name:var(--font-serif)] text-[36px] font-semibold text-white">
              {content.productsTitle}<span className="text-red">.</span>
            </h2>
            <p className="text-[14px] leading-[1.85] text-white/70">{content.productsIntro}</p>
          </div>
          <div className="grid gap-[13px] lg:grid-cols-2">
            {systems.map((system) => (
              <article key={system.slug} className="grid overflow-hidden border border-white/15 bg-white/[0.05] sm:grid-cols-[42%_58%]">
                <div className="relative aspect-square min-w-0 bg-[radial-gradient(circle_at_50%_42%,#ffffff_0%,#f5f7f9_70%,#e9edf2_100%)] sm:aspect-auto sm:min-h-full">
                  <Image
                    src={system.image.src}
                    alt={system.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 42vw, 24vw"
                    className="object-contain p-[9%]"
                  />
                </div>
                <div className="flex min-w-0 flex-col p-6 sm:p-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#E5C47F]">{content.categoryLabel}</p>
                  <h3 className="mt-3 text-[28px] font-extrabold leading-tight text-white">{system.designation}</h3>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-white/50">{system.productType}</p>
                  <p className="mt-5 text-[13px] leading-[1.75] text-white/70">{system.cardDescription}</p>
                  <ul className="mt-5 grid gap-2 text-[11px] text-white/70">
                    {system.heroCards.slice(0, 3).map((card) => (
                      <li key={card.label} className="flex items-start gap-2">
                        <Check size={13} className="mt-0.5 shrink-0 text-[#E5C47F]" />
                        <span><strong className="text-white">{card.value}</strong> · {card.label}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/${locale}/systems/frp/${system.slug}`} className="mt-6 inline-flex items-center gap-2 self-start bg-gold px-[26px] py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-navy hover:brightness-105">
                    {system.cardCta}
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-obsidian py-[89px]">
        <div className={container}>
          <div className="mb-[34px] max-w-[860px]">
            <h2 className="mb-[13px] font-[family-name:var(--font-serif)] text-[32px] font-semibold text-alabaster">
              {content.comparisonTitle}<span className="text-red">.</span>
            </h2>
            <p className="text-[13px] leading-[1.8] text-warm">{content.comparisonIntro}</p>
          </div>
          <div className="overflow-x-auto border border-line">
            <table className="w-full min-w-[760px] bg-surface text-left">
              <thead className="bg-[#0D2440] text-white">
                <tr>
                  {Object.values(content.comparisonColumns).map((label) => (
                    <th key={label} className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.08em]">{label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.comparisonRows.map((row) => (
                  <tr key={row.criterion} className="border-t border-line">
                    <th scope="row" className="px-5 py-4 text-[12px] font-bold text-alabaster">{row.criterion}</th>
                    <td className="px-5 py-4 text-[12px] text-warm">{row.fd90}</td>
                    <td className="px-5 py-4 text-[12px] text-warm">{row.fdtl140}</td>
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
