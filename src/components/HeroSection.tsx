import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function HeroSection({
  title,
  subtitle,
  ctaText = "Explore systems",
  ctaHref = "/products",
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-obsidian pt-20">
      <div className="relative z-10 max-w-[960px] mx-auto px-[55px] max-lg:px-6 w-full py-[89px] text-center">
        <div className="flex items-center justify-center gap-[13px] mb-[55px]">
          <span className="w-[21px] h-px bg-muted opacity-40" />
          <span className="text-[10px] tracking-[4px] uppercase text-muted font-medium">
            PINDÉ · Architectural Aluminium
          </span>
          <span className="w-[21px] h-px bg-muted opacity-40" />
        </div>

        <h1 className="font-[family-name:var(--font-serif)] font-light text-[clamp(40px,6vw,72px)] leading-[1.05] tracking-[0.02em] text-alabaster mb-[34px]">
          {title}
          <span className="text-red">.</span>
        </h1>

        <p className="text-warm text-[16px] leading-[1.8] max-w-[560px] mx-auto mb-[55px]">
          {subtitle}
        </p>

        <div className="flex flex-wrap gap-[13px] justify-center">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-[10px] px-[34px] py-4 bg-red text-white text-[11px] font-medium tracking-[3px] uppercase rounded-[1px] hover:brightness-90 transition-all"
          >
            <span className="inline-block w-[5px] h-[5px] rounded-full bg-white" />
            {ctaText}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-[34px] py-4 border border-line text-alabaster text-[11px] font-medium tracking-[3px] uppercase rounded-[1px] hover:border-warm transition-all"
          >
            Request a quote
          </Link>
        </div>
      </div>
    </section>
  );
}
