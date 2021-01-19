import React from "react";
import { Box, Heading, Text, Container } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import { Link, Flex } from "@components/UI";

import ToggleColourMode from "../ToggleColourMode";

const Nav = () => {
  const data = useStaticQuery(graphql`
    query SiteNav {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
      allPage(filter: { locations: { in: "top" } }) {
        nodes {
          title
          path
        }
      }
    }
  `);
  const { site, allPage: pages } = data;
  return (
    <Box as="nav" px={3} py={4} bg="navBar">
      <Container>
        <Flex flexDirection="row" align="center">
          <Heading>
            <Link to="/" color="white" nav sx={{ textDecoration: "none" }}>
              {site.siteMetadata.title}
            </Link>
          </Heading>
          <Box>
            <Flex
              as="ul"
              flexDirection="row"
              sx={{
                margin: 0,
                "list-style-type": "none",
              }}
            >
              {pages.nodes.map((page) => (
                <Text as="li">
                  <Link color="white" nav mx={2} p={2} to={page.path}>
                    {page.title}
                  </Link>
                </Text>
              ))}
            </Flex>
          </Box>
          <Box ml="auto">
            <ToggleColourMode />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Nav;
