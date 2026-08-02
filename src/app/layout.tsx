import type { Metadata } from "next";
import { Cormorant_Garamond, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { organizationJsonLd, localBusinessJsonLd } from "@/lib/jsonld";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400"],
  display: "swap",
  variable: "--font-mono",
});

const siteUrl = "https://pinde-alu.com";

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
        url: "/og-ru-market.png",
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
    images: ["/og-ru-market.png"],
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
      className={`${cormorant.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full`}
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
