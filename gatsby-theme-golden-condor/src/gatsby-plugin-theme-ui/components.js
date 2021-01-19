import React from "react";
import { Box, Grid, Divider, Message, Text } from "theme-ui";
import { Button } from "@components/UI";
import Panel from "@components/Panel";
import ImageZoom from "@components/ImageZoom";

export default {
  img: ImageZoom,
  // a: Anchor,
  // blockquote: Blockquote,
  // h1: ({ children, ...rest }) => (
  //   <Heading as="h2" {...rest}>
  //     {children}
  //   </Heading>
  // ), // h1 reserved article title
  // h2: ({ children, ...rest }) => (
  //   <Heading as="h2" {...rest}>
  //     {children}
  //   </Heading>
  // ),
  // h3: ({ children, ...rest }) => (
  //   <Heading as="h3" {...rest}>
  //     {children}
  //   </Heading>
  // ),
  // h4: ({ children, ...rest }) => (
  //   <Heading as="h4" {...rest}>
  //     {children}
  //   </Heading>
  // ),
  // h5: ({ children, ...rest }) => (
  //   <Heading as="h5" {...rest}>
  //     {children}
  //   </Heading>
  // ),
  // h6: ({ children, ...rest }) => (
  //   <Heading as="h6" {...rest}>
  //     {children}
  //   </Heading>
  // ),
  Panel,
  Button,
  Grid,
  Box,
  figure: ({ children, ...props }) => {
    return (
      <Box as="figure" {...props}>
        {children}
      </Box>
    );
  },
  figcaption: ({ children, ...props }) => {
    console.log({ ...props });
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
  // ul: ({ children, ...rest }) => (
  //   <Text as="ul" mb={3} {...rest}>
  //     {children}
  //   </Text>
  // ),
  // li: ({ children, ...rest }) => (
  //   <Text as="li" {...rest}>
  //     {children}
  //   </Text>
  // ),
  // p: ({ children, ...rest }) => (
  //   <Text as="p" mb={3} {...rest}>
  //     {children}
  //   </Text>
  // ),
  // code: Code.Prism,
  // pre: Code.Pre,
  // table: Tables.Table,
  // thead: Tables.Head,
  // th: Tables.HeadCell,
  // td: Tables.Cell,
  // figcaption: Figcaption,
};
