import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ColdClimateFrpCategoryPage from "@/components/ColdClimateFrpCategoryPage";
import { coldClimateFrpCategoryContent } from "@/content/coldClimateFrpCategory";
import { coldClimateFrpSystems, coldClimateFrpSystemSlugs } from "@/content/coldClimateFrp";
import { isPageLocale, pageLocales } from "@/content/pages";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return pageLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isPageLocale(locale)) notFound();

  const content = coldClimateFrpCategoryContent[locale];
  const canonical = `https://pindesys.com/${locale}/systems/frp/cold-climate`;
  const images = coldClimateFrpSystemSlugs.map((slug) => {
    const image = coldClimateFrpSystems[slug][locale].image;
    return { url: image.src, width: image.width, height: image.height, alt: image.alt };
  });

  return {
    title: { absolute: content.seo.title },
    description: content.seo.description,
    keywords: content.seo.keywords,
    alternates: {
      canonical,
      languages: {
        en: "https://pindesys.com/en/systems/frp/cold-climate",
        ru: "https://pindesys.com/ru/systems/frp/cold-climate",
        "x-default": "https://pindesys.com/en/systems/frp/cold-climate",
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
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: content.seo.title,
      description: content.seo.description,
      images: [images[0].url],
    },
  };
}

export default async function ColdClimateFrpCategoryRoute({ params }: Props) {
  const { locale } = await params;
  if (!isPageLocale(locale)) notFound();

  return <ColdClimateFrpCategoryPage locale={locale} content={coldClimateFrpCategoryContent[locale]} />;
}
