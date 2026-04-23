"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import type { Product } from "@/data/products";

const categories = [
  { key: "all", label: "All Systems" },
  { key: "exterior-windows", label: "Exterior Windows" },
  { key: "exterior-doors", label: "Exterior Doors" },
  { key: "interior-doors", label: "Interior Doors" },
] as const;

export default function ProductFilter({ products }: { products: Product[] }) {
  const [active, setActive] = useState<string>("all");

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
                  ? "bg-red text-white border-red"
                  : "bg-transparent text-muted border-line hover:text-alabaster hover:border-warm"
              }`}
            >
              {cat.label}
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
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </>
  );
}
