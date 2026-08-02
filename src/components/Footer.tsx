"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, Phone } from "lucide-react";
import { BRAND, CERTIFICATIONS } from "@/lib/constants";
import { isLandingLocale, landingContent } from "@/content/landing";
import PindeMark from "./PindeMark";

export default function Footer() {
  const pathname = usePathname();
  const pathLocale = pathname.split("/")[1];
  const locale = isLandingLocale(pathLocale) ? pathLocale : null;
  const content = locale ? landingContent[locale] : null;
  const systemsLinks = content
    ? [
        { label: content.nav[0].label, href: `/${locale}#systems` },
        { label: content.nav[1].label, href: `/${locale}#formats` },
        { label: content.nav[3].label, href: `/${locale}#engineering` },
      ]
    : ["Casement", "Sliding", "Push-out", "Folding", "Interior"].map((label) => ({
        label,
        href: "/products",
      }));
  const companyLinks = content
    ? [
        { label: content.nav[2].label, href: `/${locale}#process` },
        { label: content.rfq.eyebrow, href: `/${locale}#rfq` },
        { label: content.languageName, href: `/${locale}` },
      ]
    : [
        { label: "About", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Technology", href: "/technology" },
        { label: "Quality", href: "/quality" },
        { label: "Contact", href: "/contact" },
      ];
  const tags = content ? ["ALUMINIUM", "FRP", "MACHINING", "CKD"] : CERTIFICATIONS;

  return (
    <footer className="border-t border-line bg-obsidian">
      <div className="mx-auto max-w-[1200px] px-[55px] py-[89px] max-lg:px-6">
        <div className="grid grid-cols-1 gap-[55px] md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-[21px] flex items-center gap-[13px]">
              <PindeMark size={20} />
              <span className="font-[family-name:var(--font-serif)] text-lg font-light tracking-[0.28em]">
                {BRAND.name}
              </span>
            </div>
            <p className="max-w-[260px] text-[13px] leading-[1.8] text-warm">
              {content?.footer.description ?? BRAND.description}
            </p>
          </div>

          <div>
            <h4 className="mb-[21px] text-[10px] font-medium uppercase tracking-[3px] text-muted">
              {content?.footer.systems ?? "Systems"}
            </h4>
            <ul className="space-y-[13px]">
              {systemsLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-warm transition-colors hover:text-alabaster"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-[21px] text-[10px] font-medium uppercase tracking-[3px] text-muted">
              {content?.footer.company ?? "Company"}
            </h4>
            <ul className="space-y-[13px]">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-warm transition-colors hover:text-alabaster"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-[21px] text-[10px] font-medium uppercase tracking-[3px] text-muted">
              {content?.footer.contact ?? "Contact"}
            </h4>
            <ul className="space-y-[13px] text-[13px] text-warm">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-1 shrink-0 text-bronze" />
                <span>{BRAND.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="shrink-0 text-bronze" />
                <span>{BRAND.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="shrink-0 text-bronze" />
                <span>{BRAND.email}</span>
              </li>
            </ul>

            <div className="mt-[21px]">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block border border-line px-3 py-1.5 text-[10px] font-medium tracking-[1px] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[55px] flex flex-col items-center justify-between gap-4 border-t border-line pt-[21px] sm:flex-row">
          <span className="text-[11px] text-muted">
            &copy; {new Date().getFullYear()} {content?.footer.copyright ?? `${BRAND.name} Architectural Systems`}
          </span>
          <div className="flex items-center gap-[8px]">
            <span className="inline-block h-1 w-1 rounded-full bg-red" />
            <span className="text-[9px] uppercase tracking-[3px] text-muted">
              {content?.footer.tagline ?? "Precision defined"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
