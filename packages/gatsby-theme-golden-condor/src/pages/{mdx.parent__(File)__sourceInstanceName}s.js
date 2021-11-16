import React from "react";
import { Redirect } from "@reach/router";
import { graphql } from "gatsby";
import { Container, Box, Heading } from "theme-ui";
import Layout from "@components/Layout";
import SEO from "@components/SEO";
import usePosts from "@hooks/usePosts";
import PostsGrid from "@components/PostsGrid";
import HomePage from "@components/HomePage";
import useThemeOptions from "@hooks/useThemeOptions";

function BlogPosts(props) {
  const { data, params, path } = props;
  const { disableIndexPage } = useThemeOptions(
    params.parent__sourceInstanceName
  );
  const title = `Latest ${params.parent__sourceInstanceName}s`;
  const filteredPosts = usePosts({
    posts: data.collection?.nodes,
    collectionName: params.parent__sourceInstanceName,
  });
  const { index } = data;
  return disableIndexPage ? (
    <Redirect noThrow to="/" />
  ) : (
    <>
      {index ? (
        <HomePage data={index} posts={filteredPosts} path={path} />
      ) : (
        <Layout>
          <>
            <SEO title={title} pathname={path} />
            <Box px={["lx.1", "lx.2"]} py={["ly.1", "ly.2"]}>
              <Container variant="container">
                <Heading mb={5} variant="jumbo" as="h1">
                  {title}
                </Heading>
                <PostsGrid posts={filteredPosts} />
              </Container>
            </Box>
          </>
        </Layout>
      )}
    </>
  );
}

export default BlogPosts;

export const query = graphql`
  query ($parent__sourceInstanceName: String, $skip: Int = 0, $limit: Int = 6) {
    index: file(
      relativePath: { in: ["index.mdx", "index.md"] }
      sourceInstanceName: { eq: $parent__sourceInstanceName }
    ) {
      childMdx {
        ...mdxContent
        frontmatter {
          ...recentPostsConfig
        }
      }
    }
    collection: allFile(
      filter: {
        extension: { in: ["md", "mdx"] }
        sourceInstanceName: { eq: $parent__sourceInstanceName }
      }
      sort: { fields: [childMdx___frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      nodes {
        childMdx {
          ...postPreview
        }
      }
    }
  }
`;
