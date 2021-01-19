import React from "react";
import { Container, Box, Heading, Text, Flex, Grid } from "theme-ui";
import { Link } from "@components/UI";

function TableOfContents({ headings, label }) {
  return (
    <Box
      as="aside"
      mt={3}
      px={3}
      py={3}
      bg={"muted"}
      sx={{
        top: 4,
        position: "sticky",
        listStyleType: "none",
      }}
    >
      <Box
        as="ul"
        sx={{
          listStyleType: "none",
          p: 0,
        }}
      >
        <Heading as="h3">{label}</Heading>
        {headings.map(({ title, url }) => (
          <Text as="li">
            <Link
              variant="secondary"
              href={url}
              sx={{
                display: "block",
                fontWeight: "bold",
                fontSize: 1,
                textDecoration: "none",
                py: 2,
                "&:lastOfType": {
                  pb: 0,
                },
              }}
            >
              {title}
            </Link>
          </Text>
        ))}
      </Box>
    </Box>
  );
}
TableOfContents.defaultProps = {
  label: "Table Of Contents",
};
export default TableOfContents;
