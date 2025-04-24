import { defineConfig } from "vitepress";
import DefaultTheme from 'vitepress/theme'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RikkaHub",
  description: "全能Android AI助手",
  lang: "zh-CN",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "文档", link: "/docs/basic/get-started", activeMatch: "/docs/" },
      { text: "下载", link: "/download" },
    ],

    sidebar: {
      "/docs/": [
        {
          text: "入门",
          items: [
            { text: "快速开始", link: "/docs/basic/get-started" },
            { text: "常见问题", link: "/docs/basic/qa" },
            // { text: "提供商配置", link: "/docs/provider" },
            // { text: "搜索配置", link: "/docs/search" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/re-ovo/rikkahub" },
      { icon: "qq", link: "https://qm.qq.com/q/I8MSU0FkOu" },
    ],

    footer: {
      copyright: 'Apache License 2.0 @ RikkaHub',
      message: 'Made with ❤️ by RE',
    }
  },
});
