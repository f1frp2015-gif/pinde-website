"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Menu, Phone, X } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import { isMarketLocale, marketChrome } from "@/content/marketChrome";
import PindeLogo from "./PindeLogo";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const pathLocale = pathname.split("/")[1];
  const locale = isMarketLocale(pathLocale) ? pathLocale : null;
  const content = locale ? marketChrome[locale] : null;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (content && locale) {
    const navLinks = content.nav.map((link) => ({ ...link, href: `/${locale}${link.href}` }));
    const languageSuffix = pathname.replace(/^\/(?:en|ru)/, "");
    const utilityText =
      locale === "ru"
        ? "Алюминиевые и FRP оконные системы"
        : "Aluminium & FRP window systems";

    return (
      <header className={`fixed inset-x-0 top-0 z-50 bg-[#0D2440] text-white transition-shadow ${scrolled ? "shadow-[0_12px_32px_rgba(13,36,64,0.22)]" : ""}`}>
        <div className="h-8 border-b border-white/10">
          <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-5 text-[10px] sm:px-8 lg:px-10">
            <span className="truncate font-medium tracking-[0.04em] text-white/60">{utilityText}</span>
            <div className="ml-4 flex shrink-0 items-center gap-4">
              <a href={`mailto:${BRAND.email}`} className="hidden items-center gap-1.5 text-white/60 transition-colors hover:text-[#C7A154] sm:flex">
                <Mail size={12} className="text-[#C7A154]" />
                {BRAND.email}
              </a>
              <div className="flex items-center gap-2 border-l border-white/15 pl-4 font-bold">
                <Link href={`/en${languageSuffix}`} hrefLang="en" lang="en" className={locale === "en" ? "text-[#C7A154]" : "text-white/45 hover:text-white"} aria-current={locale === "en" ? "page" : undefined}>
                  EN
                </Link>
                <span className="text-white/20">/</span>
                <Link href={`/ru${languageSuffix}`} hrefLang="ru" lang="ru" className={locale === "ru" ? "text-[#C7A154]" : "text-white/45 hover:text-white"} aria-current={locale === "ru" ? "page" : undefined}>
                  RU
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-white/10">
          <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:h-[72px] lg:px-10">
            <Link href={`/${locale}`} className="shrink-0" aria-label="PINDÉ home">
              <PindeLogo variant="light" size="sm" hideDescriptorOnMobile />
            </Link>

            <nav className="hidden items-center gap-6 lg:flex" aria-label={locale === "ru" ? "Основная навигация" : "Main navigation"}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`border-b-2 py-2 text-[11px] font-semibold transition-colors ${pathname === link.href ? "border-[#C7A154] text-white" : "border-transparent text-white/66 hover:border-[#C7A154] hover:text-white"}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="hidden items-center gap-2 text-[11px] font-semibold text-white/72 transition-colors hover:text-white xl:flex">
                <Phone size={14} className="text-[#C7A154]" />
                {BRAND.phone}
              </a>
              <Link href={`/${locale}/contact`} className="hidden min-h-11 items-center bg-[#C7A154] px-5 text-[11px] font-bold text-[#0D2440] transition-colors hover:bg-[#C7A154] sm:inline-flex">
                {content.headerCta}
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen((open) => !open)}
                className="p-2 text-white lg:hidden"
                aria-label={locale === "ru" ? "Открыть меню" : "Toggle menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {mobileOpen ? (
          <div className="border-b border-[#C7A154]/35 bg-[#0D2440] shadow-[0_18px_40px_rgba(13,36,64,0.22)] lg:hidden">
            <nav className="mx-auto max-w-[1280px] px-5 py-4 sm:px-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="flex items-center justify-between border-b border-white/10 px-1 py-3 text-[13px] font-semibold text-white/78">
                  {link.label}
                  <span className="text-[#C7A154]">→</span>
                </Link>
              ))}
              <Link href={`/${locale}/contact`} onClick={() => setMobileOpen(false)} className="mt-4 flex min-h-12 items-center justify-center bg-[#C7A154] px-5 text-[12px] font-bold text-[#0D2440]">
                {content.headerCta}
              </Link>
            </nav>
          </div>
        ) : null}
      </header>
    );
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0D2440] text-white shadow-[0_12px_32px_rgba(13,36,64,0.18)]">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 lg:px-[55px]">
        <Link href="/en" aria-label="PINDÉ home">
          <PindeLogo variant="light" size="sm" />
        </Link>
        <nav className="hidden items-center gap-[34px] lg:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/65 transition-colors hover:text-[#C7A154]">
              {link.label}
            </Link>
          ))}
        </nav>
        <button type="button" onClick={() => setMobileOpen((open) => !open)} className="p-2 text-white lg:hidden" aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
