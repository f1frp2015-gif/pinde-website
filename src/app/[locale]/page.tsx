import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MarketLandingPage from "@/components/MarketLandingPage";
import {
  isLandingLocale,
  landingContent,
  landingLocales,
} from "@/content/landing";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return landingLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLandingLocale(locale)) notFound();

  const content = landingContent[locale];
  const canonical = `https://pinde-alu.com/${locale}`;

  return {
    title: {
      absolute: content.seo.title,
    },
    description: content.seo.description,
    keywords: [...content.seo.keywords],
    alternates: {
      canonical,
      languages: {
        en: "https://pinde-alu.com/en",
        ru: "https://pinde-alu.com/ru",
        "x-default": "https://pinde-alu.com/en",
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
      images: [
        {
          url: "/og-ru-market.png",
          width: 1200,
          height: 630,
          alt:
            locale === "ru"
              ? "PINDÉ — Системы для оконного производства"
              : "PINDÉ — Aluminium and FRP Window System Supply",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.seo.title,
      description: content.seo.description,
      images: ["/og-ru-market.png"],
    },
  };
}

export default async function LocaleLandingPage({ params }: Props) {
  const { locale } = await params;
  if (!isLandingLocale(locale)) notFound();

  return <MarketLandingPage locale={locale} content={landingContent[locale]} />;
}
