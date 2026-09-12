import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function getCanonicalHost() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://www.humlas.se";

  try {
    return new URL(siteUrl).host;
  } catch {
    return "www.humlas.se";
  }
}

const canonicalHost = getCanonicalHost();

function shouldSkipRedirect(host: string) {
  return (
    host.includes("localhost") ||
    host.includes("127.0.0.1") ||
    host.endsWith(".vercel.app")
  );
}

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";
  const proto = request.headers.get("x-forwarded-proto");

  if (shouldSkipRedirect(host)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  let needsRedirect = false;

  if (proto && proto !== "https") {
    url.protocol = "https:";
    needsRedirect = true;
  }

  if (host && host !== canonicalHost) {
    url.host = canonicalHost;
    needsRedirect = true;
  }

  if (needsRedirect) {
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?)$).*)",
  ],
};
