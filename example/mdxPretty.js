const { createRemarkPlugin } = require("@atomiks/mdx-pretty-code");
const fs = require("fs");

// does not seem to consistently override the theme's plugin.
// needs investigation.

module.exports = createRemarkPlugin({
  // Options passed to shiki.getHighlighter()
  shikiOptions: {
    // Link to your VS Code theme JSON file
    theme: {
      light: "github-dark",
      dark: "monokai",
    },
  },
  // These are hooks which allow you to style the node. `node` is an element
  onVisitHighlightedLine(node) {
    // Style a highlighted line node.
    Object.assign(node.style, {
      backgroundColor: "rgba(143, 143, 149, 0.15)",
      boxShadow: "rgb(23, 189, 189) -4px 0px 0px 0px",
      marginLeft: "-12px",
      paddingLeft: "12px",
      marginRight: "-16px",
    });
  },
  onVisitLine(node) {
    // give empty spans some content
    // so the height is correct
    // given the display: flex <code> parent
    if (!node.innerHTML) {
      node.innerHTML = "\n";
    }
  },
  onVisitHighlightedWord(node) {
    // Style a highlighted word node.
    Object.assign(node.style, {
      backgroundColor: "rgba(143, 143, 149, 0.15)",
      padding: "4px",
      borderRadius: "2px",
    });
  },
});
