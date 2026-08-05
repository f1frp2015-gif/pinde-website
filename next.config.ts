import type { NextConfig } from "next";

const legacySystemImageRedirects = [
  ["/images/products/a65-casement-window.webp", "/images/products/pinde-a65-thermal-break-aluminium-casement-window.webp"],
  ["/images/products/a110-casement-window.webp", "/images/products/pinde-a110-thermal-break-aluminium-casement-window.webp"],
  ["/images/products/a120-casement-window.webp", "/images/products/pinde-a120-thermal-break-aluminium-casement-window.webp"],
  ["/images/products/s175-push-out-window.webp", "/images/products/pinde-s175-parallel-push-out-aluminium-window.webp"],
  ["/images/products/s132-side-pressed-window.webp", "/images/products/pinde-s132-side-pressed-aluminium-window.webp"],
  ["/images/products/a65-swing-door.webp", "/images/products/pinde-a65-thermal-break-aluminium-swing-door.webp"],
  ["/images/products/ap187-50-sliding-door.webp", "/images/products/pinde-ap187-50-aluminium-sliding-door.webp"],
  ["/images/products/ap187-88-sliding-door.webp", "/images/products/pinde-ap187-88-aluminium-sliding-door.webp"],
  ["/images/products/s150-sliding-door.webp", "/images/products/pinde-s150-aluminium-sliding-door.webp"],
  ["/images/products/perfect-system-non-interlocking-door.webp", "/images/products/pinde-perfect-system-non-interlocking-interior-door.webp"],
  ["/images/products/perfect-system-phantom-door.webp", "/images/products/pinde-perfect-system-phantom-interior-door.webp"],
  ["/images/products/1645-bathroom-door.webp", "/images/products/pinde-1645-aluminium-bathroom-door.webp"],
  ["/images/systems/xd75-aluminium-grpu-window-system.webp", "/images/systems/pinde-xd75-aluminium-grpu-composite-window-system.webp"],
] as const;

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    // A single modern format avoids AVIF's slower cold encode and duplicate
    // cache variants at edge locations serving Central Asia.
    formats: ["image/webp"],
    minimumCacheTTL: 31536000, // Keep transformed variants hot; rename assets when content changes.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    maximumResponseBody: 1_000_000,
  },
  async headers() {
    return [
      {
        source: "/en/:path*",
        headers: [{ key: "Content-Language", value: "en" }],
      },
      {
        source: "/ru/:path*",
        headers: [{ key: "Content-Language", value: "ru" }],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
          {
            key: "Vercel-CDN-Cache-Control",
            value: "public, max-age=31536000, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/brand/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
          {
            key: "Vercel-CDN-Cache-Control",
            value: "public, max-age=31536000, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      ...legacySystemImageRedirects.map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
      {
        source: "/home",
        destination: "/en",
        permanent: true,
      },
      // Old projects page → cases
      {
        source: "/projects",
        destination: "/en/cases",
        permanent: true,
      },
      // Old technology page → engineering
      {
        source: "/technology",
        destination: "/en/engineering",
        permanent: true,
      },
      // Old quality page → certification
      {
        source: "/quality",
        destination: "/en/certification",
        permanent: true,
      },
      // Old about page → localized
      {
        source: "/about",
        destination: "/en/about",
        permanent: true,
      },
      // Legacy non-localized product catalog → localized Systems hierarchy
      {
        source: "/products",
        destination: "/en/systems/aluminium",
        permanent: true,
      },
      {
        source: "/products/:slug",
        destination: "/en/systems/aluminium/:slug",
        permanent: true,
      },
      // Legacy contact → localized
      {
        source: "/contact",
        destination: "/en/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
