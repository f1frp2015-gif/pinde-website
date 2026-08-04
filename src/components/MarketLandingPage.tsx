import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  Check,
  ChevronRight,
  CircleDot,
  Factory,
  FileCheck2,
  Layers3,
  PackageCheck,
  Route,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import LandingInquiryForm from "@/components/LandingInquiryForm";
import type { LandingContent, LandingLocale } from "@/content/landing";

type Props = {
  locale: LandingLocale;
  content: LandingContent;
};

const sectionPadding = "py-16 lg:py-24";
const container = "mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10";

const marketUi = {
  en: {
    buyerLabel: "For manufacturers and project procurement",
    panelEyebrow: "Direct system supply",
    panelTitle: "Production-ready scope",
    panelMeta: "Chongqing · China / Russian-speaking markets",
    sourceLabel: "Manufacturing base",
    facts: [
      ["100,000 m²", "Integrated manufacturing base"],
      ["P1—P3", "Three supply-readiness levels"],
      ["2 days", "Technical RFQ review target"],
      ["6 markets", "Russian-speaking market focus"],
    ],
    systemScope: "System scope",
    supplyStatus: "Supply status",
    packageLabel: "Included in the launch package",
    formatMatrix: "Supply responsibility matrix",
    tableScope: "Scope",
    localBadge: "Local fabrication",
    chinaBadge: "Prepared in Chongqing",
    processMeta: "Qualification → pilot → repeat supply",
    responsibility: "Responsibility split",
    documentRegister: "Technical package",
    complianceTag: "Important before import",
    factoryFacts: [
      ["100,000 m²", "integrated base"],
      ["Chongqing", "production and dispatch"],
      ["P1—P3", "supply configurations"],
    ],
    rfqKicker: "Engineering desk",
  },
  ru: {
    buyerLabel: "Для производителей и проектного снабжения",
    panelEyebrow: "Прямые системные поставки",
    panelTitle: "Комплектация для производства",
    panelMeta: "Чунцин · Китай / Русскоязычные рынки",
    sourceLabel: "Производственная база",
    facts: [
      ["100 000 м²", "Интегрированная производственная база"],
      ["P1—P3", "Три уровня готовности поставки"],
      ["2 дня", "Целевой срок разбора запроса"],
      ["6 рынков", "Фокус на русскоязычных странах"],
    ],
    systemScope: "Состав системы",
    supplyStatus: "Статус поставки",
    packageLabel: "Что входит в пакет запуска",
    formatMatrix: "Матрица ответственности по поставке",
    tableScope: "Зона работ",
    localBadge: "Локальное производство",
    chinaBadge: "Подготовка в Чунцине",
    processMeta: "Квалификация → опытная партия → регулярные поставки",
    responsibility: "Разделение ответственности",
    documentRegister: "Технический пакет",
    complianceTag: "Важно до начала импорта",
    factoryFacts: [
      ["100 000 м²", "интегрированная база"],
      ["Чунцин", "производство и отгрузка"],
      ["P1—P3", "варианты комплектации"],
    ],
    rfqKicker: "Инженерный отдел",
  },
} as const;

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
    <div className="max-w-[860px]">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-5 w-1 bg-[#D62832]" />
        <span
          className={`text-[11px] font-bold uppercase tracking-[0.08em] ${
            inverted ? "text-white/65" : "text-[#526878]"
          }`}
        >
          {eyebrow}
        </span>
      </div>
      <h2
        className={`max-w-[820px] text-[clamp(32px,4.2vw,54px)] font-extrabold leading-[1.06] tracking-[-0.035em] ${
          inverted ? "text-white" : "text-[#102F45]"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 max-w-[760px] text-[15px] leading-[1.75] ${
            inverted ? "text-white/68" : "text-[#4E6473]"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

export default function MarketLandingPage({ locale, content }: Props) {
  const ui = marketUi[locale];
  const pageUrl = `https://pindesys.com/${locale}`;
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#system-supply`,
    name:
      locale === "ru"
        ? "Поставка алюминиевых и стеклокомпозитных оконных систем"
        : "Aluminium and FRP window system supply",
    description: content.seo.description,
    inLanguage: locale,
    provider: {
      "@type": "Organization",
      name: "PINDÉ",
      url: "https://pindesys.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chongqing",
        addressCountry: "CN",
      },
    },
    areaServed: [
      "Russia",
      "Kazakhstan",
      "Belarus",
      "Uzbekistan",
      "Armenia",
      "Kyrgyzstan",
    ],
    serviceType:
      locale === "ru"
        ? "Профильные системы, полуфабрикаты и CKD-комплекты для оконных производств"
        : "Profile systems, machined components and glass-free CKD kits for window fabricators",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: content.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <article lang={content.lang} className="market-shell overflow-hidden bg-white text-[#142C3D]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="border-b border-[#CDD9E0] bg-white pt-[96px] lg:pt-[104px]">
        <div className={`${container} grid lg:grid-cols-[1.06fr_0.94fr]`}>
          <div className="flex flex-col justify-center py-14 pr-0 lg:min-h-[680px] lg:py-20 lg:pr-16">
            <div className="mb-5 flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-[0.08em] text-[#4E6473]">
              <span className="bg-[#E7EFF4] px-3 py-2 text-[#0E527D]">B2B</span>
              <span>{ui.buyerLabel}</span>
            </div>

            <p className="mb-5 flex items-center gap-2 text-[12px] font-semibold text-[#526878]">
              <CircleDot size={14} className="text-[#D62832]" />
              {content.hero.eyebrow}
            </p>

            <h1 className="max-w-[760px] text-[clamp(42px,5.5vw,70px)] font-extrabold leading-[1.01] tracking-[-0.045em] text-[#102F45]">
              {content.hero.title}
            </h1>

            <p className="mt-6 max-w-[700px] text-[16px] leading-[1.75] text-[#4A6170]">
              {content.hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#D62832] px-6 py-3 text-[12px] font-bold text-white transition-colors hover:bg-[#B91F28]"
              >
                {content.hero.primaryCta}
                <ArrowRight size={16} />
              </Link>
              <Link
                href={`/${locale}/supply`}
                className="inline-flex min-h-12 items-center justify-center gap-3 border border-[#0E527D] px-6 py-3 text-[12px] font-bold text-[#0E527D] transition-colors hover:bg-[#E7EFF4]"
              >
                {content.hero.secondaryCta}
                <ChevronRight size={16} />
              </Link>
            </div>

            <p className="mt-6 flex max-w-[650px] items-start gap-3 border-l-4 border-[#F0B429] bg-[#FFF8DF] px-4 py-3 text-[12px] leading-[1.65] text-[#536571]">
              <ShieldCheck size={17} className="mt-0.5 shrink-0 text-[#A66B00]" />
              {content.hero.note}
            </p>
          </div>

          <div className="relative -mx-5 bg-[#102F45] text-white sm:-mx-8 lg:mx-0 lg:flex lg:min-h-[680px] lg:flex-col">
            <div className="relative h-[230px] overflow-hidden border-b border-white/15 lg:h-auto lg:aspect-[2000/755] lg:shrink-0">
              <Image
                src="/images/pinde-factory-aerial-view-chongqing.webp"
                alt={content.factory.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 47vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102F45]/90 via-[#102F45]/15 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 lg:bottom-7 lg:left-7 lg:right-7">
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.1em] text-white/65">
                    {ui.sourceLabel}
                  </span>
                  <span className="mt-1 block text-[20px] font-extrabold">Chongqing · China</span>
                </div>
                <span className="bg-white px-3 py-2 text-[11px] font-extrabold text-[#102F45]">
                  100,000 m²
                </span>
              </div>
            </div>

            <div className="landing-blueprint-grid flex-1 p-5 sm:p-8 lg:p-9">
              <div className="flex items-start justify-between gap-5 border-b border-white/15 pb-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#8CC2E2]">
                    {ui.panelEyebrow}
                  </span>
                  <h2 className="mt-2 text-[26px] font-extrabold leading-tight">{ui.panelTitle}</h2>
                </div>
                <Boxes size={28} className="shrink-0 text-[#E94A53]" />
              </div>

              <div className="mt-5 grid gap-3">
                {content.hero.cards.map((card, index) => (
                  <div
                    key={card.code}
                    className="grid grid-cols-[62px_1fr_auto] items-center gap-4 border border-white/15 bg-white/[0.045] p-4"
                  >
                    <span className="flex h-12 items-center justify-center border border-[#71A9CA] bg-[#0B466D] text-[12px] font-extrabold tracking-[0.04em]">
                      {card.code}
                    </span>
                    <div>
                      <h3 className="text-[14px] font-bold">{card.name}</h3>
                      <p className="mt-1 text-[11px] leading-[1.5] text-white/60">{card.detail}</p>
                    </div>
                    <span className="text-[10px] font-semibold text-white/35">0{index + 1}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.08em] text-white/45">
                {ui.panelMeta}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#CDD9E0] bg-[#F3F7F9]">
        <div className={`${container} grid grid-cols-2 divide-x divide-y divide-[#CDD9E0] border-x border-[#CDD9E0] lg:grid-cols-4 lg:divide-y-0`}>
          {ui.facts.map(([value, label]) => (
            <div key={label} className="min-h-[112px] px-4 py-5 sm:px-6">
              <strong className="block text-[22px] font-extrabold tracking-[-0.03em] text-[#0E527D]">
                {value}
              </strong>
              <span className="mt-2 block text-[11px] leading-[1.5] text-[#5C7180]">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-[#C9D7E0] bg-[#E7EFF4] py-5">
        <div className={`${container} flex flex-col gap-4 lg:flex-row lg:items-center`}>
          <span className="shrink-0 bg-[#0E527D] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
            {content.audience.label}
          </span>
          <div className="flex flex-wrap gap-x-7 gap-y-3">
            {content.audience.items.map((item) => (
              <span key={item} className="flex items-center gap-2 text-[12px] font-semibold text-[#29465A]">
                <Check size={14} className="text-[#D62832]" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="systems" className={`${sectionPadding} scroll-mt-28 bg-[#F3F7F9]`}>
        <div className={container}>
          <SectionHeading
            eyebrow={content.systems.eyebrow}
            title={content.systems.title}
            intro={content.systems.intro}
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {content.systems.items.map((system, index) => (
              <article key={system.number} className="flex h-full flex-col border border-[#C9D6DE] bg-white shadow-[0_10px_30px_rgba(16,47,69,0.06)]">
                <div className={`flex min-h-[118px] items-start justify-between gap-5 p-6 ${index === 0 ? "bg-[#0E527D]" : "bg-[#102F45]"}`}>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-white/60">
                      {ui.supplyStatus}
                    </span>
                    <p className="mt-2 text-[13px] font-bold text-white">{system.label}</p>
                  </div>
                  <span className="border border-white/25 px-3 py-2 text-[20px] font-extrabold text-white">
                    {system.number}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#5C7180]">
                    {ui.systemScope}
                  </p>
                  <h3 className="mt-3 text-[26px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#102F45]">
                    {system.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-[1.75] text-[#526878]">{system.description}</p>

                  <div className="mt-6 border-t border-[#D5DFE5] pt-5">
                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.08em] text-[#0E527D]">
                      {ui.packageLabel}
                    </p>
                    <ul className="grid gap-3">
                      {system.included.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[12px] leading-[1.65] text-[#3F596A]">
                          <Check size={15} className="mt-0.5 shrink-0 text-[#D62832]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mt-6 border-l-4 border-[#0E527D] bg-[#EAF2F6] px-4 py-3 text-[11px] leading-[1.65] text-[#4D6574]">
                    {system.keywords}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-4 border border-[#E1C477] bg-[#FFF8DF] p-5 text-[12px] leading-[1.7] text-[#5C593E]">
            <FileCheck2 size={20} className="mt-0.5 shrink-0 text-[#A66B00]" />
            {content.systems.evidence}
          </div>
        </div>
      </section>

      <section id="rail-route" className={`${sectionPadding} border-y border-[#CDD9E0] bg-white`}>
        <div className={container}>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionHeading eyebrow={content.logistics.eyebrow} title={content.logistics.title} />
            <div>
              <p className="max-w-[680px] text-[15px] leading-[1.8] text-[#4E6473]">
                {content.logistics.intro}
              </p>
              <dl className="mt-7 grid gap-px border border-[#C9D6DE] bg-[#C9D6DE] sm:grid-cols-3">
                {content.logistics.facts.map((fact) => (
                  <div key={fact.label} className="bg-[#F3F7F9] p-5">
                    <dt className="text-[10px] font-bold uppercase tracking-[0.07em] text-[#667B89]">
                      {fact.label}
                    </dt>
                    <dd className="mt-2 text-[22px] font-extrabold tracking-[-0.025em] text-[#0E527D]">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <figure className="mt-10 overflow-hidden border border-[#C9D6DE] bg-[#F3F7F9] shadow-[0_18px_50px_rgba(16,47,69,0.08)]">
            <a
              href="/images/yuxinou-freight-route-map.webp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={content.logistics.openMap}
              className="group block"
            >
              <div className="relative aspect-[1672/941] w-full overflow-hidden bg-white">
                <Image
                  src="/images/yuxinou-freight-route-map.webp"
                  alt={content.logistics.mapAlt}
                  fill
                  sizes="(min-width: 1280px) 1200px, calc(100vw - 40px)"
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
            </a>
            <figcaption className="flex flex-col gap-4 border-t border-[#C9D6DE] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-[11px] font-semibold text-[#526878]">{content.logistics.mapCaption}</span>
              <a
                href="/images/yuxinou-freight-route-map.webp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 text-[11px] font-bold text-[#0E527D] hover:text-[#D62832]"
              >
                {content.logistics.openMap}
                <ArrowRight size={14} />
              </a>
            </figcaption>
          </figure>

          <p className="mt-5 flex items-start gap-3 border-l-4 border-[#F0B429] bg-[#FFF8DF] px-5 py-4 text-[11px] leading-[1.7] text-[#5C593E]">
            <Route size={18} className="mt-0.5 shrink-0 text-[#A66B00]" />
            {content.logistics.note}
          </p>
        </div>
      </section>

      <section id="formats" className={`${sectionPadding} scroll-mt-28 border-y border-[#CDD9E0] bg-white`}>
        <div className={container}>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow={content.formats.eyebrow}
              title={content.formats.title}
              intro={content.formats.intro}
            />
            <span className="shrink-0 border border-[#C9D6DE] bg-[#F3F7F9] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.08em] text-[#526878]">
              {ui.formatMatrix}
            </span>
          </div>

          <div className="mt-10 grid gap-4 lg:hidden">
            {content.formats.items.map((format) => (
              <article key={format.level} className="border border-[#C9D6DE] bg-white">
                <div className="flex items-center justify-between bg-[#102F45] px-5 py-4 text-white">
                  <span className="text-[22px] font-extrabold">{format.level}</span>
                  <span className="border border-white/25 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.06em]">
                    {format.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-[21px] font-extrabold leading-tight text-[#102F45]">{format.title}</h3>
                  <dl className="mt-5 grid gap-5">
                    {[
                      [content.formats.labels.chongqing, format.from],
                      [content.formats.labels.local, format.local],
                      [content.formats.labels.fit, format.fit],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <dt className="text-[10px] font-bold uppercase tracking-[0.07em] text-[#0E527D]">{label}</dt>
                        <dd className="mt-2 text-[12px] leading-[1.65] text-[#526878]">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 hidden overflow-hidden border border-[#C9D6DE] lg:block">
            <div className="grid grid-cols-[180px_repeat(3,minmax(0,1fr))]">
              <div className="flex items-end bg-[#E7EFF4] p-5 text-[10px] font-bold uppercase tracking-[0.08em] text-[#526878]">
                {ui.tableScope}
              </div>
              {content.formats.items.map((format) => (
                <div key={format.level} className="border-l border-white/15 bg-[#102F45] p-5 text-white">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-[25px] font-extrabold">{format.level}</span>
                    <span className="border border-white/25 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.05em]">
                      {format.tag}
                    </span>
                  </div>
                  <h3 className="mt-5 min-h-[54px] text-[18px] font-extrabold leading-[1.2]">{format.title}</h3>
                </div>
              ))}

              {[
                [content.formats.labels.chongqing, "from"],
                [content.formats.labels.local, "local"],
                [content.formats.labels.fit, "fit"],
              ].map(([label, key], rowIndex) => (
                <div key={key} className="contents">
                  <div className={`border-t border-[#C9D6DE] p-5 text-[11px] font-bold text-[#0E527D] ${rowIndex % 2 ? "bg-white" : "bg-[#F3F7F9]"}`}>
                    {label}
                  </div>
                  {content.formats.items.map((format) => (
                    <div key={`${format.level}-${key}`} className={`border-l border-t border-[#C9D6DE] p-5 text-[12px] leading-[1.65] text-[#526878] ${rowIndex % 2 ? "bg-white" : "bg-[#F3F7F9]"}`}>
                      {format[key as "from" | "local" | "fit"]}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className={`${sectionPadding} scroll-mt-28 bg-[#102F45]`}>
        <div className={container}>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow={content.process.eyebrow} title={content.process.title} inverted />
            <p className="max-w-[360px] text-[11px] font-bold uppercase tracking-[0.08em] text-[#8BBBD6]">
              {ui.processMeta}
            </p>
          </div>

          <div className="relative mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-white/20 lg:block" />
            {content.process.items.map((step, index) => (
              <article key={step.number} className="relative border border-white/15 bg-white/[0.045] p-6 lg:border-r-0 lg:last:border-r">
                <span className="relative z-10 flex h-16 w-16 items-center justify-center border-4 border-[#102F45] bg-[#D62832] text-[14px] font-extrabold text-white">
                  {step.number}
                </span>
                <span className="absolute right-5 top-5 text-[10px] font-bold text-white/30">0{index + 1}/04</span>
                <h3 className="mt-7 text-[17px] font-extrabold text-white">{step.title}</h3>
                <p className="mt-3 text-[12px] leading-[1.7] text-white/62">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionPadding} bg-[#F3F7F9]`}>
        <div className={container}>
          <SectionHeading eyebrow={ui.responsibility} title={content.split.title} />

          <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-[1fr_72px_1fr]">
            <div className="border border-[#C9D6DE] bg-white">
              <div className="flex items-center gap-3 border-b border-[#C9D6DE] bg-[#0E527D] p-5 text-white">
                <Factory size={21} />
                <h3 className="text-[15px] font-extrabold">{content.split.chongqing.title}</h3>
                <span className="ml-auto text-[9px] font-bold uppercase tracking-[0.06em] text-white/60">{ui.chinaBadge}</span>
              </div>
              <ul className="grid gap-0">
                {content.split.chongqing.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 border-b border-[#E1E8EC] px-5 py-4 text-[12px] leading-[1.65] text-[#405A6A] last:border-b-0">
                    <Check size={15} className="mt-0.5 shrink-0 text-[#D62832]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-center py-2">
              <div className="flex h-12 w-12 rotate-90 items-center justify-center bg-[#D62832] text-white lg:rotate-0">
                <ArrowRight size={20} />
              </div>
            </div>

            <div className="border border-[#C9D6DE] bg-white">
              <div className="flex items-center gap-3 border-b border-[#C9D6DE] bg-[#102F45] p-5 text-white">
                <Wrench size={21} />
                <h3 className="text-[15px] font-extrabold">{content.split.destination.title}</h3>
                <span className="ml-auto text-[9px] font-bold uppercase tracking-[0.06em] text-white/60">{ui.localBadge}</span>
              </div>
              <ul className="grid gap-0">
                {content.split.destination.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 border-b border-[#E1E8EC] px-5 py-4 text-[12px] leading-[1.65] text-[#405A6A] last:border-b-0">
                    <Check size={15} className="mt-0.5 shrink-0 text-[#D62832]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-4 flex items-start gap-3 border border-[#C9D6DE] bg-white p-5 text-[12px] leading-[1.7] text-[#526878]">
            <Route size={19} className="mt-0.5 shrink-0 text-[#0E527D]" />
            {content.split.route}
          </p>
        </div>
      </section>

      <section id="engineering" className={`${sectionPadding} scroll-mt-28 border-y border-[#CDD9E0] bg-white`}>
        <div className={container}>
          <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr]">
            <div>
              <SectionHeading eyebrow={content.engineering.eyebrow} title={content.engineering.title} />
              <div className="mt-7 flex items-center gap-3 border-l-4 border-[#0E527D] bg-[#EAF2F6] px-4 py-4 text-[11px] font-bold uppercase tracking-[0.06em] text-[#0E527D]">
                <Layers3 size={19} />
                {ui.documentRegister}
              </div>
            </div>

            <div className="border border-[#C9D6DE]">
              {content.engineering.items.map((item, index) => {
                const icons = [PackageCheck, Wrench, FileCheck2, ShieldCheck];
                const Icon = icons[index];
                return (
                  <article key={item.title} className="grid gap-4 border-b border-[#C9D6DE] p-5 last:border-b-0 sm:grid-cols-[54px_180px_1fr] sm:items-center sm:p-6">
                    <span className="flex h-12 w-12 items-center justify-center bg-[#E7EFF4] text-[#0E527D]">
                      <Icon size={22} />
                    </span>
                    <h3 className="text-[14px] font-extrabold text-[#102F45]">{item.title}</h3>
                    <p className="text-[12px] leading-[1.65] text-[#526878]">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <p className="mt-6 border-l-4 border-[#D62832] bg-[#F3F7F9] px-5 py-4 text-[12px] leading-[1.7] text-[#526878]">
            {content.engineering.note}
          </p>
        </div>
      </section>

      <section className="border-b border-[#E2CC8B] bg-[#FFF8DF] py-10">
        <div className={`${container} grid gap-5 lg:grid-cols-[0.4fr_1fr] lg:items-start`}>
          <div>
            <span className="inline-flex items-center gap-2 bg-[#F0B429] px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.07em] text-[#3D340F]">
              <ShieldCheck size={15} />
              {ui.complianceTag}
            </span>
            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.07em] text-[#7A6727]">
              {content.compliance.label}
            </p>
            <h2 className="mt-2 text-[26px] font-extrabold leading-[1.15] text-[#493F1F]">{content.compliance.title}</h2>
          </div>
          <p className="text-[14px] leading-[1.8] text-[#5F573D]">{content.compliance.text}</p>
        </div>
      </section>

      <section className="relative min-h-[560px] overflow-hidden bg-[#102F45] text-white">
        <Image
          src="/images/factory-aerial.webp"
          alt={content.factory.imageAlt}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102F45] via-[#102F45]/90 to-[#102F45]/35" />
        <div className={`${container} relative z-10 grid min-h-[560px] items-center gap-10 py-16 lg:grid-cols-[0.72fr_1.28fr]`}>
          <div className="max-w-[570px] border border-white/20 bg-[#102F45]/90 p-6 backdrop-blur-sm sm:p-9">
            <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#8CC2E2]">
              {content.factory.eyebrow}
            </span>
            <h2 className="mt-4 text-[clamp(32px,4vw,50px)] font-extrabold leading-[1.06] tracking-[-0.035em]">
              {content.factory.title}
            </h2>
            <p className="mt-5 text-[13px] leading-[1.75] text-white/68">{content.factory.text}</p>
          </div>

          <div className="grid self-end border border-white/20 bg-[#102F45]/90 sm:grid-cols-3 lg:self-center">
            {ui.factoryFacts.map(([value, label]) => (
              <div key={label} className="border-b border-white/15 p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
                <strong className="block text-[24px] font-extrabold">{value}</strong>
                <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.06em] text-white/55">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className={`${sectionPadding} scroll-mt-28 bg-white`}>
        <div className={container}>
          <SectionHeading eyebrow={content.faq.eyebrow} title={content.faq.title} />
          <div className="mt-10 grid gap-x-10 lg:grid-cols-2">
            {content.faq.items.map((item, index) => (
              <details key={item.q} className="group border-t border-[#C9D6DE] py-5 last:border-b">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-[14px] font-extrabold leading-[1.5] text-[#102F45] marker:hidden">
                  <span className="flex gap-3">
                    <span className="text-[10px] font-bold text-[#0E527D]">0{index + 1}</span>
                    {item.q}
                  </span>
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-[#E7EFF4] text-[18px] font-normal text-[#D62832] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 pl-7 text-[12px] leading-[1.75] text-[#526878]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="rfq" className={`${sectionPadding} scroll-mt-28 border-t border-[#CDD9E0] bg-[#E7EFF4]`}>
        <div className={`${container} grid gap-0 overflow-hidden border border-[#BFCED7] bg-white shadow-[0_18px_50px_rgba(16,47,69,0.08)] lg:grid-cols-[0.72fr_1.28fr]`}>
          <div className="landing-blueprint-grid bg-[#102F45] p-6 text-white sm:p-9 lg:p-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#8CC2E2]">{ui.rfqKicker}</span>
            <div className="mt-5 h-1 w-12 bg-[#D62832]" />
            <h2 className="mt-6 text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.06] tracking-[-0.035em]">
              {content.rfq.title}
            </h2>
            <p className="mt-5 text-[14px] leading-[1.75] text-white/68">{content.rfq.text}</p>
            <div className="mt-8 space-y-4 border-t border-white/15 pt-6">
              <p className="flex items-start gap-3 text-[12px] font-semibold leading-[1.6] text-white/75">
                <Check size={15} className="mt-0.5 shrink-0 text-[#E94A53]" />
                {content.rfq.response}
              </p>
              <a
                href={`mailto:${content.rfq.email}`}
                className="inline-flex items-center gap-2 text-[13px] font-bold text-white hover:text-[#8CC2E2]"
              >
                {content.rfq.email}
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
          <div className="p-5 sm:p-8 lg:p-10">
            <LandingInquiryForm locale={locale} content={content.rfq} />
          </div>
        </div>
      </section>
    </article>
  );
}
