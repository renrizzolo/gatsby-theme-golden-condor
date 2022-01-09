import React from "react";

import { MDXRenderer } from "gatsby-plugin-mdx";
import { Box } from "theme-ui";
import { useColorMode } from "theme-ui";

// there's not much going on here because
// custom components are passed to the MDXProvider via
// gatsby-plugin-theme-ui: src/gatsby-theme-ui/components.js
// and are styled automatically via the theme's styles key

const MDX = ({ content, children, ...props }) => {
  const [colorMode] = useColorMode();
  return (
    <Box
      sx={{
        "h2:hover, h3:hover": {
          "> .heading-anchor": {
            opacity: 1,
          },
        },
        ".heading-anchor": {
          opacity: 0,
          color: "gray.1",
          transition: 1,
          "&:focus": {
            opacity: 1,
            boxShadow: "none",
          },
          "> svg": {
            height: "100%",
            width: 3,
            ml: 1,
            fill: "currentColor",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
          },
        },
      }}
    >
      <MDXRenderer isDark={colorMode === "dark"} {...props}>
        {content}
      </MDXRenderer>
      {children}
    </Box>
  );
};

export default MDX;
