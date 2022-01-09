import { PropTypes } from "prop-types";
import React from "react";

const AfterPostsGrid = ({ path, type, collection, category }) => {
  console.log({ path, type, collection, category });
  return null;
  // if (path === "/") return <div>Cool homepage footer content</div>;
  // if (collection === 'doc') return ...;
  // if (category === "cats") return ...;
  // if (type === 'related-posts') return ...
};

AfterPostsGrid.propTypes = {
  path: PropTypes.string,
  type: PropTypes.oneOf(["category", "home-page", "related-posts"]),
  collection: PropTypes.string,
  category: PropTypes.string,
};

export default AfterPostsGrid;
