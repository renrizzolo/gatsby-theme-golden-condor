import PostCard from "@components/PostCard";
import React from "react";
import { Container, Flex, Heading, Box, Grid, Badge, Divider } from "theme-ui";
import { Link } from "@components/UI";
import { graphql } from "gatsby";
import Layout from "@components/Layout";

export default ({ data }) => (
  <>
    <Layout>
      {data.page && (
        <Box as="section">
          <div dangerouslySetInnerHTML={{ __html: data.page.content }} />
        </Box>
      )}
      <Box p={4}>
        <Container as="section">
          <Box pb={5} />

          <Heading variant="jumbo">Latest Posts</Heading>
        </Container>
      </Box>
      <Box p={4}>
        <Container as="section">
          {/* <Divider /> */}

          <Grid gap={4} columns={[1, 2, 3]}>
            {data.posts.nodes.map((post, i) => (
              <PostCard post={post} />
            ))}
          </Grid>
          <Box pb={5} />
          <Heading variant="jumbo">Concrete Playground</Heading>
        </Container>
      </Box>
    </Layout>
  </>
);

export const query = graphql`
  {
    pagesYaml(title: { eq: "Home" }) {
      content {
        body
      }
    }
    posts: allMdx {
      nodes {
        ...postPreview
      }
    }
  }
`;

export const postPreviewFragment = graphql`
  fragment postPreview on Mdx {
    slug
    frontmatter {
      date(formatString: "MMMM Do, YYYY")
      title
      category {
        name
        slug
      }
      tags
      excerpt
      image {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 225) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
