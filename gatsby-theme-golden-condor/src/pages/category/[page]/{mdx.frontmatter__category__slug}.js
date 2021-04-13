import React from "react";
import { graphql } from "gatsby";
import { Container, Box } from "theme-ui";
import Layout from "@components/Layout";
import SEO from "@components/SEO";

import PostsGrid from "@components/PostsGrid";
const PER_PAGE = 3;
function TagPage({ data, params }) {
  console.log(data, params);
  const { page } = params;
  if (page && typeof Number(page) === "number") {
    const skip = PER_PAGE * page;
  } else {
    return null;
  }
  const post = data.allMdx?.nodes?.[0];
  return (
    <>
      <SEO
        title={`Posts in the ${post.category?.name} category`}
        description={""}
        pathname={`category/${post.category?.slug}`}
      />

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
  query($frontmatter__category__slug: String!, $page: Int!) {
    allMdx(
      skip: $page
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
