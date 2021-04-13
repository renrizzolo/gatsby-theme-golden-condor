import React from "react";
import { graphql } from "gatsby";
import SEO from "@components/SEO";
import Layout from "@components/Layout";
import { Container, Box, Heading, Text } from "theme-ui";
import MDX from "@components/MDX";

function Page({ data }) {
  console.log(data);
  const { pagesYaml: page } = data;
  return (
    <>
      <SEO
        title={page.title}
        description={page.excerpt}
        image={page.image}
        pathname={`${page.path.split("/")[1]}`}
      />

      <Layout>
        <Box as="article" px={[3, 4, 5]}>
          <Container>
            <Box pb={[4, 5, 6]} />

            <Heading as="h1" variant="display">
              {page.title}
            </Heading>
            <Box pb={4} />

            <MDX content={page.content?.body} />
            <Box pb={[4, 5, 6]} />
          </Container>
        </Box>
      </Layout>
    </>
  );
}

export default Page;

export const query = graphql`
  query($id: String!) {
    pagesYaml(id: { eq: $id }) {
      title
      path
      content {
        body
      }
    }
    site {
      siteMetadata {
        postsPrefix
      }
    }
  }
`;
