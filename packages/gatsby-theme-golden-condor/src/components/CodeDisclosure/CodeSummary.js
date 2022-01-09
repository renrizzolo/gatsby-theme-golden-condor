import React from "react";
import { Box, useThemeUI } from "theme-ui";
// mostly styled in CodeDisclosure so using regular <summary> is still styled
const CodeSummary = ({ summary, indent, sx, children }) => {
  const { theme } = useThemeUI();
  return (
    <Box
      sx={{
        paddingLeft: indent
          ? `calc(${theme.space[3]}px + ${indent} * 1ch)`
          : undefined,
        ...sx,
      }}
      as="summary"
      data-summary={summary}
      data-indent={indent}
    >
      {children}
    </Box>
  );
};

export default CodeSummary;
