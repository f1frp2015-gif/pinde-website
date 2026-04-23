import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";
import PindeMark from "./PindeMark";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block bg-surface border border-line rounded-[2px] overflow-hidden transition-all duration-400 hover:border-warm/20 hover:-translate-y-0.5"
    >
      <div className="aspect-[4/3] bg-obsidian relative overflow-hidden">
        {product.images.length > 0 ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <PindeMark size={34} frame="#E5E2DC" />
          </div>
        )}
      </div>

      <div className="p-[34px]">
        <p className="text-[9px] font-medium tracking-[2px] uppercase text-bronze mb-[8px]">
          {product.series} Series
        </p>
        <h3 className="font-[family-name:var(--font-serif)] text-[22px] font-normal text-alabaster mb-[8px] tracking-[0.01em] group-hover:text-bronze transition-colors">
          {product.name}
        </h3>
        <p className="text-[13px] text-warm line-clamp-2 mb-[21px]">
          {product.description}
        </p>
        <span className="inline-flex items-center gap-2 text-[11px] tracking-[2px] uppercase text-bronze">
          Specifications{" "}
          <ArrowRight
            size={12}
            className="group-hover:translate-x-1 transition-transform"
          />
        </span>
      </div>
    </Link>
  );
}
