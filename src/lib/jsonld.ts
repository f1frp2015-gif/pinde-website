const siteUrl = "https://pindesys.com";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "PINDÉ",
  legalName: "Pinde Doors and Windows (Chongqing) Co., LTD",
  url: siteUrl,
  logo: `${siteUrl}/brand/pinde-logo-primary.svg`,
  description:
    "Aluminium and FRP window-system materials, machined components and glass-free CKD kits from Chongqing for local fabrication.",
  foundingDate: "2002",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 68 Chanye Avenue",
    addressLocality: "Tongliang District",
    addressRegion: "Chongqing",
    addressCountry: "CN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+86-138-8333-3993",
      contactType: "sales",
      email: "inquiry@pindesys.com",
      availableLanguage: ["English", "Russian", "Chinese"],
    },
  ],
  sameAs: [],
  areaServed: [
    "Russia",
    "Kazakhstan",
    "Belarus",
    "Uzbekistan",
    "Armenia",
    "Kyrgyzstan",
  ],
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#localbusiness`,
  name: "PINDÉ Window System Supply",
  image: `${siteUrl}/images/factory-aerial.webp`,
  url: siteUrl,
  telephone: "+86-138-8333-3993",
  email: "inquiry@pindesys.com",
  parentOrganization: {
    "@id": `${siteUrl}/#organization`,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 68 Chanye Avenue",
    addressLocality: "Tongliang District",
    addressRegion: "Chongqing",
    addressCountry: "CN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 29.85,
    longitude: 106.05,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "12:00",
    },
  ],
  priceRange: "$$$$",
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "PINDÉ Window Systems",
  inLanguage: ["en", "ru"],
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
};

export function productJsonLd(product: {
  name: string;
  slug: string;
  series: string;
  description: string;
  images: string[];
  specs: { label: string; value: string }[];
}, productUrl = `${siteUrl}/en/systems/aluminium/${product.slug}`, options?: {
  category?: string;
  material?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: product.name,
    sku: product.series,
    description: product.description,
    inLanguage: productUrl.includes("/ru/") ? "ru" : "en",
    brand: {
      "@type": "Brand",
      name: "PINDÉ",
    },
    manufacturer: {
      "@id": `${siteUrl}/#organization`,
    },
    url: productUrl,
    image: product.images.length > 0
      ? `${siteUrl}${product.images[0]}`
      : `${siteUrl}/og-about-pinde.webp`,
    category: options?.category ?? "Architectural Aluminium Systems",
    ...(options?.material ? { material: options.material } : {}),
    additionalProperty: product.specs.map((s) => ({
      "@type": "PropertyValue",
      name: s.label,
      value: s.value,
    })),
  };
}

export function faqPageJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What thermal break technology does PINDÉ use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All PINDÉ systems use PA66GF25 (polyamide 66 with 25% glass fibre) thermal break strips. This creates an effective barrier between interior and exterior aluminium, dramatically reducing heat transfer. Our flagship A120 system features a 35.3mm wide thermal break strip for superior insulation.",
      },
    },
    {
      "@type": "Question",
      name: "What certifications do PINDÉ windows and doors have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PINDÉ products are certified to AS2047 (Australian Standard for windows), AS1288 (glass in buildings), NFRC (North American fenestration rating), CE (European conformity), ISO 9001 (quality management), and ISO 14001 (environmental management). We hold 60+ patents across our product range.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between casement and sliding aluminium windows?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Casement windows (like our A65, A110, A120 series) swing open outward or inward on hinges, providing excellent ventilation control and superior sealing. Sliding windows (S115, S126 series) move horizontally along tracks, saving exterior space — ideal for balconies and high-rise applications. Casement windows generally achieve better thermal and acoustic performance due to compression sealing.",
      },
    },
    {
      "@type": "Question",
      name: "What aluminium alloy does PINDÉ use for window profiles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PINDÉ uses premium 6063-T5 aluminium alloy for all profiles, with a minimum wall thickness of 1.4mm. Surface treatments include Akzo Nobel powder coating, anodising, and wood-grain finishes. All profiles feature EPDM rubber seals and are compatible with premium hardware from SIEGENIA, G-U, Roto, and KIN LONG.",
      },
    },
    {
      "@type": "Question",
      name: "Does PINDÉ manufacture in-house or outsource production?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PINDÉ is fully vertically integrated. Our 100,000 m² smart factory in Chongqing controls the entire production chain: aluminium extrusion (3,600-ton press), powder coating (automated Akzo Nobel line), glass processing (CNC cutting, auto-feed tempering), insulated glass production, and final system assembly. This ensures uncompromising quality at every stage.",
      },
    },
    {
      "@type": "Question",
      name: "Which countries does PINDÉ serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PINDÉ serves 30+ countries worldwide, with key markets in Australia, New Zealand, United States, Canada, United Kingdom, Europe, and the Middle East. Our systems are engineered to meet the specific building codes and climate requirements of each region, including AS2047 for Australia, NFRC for North America, and CE for Europe.",
      },
    },
    {
      "@type": "Question",
      name: "What is the maximum glazing thickness PINDÉ windows can accommodate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glazing capacity varies by system: A65 supports up to 75mm, A110 up to 120mm, A120 up to 130mm (triple glazing), S150 vertical lifting window up to 206mm, and the AP187 88 sliding door up to 191mm. Higher glazing capacity means better thermal and acoustic insulation performance.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get a quote from PINDÉ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can request a free quote via our website contact form, email (inqury@pindesys.com), WhatsApp (+86 138 8333 3993), or phone. Our team responds within 24 hours with technical specifications, pricing, and lead times. We support OEM/ODM enquiries and custom configurations.",
      },
    },
  ],
};

export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
