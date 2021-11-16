import React from "react";
import PropTypes from "prop-types";
import { Link } from "@components/UI";
import ExpandButton from "@components/UI/Expandable/ExpandButton";

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
        mb: 2,
        padding: 0,
        border: "none",
      }}
      textSx={{
        fontSize: 2,
        ...textSx,
      }}
    >
      {hasLink ? (
        <Link
          to={to}
          sx={{ ...(isActive && { fontWeight: "bold" }), ...linkSx }}
        >
          {children}
        </Link>
      ) : (
        children
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
