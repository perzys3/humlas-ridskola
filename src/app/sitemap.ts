import type { MetadataRoute } from "next";
import { getAbsoluteUrl, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getAbsoluteUrl("/"),
      lastModified: siteConfig.lastUpdated,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
