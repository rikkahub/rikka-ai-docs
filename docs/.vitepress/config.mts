import { defineConfig } from "vitepress";
import DefaultTheme from "vitepress/theme";
import en from "./en";
import zh from "./zh";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  locales: {
    root: {
      label: "English",
      lang: "en",
      ...en,
    },
    zh: {
      label: "简体中文",
      lang: "zh-CN",
      ...zh,
    },
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
  ],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "icon.png",
  },
});
