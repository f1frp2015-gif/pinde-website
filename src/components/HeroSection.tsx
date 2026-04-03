import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  overlay?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  ctaText = "Explore Products",
  ctaHref = "/products",
  overlay = true,
}: HeroSectionProps) {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center bg-primary">
      {/* Placeholder for hero image - replace with actual image */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary/80" />
      {overlay && (
        <div className="absolute inset-0 bg-black/30" />
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-accent text-white font-medium rounded hover:bg-accent-light transition-colors"
          >
            {ctaText}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white text-white font-medium rounded hover:bg-white/10 transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
