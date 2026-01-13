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
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/woody1234567" }],
  },
});
