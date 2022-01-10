import React from "react";
import PropTypes from "prop-types";
import Icon from "@components/Icon";
import { Flex } from "@components/UI";
import { Box } from "@theme-ui/components";

const ExpandButton = ({
  expandable,
  isOpen,
  sx,
  children,
  textSx,
  ...props
}) => {
  return (
    <Flex
      direction="row"
      align="center"
      justify="between"
      sx={{
        width: "100%",
        cursor: expandable ? "pointer" : "default",
        px: 1,
        py: 2,
        border: "none",
        outline: "none",
        borderBottom: 1,
        borderBottomColor: "gray.4",
        // borderBottomStyle: 'solid',
        backgroundColor: "transparent",
        fontFamily: "body",
        color: "gray.2",
        "&:hover": {
          backgroundColor: "transparent",
        },
        "&:focus": {
          boxShadow: (theme) => `0px 0px 0px 2px ${theme.colors.primary[4]}`,
        },
        ...sx,
      }}
      {...props}
      as={expandable ? "button" : props.as}
    >
      <Box mr={2} sx={{ fontSize: 1, ...textSx }}>
        {children}
      </Box>
      {expandable && (
        <Icon
          sx={{
            transition: 1,

            transform: isOpen ? `rotate(180deg)` : `rotate(0deg)`,
          }}
          name="ArrowDown"
        />
      )}
    </Flex>
  );
};

ExpandButton.propTypes = {
  expandable: PropTypes.bool,
  isOpen: PropTypes.bool,
  sx: PropTypes.object,
  textSx: PropTypes.object,
};

export default ExpandButton;
