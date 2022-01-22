import React from "react";
import { Container, Heading, Box } from "theme-ui";
import Layout from "@components/Layout";
import MDX from "@components/MDX";
import PostsGrid from "@components/PostsGrid";
import SEO from "@components/SEO";
import useGetPostOptions from "@hooks/useGetPostOptions";
import AfterPostsGrid from "@components/ContentInjection/AfterPostsGrid";

const HomePage = ({ data, posts, path, sourceInstanceName }) => {
  const recentPosts = data?.childMdx?.frontmatter?.recentPosts || {};
  const postProps = useGetPostOptions(recentPosts);
  return (
    <>
      {data?.childMdx ? (
        <SEO
          title={data.childMdx.frontmatter.title}
          description={data.excerpt}
          image={data.image}
          pathname={path}
        />
      ) : (
        <SEO
          title={`Entries in ${sourceInstanceName}`}
          description={""}
          pathname={path}
        />
      )}
      <Layout>
        {data?.childMdx && (
          <Box p={4}>
            <Container>
              <MDX
                content={data.childMdx.body}
                embeddedImages={data.childMdx.frontmatter.embeddedImages}
              />
            </Container>
          </Box>
        )}
        {(!!recentPosts || !data) && posts && (
          <Box p={4}>
            <Container
              as="section"
              variant={recentPosts.container || "container"}
            >
              <Heading variant="jumbo">
                {recentPosts.heading ||
                  `Latest ${data?.childMdx?.collection || sourceInstanceName}s`}
              </Heading>
              <Box pb={[3, 5]} />

              <PostsGrid {...postProps} posts={posts.nodes || posts} />
              <AfterPostsGrid
                path={path}
                type={"home-page"}
                colletion={data?.childMdx?.collection || sourceInstanceName}
              />
              <Box pb={[3, 5]} />
            </Container>
          </Box>
        )}
      </Layout>
    </>
  );
};

export default HomePage;
