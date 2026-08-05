import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import type { PageLocale } from "@/content/pages";
import { breadcrumbJsonLd } from "@/lib/jsonld";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = { locale: PageLocale; content: any };

const container = "mx-auto max-w-[1200px] px-[55px] max-lg:px-6";

export default function CertificationPage({ locale, content }: Props) {
  const crumbs = breadcrumbJsonLd([
    { name: "Home", url: `https://pindesys.com/${locale}` },
    { name: "Certification", url: `https://pindesys.com/${locale}/certification` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <nav aria-label="Breadcrumb" className="pt-[104px] py-4 bg-obsidian border-b border-line">
        <div className={`${container} pt-[13px] flex items-center gap-2 text-[11px] tracking-[2px] uppercase text-muted`}>
          <Link href={`/${locale}`} className="hover:text-alabaster transition-colors">Home</Link>
          <span>/</span>
          <span className="text-warm">Certification</span>
        </div>
      </nav>
      <section className="py-[89px] bg-obsidian">
        <div className={container}>
          <h1 className="font-[family-name:var(--font-serif)] font-semibold text-[clamp(40px,6vw,64px)] leading-[0.95] text-alabaster mb-[21px]">
            {content.title.replace(/[.!?]+$/, "")}<span className="text-red">.</span>
          </h1>
          <p className="text-warm text-[15px] leading-[1.9] max-w-[720px]">{content.intro}</p>
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
      {/* Cert badges */}
      <section className="py-[89px] bg-obsidian">
        <div className={container}>
          <h2 className="font-[family-name:var(--font-serif)] font-semibold text-[28px] text-alabaster mb-[34px]">
            Our certifications<span className="text-red">.</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[13px]">
            {content.certifications.map((c: { name: string; description: string }) => (
              <div key={c.name} className="border border-line bg-surface p-5 text-center">
                <ShieldCheck size={24} className="mx-auto text-[#DAAF37] mb-3" />
                <span className="block text-[16px] font-extrabold text-alabaster">{c.name}</span>
                <span className="mt-2 block text-[10px] text-muted leading-[1.5]">{c.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-[89px] bg-surface">
        <div className={`${container} text-center`}>
          <h2 className="font-[family-name:var(--font-serif)] font-semibold text-[28px] text-alabaster mb-[21px]">
            Need compliance guidance for your market<span className="text-red">?</span>
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
