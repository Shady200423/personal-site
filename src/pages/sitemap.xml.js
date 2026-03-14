import { getCollection } from "astro:content";
import { languages } from "../data/site";

const staticPaths = [
  "/",
  ...languages.flatMap((language) => [
    `/${language.code}/`,
    `/${language.code}/about/`,
    `/${language.code}/research/`,
    `/${language.code}/portfolio/`,
    `/${language.code}/blog/`,
    `/${language.code}/resources/`,
    `/${language.code}/cv/`,
    `/${language.code}/contact/`
  ])
];

const buildUrl = (site, path) => new URL(path, site).href;

export async function GET() {
  const site = import.meta.env.SITE ?? "https://personal-site.vercel.app";
  const posts = await getCollection("blog");

  const postUrls = posts.map((post) => ({
    loc: buildUrl(site, `/${post.data.lang}/blog/${post.slug}/`),
    lastmod: post.data.date.toISOString()
  }));

  const tagUrls = languages.flatMap((language) => {
    const tags = new Set(
      posts
        .filter((post) => post.data.lang === language.code)
        .flatMap((post) => post.data.tags.map((tag) => tag.toLowerCase()))
    );
    return Array.from(tags).map((tag) => ({
      loc: buildUrl(site, `/${language.code}/blog/tags/${encodeURIComponent(tag)}/`)
    }));
  });

  const urls = [
    ...staticPaths.map((path) => ({ loc: buildUrl(site, path) })),
    ...postUrls,
    ...tagUrls
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((entry) => {
    const lastmod = entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : "";
    return `<url><loc>${entry.loc}</loc>${lastmod}</url>`;
  })
  .join("")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
