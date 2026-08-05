"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import type { Product } from "@/data/products";

const categories = [
  { key: "all" },
  { key: "exterior-windows" },
  { key: "exterior-doors" },
  { key: "interior-doors" },
] as const;

const categoryLabels = {
  en: {
    all: "All systems",
    "exterior-windows": "Exterior windows",
    "exterior-doors": "Exterior doors",
    "interior-doors": "Interior doors",
  },
  ru: {
    all: "Все системы",
    "exterior-windows": "Наружные окна",
    "exterior-doors": "Наружные двери",
    "interior-doors": "Межкомнатные двери",
  },
} as const;

type Props = {
  products: Product[];
  locale?: "en" | "ru";
  basePath?: string;
};

export default function ProductFilter({ products, locale = "en", basePath = "/en/systems/aluminium" }: Props) {
  const [active, setActive] = useState<string>("all");
  const labels = categoryLabels[locale];

  const filtered =
    active === "all"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-[8px] mb-[34px]">
        {categories.map((cat) => {
          const count =
            cat.key === "all"
              ? products.length
              : products.filter((p) => p.category === cat.key).length;
          return (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-[21px] py-[8px] text-[11px] tracking-[2px] uppercase border rounded-[1px] transition-all ${
                active === cat.key
                  ? "bg-gold text-navy border-gold"
                  : "bg-transparent text-muted border-line hover:text-alabaster hover:border-warm"
              }`}
            >
              {labels[cat.key]}
              <span className="ml-[8px] font-[family-name:var(--font-mono)] text-[10px] opacity-60">
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[13px]">
        {filtered.map((product) => (
          <ProductCard
            key={product.slug}
            product={product}
            href={`${basePath}/${product.slug}`}
            locale={locale}
          />
        ))}
      </div>
    </>
  );
}
