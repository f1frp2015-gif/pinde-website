import type { Product } from "@/data/products";

type Locale = "en" | "ru";

const categoryAlt = {
  en: {
    "exterior-windows": "thermally broken aluminium window system",
    "exterior-doors": "aluminium exterior door system",
    "interior-doors": "aluminium interior door system",
  },
  ru: {
    "exterior-windows": "алюминиевая оконная система с терморазрывом",
    "exterior-doors": "алюминиевая наружная дверная система",
    "interior-doors": "алюминиевая межкомнатная дверная система",
  },
} as const;

export function productImageAlt(product: Product, locale: Locale) {
  if (locale === "ru") {
    return `PINDÉ ${product.name} — ${categoryAlt.ru[product.category]}`;
  }

  return `PINDÉ ${product.name} — ${categoryAlt.en[product.category]}`;
}
