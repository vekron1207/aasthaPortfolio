import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1C1917",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "#C4A882",
            fontSize: 24,
            fontStyle: "italic",
            fontFamily: "Georgia, serif",
            lineHeight: 1,
            marginTop: 2,
          }}
        >
          A
        </span>
      </div>
    ),
    { ...size }
  );
}
