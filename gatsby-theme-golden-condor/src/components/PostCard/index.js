import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { Flex } from "@components/UI";
import { Text, Heading, Box, Card, Grid, sx, Badge } from "theme-ui";
import { Link } from "gatsby";

function PostCard({ post, showExcerpt, textColor, ...rest }) {
  return (
    <Card
      as={Link}
      to={`/${post.parent?.sourceInstanceName || "post"}/${post.slug}`}
      variant="post"
      {...rest}
    >
      {post.frontmatter.image && (
        <>
          <GatsbyImage
            image={post.frontmatter.image.childImageSharp.gatsbyImageData}
            alt={post.frontmatter.title} />
        </>
      )}
      <Box pb={3} />

      <Flex
        flexDirection="row"
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Text color={textColor} mr={1} sx={{ fontSize: [0, 1] }}>
          {post.frontmatter.date}{" "}
        </Text>
        <Badge variant="primaryLight">{post.frontmatter.category?.name}</Badge>
      </Flex>
      <Box pb={2} />
      <Heading
        color={textColor}
        sx={{
          fontSize: [4, 4, 5],
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
    </Card>
  );
}
PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  showExcerpt: PropTypes.bool,
  textColor: PropTypes.string,
};
PostCard.defaultProps = {
  textColor: "text",
  showExcerpt: false,
};
export default PostCard;
