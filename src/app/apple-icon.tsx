import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1C1917",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
        }}
      >
        <span
          style={{
            color: "#C4A882",
            fontSize: 96,
            fontStyle: "italic",
            fontFamily: "Georgia, serif",
            lineHeight: 1,
          }}
        >
          A
        </span>
        <span
          style={{
            color: "#78716C",
            fontSize: 14,
            fontFamily: "sans-serif",
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          SHARMA
        </span>
      </div>
    ),
    { ...size }
  );
}
