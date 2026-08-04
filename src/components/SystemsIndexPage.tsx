import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { PageLocale } from "@/content/pages";
import { breadcrumbJsonLd } from "@/lib/jsonld";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = { locale: PageLocale; content: any };

const container = "mx-auto max-w-[1200px] px-[55px] max-lg:px-6";

export default function SystemsIndexPage({ locale, content }: Props) {
  const crumbs = breadcrumbJsonLd([
    { name: "Home", url: `https://pindesys.com/${locale}` },
    { name: "Systems", url: `https://pindesys.com/${locale}/systems` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <nav aria-label="Breadcrumb" className="pt-[104px] py-4 bg-obsidian border-b border-line">
        <div className={`${container} pt-[13px] flex items-center gap-2 text-[11px] tracking-[2px] uppercase text-muted`}>
          <Link href={`/${locale}`} className="hover:text-alabaster transition-colors">Home</Link>
          <span>/</span>
          <span className="text-warm">Systems</span>
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
      <section className="py-[89px] bg-surface">
        <div className={`${container} grid gap-[13px] lg:grid-cols-2`}>
          {content.platforms.map((platform: { code: string; label: string; title: string; description: string; features: string[]; href: string; cta: string }) => (
            <article key={platform.code} className="bg-obsidian border border-line rounded-[2px] overflow-hidden flex flex-col">
              <div className="bg-[#C7A154] p-6 flex items-center justify-between text-[#0D2440]">
                <span className="text-[22px] font-extrabold">{platform.code}</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.08em] opacity-60">{platform.label}</span>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h2 className="text-[26px] font-extrabold text-alabaster leading-[1.15]">{platform.title}</h2>
                <p className="mt-4 text-[14px] leading-[1.75] text-warm">{platform.description}</p>
                <ul className="mt-6 grid gap-3 flex-1">
                  {platform.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[12px] leading-[1.65] text-warm">
                      <Check size={15} className="mt-0.5 shrink-0 text-red" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${locale}${platform.href}`}
                  className="mt-6 inline-flex items-center gap-2 px-[34px] py-4 bg-gold text-navy text-[11px] font-medium tracking-[3px] uppercase rounded-[1px] hover:brightness-90 transition-all w-fit"
                >
                  {platform.cta}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className={`${container} mt-6`}>
          <p className="border-l-4 border-[#C7A154] bg-[#F8F4E9] px-5 py-4 text-[12px] leading-[1.7] text-muted">
            {content.note}
          </p>
        </div>
      </section>
    </>
  );
}
