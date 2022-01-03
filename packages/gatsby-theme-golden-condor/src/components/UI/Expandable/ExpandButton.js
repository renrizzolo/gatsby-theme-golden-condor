import React from "react";
import PropTypes from "prop-types";
import Icon from "@components/Icon";
import { Flex } from "@components/UI";
import { Text } from "@theme-ui/components";

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
        borderBottom: 1,
        borderColor: "gray.4",
        ...sx,
      }}
      variant="transparent"
      {...props}
    >
      <Text mr={2} sx={{ fontSize: 1, color: "gray.2", ...textSx }}>
        {children}
      </Text>
      {expandable && (
        <Icon
          sx={{
            transition: 1,
            color: "gray.2",

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
