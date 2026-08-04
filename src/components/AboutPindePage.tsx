import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  ClipboardCheck,
  DraftingCompass,
  Factory,
  Gauge,
  Layers3,
  ScanLine,
  ShieldCheck,
} from "lucide-react";
import type { AboutContent, AboutLocale } from "@/content/about";

type Props = {
  locale: AboutLocale;
  content: AboutContent;
};

const container = "mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10";
const capabilityIcons = [DraftingCompass, Layers3, Gauge, ScanLine, ClipboardCheck];

function SectionHeading({
  eyebrow,
  title,
  intro,
  inverted = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  inverted?: boolean;
}) {
  return (
    <div className="max-w-[880px]">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-5 w-1 bg-[#D71920]" />
        <span className={`text-[11px] font-bold uppercase tracking-[0.08em] ${inverted ? "text-white/65" : "text-[#7A828C]"}`}>
          {eyebrow}
        </span>
      </div>
      <h2 className={`text-[clamp(32px,4.2vw,54px)] font-extrabold leading-[1.06] tracking-[-0.035em] ${inverted ? "text-white" : "text-[#0D2440]"}`}>
        {title}
      </h2>
      {intro ? <p className={`mt-5 max-w-[790px] text-[15px] leading-[1.75] ${inverted ? "text-white/68" : "text-[#4F5B69]"}`}>{intro}</p> : null}
    </div>
  );
}

export default function AboutPindePage({ locale, content }: Props) {
  const pageUrl = `https://pindesys.com/${locale}/about`;
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${pageUrl}#about`,
    url: pageUrl,
    name: content.seo.title,
    description: content.seo.description,
    inLanguage: locale,
    mainEntity: {
      "@type": "Organization",
      name: "PINDÉ",
      url: "https://pindesys.com",
      location: {
        "@type": "Place",
        name: locale === "ru" ? "Чунцин, Китай" : "Chongqing, China",
      },
      knowsAbout: [
        "Aluminium window systems",
        "FRP window systems",
        "Profile machining",
        "Glass-free CKD kits",
        "Window system engineering",
      ],
    },
  };

  return (
    <article lang={content.lang} className="market-shell overflow-hidden bg-white text-[#0D2440]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />

      {/* ── Hero ── */}
      <section className="border-b border-[#DCE1E6] bg-[#E9EDF2] pt-[96px] lg:pt-[104px]">
        <div className={`${container} grid lg:grid-cols-[1.02fr_0.98fr]`}>
          <div className="flex flex-col justify-center py-14 lg:min-h-[650px] lg:py-20 lg:pr-16">
            <nav aria-label={locale === "ru" ? "Хлебные крошки" : "Breadcrumb"} className="mb-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.08em] text-[#7A828C]">
              <Link href={`/${locale}`} className="transition-colors hover:text-[#C7A154]">PINDÉ</Link>
              <span className="text-[#DCE1E6]">/</span>
              <span aria-current="page">{content.breadcrumb}</span>
            </nav>

            <p className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.08em] text-[#C7A154]">
              <span className="h-2 w-2 bg-[#D71920]" />
              {content.hero.eyebrow}
            </p>
            <h1 className="max-w-[750px] text-[clamp(44px,5.6vw,72px)] font-extrabold leading-[1] tracking-[-0.045em] text-[#0D2440]">
              {content.hero.title}
            </h1>
            <p className="mt-6 max-w-[720px] text-[16px] leading-[1.75] text-[#4F5B69]">{content.hero.intro}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={`/${locale}/rfq`} className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#C7A154] px-6 py-3 text-[12px] font-bold text-[#0D2440] transition-[filter] hover:brightness-105">
                {content.hero.primaryCta}
                <ArrowRight size={16} />
              </Link>
              <Link href={`/${locale}/supply`} className="inline-flex min-h-12 items-center justify-center gap-3 border border-[#0D2440] px-6 py-3 text-[12px] font-bold text-[#0D2440] transition-colors hover:bg-white/65">
                {content.hero.secondaryCta}
              </Link>
            </div>

            <p className="mt-7 flex max-w-[720px] items-start gap-3 border-l-4 border-[#C7A154] bg-[#F8F4E9] px-4 py-3 text-[12px] leading-[1.65] text-[#4F5B69]">
              <ShieldCheck size={17} className="mt-0.5 shrink-0 text-[#C7A154]" />
              {content.hero.note}
            </p>
          </div>

          <div className="relative -mx-5 min-h-[390px] overflow-hidden sm:-mx-8 lg:mx-0 lg:min-h-[650px]">
            <Image src="/images/pinde-aluminium-window-manufacturing-plant-chongqing.webp" alt={content.hero.imageAlt} fill priority sizes="(min-width: 1024px) 49vw, 100vw" className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D2440]/90 via-[#0D2440]/10 to-transparent" />
            <div className="absolute inset-x-5 bottom-5 border-l-4 border-[#D71920] bg-[#0D2440]/90 p-5 text-white backdrop-blur-sm sm:inset-x-8 lg:inset-x-8 lg:bottom-8">
              <span className="block text-[10px] font-bold uppercase tracking-[0.1em] text-white/55">PINDÉ · CHONGQING</span>
              <span className="mt-2 block text-[26px] font-extrabold">100,000 m²</span>
              <span className="mt-1 block text-[12px] text-white/65">{content.facts[1].label}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Facts ── */}
      <section className="border-b border-[#DCE1E6] bg-[#0D2440] text-white" aria-label={locale === "ru" ? "Ключевые факты" : "Key facts"}>
        <div className={`${container} grid sm:grid-cols-2 lg:grid-cols-4`}>
          {content.facts.map((fact, index) => (
            <div key={fact.value} className={`py-7 sm:px-6 lg:py-8 ${index > 0 ? "border-t border-white/15 sm:border-t-0 sm:border-l" : ""} ${index === 2 ? "sm:border-t lg:border-t-0" : ""}`}>
              <strong className="block text-[22px] font-extrabold tracking-[-0.02em] text-white">{fact.value}</strong>
              <span className="mt-2 block max-w-[230px] text-[11px] font-semibold leading-[1.55] text-white/55">{fact.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Story + Image ── */}
      <section className="py-16 lg:py-24">
        <div className={`${container} grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20`}>
          <div>
            <SectionHeading eyebrow={content.story.eyebrow} title={content.story.title} />
            <div className="mt-8 max-w-[760px] space-y-5 text-[15px] leading-[1.8] text-[#4F5B69]">
              {content.story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>

          <aside className="self-start border-t-4 border-[#D71920] bg-[#F6F7F8] p-6 lg:p-8" aria-label={content.story.scopeLabel}>
            <div className="flex items-center gap-3 text-[#C7A154]">
              <Boxes size={21} />
              <h2 className="text-[11px] font-bold uppercase tracking-[0.08em]">{content.story.scopeLabel}</h2>
            </div>
            <ul className="mt-5 space-y-4">
              {content.story.scopeItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[13px] font-semibold leading-[1.6] text-[#31465E]">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#D71920]" />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {/* Factory campus image */}
        <div className={`${container} mt-12`}>
          <div className="relative aspect-[21/9] overflow-hidden border border-[#DCE1E6]">
            <Image
              src="/images/pinde-integrated-manufacturing-campus-chongqing.webp"
              alt={locale === "ru" ? "Производственная база PINDÉ в Чунцине" : "PINDÉ manufacturing campus in Chongqing"}
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-center text-[11px] font-semibold uppercase tracking-[0.06em] text-[#7A828C]">
            {locale === "ru"
              ? "Интегрированная производственная база PINDÉ · Чунцин, Китай"
              : "PINDÉ integrated manufacturing campus · Chongqing, China"}
          </p>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="border-y border-[#DCE1E6] bg-[#F6F7F8] py-16 lg:py-24">
        <div className={container}>
          <SectionHeading eyebrow={content.capabilities.eyebrow} title={content.capabilities.title} intro={content.capabilities.intro} />
          <div className="mt-10 grid gap-px overflow-hidden border border-[#DCE1E6] bg-[#DCE1E6] lg:grid-cols-2">
            {content.capabilities.items.map((item, index) => {
              const Icon = capabilityIcons[index];
              return (
                <article key={item.code} className={`bg-white p-6 lg:p-8 ${index === content.capabilities.items.length - 1 ? "lg:col-span-2" : ""}`}>
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-12 w-12 items-center justify-center bg-[#E9EDF2] text-[#C7A154]">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <span className="font-[family-name:var(--font-mono)] text-[12px] font-bold text-[#D71920]">{item.code}</span>
                  </div>
                  <h3 className="mt-6 text-[22px] font-extrabold tracking-[-0.025em] text-[#0D2440]">{item.title}</h3>
                  <dl className={`mt-6 grid gap-5 ${index === content.capabilities.items.length - 1 ? "lg:grid-cols-2" : ""}`}>
                    <div className="border-l-2 border-[#C7A154] pl-4">
                      <dt className="text-[9px] font-bold uppercase tracking-[0.09em] text-[#7A828C]">{content.capabilities.evidenceLabel}</dt>
                      <dd className="mt-2 text-[13px] leading-[1.65] text-[#4F5B69]">{item.evidence}</dd>
                    </div>
                    <div className="border-l-2 border-[#D71920] pl-4">
                      <dt className="text-[9px] font-bold uppercase tracking-[0.09em] text-[#7A828C]">{content.capabilities.valueLabel}</dt>
                      <dd className="mt-2 text-[13px] font-semibold leading-[1.65] text-[#31465E]">{item.value}</dd>
                    </div>
                  </dl>
                </article>
              );
            })}
          </div>

          {/* Process images — extrusion + CNC */}
          <div className="mt-10 grid gap-[13px] md:grid-cols-2">
            <div className="relative aspect-[3/2] overflow-hidden border border-[#DCE1E6]">
              <Image
                src="/images/aluminium-profile-extrusion-production-line.webp"
                alt={locale === "ru" ? "Экструзия алюминиевого профиля" : "Aluminium profile extrusion"}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0D2440]/85 to-transparent p-4 pt-10">
                <span className="text-[11px] font-bold text-white">
                  {locale === "ru" ? "Экструзия и обработка поверхности" : "Extrusion & surface treatment"}
                </span>
              </div>
            </div>
            <div className="relative aspect-[3/2] overflow-hidden border border-[#DCE1E6]">
              <Image
                src="/images/cnc-aluminium-profile-precision-machining.webp"
                alt={locale === "ru" ? "CNC-обработка алюминиевого профиля" : "CNC aluminium profile machining"}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0D2440]/85 to-transparent p-4 pt-10">
                <span className="text-[11px] font-bold text-white">
                  {locale === "ru" ? "CNC-обработка и глубокая переработка" : "CNC & deep processing"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-16 lg:py-24">
        <div className={`${container} grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20`}>
          <div>
            <SectionHeading eyebrow={content.timeline.eyebrow} title={content.timeline.title} />
            <p className="mt-6 border-l-4 border-[#C7A154] bg-[#F8F4E9] px-4 py-3 text-[12px] leading-[1.65] text-[#4F5B69]">{content.timeline.note}</p>
          </div>
          <ol className="border-t border-[#DCE1E6]">
            {content.timeline.items.map((item) => (
              <li key={item.year} className="grid gap-3 border-b border-[#DCE1E6] py-6 sm:grid-cols-[110px_1fr] sm:gap-8">
                <span className="font-[family-name:var(--font-mono)] text-[15px] font-bold text-[#D71920]">{item.year}</span>
                <div>
                  <h3 className="text-[17px] font-extrabold text-[#0D2440]">{item.title}</h3>
                  <p className="mt-2 text-[13px] leading-[1.7] text-[#4F5B69]">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Workflow with factory image ── */}
      <section className="landing-blueprint-grid bg-[#0D2440] py-16 text-white lg:py-24">
        <div className={container}>
          <SectionHeading eyebrow={content.workflow.eyebrow} title={content.workflow.title} intro={content.workflow.intro} inverted />
          <ol className="mt-10 grid gap-px overflow-hidden border border-white/15 bg-white/15 md:grid-cols-2 lg:grid-cols-5">
            {content.workflow.items.map((item) => (
              <li key={item.number} className="bg-[#0D2440]/95 p-6">
                <span className="font-[family-name:var(--font-mono)] text-[12px] font-bold text-[#D71920]">{item.number}</span>
                <h3 className="mt-8 text-[17px] font-extrabold text-white">{item.title}</h3>
                <p className="mt-3 text-[12px] leading-[1.7] text-white/58">{item.text}</p>
              </li>
            ))}
          </ol>

          {/* Assembly line image */}
          <div className="mt-10 relative aspect-[21/9] overflow-hidden border border-white/15">
            <Image
              src="/images/pinde-window-door-assembly-line.webp"
              alt={locale === "ru" ? "Сборочная линия PINDÉ" : "PINDÉ assembly line"}
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Quality + Image ── */}
      <section className="border-b border-[#DCE1E6] bg-[#E9EDF2] py-16 lg:py-24">
        <div className={`${container} grid items-start gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20`}>
          <div>
            <SectionHeading eyebrow={content.quality.eyebrow} title={content.quality.title} />
            <p className="mt-6 max-w-[780px] text-[15px] leading-[1.8] text-[#4F5B69]">{content.quality.text}</p>

            {/* Quality inspection image */}
            <div className="mt-8 relative aspect-[16/9] overflow-hidden border border-[#DCE1E6]">
              <Image
                src="/images/aluminium-window-quality-inspection-factory.webp"
                alt={locale === "ru" ? "Контроль качества на производстве PINDÉ" : "Quality inspection at PINDÉ"}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="border-t-4 border-[#C7A154] bg-white p-6 lg:p-8">
            <div className="flex items-center gap-3 text-[#C7A154]">
              <Factory size={21} />
              <span className="text-[11px] font-bold uppercase tracking-[0.08em]">PINDÉ / QA REGISTER</span>
            </div>
            <div className="mt-6 grid sm:grid-cols-2">
              {content.quality.tags.map((tag, index) => (
                <div key={tag} className={`flex items-center gap-3 border-[#DCE1E6] py-4 text-[12px] font-bold text-[#31465E] ${index < content.quality.tags.length - 2 ? "border-b" : ""} ${index % 2 === 0 ? "sm:border-r sm:pr-4" : "sm:pl-4"}`}>
                  <span className="h-2 w-2 shrink-0 bg-[#D71920]" />
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="py-16 lg:py-24">
        <div className={container}>
          <SectionHeading eyebrow={content.partners.eyebrow} title={content.partners.title} intro={content.partners.intro} />
          <div className="mt-9 grid grid-cols-2 gap-px overflow-hidden border border-[#DCE1E6] bg-[#DCE1E6] sm:grid-cols-4 lg:grid-cols-8">
            {content.partners.brands.map((brand) => (
              <div key={brand} className="flex min-h-24 items-center justify-center bg-white px-4 text-center text-[11px] font-extrabold tracking-[0.02em] text-[#31465E]">{brand}</div>
            ))}
          </div>
          <p className="mt-5 flex max-w-[1000px] items-start gap-3 text-[11px] leading-[1.65] text-[#7A828C]">
            <ShieldCheck size={15} className="mt-0.5 shrink-0 text-[#C7A154]" />
            {content.partners.note}
          </p>
        </div>
      </section>

      {/* ── Factory aerial ── */}
      <div className={`${container}`}>
        <div className="relative aspect-[21/9] overflow-hidden border border-[#DCE1E6]">
          <Image
            src="/images/pinde-factory-aerial-view-chongqing.webp"
            alt={locale === "ru" ? "Панорама завода PINDÉ в Чунцине" : "Aerial view of PINDÉ factory in Chongqing"}
            fill
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
      </div>

      {/* ── CTA ── */}
      <section className="mt-16 border-t-[6px] border-[#C7A154] bg-[#0D2440] py-14 text-white lg:mt-24 lg:py-16">
        <div className={`${container} grid items-end gap-8 lg:grid-cols-[1fr_auto]`}>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-white/65">{content.cta.eyebrow}</p>
            <h2 className="mt-4 max-w-[880px] text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.08] tracking-[-0.035em]">{content.cta.title}</h2>
            <p className="mt-4 max-w-[760px] text-[14px] leading-[1.7] text-white/75">{content.cta.text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Link href={`/${locale}/rfq`} className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#C7A154] px-6 py-3 text-[12px] font-bold text-[#0D2440] transition-[filter] hover:brightness-105">
              {content.cta.primary}
              <ArrowRight size={16} />
            </Link>
            <Link href={`/${locale}/systems`} className="inline-flex min-h-12 items-center justify-center border border-white/55 px-6 py-3 text-[12px] font-bold text-white transition-colors hover:bg-white/10">
              {content.cta.secondary}
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
