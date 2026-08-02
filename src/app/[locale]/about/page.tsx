import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AboutPindePage from "@/components/AboutPindePage";
import { aboutContent, aboutLocales, isAboutLocale } from "@/content/about";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return aboutLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isAboutLocale(locale)) notFound();

  const content = aboutContent[locale];
  const canonical = `https://pinde-alu.com/${locale}/about`;

  return {
    title: { absolute: content.seo.title },
    description: content.seo.description,
    keywords: [...content.seo.keywords],
    alternates: {
      canonical,
      languages: {
        en: "https://pinde-alu.com/en/about",
        ru: "https://pinde-alu.com/ru/about",
        "x-default": "https://pinde-alu.com/en/about",
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
      images: [{ url: "/og-about-pinde.png", width: 1200, height: 630, alt: content.hero.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: content.seo.title,
      description: content.seo.description,
      images: ["/og-about-pinde.png"],
    },
  };
}

export default async function LocalizedAboutPage({ params }: Props) {
  const { locale } = await params;
  if (!isAboutLocale(locale)) notFound();

  return <AboutPindePage locale={locale} content={aboutContent[locale]} />;
}
