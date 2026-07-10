import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} — ${siteConfig.brand} | iOS Developer Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #09090b 0%, #1a1a2e 50%, #0a2540 100%)",
          color: "#f5f5f7",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "#0a84ff",
            marginBottom: 16,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {siteConfig.brand}
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 36, marginTop: 16, color: "#a1a1aa" }}>
          {siteConfig.role}
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 24,
            maxWidth: 800,
            lineHeight: 1.5,
            color: "#d4d4d8",
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
