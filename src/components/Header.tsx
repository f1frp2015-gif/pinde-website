import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { marketChrome, type MarketLocale } from "@/content/marketChrome";
import MobileNav from "./MobileNav";
import PindeLogo from "./PindeLogo";

type HeaderProps = {
  locale: MarketLocale;
};

export default function Header({ locale }: HeaderProps) {
  const content = marketChrome[locale];
  const navLinks = content.nav.map((link) => ({
    ...link,
    href: `/${locale}${link.href}`,
  }));
  const utilityText =
    locale === "ru"
      ? "Алюминиевые и FRP оконные системы"
      : "Aluminium & FRP window systems";

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#081D2A] text-white shadow-[0_12px_32px_rgba(8,29,42,0.18)]">
      <div className="h-8 border-b border-white/10">
        <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-5 text-[10px] sm:px-8 lg:px-10">
          <span className="truncate font-medium tracking-[0.04em] text-white/60">
            {utilityText}
          </span>
          <div className="ml-4 flex shrink-0 items-center gap-4">
            <a
              href={`mailto:${BRAND.email}`}
              className="hidden items-center gap-1.5 text-white/60 transition-colors hover:text-[#DAAF37] sm:flex"
            >
              <Mail size={12} className="text-[#DAAF37]" aria-hidden="true" />
              {BRAND.email}
            </a>
            <div className="flex items-center gap-2 border-l border-white/15 pl-4 font-bold">
              <Link
                href="/en"
                hrefLang="en"
                lang="en"
                className={locale === "en" ? "text-[#DAAF37]" : "text-white/45 hover:text-white"}
                aria-current={locale === "en" ? "page" : undefined}
              >
                EN
              </Link>
              <span className="text-white/20">/</span>
              <Link
                href="/ru"
                hrefLang="ru"
                lang="ru"
                className={locale === "ru" ? "text-[#DAAF37]" : "text-white/45 hover:text-white"}
                aria-current={locale === "ru" ? "page" : undefined}
              >
                RU
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-white/10">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:h-[72px] lg:px-10">
          <Link href={`/${locale}`} className="shrink-0" aria-label="PINDÉ home">
            <PindeLogo size="sm" eager />
          </Link>

          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label={locale === "ru" ? "Основная навигация" : "Main navigation"}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b-2 border-transparent py-2 text-[11px] font-semibold text-white/66 transition-colors hover:border-[#DAAF37] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
              className="hidden items-center gap-2 text-[11px] font-semibold text-white/72 transition-colors hover:text-white xl:flex"
            >
              <Phone size={14} className="text-[#DAAF37]" aria-hidden="true" />
              {BRAND.phone}
            </a>
            <Link
              href={`/${locale}/rfq`}
              className="hidden min-h-11 items-center bg-[#DAAF37] px-5 text-[11px] font-bold text-[#081D2A] transition-[filter] hover:brightness-105 sm:inline-flex"
            >
              {content.headerCta}
            </Link>
            <MobileNav
              links={navLinks}
              ctaHref={`/${locale}/rfq`}
              ctaLabel={content.headerCta}
              menuLabel={locale === "ru" ? "Открыть меню" : "Toggle menu"}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
