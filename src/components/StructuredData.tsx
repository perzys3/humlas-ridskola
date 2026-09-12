import { getAbsoluteUrl, siteConfig } from "@/lib/site";

const offers = [
  {
    name: "Utbildning på islandshästar",
    description:
      "Strukturerad ridutbildning för nybörjare och erfarna ryttare.",
  },
  {
    name: "Ridlektioner",
    description: "Individuella och grupplektioner anpassade efter din nivå.",
  },
  {
    name: "Äventyrstur 1 timme mindfulness",
    description: "Guidad ridtur i Järvsös bergslandskap.",
    price: "550",
  },
  {
    name: "Äventyrstur 2 timmar ridäventyr",
    description: "Längre guidad tur till häst genom bergen.",
    price: "750",
  },
  {
    name: "Äventyrstur 3 timmar med fika",
    description: "Ridäventyr med fika längs vägen.",
    price: "1300",
  },
  {
    name: "Weekendpaket med boende",
    description:
      "Helgpaket med boende, fullpension, riddagar och restaurangbesök.",
    price: "4900",
  },
];

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation"],
    "@id": getAbsoluteUrl("/#organization"),
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    image: getAbsoluteUrl(siteConfig.ogImage),
    logo: getAbsoluteUrl("/logo.png"),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Järvsö, Hälsingland",
    },
    sameAs: [siteConfig.instagram],
    currenciesAccepted: "SEK",
    paymentAccepted: "Cash, Credit Card",
    knowsLanguage: "sv",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Ridupplevelser",
      itemListElement: offers.map((offer) => ({
        "@type": "Offer",
        ...(offer.price && {
          price: offer.price,
          priceCurrency: "SEK",
        }),
        itemOffered: {
          "@type": "Service",
          name: offer.name,
          description: offer.description,
        },
      })),
    },
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": getAbsoluteUrl("/#website"),
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "sv-SE",
    publisher: {
      "@id": getAbsoluteUrl("/#organization"),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  );
}
