import Link from "next/link";
import { ArrowRight, FileCheck2, PackageCheck, ShieldCheck, Wrench } from "lucide-react";
import type { PageLocale } from "@/content/pages";
import { frpGuides, frpGuideSlugs } from "@/content/frpGuides";
import { breadcrumbJsonLd, serializeJsonLd } from "@/lib/jsonld";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = { locale: PageLocale; content: any };

const container = "mx-auto max-w-[1200px] px-[55px] max-lg:px-6";
const icons = [PackageCheck, Wrench, FileCheck2, ShieldCheck];

export default function EngineeringPage({ locale, content }: Props) {
  const homeLabel = locale === "ru" ? "Главная" : "Home";
  const sectionLabel = locale === "ru" ? "Инжиниринг" : "Engineering";
  const crumbs = breadcrumbJsonLd([
    { name: homeLabel, url: `https://pindesys.com/${locale}` },
    { name: sectionLabel, url: `https://pindesys.com/${locale}/engineering` },
  ]);
  const guides = frpGuideSlugs.map((slug) => frpGuides[slug][locale]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(crumbs) }} />
      <nav aria-label={locale === "ru" ? "Хлебные крошки" : "Breadcrumb"} className="pt-[104px] py-4 bg-obsidian border-b border-line">
        <div className={`${container} pt-[13px] flex items-center gap-2 text-[11px] tracking-[2px] uppercase text-muted`}>
          <Link href={`/${locale}`} prefetch={false} className="hover:text-alabaster transition-colors">{homeLabel}</Link>
          <span>/</span>
          <span className="text-warm">{sectionLabel}</span>
        </div>
      </nav>
      <section className="py-[89px] bg-obsidian">
        <div className={container}>
          <h1 className="font-[family-name:var(--font-serif)] font-semibold text-[clamp(40px,6vw,64px)] leading-[0.95] text-alabaster mb-[21px]">
            {content.title.replace(/[.!?]+$/, "")}<span className="text-red">.</span>
          </h1>
          <p className="text-warm text-[15px] leading-[1.9] max-w-[680px]">{content.intro}</p>
        </div>
      </section>
      {/* Deliverables */}
      <section className="py-[89px] bg-surface">
        <div className={container}>
          <div className="grid gap-[13px] md:grid-cols-2">
            {content.deliverables.map((d: { title: string; description: string }, i: number) => {
              const Icon = icons[i];
              return (
                <article key={d.title} className="bg-obsidian border border-line rounded-[2px] p-6 sm:p-8">
                  <span className="flex h-12 w-12 items-center justify-center bg-[#DAAF37]/20 text-[#DAAF37] mb-[21px]">
                    <Icon size={22} />
                  </span>
                  <h2 className="text-[20px] font-extrabold text-alabaster mb-[13px]">{d.title}</h2>
                  <p className="text-[13px] leading-[1.75] text-warm">{d.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-surface py-[89px]">
        <div className={container}>
          <div className="mb-[34px] max-w-[840px]">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#DAAF37]">
              {locale === "ru" ? "Инженерные руководства" : "Engineering guides"}
            </p>
            <h2 className="font-[family-name:var(--font-serif)] text-[32px] font-semibold text-alabaster">
              {locale === "ru" ? "Ответы до выбора оконной системы" : "Answers before selecting a window system"}<span className="text-red">.</span>
            </h2>
            <p className="mt-4 text-[14px] leading-[1.85] text-warm">
              {locale === "ru"
                ? "Сравните стеклопластиковые окна, тёплые раздвижные двери и проверки для сильного мороза до фиксации эталонной конструкции."
                : "Compare fiberglass windows, warm sliding doors and severe-cold checks before freezing the reference construction."}
            </p>
          </div>
          <div className="grid gap-[13px] md:grid-cols-2">
            {guides.map((guide) => (
              <Link key={guide.slug} href={`/${locale}/engineering/${guide.slug}`} className="group flex min-h-[170px] flex-col border border-line bg-obsidian p-6 hover:border-[#DAAF37]/70">
                <h3 className="text-[18px] font-extrabold text-alabaster">{guide.title}</h3>
                <p className="mt-3 flex-1 text-[12px] leading-[1.7] text-warm">{guide.seo.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#DAAF37]">
                  {locale === "ru" ? "Читать" : "Read guide"}<ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Manufacturing steps */}
      <section className="py-[89px] bg-obsidian">
        <div className={container}>
          <h2 className="font-[family-name:var(--font-serif)] font-semibold text-[28px] text-alabaster mb-[34px]">
            {locale === "ru" ? "Производственный процесс" : "Manufacturing process"}<span className="text-red">.</span>
          </h2>
          <div className="grid gap-[13px] md:grid-cols-2 lg:grid-cols-4">
            {content.manufacturingSteps.map((s: { step: string; title: string; description: string }) => (
              <div key={s.step} className="border border-line bg-surface p-6">
                <span className="text-[34px] font-extrabold text-alabaster/15">{s.step}</span>
                <h3 className="mt-3 text-[16px] font-extrabold text-alabaster">{s.title}</h3>
                <p className="mt-2 text-[12px] leading-[1.65] text-warm">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-[89px] bg-surface">
        <div className={`${container} text-center`}>
          <h2 className="font-[family-name:var(--font-serif)] font-semibold text-[28px] text-alabaster mb-[21px]">
            {locale === "ru" ? "Нужен полный инженерный пакет" : "Need the full engineering package"}<span className="text-red">?</span>
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
