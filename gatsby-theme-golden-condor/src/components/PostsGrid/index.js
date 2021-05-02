import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Box, Grid } from "theme-ui";
import PostCard from "@components/PostCard";
import { Heading } from "theme-ui";

function PostsGrid({ posts, columns, textColor, ...rest }) {
  return (
    <Grid columns={columns} gap={4} {...rest}>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} textColor={textColor} />
      ))}
    </Grid>
  );
}
PostsGrid.defaultProps = {
  columns: [2, 3],
};
export default PostsGrid;
