const path = require("path");
const merge = require("lodash.merge");
const { defaultCollectionsConfig } = require("./src/constants");
const gatsbyRemarkPlugins = require("./gatsbyRemarkPlugins");
const rehypePrettyCode = require("rehype-pretty-code");
const prettyCodeOptions = require("./src/theme/prettyCodeOptions");

module.exports = ({ collections }) => {
  const mergedOpts = merge(defaultCollectionsConfig, collections);
  return {
    siteMetadata: {
      title: "",
      titleTemplate: "%s",
      author: "",
      description: "",
      siteUrl: "",
      image: "", // Path to your image you placed in the 'static' folder
      social: [
        {
          label: "",
          url: "",
        },
      ],
      twitterHandle: "",
      googleFontsQueryString: `family=IBM+Plex+Mono:ital,wght@0,500;1,500&family=Inter&family=Space+Grotesk:wght@300;400;700&display=swap`,
      collections: JSON.stringify(mergedOpts),
    },
    plugins: [
      `gatsby-plugin-image`,
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
          rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
          gatsbyRemarkPlugins,
          plugins: [`gatsby-remark-images`], // https://github.com/gatsbyjs/gatsby/issues/15486
        },
      },
      {
        resolve: "gatsby-plugin-theme-ui",
      },
      "gatsby-plugin-react-helmet",
      {
        resolve: `gatsby-plugin-sharp`,
        options: {
          defaults: {
            formats: [`auto`, `webp`],
            placeholder: `dominantColor`,
            quality: 70,
            backgroundColor: `transparent`,
          },
        },
      },
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-transformer-yaml`,
      },
      `gatsby-plugin-mdx-frontmatter`,
      `gatsby-plugin-catch-links`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: path.resolve(`content/posts`),
          name: "post",
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: path.resolve(`content/pages`),
          name: "page",
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: path.resolve(`src/images`),
          name: `assets`,
        },
      },
    ],
  };
};
