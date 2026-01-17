import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Woody's tech blog",
  description: "A place to share my learning notes",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "AI", link: "/AI" },
      { text: "web dev", link: "/web_dev" },
      { text: "python", link: "/python" },
      { text: "Nuxt", link: "/Nuxt" },
    ],

    sidebar: [
      {
        text: "AI",
        items: [{ text: "MCP", link: "/AI/mcp" }],
      },
      {
        text: "Web dev",
        items: [{ text: "DOM", link: "/web_dev/dom" }],
      },
      {
        text: "python",
        items: [{ text: "memory buffer", link: "/python/memory_buffer" }],
      },
      {
        text: "Nuxt",
        items: [{ text: "Nuxt Image", link: "/Nuxt/NuxtImage" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/woody1234567" },
      { icon: "youtube", link: "https://www.youtube.com/@Woodyhsu-vlog" },
    ],

    footer: {
      copyright: "Copyright © 2026-present StudyWithWoody",
    },
  },
});
