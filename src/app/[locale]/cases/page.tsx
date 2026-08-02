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
    ? "Конфигурации систем — Решения для холодного климата и ЕАЭС | PINDÉ"
    : "System Configurations — Cold-Climate & EAEU Window Solutions | PINDÉ";
  const description = locale === "ru"
    ? "Проверенные конфигурации систем для оконных производств в России, Казахстане, Беларуси и СНГ. Тёплый алюминий, стеклокомпозит FRP, CKD-поставки с применимыми стандартами ГОСТ, EN, NFRC."
    : "Verified system configurations for window fabricators in Russia, Kazakhstan, Belarus, and CIS. Thermally broken aluminium, FRP composite, and CKD supply examples with applicable GOST, EN, and NFRC standards.";
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
