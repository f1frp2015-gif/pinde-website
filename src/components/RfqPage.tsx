import { ArrowRight, Check, FileUp, ShieldCheck } from "lucide-react";
import LandingInquiryForm from "@/components/LandingInquiryForm";
import type { LandingContent, LandingLocale } from "@/content/landing";
import { breadcrumbJsonLd } from "@/lib/jsonld";

type Props = {
  locale: LandingLocale;
  content: LandingContent["rfq"];
};

const preparation = {
  en: [
    "Destination market and target standard",
    "System, supply format and estimated volume",
    "Window schedule, BOM or drawings when available",
  ],
  ru: [
    "Рынок назначения и целевой стандарт",
    "Система, формат поставки и ориентировочный объём",
    "Оконная ведомость, BOM или чертежи при наличии",
  ],
} as const;

export default function RfqPage({ locale, content }: Props) {
  const isRu = locale === "ru";
  const canonical = `https://pindesys.com/${locale}/rfq`;
  const crumbs = breadcrumbJsonLd([
    {
      name: isRu ? "Главная" : "Home",
      url: `https://pindesys.com/${locale}`,
    },
    {
      name: isRu ? "Технический запрос" : "Technical RFQ",
      url: canonical,
    },
  ]);

  return (
    <article lang={locale} className="bg-[#F2EFE9] pt-[96px] text-[#081D2A] lg:pt-[104px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />

      <section className="px-4 py-5 sm:px-6 sm:py-8 lg:px-10 lg:py-12">
        <div className="mx-auto grid max-w-[1480px] overflow-hidden border border-[#D9D9D9] bg-white shadow-[0_20px_60px_rgba(8,29,42,0.09)] lg:grid-cols-[0.72fr_1.28fr]">
          <div className="landing-blueprint-grid flex flex-col bg-[#081D2A] p-7 text-white sm:p-10 lg:min-h-[920px] lg:p-12 xl:p-14">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#DAAF37]">
                {content.eyebrow}
              </span>
              <div className="mt-7 h-1 w-14 bg-[#FF2D2D]" />
              <h1 className="mt-9 max-w-[590px] text-[clamp(40px,5.2vw,66px)] font-extrabold leading-[1.04] tracking-[-0.045em] text-white">
                {content.title}
              </h1>
              <p className="mt-7 max-w-[570px] text-[15px] leading-[1.85] text-white/68">
                {content.text}
              </p>
            </div>

            <div className="mt-10 border-t border-white/15 pt-8 lg:mt-auto">
              <p className="text-[10px] font-bold uppercase tracking-[0.09em] text-[#DAAF37]">
                {isRu ? "Что подготовить" : "What to prepare"}
              </p>
              <ul className="mt-5 space-y-4">
                {preparation[locale].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[12px] font-semibold leading-[1.65] text-white/76"
                  >
                    <Check size={16} className="mt-0.5 shrink-0 text-[#FF2D2D]" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-white/15 pt-7">
                <p className="flex items-start gap-3 text-[12px] font-bold leading-[1.65] text-white/84">
                  <ShieldCheck size={17} className="mt-0.5 shrink-0 text-[#DAAF37]" />
                  {content.response}
                </p>
                <a
                  href={`mailto:${content.email}`}
                  className="mt-6 inline-flex items-center gap-3 text-[14px] font-bold text-white transition-colors hover:text-[#DAAF37]"
                >
                  {content.email}
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-9 lg:p-12 xl:p-14">
            <div className="mb-8 flex items-start justify-between gap-6 border-b border-[#D9D9D9] pb-7">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.09em] text-[#68747B]">
                  {isRu ? "Инженерная квалификация" : "Engineering qualification"}
                </span>
                <h2 className="mt-2 text-[24px] font-extrabold tracking-[-0.025em] text-[#081D2A] sm:text-[30px]">
                  {isRu ? "Данные для технического предложения" : "Technical quotation details"}
                </h2>
              </div>
              <FileUp size={27} className="hidden shrink-0 text-[#DAAF37] sm:block" />
            </div>
            <LandingInquiryForm locale={locale} content={content} />
          </div>
        </div>
      </section>
    </article>
  );
}
