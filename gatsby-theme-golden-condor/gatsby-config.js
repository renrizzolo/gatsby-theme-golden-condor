module.exports = ({ contentPath = "data" }) => ({
  siteMetadata: {
    title: `Blog Title Placeholder`,
    author: `Name Placeholder`,
    description: `Description placeholder`,
    siteUrl: `https://example.com`,
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
  plugins: [
    {
      resolve: "gatsby-plugin-theme-ui",
      options: {
        // prismPreset: 'night-owl',
        // preset: "@theme-ui/preset-swiss",
      },
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     path: contentPath
    //   }
    // }
  ],
});
