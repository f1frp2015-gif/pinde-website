import type { Product } from "@/data/products";

type Locale = "en" | "ru";

const categoryAlt = {
  en: {
    "exterior-windows": "thermally broken aluminium window unit",
    "exterior-doors": "aluminium exterior door set",
    "interior-doors": "aluminium interior door or partition",
  },
  ru: {
    "exterior-windows": "алюминиевый оконный блок с термовставкой",
    "exterior-doors": "наружный алюминиевый дверной блок",
    "interior-doors": "алюминиевый межкомнатный дверной блок или перегородка",
  },
} as const;

export function productImageAlt(product: Product, locale: Locale) {
  if (locale === "ru") {
    return `PINDÉ ${product.name} — ${categoryAlt.ru[product.category]}`;
  }

  return `PINDÉ ${product.name} — ${categoryAlt.en[product.category]}`;
}
