import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FrpGuidePage from "@/components/FrpGuidePage";
import { frpGuides, frpGuideSlugs, isFrpGuideSlug } from "@/content/frpGuides";
import { isPageLocale, pageLocales } from "@/content/pages";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return pageLocales.flatMap((locale) => frpGuideSlugs.map((slug) => ({ locale, slug })));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isPageLocale(locale) || !isFrpGuideSlug(slug)) notFound();
  const content = frpGuides[slug][locale];
  const canonical = `https://pindesys.com/${locale}/engineering/${slug}`;

  return {
    title: { absolute: content.seo.title },
    description: content.seo.description,
    keywords: content.seo.keywords,
    alternates: {
      canonical,
      languages: {
        en: `https://pindesys.com/en/engineering/${slug}`,
        ru: `https://pindesys.com/ru/engineering/${slug}`,
        "x-default": `https://pindesys.com/en/engineering/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      url: canonical,
      siteName: "PINDÉ",
      locale: content.locale,
      alternateLocale: locale === "en" ? ["ru_RU"] : ["en_US"],
      title: content.seo.title,
      description: content.seo.description,
      images: [{ url: "/images/systems/pinde-fd90-cold-climate-frp-window.webp", width: 430, height: 430, alt: content.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: content.seo.title,
      description: content.seo.description,
      images: ["/images/systems/pinde-fd90-cold-climate-frp-window.webp"],
    },
  };
}

export default async function FrpGuideRoute({ params }: Props) {
  const { locale, slug } = await params;
  if (!isPageLocale(locale) || !isFrpGuideSlug(slug)) notFound();
  return <FrpGuidePage locale={locale} content={frpGuides[slug][locale]} />;
}
