import Link from "next/link";
import type { PageLocale } from "@/content/pages";
import { breadcrumbJsonLd } from "@/lib/jsonld";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = { locale: PageLocale; content: any };

const container = "mx-auto max-w-[1200px] px-[55px] max-lg:px-6";

export default function SupplyPage({ locale, content }: Props) {
  const crumbs = breadcrumbJsonLd([
    { name: "Home", url: `https://pindesys.com/${locale}` },
    { name: "Supply", url: `https://pindesys.com/${locale}/supply` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <nav aria-label="Breadcrumb" className="pt-[104px] py-4 bg-obsidian border-b border-line">
        <div className={`${container} pt-[13px] flex items-center gap-2 text-[11px] tracking-[2px] uppercase text-muted`}>
          <Link href={`/${locale}`} className="hover:text-alabaster transition-colors">Home</Link>
          <span>/</span>
          <span className="text-warm">Supply formats</span>
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
        <div className={container}>
          <div className="flex justify-end mb-[21px]">
            <span className="border border-line bg-obsidian px-4 py-3 text-[10px] font-bold uppercase tracking-[0.08em] text-muted">{content.labels.matrix}</span>
          </div>
          <div className="hidden lg:grid grid-cols-[160px_repeat(3,minmax(0,1fr))] border border-line">
            <div className="flex items-end bg-obsidian p-5 text-[10px] font-bold uppercase tracking-[0.08em] text-muted">Scope</div>
            {content.formats.map((f: { level: string; tag: string; title: string; from: string; local: string; fit: string }) => (
              <div key={f.level} className="border-l border-line bg-[#0D2440] p-5 text-white">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[25px] font-extrabold">{f.level}</span>
                  <span className="border border-white/25 px-2 py-1 text-[9px] font-bold uppercase">{f.tag}</span>
                </div>
                <h3 className="mt-5 min-h-[54px] text-[18px] font-extrabold leading-[1.2]">{f.title}</h3>
              </div>
            ))}
            {(["from", "local", "fit"] as const).map((key, ri) => (
              <div key={key} className="contents">
                <div className={`border-t border-line p-5 text-[11px] font-bold text-[#C7A154] ${ri % 2 ? "bg-surface" : "bg-obsidian"}`}>
                  {key === "from" ? content.labels.chongqing : key === "local" ? content.labels.local : content.labels.fit}
                </div>
                {content.formats.map((f: { level: string; tag: string; title: string; from: string; local: string; fit: string }) => (
                  <div key={`${f.level}-${key}`} className={`border-l border-t border-line p-5 text-[12px] leading-[1.65] text-warm ${ri % 2 ? "bg-surface" : "bg-obsidian"}`}>
                    {f[key]}
                  </div>
                ))}
              </div>
            ))}
          </div>
          {/* Mobile cards */}
          <div className="grid gap-4 lg:hidden">
            {content.formats.map((f: { level: string; tag: string; title: string; from: string; local: string; fit: string }) => (
              <article key={f.level} className="border border-line bg-obsidian">
                <div className="flex items-center justify-between bg-[#0D2440] px-5 py-4 text-white">
                  <span className="text-[22px] font-extrabold">{f.level}</span>
                  <span className="border border-white/25 px-3 py-1 text-[10px] font-bold uppercase">{f.tag}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-[21px] font-extrabold text-alabaster leading-tight">{f.title}</h3>
                  <dl className="mt-5 grid gap-5">
                    <div><dt className="text-[10px] font-bold uppercase text-[#C7A154]">{content.labels.chongqing}</dt><dd className="mt-2 text-[12px] leading-[1.65] text-warm">{f.from}</dd></div>
                    <div><dt className="text-[10px] font-bold uppercase text-[#C7A154]">{content.labels.local}</dt><dd className="mt-2 text-[12px] leading-[1.65] text-warm">{f.local}</dd></div>
                    <div><dt className="text-[10px] font-bold uppercase text-[#C7A154]">{content.labels.fit}</dt><dd className="mt-2 text-[12px] leading-[1.65] text-warm">{f.fit}</dd></div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 border-l-4 border-[#C7A154] bg-obsidian px-5 py-4 text-[12px] leading-[1.7] text-muted">{content.note}</p>
        </div>
      </section>
      <section className="py-[89px] bg-obsidian">
        <div className={`${container} text-center`}>
          <h2 className="font-[family-name:var(--font-serif)] font-semibold text-[28px] text-alabaster mb-[21px]">
            Not sure which format fits<span className="text-red">?</span>
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
