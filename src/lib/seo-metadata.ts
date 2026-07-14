import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { getSiteUrl } from "@/lib/site-url";

const TWITTER_HANDLE = "@swiftwithfer";

function buildOgImage(siteUrl: string) {
  const imagePath = siteConfig.seo.ogImage;
  const absoluteUrl = `${siteUrl}${imagePath}`;
  const alt = `${siteConfig.name} — ${siteConfig.brand} Portfolio`;

  return {
    url: imagePath,
    secureUrl: absoluteUrl,
    width: 1200,
    height: 630,
    alt,
    type: "image/png" as const,
  };
}

function buildTwitterImage(siteUrl: string) {
  const imagePath = siteConfig.seo.ogImage;
  const alt = `${siteConfig.name} — ${siteConfig.brand} Portfolio`;

  return {
    url: imagePath,
    secureUrl: `${siteUrl}${imagePath}`,
    alt,
  };
}

export function createSiteMetadata(overrides?: Metadata): Metadata {
  const siteUrl = getSiteUrl();
  const { seo, name, brand, email, locale } = siteConfig;
  const ogImage = buildOgImage(siteUrl);
  const twitterImage = buildTwitterImage(siteUrl);

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
    publisher: name,
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
      siteName: name,
      title: seo.title,
      description: seo.description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title: seo.title,
      description: seo.description,
      images: [twitterImage],
    },
    icons: {
      icon: [
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
      other: [
        {
          rel: "icon",
          url: "/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          rel: "icon",
          url: "/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: name,
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
  const { seo, name } = siteConfig;
  const title = seo.title;
  const ogImage = buildOgImage(siteUrl);
  const twitterImage = buildTwitterImage(siteUrl);

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
      siteName: name,
      title,
      description: seo.description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title,
      description: seo.description,
      images: [twitterImage],
    },
  });
}

export function createCaseStudyMetadata(
  appName: string,
  description: string,
  slug: string,
): Metadata {
  const siteUrl = getSiteUrl();
  const { name } = siteConfig;
  const url = `${siteUrl}/apps/${slug}`;
  const title = `${appName} — Case Study`;
  const ogTitle = `${appName} — Case Study | ${name}`;
  const ogImage = buildOgImage(siteUrl);
  const twitterImage = buildTwitterImage(siteUrl);

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
      siteName: name,
      title: ogTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title: ogTitle,
      description,
      images: [twitterImage],
    },
  };
}

export { TWITTER_HANDLE };
