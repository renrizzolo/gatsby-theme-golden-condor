import React from "react";
import { Box } from "theme-ui";
import { Heading } from "theme-ui";
import PostsGrid from "@components/PostsGrid";

function RelatedPosts({ relatedPosts }) {
  return (
    <Box p={[4, 4, 4, 6]} bg="secondary.3">
      <Heading variant="display" mb={4}>
        Read next:
      </Heading>
      <PostsGrid columns={3} posts={relatedPosts} />
    </Box>
  );
}
export default RelatedPosts;
