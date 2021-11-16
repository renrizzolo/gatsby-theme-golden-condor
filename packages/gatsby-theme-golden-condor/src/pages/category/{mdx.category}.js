import React from "react";
import { graphql } from "gatsby";
import { Container, Box, Heading } from "theme-ui";
import Layout from "@components/Layout";
import SEO from "@components/SEO";
import PostsGrid from "@components/PostsGrid";
import NotFound from "../404";

function CategoryPage({ data, params, path }) {
  if (!data) return <NotFound />;
  const { allMdx } = data;
  const post = allMdx?.nodes?.[0];

  return (
    <>
      <SEO
        title={`Entries in the ${post.frontmatter.category?.name} category`}
        description={""}
        pathname={path}
      />

      <Layout>
        <Box px={["lx.1", "lx.2"]} py={["ly.1", "ly.2"]}>
          <Container>
            <Heading mb={5} variant="jumbo" as="h1">
              {post.frontmatter.category?.name}
            </Heading>
            <PostsGrid posts={allMdx?.nodes} />
          </Container>
        </Box>
      </Layout>
    </>
  );
}

export default CategoryPage;

export const query = graphql`
  query ($category: String) {
    allMdx(filter: { frontmatter: { category: { slug: { eq: $category } } } }) {
      nodes {
        ...postPreview
      }
    }
  }
`;
