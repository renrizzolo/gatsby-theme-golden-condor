const path = require("path");
const gatsbyRemarkPlugins = require("gatsby-theme-golden-condor/gatsbyRemarkPlugins");

module.exports = {
  siteMetadata: {
    title: "gatsby-theme-golden-condor example",
    siteUrl: "http://localhost:8000",
    titleTemplate: "%s | gatsby-theme-golden-condor example",

    // note you will need to change your theme.fonts.[heading|body|mono] if changing google fonts here
    googleFontsQueryString: `family=IBM+Plex+Mono:ital,wght@0,500;1,500&family=Arvo&family=Catamaran:wght@400;800&display=swap`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-theme-golden-condor`,
        short_name: `Gatsby Theme with theme-ui and MDX`,
        start_url: `/`,
        background_color: "#fff",
        theme_color: "#1e1c14",
        display: `minimal-ui`,
        icon: `./src/images/theme-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-theme-golden-condor`,
      options: {
        // each collection type can be configured as such:
        //  hideOnHomePage: (default: only pages) - hide this collection on homepage latest posts grid
        //  disableIndexPage: (default: only pages) - redirects to home when accessing /[collection]
        //  showRelatedPosts: (default: all but pages) - posts grid under articles
        //  meta: (default: all but pages) - show author/date metadata on posts
        //  showBreadcrumbs (default: all but pages) - show breadcrumb navigation on posts
        //  showTOC - Table Of Contents (h2)) - show TOC links sidebar
        //  containerVariant - width variant for container (default: post)
        //    - default variants are container (full width), post, article. these can be customised in your theme.
        //  sidebarNav - left sidebar page navigation (via frontmatter.parent = id / frontmatter.id relationships you define.
        //    WARNING: it's up to you to keep the ids/parents in sync, expect things to break if you change an id and forget to update a parent
        //  also, only one level is supported, but there's nothing stopping you from making a parent a parent. Again, expect weirdness.)
        //  sidebarNav.heading - sidebarNav Heading text
        //  sidebarNav.width - pixel width of sidebar (default: 280)

        collections: {
          post: {
            showTOC: true,
          },
          page: {
            containerVariant: "container",
            sidebarNav: { heading: "Pages" },
            disableIndexPage: true,
            showTOC: true,
          },
          doc: {
            containerVariant: "container",
            sidebarNav: { heading: "Documentation" },
            showTOC: true,
            hideOnHomePage: true,
            meta: {
              tags: false,
              timeToRead: false,
            },
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins,
        // override the default theme for syntax highlighting
        remarkPlugins: [require("./mdxPretty")],
      },
    },
    // any additional collection types need to be added here for sourcing
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(`content/podcasts`),
        name: "podcast",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(`content/docs`),
        name: "doc",
      },
    },
  ],
};
