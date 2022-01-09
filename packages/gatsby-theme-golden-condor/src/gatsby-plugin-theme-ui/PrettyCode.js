import React from "react";
import { Box, useThemeUI } from "theme-ui";

const PrettyCode = ({ children, wrapperProps, codeProps, ...props }) => {
  const { theme } = useThemeUI();
  // in the case of multiple themes, the code blocks will be wrapped with this span
  // so we can use this to detect multiple themes and only apply the hiding css in that case
  if (props["data-rehype-pretty-code-fragment"] != null) {
    return (
      <Box
        as="span"
        sx={{
          "html.default &": {
            "[data-theme='dark']": {
              display: "none",
            },
          },
          "html.dark &": {
            "[data-theme='light']": {
              display: "none",
            },
          },
          // direct code child is inline code
          // (code blocks are styled in theme.styles.pre.code)
          " > code": {
            ...theme.styles.inlineCode,
            "html.dark &": {
              backgroundColor: "dark",
            },
            "html.default &": {
              backgroundColor: "light",
            },
          },
        }}
        {...wrapperProps}
        {...props}
      >
        {children}
      </Box>
    );
  }

  return <span {...props} children={children} />;
};

export default PrettyCode;
