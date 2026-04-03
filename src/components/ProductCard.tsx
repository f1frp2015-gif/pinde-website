import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block bg-white rounded-lg overflow-hidden border border-gray-100 hover:border-accent/30 hover:shadow-lg transition-all"
    >
      {/* Image Placeholder */}
      <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
        <span className="text-gray-400 text-sm">[Product Image]</span>
      </div>

      <div className="p-6">
        <p className="text-xs font-medium text-accent uppercase tracking-wider mb-2">
          {product.category}
        </p>
        <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2 mb-4">
          {product.description}
        </p>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
          Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
