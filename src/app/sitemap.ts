import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { posts } from "@/data/blog";

const localizedRoutes = [
  { path: "", frequency: "weekly" as const, priority: 1 },
  { path: "/about", frequency: "monthly" as const, priority: 0.8 },
  { path: "/systems", frequency: "weekly" as const, priority: 0.85 },
  { path: "/systems/aluminium", frequency: "weekly" as const, priority: 0.85 },
  { path: "/systems/frp", frequency: "weekly" as const, priority: 0.8 },
  { path: "/systems/frp/xd75", frequency: "weekly" as const, priority: 0.8 },
  { path: "/supply", frequency: "weekly" as const, priority: 0.85 },
  { path: "/engineering", frequency: "monthly" as const, priority: 0.8 },
  { path: "/process", frequency: "monthly" as const, priority: 0.75 },
  { path: "/certification", frequency: "monthly" as const, priority: 0.8 },
  { path: "/cases", frequency: "monthly" as const, priority: 0.75 },
  { path: "/contact", frequency: "monthly" as const, priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pindesys.com";

  const localizedPages: MetadataRoute.Sitemap = localizedRoutes.flatMap((route) =>
    ["en", "ru"].map((locale) => ({
      url: `${baseUrl}/${locale}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.frequency,
      priority: route.priority,
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
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/en/systems/aluminium/${product.slug}`,
          ru: `${baseUrl}/ru/systems/aluminium/${product.slug}`,
          "x-default": `${baseUrl}/en/systems/aluminium/${product.slug}`,
        },
      },
    })),
  );

  // Blog
  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogIndex = { url: `${baseUrl}/blog`, changeFrequency: "monthly" as const, priority: 0.65 };

  return [
    ...localizedPages,
    ...productPages,
    blogIndex,
    ...blogPages,
  ];
}
