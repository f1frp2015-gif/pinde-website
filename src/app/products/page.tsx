import type { Metadata } from "next";
import ProductFilter from "@/components/ProductFilter";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Aluminium Window & Door Systems — Casement, Sliding, Folding",
  description:
    "PINDÉ's 19 aluminium systems: casement (A65–A120), sliding, push-out, folding, interior doors. PA66GF25 thermal break, EPDM seals, 6063-T5 alloy.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "PINDÉ Systems — Premium Aluminium Windows & Doors",
    description:
      "19 systems: casement, sliding, push-out, folding, interior. PA66GF25 thermal break, AS2047/NFRC certified.",
    url: "/products",
  },
};

export default function ProductsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-20 py-[89px] bg-obsidian">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6 pt-[55px]">
          <div className="flex items-center gap-[13px] mb-[34px]">
            <span className="w-[21px] h-px bg-muted opacity-40" />
            <span className="text-[10px] tracking-[4px] uppercase text-muted font-medium">
              Product range
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-serif)] font-light text-[clamp(40px,6vw,64px)] leading-[0.95] tracking-[0.04em] text-alabaster mb-[21px]">
            Our systems<span className="text-red">.</span>
          </h1>
          <p className="text-warm text-[15px] leading-[1.9] max-w-[520px]">
            A comprehensive range of aluminium window and door systems engineered
            for performance, security, and beauty.
          </p>
        </div>
      </section>

      {/* Filterable Product Grid */}
      <section className="py-[89px] bg-surface">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6">
          <ProductFilter products={products} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-[89px] bg-obsidian">
        <div className="max-w-[800px] mx-auto px-[55px] max-lg:px-6 text-center">
          <h2 className="font-[family-name:var(--font-serif)] font-light text-[28px] leading-[1.15] text-alabaster mb-[21px]">
            Need help choosing<span className="text-red">?</span>
          </h2>
          <p className="text-warm text-[15px] leading-[1.9] mb-[34px]">
            Our technical team can help you select the ideal systems for your
            specific project requirements.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-[10px] px-[34px] py-4 bg-red text-white text-[11px] font-medium tracking-[3px] uppercase rounded-[1px] hover:brightness-90 transition-all"
          >
            <span className="inline-block w-[5px] h-[5px] rounded-full bg-white" />
            Contact our team
          </a>
        </div>
      </section>
    </>
  );
}
