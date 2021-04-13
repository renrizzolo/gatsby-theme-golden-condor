import React from "react";
import { Box } from "theme-ui";
import { Heading } from "theme-ui";
import PostsGrid from "@components/PostsGrid";

function RelatedPosts({ relatedPosts }) {
  return (
    <Box px={[4, 4, 4, 6]} py={[4, 5]} bg="gray.3">
      <Heading variant="display" mb={4}>
        Read next:
      </Heading>
      <PostsGrid posts={relatedPosts} />
    </Box>
  );
}
export default RelatedPosts;
