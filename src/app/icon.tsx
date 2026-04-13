import { ImageResponse } from "next/og";

export const size = {
  height: 32,
  width: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#faf9f7",
          border: "1px solid rgba(26, 26, 26, 0.14)",
          color: "#1a1a1a",
          display: "flex",
          fontFamily: "serif",
          fontSize: 19,
          fontWeight: 700,
          height: "100%",
          justifyContent: "center",
          letterSpacing: 0,
          lineHeight: 1,
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#3d5a6c",
            bottom: 5,
            height: 3,
            left: 7,
            position: "absolute",
            width: 18,
          }}
        />
        AI
      </div>
    ),
    size,
  );
}
