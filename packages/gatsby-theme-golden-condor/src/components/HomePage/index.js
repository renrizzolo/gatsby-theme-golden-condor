import React from "react";
import { Container, Heading, Box } from "theme-ui";
import Layout from "@components/Layout";
import MDX from "@components/MDX";
import PostsGrid from "@components/PostsGrid";
import SEO from "@components/SEO";
import useGetPostOptions from "@hooks/useGetPostOptions";

const HomePage = ({ data, posts, path }) => {
  const {
    childMdx: { body, frontmatter },
  } = data;
  const { recentPosts = {} } = frontmatter;
  const postProps = useGetPostOptions(recentPosts);

  return (
    <>
      {data && (
        <SEO
          title={data.title}
          description={data.excerpt}
          image={data.image}
          pathname={path}
        />
      )}
      <Layout>
        {data && (
          <Box p={4}>
            <Container>
              <MDX content={body} />
            </Container>
          </Box>
        )}
        {frontmatter?.recentPosts && (
          <Box p={4}>
            <Container as="section" variant={recentPosts.container || "post"}>
              <Heading variant="jumbo">
                {recentPosts.heading || "Latest Posts"}
              </Heading>
              <Box pb={[3, 5]} />

              <PostsGrid {...postProps} posts={posts.nodes || posts} />
              <Box pb={[3, 5]} />
            </Container>
          </Box>
        )}
      </Layout>
    </>
  );
};

export default HomePage;
