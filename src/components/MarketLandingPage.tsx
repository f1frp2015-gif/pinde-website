import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Factory,
  FileCheck2,
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

const sectionPadding = "py-[89px] lg:py-[120px]";
const container = "mx-auto max-w-[1240px] px-6 lg:px-[55px]";

function SectionHeading({
  eyebrow,
  title,
  intro,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-[780px]">
      <div className="mb-[21px] flex items-center gap-[13px]">
        <span className={`h-px w-[34px] ${dark ? "bg-obsidian/35" : "bg-bronze"}`} />
        <span
          className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${
            dark ? "text-obsidian/60" : "text-muted"
          }`}
        >
          {eyebrow}
        </span>
      </div>
      <h2
        className={`font-[family-name:var(--font-serif)] text-[clamp(34px,4.5vw,56px)] font-light leading-[1.02] ${
          dark ? "text-obsidian" : "text-alabaster"
        }`}
      >
        {title}
        <span className="text-red">.</span>
      </h2>
      {intro && (
        <p
          className={`mt-[21px] max-w-[680px] text-[15px] leading-[1.85] ${
            dark ? "text-obsidian/70" : "text-warm"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

export default function MarketLandingPage({ locale, content }: Props) {
  const pageUrl = `https://pinde-alu.com/${locale}`;
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
      url: "https://pinde-alu.com",
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
    <article lang={content.lang} className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="relative border-b border-line bg-obsidian pt-20">
        <div className={`${container} grid min-h-[760px] items-center gap-[55px] py-[72px] lg:grid-cols-[1.08fr_0.92fr] lg:py-[89px]`}>
          <div className="relative z-10">
            <div className="mb-[34px] flex items-center gap-[13px]">
              <span className="h-px w-[34px] bg-bronze" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">
                {content.hero.eyebrow}
              </span>
            </div>

            <h1 className="max-w-[760px] font-[family-name:var(--font-serif)] text-[clamp(44px,6.2vw,78px)] font-light leading-[0.98] tracking-[-0.02em] text-alabaster">
              {content.hero.title}
              <span className="text-red">.</span>
            </h1>

            <p className="mt-[34px] max-w-[650px] text-[16px] leading-[1.85] text-warm">
              {content.hero.description}
            </p>

            <div className="mt-[34px] flex flex-col gap-[13px] sm:flex-row">
              <Link
                href={`/${locale}#rfq`}
                className="inline-flex items-center justify-center gap-[10px] rounded-[2px] bg-red px-[28px] py-[16px] text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-all hover:brightness-90"
              >
                {content.hero.primaryCta}
                <ArrowRight size={14} />
              </Link>
              <Link
                href={`/${locale}#formats`}
                className="inline-flex items-center justify-center gap-[10px] rounded-[2px] border border-line px-[28px] py-[16px] text-[11px] font-semibold uppercase tracking-[0.16em] text-alabaster transition-colors hover:border-bronze"
              >
                {content.hero.secondaryCta}
              </Link>
            </div>

            <p className="mt-[21px] flex max-w-[620px] items-start gap-[10px] text-[12px] leading-[1.7] text-muted">
              <ShieldCheck size={15} className="mt-[2px] shrink-0 text-bronze" />
              {content.hero.note}
            </p>
          </div>

          <div className="relative border border-line bg-alabaster p-[13px] text-obsidian shadow-[0_34px_89px_rgba(10,10,12,0.14)] lg:ml-auto lg:w-full lg:max-w-[500px]">
            <div className="landing-technical-grid relative overflow-hidden border border-obsidian/15 p-[21px] sm:p-[34px]">
              <div className="mb-[55px] flex items-center justify-between border-b border-obsidian/15 pb-[13px]">
                <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-obsidian/55">
                  PINDÉ / SYSTEM SUPPLY
                </span>
                <span className="h-[7px] w-[7px] rounded-full bg-red" />
              </div>

              <div className="space-y-[13px]">
                {content.hero.cards.map((card, index) => (
                  <div
                    key={card.code}
                    className="group grid grid-cols-[72px_1fr] gap-[17px] border border-obsidian/15 bg-obsidian/5 p-[17px] transition-colors hover:bg-obsidian/10"
                  >
                    <div className="flex aspect-square items-center justify-center border border-obsidian/25 font-[family-name:var(--font-mono)] text-[13px] font-medium tracking-[0.08em]">
                      {card.code}
                    </div>
                    <div className="self-center">
                      <div className="mb-[5px] flex items-center gap-[8px]">
                        <span className="font-[family-name:var(--font-mono)] text-[9px] text-obsidian/45">
                          0{index + 1}
                        </span>
                        <h2 className="text-[14px] font-semibold text-obsidian">
                          {card.name}
                        </h2>
                      </div>
                      <p className="text-[11px] leading-[1.55] text-obsidian/60">
                        {card.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-[55px] grid grid-cols-3 gap-[8px] font-[family-name:var(--font-mono)] text-[8px] uppercase tracking-[0.12em] text-obsidian/45">
                <span>CN · CKG</span>
                <span className="text-center">SYSTEM → KIT</span>
                <span className="text-right">LOCAL BUILD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface py-[21px]">
        <div className={`${container} flex flex-col gap-[17px] lg:flex-row lg:items-center`}>
          <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
            {content.audience.label}
          </span>
          <div className="flex flex-wrap gap-x-[28px] gap-y-[10px]">
            {content.audience.items.map((item) => (
              <span key={item} className="flex items-center gap-[8px] text-[12px] text-warm">
                <span className="h-[4px] w-[4px] rounded-full bg-red" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="systems" className={`${sectionPadding} scroll-mt-20 bg-obsidian`}>
        <div className={container}>
          <SectionHeading
            eyebrow={content.systems.eyebrow}
            title={content.systems.title}
            intro={content.systems.intro}
          />

          <div className="mt-[55px] grid gap-[21px] lg:grid-cols-2">
            {content.systems.items.map((system, index) => (
              <article
                key={system.number}
                className={`relative border border-line p-[28px] sm:p-[34px] ${
                  index === 0 ? "bg-surface" : "bg-obsidian"
                }`}
              >
                <div className="mb-[34px] flex items-center justify-between gap-[21px]">
                  <span className="font-[family-name:var(--font-mono)] text-[12px] text-bronze">
                    {system.number}
                  </span>
                  <span className="text-right text-[9px] font-semibold uppercase tracking-[0.18em] text-muted">
                    {system.label}
                  </span>
                </div>
                <h3 className="max-w-[520px] font-[family-name:var(--font-serif)] text-[32px] font-light leading-[1.08] text-alabaster">
                  {system.title}
                </h3>
                <p className="mt-[17px] text-[14px] leading-[1.8] text-warm">
                  {system.description}
                </p>
                <ul className="mt-[28px] space-y-[13px] border-t border-line pt-[21px]">
                  {system.included.map((item) => (
                    <li key={item} className="flex items-start gap-[10px] text-[12px] leading-[1.7] text-warm">
                      <Check size={14} className="mt-[3px] shrink-0 text-red" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-[28px] border-l-2 border-bronze pl-[13px] text-[11px] leading-[1.7] text-muted">
                  {system.keywords}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-[21px] flex items-start gap-[13px] border border-line bg-surface p-[21px] text-[12px] leading-[1.75] text-warm">
            <FileCheck2 size={18} className="mt-[2px] shrink-0 text-bronze" />
            {content.systems.evidence}
          </div>
        </div>
      </section>

      <section id="formats" className={`${sectionPadding} scroll-mt-20 bg-surface`}>
        <div className={container}>
          <SectionHeading
            eyebrow={content.formats.eyebrow}
            title={content.formats.title}
            intro={content.formats.intro}
          />

          <div className="mt-[55px] grid gap-[13px] lg:grid-cols-3">
            {content.formats.items.map((format) => (
              <article key={format.level} className="flex h-full flex-col border border-line bg-obsidian p-[28px]">
                <div className="mb-[34px] flex items-center justify-between">
                  <span className="font-[family-name:var(--font-mono)] text-[20px] font-light text-alabaster">
                    {format.level}
                  </span>
                  <span className="border border-line px-[10px] py-[5px] text-[9px] font-semibold uppercase tracking-[0.14em] text-muted">
                    {format.tag}
                  </span>
                </div>
                <h3 className="min-h-[58px] font-[family-name:var(--font-serif)] text-[27px] font-light leading-[1.08] text-alabaster">
                  {format.title}
                </h3>
                <dl className="mt-[28px] space-y-[21px] border-t border-line pt-[21px]">
                  <div>
                    <dt className="mb-[6px] text-[9px] font-semibold uppercase tracking-[0.16em] text-bronze">
                      {content.formats.labels.chongqing}
                    </dt>
                    <dd className="text-[12px] leading-[1.7] text-warm">{format.from}</dd>
                  </div>
                  <div>
                    <dt className="mb-[6px] text-[9px] font-semibold uppercase tracking-[0.16em] text-bronze">
                      {content.formats.labels.local}
                    </dt>
                    <dd className="text-[12px] leading-[1.7] text-warm">{format.local}</dd>
                  </div>
                  <div>
                    <dt className="mb-[6px] text-[9px] font-semibold uppercase tracking-[0.16em] text-bronze">
                      {content.formats.labels.fit}
                    </dt>
                    <dd className="text-[12px] leading-[1.7] text-warm">{format.fit}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className={`${sectionPadding} scroll-mt-20 bg-alabaster text-obsidian`}>
        <div className={container}>
          <SectionHeading eyebrow={content.process.eyebrow} title={content.process.title} dark />
          <div className="mt-[55px] grid gap-px bg-obsidian/15 md:grid-cols-2 lg:grid-cols-4">
            {content.process.items.map((step) => (
              <article key={step.number} className="min-h-[280px] bg-alabaster p-[28px]">
                <span className="font-[family-name:var(--font-mono)] text-[12px] text-red">
                  {step.number}
                </span>
                <h3 className="mt-[55px] text-[16px] font-semibold text-obsidian">{step.title}</h3>
                <p className="mt-[13px] text-[13px] leading-[1.75] text-obsidian/65">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionPadding} bg-obsidian`}>
        <div className={container}>
          <SectionHeading eyebrow={content.split.eyebrow} title={content.split.title} />

          <div className="mt-[55px] grid items-stretch gap-[13px] lg:grid-cols-[1fr_80px_1fr]">
            <div className="border border-line bg-surface p-[28px] sm:p-[34px]">
              <div className="mb-[28px] flex items-center gap-[13px]">
                <Factory size={20} className="text-bronze" />
                <h3 className="text-[16px] font-semibold text-alabaster">{content.split.chongqing.title}</h3>
              </div>
              <ul className="space-y-[13px]">
                {content.split.chongqing.items.map((item) => (
                  <li key={item} className="flex items-start gap-[10px] text-[13px] leading-[1.7] text-warm">
                    <ChevronRight size={14} className="mt-[4px] shrink-0 text-red" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-center py-[13px]">
              <div className="flex h-[56px] w-[56px] rotate-90 items-center justify-center rounded-full border border-line bg-surface text-bronze lg:rotate-0">
                <ArrowRight size={20} />
              </div>
            </div>

            <div className="border border-line bg-surface p-[28px] sm:p-[34px]">
              <div className="mb-[28px] flex items-center gap-[13px]">
                <Wrench size={20} className="text-bronze" />
                <h3 className="text-[16px] font-semibold text-alabaster">{content.split.destination.title}</h3>
              </div>
              <ul className="space-y-[13px]">
                {content.split.destination.items.map((item) => (
                  <li key={item} className="flex items-start gap-[10px] text-[13px] leading-[1.7] text-warm">
                    <ChevronRight size={14} className="mt-[4px] shrink-0 text-red" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-[13px] flex items-start gap-[13px] border border-line p-[21px] text-[12px] leading-[1.75] text-muted">
            <Route size={18} className="mt-[2px] shrink-0 text-bronze" />
            {content.split.route}
          </p>
        </div>
      </section>

      <section id="engineering" className={`${sectionPadding} scroll-mt-20 bg-surface`}>
        <div className={container}>
          <SectionHeading eyebrow={content.engineering.eyebrow} title={content.engineering.title} />
          <div className="mt-[55px] grid gap-[13px] sm:grid-cols-2">
            {content.engineering.items.map((item, index) => (
              <article key={item.title} className="border border-line bg-obsidian p-[28px] sm:p-[34px]">
                <div className="mb-[34px] flex items-center justify-between">
                  {index === 0 && <PackageCheck size={20} className="text-bronze" />}
                  {index === 1 && <Wrench size={20} className="text-bronze" />}
                  {index === 2 && <FileCheck2 size={20} className="text-bronze" />}
                  {index === 3 && <ShieldCheck size={20} className="text-bronze" />}
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-muted">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-[16px] font-semibold text-alabaster">{item.title}</h3>
                <p className="mt-[10px] text-[13px] leading-[1.75] text-warm">{item.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-[21px] border-l-2 border-red pl-[17px] text-[12px] leading-[1.75] text-muted">
            {content.engineering.note}
          </p>
        </div>
      </section>

      <section className="bg-red py-[55px] text-white">
        <div className={`${container} grid gap-[21px] lg:grid-cols-[0.42fr_1fr] lg:items-start`}>
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
              {content.compliance.label}
            </span>
            <h2 className="mt-[13px] font-[family-name:var(--font-serif)] text-[32px] font-light leading-[1.08]">
              {content.compliance.title}
            </h2>
          </div>
          <p className="text-[14px] leading-[1.85] text-white/85">{content.compliance.text}</p>
        </div>
      </section>

      <section className="relative min-h-[540px] overflow-hidden bg-alabaster text-obsidian">
        <Image
          src="/images/factory-aerial.jpg"
          alt={content.factory.imageAlt}
          fill
          sizes="100vw"
          className="object-cover object-center opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-alabaster via-alabaster/85 to-alabaster/20" />
        <div className={`${container} relative z-10 flex min-h-[540px] items-center py-[72px]`}>
          <div className="max-w-[620px] border border-obsidian/15 bg-alabaster/90 p-[28px] backdrop-blur-sm sm:p-[42px]">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-obsidian/55">
              {content.factory.eyebrow}
            </span>
            <h2 className="mt-[17px] font-[family-name:var(--font-serif)] text-[clamp(34px,4.5vw,50px)] font-light leading-[1.02]">
              {content.factory.title}
              <span className="text-red">.</span>
            </h2>
            <p className="mt-[21px] text-[13px] leading-[1.8] text-obsidian/65">{content.factory.text}</p>
          </div>
        </div>
      </section>

      <section className={`${sectionPadding} bg-obsidian`}>
        <div className={container}>
          <SectionHeading eyebrow={content.faq.eyebrow} title={content.faq.title} />
          <div className="mt-[55px] grid gap-x-[55px] lg:grid-cols-2">
            {content.faq.items.map((item, index) => (
              <details key={item.q} className="group border-t border-line py-[21px] last:border-b">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-[21px] text-[14px] font-semibold leading-[1.5] text-alabaster marker:hidden">
                  <span className="flex gap-[13px]">
                    <span className="font-[family-name:var(--font-mono)] text-[10px] font-normal text-bronze">
                      0{index + 1}
                    </span>
                    {item.q}
                  </span>
                  <span className="mt-[2px] text-[18px] font-light text-red transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-[13px] pl-[35px] text-[12px] leading-[1.8] text-warm">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="rfq" className={`${sectionPadding} scroll-mt-20 bg-surface`}>
        <div className={`${container} grid gap-[55px] lg:grid-cols-[0.72fr_1.28fr]`}>
          <div>
            <SectionHeading eyebrow={content.rfq.eyebrow} title={content.rfq.title} />
            <p className="mt-[21px] text-[14px] leading-[1.85] text-warm">{content.rfq.text}</p>
            <div className="mt-[34px] space-y-[13px] border-t border-line pt-[21px]">
              <p className="flex items-start gap-[10px] text-[12px] leading-[1.6] text-warm">
                <Check size={14} className="mt-[2px] shrink-0 text-red" />
                {content.rfq.response}
              </p>
              <a
                href={`mailto:${content.rfq.email}`}
                className="inline-flex items-center gap-[8px] text-[12px] text-bronze hover:text-alabaster"
              >
                {content.rfq.email}
                <ArrowRight size={12} />
              </a>
            </div>
          </div>
          <div className="border border-line bg-obsidian p-[21px] sm:p-[34px]">
            <LandingInquiryForm locale={locale} content={content.rfq} />
          </div>
        </div>
      </section>
    </article>
  );
}
