import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Box, Grid } from "theme-ui";
import PostCard from "@components/PostCard";
import { Heading } from "theme-ui";

function RelatedPosts({ relatedPosts }) {
  return (
    <Box p={[4, 4, 4, 6]} bg="secondary.3">
      <Heading variant="display" mb={4}>
        Read next:
      </Heading>
      <Grid columns={3}>
        {relatedPosts.map((post) => (
          <PostCard post={post} />
        ))}
      </Grid>
    </Box>
  );
}
export default RelatedPosts;
