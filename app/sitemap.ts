import type { MetadataRoute } from "next";
import { posts } from "@/content/blog";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/solar-epc", "/bess-ems", "/pmc", "/pmc-for-psp", "/o-and-m", "/projects", "/blog", "/contact"];

  const now = new Date();

  const staticEntries = staticRoutes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.7
  }));

  const blogEntries = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  return [...staticEntries, ...blogEntries];
}

