"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Globe2, Layers3, Mail, MapPin, Phone, ShieldCheck, Thermometer } from "lucide-react";
import { BRAND, CERTIFICATIONS } from "@/lib/constants";
import { isMarketLocale, marketChrome } from "@/content/marketChrome";
import PindeLogo from "./PindeLogo";

export default function Footer() {
  const pathname = usePathname();
  const pathLocale = pathname.split("/")[1];
  const locale = isMarketLocale(pathLocale) ? pathLocale : null;
  const content = locale ? marketChrome[locale] : null;

  if (content && locale) {
    const languageSuffix = pathname.replace(/^\/(?:en|ru)/, "");
    const systemsLinks = [
      { label: content.nav[0].label, href: `/${locale}/systems` },
      { label: content.nav[1].label, href: `/${locale}/supply` },
      { label: content.nav[3].label, href: `/${locale}/engineering` },
    ];
    const workingLinks = [
      { label: content.nav[5].label, href: `/${locale}/about` },
      { label: content.nav[2].label, href: `/${locale}/process` },
      { label: content.nav[4].label, href: `/${locale}/certification` },
      { label: content.rfqEyebrow, href: `/${locale}/contact` },
    ];
    const promises = locale === "ru"
      ? [
          { Icon: ShieldCheck, title: "НАДЁЖНОСТЬ", subtitle: "Контроль качества" },
          { Icon: Thermometer, title: "ТЕПЛОИЗОЛЯЦИЯ", subtitle: "Инженерные системы" },
          { Icon: Layers3, title: "СИСТЕМНЫЕ РЕШЕНИЯ", subtitle: "Комплектная поставка" },
          { Icon: Globe2, title: "ЦЕНТРАЛЬНАЯ АЗИЯ", subtitle: "Региональная логистика" },
        ]
      : [
          { Icon: ShieldCheck, title: "RELIABILITY", subtitle: "Controlled quality" },
          { Icon: Thermometer, title: "INSULATION", subtitle: "Engineered systems" },
          { Icon: Layers3, title: "SYSTEM SOLUTIONS", subtitle: "Complete supply" },
          { Icon: Globe2, title: "CENTRAL ASIA", subtitle: "Regional delivery" },
        ];

    return (
      <footer>
        <div className="border-y border-[#DCE1E6] bg-white">
          <div className="mx-auto grid max-w-[1280px] grid-cols-2 px-5 sm:px-8 lg:grid-cols-4 lg:px-10">
            {promises.map(({ Icon, title, subtitle }, index) => (
              <div key={title} className={`flex min-h-[108px] items-center gap-3 border-[#DCE1E6] py-5 ${index % 2 === 0 ? "pr-4" : "border-l pl-4"} lg:border-l lg:px-6 lg:first:border-l-0`}>
                <Icon size={30} strokeWidth={1.7} className="shrink-0 text-[#C7A154]" aria-hidden="true" />
                <span>
                  <strong className="block font-[family-name:var(--font-brand)] text-[10px] font-bold tracking-[0.04em] text-[#0D2440]">{title}</strong>
                  <span className="mt-1 block text-[10px] text-[#7A828C]">{subtitle}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t-[6px] border-[#C7A154] bg-[#0D2440] text-white">
          <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1.15fr]">
              <div>
                <PindeLogo variant="light" size="md" />
                <p className="mt-5 max-w-[350px] text-[13px] leading-[1.75] text-white/62">{content.footer.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["ALUMINIUM", "FRP", "MACHINING", "CKD"].map((tag) => (
                    <span key={tag} className="border border-[#C7A154]/35 px-3 py-2 text-[9px] font-semibold tracking-[0.08em] text-white/60">{tag}</span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="border-b border-white/15 pb-3 text-[10px] font-bold uppercase tracking-[0.08em] text-[#C7A154]">{content.footer.systems}</h2>
                <ul className="mt-4 space-y-3">
                  {systemsLinks.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="text-[12px] font-medium text-white/65 transition-colors hover:text-white">{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="border-b border-white/15 pb-3 text-[10px] font-bold uppercase tracking-[0.08em] text-[#C7A154]">{content.footer.company}</h2>
                <ul className="mt-4 space-y-3">
                  {workingLinks.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="text-[12px] font-medium text-white/65 transition-colors hover:text-white">{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="border-b border-white/15 pb-3 text-[10px] font-bold uppercase tracking-[0.08em] text-[#C7A154]">{content.footer.contact}</h2>
                <ul className="mt-4 space-y-4 text-[12px] text-white/65">
                  <li className="flex items-start gap-3">
                    <MapPin size={15} className="mt-0.5 shrink-0 text-[#C7A154]" />
                    <span className="leading-[1.6]">{BRAND.address}</span>
                  </li>
                  <li>
                    <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 transition-colors hover:text-white">
                      <Phone size={15} className="shrink-0 text-[#C7A154]" />
                      {BRAND.phone}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3 break-all transition-colors hover:text-white">
                      <Mail size={15} className="shrink-0 text-[#C7A154]" />
                      {BRAND.email}
                    </a>
                  </li>
                </ul>
                <Link href={`/${locale}/contact`} className="mt-6 inline-flex items-center gap-2 bg-[#C7A154] px-4 py-3 text-[11px] font-bold text-[#0D2440] transition-colors hover:bg-[#C7A154]">
                  {content.headerCta}
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-5 text-[10px] text-white/42 sm:flex-row sm:items-center sm:justify-between">
              <span>&copy; {new Date().getFullYear()} {content.footer.copyright}</span>
              <div className="flex items-center gap-3">
                <Link href={`/en${languageSuffix}`} hrefLang="en" lang="en" className={locale === "en" ? "font-bold text-[#C7A154]" : "hover:text-white"}>English</Link>
                <span>/</span>
                <Link href={`/ru${languageSuffix}`} hrefLang="ru" lang="ru" className={locale === "ru" ? "font-bold text-[#C7A154]" : "hover:text-white"}>Русский</Link>
                <span className="ml-2 hidden sm:inline">{content.footer.tagline}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t-[6px] border-[#C7A154] bg-[#0D2440] text-white">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-16 md:grid-cols-3 lg:px-[55px]">
        <div>
          <PindeLogo variant="light" size="md" />
          <p className="mt-5 max-w-[300px] text-[13px] leading-[1.8] text-white/60">{BRAND.description}</p>
        </div>
        <div>
          <h2 className="mb-5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#C7A154]">Systems</h2>
          <div className="flex flex-wrap gap-2">
            {CERTIFICATIONS.map((tag) => (
              <span key={tag} className="border border-white/15 px-3 py-1.5 text-[10px] text-white/55">{tag}</span>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#C7A154]">Contact</h2>
          <a href={`mailto:${BRAND.email}`} className="text-[13px] text-white/65 hover:text-white">{BRAND.email}</a>
        </div>
      </div>
    </footer>
  );
}
