const path = require("path");

module.exports = {
  siteMetadata: {
    siteUrl: "http://localhost:8000",
    title: "Gatsby Theme Golden Condor",
    author: "Ren Rizzolo",
    description: "Documentation site for Gatsby Theme Golden Condor",
    image: "/icon.png",
    social: [
      {
        label: "Github",
        url: "https://github.com/renrizzolo/gatsby-theme-golden-condor",
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
              width: 200,
            },
            relatedPosts: {
              heading: "Continue Reading",
              columns: "[1, 2]",
              layout: "list",
              // container: "post",
              showImage: true,
              meta: false,
            },
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
