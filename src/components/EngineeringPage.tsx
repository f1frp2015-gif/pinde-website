import Link from "next/link";
import { FileCheck2, PackageCheck, ShieldCheck, Wrench } from "lucide-react";
import type { PageLocale } from "@/content/pages";
import { breadcrumbJsonLd } from "@/lib/jsonld";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = { locale: PageLocale; content: any };

const container = "mx-auto max-w-[1200px] px-[55px] max-lg:px-6";
const icons = [PackageCheck, Wrench, FileCheck2, ShieldCheck];

export default function EngineeringPage({ locale, content }: Props) {
  const crumbs = breadcrumbJsonLd([
    { name: "Home", url: `https://pindesys.com/${locale}` },
    { name: "Engineering", url: `https://pindesys.com/${locale}/engineering` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <nav aria-label="Breadcrumb" className="pt-20 py-4 bg-obsidian border-b border-line">
        <div className={`${container} pt-[13px] flex items-center gap-2 text-[11px] tracking-[2px] uppercase text-muted`}>
          <Link href={`/${locale}`} className="hover:text-alabaster transition-colors">Home</Link>
          <span>/</span>
          <span className="text-warm">Engineering</span>
        </div>
      </nav>
      <section className="py-[89px] bg-obsidian">
        <div className={container}>
          <h1 className="font-[family-name:var(--font-serif)] font-light text-[clamp(40px,6vw,64px)] leading-[0.95] text-alabaster mb-[21px]">
            {content.title}<span className="text-red">.</span>
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
                  <span className="flex h-12 w-12 items-center justify-center bg-[#0E527D]/20 text-[#0E527D] mb-[21px]">
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
      {/* Manufacturing steps */}
      <section className="py-[89px] bg-obsidian">
        <div className={container}>
          <h2 className="font-[family-name:var(--font-serif)] font-light text-[28px] text-alabaster mb-[34px]">
            Manufacturing process<span className="text-red">.</span>
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
          <h2 className="font-[family-name:var(--font-serif)] font-light text-[28px] text-alabaster mb-[21px]">
            Need the full engineering package<span className="text-red">?</span>
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
