import React from "react";
import { useThemeUI } from "theme-ui";
import InlineCode from "gatsby-theme-golden-condor/src/gatsby-plugin-theme-ui/InlineCode";

const InlineCodeShadowed = (props) => {
  const { theme } = useThemeUI();
  return (
    <InlineCode
      {...props}
      codeProps={{
        sx: {
          ...theme.styles.inlineCode,
          // as both themes in mdxPretty.js are dark themes,
          // override the default behaviour of light bg for light theme and dark bg for dark theme.
          backgroundColor: "dark",
        },
      }}
    />
  );
};

export default InlineCodeShadowed;
