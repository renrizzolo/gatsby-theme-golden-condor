import PropTyes from "prop-types";
import React from "react";
import { Box, Text } from "theme-ui";
import { Link } from "@components/UI";

function HeadingsList({ items, level, setId }) {
  // tableOfContents isn't limited by level
  // but gatsby-remark-autolink-headers is.
  // This will prevent showing e.g h4s that
  // won't be linkable
  return level > 3 || !items || !items.length ? null : (
    <Box
      as="ul"
      sx={{
        listStyleType: "none",
        p: 0,
      }}
    >
      {items &&
        items.map(({ title, url, items }) =>
          title ? (
            <Text as="li" key={title}>
              <Link
                variant="primary"
                href={url}
                onClick={() => setId(url.substring(1))}
                sx={{
                  display: "block",
                  "&:hover": {
                    fontWeight: "bold",
                  },
                  "&.active": {
                    fontWeight: "bold",
                  },
                  lineHeight: 2,
                  fontSize: 1,
                  textDecoration: "none",
                  ml: level === 3 ? 2.5 : 0,
                }}
              >
                {title}
              </Link>
              <HeadingsList items={items} level={level + 1} setId={setId} />
            </Text>
          ) : null
        )}
    </Box>
  );
}

HeadingsList.propTypes = {
  items: PropTyes.array,
  level: PropTyes.number.isRequired,
  setId: PropTyes.func.isRequired,
};

export default HeadingsList;
