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
    ? "Свяжитесь с PINDÉ для запроса цен, технических спецификаций и поддержки. Офис и завод в Чунцине. Email, WhatsApp, телефон. Ответ в течение 2 рабочих дней."
    : "Contact PINDÉ for window system quotations, technical specifications, and support. Chongqing office and factory. Email, WhatsApp, phone. Response within 2 business days.";
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
