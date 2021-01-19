import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Box, Grid } from "theme-ui";
import PostCard from "@components/PostCard";
import { Heading } from "theme-ui";

function PostsGrid({ posts, columns, ...rest }) {
  return (
    <Grid columns={columns} {...rest}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Grid>
  );
}
PostsGrid.defaultProps = {
  columns: 3,
};
export default PostsGrid;
