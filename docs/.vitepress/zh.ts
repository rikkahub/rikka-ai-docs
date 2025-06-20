import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "RikkaHub",
    description: "全能Android AI助手",
    themeConfig: {
        editLink: {
          pattern: "https://github.com/rikkahub/rikka-ai-docs/edit/main/docs/:path",
          text: "编辑此页面",
        },
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
              {
                text: '助手',
                items: [
                  { text: '基础设置', link: '/zh/docs/assistants/basic' },
                  { text: '提示词', link: '/zh/docs/assistants/prompt' },
                  { text: '记忆', link: '/zh/docs/assistants/memory' },
                  { text: '自定义请求', link: '/zh/docs/assistants/custom-request' },
                  { text: 'MCP', link: '/zh/docs/assistants/mcp' },
                ]
              }
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