import React from "react";
import PropTypes from "prop-types";
import { Box } from "theme-ui";
import { Heading } from "theme-ui";
import PostsGrid from "@components/PostsGrid";
import { Container } from "@theme-ui/components";
import usePosts from "@hooks/usePosts";
import useThemeOptions from "@hooks/useThemeOptions";
import useGetPostOptions from "@hooks/useGetPostOptions";
import AfterPostsGrid from "@components/ContentInjection/AfterPostsGrid";

function RelatedPosts({
  posts,
  category,
  collectionName,
  tags,
  heading,
  wrapperProps,
  headingProps,
  path,
}) {
  const opts = useThemeOptions(collectionName);
  const { relatedPosts = {} } = opts;
  const postProps = useGetPostOptions(relatedPosts);
  const filteredPosts = usePosts({ posts, category, tags, collectionName });

  return filteredPosts.length ? (
    <Box px={[4, 4, 4, 6]} py={[4, 5]} bg="paper" {...wrapperProps}>
      <Container variant={relatedPosts.container || "container"}>
        <Heading variant="display" mb={4} color={"gray.1"} {...headingProps}>
          {relatedPosts.heading || heading}
        </Heading>
        <PostsGrid posts={filteredPosts} {...postProps} />
        <AfterPostsGrid
          path={path}
          type={"related-posts"}
          collection={collectionName}
        />
      </Container>
    </Box>
  ) : null;
}

RelatedPosts.propTypes = {
  posts: PropTypes.array.isRequired,
  category: PropTypes.string,
  collectionName: PropTypes.string,
  tags: PropTypes.array,
  heading: PropTypes.string,
  wrapperProps: PropTypes.object,
  headingProps: PropTypes.object,
};

RelatedPosts.defaultProps = {
  heading: `Read next:`,
};

export default RelatedPosts;
