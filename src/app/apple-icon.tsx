import { ImageResponse } from "next/og";

export const size = {
  height: 180,
  width: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#faf9f7",
          color: "#1a1a1a",
          display: "flex",
          fontFamily: "serif",
          height: "100%",
          justifyContent: "center",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "2px solid rgba(26, 26, 26, 0.14)",
            height: 148,
            left: 16,
            position: "absolute",
            top: 16,
            width: 148,
          }}
        />
        <div
          style={{
            background: "#3d5a6c",
            bottom: 44,
            height: 8,
            left: 45,
            position: "absolute",
            width: 90,
          }}
        />
        <div
          style={{
            alignItems: "baseline",
            display: "flex",
            fontSize: 78,
            fontWeight: 700,
            gap: 4,
            letterSpacing: 0,
            lineHeight: 1,
          }}
        >
          <span>A</span>
          <span
            style={{
              color: "#3d5a6c",
              fontSize: 72,
            }}
          >
            I
          </span>
        </div>
      </div>
    ),
    size,
  );
}
