import Link from "next/link";
import { ArrowRight, Check, Factory, FileCheck2, PackageCheck, TestTube2 } from "lucide-react";
import type { PageLocale } from "@/content/pages";
import type { FrpWindowProfilesSupplyContent } from "@/content/frpWindowProfilesSupply";
import { breadcrumbJsonLd, faqPageJsonLd, serializeJsonLd } from "@/lib/jsonld";

type Props = { locale: PageLocale; content: FrpWindowProfilesSupplyContent };

const container = "mx-auto max-w-[1200px] px-[55px] max-lg:px-6";
const stepIcons = [Factory, FileCheck2, TestTube2, PackageCheck];

export default function FrpWindowProfilesSupplyPage({ locale, content }: Props) {
  const canonical = `https://pindesys.com/${locale}/supply/frp-window-profiles`;
  const homeLabel = locale === "ru" ? "Главная" : "Home";
  const supplyLabel = locale === "ru" ? "Поставка" : "Supply";
  const crumbs = breadcrumbJsonLd([
    { name: homeLabel, url: `https://pindesys.com/${locale}` },
    { name: supplyLabel, url: `https://pindesys.com/${locale}/supply` },
    { name: content.title, url: canonical },
  ]);
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: content.title,
    description: content.seo.description,
    url: canonical,
    inLanguage: locale,
    serviceType: locale === "ru" ? "Поставка оконных профилей FRP и CKD-комплектов" : "FRP window profile and CKD kit supply",
    provider: { "@id": "https://pindesys.com/#organization" },
    areaServed: ["RU", "KZ", "BY", "UZ", "AM", "KG"],
    audience: {
      "@type": "BusinessAudience",
      audienceType: locale === "ru" ? "Производители окон, импортёры и проектные закупщики" : "Window fabricators, importers and project procurement teams",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqPageJsonLd(content.faqs)) }} />

      <nav aria-label={locale === "ru" ? "Хлебные крошки" : "Breadcrumb"} className="border-b border-line bg-obsidian pt-[104px] py-4">
        <div className={`${container} flex flex-wrap items-center gap-2 pt-[13px] text-[11px] uppercase tracking-[2px] text-muted`}>
          <Link href={`/${locale}`} prefetch={false} className="transition-colors hover:text-alabaster">{homeLabel}</Link>
          <span>/</span>
          <Link href={`/${locale}/supply`} prefetch={false} className="transition-colors hover:text-alabaster">{supplyLabel}</Link>
          <span>/</span>
          <span className="text-warm">FRP / CKD</span>
        </div>
      </nav>

      <header className="bg-obsidian py-[89px]">
        <div className={`${container} max-w-[980px]`}>
          <p className="mb-[21px] text-[10px] font-bold uppercase tracking-[0.16em] text-[#DAAF37]">{content.eyebrow}</p>
          <h1 className="mb-[21px] font-[family-name:var(--font-serif)] text-[clamp(40px,6vw,64px)] font-semibold leading-[0.98] text-alabaster">
            {content.title.replace(/[.!?]+$/, "")}<span className="text-red">.</span>
          </h1>
          <p className="max-w-[780px] text-[15px] leading-[1.9] text-warm">{content.intro}</p>
          <p className="mt-8 max-w-[780px] border-l-4 border-[#DAAF37] bg-surface px-5 py-4 text-[12px] leading-[1.75] text-muted">{content.buyerNote}</p>
        </div>
      </header>

      <section className="bg-surface py-[89px]">
        <div className={container}>
          <div className="mb-[34px] max-w-[840px]">
            <h2 className="font-[family-name:var(--font-serif)] text-[34px] font-semibold text-alabaster">{content.formatsTitle}<span className="text-red">.</span></h2>
            <p className="mt-4 text-[14px] leading-[1.85] text-warm">{content.formatsIntro}</p>
          </div>
          <div className="grid gap-[13px] lg:grid-cols-3">
            {content.formats.map((format) => (
              <article key={format.code} className="border border-line bg-obsidian">
                <div className="flex items-center justify-between bg-[#0D2440] px-6 py-5 text-white">
                  <span className="text-[28px] font-extrabold">{format.code}</span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#E5C47F]">FRP</span>
                </div>
                <div className="p-6">
                  <h3 className="min-h-[54px] text-[20px] font-extrabold leading-[1.3] text-alabaster">{format.title}</h3>
                  <dl className="mt-6 grid gap-5">
                    <div><dt className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#DAAF37]">{content.labels.fromPinde}</dt><dd className="mt-2 text-[12px] leading-[1.7] text-warm">{format.fromPinde}</dd></div>
                    <div><dt className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#DAAF37]">{content.labels.local}</dt><dd className="mt-2 text-[12px] leading-[1.7] text-warm">{format.local}</dd></div>
                    <div><dt className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#DAAF37]">{content.labels.fit}</dt><dd className="mt-2 text-[12px] leading-[1.7] text-warm">{format.fit}</dd></div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-obsidian py-[89px]">
        <div className={container}>
          <div className="mb-[34px] max-w-[840px]">
            <h2 className="font-[family-name:var(--font-serif)] text-[34px] font-semibold text-alabaster">{content.qualificationTitle}<span className="text-red">.</span></h2>
            <p className="mt-4 text-[14px] leading-[1.85] text-warm">{content.qualificationIntro}</p>
          </div>
          <div className="grid gap-[13px] md:grid-cols-2 lg:grid-cols-4">
            {content.qualification.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <article key={step.title} className="border border-line bg-surface p-6">
                  <Icon size={24} strokeWidth={1.5} className="text-[#DAAF37]" />
                  <h3 className="mt-5 text-[17px] font-extrabold text-alabaster">{step.title}</h3>
                  <p className="mt-3 text-[12px] leading-[1.7] text-warm">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface py-[89px]">
        <div className={`${container} grid gap-[55px] lg:grid-cols-[1.1fr_0.9fr]`}>
          <div>
            <h2 className="font-[family-name:var(--font-serif)] text-[32px] font-semibold text-alabaster">{content.inputsTitle}<span className="text-red">.</span></h2>
            <ul className="mt-7 grid gap-3">
              {content.inputs.map((item) => (
                <li key={item} className="flex items-start gap-3 border border-line bg-obsidian p-4 text-[12px] leading-[1.7] text-warm">
                  <Check size={16} className="mt-1 shrink-0 text-[#DAAF37]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="self-start border border-[#DAAF37]/40 bg-[#0D2440] p-7 text-white">
            <h2 className="text-[22px] font-extrabold leading-[1.3]">{content.complianceTitle}</h2>
            <p className="mt-5 text-[13px] leading-[1.8] text-white/72">{content.compliance}</p>
            <Link href={`/${locale}/certification`} className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#E5C47F]">
              {locale === "ru" ? "План соответствия" : "Conformity planning"}<ArrowRight size={13} />
            </Link>
          </aside>
        </div>
      </section>

      <section className="bg-obsidian py-[89px]">
        <div className={`${container} max-w-[980px]`}>
          <h2 className="mb-[34px] font-[family-name:var(--font-serif)] text-[32px] font-semibold text-alabaster">
            {locale === "ru" ? "Частые вопросы" : "Frequently asked questions"}<span className="text-red">.</span>
          </h2>
          <div className="grid gap-[13px]">
            {content.faqs.map((item) => (
              <details key={item.question} className="border border-line bg-surface p-6 open:border-[#DAAF37]/60">
                <summary className="cursor-pointer list-none text-[15px] font-bold leading-[1.5] text-alabaster marker:content-none">{item.question}</summary>
                <p className="mt-4 text-[13px] leading-[1.8] text-warm">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-[89px]">
        <div className={container}>
          <h2 className="mb-[34px] font-[family-name:var(--font-serif)] text-[32px] font-semibold text-alabaster">{content.relatedTitle}<span className="text-red">.</span></h2>
          <div className="grid gap-[13px] lg:grid-cols-3">
            {content.related.map((item) => (
              <Link key={item.href} href={`/${locale}${item.href}`} className="group flex min-h-[190px] flex-col border border-line bg-obsidian p-6 hover:border-[#DAAF37]/70">
                <h3 className="text-[18px] font-extrabold text-alabaster">{item.title}</h3>
                <p className="mt-3 flex-1 text-[12px] leading-[1.7] text-warm">{item.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#DAAF37]">{locale === "ru" ? "Открыть" : "Open"}<ArrowRight size={13} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0D2440] py-[72px] text-white">
        <div className={`${container} text-center`}>
          <h2 className="mb-[21px] font-[family-name:var(--font-serif)] text-[30px] font-semibold">{content.ctaTitle}</h2>
          <Link href={`/${locale}/rfq`} className="inline-flex items-center gap-2 bg-gold px-[30px] py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy hover:brightness-105">
            {content.cta}<ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
