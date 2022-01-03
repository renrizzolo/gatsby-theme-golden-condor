import React from "react";
import PropTypes from "prop-types";
import { Box, Text } from "theme-ui";
import { Flex } from "@components/UI";
import Tags from "../Tags";
import styled from "@emotion/styled";

const TextWrapper = styled(Box)`
  white-space: nowrap;
`;
function Meta({ post, meta: metaOpts }) {
  const {
    timeToRead,
    frontmatter: { author, date, tags },
  } = post;

  const meta = {
    author: true,
    date: true,
    timeToRead: true,
    tags: true,
    ...metaOpts,
  };

  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <Box pb={1}>
        <Text
          color="gray.1"
          mb={2}
          sx={{ fontWeight: 600, fontSize: 1, fontFamily: "heading" }}
        >
          <Box mb={1}>
            {meta.author && author && (
              <Box as="span" color="gray.0">
                <TextWrapper itemProp="author" as="span">
                  {author}
                </TextWrapper>
              </Box>
            )}
          </Box>
          <Box color="gray.2" sx={{ fontSize: 0 }}>
            {meta.date && date && (
              <>
                <TextWrapper as="span">{date}</TextWrapper>
                {meta.timeToRead && " / "}
              </>
            )}
            {meta.timeToRead && (
              <TextWrapper as="span">
                {timeToRead && `${timeToRead} minute read`}
              </TextWrapper>
            )}
          </Box>
        </Text>
      </Box>
      {meta.tags && (
        <Flex flexDirection="row" flexWrap="wrap" align="start">
          {tags && <Tags mb={1} tags={tags} />}
        </Flex>
      )}
    </Flex>
  );
}

Meta.propTypes = {
  post: PropTypes.object,
  meta: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
};

export default Meta;
