import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — Islandshästar i Järvsö`;
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
          padding: "72px",
          background: "linear-gradient(135deg, #2d4a3e 0%, #2c2419 50%, #5c6b7a 100%)",
          color: "#faf7f2",
          fontFamily: "Georgia, serif",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 28,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#d4b896",
          }}
        >
          Järvsö · Hälsingland
        </p>
        <h1
          style={{
            margin: "24px 0 0",
            fontSize: 72,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          {siteConfig.shortName}
        </h1>
        <p
          style={{
            margin: "32px 0 0",
            fontSize: 32,
            lineHeight: 1.4,
            maxWidth: 820,
            color: "rgba(250, 247, 242, 0.92)",
          }}
        >
          Islandshästar, ridlektioner och äventyrsturer i bergen
        </p>
      </div>
    ),
    { ...size },
  );
}
