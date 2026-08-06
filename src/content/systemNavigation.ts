import { getLocalizedAluminiumProduct } from "@/content/aluminiumProductCopy";
import { marketChrome, type MarketLocale } from "@/content/marketChrome";
import { products } from "@/data/products";

export type SystemMenuLink = {
  label: string;
  href: string;
};

export type SystemMenuGroup = {
  label: string;
  links: SystemMenuLink[];
};

export type SystemMenuCategory = {
  id: "alu" | "alu-frp" | "frp";
  label: string;
  description: string;
  overviewLabel: string;
  overviewHref: string;
  groups: SystemMenuGroup[];
};

export type SystemMenuData = {
  label: string;
  href: string;
  eyebrow: string;
  allLabel: string;
  categories: SystemMenuCategory[];
};

const aluminiumSlugs = {
  exteriorWindows: [
    "a65-casement-window",
    "a110-casement-window",
    "a120-casement-window",
    "s175-push-out-window",
    "s132-side-pressed-window",
    "s96n-inward-casement-window",
    "s115-sliding-window",
    "s126-sliding-window",
    "s150-vertical-lifting-window",
  ],
  exteriorDoors: [
    "a65-swing-door",
    "ap187-50-sliding-door",
    "ap187-88-sliding-door",
    "s150-sliding-door",
    "s93-heavy-duty-folding-door",
  ],
  interiorDoors: [
    "perfect-system-non-interlocking-door",
    "perfect-system-phantom-door",
    "1645-bathroom-door",
    "perfect-system-opposite-direction-linkage",
    "perfect-system-folding-door",
  ],
} as const;

const copy = {
  en: {
    eyebrow: "Systems by material",
    allLabel: "All systems",
    aluminiumDescription: "Aluminium systems",
    aluminiumOverview: "All ALU systems",
    exteriorWindows: "Exterior windows",
    exteriorDoors: "Exterior doors",
    interiorDoors: "Interior doors",
    hybridDescription: "Aluminium + FRP",
    hybridOverview: "ALU+FRP overview",
    hybridGroup: "Window systems",
    frpDescription: "Full FRP",
    frpOverview: "FRP overview",
    frpGroup: "Cold-climate systems",
  },
  ru: {
    eyebrow: "Системы по материалу",
    allLabel: "Все системы",
    aluminiumDescription: "Алюминиевые системы",
    aluminiumOverview: "Все системы ALU",
    exteriorWindows: "Наружные оконные блоки",
    exteriorDoors: "Наружные дверные блоки",
    interiorDoors: "Межкомнатные дверные блоки",
    hybridDescription: "Алюминий + FRP",
    hybridOverview: "Обзор ALU+FRP",
    hybridGroup: "Оконные системы",
    frpDescription: "Несущие профили из FRP",
    frpOverview: "Обзор систем FRP",
    frpGroup: "Системы для холодного климата",
  },
} as const;

function getAluminiumLinks(
  locale: MarketLocale,
  slugs: readonly string[],
): SystemMenuLink[] {
  return slugs.map((slug) => {
    const product = products.find((candidate) => candidate.slug === slug);
    if (!product) throw new Error(`Missing aluminium navigation product: ${slug}`);

    return {
      label: getLocalizedAluminiumProduct(product, locale).name,
      href: `/${locale}/systems/aluminium/${slug}`,
    };
  });
}

export function getSystemMenu(locale: MarketLocale): SystemMenuData {
  const text = copy[locale];
  const href = `/${locale}/systems`;

  return {
    label: marketChrome[locale].nav[0].label,
    href,
    eyebrow: text.eyebrow,
    allLabel: text.allLabel,
    categories: [
      {
        id: "alu",
        label: "ALU",
        description: text.aluminiumDescription,
        overviewLabel: text.aluminiumOverview,
        overviewHref: `/${locale}/systems/aluminium`,
        groups: [
          {
            label: text.exteriorWindows,
            links: getAluminiumLinks(locale, aluminiumSlugs.exteriorWindows),
          },
          {
            label: text.exteriorDoors,
            links: getAluminiumLinks(locale, aluminiumSlugs.exteriorDoors),
          },
          {
            label: text.interiorDoors,
            links: getAluminiumLinks(locale, aluminiumSlugs.interiorDoors),
          },
        ],
      },
      {
        id: "alu-frp",
        label: "ALU+FRP",
        description: text.hybridDescription,
        overviewLabel: text.hybridOverview,
        overviewHref: `/${locale}/systems/frp#aluminium-frp`,
        groups: [
          {
            label: text.hybridGroup,
            links: [
              {
                label:
                  locale === "ru"
                    ? "PD75 · Алюминиево-композитный оконный блок"
                    : "PD75 · Aluminium-composite window",
                href: `/${locale}/systems/frp/xd75`,
              },
              {
                label:
                  locale === "ru"
                    ? "PD95 · Алюминиево-композитный оконный блок"
                    : "PD95 · Aluminium-composite window",
                href: `/${locale}/systems/frp/pd95`,
              },
            ],
          },
        ],
      },
      {
        id: "frp",
        label: "FRP",
        description: text.frpDescription,
        overviewLabel: text.frpOverview,
        overviewHref: `/${locale}/systems/frp/cold-climate`,
        groups: [
          {
            label: text.frpGroup,
            links: [
              {
                label: locale === "ru" ? "FD90 · Оконный блок из FRP" : "FD90 · Full-FRP window",
                href: `/${locale}/systems/frp/fd90`,
              },
              {
                label:
                  locale === "ru"
                    ? "FDTL140 · Раздвижной дверной блок из FRP"
                    : "FDTL140 · Full-FRP sliding door",
                href: `/${locale}/systems/frp/fdtl140`,
              },
            ],
          },
        ],
      },
    ],
  };
}
