import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EngineeringPage from "@/components/EngineeringPage";
import { isPageLocale, pageLocales, engineeringContent } from "@/content/pages";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return pageLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isPageLocale(locale)) notFound();
  const content = engineeringContent[locale];
  const canonical = `https://pindesys.com/${locale}/engineering`;
  return {
    title: { absolute: content.seo.title },
    description: content.seo.description,
    keywords: [...content.seo.keywords],
    alternates: {
      canonical,
      languages: {
        en: "https://pindesys.com/en/engineering",
        ru: "https://pindesys.com/ru/engineering",
        "x-default": "https://pindesys.com/en/engineering",
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

export default async function EngineeringRoute({ params }: Props) {
  const { locale } = await params;
  if (!isPageLocale(locale)) notFound();
  return <EngineeringPage locale={locale} content={engineeringContent[locale]} />;
}
