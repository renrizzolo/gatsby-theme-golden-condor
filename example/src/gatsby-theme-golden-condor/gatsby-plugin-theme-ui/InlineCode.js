import React from "react";
import { useThemeUI } from "theme-ui";
import PrettyCode from "gatsby-theme-golden-condor/src/gatsby-plugin-theme-ui/PrettyCode";

const PrettyCodeShadowed = (props) => {
  const { theme } = useThemeUI();
  return (
    <PrettyCode
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

export default PrettyCodeShadowed;
