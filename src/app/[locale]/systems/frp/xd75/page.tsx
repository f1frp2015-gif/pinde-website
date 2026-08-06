import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Pd75SystemPage from "@/components/Pd75SystemPage";
import { isPageLocale, pageLocales } from "@/content/pages";
import { pd75Content } from "@/content/pd75";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return pageLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isPageLocale(locale)) notFound();

  const content = pd75Content[locale];
  const canonical = `https://pindesys.com/${locale}/systems/frp/xd75`;

  return {
    title: { absolute: content.seo.title },
    description: content.seo.description,
    keywords: content.seo.keywords,
    alternates: {
      canonical,
      languages: {
        en: "https://pindesys.com/en/systems/frp/xd75",
        ru: "https://pindesys.com/ru/systems/frp/xd75",
        "x-default": "https://pindesys.com/en/systems/frp/xd75",
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
          url: "/images/systems/pinde-pd75-ultra-frp-core-thermal-performance.webp",
          width: 1178,
          height: 756,
          alt: locale === "ru" ? "Оконная система PD75 с Ultra FRP Core" : "PD75 window system with Ultra FRP Core",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.seo.title,
      description: content.seo.description,
      images: ["/images/systems/pinde-pd75-ultra-frp-core-thermal-performance.webp"],
    },
  };
}

export default async function Pd75Route({ params }: Props) {
  const { locale } = await params;
  if (!isPageLocale(locale)) notFound();

  return <Pd75SystemPage locale={locale} content={pd75Content[locale]} />;
}
