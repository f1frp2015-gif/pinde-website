import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AluminiumProductPage from "@/components/AluminiumProductPage";
import { getAluminiumProductSeo } from "@/content/aluminiumProductSeo";
import { isPageLocale, pageLocales } from "@/content/pages";
import { products } from "@/data/products";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return pageLocales.flatMap((locale) =>
    products.map((product) => ({ locale, slug: product.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isPageLocale(locale)) notFound();

  const product = products.find((candidate) => candidate.slug === slug);
  if (!product) notFound();

  const canonical = `https://pindesys.com/${locale}/systems/aluminium/${product.slug}`;
  const seo = getAluminiumProductSeo(product, locale);

  return {
    title: { absolute: seo.title },
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical,
      languages: {
        en: `https://pindesys.com/en/systems/aluminium/${product.slug}`,
        ru: `https://pindesys.com/ru/systems/aluminium/${product.slug}`,
        "x-default": `https://pindesys.com/en/systems/aluminium/${product.slug}`,
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: "PINDÉ",
      locale: locale === "ru" ? "ru_RU" : "en_US",
      alternateLocale: locale === "en" ? ["ru_RU"] : ["en_US"],
      title: seo.title,
      description: seo.description,
      images: product.images.length > 0
        ? [{ url: product.images[0], alt: product.name }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: product.images.length > 0 ? [product.images[0]] : undefined,
    },
  };
}

export default async function AluminiumProductRoute({ params }: Props) {
  const { locale, slug } = await params;
  if (!isPageLocale(locale)) notFound();

  const product = products.find((candidate) => candidate.slug === slug);
  if (!product) notFound();

  return <AluminiumProductPage locale={locale} product={product} />;
}
