import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ColdClimateFrpSystemPage from "@/components/ColdClimateFrpSystemPage";
import {
  coldClimateFrpSystems,
  coldClimateFrpSystemSlugs,
  isColdClimateFrpSystemSlug,
} from "@/content/coldClimateFrp";
import { isPageLocale, pageLocales } from "@/content/pages";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return pageLocales.flatMap((locale) =>
    coldClimateFrpSystemSlugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isPageLocale(locale) || !isColdClimateFrpSystemSlug(slug)) notFound();

  const content = coldClimateFrpSystems[slug][locale];
  const canonical = `https://pindesys.com/${locale}/systems/frp/${slug}`;

  return {
    title: { absolute: content.seo.title },
    description: content.seo.description,
    keywords: content.seo.keywords,
    alternates: {
      canonical,
      languages: {
        en: `https://pindesys.com/en/systems/frp/${slug}`,
        ru: `https://pindesys.com/ru/systems/frp/${slug}`,
        "x-default": `https://pindesys.com/en/systems/frp/${slug}`,
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
          url: content.image.src,
          width: content.image.width,
          height: content.image.height,
          alt: content.image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.seo.title,
      description: content.seo.description,
      images: [content.image.src],
    },
  };
}

export default async function ColdClimateFrpSystemRoute({ params }: Props) {
  const { locale, slug } = await params;
  if (!isPageLocale(locale) || !isColdClimateFrpSystemSlug(slug)) notFound();

  return <ColdClimateFrpSystemPage locale={locale} content={coldClimateFrpSystems[slug][locale]} />;
}
