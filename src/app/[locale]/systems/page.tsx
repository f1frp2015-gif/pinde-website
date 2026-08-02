import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SystemsIndexPage from "@/components/SystemsIndexPage";
import { isPageLocale, pageLocales, systemsIndexContent } from "@/content/pages";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return pageLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isPageLocale(locale)) notFound();
  const content = systemsIndexContent[locale];
  const canonical = `https://pindesys.com/${locale}/systems`;
  return {
    title: { absolute: content.seo.title },
    description: content.seo.description,
    keywords: [...content.seo.keywords],
    alternates: {
      canonical,
      languages: {
        en: "https://pindesys.com/en/systems",
        ru: "https://pindesys.com/ru/systems",
        "x-default": "https://pindesys.com/en/systems",
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

export default async function SystemsIndexRoute({ params }: Props) {
  const { locale } = await params;
  if (!isPageLocale(locale)) notFound();
  return <SystemsIndexPage locale={locale} content={systemsIndexContent[locale]} />;
}
