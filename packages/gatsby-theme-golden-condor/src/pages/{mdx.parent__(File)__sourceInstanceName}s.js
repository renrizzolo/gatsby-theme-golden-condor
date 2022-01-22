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

function CollectionPage(props) {
  console.log(props);
  const { data, params, path, pageContext } = props;
  const { disableIndexPage } = useThemeOptions(
    params.parent__sourceInstanceName
  );
  const filteredPosts = usePosts({
    posts: data.collection?.nodes,
    collectionName: params.parent__sourceInstanceName,
  });
  console.log(filteredPosts);
  const { index } = data;
  return disableIndexPage ? (
    <Redirect noThrow to="/" />
  ) : (
    <HomePage
      data={index}
      posts={filteredPosts}
      path={path}
      sourceInstanceName={pageContext.parent__sourceInstanceName}
    />
  );
}

export default CollectionPage;

export const query = graphql`
  query ($parent__sourceInstanceName: String) {
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
    ) {
      nodes {
        childMdx {
          ...postPreview
        }
      }
    }
  }
`;
