import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Box, Container, Text } from "theme-ui";
import { Flex, Link } from "@components/UI";
import LogoFooter from "@components/Logo/LogoFooter";

function Footer() {
  const data = useStaticQuery(graphql`
    query FooterNav {
      site {
        siteMetadata {
          author
          social {
            label
            url
          }
        }
      }
      allNavigationYaml(filter: { locations: { in: "footer" } }) {
        nodes {
          label
          path
        }
      }
    }
  `);

  const {
    site: { siteMetadata },
    allNavigationYaml: links,
  } = data;

  return (
    <Box as="footer">
      <Box py={4} px={["lx.1", "lx.2"]} bg="dark">
        <Container>
          <Flex
            align="center"
            justify="center"
            flexDirection={["column", "row"]}
          >
            <LogoFooter mr={[0, 2]} />

            <Text
              as="ul"
              p={0}
              ml={[0, "auto"]}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                listStyleType: "none",
              }}
            >
              {links.nodes?.map(({ locations, path, label }) => (
                <Text key={path} as="li">
                  <Link
                    variant="light"
                    nav
                    p={2}
                    sx={{ fontSize: 1 }}
                    to={path}
                  >
                    {label}
                  </Link>
                </Text>
              ))}
            </Text>
          </Flex>
        </Container>
      </Box>
      <Box
        py={3}
        px={["lx.1", "lx.2"]}
        bg="primary.2"
        sx={{ fontSize: 1, textAlign: "center" }}
      >
        <Flex flexDirection="row" align="center" justifyContent="space-between">
          <Text as="p" sx={{ color: "muted", fontSize: 1 }}>
            {`© ${new Date().getFullYear()} ${siteMetadata.author}`}
          </Text>
          <Box>
            {siteMetadata.social?.map(
              ({ url, label }) =>
                url && (
                  <Link key={label} variant="primaryLight" mr={2} href={url}>
                    {label}
                  </Link>
                )
            )}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Footer;
