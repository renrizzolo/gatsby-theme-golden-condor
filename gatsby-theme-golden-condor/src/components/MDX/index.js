import React from "react";

import { MDXRenderer } from "gatsby-plugin-mdx";
// import { MDXProvider } from "@mdx-js/react";

import { useColorMode } from "theme-ui";
import styled from "@emotion/styled";

// there's not much going on here because
// custom components are passed to the MDXProvider via
// gatsby-plugin-theme-ui: src/gatsby-theme-ui/components.js
// and are styled automatically via the theme's styles key

const MDX = ({ content, children, ...props }) => {
  const [colorMode] = useColorMode();

  return (
    <MDXWrapper>
      <MDXRenderer isDark={colorMode === "dark"} {...props}>
        {content}
      </MDXRenderer>
      {children}
    </MDXWrapper>
  );
};

export default MDX;

const MDXWrapper = styled("div")`
  .heading-anchor {
    color: ${({ theme }) => theme.colors.gray[1]};
    svg {
      fill: currentColor;
    }
  }
`;
