module.exports = {
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
        icon: `${__dirname}/src/images/theme-icon.png`, // This path is relative to the root of the site.
      },
    },
    { resolve: `gatsby-theme-golden-condor`, options: {} },
  ],
};
