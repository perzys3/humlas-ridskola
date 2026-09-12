import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2d4a3e",
          color: "#d4b896",
          fontSize: 20,
          fontWeight: 700,
          fontFamily: "Georgia, serif",
        }}
      >
        {siteConfig.shortName.charAt(0)}
      </div>
    ),
    { ...size },
  );
}
