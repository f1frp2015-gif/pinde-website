"use client";

import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      {open ? (
        <>
          <path d="M6 6l12 12" />
          <path d="M18 6L6 18" />
        </>
      ) : (
        <>
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </>
      )}
    </svg>
  );
}

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
  const router = useRouter();
  const routesAreWarm = useRef(false);
  const prefetchRoutes = useCallback(() => {
    if (routesAreWarm.current) return;

    routesAreWarm.current = true;
    [...links.map((link) => link.href), ctaHref].forEach((href) => {
      router.prefetch(href);
    });
  }, [ctaHref, links, router]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onPointerEnter={prefetchRoutes}
        onFocus={prefetchRoutes}
        onTouchStart={prefetchRoutes}
        onClick={() => {
          prefetchRoutes();
          setOpen((current) => !current);
        }}
        className="p-2 text-white"
        aria-label={menuLabel}
        aria-expanded={open}
        aria-controls="mobile-navigation"
      >
        <MenuIcon open={open} />
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
                prefetch
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-white/10 px-1 py-3 text-[13px] font-semibold text-white/78"
              >
                {link.label}
                <span className="text-[#DAAF37]" aria-hidden="true">→</span>
              </Link>
            ))}
            <Link
              href={ctaHref}
              prefetch
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
