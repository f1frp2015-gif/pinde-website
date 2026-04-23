import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "PINDÉ — Architectural Aluminium Systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FAFAF8",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Mark: square + dot */}
        <svg width="120" height="120" viewBox="-20 -20 160 160">
          <rect
            x="0"
            y="0"
            width="120"
            height="120"
            fill="none"
            stroke="#0A0A0C"
            strokeWidth="2"
          />
          <circle cx="120" cy="0" r="17.5" fill="#D42B2B" />
        </svg>

        {/* Wordmark */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 300,
            color: "#0A0A0C",
            letterSpacing: "0.3em",
            marginTop: 40,
          }}
        >
          PINDÉ
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 16,
            fontWeight: 400,
            color: "#888888",
            letterSpacing: "0.5em",
            textTransform: "uppercase" as const,
            marginTop: 16,
          }}
        >
          Architectural Aluminium Systems
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "#D42B2B",
            }}
          />
          <span
            style={{
              fontSize: 11,
              color: "#888888",
              letterSpacing: "0.3em",
              textTransform: "uppercase" as const,
            }}
          >
            pinde-alu.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
