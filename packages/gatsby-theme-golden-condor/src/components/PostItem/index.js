import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { Flex } from "@components/UI";
import { Text, Heading, Box, Card, Badge } from "theme-ui";
import { Link } from "gatsby";
import { getPath } from "@util";
import PostPlaceholder from "@components/PostPlaceholder";

function PostItem({
  post,
  showExcerpt,
  showImage,
  meta,
  layout,
  textColor,
  ...rest
}) {
  const path = getPath(post);
  if (!path) return null;
  return (
    <Card as={Link} to={path} variant="post" {...rest}>
      <Flex
        flexDirection={layout === "card" ? "column" : "row"}
        sx={
          layout === "card"
            ? {}
            : {
                justifyContent: "flex-start",
                flexWrap: "nowrap",
              }
        }
      >
        {showImage && (
          <>
            <Box
              sx={
                layout === "card"
                  ? {}
                  : {
                      flex: "auto",
                      maxWidth: [64, 128],
                    }
              }
            >
              {post.frontmatter.image ? (
                <GatsbyImage
                  image={post.frontmatter.image.childImageSharp.gatsbyImageData}
                  alt={post.frontmatter.title}
                />
              ) : (
                <PostPlaceholder />
              )}
            </Box>

            <Box sx={layout === "card" ? { pb: 3 } : { pr: 3 }} />
          </>
        )}
        <Box sx={{ flex: 1 }}>
          {meta && (
            <Flex direction="row" align="center" justify="between" wrap="wrap">
              <Text color={textColor} mr={1} sx={{ fontSize: [0, 1] }}>
                {post.frontmatter.date}{" "}
              </Text>
              <Flex flexDirection="row" gap={1}>
                {post.frontmatter.category && (
                  <Badge variant="primaryLight">
                    {post.frontmatter.category?.name}
                  </Badge>
                )}
                <Badge variant="secondaryLight">{post.collection}</Badge>
              </Flex>
            </Flex>
          )}
          <Box pb={layout === "card" ? 2 : 1} />
          <Heading
            color={textColor}
            sx={{
              fontSize: [3, 4],
              fontWeight: "600",
            }}
          >
            {post.frontmatter.title}
          </Heading>
          {showExcerpt && (
            <>
              <Box pb={2} />
              <Text color={textColor} as="p">
                {post.frontmatter.excerpt}
              </Text>
            </>
          )}
        </Box>
      </Flex>
    </Card>
  );
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  showExcerpt: PropTypes.bool,
  meta: PropTypes.bool,
  showImage: PropTypes.bool,
  textColor: PropTypes.string,
  layout: PropTypes.oneOf(["card", "list"]),
};
PostItem.defaultProps = {
  layout: "card",
  textColor: "text",
  showExcerpt: false,
  meta: true,
  showImage: true,
};
export default PostItem;
