import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Humlas Ridskola AB | Islandshästar i Järvsö",
    template: "%s | Humlas Ridskola AB",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Ridskola",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Humlas Ridskola AB | Islandshästar i Järvsö",
    description: siteConfig.description,
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Ryttare på islandshästar vid Järvsö-hjärtat med utsikt över bergen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Humlas Ridskola AB | Islandshästar i Järvsö",
    description: siteConfig.description,
    images: ["/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sv"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <link rel="me" href={siteConfig.instagram} />
      </head>
      <body className="min-h-full flex flex-col">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
