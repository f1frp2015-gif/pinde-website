import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // 1 year — image URLs are content-hashed
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: "/en",
        headers: [{ key: "Content-Language", value: "en" }],
      },
      {
        source: "/ru",
        headers: [{ key: "Content-Language", value: "ru" }],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
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
