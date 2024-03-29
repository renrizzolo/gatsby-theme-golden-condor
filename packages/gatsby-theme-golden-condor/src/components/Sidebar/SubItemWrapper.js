import React from "react";
import { Flex } from "@components/UI";

const SubItemWrapper = (props) => {
  return (
    <Flex
      as="ul"
      direction="column"
      gap={1}
      sx={{
        pl: 2.5,
        mb: 2,
        borderLeft: 1,
        borderLeftColor: "gray.4",
        position: "relative",
      }}
      {...props}
    />
  );
};

export default SubItemWrapper;
