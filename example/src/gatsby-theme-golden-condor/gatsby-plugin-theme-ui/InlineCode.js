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
          backgroundColor: "dark",
        },
      }}
    />
  );
};

export default InlineCodeShadowed;
