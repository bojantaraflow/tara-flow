import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["bs", "en"],
  defaultLocale: "bs",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/ture": {
      bs: "/ture",
      en: "/tours",
    },
    "/ture/[slug]": {
      bs: "/ture/[slug]",
      en: "/tours/[slug]",
    },
    "/galerija": {
      bs: "/galerija",
      en: "/gallery",
    },
    "/o-nama": {
      bs: "/o-nama",
      en: "/about",
    },
    "/kontakt": {
      bs: "/kontakt",
      en: "/contact",
    },
  },
});
