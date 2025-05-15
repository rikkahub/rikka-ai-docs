import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "RikkaHub",
    description: "全能Android AI助手",
    themeConfig: {
        nav: [
            { text: "主页", link: "/zh/" },
            { text: "文档", link: "/zh/docs/basic/get-started", activeMatch: "/zh/docs/" },
            { text: "下载", link: "/zh/download" },
            { text: "隐私政策", link: "/zh/privacy-policy" },
          ],
      
          sidebar: {
            "/zh/docs/": [
              {
                text: "入门",
                items: [
                  { text: "快速开始", link: "/zh/docs/basic/get-started" },
                  { text: "常见问题", link: "/zh/docs/basic/qa" },
                  { text: "技术名称解释", link: "/zh/docs/basic/keywords" },
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
    }
})