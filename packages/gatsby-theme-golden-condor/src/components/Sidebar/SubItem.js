import React from "react";
import PropTypes from "prop-types";
import { Link } from "@components/UI";
import { Text } from "theme-ui";

// @todo this is basically the same as Item except for the ExpandButton wrapper

const SubItem = ({
  to,
  isActive,
  hasLink = true,
  textSx,
  linkSx,
  children,
}) => {
  return (
    <Text
      as="li"
      sx={{
        listStyleType: "none",
        display: "flex",
        alignItems: "center",
        lineHeight: 1,
        fontSize: 2,
        px: 0,
        ...textSx,
      }}
    >
      {hasLink ? (
        <Link
          to={to}
          className={isActive ? "isActive" : ""}
          sx={{
            ...(isActive && {
              fontWeight: "bold",
              color: "primary.1",
            }),
            display: "flex",
            flex: 1,
            py: 1.5,
            ...linkSx,
          }}
        >
          {children}
        </Link>
      ) : (
        children
      )}
    </Text>
  );
};

SubItem.propTypes = {
  to: PropTypes.string,
  isActive: PropTypes.bool,
  hasLink: PropTypes.bool,
  textSx: PropTypes.object,
  linkSx: PropTypes.object,
};

export default SubItem;
