import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SupplyPage from "@/components/SupplyPage";
import { isPageLocale, pageLocales, supplyContent } from "@/content/pages";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return pageLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isPageLocale(locale)) notFound();
  const content = supplyContent[locale];
  const canonical = `https://pindesys.com/${locale}/supply`;
  return {
    title: { absolute: content.seo.title },
    description: content.seo.description,
    keywords: [...content.seo.keywords],
    alternates: {
      canonical,
      languages: {
        en: "https://pindesys.com/en/supply",
        ru: "https://pindesys.com/ru/supply",
        "x-default": "https://pindesys.com/en/supply",
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: "PINDÉ",
      locale: content.locale,
      alternateLocale: locale === "en" ? ["ru_RU"] : ["en_US"],
      title: content.seo.title,
      description: content.seo.description,
    },
    twitter: { card: "summary_large_image", title: content.seo.title, description: content.seo.description },
  };
}

export default async function SupplyRoute({ params }: Props) {
  const { locale } = await params;
  if (!isPageLocale(locale)) notFound();
  return <SupplyPage locale={locale} content={supplyContent[locale]} />;
}
