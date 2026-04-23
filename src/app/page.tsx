import Link from "next/link";
import FeatureGrid from "@/components/FeatureGrid";
import ProductCard from "@/components/ProductCard";
import CertificationBanner from "@/components/CertificationBanner";
import { faqJsonLd } from "@/lib/jsonld";
import { products } from "@/data/products";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero — clean, centered, breathing */}
      <section className="relative min-h-[88vh] flex items-center bg-obsidian pt-20">
        <div className="relative z-10 max-w-[960px] mx-auto px-[55px] max-lg:px-6 w-full py-[89px] text-center">
          <div className="flex items-center justify-center gap-[13px] mb-[55px]">
            <span className="w-[21px] h-px bg-muted opacity-40" />
            <span className="text-[10px] tracking-[4px] uppercase text-muted font-medium">
              PINDÉ · Architectural Aluminium
            </span>
            <span className="w-[21px] h-px bg-muted opacity-40" />
          </div>

          <h1 className="font-[family-name:var(--font-serif)] font-light text-[clamp(44px,7vw,88px)] leading-[1.05] tracking-[0.02em] text-alabaster mb-[34px]">
            The art of framing light<span className="text-red">.</span>
          </h1>

          <p className="text-warm text-[16px] leading-[1.8] max-w-[560px] mx-auto mb-[55px]">
            Red Dot–calibre aluminium windows and doors, engineered to the
            tolerances that win design prizes — manufactured at scale in our
            100,000 m² smart factory.
          </p>

          <div className="flex flex-wrap gap-[13px] justify-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-[10px] px-[34px] py-4 bg-red text-white text-[11px] font-medium tracking-[3px] uppercase rounded-[1px] hover:brightness-90 transition-all"
            >
              <span className="inline-block w-[5px] h-[5px] rounded-full bg-white" />
              Explore systems
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

      {/* Stats Bar */}
      <section className="py-[34px] bg-surface border-y border-line">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[34px]">
            {[
              { value: "23+", label: "Years" },
              { value: "30+", label: "Countries" },
              { value: "1.8M m²", label: "Annual capacity" },
              { value: "60+", label: "Patents" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-[family-name:var(--font-serif)] text-[28px] font-light text-alabaster tracking-[0.02em]">
                  {stat.value}
                </div>
                <div className="text-[10px] tracking-[3px] uppercase text-muted mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-[144px] bg-surface">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-[55px]">
            <div>
              <div className="flex items-center gap-[13px] mb-[21px]">
                <span className="w-[21px] h-px bg-muted opacity-40" />
                <span className="text-[10px] tracking-[4px] uppercase text-muted font-medium">
                  Systems
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-serif)] font-light text-[clamp(32px,4vw,44px)] leading-[1.15] text-alabaster">
                Engineered for light<span className="text-red">.</span>
              </h2>
            </div>
            <Link
              href="/products"
              className="mt-4 sm:mt-0 inline-flex items-center gap-[8px] text-[11px] tracking-[2px] uppercase text-bronze hover:text-alabaster transition-colors"
            >
              View all systems <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[13px]">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <FeatureGrid />

      {/* Certifications */}
      <CertificationBanner />

      {/* FAQ — GEO Optimized */}
      <section className="py-[89px] bg-obsidian">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6">
          <div className="flex items-center gap-[13px] mb-[55px]">
            <span className="w-[21px] h-px bg-muted opacity-40" />
            <span className="text-[10px] tracking-[4px] uppercase text-muted font-medium">
              Frequently asked questions
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-serif)] font-light text-[clamp(32px,4vw,44px)] leading-[1.15] text-alabaster mb-[55px]">
            Questions answered<span className="text-red">.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-x-[55px] gap-y-[34px]">
            {[
              {
                q: "What thermal break technology does PINDÉ use?",
                a: "All systems use PA66GF25 polyamide thermal break strips. Our flagship A120 features a 35.3mm wide strip for superior insulation.",
              },
              {
                q: "What certifications do PINDÉ products hold?",
                a: "AS2047, AS1288, NFRC, CE, ISO 9001, and ISO 14001. We hold 60+ patents across our product range.",
              },
              {
                q: "What's the difference between casement and sliding windows?",
                a: "Casement windows swing open on hinges for better sealing. Sliding windows move horizontally — ideal for balconies and high-rise applications.",
              },
              {
                q: "Does PINDÉ manufacture everything in-house?",
                a: "Yes. Our 100,000 m² factory controls the entire chain: extrusion, coating, glass processing, and final assembly.",
              },
              {
                q: "Which countries does PINDÉ serve?",
                a: "30+ countries including Australia, New Zealand, USA, Canada, UK, Europe, and the Middle East.",
              },
              {
                q: "What is the maximum glazing thickness?",
                a: "Up to 206mm (S150 vertical lifting). A120 casement supports 130mm triple glazing for exceptional thermal performance.",
              },
              {
                q: "What aluminium alloy is used?",
                a: "Premium 6063-T5 alloy with ≥1.4mm wall thickness. Surface treatments include Akzo Nobel powder coating and anodising.",
              },
              {
                q: "How do I get a quote?",
                a: "Contact us via the website form, email (doris.li@pinde-alu.com), or WhatsApp (+86 138 8333 3993). We respond within 24 hours.",
              },
            ].map((item) => (
              <div key={item.q} className="border-b border-line pb-[21px]">
                <h3 className="text-[15px] font-medium text-alabaster mb-[8px]">
                  {item.q}
                </h3>
                <p className="text-[13px] text-warm leading-[1.8]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[144px] bg-surface">
        <div className="max-w-[800px] mx-auto px-[55px] max-lg:px-6 text-center">
          <h2 className="font-[family-name:var(--font-serif)] font-light text-[clamp(32px,4vw,44px)] leading-[1.15] text-alabaster mb-[21px]">
            Ready to start<span className="text-red">?</span>
          </h2>
          <p className="text-warm text-[15px] leading-[1.9] mb-[55px] max-w-[480px] mx-auto">
            Whether you&apos;re an architect, builder, or homeowner, our team is
            ready to help you find the perfect window and door solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-[21px] justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-[10px] px-[34px] py-4 bg-red text-white text-[11px] font-medium tracking-[3px] uppercase rounded-[1px] hover:brightness-90 transition-all"
            >
              <span className="inline-block w-[5px] h-[5px] rounded-full bg-white" />
              Get a free quote
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-[34px] py-4 border border-line text-alabaster text-[11px] font-medium tracking-[3px] uppercase rounded-[1px] hover:border-warm transition-all"
            >
              Browse systems
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
