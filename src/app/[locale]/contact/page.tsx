import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContactPage from "@/components/ContactPage";
import { isPageLocale, pageLocales } from "@/content/pages";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return pageLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isPageLocale(locale)) notFound();
  const title = locale === "ru"
    ? "Контакты — Запрос цен на алюминиевые окна и двери | PINDÉ"
    : "Contact — Request a Quote for Window Systems | PINDÉ";
  const description = locale === "ru"
    ? "Контакты PINDÉ в Чунцине: предложения по алюминиевым и FRP-системам, технические данные и CKD-комплекты без стеклопакетов."
    : "Contact PINDÉ in Chongqing for aluminium or FRP window-system quotations, technical data and glass-free CKD supply.";
  const canonical = `https://pindesys.com/${locale}/contact`;
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: {
        en: "https://pindesys.com/en/contact",
        ru: "https://pindesys.com/ru/contact",
        "x-default": "https://pindesys.com/en/contact",
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

export default async function ContactRoute({ params }: Props) {
  const { locale } = await params;
  if (!isPageLocale(locale)) notFound();
  return <ContactPage locale={locale} />;
}
