import Link from "next/link";
import { ArrowUpRight, Globe2, Layers3, Mail, MapPin, Phone, ShieldCheck, Thermometer } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { marketChrome, type MarketLocale } from "@/content/marketChrome";
import LocaleSwitcher from "./LocaleSwitcher";
import PindeLogo from "./PindeLogo";

type FooterProps = {
  locale: MarketLocale;
};

export default function Footer({ locale }: FooterProps) {
    const content = marketChrome[locale];
    const systemsLinks = [
      { label: content.nav[0].label, href: `/${locale}/systems` },
      { label: content.nav[1].label, href: `/${locale}/supply` },
      { label: content.nav[3].label, href: `/${locale}/engineering` },
    ];
    const workingLinks = [
      { label: content.nav[5].label, href: `/${locale}/about` },
      { label: content.nav[2].label, href: `/${locale}/process` },
      { label: content.nav[4].label, href: `/${locale}/certification` },
      { label: locale === "ru" ? "Проекты и конфигурации" : "Cases & configurations", href: `/${locale}/cases` },
      { label: locale === "ru" ? "Контакты" : "Contact", href: `/${locale}/contact` },
      { label: content.rfqEyebrow, href: `/${locale}/rfq` },
    ];
    const promises = locale === "ru"
      ? [
          { Icon: ShieldCheck, title: "ПРОСЛЕЖИВАЕМОСТЬ", subtitle: "Ревизия и номер партии" },
          { Icon: Thermometer, title: "ТЕПЛОТЕХНИКА", subtitle: "Результат по конструкции" },
          { Icon: Layers3, title: "КОМПЛЕКТАЦИЯ", subtitle: "P1 · P2 · P3" },
          { Icon: Globe2, title: "ЕВРАЗИЯ", subtitle: "Железная дорога и автодоставка" },
        ]
      : [
          { Icon: ShieldCheck, title: "TRACEABILITY", subtitle: "Revision and batch ID" },
          { Icon: Thermometer, title: "THERMAL DATA", subtitle: "Result tied to the build" },
          { Icon: Layers3, title: "SUPPLY FORMAT", subtitle: "P1 · P2 · P3" },
          { Icon: Globe2, title: "EURASIA", subtitle: "Rail and road delivery" },
        ];
    const capabilityTags = locale === "ru"
      ? ["АЛЮМИНИЙ", "FRP", "ОБРАБОТКА", "CKD"]
      : ["ALUMINIUM", "FRP", "MACHINING", "CKD"];

    return (
      <footer>
        <div className="border-y border-[#D9D9D9] bg-white">
          <div className="mx-auto grid max-w-[1280px] grid-cols-2 px-5 sm:px-8 lg:grid-cols-4 lg:px-10">
            {promises.map(({ Icon, title, subtitle }, index) => (
              <div key={title} className={`flex min-h-[108px] items-center gap-3 border-[#D9D9D9] py-5 ${index % 2 === 0 ? "pr-4" : "border-l pl-4"} lg:border-l lg:px-6 lg:first:border-l-0`}>
                <Icon size={30} strokeWidth={1.7} className="shrink-0 text-[#DAAF37]" aria-hidden="true" />
                <span>
                  <strong className="block font-[family-name:var(--font-brand)] text-[10px] font-bold tracking-[0.04em] text-[#081D2A]">{title}</strong>
                  <span className="mt-1 block text-[10px] text-[#68747B]">{subtitle}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t-[6px] border-[#DAAF37] bg-[#081D2A] text-white">
          <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1.15fr]">
              <div>
                <PindeLogo size="md" />
                <p className="mt-5 max-w-[350px] text-[13px] leading-[1.75] text-white/62">{content.footer.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {capabilityTags.map((tag) => (
                    <span key={tag} className="border border-[#DAAF37]/35 px-3 py-2 text-[9px] font-semibold tracking-[0.08em] text-white/60">{tag}</span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="border-b border-white/15 pb-3 text-[10px] font-bold uppercase tracking-[0.08em] text-[#DAAF37]">{content.footer.systems}</h2>
                <ul className="mt-4 space-y-3">
                  {systemsLinks.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} prefetch={false} className="text-[12px] font-medium text-white/65 transition-colors hover:text-white">{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="border-b border-white/15 pb-3 text-[10px] font-bold uppercase tracking-[0.08em] text-[#DAAF37]">{content.footer.company}</h2>
                <ul className="mt-4 space-y-3">
                  {workingLinks.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} prefetch={false} className="text-[12px] font-medium text-white/65 transition-colors hover:text-white">{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="border-b border-white/15 pb-3 text-[10px] font-bold uppercase tracking-[0.08em] text-[#DAAF37]">{content.footer.contact}</h2>
                <ul className="mt-4 space-y-4 text-[12px] text-white/65">
                  <li className="flex items-start gap-3">
                    <MapPin size={15} className="mt-0.5 shrink-0 text-[#DAAF37]" />
                    <span className="leading-[1.6]">{locale === "ru" ? BRAND.addressRu : BRAND.address}</span>
                  </li>
                  <li>
                    <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 transition-colors hover:text-white">
                      <Phone size={15} className="shrink-0 text-[#DAAF37]" />
                      {BRAND.phone}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3 break-all transition-colors hover:text-white">
                      <Mail size={15} className="shrink-0 text-[#DAAF37]" />
                      {BRAND.email}
                    </a>
                  </li>
                </ul>
                <Link href={`/${locale}/rfq`} prefetch className="mt-6 inline-flex items-center gap-2 bg-[#DAAF37] px-4 py-3 text-[11px] font-bold text-[#081D2A] transition-[filter] hover:brightness-105">
                  {content.headerCta}
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-5 text-[10px] text-white/42 sm:flex-row sm:items-center sm:justify-between">
              <span>&copy; {new Date().getFullYear()} {content.footer.copyright}</span>
              <div className="flex items-center gap-3">
                <LocaleSwitcher
                  locale={locale}
                  englishLabel="English"
                  russianLabel="Русский"
                  activeClassName="font-bold text-[#DAAF37]"
                  inactiveClassName="hover:text-white"
                />
                <span className="ml-2 hidden sm:inline">{content.footer.tagline}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}
