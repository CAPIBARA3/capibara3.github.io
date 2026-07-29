import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "CAPIBARA Docs",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-GB",
    baseUrl: "capibara3.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
        typography: {
          header: "Syne",
            body: "Space Grotesk",
            code: "JetBrains Mono",
        },
        colors: {
          lightMode: {
            light: "#f4f2f9", // --bg
            lightgray: "rgba(165, 111, 232, 0.15)", // --border
            gray: "#9b92ab", // --text-faint
            darkgray: "#1a1625", // --text
            dark: "#000000",
            secondary: "#a56fe8", // --purple
            tertiary: "#ffb347", // --gold
            highlight: "rgba(165, 111, 232, 0.07)",
            textHighlight: "rgba(255, 179, 71, 0.2)",
          },
          darkMode: {
            light: "#0f0d16",
            lightgray: "rgba(165, 111, 232, 0.18)",
            gray: "#6e6585",
            darkgray: "#f0ecfa",
            dark: "#ffffff",
            secondary: "#c49af5",
            tertiary: "#ffb347",
            highlight: "rgba(165, 111, 232, 0.10)",
            textHighlight: "rgba(255, 179, 71, 0.2)",
          },
        },
    }
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
