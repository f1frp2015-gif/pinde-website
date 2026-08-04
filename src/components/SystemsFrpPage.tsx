import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, ArrowRight, Check } from "lucide-react";
import type { PageLocale } from "@/content/pages";
import { xd75Content } from "@/content/xd75";
import { breadcrumbJsonLd } from "@/lib/jsonld";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = { locale: PageLocale; content: any };

const container = "mx-auto max-w-[1200px] px-[55px] max-lg:px-6";

export default function SystemsFrpPage({ locale, content }: Props) {
  const xd75 = xd75Content[locale];
  const crumbs = breadcrumbJsonLd([
    { name: "Home", url: `https://pindesys.com/${locale}` },
    { name: "Systems", url: `https://pindesys.com/${locale}/systems` },
    { name: "FRP", url: `https://pindesys.com/${locale}/systems/frp` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <nav aria-label="Breadcrumb" className="pt-20 py-4 bg-obsidian border-b border-line">
        <div className={`${container} pt-[13px] flex items-center gap-2 text-[11px] tracking-[2px] uppercase text-muted`}>
          <Link href={`/${locale}`} className="hover:text-alabaster transition-colors">Home</Link>
          <span>/</span>
          <Link href={`/${locale}/systems`} className="hover:text-alabaster transition-colors">Systems</Link>
          <span>/</span>
          <span className="text-warm">FRP</span>
        </div>
      </nav>
      <section className="py-[89px] bg-obsidian">
        <div className={container}>
          <span className="inline-block bg-[#D62832] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.08em] text-white mb-[21px]">{content.supplyStatus}</span>
          <h1 className="font-[family-name:var(--font-serif)] font-light text-[clamp(40px,6vw,64px)] leading-[0.95] text-alabaster mb-[21px]">
            {content.title}<span className="text-red">.</span>
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
              <h2 className="font-[family-name:var(--font-serif)] text-[28px] font-light text-alabaster mb-[13px]">{s.title}<span className="text-red">.</span></h2>
              <p className="text-[14px] leading-[1.9] text-warm">{s.content}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-[89px] bg-obsidian">
        <div className={`${container} grid items-center gap-[55px] lg:grid-cols-2`}>
          <div className="relative aspect-square overflow-hidden border border-line bg-white">
            <Image
              src="/images/systems/xd75-aluminium-grpu-window-system.webp"
              alt={locale === "ru" ? "Гибридная оконная система XD75 с термомостом GRPU" : "XD75 hybrid aluminium-GRPU window system"}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-5"
            />
          </div>
          <div>
            <p className="mb-[13px] text-[10px] font-bold uppercase tracking-[0.16em] text-[#0E527D]">{xd75.eyebrow}</p>
            <h2 className="font-[family-name:var(--font-serif)] text-[36px] font-light leading-[1.05] text-alabaster">
              {xd75.title}<span className="text-red">.</span>
            </h2>
            <p className="mt-5 text-[14px] leading-[1.85] text-warm">{xd75.intro}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {xd75.heroCards.map((card) => (
                <li key={card.label} className="flex items-start gap-3 text-[12px] leading-[1.6] text-warm">
                  <Check size={15} className="mt-0.5 shrink-0 text-red" />
                  <span><strong className="block text-alabaster">{card.value}</strong>{card.label}</span>
                </li>
              ))}
            </ul>
            <Link href={`/${locale}/systems/frp/xd75`} className="mt-8 inline-flex items-center gap-2 bg-red px-[34px] py-4 text-[11px] font-medium uppercase tracking-[3px] text-white hover:brightness-90">
              {locale === "ru" ? "Открыть серию XD75" : "Explore the XD75 series"}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
      {content.note && (
        <section className="py-[55px] bg-surface border-t border-line">
          <div className={`${container} max-w-[860px] flex items-start gap-4`}>
            <AlertTriangle size={20} className="mt-0.5 shrink-0 text-[#F0B429]" />
            <p className="text-[12px] leading-[1.7] text-muted">{content.note}</p>
          </div>
        </section>
      )}
      <section className="py-[89px] bg-obsidian">
        <div className={`${container} text-center`}>
          <h2 className="font-[family-name:var(--font-serif)] font-light text-[28px] text-alabaster mb-[21px]">
            Interested in the FRP programme<span className="text-red">?</span>
          </h2>
          <Link href={`/${locale}/contact`} className="inline-flex items-center gap-[10px] px-[34px] py-4 bg-red text-white text-[11px] font-medium tracking-[3px] uppercase rounded-[1px] hover:brightness-90">
            <span className="inline-block w-[5px] h-[5px] rounded-full bg-white" />
            {content.cta}
          </Link>
        </div>
      </section>
    </>
  );
}
