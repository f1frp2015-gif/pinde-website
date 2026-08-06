import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Pd95SystemPage from "@/components/Pd95SystemPage";
import { isPageLocale, pageLocales } from "@/content/pages";
import { pd95Content } from "@/content/pd95";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return pageLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isPageLocale(locale)) notFound();

  const content = pd95Content[locale];
  const canonical = `https://pindesys.com/${locale}/systems/frp/pd95`;

  return {
    title: { absolute: content.seo.title },
    description: content.seo.description,
    keywords: content.seo.keywords,
    alternates: {
      canonical,
      languages: {
        en: "https://pindesys.com/en/systems/frp/pd95",
        ru: "https://pindesys.com/ru/systems/frp/pd95",
        "x-default": "https://pindesys.com/en/systems/frp/pd95",
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
          url: "/images/systems/pinde-pd95-passive-window-thermal-performance.webp",
          width: 1146,
          height: 1370,
          alt: locale === "ru" ? "Оконная система PD95 для пассивных зданий" : "PD95 passive-performance window system",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.seo.title,
      description: content.seo.description,
      images: ["/images/systems/pinde-pd95-passive-window-thermal-performance.webp"],
    },
  };
}

export default async function Pd95Route({ params }: Props) {
  const { locale } = await params;
  if (!isPageLocale(locale)) notFound();

  return <Pd95SystemPage locale={locale} content={pd95Content[locale]} />;
}
