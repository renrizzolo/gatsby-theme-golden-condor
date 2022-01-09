import React from "react";
import { Container, Heading, Box } from "theme-ui";
import Layout from "@components/Layout";
import MDX from "@components/MDX";
import PostsGrid from "@components/PostsGrid";
import SEO from "@components/SEO";
import useGetPostOptions from "@hooks/useGetPostOptions";
import AfterPostsGrid from "@components/ContentInjection/AfterPostsGrid";

const HomePage = ({ data, posts, path }) => {
  const {
    childMdx: { collection, body, frontmatter },
  } = data;
  const { recentPosts = {} } = frontmatter;
  const postProps = useGetPostOptions(recentPosts);

  return (
    <>
      {data && (
        <SEO
          title={frontmatter.title}
          description={data.excerpt}
          image={data.image}
          pathname={path}
        />
      )}
      <Layout>
        {data && (
          <Box p={4}>
            <Container>
              <MDX content={body} embeddedImages={frontmatter.embeddedImages} />
            </Container>
          </Box>
        )}
        {frontmatter?.recentPosts && (
          <Box p={4}>
            <Container as="section" variant={recentPosts.container || "post"}>
              <Heading variant="jumbo">
                {recentPosts.heading || `Latest ${frontmatter.collection}s`}
              </Heading>
              <Box pb={[3, 5]} />

              <PostsGrid {...postProps} posts={posts.nodes || posts} />
              <AfterPostsGrid
                path={path}
                type={"home-page"}
                colletion={collection}
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
