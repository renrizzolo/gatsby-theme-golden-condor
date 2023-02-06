import React from "react";
import PropTypes from "prop-types";
import { Box, Text } from "theme-ui";
import { Link, Flex } from "@components/UI";

function Node({ to, label, lastNode }) {
  return (
    <>
      <Text as="span" sx={{ fontSize: 1 }}>
        {to ? <Link to={to}>{label}</Link> : label}
      </Text>
      {!lastNode && " / "}
    </>
  );
}

function BreadCrumbs({ post, entries }) {
  const {
    frontmatter: { title, category, parent: postParent },
    parent: { sourceInstanceName },
  } = post;

  const parent = entries.find(
    (entry) => postParent && entry.childMdx?.frontmatter?.id === postParent
  );

  const parentPath = parent?.childMdx?.path;
  const parentTitle = parent?.childMdx?.frontmatter?.title;

  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <Box pb={1}>
        <Text
          color="gray.4"
          mb={2}
          sx={{ fontWeight: 600, fontSize: 1, fontFamily: "heading" }}
        >
          <Box mb={1}>
            {sourceInstanceName && (
              <Node
                to={`/${sourceInstanceName}s/`}
                label={`${sourceInstanceName}s`}
              />
            )}
            {category && (
              <Node to={`/category/${category.slug}/`} label={category.name} />
            )}
            {parent && <Node to={parentPath} label={parentTitle} />}
            {title && <Node label={title} lastNode />}
          </Box>
        </Text>
      </Box>
    </Flex>
  );
}

BreadCrumbs.propTypes = {
  post: PropTypes.object,
};

export default React.memo(BreadCrumbs);
