import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import { isMarketLocale } from "@/content/marketChrome";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ru" }];
}

export default async function MarketLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isMarketLocale(locale)) {
    notFound();
  }

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} />
      <WhatsAppButton locale={locale} />
    </>
  );
}
