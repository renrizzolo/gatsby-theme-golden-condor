import React from "react";
import { Container, Box, Heading, Text, Flex, Grid } from "theme-ui";
import { Link } from "@components/UI";

function TableOfContents({ headings, label }) {
  return (
    <Box
      as="aside"
      px={3}
      py={3}
      sx={{
        top: 4,
        position: "sticky",
        listStyleType: "none",
        borderColor: "primary.1",
        borderWidth: 2,
        borderStyle: "solid",
      }}
    >
      <Box
        as="ul"
        sx={{
          listStyleType: "none",
          p: 0,
        }}
      >
        <Heading as="h3" mb={2} sx={{ fontFamily: "body" }}>
          {label}
        </Heading>
        {headings.map(({ title, url }) => (
          <Text as="li" key={title}>
            <Link
              variant="dark"
              href={url}
              sx={{
                display: "block",
                // fontWeight: "bold",
                fontSize: 2,
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
