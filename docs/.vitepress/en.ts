import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "RikkaHub",
    description: "All-in-one Android LLM UI",
    themeConfig: {
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