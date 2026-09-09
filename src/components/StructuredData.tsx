import { getAbsoluteUrl, siteConfig } from "@/lib/site";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation"],
    "@id": getAbsoluteUrl("/#organization"),
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    image: getAbsoluteUrl("/hero.jpg"),
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
    priceRange: "$$",
    knowsLanguage: "sv",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Ridupplevelser",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Utbildning på islandshästar",
            description:
              "Strukturerad ridutbildning för nybörjare och erfarna ryttare.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ridlektioner",
            description:
              "Individuella och grupplektioner anpassade efter din nivå.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Äventyrsturer i bergen",
            description:
              "Guidade turer till häst genom Järvsös bergslandskap.",
          },
        },
        {
          "@type": "Offer",
          price: "4900",
          priceCurrency: "SEK",
          itemOffered: {
            "@type": "Service",
            name: "Weekendpaket med boende",
            description:
              "Helgpaket med boende, fullpension, riddagar och restaurangbesök.",
          },
        },
      ],
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
