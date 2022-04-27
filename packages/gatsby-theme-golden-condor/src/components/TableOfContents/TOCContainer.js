import React from "react";
import { Box } from "theme-ui";

function TOCContainer({ sx, children, ...props }) {
  return (
    <Box
      px={3}
      py={3}
      sx={{
        listStyleType: "none",
        borderColor: "primary.5",
        borderWidth: 2,
        borderStyle: "solid",
        transition: 1,
        borderRadius: 1,
        bg: "primary.5",
        "&:hover": {
          borderColor: "primary.4",
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}

export default TOCContainer;
