import React from "react";
import PropTypes from "prop-types";
import { Link } from "@components/UI";
import { Text } from "theme-ui";

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
        fontSize: 1,
        lineHeight: 1,
        display: "flex",
        alignItems: "center",
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
            }),
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
