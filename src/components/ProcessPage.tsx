import Link from "next/link";
import type { PageLocale } from "@/content/pages";
import { breadcrumbJsonLd } from "@/lib/jsonld";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = { locale: PageLocale; content: any };

const container = "mx-auto max-w-[1200px] px-[55px] max-lg:px-6";

export default function ProcessPage({ locale, content }: Props) {
  const crumbs = breadcrumbJsonLd([
    { name: "Home", url: `https://pindesys.com/${locale}` },
    { name: "Process", url: `https://pindesys.com/${locale}/process` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <nav aria-label="Breadcrumb" className="pt-20 py-4 bg-obsidian border-b border-line">
        <div className={`${container} pt-[13px] flex items-center gap-2 text-[11px] tracking-[2px] uppercase text-muted`}>
          <Link href={`/${locale}`} className="hover:text-alabaster transition-colors">Home</Link>
          <span>/</span>
          <span className="text-warm">Process</span>
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
      <section className="py-[89px] bg-surface">
        <div className={container}>
          <div className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-line lg:block" />
            {content.steps.map((step: { number: string; title: string; description: string }, i: number) => (
              <article key={step.number} className="relative border border-line bg-obsidian p-6 lg:border-r-0 lg:last:border-r">
                <span className="relative z-10 flex h-16 w-16 items-center justify-center border-4 border-obsidian bg-red text-[14px] font-extrabold text-white">{step.number}</span>
                <span className="absolute right-5 top-5 text-[10px] font-bold text-muted">0{i + 1}/04</span>
                <h3 className="mt-7 text-[17px] font-extrabold text-alabaster">{step.title}</h3>
                <p className="mt-3 text-[12px] leading-[1.7] text-warm">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-[89px] bg-obsidian">
        <div className={`${container} text-center`}>
          <h2 className="font-[family-name:var(--font-serif)] font-light text-[28px] text-alabaster mb-[21px]">
            Ready to qualify your factory<span className="text-red">?</span>
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
