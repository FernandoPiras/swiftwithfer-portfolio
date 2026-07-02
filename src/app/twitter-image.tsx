import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090b",
          color: "#f5f5f7",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
          <div style={{ fontSize: 64, fontWeight: 700 }}>{siteConfig.name}</div>
          <div style={{ fontSize: 32, marginTop: 12, color: "#0a84ff" }}>
            {siteConfig.role}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
