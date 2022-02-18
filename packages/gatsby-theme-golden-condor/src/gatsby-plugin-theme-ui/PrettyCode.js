import React from "react";
import { PropTypes } from "prop-types";
import { Box, useThemeUI } from "theme-ui";

const PrettyCode = ({ children, element, ...props }) => {
  const { theme } = useThemeUI();
  // in the case of multiple themes, the code blocks will be wrapped with this span
  // so we can use this to detect multiple themes and only apply the hiding css in that case
  console.log(props, element);
  if (props["data-rehype-pretty-code-fragment"] != null) {
    return (
      <Box
        as={element}
        sx={{
          "[data-rehype-pretty-code-title]": {
            fontFamily: "heading",
            fontWeight: "bold",
            fontSize: 0,
            display: "inline-flex",
            color: "primary.1",
            py: 1,
          },
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
        {...props}
      >
        {children}
      </Box>
    );
  }

  return element === "span" ? (
    <span {...props} children={children} />
  ) : (
    <div {...props} children={children} />
  );
};

PrettyCode.propTypes = {
  element: PropTypes.oneOf(["span", "div"]),
};

export default PrettyCode;
