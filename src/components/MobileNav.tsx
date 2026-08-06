"use client";

import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { SystemMenuData } from "@/content/systemNavigation";

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
  systemMenu: SystemMenuData;
};

export default function MobileNav({
  links,
  ctaHref,
  ctaLabel,
  menuLabel,
  systemMenu,
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
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-104px)] overflow-y-auto border-b border-[#DAAF37]/35 bg-[#081D2A] shadow-[0_18px_40px_rgba(8,29,42,0.22)]"
        >
          <nav className="mx-auto max-w-[1280px] px-5 py-4 sm:px-8">
            <details className="group/systems border-b border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between px-1 py-3 text-[13px] font-semibold text-white/78">
                {systemMenu.label}
                <span
                  className="text-[#DAAF37] transition-transform group-open/systems:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>

              <div className="mb-3 border-l border-[#DAAF37]/35 pl-3">
                <Link
                  href={systemMenu.href}
                  prefetch
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-white/10 py-2.5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#DAAF37]"
                >
                  {systemMenu.allLabel}
                  <span aria-hidden="true">→</span>
                </Link>

                {systemMenu.categories.map((category) => (
                  <details key={category.id} className="group/category border-b border-white/10">
                    <summary className="flex cursor-pointer list-none items-center justify-between py-2.5 text-[12px] font-extrabold text-white">
                      <span>
                        {category.label}
                        <span className="ml-2 text-[10px] font-medium text-white/45">
                          {category.description}
                        </span>
                      </span>
                      <span
                        className="text-[#DAAF37] transition-transform group-open/category:rotate-45"
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </summary>

                    <div className="pb-3 pl-3">
                      <Link
                        href={category.overviewHref}
                        prefetch
                        onClick={() => setOpen(false)}
                        className="mb-1 flex items-center justify-between py-2 text-[10px] font-bold uppercase tracking-[0.08em] text-[#DAAF37]"
                      >
                        {category.overviewLabel}
                        <span aria-hidden="true">→</span>
                      </Link>

                      {category.groups.map((group) => (
                        <div key={group.label} className="mb-2 last:mb-0">
                          <p className="py-1 text-[9px] font-bold uppercase tracking-[0.1em] text-white/35">
                            {group.label}
                          </p>
                          {group.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              prefetch={false}
                              onClick={() => setOpen(false)}
                              className="flex items-center justify-between py-2 text-[11px] leading-[1.35] text-white/68"
                            >
                              {link.label}
                              <span className="ml-3 shrink-0 text-[#DAAF37]" aria-hidden="true">
                                →
                              </span>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </details>

            {links.slice(1).map((link) => (
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
