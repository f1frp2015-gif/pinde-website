import type { MetadataRoute } from "next";
import { products } from "@/data/products";

const localizedRoutes = [
  { path: "", frequency: "weekly" as const, priority: 1 },
  { path: "/about", frequency: "monthly" as const, priority: 0.8 },
  { path: "/systems", frequency: "weekly" as const, priority: 0.85 },
  { path: "/systems/aluminium", frequency: "weekly" as const, priority: 0.85 },
  { path: "/systems/aluminium/comparison", frequency: "monthly" as const, priority: 0.8 },
  { path: "/systems/frp", frequency: "weekly" as const, priority: 0.8 },
  { path: "/systems/frp/cold-climate", frequency: "weekly" as const, priority: 0.85 },
  { path: "/systems/frp/fd90", frequency: "weekly" as const, priority: 0.85 },
  { path: "/systems/frp/fdtl140", frequency: "weekly" as const, priority: 0.85 },
  { path: "/systems/frp/xd75", frequency: "weekly" as const, priority: 0.8 },
  { path: "/systems/frp/pd95", frequency: "weekly" as const, priority: 0.8 },
  { path: "/supply", frequency: "weekly" as const, priority: 0.85 },
  { path: "/supply/frp-window-profiles", frequency: "weekly" as const, priority: 0.9 },
  { path: "/engineering", frequency: "monthly" as const, priority: 0.8 },
  { path: "/engineering/fiberglass-windows", frequency: "monthly" as const, priority: 0.85 },
  { path: "/engineering/warmest-windows", frequency: "monthly" as const, priority: 0.85 },
  { path: "/engineering/warm-panoramic-sliding-doors", frequency: "monthly" as const, priority: 0.85 },
  { path: "/engineering/windows-below-minus-39", frequency: "monthly" as const, priority: 0.85 },
  { path: "/process", frequency: "monthly" as const, priority: 0.75 },
  { path: "/certification", frequency: "monthly" as const, priority: 0.8 },
  { path: "/cases", frequency: "monthly" as const, priority: 0.75 },
  { path: "/rfq", frequency: "monthly" as const, priority: 0.85 },
  { path: "/contact", frequency: "monthly" as const, priority: 0.7 },
];

const frpImages: Record<string, string[]> = {
  "/systems/frp": [
    "/images/systems/pinde-fd90-cold-climate-frp-window.webp",
    "/images/systems/pinde-fdtl140-cold-climate-frp-sliding-door.webp",
  ],
  "/systems/frp/cold-climate": [
    "/images/systems/pinde-fd90-cold-climate-frp-window.webp",
    "/images/systems/pinde-fdtl140-cold-climate-frp-sliding-door.webp",
  ],
  "/systems/frp/fd90": ["/images/systems/pinde-fd90-cold-climate-frp-window.webp"],
  "/systems/frp/fdtl140": ["/images/systems/pinde-fdtl140-cold-climate-frp-sliding-door.webp"],
  "/systems/frp/xd75": ["/images/systems/pinde-pd75-ultra-frp-core-thermal-performance.webp"],
  "/systems/frp/pd95": ["/images/systems/pinde-pd95-passive-window-thermal-performance.webp"],
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pindesys.com";

  const localizedPages: MetadataRoute.Sitemap = localizedRoutes.flatMap((route) =>
    ["en", "ru"].map((locale) => ({
      url: `${baseUrl}/${locale}${route.path}`,
      changeFrequency: route.frequency,
      priority: route.priority,
      ...(frpImages[route.path]
        ? { images: frpImages[route.path].map((image) => `${baseUrl}${image}`) }
        : {}),
      alternates: {
        languages: {
          en: `${baseUrl}/en${route.path}`,
          ru: `${baseUrl}/ru${route.path}`,
          "x-default": `${baseUrl}/en${route.path}`,
        },
      },
    })),
  );

  const productPages: MetadataRoute.Sitemap = products.flatMap((product) =>
    ["en", "ru"].map((locale) => ({
      url: `${baseUrl}/${locale}/systems/aluminium/${product.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      ...(product.images.length > 0
        ? { images: product.images.map((image) => `${baseUrl}${image}`) }
        : {}),
      alternates: {
        languages: {
          en: `${baseUrl}/en/systems/aluminium/${product.slug}`,
          ru: `${baseUrl}/ru/systems/aluminium/${product.slug}`,
          "x-default": `${baseUrl}/en/systems/aluminium/${product.slug}`,
        },
      },
    })),
  );

  return [
    ...localizedPages,
    ...productPages,
  ];
}
