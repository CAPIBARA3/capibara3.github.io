import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "CAPIBARA",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "https//capibara3.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Syne",
        body: "Space Grotesk",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#fafafa",                         // Pure page/paper background
          lightgray: "#e5e5e5",                     // Borders, dividers, search inputs
          gray: "#737373",                          // Subtitles and metadata
          darkgray: "#171717",                      // Main text body
          dark: "#0a0a0a",                          // Headings and titles
          secondary: "#a56fe8",                     // Brand Purple (Links, active states)
          tertiary: "#ffb347",                      // Brand Gold (Hover states)
          highlight: "rgba(165, 111, 232, 0.1)",   // Soft purple highlight overlay
          textHighlight: "#ffb34788",               // Text highlight background
        },
        darkMode: {
          light: "#0a0a0a",                         // Deep dark background
          lightgray: "#262626",                     // Dark borders and graph grid
          gray: "#a3a3a3",                          // Muted text
          darkgray: "#e5e5e5",                      // Main crisp text body
          dark: "#fafafa",                          // Bright headings
          secondary: "#a56fe8",                     // Brand Purple (Links, active states)
          tertiary: "#ffb347",                      // Brand Gold (Hover states)
          highlight: "rgba(165, 111, 232, 0.15)",  // Soft purple highlight overlay
          textHighlight: "#ffb34788",               // Text highlight background
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
