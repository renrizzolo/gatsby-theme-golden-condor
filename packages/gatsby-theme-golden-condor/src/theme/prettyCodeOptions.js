const fs = require("fs");

module.exports = {
  theme: {
    dark: JSON.parse(
      fs.readFileSync(require.resolve("./ayu-mirage.json"), "utf-8")
    ),
    light: "github-light",
  },

  // These are hooks which allow you to style the node.
  // `node` is a unist node
  onVisitHighlightedLine(node) {
    // Style a highlighted line node.
    node.properties = {
      ...node.properties,
      className: [
        ...(node.properties.className || []),
        "highlighted-code-line",
      ],
    };
  },
  onVisitLine(node) {
    // give empty spans some content
    // so the height is correct
    // given the display: flex <code> parent
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedWord(node) {
    // Style a highlighted word node.
    node.properties = {
      ...node.properties,
      className: [
        ...(node.properties.className || []),
        "highlighted-code-word",
      ],
    };
  },
};
