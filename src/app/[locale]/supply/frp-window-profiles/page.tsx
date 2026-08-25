import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FrpWindowProfilesSupplyPage from "@/components/FrpWindowProfilesSupplyPage";
import { frpWindowProfilesSupplyContent } from "@/content/frpWindowProfilesSupply";
import { isPageLocale, pageLocales } from "@/content/pages";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return pageLocales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isPageLocale(locale)) notFound();
  const content = frpWindowProfilesSupplyContent[locale];
  const canonical = `https://pindesys.com/${locale}/supply/frp-window-profiles`;
  return {
    title: { absolute: content.seo.title },
    description: content.seo.description,
    keywords: content.seo.keywords,
    alternates: {
      canonical,
      languages: {
        en: "https://pindesys.com/en/supply/frp-window-profiles",
        ru: "https://pindesys.com/ru/supply/frp-window-profiles",
        "x-default": "https://pindesys.com/en/supply/frp-window-profiles",
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
      images: [{ url: "/images/systems/pinde-fd90-cold-climate-frp-window.webp", width: 430, height: 430, alt: content.title }],
    },
    twitter: { card: "summary_large_image", title: content.seo.title, description: content.seo.description, images: ["/images/systems/pinde-fd90-cold-climate-frp-window.webp"] },
  };
}

export default async function FrpWindowProfilesSupplyRoute({ params }: Props) {
  const { locale } = await params;
  if (!isPageLocale(locale)) notFound();
  return <FrpWindowProfilesSupplyPage locale={locale} content={frpWindowProfilesSupplyContent[locale]} />;
}
