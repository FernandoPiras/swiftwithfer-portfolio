import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return [
      {
        source: "/apps/slotiva",
        destination: "/",
        permanent: true,
      },
      {
        source: "/apps/slotiva/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/cielostorie/privacy",
        destination: "/legal/cielostorie/privacy",
        permanent: true,
      },
      {
        source: "/cielostorie/privacy/en",
        destination: "/legal/cielostorie/privacy/en",
        permanent: true,
      },
      {
        source: "/legal/familyplus/privacy",
        destination: "/familyplus/privacy",
        permanent: true,
      },
      {
        source: "/legal/familyplus/privacy/en",
        destination: "/familyplus/privacy/en",
        permanent: true,
      },
      {
        source: "/legal/familyplus/terms",
        destination: "/familyplus/terms",
        permanent: true,
      },
      {
        source: "/legal/familyplus/terms/en",
        destination: "/familyplus/terms/en",
        permanent: true,
      },
      {
        source: "/legal/familyplus/support",
        destination: "/familyplus/support",
        permanent: true,
      },
      {
        source: "/legal/familyplus/support/en",
        destination: "/familyplus/support/en",
        permanent: true,
      },
      {
        source: "/legal/familyplus/delete-data",
        destination: "/familyplus/delete-data",
        permanent: true,
      },
      {
        source: "/legal/familyplus/delete-data/en",
        destination: "/familyplus/delete-data/en",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/videos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
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
    ];
  },
};

export default nextConfig;
