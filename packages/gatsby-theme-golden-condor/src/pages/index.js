import React from "react";
import HomePage from "@components/HomePage";
import { graphql } from "gatsby";

const Index = ({ data, path }) => {
  const { home, posts } = data;

  return <HomePage data={home} posts={posts} path={path} />;
};

export default Index;

//main index pages query
export const query = graphql`
  query ($collectionsNotIn: [String]) {
    home: file(
      relativePath: { in: ["index.mdx", "index.md"] }
      sourceInstanceName: { eq: "page" }
    ) {
      childMdx {
        path
        body
        parent {
          ... on File {
            sourceInstanceName
          }
        }
        frontmatter {
          ...recentPostsConfig
        }
      }
    }
    posts: allFile(
      filter: {
        extension: { in: ["md", "mdx"] }
        sourceInstanceName: { nin: $collectionsNotIn }
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
