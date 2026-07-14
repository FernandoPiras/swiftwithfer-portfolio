import { siteConfig } from "@/config/site";

/** Shared 1200×630 social preview layout for Open Graph and Twitter. */
export function OgImageContent() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background:
          "linear-gradient(145deg, #09090b 0%, #111827 42%, #0a2540 100%)",
        color: "#f5f5f7",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -80,
          width: 480,
          height: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(10,132,255,0.28) 0%, transparent 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -100,
          left: -60,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,107,74,0.22) 0%, transparent 70%)",
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: 20, zIndex: 1 }}>
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: 18,
            background:
              "linear-gradient(135deg, #FF6B4A 0%, #F05138 45%, #007AFF 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 12px 40px rgba(0,0,0,0.45)",
          }}
        >
          <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
            <path
              d="M22 9.5C19.5 8.2 16 9 14 11.5C12.5 13.2 12 15.5 12.8 17.8C11 16.8 9.8 15 10 13C10.4 11 12 9.5 14.5 9.2C17.2 9 19.5 9.8 22 9.5Z"
              fill="white"
              fillOpacity="0.92"
            />
            <path
              d="M10.5 20.5C12.8 22.2 16 22.8 18.2 21.2C19.8 20.2 20.8 18.2 20.8 16C19 17.2 17 17 15.8 15.8C14 14 13.5 11.5 14.5 9.5C12.2 10.8 10.5 13 10.4 15.2C10.3 16.5 10.6 18 10.5 20.5Z"
              fill="white"
            />
          </svg>
        </div>
        <div
          style={{
            fontSize: 26,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#0a84ff",
          }}
        >
          {siteConfig.brand}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 32,
            marginTop: 16,
            color: "#a1a1aa",
            fontWeight: 500,
            letterSpacing: "0.01em",
          }}
        >
          Developer iOS • SwiftUI • Web
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          zIndex: 1,
        }}
      >
        <div
          style={{
            height: 4,
            width: 64,
            borderRadius: 2,
            background:
              "linear-gradient(90deg, #FF6B4A 0%, #F05138 50%, #007AFF 100%)",
          }}
        />
        <div style={{ fontSize: 20, color: "#71717a", letterSpacing: "0.04em" }}>
          fernandopiras.com
        </div>
      </div>
    </div>
  );
}
