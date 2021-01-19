import React from "react";
import { graphql, Link } from "gatsby";
import SEO from "@components/SEO";
import Layout from "@components/Layout";
import { Container, Box, Heading, Text } from "theme-ui";
import MDX from "@components/MDX";

function Page({ data }) {
  console.log(data);
  return (
    <>
      <SEO
      // title={post.title}
      // description={post.excerpt}
      // image={post.image}
      // pathname={`${data.postsPrefix}/${post.slug}`}
      // article
      />

      <Layout>
        <Container>
          <Heading as="h1" variant="display">
            {data.page.title}
          </Heading>
          <Box pb={4} />
          {/* @todo: slugify function for category/tag links */}
          <MDX content={data.page.content} />
        </Container>
      </Layout>
    </>
  );
}

export default Page;

export const query = graphql`
  query($id: String!) {
    page(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        postsPrefix
      }
    }
  }
`;
