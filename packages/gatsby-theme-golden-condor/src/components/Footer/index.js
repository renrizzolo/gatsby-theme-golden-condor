import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Box, Container, Divider, Text } from "theme-ui";
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
      <Box py={4} px={["lx.1", "lx.2"]} bg="primary.5">
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
                gap: 3,
              }}
            >
              {links.nodes?.map(({ locations, path, label }) => (
                <Text key={path} as="li">
                  <Link nav py={2} to={path}>
                    {label}
                  </Link>
                </Text>
              ))}
            </Text>
          </Flex>
          <Divider sx={{ borderColor: "gray.2" }} />
          <Box py={3} sx={{ fontSize: 1, textAlign: "center" }}>
            <Flex
              flexDirection="row"
              align="center"
              justifyContent="space-between"
            >
              <Text as="p" sx={{ color: "gray.1", fontSize: 1 }}>
                {`© ${new Date().getFullYear()} ${siteMetadata.author}`}
              </Text>
              <Flex gap={3} direction="row">
                {siteMetadata.social?.map(
                  ({ url, label }) =>
                    url && (
                      <Link key={label} variant="primary" href={url}>
                        {label}
                      </Link>
                    )
                )}
              </Flex>
            </Flex>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
