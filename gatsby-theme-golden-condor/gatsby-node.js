const path = require("path");
const fs = require("fs");
const mkdirp = require("mkdirp");

// create the posts and pages directories
exports.onPreBootstrap = ({ store, reporter }, themeOptions) => {
  const pagesPath = themeOptions.pagesPath || "content/posts";
  const postsPath = themeOptions.postsPath || "content/pages";

  const { program } = store.getState();

  const dirs = [
    path.join(program.directory, postsPath),
    path.join(program.directory, pagesPath),
  ];

  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      reporter.log(`gatsby-theme-golden-condor: creating the ${dir} directory`);
      mkdirp.sync(dir);
    }
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components/"),
      },
      extensions: [".js", ".json", ".ts", ".tsx"],
    },
  });
};

// exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
//   createTypes(`
//     type Mdx implements Node {
//       frontmatter: MdxFrontmatter
//     }

//     type MdxFrontmatter {
//       content: String @mdx
//       subHeading: String @mdx
//     }
//   `);
// };
