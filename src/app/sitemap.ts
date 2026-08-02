import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { posts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pinde-alu.com";

  const localizedPages: MetadataRoute.Sitemap = [
    { path: "", frequency: "weekly" as const, priority: 1 },
    { path: "/about", frequency: "monthly" as const, priority: 0.8 },
  ].flatMap((page) =>
    ["en", "ru"].map((locale) => ({
      url: `${baseUrl}/${locale}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.frequency,
      priority: page.priority,
      alternates: {
        languages: {
          en: `${baseUrl}/en${page.path}`,
          ru: `${baseUrl}/ru${page.path}`,
          "x-default": `${baseUrl}/en${page.path}`,
        },
      },
    })),
  );

  const staticPages = [
    "/products",
    "/projects",
    "/technology",
    "/quality",
    "/contact",
    "/blog",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const productPages = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...localizedPages, ...staticPages, ...productPages, ...blogPages];
}
