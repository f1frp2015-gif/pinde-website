import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, ArrowRight, Check } from "lucide-react";
import type { PageLocale } from "@/content/pages";
import { coldClimateFrpSystems, coldClimateFrpSystemSlugs } from "@/content/coldClimateFrp";
import { pd75Content } from "@/content/pd75";
import { pd95Content } from "@/content/pd95";
import { breadcrumbJsonLd } from "@/lib/jsonld";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = { locale: PageLocale; content: any };

const container = "mx-auto max-w-[1200px] px-[55px] max-lg:px-6";

export default function SystemsFrpPage({ locale, content }: Props) {
  const pd75 = pd75Content[locale];
  const pd95 = pd95Content[locale];
  const coldClimateSystems = coldClimateFrpSystemSlugs.map((slug) => coldClimateFrpSystems[slug][locale]);
  const aluminiumCompositeSystems = [
    {
      designation: "PD75",
      href: "xd75",
      image: "/images/systems/pinde-pd75-ultra-frp-core-thermal-performance.webp",
      imageAlt: locale === "ru" ? "PD75 с Ultra FRP Core и визуализацией теплового потока" : "PD75 window with Ultra FRP Core and thermal-flow visualisation",
      imageClassName: "object-contain",
      content: pd75,
    },
    {
      designation: "PD95",
      href: "pd95",
      image: "/images/systems/pinde-pd95-passive-window-thermal-performance.webp",
      imageAlt: locale === "ru" ? "PD95 с теплоизоляционной зоной 80 мм и тепловой визуализацией" : "PD95 with an 80mm insulated zone and thermal visualisation",
      imageClassName: "object-cover object-[center_47%]",
      content: pd95,
    },
  ];
  const homeLabel = locale === "ru" ? "Главная" : "Home";
  const systemsLabel = locale === "ru" ? "Системы" : "Systems";
  const crumbs = breadcrumbJsonLd([
    { name: homeLabel, url: `https://pindesys.com/${locale}` },
    { name: systemsLabel, url: `https://pindesys.com/${locale}/systems` },
    { name: "FRP", url: `https://pindesys.com/${locale}/systems/frp` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <nav aria-label={locale === "ru" ? "Хлебные крошки" : "Breadcrumb"} className="pt-[104px] py-4 bg-obsidian border-b border-line">
        <div className={`${container} pt-[13px] flex items-center gap-2 text-[11px] tracking-[2px] uppercase text-muted`}>
          <Link href={`/${locale}`} className="hover:text-alabaster transition-colors">{homeLabel}</Link>
          <span>/</span>
          <Link href={`/${locale}/systems`} className="hover:text-alabaster transition-colors">{systemsLabel}</Link>
          <span>/</span>
          <span className="text-warm">FRP</span>
        </div>
      </nav>
      <section className="py-[89px] bg-obsidian">
        <div className={container}>
          <span className="inline-block bg-[#FF2D2D] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.08em] text-white mb-[21px]">{content.supplyStatus}</span>
          <h1 className="font-[family-name:var(--font-serif)] font-semibold text-[clamp(40px,6vw,64px)] leading-[0.95] text-alabaster mb-[21px]">
            {content.title.replace(/[.!?]+$/, "")}<span className="text-red">.</span>
          </h1>
          <p className="text-warm text-[15px] leading-[1.9] max-w-[680px]">{content.intro}</p>
          <div className="mt-[34px] grid grid-cols-2 sm:grid-cols-4 gap-[13px]">
            {content.heroCards.map((c: { label: string; value: string }) => (
              <div key={c.label} className="border border-line bg-surface p-5">
                <span className="block text-[22px] font-extrabold text-alabaster">{c.value}</span>
                <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.06em] text-muted">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-[89px] bg-surface">
        <div className={`${container} max-w-[860px]`}>
          {content.sections.map((s: { title: string; content: string }, i: number) => (
            <div key={i} className="mb-[55px] last:mb-0">
              <h2 className="font-[family-name:var(--font-serif)] text-[28px] font-semibold text-alabaster mb-[13px]">{s.title}<span className="text-red">.</span></h2>
              <p className="text-[14px] leading-[1.9] text-warm">{s.content}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="overflow-hidden bg-[#0D2440] py-[89px] text-white">
        <div className={container}>
          <div className="mb-[34px] flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[860px]">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#E5C47F]">
                {locale === "ru" ? "Отдельная категория · полностью FRP · класс 10" : "Dedicated category · full-FRP · Grade 10"}
              </p>
              <h2 className="mb-[13px] font-[family-name:var(--font-serif)] text-[36px] font-semibold leading-[1.05] text-white">
                {content.coldClimateTitle}<span className="text-red">.</span>
              </h2>
              <p className="text-[14px] leading-[1.85] text-white/70">{content.coldClimateIntro}</p>
            </div>
            <Link href={`/${locale}/systems/frp/cold-climate`} className="inline-flex shrink-0 items-center gap-2 self-start border border-[#E5C47F] px-[26px] py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#E5C47F] transition-colors hover:bg-[#E5C47F] hover:text-navy lg:self-auto">
              {content.coldClimateCategoryCta}
              <ArrowRight size={13} />
            </Link>
          </div>
          <div className="grid gap-[13px] lg:grid-cols-2">
            {coldClimateSystems.map((system) => (
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
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#E5C47F]">{content.coldClimateLabel}</p>
                  <h3 className="mt-3 text-[28px] font-extrabold leading-tight text-white">{system.designation}</h3>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-white/50">{system.productType}</p>
                  <p className="mt-5 text-[13px] leading-[1.75] text-white/70">{system.cardDescription}</p>
                  <div className="mt-5 grid grid-cols-2 gap-2 text-[10px] text-white/65">
                    {system.heroCards.slice(0, 4).map((card) => (
                      <div key={card.label} className="border border-white/10 px-3 py-2">
                        <strong className="block text-[14px] text-white">{card.value}</strong>
                        <span>{card.label}</span>
                      </div>
                    ))}
                  </div>
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
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#DAAF37]">{content.aluminiumCompositeLabel}</p>
            <h2 className="mb-[13px] font-[family-name:var(--font-serif)] text-[36px] font-semibold leading-[1.05] text-alabaster">
              {content.aluminiumCompositeTitle}<span className="text-red">.</span>
            </h2>
            <p className="text-[14px] leading-[1.85] text-warm">{content.aluminiumCompositeIntro}</p>
          </div>
          <div className="grid gap-[13px] lg:grid-cols-2">
            {aluminiumCompositeSystems.map((system) => (
              <article key={system.designation} className="overflow-hidden border border-line bg-surface">
                <div className="relative aspect-[16/10] overflow-hidden bg-white">
                  <Image
                    src={system.image}
                    alt={system.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={system.imageClassName}
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#DAAF37]">{system.content.eyebrow}</p>
                  <h3 className="mt-3 text-[30px] font-extrabold leading-tight text-alabaster">{system.designation}</h3>
                  <p className="mt-2 text-[13px] font-semibold text-warm">{system.content.title}</p>
                  <p className="mt-5 text-[13px] leading-[1.75] text-muted">{system.content.intro}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {system.content.heroCards.map((card) => (
                      <li key={card.label} className="flex items-start gap-3 text-[11px] leading-[1.6] text-warm">
                        <Check size={15} className="mt-0.5 shrink-0 text-red" />
                        <span><strong className="block text-alabaster">{card.value}</strong>{card.label}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/${locale}/systems/frp/${system.href}`} className="mt-8 inline-flex items-center gap-2 bg-gold px-[30px] py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy hover:brightness-105">
                    {locale === "ru" ? `Открыть серию ${system.designation}` : `Explore the ${system.designation} series`}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {content.note && (
        <section className="py-[55px] bg-surface border-t border-line">
          <div className={`${container} max-w-[860px] flex items-start gap-4`}>
            <AlertTriangle size={20} className="mt-0.5 shrink-0 text-[#DAAF37]" />
            <p className="text-[12px] leading-[1.7] text-muted">{content.note}</p>
          </div>
        </section>
      )}
      <section className="py-[89px] bg-obsidian">
        <div className={`${container} text-center`}>
          <h2 className="font-[family-name:var(--font-serif)] font-semibold text-[28px] text-alabaster mb-[21px]">
            {locale === "ru" ? "Интересует программа FRP" : "Interested in the FRP programme"}<span className="text-red">?</span>
          </h2>
          <Link href={`/${locale}/rfq`} className="inline-flex items-center gap-[10px] px-[34px] py-4 bg-gold text-navy text-[11px] font-medium tracking-[3px] uppercase rounded-[1px] hover:brightness-90">
            <span className="inline-block w-[5px] h-[5px] rounded-full bg-white" />
            {content.cta}
          </Link>
        </div>
      </section>
    </>
  );
}
