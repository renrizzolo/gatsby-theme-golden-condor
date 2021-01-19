import React from "react";
import { useStaticQuery } from "gatsby";
import { Box, Container, Text, Grid } from "theme-ui";
import { Flex, Button, Link } from "@components/UI";

function Footer() {
  const data = useStaticQuery(graphql`
    query FooterNav {
      site {
        siteMetadata {
          title
          author
          description
          siteUrl
          social {
            name
            url
          }
        }
      }
      allPage(filter: { locations: { in: "footer" } }) {
        nodes {
          title
          path
          locations
        }
      }
    }
  `);
  const {
    site: { siteMetadata },
    allPage: pages,
  } = data;
  console.log(data);
  return (
    <Box as="footer">
      <Box p={4} bg="muted">
        <Container>
          <Flex align="center" flexDirection={["column", "row"]}>
            <Text as="p">© {siteMetadata.author}</Text>
            <Text
              as="ul"
              p={0}
              ml="auto"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                listStyleType: "none",
              }}
            >
              {pages.nodes?.map(
                ({ locations, path, title }) =>
                  locations.includes("footer") && (
                    <Text key={path} as="li">
                      <Link variant="dark" nav ml={2} p={2} to={path}>
                        {title}
                      </Link>
                    </Text>
                  )
              )}
            </Text>
          </Flex>
        </Container>
      </Box>
      <Box p={2} bg="primary.1">
        <Flex flexDirection="row" align="center">
          {siteMetadata.social?.map(({ url, name }) => (
            <Link variant="light" mr={2} href={url}>
              {name}
            </Link>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

export default Footer;
