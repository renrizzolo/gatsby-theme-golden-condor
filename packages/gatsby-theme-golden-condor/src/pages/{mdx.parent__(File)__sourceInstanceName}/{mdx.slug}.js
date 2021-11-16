import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { Container, Box, Heading, Grid, Divider } from "theme-ui";
import Layout from "@components/Layout";
import SEO from "@components/SEO";
import Meta from "@components/Meta";
import MDX from "@components/MDX";
import TableOfContents from "@components/TableOfContents";
import RelatedPosts from "@components/RelatedPosts";
import { GridItem } from "@components/UI";
import BreadCrumbs from "@components/BreadCrumbs";
import Sidebar from "@components/Sidebar";
import useThemeOptions from "@hooks/useThemeOptions";

function BlogPost({ data, path }) {
  const { relatedPosts, mdx } = data;
  const { frontmatter: post, parent } = mdx;
  const opts = useThemeOptions(parent.sourceInstanceName);
  const isPage = parent.sourceInstanceName === "page";

  const {
    showTOC,
    showRelatedPosts = !isPage,
    showBreadCrumbs = !isPage,
    meta = !isPage,
    sidebarNav,
    containerVariant = "post",
  } = opts;

  const bodyCols = 12;
  const sidebarCols = sidebarNav ? 1 : 0;
  const TOCCols = showTOC && !post.hideTOC ? 3 : 0;
  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        image={post.image}
        pathname={path}
        article
      />

      <Layout>
        <Box as="article" px={["lx.1", "lx.2"]}>
          <Container variant={containerVariant}>
            <Box pb={["ly.1", "ly.2"]} />
            {showBreadCrumbs && (
              <BreadCrumbs post={mdx} entries={data.collection?.nodes} />
            )}
            <Heading itemProp="heading" as="h1" variant={"display"}>
              {post.title}
            </Heading>

            {post.subTitle && (
              <>
                <Heading as="h2" variant="subHeading">
                  {post.subTitle}
                </Heading>
              </>
            )}
            {post.image && (
              <>
                <Box>
                  <GatsbyImage
                    image={post.image.childImageSharp.gatsbyImageData}
                    alt={post.title}
                  />
                </Box>
                <Box pb={"lx.1"} />
              </>
            )}
            <Box>{meta && <Meta post={mdx} meta={meta} />}</Box>
            <Divider />
            <Box pb={"lx.1"} />
            <Grid variant="base">
              {sidebarNav && (
                <Sidebar
                  options={sidebarNav}
                  currentPath={path}
                  entries={data.collection?.nodes}
                />
              )}

              {mdx?.tableOfContents?.items && showTOC && !post.hideTOC && (
                <GridItem span={[13, `10 / span 4`]} order={[1, 3]}>
                  <TableOfContents headings={mdx.tableOfContents.items} />
                </GridItem>
              )}

              <GridItem
                span={[
                  13,
                  bodyCols - TOCCols,
                  bodyCols - sidebarCols - TOCCols,
                ]}
                order={[3, 1, 1]}
              >
                <MDX content={mdx.body} embeddedImages={post.embeddedImages} />
              </GridItem>
            </Grid>
            <Box pb={[4, 5, 6]} />
          </Container>
        </Box>
        {showRelatedPosts && (
          <RelatedPosts
            posts={relatedPosts?.nodes}
            category={post.category?.slug}
            tags={post.tags}
            collectionName={parent.sourceInstanceName}
          />
        )}
      </Layout>
    </>
  );
}

export default BlogPost;

export const query = graphql`
  query ($slug: String!, $id: String, $parent__sourceInstanceName: String) {
    mdx(slug: { eq: $slug }, collection: { eq: $parent__sourceInstanceName }) {
      ...mdxContent
    }
    site {
      siteMetadata {
        collections
      }
    }
    relatedPosts: allMdx(
      limit: 7
      filter: {
        id: { ne: $id }
        collection: { eq: $parent__sourceInstanceName }
      }
      sort: { fields: frontmatter___date }
    ) {
      nodes {
        ...postPreview
      }
    }
    collection: allFile(
      filter: {
        extension: { in: ["md", "mdx"] }
        sourceInstanceName: { eq: $parent__sourceInstanceName }
      }
      sort: { fields: [childrenMdx___frontmatter___date], order: DESC }
    ) {
      nodes {
        childMdx {
          childEntries {
            ...mdxLink
          }
          ...mdxLink
        }
      }
    }
  }
`;
