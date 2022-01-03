import React from "react";
import { Flex } from "@components/UI";

const NavLinksWrapper = ({ children, sx, ...props }) => {
  return (
    <Flex
      as="ul"
      flexDirection={["column", "row"]}
      sx={{
        margin: 0,
        listStyleType: "none",
        paddingLeft: [0, 3],
        width: ["100%", "auto"],
        ...sx,
      }}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavLinksWrapper;
