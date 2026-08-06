import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CasesPage from "@/components/CasesPage";
import { isPageLocale, pageLocales } from "@/content/pages";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return pageLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isPageLocale(locale)) notFound();
  const title = locale === "ru"
    ? "Конфигурации оконных систем для холодных регионов | PINDÉ"
    : "Window System Configurations for Cold Regions | PINDÉ";
  const description = locale === "ru"
    ? "Справочные алюминиевые, FRP и CKD-конфигурации для производств России и Центральной Азии. Стандарты и протоколы уточняются по проекту."
    : "Reference aluminium, FRP and glass-free CKD configurations for fabricators in Russia and Central Asia, with project-specific standards and evidence.";
  const canonical = `https://pindesys.com/${locale}/cases`;
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: {
        en: "https://pindesys.com/en/cases",
        ru: "https://pindesys.com/ru/cases",
        "x-default": "https://pindesys.com/en/cases",
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: "PINDÉ",
      locale: locale === "en" ? "en_US" : "ru_RU",
      alternateLocale: locale === "en" ? ["ru_RU"] : ["en_US"],
      title,
      description,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function CasesRoute({ params }: Props) {
  const { locale } = await params;
  if (!isPageLocale(locale)) notFound();
  return <CasesPage locale={locale} />;
}
