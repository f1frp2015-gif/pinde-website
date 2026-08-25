import Link from "next/link";
import { ArrowRight, Check, ClipboardCheck } from "lucide-react";
import type { PageLocale } from "@/content/pages";
import type { FrpGuideContent } from "@/content/frpGuides";
import { breadcrumbJsonLd, faqPageJsonLd, serializeJsonLd } from "@/lib/jsonld";

type Props = {
  locale: PageLocale;
  content: FrpGuideContent;
};

const container = "mx-auto max-w-[1200px] px-[55px] max-lg:px-6";

export default function FrpGuidePage({ locale, content }: Props) {
  const canonical = `https://pindesys.com/${locale}/engineering/${content.slug}`;
  const homeLabel = locale === "ru" ? "Главная" : "Home";
  const engineeringLabel = locale === "ru" ? "Инжиниринг" : "Engineering";
  const crumbs = breadcrumbJsonLd([
    { name: homeLabel, url: `https://pindesys.com/${locale}` },
    { name: engineeringLabel, url: `https://pindesys.com/${locale}/engineering` },
    { name: content.title, url: canonical },
  ]);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${canonical}#article`,
    headline: content.title,
    description: content.seo.description,
    inLanguage: locale,
    url: canonical,
    mainEntityOfPage: canonical,
    author: { "@id": "https://pindesys.com/#organization" },
    publisher: { "@id": "https://pindesys.com/#organization" },
    about: ["FRP windows", "Fiberglass window systems", "Cold-climate fenestration"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqPageJsonLd(content.faqs)) }} />

      <nav aria-label={locale === "ru" ? "Хлебные крошки" : "Breadcrumb"} className="border-b border-line bg-obsidian pt-[104px] py-4">
        <div className={`${container} flex flex-wrap items-center gap-2 pt-[13px] text-[11px] uppercase tracking-[2px] text-muted`}>
          <Link href={`/${locale}`} prefetch={false} className="transition-colors hover:text-alabaster">{homeLabel}</Link>
          <span>/</span>
          <Link href={`/${locale}/engineering`} prefetch={false} className="transition-colors hover:text-alabaster">{engineeringLabel}</Link>
          <span>/</span>
          <span className="text-warm">{content.eyebrow}</span>
        </div>
      </nav>

      <article className="overflow-x-hidden">
        <header className="bg-obsidian py-[89px]">
          <div className={`${container} max-w-[980px]`}>
            <p className="mb-[21px] text-[10px] font-bold uppercase tracking-[0.16em] text-[#DAAF37]">{content.eyebrow}</p>
            <h1 className="mb-[21px] font-[family-name:var(--font-serif)] text-[clamp(40px,6vw,64px)] font-semibold leading-[0.98] text-alabaster">
              {content.title.replace(/[.!?]+$/, "")}<span className="text-red">.</span>
            </h1>
            <p className="max-w-[780px] text-[15px] leading-[1.9] text-warm">{content.intro}</p>
          </div>
        </header>

        <section className="border-y border-line bg-[#0D2440] py-[55px] text-white">
          <div className={`${container} grid gap-6 lg:grid-cols-[220px_1fr] lg:items-start`}>
            <div className="flex items-center gap-3 text-[#E5C47F]">
              <ClipboardCheck size={23} strokeWidth={1.5} />
              <h2 className="text-[12px] font-bold uppercase tracking-[0.12em]">{content.answerTitle}</h2>
            </div>
            <p className="max-w-[820px] text-[15px] leading-[1.9] text-white/78">{content.answer}</p>
          </div>
        </section>

        <div className="bg-surface py-[89px]">
          <div className={`${container} max-w-[980px] space-y-[72px]`}>
            {content.sections.map((section) => (
              <section key={section.title}>
                <h2 className="mb-[21px] font-[family-name:var(--font-serif)] text-[32px] font-semibold text-alabaster">
                  {section.title}<span className="text-red">.</span>
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-[14px] leading-[1.9] text-warm">{paragraph}</p>
                  ))}
                </div>
                {section.points ? (
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {section.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 border border-line bg-obsidian p-4 text-[12px] leading-[1.7] text-warm">
                        <Check size={16} className="mt-1 shrink-0 text-[#DAAF37]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.table ? (
                  <div className="mt-8 overflow-x-auto border border-line">
                    <table className="w-full min-w-[720px] border-collapse text-left">
                      <thead className="bg-[#0D2440] text-white">
                        <tr>
                          {section.table.headers.map((header) => (
                            <th key={header} scope="col" className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.08em]">{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, index) => (
                          <tr key={row.join("|")} className={index % 2 ? "bg-obsidian" : "bg-surface"}>
                            {row.map((cell, cellIndex) => (
                              <td key={`${cellIndex}-${cell}`} className="border-t border-line px-5 py-4 text-[12px] leading-[1.65] text-warm">
                                {cellIndex === 0 ? <strong className="text-alabaster">{cell}</strong> : cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : null}
              </section>
            ))}
          </div>
        </div>

        <section className="bg-obsidian py-[89px]">
          <div className={`${container} max-w-[980px]`}>
            <h2 className="mb-[34px] font-[family-name:var(--font-serif)] text-[32px] font-semibold text-alabaster">
              {locale === "ru" ? "Частые вопросы" : "Frequently asked questions"}<span className="text-red">.</span>
            </h2>
            <div className="grid gap-[13px]">
              {content.faqs.map((item) => (
                <details key={item.question} className="group border border-line bg-surface p-6 open:border-[#DAAF37]/60">
                  <summary className="cursor-pointer list-none pr-8 text-[15px] font-bold leading-[1.5] text-alabaster marker:content-none">
                    {item.question}
                  </summary>
                  <p className="mt-4 max-w-[820px] text-[13px] leading-[1.8] text-warm">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface py-[89px]">
          <div className={container}>
            <h2 className="mb-[34px] font-[family-name:var(--font-serif)] text-[32px] font-semibold text-alabaster">
              {content.relatedTitle}<span className="text-red">.</span>
            </h2>
            <div className="grid gap-[13px] lg:grid-cols-3">
              {content.related.map((item) => (
                <Link key={item.href} href={`/${locale}${item.href}`} className="group flex min-h-[190px] flex-col border border-line bg-obsidian p-6 transition-colors hover:border-[#DAAF37]/70">
                  <h3 className="text-[18px] font-extrabold text-alabaster">{item.label}</h3>
                  <p className="mt-3 flex-1 text-[12px] leading-[1.7] text-warm">{item.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#DAAF37]">
                    {locale === "ru" ? "Открыть" : "Open"}
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0D2440] py-[72px] text-white">
          <div className={`${container} text-center`}>
            <h2 className="mb-[21px] font-[family-name:var(--font-serif)] text-[30px] font-semibold">{content.ctaTitle}</h2>
            <Link href={`/${locale}/rfq`} className="inline-flex items-center gap-2 bg-gold px-[30px] py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy hover:brightness-105">
              {content.cta}
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
