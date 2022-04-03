const path = require("path");
const fs = require("fs-extra");
const mkdirp = require("mkdirp");
const { merge } = require("lodash");
const { defaultCollectionsConfig } = require("./src/constants");

// create the posts and pages directories with dummy content
exports.onPluginInit = ({ store, reporter }, themeOptions) => {
  const pagesPath = `content/pages`;
  const postsPath = `content/posts`;

  const { program } = store.getState();

  const dirs = [
    {
      dir: path.join(program.directory, postsPath),
      collection: "posts",
    },
    {
      dir: path.join(program.directory, pagesPath),
      collection: "pages",
    },
  ];

  dirs.forEach(({ dir, collection }) => {
    if (!fs.existsSync(dir)) {
      reporter.log(
        `gatsby-theme-golden-condor: creating the ${collection} directory`
      );
      mkdirp.sync(dir);
      reporter.log(
        `gatsby-theme-golden-condor: adding ${collection} dummy content`
      );

      fs.copySync(
        path.resolve(
          __dirname,
          `content/${collection === "pages" ? "pages" : "posts"}`
        ),
        dir,
        { recursive: true }
      );
    }
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components/"),
        "@hooks": path.resolve(__dirname, "src/hooks/"),
        "@util": path.resolve(__dirname, "src/util/"),
        "@constants": path.resolve(__dirname, "src/constants/"),
        "@theme": path.resolve(__dirname, "src/theme/"),
      },
      extensions: [".js", ".json", ".ts", ".tsx"],
    },
  });
};

exports.onCreatePage = ({ page, getNode, actions, reporter }, themeOptions) => {
  const { createPage, deletePage } = actions;

  deletePage(page);
  let extraContext = {};
  // const node = getNode(page)
  if (page.path.endsWith("/.js/")) return;
  // don't create a page for a page with an explicitly null frontmatter.path
  if (page.context?.id && page.context?.__params?.slug) {
    const node = getNode(page.context?.id);
    if (node.frontmatter?.path === null) {
      reporter.info(
        `[gtgc] skipping creation of ${page.path} due to explicitly null frontmatter.path`
      );
      return;
    }
  }

  const mergedOpts = merge(defaultCollectionsConfig, themeOptions?.collections);

  const collectionsToRemoveIndex = Object.keys(mergedOpts)
    .map((collection) => {
      return mergedOpts[collection]?.disableIndexPage && collection;
    })
    .filter(Boolean);
  if (
    collectionsToRemoveIndex.some(
      (collection) => page.path === `/${collection}s/`
    )
  ) {
    reporter.info(
      `[gtgc] skipping creation of ${page.path} due to collection's disableIndexPage setting`
    );

    return;
  }

  if (page.internalComponentName === "ComponentIndex" && page.path === "/") {
    const collectionsToHide = Object.keys(mergedOpts)
      .map((collection) => {
        return mergedOpts[collection]?.hideOnHomePage && collection;
      })
      .filter(Boolean);
    extraContext = {
      collectionsNotIn: collectionsToHide,
    };
  }

  createPage({
    ...page,
    context: {
      ...page.context,
      ...extraContext,
    },
  });
};

// define some types that may not exist
exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
  createTypes(`
   type SitePage implements Node {
      context: SitePageContext
    }
    type SitePageContext {
      id: String!
      path: String
    }
    type Mdx implements Node {
      path: String
      collection: String
      category: String
      frontmatter: MdxFrontmatter
    }
    type MdxFrontmatter {
      id: String
      parent: String
      recentPosts: RecentPosts
      hideTOC: Boolean
      subTitle: String
      author: String
      tags: [String]
      category: Category
      excerpt: String
      image: File @fileByRelativePath
      embeddedImages: [File] @fileByRelativePath
    }
    type Category {
        name: String
        slug: String
    }
    type RecentPosts {
      heading: String
      layout: String
      columns: String
      container: String
      showExcerpt: Boolean
      showImage: Boolean
      meta: Boolean
    }
  `);
};

// add childEntries to MDX to be able to easily
// map/display sub-pages in side nav
exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    Mdx: {
      childEntries: {
        type: `[Mdx]`,
        resolve: async (source, args, context, info) => {
          const { entries } = await context.nodeModel.findAll({
            query: {
              filter: {
                frontmatter: {
                  parent: { eq: source.frontmatter.id, ne: null },
                },
              },
              sort: {
                fields: ["frontmatter.date"],
                order: ["DESC"],
              },
            },
            type: `Mdx`,
          });
          return entries;
        },
      },
      path: {
        type: `String`,
        resolve: async (source, args, context, info) => {
          const entry = await context.nodeModel.findOne({
            query: {
              filter: {
                context: {
                  id: {
                    eq: source.id,
                  },
                },
              },
            },
            type: `SitePage`,
          });
          // the only purpose of frontmatter.path is to disable it
          // (see docs/sidebar)
          return typeof source.frontmatter?.path !== "undefined"
            ? null
            : entry?.path;
        },
      },
      collection: {
        type: `String`,
        resolve: async (source, args, context, info) => {
          const entry = await context.nodeModel.findOne({
            query: {
              filter: {
                childMdx: {
                  id: {
                    eq: source.id,
                  },
                },
              },
            },
            type: `File`,
          });
          return entry?.sourceInstanceName;
        },
      },
      category: {
        type: `String`,
        resolve: async (source, args, context, info) => {
          const entry = await context.nodeModel.findOne({
            query: {
              filter: {
                id: {
                  eq: source.id,
                },
                frontmatter: {
                  category: { slug: { ne: null } },
                },
              },
            },
            type: `Mdx`,
          });
          return entry?.frontmatter?.category?.slug || "";
        },
      },
    },
  };
  createResolvers(resolvers);
};
