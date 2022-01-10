const path = require("path");

module.exports = {
  siteMetadata: {
    siteUrl: "https://gatsby-theme-golden-condor.netlify.app",
    title: "Gatsby Theme Golden Condor",
    author: "Ren Rizzolo",
    description: "Documentation site for Gatsby Theme Golden Condor",
    image: "/golden-condor.png",
    social: [
      {
        label: "Github",
        url: "https://github.com/renrizzolo/gatsby-theme-golden-condor",
      },
      {
        label: "Twitter",
        url: "https://twitter.com/ren_riz",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-theme-golden-condor`,
      options: {
        collections: {
          doc: {
            showTOC: true,
            containerVariant: "container",
            sidebarNav: {
              heading: "Documentation",
            },
            meta: {
              date: false,
            },
            relatedPosts: {
              heading: "Continue Reading",
              columns: "[1, 2]",
              layout: "list",
              showImage: false,
              meta: false,
            },
          },
          page: {
            containerVariant: "post",
          },
        },
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
