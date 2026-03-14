export const site = {
  name: "Communication Space",
  author: "Nicola Paonessa",
  title: "Communication Space — Nicola Paonessa",
  description:
    "Communication student exploring AI, digital systems and opinion formation.",
  email: "nicola.paonessa200423@gmail.com",
  social: {
    github: "https://github.com/Shady200423?tab=overview&from=2026-03-01&to=2026-03-14",
    linkedin: "https://www.linkedin.com/in/nicola-paonessa-4bbb17272/"
  },
  ogImage: "/images/og-image.png",
  newsletter: {
    substackUrl: ""
  }
};

export const languages = [
  { code: "en", label: "English" },
  { code: "it", label: "Italiano" }
];

export const navLinks = (lang: string) => [
  { label: lang === "it" ? "Home" : "Home", href: `/${lang}/` },
  { label: lang === "it" ? "Chi sono" : "About", href: `/${lang}/about/` },
  { label: lang === "it" ? "Ricerca" : "Research", href: `/${lang}/research/` },
  { label: lang === "it" ? "Portfolio" : "Portfolio", href: `/${lang}/portfolio/` },
  { label: lang === "it" ? "Blog" : "Blog", href: `/${lang}/blog/` },
  { label: lang === "it" ? "Risorse" : "Resources", href: `/${lang}/resources/` },
  { label: lang === "it" ? "CV" : "CV", href: `/${lang}/cv/` },
  { label: lang === "it" ? "Contatti" : "Contact", href: `/${lang}/contact/` }
];
