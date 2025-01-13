// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Meta Wiki Art",
  tagline: "Exploring Linked Open Data for Books and Artworks",
  favicon: "img/favicon.ico",

  url: "https://www.metawikiart.com",
  baseUrl: "/",

  organizationName: "Meta Wiki Art", // Your GitHub org/user name.
  projectName: "metawikiartdocs", // Your repo name.

  onBrokenLinks: "warn", // Warn during development for broken links.
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/MetaWikiArt/metawikiartdocs/edit/main/",
        },
        blog: {
          path: "blog", // Specifies the path to your blog folder
          routeBasePath: "blog", // Sets the route where the blog will be available
          showReadingTime: true,
          editUrl: "https://github.com/MetaWikiArt/metawikiartdocs/edit/main/",
          include: ["**/*.{md,mdx}"], // Ensures all .md and .mdx files are included
          blogTitle: "Meta Wiki Art Blog", // Blog title for SEO
          blogDescription: "Updates, insights, and ideas from Meta Wiki Art", // Blog description for SEO
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "MetaWikiArt",
      logo: {
        alt: "MetaWikiArt Logo",
        src: "img/historypuzzle01.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" }, // Blog link in navbar
        {
          to: "/docs/automating-lod-pipeline-with-jupyter-notebooks",
          label: "Linked Open Data Pipelines",
          position: "left",
        },
        { to: "/all-pages", label: "All Pages", position: "left" },
        {
          to: "/use-cases",
          label: "Use Cases",
          position: "left",
        },
        {
          to: "/resources",
          label: "Resources",
          position: "left",
        },
        {
          to: "/docs/getting-started",
          label: "Getting Started",
          position: "left",
        },
        {
          href: "https://github.com/MetaWikiArt/metawikiartdocs",
          label: "GitHub",
          position: "right",
        },
        {
          to: "/sitemap",
          label: "Sitemap",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Sun and Rain Works",
              href: "https://www.sunandrainworks.com",
            },
            {
              label: "Metagen Earth",
              href: "https://www.metagenearth.com",
            },
          ],
        },
        {
          title: "Further Reading",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/MetaWikiArt/metawikiartdocs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Meta Wiki Art.`,
    },
  },
};

export default config;
