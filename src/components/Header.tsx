"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Menu, Phone, X } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import { isMarketLocale, marketChrome } from "@/content/marketChrome";
import PindeMark from "./PindeMark";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const pathLocale = pathname.split("/")[1];
  const locale = isMarketLocale(pathLocale) ? pathLocale : null;
  const content = locale ? marketChrome[locale] : null;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (content && locale) {
    const navLinks = content.nav.map((link) => ({ ...link, href: `/${locale}${link.href}` }));
    const languageSuffix = pathname.replace(/^\/(?:en|ru)/, "");
    const utilityText =
      locale === "ru"
        ? "Системные материалы и полуфабрикаты из Чунцина"
        : "Window-system materials and semi-finished kits from Chongqing";

    return (
      <header className="fixed inset-x-0 top-0 z-50 bg-white text-[#142C3D]">
        <div className="h-8 bg-[#102F45] text-white">
          <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-5 text-[10px] sm:px-8 lg:px-10">
            <span className="truncate font-semibold text-white/70">{utilityText}</span>
            <div className="ml-4 flex shrink-0 items-center gap-4">
              <a href={`mailto:${BRAND.email}`} className="hidden items-center gap-1.5 text-white/65 transition-colors hover:text-white sm:flex">
                <Mail size={12} />
                {BRAND.email}
              </a>
              <div className="flex items-center gap-2 border-l border-white/20 pl-4 font-bold">
                <Link href={`/en${languageSuffix}`} hrefLang="en" lang="en" className={locale === "en" ? "text-white" : "text-white/45 hover:text-white"} aria-current={locale === "en" ? "page" : undefined}>
                  EN
                </Link>
                <span className="text-white/25">/</span>
                <Link href={`/ru${languageSuffix}`} hrefLang="ru" lang="ru" className={locale === "ru" ? "text-white" : "text-white/45 hover:text-white"} aria-current={locale === "ru" ? "page" : undefined}>
                  RU
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={`border-b transition-shadow ${scrolled ? "border-[#C9D6DE] shadow-[0_8px_24px_rgba(16,47,69,0.08)]" : "border-[#D8E1E6]"}`}>
          <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:h-[72px] lg:px-10">
            <Link href={`/${locale}`} className="flex items-center gap-3" aria-label="PINDÉ home">
              <PindeMark size={22} frame="#102F45" />
              <div className="leading-none">
                <span className="block text-[18px] font-extrabold tracking-[0.22em] text-[#102F45]">PINDÉ</span>
                <span className="mt-1 hidden text-[8px] font-bold uppercase tracking-[0.08em] text-[#607684] sm:block">
                  Window system supply
                </span>
              </div>
            </Link>

            <nav className="hidden items-center gap-7 lg:flex" aria-label={locale === "ru" ? "Основная навигация" : "Main navigation"}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} className={`border-b-2 py-2 text-[12px] font-bold transition-colors ${pathname === link.href ? "border-[#D62832] text-[#102F45]" : "border-transparent text-[#3F596A] hover:border-[#D62832] hover:text-[#102F45]"}`}>
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="hidden items-center gap-2 text-[11px] font-bold text-[#0E527D] xl:flex">
                <Phone size={14} />
                {BRAND.phone}
              </a>
              <Link href={`/${locale}#rfq`} className="hidden min-h-11 items-center bg-[#D62832] px-5 text-[11px] font-bold text-white transition-colors hover:bg-[#B91F28] sm:inline-flex">
                {content.headerCta}
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen((open) => !open)}
                className="p-2 text-[#102F45] lg:hidden"
                aria-label={locale === "ru" ? "Открыть меню" : "Toggle menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-b border-[#C9D6DE] bg-white shadow-[0_18px_40px_rgba(16,47,69,0.12)] lg:hidden">
            <nav className="mx-auto max-w-[1280px] px-5 py-4 sm:px-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="flex items-center justify-between border-b border-[#E1E8EC] px-1 py-3 text-[13px] font-bold text-[#29465A]">
                  {link.label}
                  <span className="text-[#D62832]">→</span>
                </Link>
              ))}
              <Link href={`/${locale}#rfq`} onClick={() => setMobileOpen(false)} className="mt-4 flex min-h-12 items-center justify-center bg-[#D62832] px-5 text-[12px] font-bold text-white">
                {content.headerCta}
              </Link>
            </nav>
          </div>
        )}
      </header>
    );
  }

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(250,250,248,0.92)" : "rgba(250,250,248,0.6)",
        backdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid #E5E2DC" : "1px solid transparent",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-[55px] max-lg:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-[13px]" aria-label="PINDÉ home">
            <PindeMark size={20} />
            <span className="font-[family-name:var(--font-serif)] text-lg font-light tracking-[0.28em] text-alabaster">{BRAND.name}</span>
          </Link>
          <nav className="hidden items-center gap-[34px] lg:flex">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-[11px] font-medium uppercase tracking-[3px] text-warm transition-colors hover:text-alabaster">
                {link.label}
              </Link>
            ))}
          </nav>
          <button type="button" onClick={() => setMobileOpen((open) => !open)} className="p-2 text-warm lg:hidden" aria-label="Toggle menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
