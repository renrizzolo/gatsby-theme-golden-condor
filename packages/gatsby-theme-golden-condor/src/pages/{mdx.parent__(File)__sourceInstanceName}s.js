import React from "react";
import { Redirect } from "@reach/router";
import { graphql } from "gatsby";
import usePosts from "@hooks/usePosts";
import HomePage from "@components/HomePage";
import useThemeOptions from "@hooks/useThemeOptions";

function CollectionPage(props) {
  const { data, params, path, pageContext } = props;
  const { disableIndexPage } = useThemeOptions(
    params.parent__sourceInstanceName
  );
  const filteredPosts = usePosts({
    posts: data.collection?.nodes,
    collectionName: params.parent__sourceInstanceName,
  });
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
