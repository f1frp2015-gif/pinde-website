import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RfqPage from "@/components/RfqPage";
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

  const isRu = locale === "ru";
  const title = isRu
    ? "Технический запрос на оконные системы | PINDÉ"
    : "Technical RFQ for Window System Supply | PINDÉ";
  const description = isRu
    ? "Отправьте PINDÉ оконную ведомость, требования к системе и производству для подготовки сопоставимого технического предложения по алюминиевым и FRP системам."
    : "Send PINDÉ your window schedule, system requirements and fabrication scope for a comparable technical quotation covering aluminium and FRP window systems.";
  const canonical = `https://pindesys.com/${locale}/rfq`;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: {
        en: "https://pindesys.com/en/rfq",
        ru: "https://pindesys.com/ru/rfq",
        "x-default": "https://pindesys.com/en/rfq",
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: "PINDÉ",
      locale: isRu ? "ru_RU" : "en_US",
      alternateLocale: isRu ? ["en_US"] : ["ru_RU"],
      title,
      description,
      images: [
        {
          url: "/og-about-pinde.webp",
          width: 1200,
          height: 630,
          alt: isRu
            ? "PINDÉ — Технический запрос на оконные системы"
            : "PINDÉ — Technical RFQ for window system supply",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-about-pinde.webp"],
    },
  };
}

export default async function RfqRoute({ params }: Props) {
  const { locale } = await params;
  if (!isLandingLocale(locale)) notFound();

  return <RfqPage locale={locale} content={landingContent[locale].rfq} />;
}
