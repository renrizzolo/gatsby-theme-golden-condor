import React from "react";
import PropTypes from "prop-types";
import { Grid } from "theme-ui";
import PostItem from "@components/PostItem";
import usePosts from "@hooks/usePosts";

function PostsGrid({
  posts,
  columns,
  textColor,
  layout,
  showExcerpt,
  showImage,
  meta,
  ...rest
}) {
  // this just filters out posts without a path/slug
  const filteredPosts = usePosts({ posts });
  return (
    <Grid
      columns={columns}
      gap={4}
      sx={layout === "card" ? { gridRowGap: 5 } : {}}
      {...rest}
    >
      {filteredPosts.map((p) => {
        const post = p.childMdx ?? p;
        return (
          <PostItem
            key={post.slug}
            layout={layout}
            post={post}
            textColor={textColor}
            showExcerpt={showExcerpt}
            showImage={showImage}
            meta={meta}
          />
        );
      })}
    </Grid>
  );
}

PostsGrid.defaultProps = {
  columns: [2, 3],
  layout: "card",
};

PostsGrid.propTypes = {
  posts: PropTypes.array,
  columns: PropTypes.any,
  textColor: PropTypes.string,
  layout: PropTypes.oneOf(["card", "list"]),
  showExcerpt: PropTypes.bool,
  showImage: PropTypes.bool,
  meta: PropTypes.bool,
};

export default PostsGrid;
