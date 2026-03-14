# Nicola Paonessa — Academic Website

Minimal, fast, static-first personal website built with Astro + TailwindCSS.

## File structure

```
/public
  /images
    headshot.jpg
    og-default.svg
    og-image.png
    profile.svg
  /icons
    arrow.svg
  robots.txt
/src
  /components
    BlogCard.astro
    Footer.astro
    Giscus.astro
    LanguageSwitcher.astro
    Navbar.astro
    SearchBar.astro
    TagList.astro
    ThemeToggle.astro
  /content
    /blog
      esempio-articolo.md
      example-article.md
    config.ts
  /data
    content.ts
    site.ts
  /layouts
    BaseLayout.astro
    BlogPostLayout.astro
  /pages
    /[lang]
      /blog
        /tags
          [tag].astro
        [...slug].astro
        index.astro
      about.astro
      contact.astro
      cv.astro
      index.astro
      portfolio.astro
      research.astro
      resources.astro
    404.astro
    index.astro
    rss.xml.js
    sitemap.xml.js
  /styles
    global.css
astro.config.mjs
postcss.config.cjs
tailwind.config.mjs
package.json
```

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

## Deploy on Vercel

1. Push this repo to GitHub.
2. Create a new Vercel project and import the repo.
3. Framework preset: Astro.
4. Build command: `npm run build`
5. Output directory: `dist`

Vercel Analytics is already wired via `@vercel/analytics`.

## Publish a new blog post

1. Add a Markdown file to `src/content/blog/`.
2. Use frontmatter:

```md
---
title: "Example article"
description: "Example description"
date: 2026-01-01
tags: ["AI", "Communication"]
lang: "en"
---
```

Posts automatically appear on `/en/blog/` or `/it/blog/` based on `lang`.

## Required configuration edits

- Update canonical site URL in:
  - `astro.config.mjs` (`site`)
  - `src/pages/rss.xml.js` (`site`)
  - `src/pages/sitemap.xml.js` (`SITE` fallback)
  - `public/robots.txt` (sitemap URL)
- Update email and socials in `src/data/site.ts`.
- Configure Giscus IDs in `src/components/Giscus.astro` (repo-id, category-id).
- Substack URL (optional) in `src/data/site.ts` (`newsletter.substackUrl`).
```
