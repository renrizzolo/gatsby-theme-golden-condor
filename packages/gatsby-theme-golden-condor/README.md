# Gatsby Theme Golden Condor

A gatsby theme with **MDX** support, **theming** & **dark mode** via **[theme-ui](https://theme-ui.com)**, unlimited **collections** (custom post types), configurable **layouts**, built in **SEO**, component shadowing and more.

## Quick Start

## Get started with a new project

First init a new gatsby project:

```bash
npm init gatsby
```

cd into the directory of your new project

```bash
cd my-gatsby-site
```

Install the theme

```bash
npm i gatsby-theme-golden-condor
```

## Install the theme in an existing project

In your project folder

```shell
npm i gatsby-theme-golden-condor
```

## Theme Setup

### Gatsby config

Edit your `gatsby-config.js`
We need to add the plugin `gatsby-theme-golden-condor`, plus there are a few required `siteMetadata` options that the theme uses for SEO and the like.

```js
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Your Title",
    author: "Your Name",
    description: "site description",
    image: "static-image.png",
    social: [
      {
        name: "...",
        url: "...",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-golden-condor`,
      options: {},
    },
  ],
};
```

For more information on these options check out [Theme Options](https://gatsby-theme-golden-condor.netlify.app/doc/theme-options) and [Site Metadata](https://gatsby-theme-golden-condor.netlify.app/doc/site-metadata)

### Remove default pages `index.js`

Delete the `src/pages/index.js` file that was created by gatsby init.

### Run develop

Run the develop script.
This will create the default `posts`, `pages` and `navigation.yaml` file in the `content` folder.

```shell
npm run develop
```

### Edit content

The content for the home page is located at `content/pages/index.mdx`. For more info, check out [Frontmatter](https://gatsby-theme-golden-condor.netlify.app/doc/frontmatter)

The header and footer menus are configurable in `content/pages/navigation.yaml`. For more info, check out [Navigation](https://gatsby-theme-golden-condor.netlify.app/doc/navigation)
