import React from "react";
import Img from "gatsby-image";
import { Text, Heading, Box, Card, Grid, sx, Badge, Flex } from "theme-ui";
import { Link } from "gatsby";

function PostCard({ post, showExcerpt = false, ...rest }) {
  return (
    <Card as={Link} to={`/posts/${post.slug}`} variant="post" {...rest}>
      {post.frontmatter.image && (
        <>
          <Img
            fluid={post.frontmatter.image.childImageSharp.fluid}
            alt={post.frontmatter.title}
          />
        </>
      )}
      <Box pb={3} />

      <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
        <Text mr={1} sx={{ fontSize: 1 }}>
          {post.frontmatter.date}{" "}
        </Text>
        <Badge variant="primaryLight">{post.frontmatter.category}</Badge>
      </Flex>
      <Box pb={2} />
      <Heading
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
          <Text as="p">{post.frontmatter.excerpt}</Text>
        </>
      )}
    </Card>
  );
}
export default PostCard;
