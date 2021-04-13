import { Link } from "gatsby";
import React from "react";
import { Badge } from "theme-ui";

function Tags({ tags, ...props }) {
  return (
    <>
      {tags.map((tag) => (
        <Badge
          key={tag}
          // as={Link}
          // to={`/tags/${tag}`}
          variant="secondaryLight"
          mr={1}
          sx={{
            textDecoration: "none",
            // "&:hover": {
            //   bg: "secondary.3",
            // },
          }}
          {...props}
        >
          {tag}
        </Badge>
      ))}
    </>
  );
}

export default Tags;
