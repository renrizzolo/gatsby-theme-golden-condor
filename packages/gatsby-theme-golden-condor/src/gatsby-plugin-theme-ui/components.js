import React from "react";
import {
  Container,
  Box,
  Grid,
  Divider,
  Message,
  Text,
  Heading,
  useThemeUI,
  useColorMode,
} from "theme-ui";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { Button, Caption, GridItem, Link } from "@components/UI";
import Panel from "@components/Panel";
import InlineCode from "./InlineCode";

export default {
  Container,
  Panel,
  Link,
  Button,
  Grid,
  GridItem,
  Box,
  Text,
  Heading,
  Caption,
  GatsbyImage,
  getImage,
  figure: ({ children, ...props }) => {
    return (
      <Box as="figure" {...props}>
        {children}
      </Box>
    );
  },
  figcaption: ({ children, ...props }) => {
    return (
      <Text
        as="figcaption"
        color="gray.1"
        mt={1}
        sx={{ fontSize: 1 }}
        mb={3}
        {...props}
      >
        {children}
      </Text>
    );
  },
  blockquote: ({ children, ...rest }) => (
    <Message variant="default" {...rest}>
      {children}
    </Message>
  ),
  hr: Divider,
  span(props) {
    return <InlineCode {...props} />;
  },
  table(props) {
    return (
      <Box
        sx={{
          display: "block",
          width: "100%",
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <table {...props} />
      </Box>
    );
  },
};
