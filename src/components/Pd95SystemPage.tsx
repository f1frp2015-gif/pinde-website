import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  BadgeAlert,
  Download,
  ShieldCheck,
  ThermometerSnowflake,
  Volume2,
} from "lucide-react";
import type { PageLocale } from "@/content/pages";
import type { Pd95Content } from "@/content/pd95";
import { breadcrumbJsonLd } from "@/lib/jsonld";

type Props = {
  locale: PageLocale;
  content: Pd95Content;
};

const container = "mx-auto max-w-[1200px] px-[55px] max-lg:px-6";
const benefitIcons = [ThermometerSnowflake, ShieldCheck, Volume2];

export default function Pd95SystemPage({ locale, content }: Props) {
  const homeLabel = locale === "ru" ? "Главная" : "Home";
  const systemsLabel = locale === "ru" ? "Системы" : "Systems";
  const crumbs = breadcrumbJsonLd([
    { name: homeLabel, url: `https://pindesys.com/${locale}` },
    { name: systemsLabel, url: `https://pindesys.com/${locale}/systems` },
    { name: "FRP", url: `https://pindesys.com/${locale}/systems/frp` },
    { name: "PD95", url: `https://pindesys.com/${locale}/systems/frp/pd95` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />

      <nav aria-label={locale === "ru" ? "Хлебные крошки" : "Breadcrumb"} className="border-b border-line bg-obsidian pt-[104px] py-4">
        <div className={`${container} flex flex-wrap items-center gap-2 pt-[13px] text-[11px] uppercase tracking-[2px] text-muted`}>
          <Link href={`/${locale}`} className="transition-colors hover:text-alabaster">{homeLabel}</Link>
          <span>/</span>
          <Link href={`/${locale}/systems`} className="transition-colors hover:text-alabaster">{systemsLabel}</Link>
          <span>/</span>
          <Link href={`/${locale}/systems/frp`} className="transition-colors hover:text-alabaster">FRP</Link>
          <span>/</span>
          <span className="text-warm">PD95</span>
        </div>
      </nav>

      <section className="bg-obsidian py-[89px]">
        <div className={`${container} grid items-center gap-[55px] lg:grid-cols-[1.02fr_0.98fr]`}>
          <div>
            <span className="mb-[21px] inline-block max-w-full whitespace-normal bg-[#FF2D2D] px-3 py-2 text-[10px] font-bold uppercase leading-[1.45] tracking-[0.08em] text-white">
              {content.supplyStatus}
            </span>
            <p className="mb-[13px] text-[10px] font-bold uppercase tracking-[0.16em] text-[#DAAF37]">{content.eyebrow}</p>
            <h1 className="mb-[21px] break-words font-[family-name:var(--font-serif)] text-[clamp(38px,6vw,64px)] font-semibold leading-[0.95] text-alabaster">
              {content.title.replace(/[.!?]+$/, "")}<span className="text-red">.</span>
            </h1>
            <p className="max-w-[680px] text-[15px] leading-[1.9] text-warm">{content.intro}</p>
          </div>
          <div className="relative aspect-[1146/1370] max-h-[660px] overflow-hidden border border-line bg-white">
            <Image
              src="/images/systems/pinde-pd95-passive-window-thermal-performance.webp"
              alt={locale === "ru" ? "Система PD95, тепловая визуализация и показатели образца" : "PD95 window system, thermal visualisation and specimen performance"}
              fill
              preload
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-contain"
            />
            <div className="absolute left-[30.4%] top-[2.3%] flex h-[5.7%] w-[14.5%] items-center justify-center bg-white" aria-hidden="true">
              <span className="font-sans text-[clamp(13px,2.8vw,39px)] font-bold leading-none tracking-[0.02em] text-[#4F4F4F]">PD95</span>
            </div>
          </div>
        </div>
        <div className={`${container} mt-[34px] grid grid-cols-2 gap-[13px] sm:grid-cols-4`}>
          {content.heroCards.map((card) => (
            <div key={card.label} className="border border-line bg-surface p-5">
              <span className="block text-[clamp(16px,2vw,22px)] font-extrabold text-alabaster">{card.value}</span>
              <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.06em] text-muted">{card.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-[89px]">
        <div className={container}>
          <h2 className="mb-[34px] font-[family-name:var(--font-serif)] text-[32px] font-semibold text-alabaster">
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

      <section className="bg-obsidian py-[89px]">
        <div className={`${container} max-w-[900px]`}>
          <h2 className="mb-[13px] font-[family-name:var(--font-serif)] text-[32px] font-semibold text-alabaster">
            {content.identityTitle}<span className="text-red">.</span>
          </h2>
          <p className="text-[14px] leading-[1.9] text-warm">{content.identity}</p>
        </div>
      </section>

      <section className="bg-surface py-[89px]">
        <div className={container}>
          <h2 className="mb-[34px] font-[family-name:var(--font-serif)] text-[32px] font-semibold text-alabaster">
            {content.specsTitle}<span className="text-red">.</span>
          </h2>
          <div className="overflow-hidden border border-line bg-surface">
            <table className="w-full">
              <tbody>
                {content.specs.map((spec, index) => (
                  <tr key={spec.label} className={index % 2 === 0 ? "bg-surface" : "bg-obsidian/40"}>
                    <th scope="row" className="w-[38%] px-5 py-4 text-left text-[12px] font-bold text-muted sm:px-8">{spec.label}</th>
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
              {content.drawingsTitle}<span className="text-red">.</span>
            </h2>
            <p className="text-[13px] leading-[1.8] text-warm">{content.drawingsIntro}</p>
          </div>
          <div className="relative overflow-hidden border border-line bg-white">
            <Image
              src="/images/systems/pinde-pd95-profile-sections.webp"
              alt={locale === "ru" ? "Сечения и параметры профилей системы PD95" : "PD95 system profile sections and parameters"}
              width={1178}
              height={1202}
              unoptimized
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="h-auto w-full"
            />
            <div className="absolute right-[7.1%] top-[3.6%] flex h-[7.1%] w-[16%] items-center justify-center bg-white" aria-hidden="true">
              <span className="font-sans text-[clamp(18px,4.6vw,64px)] font-bold leading-none tracking-[0.02em] text-[#4F4F4F]">PD95</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-[89px]">
        <div className={container}>
          <h2 className="mb-[13px] font-[family-name:var(--font-serif)] text-[32px] font-semibold text-alabaster">
            {content.performanceTitle}<span className="text-red">.</span>
          </h2>
          <p className="max-w-[860px] text-[13px] leading-[1.8] text-warm">{content.performanceIntro}</p>
          <div className="mt-[34px] overflow-x-auto border border-line">
            <table className="w-full min-w-[900px] bg-obsidian text-left">
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
        </div>
      </section>

      <section className="bg-obsidian py-[89px]">
        <div className={`${container} grid items-start gap-[55px] lg:grid-cols-[0.78fr_1.22fr]`}>
          <div className="overflow-hidden border border-line bg-white">
            <Image
              src="/images/systems/pinde-pd95-historical-passive-house-certificate.webp"
              alt={locale === "ru" ? "Исторический сертификат Passive House для исходной системы XMG ES95" : "Historical Passive House certificate for the source XMG ES95 system"}
              width={902}
              height={1278}
              unoptimized
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="h-auto w-full"
            />
          </div>
          <div>
            <div className="mb-5 flex items-center gap-3 text-red">
              <BadgeAlert size={24} />
              <span className="min-w-0 break-words text-[11px] font-bold uppercase tracking-[0.12em]">{content.certificateStatus}</span>
            </div>
            <h2 className="font-[family-name:var(--font-serif)] text-[32px] font-semibold text-alabaster">
              {content.certificateTitle}<span className="text-red">.</span>
            </h2>
            <p className="mt-5 text-[14px] leading-[1.9] text-warm">{content.certificateIntro}</p>
            <dl className="mt-8 grid gap-[13px] sm:grid-cols-2">
              {content.certificateFacts.map((fact) => (
                <div key={fact.label} className="border border-line bg-surface p-5">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.08em] text-muted">{fact.label}</dt>
                  <dd className="mt-2 text-[13px] font-semibold leading-[1.6] text-alabaster">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex items-start gap-4 border-l-4 border-red bg-surface px-5 py-4">
              <AlertTriangle size={20} className="mt-0.5 shrink-0 text-red" />
              <p className="text-[12px] leading-[1.7] text-warm">{content.certificateNote}</p>
            </div>
            <a
              href="/certificates/pinde-pd95-phi-passive-house-certificate-2063wi03.pdf"
              download="pinde-pd95-phi-passive-house-certificate-2063wi03.pdf"
              className="mt-6 inline-flex items-center gap-2 bg-gold px-[26px] py-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-navy hover:brightness-105"
            >
              <Download size={15} />
              {content.certificateDownload}
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-[55px]">
        <div className={`${container} max-w-[900px] flex items-start gap-4`}>
          <AlertTriangle size={20} className="mt-0.5 shrink-0 text-[#DAAF37]" />
          <p className="text-[12px] leading-[1.7] text-muted">{content.note}</p>
        </div>
      </section>

      <section className="bg-obsidian py-[89px]">
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
