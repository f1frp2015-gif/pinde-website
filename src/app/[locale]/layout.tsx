import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import { isMarketLocale } from "@/content/marketChrome";
import {
  localBusinessJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/jsonld";
import { manrope } from "../fonts";
import "../globals.css";

const siteUrl = "https://pindesys.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PINDÉ | Window System Materials from Chongqing",
    template: "%s | PINDÉ",
  },
  description:
    "Aluminium and FRP window-system materials, machined components and glass-free CKD kits from Chongqing for local fabrication in Eurasian markets.",
  verification: {
    google: "XOeoFqJn0Z7WWbsfvnhyFJWGeVMhdQ4k07BdWZajNtM",
  },
  keywords: [
    "aluminium window profile systems",
    "FRP window profiles",
    "window system materials",
    "glass-free CKD window kits",
    "machined window profiles",
    "window systems for fabricators",
    "PINDÉ",
    "Chongqing window system supplier",
    "алюминиевые профильные системы",
    "стеклокомпозитный оконный профиль",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    languages: {
      en: `${siteUrl}/en`,
      ru: `${siteUrl}/ru`,
      "x-default": `${siteUrl}/en`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/en`,
    siteName: "PINDÉ",
    title: "PINDÉ | Window System Materials from Chongqing",
    description:
      "Aluminium and FRP profile systems, machined components and glass-free CKD kits for local window fabrication.",
    images: [
      {
        url: "/og-about-pinde.webp",
        width: 1200,
        height: 630,
        alt: "PINDÉ — Window System Materials from Chongqing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PINDÉ | Window System Materials from Chongqing",
    description:
      "Aluminium and FRP profile systems, machined components and glass-free CKD kits for local window fabrication.",
    images: ["/og-about-pinde.webp"],
  },
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ru" }];
}

export const dynamicParams = false;

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
    <html lang={locale} className={`${manrope.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased bg-obsidian text-alabaster selection:bg-red/15">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Header locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
        <WhatsAppButton locale={locale} />
        {process.env.VERCEL ? <SpeedInsights /> : null}
      </body>
    </html>
  );
}
