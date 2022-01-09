import React from "react";
import {
  Container,
  Box,
  Grid,
  Divider,
  Message,
  Text,
  Heading,
  AspectRatio,
} from "theme-ui";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { Button, Caption, GridItem, Link } from "@components/UI";
import Panel from "@components/Panel";
import CodeDisclosure from "@components/CodeDisclosure";
import CodeSummary from "@components/CodeDisclosure/CodeSummary";
import PrettyCode from "./PrettyCode";

const components = {
  Container,
  Panel,
  Link,
  Button,
  Grid,
  GridItem,
  Box,
  Divider,
  AspectRatio,
  Text,
  Heading,
  Caption,
  CodeDisclosure,
  CodeSummary,
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
    return <PrettyCode {...props} />;
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

export default components;
