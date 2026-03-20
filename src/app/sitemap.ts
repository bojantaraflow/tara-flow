import type { MetadataRoute } from "next";

import { tours } from "@/data/ture";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://taraflow.ba";

  // BS (default locale, no prefix) and EN (with prefix) paths
  const staticRoutes: { path: string; locale: string }[] = [
    { path: "", locale: "bs" },
    { path: "/ture", locale: "bs" },
    { path: "/galerija", locale: "bs" },
    { path: "/o-nama", locale: "bs" },
    { path: "/kontakt", locale: "bs" },
    { path: "/en", locale: "en" },
    { path: "/en/tours", locale: "en" },
    { path: "/en/gallery", locale: "en" },
    { path: "/en/about", locale: "en" },
    { path: "/en/contact", locale: "en" },
  ];

  const staticEntries = staticRoutes.map(({ path }) => ({
    url: `${baseUrl}${path || "/"}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" || path === "/en" ? 1 : 0.8,
  }));

  const tourEntriesBs = tours.map((tour) => ({
    url: `${baseUrl}/ture/${tour.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const tourEntriesEn = tours.map((tour) => ({
    url: `${baseUrl}/en/tours/${tour.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...tourEntriesBs, ...tourEntriesEn];
}
