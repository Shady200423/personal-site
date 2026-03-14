import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: process.env.SITE ?? "https://personal-site.vercel.app",
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ]
});
