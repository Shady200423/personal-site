import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { site } from "../data/site";

export async function GET() {
  const posts = await getCollection("blog");
  const siteUrl = import.meta.env.SITE ?? "https://personal-site.vercel.app";
  return rss({
    title: site.title,
    description: site.description,
    site: siteUrl,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/${post.data.lang}/blog/${post.slug}/`
    }))
  });
}
