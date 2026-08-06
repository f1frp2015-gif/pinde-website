import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { SystemMenuData } from "@/content/systemNavigation";

type SystemMegaMenuProps = {
  menu: SystemMenuData;
};

export default function SystemMegaMenu({ menu }: SystemMegaMenuProps) {
  return (
    <div className="group/system-menu">
      <Link
        href={menu.href}
        prefetch
        aria-haspopup="true"
        className="flex items-center gap-1 border-b-2 border-transparent py-2 text-[11px] font-semibold text-white/66 transition-colors group-hover/system-menu:border-[#DAAF37] group-hover/system-menu:text-white group-focus-within/system-menu:border-[#DAAF37] group-focus-within/system-menu:text-white"
      >
        {menu.label}
        <ChevronDown
          size={13}
          className="transition-transform duration-200 group-hover/system-menu:rotate-180 group-focus-within/system-menu:rotate-180"
          aria-hidden="true"
        />
      </Link>

      <div className="pointer-events-none invisible fixed inset-x-0 top-[104px] max-h-[calc(100dvh-104px)] translate-y-1 overflow-y-auto border-y border-white/10 bg-[#081D2A] opacity-0 shadow-[0_22px_45px_rgba(8,29,42,0.28)] transition-[opacity,transform,visibility] duration-200 group-hover/system-menu:pointer-events-auto group-hover/system-menu:visible group-hover/system-menu:translate-y-0 group-hover/system-menu:opacity-100 group-focus-within/system-menu:pointer-events-auto group-focus-within/system-menu:visible group-focus-within/system-menu:translate-y-0 group-focus-within/system-menu:opacity-100">
        <div className="mx-auto max-w-[1280px] px-10 py-6">
          <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
              {menu.eyebrow}
            </p>
            <Link
              href={menu.href}
              prefetch={false}
              className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#DAAF37] transition-colors hover:text-white"
            >
              {menu.allLabel} →
            </Link>
          </div>

          <div className="grid grid-cols-[minmax(0,3fr)_minmax(180px,1fr)_minmax(180px,1fr)] gap-5">
            {menu.categories.map((category) => (
              <section
                key={category.id}
                aria-labelledby={`system-menu-${category.id}`}
                className="border-l border-white/10 pl-5 first:border-l-0 first:pl-0"
              >
                <Link
                  href={category.overviewHref}
                  prefetch={false}
                  className="group/category inline-flex items-center gap-2"
                >
                  <span
                    id={`system-menu-${category.id}`}
                    className="text-[15px] font-extrabold tracking-[0.04em] text-white"
                  >
                    {category.label}
                  </span>
                  <span className="text-[10px] text-white/45 transition-colors group-hover/category:text-[#DAAF37]">
                    {category.overviewLabel} →
                  </span>
                </Link>

                <div
                  className={`mt-4 grid gap-5 ${
                    category.groups.length === 3 ? "grid-cols-3" : "grid-cols-1"
                  }`}
                >
                  {category.groups.map((group) => (
                    <div key={group.label}>
                      <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.12em] text-[#DAAF37]">
                        {group.label}
                      </p>
                      <ul className="space-y-1">
                        {group.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              prefetch={false}
                              className="block py-1 text-[11px] leading-[1.35] text-white/65 transition-colors hover:text-white"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
