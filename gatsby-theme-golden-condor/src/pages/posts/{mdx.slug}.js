import React from "react";
import Img from "gatsby-image";
import { graphql, Link } from "gatsby";
import { Container, Box, Heading, Text, Grid, Divider } from "theme-ui";
import Layout from "@components/Layout";
import SEO from "@components/SEO";
import Meta from "@components/Meta";
import MDX from "@components/MDX";
import TableOfContents from "@components/TableOfContents";
import RelatedPosts from "@components/RelatedPosts";

function BlogPost({ data }) {
  console.log(data);

  const post = data.mdx.frontmatter;

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        image={post.image}
        pathname={`${data.postsPrefix}/${post.slug}`}
        article
      />

      <Layout>
        <Box as="article" px={[3, 4, 5]}>
          <Container variant="header">
            <Box pb={[3, 4, 5]} />
            {post.image && (
              <>
                <Box>
                  <Img
                    // style={{
                    //   zIndex: -1,
                    //   marginRight: "-2em",
                    //   marginLeft: "-2em",
                    // }}
                    // imgStyle={{
                    //   "clip-path": "polygon(0 0, 100% 5%, 100% 100%, 0 95%)",
                    // }}
                    fluid={post.image.childImageSharp.fluid}
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
              <Box>
                <MDX content={data.mdx.body} />
              </Box>
              <Box>
                {data.mdx?.tableOfContents?.items && (
                  <TableOfContents headings={data.mdx.tableOfContents.items} />
                )}
              </Box>
            </Grid>
            <Box pb={[3, 4, 5]} />
          </Container>
        </Box>

        {/*
        These are not actually related posts, they're recent posts. 
        we would have to stop using the file system api 
        in order to query posts on the tags
    */}
        <RelatedPosts relatedPosts={data.relatedPosts?.nodes} />
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
        image {
          childImageSharp {
            fluid(maxWidth: 700, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        excerpt
      }
      timeToRead

      tableOfContents
      body
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
