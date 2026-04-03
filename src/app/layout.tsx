import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PINDE | Premium Aluminum System Windows & Doors",
    template: "%s | PINDE",
  },
  description:
    "PINDE delivers high-performance aluminum system windows and doors for architects, builders, and homeowners worldwide. Engineered in Chongqing, China.",
  keywords: [
    "aluminum windows",
    "aluminum doors",
    "system windows",
    "thermal break windows",
    "sliding doors",
    "bi-fold doors",
    "curtain wall",
    "PINDE",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
