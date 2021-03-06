import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import { Container, Box, Heading, Text, Grid, Divider } from "theme-ui";
import Layout from "@components/Layout";
import SEO from "@components/SEO";
import Meta from "@components/Meta";
import MDX from "@components/MDX";
import TableOfContents from "@components/TableOfContents";
import RelatedPosts from "@components/RelatedPosts";
import { Flex } from "@components/UI";

function BlogPost({ data }) {
  console.log(data);

  const post = data.mdx.frontmatter;

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        image={post.image}
        pathname={`${data.parent?.sourceInstanceName || "post"}/${post.slug}`}
        article
      />

      <Layout>
        <Box as="article" px={[3, 4, 5]}>
          <Container variant="header">
            <Box pb={[3, 4, 5]} />
            {post.image && (
              <>
                <Box>
                  <GatsbyImage
                    // style={{
                    //   zIndex: -1,
                    //   marginRight: "-2em",
                    //   marginLeft: "-2em",
                    // }}
                    // imgStyle={{
                    //   "clip-path": "polygon(0 0, 100% 5%, 100% 100%, 0 95%)",
                    // }}
                    image={post.image.childImageSharp.gatsbyImageData}
                    alt={post.title}
                  />
                </Box>
                <Box pb={[3, 4]} />
              </>
            )}
            <Box>
              <Meta post={data.mdx} />
              <Heading itemProp="heading" as="h1" variant={"display"}>
                {post.title}
              </Heading>

              {post.subHeading && (
                <>
                  <Heading as="h2" variant="subHeading">
                    <MDX content={post.subHeading} />
                  </Heading>
                </>
              )}
            </Box>
            <Box pb={[3, 4]} />
            <Divider />
            <Box pb={[3, 4]} />
            <Grid variant="articleWithSidebar">
              <Flex order={[2, 2, 2, 1]}>
                <MDX content={data.mdx.body} />
              </Flex>
              <Flex order={[1, 1, 1, 2]}>
                {data.mdx?.tableOfContents?.items && (
                  <TableOfContents headings={data.mdx.tableOfContents.items} />
                )}
              </Flex>
            </Grid>
            <Box pb={[4, 5, 6]} />
          </Container>
        </Box>

        {/*
        These are not actually related posts, they're recent posts. 
        we would have to stop using the file system api 
        in order to query posts on the tags
      */}

        <RelatedPosts posts={data.relatedPosts?.nodes} />
      </Layout>
    </>
  );
}

export default BlogPost;

export const query = graphql`
  query($slug: String!, $id: String) {
    mdx(slug: { eq: $slug }) {
      frontmatter {
        date(formatString: "MMMM Do, YYYY")
        title
        subHeading
        author
        tags
        category {
          name
          slug
        }
        image {
          childImageSharp {
            gatsbyImageData(
              width: 700
              height: 400
              aspectRatio: 1.666
              layout: FULL_WIDTH
            )
          }
        }
        excerpt
      }
      timeToRead
      tableOfContents
      body
      parent {
        __typename
        ... on File {
          sourceInstanceName
        }
      }
    }
    site {
      siteMetadata {
        postsPrefix
      }
    }
    relatedPosts: allMdx(limit: 6, filter: { id: { ne: $id } }) {
      nodes {
        ...postPreview
      }
    }
  }
`;
