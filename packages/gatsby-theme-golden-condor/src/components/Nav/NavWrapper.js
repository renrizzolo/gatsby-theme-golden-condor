import React from "react";
import { Box } from "theme-ui";

const NavWrapper = ({ isOpen, children, ...props }) => {
  return (
    <Box
      as="nav"
      px={["lx.1", "lx.2"]}
      py={[2, 3]}
      bg={"primary.5"}
      sx={{
        visibility: [isOpen ? "visible" : "hidden", "visible"],
        opacity: [isOpen ? 1 : 0, 1],
        transform: [
          isOpen ? "translateY(0)" : "translateY(-5px)",
          "translateY(0)",
        ],

        transition: 1,
        position: ["absolute", "relative"],
        zIndex: 1,
        width: "100%",
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default NavWrapper;
