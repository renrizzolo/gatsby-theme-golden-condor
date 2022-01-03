import React from "react";
import { Text } from "@theme-ui/components";

const Caption = ({ children }) => (
  <Text as="p" sx={{ fontSize: 1, mb: 2, color: "gray.2" }}>
    {children}
  </Text>
);

export default Caption;
