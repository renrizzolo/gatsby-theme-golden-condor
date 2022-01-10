import React from "react";
import PropTypes from "prop-types";
import { Link } from "@components/UI";
import ExpandButton from "@components/UI/Expandable/ExpandButton";
import { Box } from "theme-ui";

const Item = ({
  isActive,
  expandable,
  isOpen,
  onClick,
  ariaProps,
  to,
  hasLink,
  textSx,
  linkSx,
  children,
}) => {
  return (
    <ExpandButton
      {...ariaProps}
      isOpen={isOpen}
      onClick={onClick}
      expandable={expandable}
      as="li"
      sx={{
        display: "flex",
        alignItems: "center",
        listStyleType: "none",
        lineHeight: 1,
        mb: 1,
        px: 0,
        py: 0,
        borderBottom: "none",
      }}
      textSx={{
        fontSize: 2,
        display: "flex",
        flex: 1,
        ...textSx,
      }}
    >
      {hasLink ? (
        <Link
          to={to}
          sx={{
            ...(isActive && { fontWeight: "bold", color: "primary.1" }),
            display: "flex",
            flex: 1,
            py: 1.5,
            ...linkSx,
          }}
        >
          {children}
        </Link>
      ) : (
        <Box sx={{ py: 2 }}>{children}</Box>
      )}
    </ExpandButton>
  );
};

Item.propTypes = {
  to: PropTypes.string,
  isActive: PropTypes.bool,
  hasLink: PropTypes.bool,
  textSx: PropTypes.object,
  linkSx: PropTypes.object,
  expandable: PropTypes.bool,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  ariaProps: PropTypes.object,
};
export default Item;
