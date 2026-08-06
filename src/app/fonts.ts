import { Manrope } from "next/font/google";

// Keep one variable font for the PINDÉ display face. Body copy uses the
// platform UI stack so visitors do not download a second Latin/Cyrillic font.
export const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  // Let unicode-range select the glyph file actually used by each locale.
  // Preloading both subsets made English pages download Cyrillic up front.
  preload: false,
  display: "swap",
  variable: "--font-pinde-brand",
});
