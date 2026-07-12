import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";
import { OgImageContent } from "@/lib/og-image-content";

export const alt = `${siteConfig.name} — ${siteConfig.brand} | iOS Developer Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<OgImageContent />, { ...size });
}
