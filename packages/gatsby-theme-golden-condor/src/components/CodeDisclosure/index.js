import React from "react";
import { Box } from "theme-ui";
import { keyframes } from "@emotion/react";
const fadeIn = keyframes({
  from: { opacity: 0, transform: `translateY(-3px)` },
  to: { opacity: 1, transform: `translateY(0px)` },
});

/***/
/* applies styles to details with pre>code children */
/* use <summary data-summary="my summary"/> to show the summary on hover / when open only
/* For consistent custom indentation, use <CodeSummary summary=""/> intead of <summary data-summary=""/>, 
/* and the indent={n} prop where n is amout of characters to indent by
/***/

const CodeDisclosure = ({ children }) => {
  return (
    <Box
      sx={{
        pre: { margin: 0, transition: 1 },
        details: {
          code: { py: 0, borderRadius: 0 },
          position: "relative",
          "&[open]": {
            // doesn't seem to animate consistently after the first open?
            "> [data-rehype-pretty-code-fragment] pre code .line": {
              animation: `${fadeIn} 0.45s ease`,
            },
            "> summary[data-summary]:before": { opacity: 1 },
            "> summary": {
              mb: 0,
            },
          },
        },
        summary: {
          // simulate removal of sibling code top/bottom padding
          mt: -3,
          mb: -3,
          cursor: "pointer",
          fontFamily: "monospace",
          bg: "muted",
          color: "primary.2",
          py: 1,
          pr: 3,
          "&:not([data-indent])": {
            pl: 3,
          },
          "&:focus": {
            outline: "none",
            boxShadow: `2px 0px 0px 0px inset currentColor`,
          },
          "&[data-summary]:before": {
            transition: 1,
            content: "attr(data-summary)",
            opacity: 0.5,
            paddingLeft: "8px",
            paddingRight: "8px",
            marginTop: "-26px",
            marginLeft: 2,
            width: "max-content",
            display: "block",
          },
          "&[data-summary]:hover:before": { opacity: 1 },

          "&::marker": {
            color: "primary.3",
          },
        },
      }}
    >
      {children}
    </Box>
  );
};

export default CodeDisclosure;
