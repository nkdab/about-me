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
          background: "#3d5a6c",
          border: "6px solid rgba(26, 26, 26, 0.14)",
          borderRadius: "25%",
          color: "white",
          display: "flex",
          fontFamily: "serif",
          fontSize: 76,
          fontWeight: 700,
          height: "100%",
          justifyContent: "center",
          letterSpacing: 0,
          lineHeight: 1,
          padding: "18px",
          position: "relative",
          width: "100%",
        }}
      >
        {" { A* } "}
      </div>
    ),
    size,
  );
}
