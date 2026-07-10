import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { getSiteUrl } from "@/lib/site-url";

const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — ${siteConfig.brand} Portfolio`,
  type: "image/png" as const,
};

const TWITTER_IMAGE = "/twitter-image";

export function createSiteMetadata(overrides?: Metadata): Metadata {
  const siteUrl = getSiteUrl();
  const { seo, name, brand, email, locale } = siteConfig;

  const base: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
      default: seo.title,
      template: `%s | ${name}`,
    },
    description: seo.description,
    keywords: [...seo.keywords],
    authors: [{ name, url: siteUrl }],
    creator: name,
    publisher: brand,
    applicationName: brand,
    referrer: "origin-when-cross-origin",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: siteUrl,
      languages: {
        "it-IT": siteUrl,
      },
    },
    openGraph: {
      type: "website",
      locale,
      url: siteUrl,
      siteName: brand,
      title: seo.title,
      description: seo.description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      creator: `@${brand.toLowerCase()}`,
      images: [TWITTER_IMAGE],
    },
    icons: {
      icon: [
        { url: "/icon.png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: brand,
    },
    manifest: "/manifest.webmanifest",
    category: "technology",
    other: {
      "contact:email": email,
    },
  };

  return { ...base, ...overrides };
}

export function createHomeMetadata(): Metadata {
  const siteUrl = getSiteUrl();
  const { seo, brand } = siteConfig;
  const title = seo.title;

  return createSiteMetadata({
    title: { absolute: title },
    description: seo.description,
    keywords: [...seo.keywords],
    alternates: {
      canonical: siteUrl,
      languages: { "it-IT": siteUrl },
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: siteUrl,
      siteName: brand,
      title,
      description: seo.description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: seo.description,
      creator: `@${brand.toLowerCase()}`,
      images: [TWITTER_IMAGE],
    },
  });
}

export function createCaseStudyMetadata(
  appName: string,
  description: string,
  slug: string,
): Metadata {
  const siteUrl = getSiteUrl();
  const { brand } = siteConfig;
  const url = `${siteUrl}/apps/${slug}`;
  const title = `${appName} — Case Study`;
  const ogTitle = `${appName} — Case Study | ${brand}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { "it-IT": url },
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "article",
      locale: siteConfig.locale,
      url,
      siteName: brand,
      title: ogTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [TWITTER_IMAGE],
    },
  };
}

export { OG_IMAGE, TWITTER_IMAGE };
