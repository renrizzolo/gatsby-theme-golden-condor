import React from "react";
import { Badge } from "theme-ui";
import { Flex } from "@components/UI";

function Tags({ tags, ...props }) {
  return (
    <Flex flexDirection="row" gap={1}>
      {tags.map((tag) => (
        <Badge
          key={tag}
          variant="secondaryLight"
          sx={{
            textDecoration: "none",
            fontSize: 1,
          }}
          {...props}
        >
          {tag}
        </Badge>
      ))}
    </Flex>
  );
}

export default Tags;
