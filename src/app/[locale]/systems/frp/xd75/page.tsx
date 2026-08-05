import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Xd75SystemPage from "@/components/Xd75SystemPage";
import { isPageLocale, pageLocales } from "@/content/pages";
import { xd75Content } from "@/content/xd75";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return pageLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isPageLocale(locale)) notFound();

  const content = xd75Content[locale];
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
          url: "/images/systems/pinde-xd75-aluminium-grpu-composite-window-system.webp",
          width: 1253,
          height: 1253,
          alt: locale === "ru" ? "Гибридная оконная система XD75" : "XD75 hybrid window system",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.seo.title,
      description: content.seo.description,
      images: ["/images/systems/pinde-xd75-aluminium-grpu-composite-window-system.webp"],
    },
  };
}

export default async function Xd75Route({ params }: Props) {
  const { locale } = await params;
  if (!isPageLocale(locale)) notFound();

  return <Xd75SystemPage locale={locale} content={xd75Content[locale]} />;
}
