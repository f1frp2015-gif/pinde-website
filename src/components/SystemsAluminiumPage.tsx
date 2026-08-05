import Link from "next/link";
import type { PageLocale } from "@/content/pages";
import ProductFilter from "@/components/ProductFilter";
import { products } from "@/data/products";
import { breadcrumbJsonLd } from "@/lib/jsonld";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = { locale: PageLocale; content: any };

const container = "mx-auto max-w-[1200px] px-[55px] max-lg:px-6";

export default function SystemsAluminiumPage({ locale, content }: Props) {
  const homeLabel = locale === "ru" ? "Главная" : "Home";
  const systemsLabel = locale === "ru" ? "Системы" : "Systems";
  const aluminiumLabel = locale === "ru" ? "Алюминий" : "Aluminium";
  const crumbs = breadcrumbJsonLd([
    { name: homeLabel, url: `https://pindesys.com/${locale}` },
    { name: systemsLabel, url: `https://pindesys.com/${locale}/systems` },
    { name: aluminiumLabel, url: `https://pindesys.com/${locale}/systems/aluminium` },
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
          <span className="text-warm">{aluminiumLabel}</span>
        </div>
      </nav>
      <section className="py-[89px] bg-obsidian">
        <div className={container}>
          <span className="mb-[21px] inline-block bg-[#DAAF37] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.08em] text-[#081D2A]">{content.supplyStatus}</span>
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
      <section id="aluminium-catalog" className="py-[89px] bg-obsidian scroll-mt-24">
        <div className={container}>
          <div className="mb-[34px] max-w-[760px]">
            <p className="mb-[13px] text-[10px] font-bold uppercase tracking-[0.16em] text-[#DAAF37]">
              {products.length} {locale === "ru" ? "систем" : "systems"}
            </p>
            <h2 className="font-[family-name:var(--font-serif)] text-[36px] font-semibold text-alabaster mb-[13px]">
              {content.catalogTitle}<span className="text-red">.</span>
            </h2>
            <p className="text-[14px] leading-[1.9] text-warm">{content.catalogIntro}</p>
          </div>
          <ProductFilter
            products={products}
            locale={locale}
            basePath={`/${locale}/systems/aluminium`}
          />
        </div>
      </section>
      <section className="py-[89px] bg-surface">
        <div className={`${container} text-center`}>
          <h2 className="font-[family-name:var(--font-serif)] font-semibold text-[28px] text-alabaster mb-[21px]">
            {locale === "ru" ? "Готовы квалифицировать систему" : "Ready to evaluate the system"}<span className="text-red">?</span>
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
