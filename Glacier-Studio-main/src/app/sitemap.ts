import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://glacierstudio.in";

  const routes = [
    "",
    "/solutions",
    "/work",
    "/about",
    "/contact",
    "/development",
    "/ai-automation",
    "/growth",
    "/video-design",
    "/google-ads",
    "/custom-software",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
