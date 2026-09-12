export const siteConfig = {
  name: "Humlas Ridskola AB",
  shortName: "Humlas Ridskola",
  description:
    "Ridutbildning, lektioner, äventyrsturer och weekendpaket på islandshästar i Järvsös fantastiska bergsmiljö. Ridbana högt upp på berget med utsikt och söderläge.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://www.humlas.se",
  locale: "sv_SE",
  email: "info@humlas.se",
  phone: "+46703611050",
  address: {
    street: "Lustevägen 29",
    city: "Järvsö",
    region: "Hälsingland",
    postalCode: "827 95",
    country: "SE",
  },
  geo: {
    latitude: 61.712,
    longitude: 16.172,
  },
  instagram: "https://www.instagram.com/humlas_ridskola/",
  instagramHandle: "@humlas_ridskola",
  keywords: [
    "ridskola Järvsö",
    "islandshästar",
    "ridlektioner Järvsö",
    "äventyrsturer häst",
    "ridbana Järvsö",
    "Humlas Ridskola",
    "Hälsingland",
    "weekendpaket ridning",
  ],
  ogImage: "/hero.jpg",
  lastUpdated: "2026-03-12",
};

export function getAbsoluteUrl(path = "/") {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getCanonicalHost() {
  try {
    return new URL(siteConfig.url).host;
  } catch {
    return "www.humlas.se";
  }
}
