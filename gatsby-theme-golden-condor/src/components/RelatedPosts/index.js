import React from "react";
import PropTypes from "prop-types";
import { Box } from "theme-ui";
import { Heading } from "theme-ui";
import PostsGrid from "@components/PostsGrid";
import { Container } from "@theme-ui/components";

function RelatedPosts({ posts, heading }) {
  return (
    <Box px={[4, 4, 4, 6]} py={[4, 5]} bg="gray.3">
      <Container>
        <Heading variant="display" mb={4} color={"gray.1"}>
          {heading}
        </Heading>
        <PostsGrid posts={posts} />
      </Container>
    </Box>
  );
}

RelatedPosts.propTypes = {
  posts: PropTypes.object.isRequired,
};
RelatedPosts.defaultProps = {
  heading: `Read next:`,
};
export default RelatedPosts;
