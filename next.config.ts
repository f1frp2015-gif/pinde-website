import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
      // Products catalog (keep non-localized for now)
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
