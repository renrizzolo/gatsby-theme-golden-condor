import React from "react";
import Img from "gatsby-image";
import { graphql, Link } from "gatsby";
import { Container, Box, Heading, Text, Grid, Divider } from "theme-ui";
import Layout from "@components/Layout";
import SEO from "@components/SEO";
import Meta from "@components/Meta";
import MDX from "@components/MDX";
import TableOfContents from "@components/TableOfContents";
import RelatedPosts from "@components/RelatedPosts";
import PostsGrid from "@components/PostsGrid";

function TagPage({ data, params }) {
  console.log(data, params);

  return (
    <>
      {/* <SEO
        title={post.title}
        description={post.excerpt}
        image={post.image}
        pathname={`tag/${post.slug}`}
        article
      /> */}

      <Layout>
        <Box p={[3, 4, 5]}>
          <Container>
            <PostsGrid posts={data.allMdx?.nodes} />
          </Container>
        </Box>
      </Layout>
    </>
  );
}

export default TagPage;

export const query = graphql`
  query($frontmatter__category__slug: String!) {
    allMdx(
      filter: {
        frontmatter: {
          category: { slug: { eq: $frontmatter__category__slug } }
        }
      }
    ) {
      nodes {
        ...postPreview
      }
    }
  }
`;
