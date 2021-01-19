import TableOfContents from "@components/TableOfContents";
import React from "react";
import PropTypes from "prop-types";
import { Link, Flex } from "@components/UI";
import Tags from "../Tags";
import Panel from "../Panel";

import { Container, Box, Heading, Text, Grid } from "theme-ui";

function Meta({ post }) {
  const {
    timeToRead,
    tableOfContents,
    frontmatter: { author, date, category, tags },
  } = post;
  const headings = tableOfContents?.items;
  console.log(headings);
  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      {/* <Box>
        {category && (
          <>
            <Link to={`/category/${category}`}>{category}</Link>
          </>
        )}
      </Box> */}

      <Box pb={1}>
        <Text
          color="gray.3"
          mb={2}
          sx={{ fontWeight: 600, fontSize: 0, fontFamily: "heading" }}
        >
          <Box as="span" color="gray.0">
            {author && (
              <>
                <Box itemProp="author" as="span" sx={{ whiteSpace: "nowrap" }}>
                  {author}
                </Box>
              </>
            )}
          </Box>
          {" / "}
          <Box as="span" color="gray.1" sx={{ whiteSpace: "nowrap" }}>
            {date}
          </Box>
          {" / "}
          <Box as="span" color="gray.2" sx={{ whiteSpace: "nowrap" }}>
            {timeToRead && `${timeToRead} minute read`}
          </Box>
        </Text>
      </Box>

      <Flex flexDirection="row" flexWrap="wrap" align="start">
        {tags && <Tags mb={1} tags={tags} />}
      </Flex>
      {/* {headings && (
        <TableOfContents headings={headings} label={"Table Of Contents"} />
      )} */}
    </Flex>
  );
}

Meta.propTypes = {
  post: PropTypes.object,
};

export default Meta;
