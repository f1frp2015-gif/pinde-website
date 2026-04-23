import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { organizationJsonLd, localBusinessJsonLd } from "@/lib/jsonld";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
  variable: "--font-mono",
});

const siteUrl = "https://pinde-alu.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PINDÉ | Architectural Aluminium Systems",
    template: "%s | PINDÉ",
  },
  description:
    "Premium architectural aluminium windows and doors. Red Dot–calibre engineering from a 100,000 m² smart factory in Chongqing. Serving 30+ countries.",
  verification: {
    google: "XOeoFqJn0Z7WWbsfvnhyFJWGeVMhdQ4k07BdWZajNtM",
  },
  keywords: [
    "aluminum windows",
    "aluminum doors",
    "aluminium system windows",
    "thermal break windows",
    "sliding doors",
    "casement windows",
    "curtain wall",
    "PINDÉ",
    "architectural aluminium",
    "premium windows manufacturer",
    "aluminum windows China",
    "AS2047 windows",
    "NFRC certified windows",
    "system windows and doors",
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
    canonical: siteUrl,
    languages: {
      "en": siteUrl,
      "x-default": siteUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "PINDÉ",
    title: "PINDÉ | Architectural Aluminium Systems",
    description:
      "Premium architectural aluminium windows and doors. Red Dot–calibre engineering from a 100,000 m² smart factory in Chongqing. Serving 30+ countries.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PINDÉ — Architectural Aluminium Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PINDÉ | Architectural Aluminium Systems",
    description:
      "Premium architectural aluminium windows and doors. Red Dot–calibre engineering. AS2047, NFRC, CE certified.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased bg-obsidian text-alabaster font-[family-name:var(--font-sans)] selection:bg-red/15">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
