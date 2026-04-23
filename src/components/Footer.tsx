import Link from "next/link";
import { BRAND, CERTIFICATIONS } from "@/lib/constants";
import { Mail, Phone, MapPin } from "lucide-react";
import PindeMark from "./PindeMark";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-obsidian">
      <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6 py-[89px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[55px]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-[13px] mb-[21px]">
              <PindeMark size={20} />
              <span className="font-[family-name:var(--font-serif)] font-light text-lg tracking-[0.28em]">
                {BRAND.name}
              </span>
            </div>
            <p className="text-warm text-[13px] leading-[1.8] max-w-[260px]">
              {BRAND.description}
            </p>
          </div>

          {/* Systems */}
          <div>
            <h4 className="text-[10px] font-medium tracking-[3px] uppercase text-muted mb-[21px]">
              Systems
            </h4>
            <ul className="space-y-[13px]">
              {["Casement", "Sliding", "Push-out", "Folding", "Interior"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="/products"
                      className="text-warm text-[13px] hover:text-alabaster transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] font-medium tracking-[3px] uppercase text-muted mb-[21px]">
              Company
            </h4>
            <ul className="space-y-[13px]">
              {[
                { label: "About", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Technology", href: "/technology" },
                { label: "Quality", href: "/quality" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-warm text-[13px] hover:text-alabaster transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-medium tracking-[3px] uppercase text-muted mb-[21px]">
              Contact
            </h4>
            <ul className="space-y-[13px] text-warm text-[13px]">
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

            {/* Certifications */}
            <div className="mt-[21px]">
              <div className="flex flex-wrap gap-2">
                {CERTIFICATIONS.map((cert) => (
                  <span
                    key={cert}
                    className="inline-block px-3 py-1.5 text-[10px] font-medium border border-line text-muted tracking-[1px]"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[55px] pt-[21px] border-t border-line flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-[11px] text-muted">
            &copy; {new Date().getFullYear()} {BRAND.name} Architectural Systems
          </span>
          <div className="flex items-center gap-[8px]">
            <span className="inline-block w-1 h-1 rounded-full bg-red" />
            <span className="text-[9px] tracking-[3px] text-muted uppercase">
              Precision defined
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
