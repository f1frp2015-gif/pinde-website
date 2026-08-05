import type { Metadata } from "next";
import { manrope } from "../fonts";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pindesys.com"),
  title: "PINDÉ",
  robots: {
    index: false,
    follow: true,
  },
};

export default function DefaultRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full`}>
      <body className="min-h-full bg-obsidian text-alabaster">{children}</body>
    </html>
  );
}
