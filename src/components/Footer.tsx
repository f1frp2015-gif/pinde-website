"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { BRAND, CERTIFICATIONS } from "@/lib/constants";
import { isMarketLocale, marketChrome } from "@/content/marketChrome";
import PindeMark from "./PindeMark";

export default function Footer() {
  const pathname = usePathname();
  const pathLocale = pathname.split("/")[1];
  const locale = isMarketLocale(pathLocale) ? pathLocale : null;
  const content = locale ? marketChrome[locale] : null;

  if (content && locale) {
    const systemsLinks = [
      { label: content.nav[0].label, href: `/${locale}#systems` },
      { label: content.nav[1].label, href: `/${locale}#formats` },
      { label: content.nav[3].label, href: `/${locale}#engineering` },
    ];
    const workingLinks = [
      { label: content.nav[2].label, href: `/${locale}#process` },
      { label: content.rfqEyebrow, href: `/${locale}#rfq` },
      { label: locale === "ru" ? "Вопросы и ответы" : "Questions and answers", href: `/${locale}#faq` },
    ];

    return (
      <footer className="border-t-4 border-[#D62832] bg-[#0B2639] text-white">
        <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1.15fr]">
            <div>
              <div className="flex items-center gap-3">
                <PindeMark size={24} frame="#FFFFFF" dot="#E63740" />
                <span className="text-[19px] font-extrabold tracking-[0.22em]">PINDÉ</span>
              </div>
              <p className="mt-5 max-w-[330px] text-[13px] leading-[1.75] text-white/60">{content.footer.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["ALUMINIUM", "FRP", "MACHINING", "CKD"].map((tag) => (
                  <span key={tag} className="border border-white/15 px-3 py-2 text-[9px] font-bold tracking-[0.08em] text-white/50">{tag}</span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="border-b border-white/15 pb-3 text-[10px] font-bold uppercase tracking-[0.08em] text-[#8CC2E2]">{content.footer.systems}</h2>
              <ul className="mt-4 space-y-3">
                {systemsLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-[12px] font-semibold text-white/65 transition-colors hover:text-white">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="border-b border-white/15 pb-3 text-[10px] font-bold uppercase tracking-[0.08em] text-[#8CC2E2]">{content.footer.company}</h2>
              <ul className="mt-4 space-y-3">
                {workingLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-[12px] font-semibold text-white/65 transition-colors hover:text-white">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="border-b border-white/15 pb-3 text-[10px] font-bold uppercase tracking-[0.08em] text-[#8CC2E2]">{content.footer.contact}</h2>
              <ul className="mt-4 space-y-4 text-[12px] text-white/65">
                <li className="flex items-start gap-3">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-[#E94A53]" />
                  <span className="leading-[1.6]">{BRAND.address}</span>
                </li>
                <li>
                  <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 transition-colors hover:text-white">
                    <Phone size={15} className="shrink-0 text-[#E94A53]" />
                    {BRAND.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3 break-all transition-colors hover:text-white">
                    <Mail size={15} className="shrink-0 text-[#E94A53]" />
                    {BRAND.email}
                  </a>
                </li>
              </ul>
              <Link href={`/${locale}#rfq`} className="mt-6 inline-flex items-center gap-2 border border-white/25 px-4 py-3 text-[11px] font-bold text-white transition-colors hover:bg-white hover:text-[#102F45]">
                {content.headerCta}
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-5 text-[10px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <span>&copy; {new Date().getFullYear()} {content.footer.copyright}</span>
            <div className="flex items-center gap-3">
              <Link href="/en" hrefLang="en" lang="en" className={locale === "en" ? "font-bold text-white" : "hover:text-white"}>English</Link>
              <span>/</span>
              <Link href="/ru" hrefLang="ru" lang="ru" className={locale === "ru" ? "font-bold text-white" : "hover:text-white"}>Русский</Link>
              <span className="ml-2 hidden sm:inline">{content.footer.tagline}</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t border-line bg-obsidian">
      <div className="mx-auto max-w-[1200px] px-[55px] py-[89px] max-lg:px-6">
        <div className="grid grid-cols-1 gap-[55px] md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-[21px] flex items-center gap-[13px]">
              <PindeMark size={20} />
              <span className="font-[family-name:var(--font-serif)] text-lg font-light tracking-[0.28em]">{BRAND.name}</span>
            </div>
            <p className="max-w-[260px] text-[13px] leading-[1.8] text-warm">{BRAND.description}</p>
          </div>
          <div className="lg:col-span-2">
            <h2 className="mb-[21px] text-[10px] font-medium uppercase tracking-[3px] text-muted">Systems</h2>
            <div className="flex flex-wrap gap-2">
              {CERTIFICATIONS.map((tag) => (
                <span key={tag} className="border border-line px-3 py-1.5 text-[10px] font-medium tracking-[1px] text-muted">{tag}</span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-[21px] text-[10px] font-medium uppercase tracking-[3px] text-muted">Contact</h2>
            <a href={`mailto:${BRAND.email}`} className="text-[13px] text-warm hover:text-alabaster">{BRAND.email}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
