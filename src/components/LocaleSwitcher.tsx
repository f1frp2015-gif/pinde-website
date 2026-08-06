"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MarketLocale } from "@/content/marketChrome";

type LocaleSwitcherProps = {
  locale: MarketLocale;
  englishLabel: string;
  russianLabel: string;
  activeClassName: string;
  inactiveClassName: string;
  separatorClassName?: string;
};

function localizedPath(pathname: string, locale: MarketLocale) {
  const segments = pathname.split("/");

  if (segments[1] === "en" || segments[1] === "ru") {
    segments[1] = locale;
    return segments.join("/") || `/${locale}`;
  }

  return `/${locale}`;
}

export default function LocaleSwitcher({
  locale,
  englishLabel,
  russianLabel,
  activeClassName,
  inactiveClassName,
  separatorClassName,
}: LocaleSwitcherProps) {
  const pathname = usePathname();

  return (
    <>
      <Link
        href={localizedPath(pathname, "en")}
        prefetch={false}
        hrefLang="en"
        lang="en"
        className={locale === "en" ? activeClassName : inactiveClassName}
        aria-current={locale === "en" ? "page" : undefined}
      >
        {englishLabel}
      </Link>
      <span className={separatorClassName}>/</span>
      <Link
        href={localizedPath(pathname, "ru")}
        prefetch={false}
        hrefLang="ru"
        lang="ru"
        className={locale === "ru" ? activeClassName : inactiveClassName}
        aria-current={locale === "ru" ? "page" : undefined}
      >
        {russianLabel}
      </Link>
    </>
  );
}
