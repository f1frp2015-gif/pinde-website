"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type MobileNavProps = {
  links: readonly { label: string; href: string }[];
  ctaHref: string;
  ctaLabel: string;
  menuLabel: string;
};

export default function MobileNav({
  links,
  ctaHref,
  ctaLabel,
  menuLabel,
}: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="p-2 text-white"
        aria-label={menuLabel}
        aria-expanded={open}
        aria-controls="mobile-navigation"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open ? (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full border-b border-[#DAAF37]/35 bg-[#081D2A] shadow-[0_18px_40px_rgba(8,29,42,0.22)]"
        >
          <nav className="mx-auto max-w-[1280px] px-5 py-4 sm:px-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-white/10 px-1 py-3 text-[13px] font-semibold text-white/78"
              >
                {link.label}
                <span className="text-[#DAAF37]" aria-hidden="true">→</span>
              </Link>
            ))}
            <Link
              href={ctaHref}
              onClick={() => setOpen(false)}
              className="mt-4 flex min-h-12 items-center justify-center bg-[#DAAF37] px-5 text-[12px] font-bold text-[#081D2A]"
            >
              {ctaLabel}
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
