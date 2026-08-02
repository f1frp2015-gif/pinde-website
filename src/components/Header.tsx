"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, BRAND } from "@/lib/constants";
import { isLandingLocale, landingContent } from "@/content/landing";
import PindeMark from "./PindeMark";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const pathLocale = pathname.split("/")[1];
  const locale = isLandingLocale(pathLocale) ? pathLocale : null;
  const content = locale ? landingContent[locale] : null;
  const navLinks = content
    ? content.nav.map((link) => ({ ...link, href: `/${locale}${link.href}` }))
    : NAV_LINKS;
  const homeHref = locale ? `/${locale}` : "/";
  const contactHref = locale ? `/${locale}#rfq` : "/contact";
  const ctaLabel = content?.headerCta ?? "Get quote";

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(250,250,248,0.92)" : "rgba(250,250,248,0.6)",
        backdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid #E5E2DC"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={homeHref} className="flex items-center gap-[13px]" aria-label="PINDÉ home">
            <PindeMark size={20} />
            <span className="font-[family-name:var(--font-serif)] font-light text-lg tracking-[0.28em] text-alabaster">
              {BRAND.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-[34px]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] font-medium tracking-[3px] uppercase transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-alabaster"
                    : "text-warm hover:text-alabaster"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            {locale && (
              <div className="hidden items-center gap-[7px] border-r border-line pr-[17px] sm:flex">
                <Link
                  href="/en"
                  hrefLang="en"
                  lang="en"
                  className={`text-[10px] font-semibold tracking-[0.12em] ${
                    locale === "en" ? "text-alabaster" : "text-muted hover:text-alabaster"
                  }`}
                  aria-current={locale === "en" ? "page" : undefined}
                >
                  EN
                </Link>
                <span className="text-muted">/</span>
                <Link
                  href="/ru"
                  hrefLang="ru"
                  lang="ru"
                  className={`text-[10px] font-semibold tracking-[0.12em] ${
                    locale === "ru" ? "text-alabaster" : "text-muted hover:text-alabaster"
                  }`}
                  aria-current={locale === "ru" ? "page" : undefined}
                >
                  RU
                </Link>
              </div>
            )}
            <Link
              href={contactHref}
              className="hidden sm:inline-flex items-center gap-[10px] px-[34px] py-4 bg-red text-white text-[11px] font-medium tracking-[3px] uppercase rounded-[1px] hover:brightness-90 transition-all"
            >
              <span className="inline-block w-[5px] h-[5px] rounded-full bg-white" />
              {ctaLabel}
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-warm"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-line bg-obsidian/95 backdrop-blur-xl">
          <nav className="max-w-[1200px] mx-auto px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 text-[11px] font-medium tracking-[3px] uppercase transition-colors ${
                  pathname === link.href
                    ? "text-alabaster bg-surface"
                    : "text-warm hover:text-alabaster hover:bg-surface"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={contactHref}
              onClick={() => setMobileOpen(false)}
              className="block mt-2 px-4 py-3 bg-red text-white text-[11px] font-medium tracking-[3px] uppercase text-center"
            >
              {ctaLabel}
            </Link>
            {locale && (
              <div className="flex items-center justify-center gap-[13px] px-4 py-3 text-[12px]">
                <Link
                  href="/en"
                  hrefLang="en"
                  lang="en"
                  onClick={() => setMobileOpen(false)}
                  className={locale === "en" ? "text-alabaster" : "text-muted"}
                >
                  English
                </Link>
                <span className="text-muted">/</span>
                <Link
                  href="/ru"
                  hrefLang="ru"
                  lang="ru"
                  onClick={() => setMobileOpen(false)}
                  className={locale === "ru" ? "text-alabaster" : "text-muted"}
                >
                  Русский
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
