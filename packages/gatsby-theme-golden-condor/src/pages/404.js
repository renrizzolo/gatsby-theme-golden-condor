import Layout from "@components/Layout";
import { Button } from "@components/UI";
import { Box, Container, Heading } from "@theme-ui/components";
import React from "react";

export default () => (
  <Layout>
    <Container>
      <Box p={4} sx={{ textAlign: "center" }}>
        <Box pb={4} />
        <Heading variant="jumbo" mb={5}>
          404 - page not found
        </Heading>
        <Box>
          <Button to="/">Home</Button>
        </Box>
        <Box pb={8} />
      </Box>
    </Container>
  </Layout>
);
