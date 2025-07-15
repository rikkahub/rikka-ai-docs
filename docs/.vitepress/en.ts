import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "RikkaHub",
    description: "All-in-one Android LLM UI",
    themeConfig: {
        editLink: {
          pattern: "https://github.com/rikkahub/rikka-ai-docs/edit/main/docs/:path",
          text: "Edit this page",
        },
        nav: [
            { text: "Home", link: "/" },
            { text: "Docs", link: "/docs/basic/get-started", activeMatch: "/docs/" },
            { text: "Download", link: "/download" },
            { text: "Privacy Policy", link: "/privacy-policy" },
          ],
      
          sidebar: {
            "/docs/": [
              {
                text: "Quick Start",
                items: [
                  { text: "Quick Start", link: "/docs/basic/get-started" },
                  { text: "FAQ", link: "/docs/basic/qa" },
                  { text: "Keywords", link: "/docs/basic/keywords" },
                ],
              },
              {
                text: 'Assistants',
                items: [
                  { text: 'Basic', link: '/docs/assistants/basic' },
                  { text: 'Prompt', link: '/docs/assistants/prompt' },
                  { text: 'Memory', link: '/docs/assistants/memory' },
                  { text: 'Custom Request', link: '/docs/assistants/custom-request' },
                  { text: 'MCP', link: '/docs/assistants/mcp' },
                ]
              },
              {
                text: 'AI Providers',
                items: [
                  { text: 'OpenAI', link: '/docs/provider/openai' },
                  { text: 'Anthropic', link: '/docs/provider/anthropic' },
                  { text: 'Google', link: '/docs/provider/google' },
                  { text: 'New API', link: '/docs/provider/new-api' },
                  { text: 'Gemini Balance', link: '/docs/provider/gemini-balance' },
                  { text: 'Hajimi', link: '/docs/provider/hajimi' },
                ]
              }
            ],
          },
      
          socialLinks: [
            { icon: "github", link: "https://github.com/re-ovo/rikkahub" },
            { icon: "discord", link: "https://discord.gg/9weBqxe5c4" },
          ],
      
          footer: {
            copyright: 'Apache License 2.0 @ RikkaHub',
            message: 'Made with ❤️ by RE',
          }
    }
})