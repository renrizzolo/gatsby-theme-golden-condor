import React from "react";
import Icon from "@components/Icon";
import LogoHeader from "@components/Logo/LogoHeader";
import { Button, Flex } from "@components/UI";
import { Heading } from "theme-ui";

const MobileMenuHeader = ({ onToggleMenu, sx, ...props }) => {
  return (
    <Flex
      direction="row"
      align="center"
      justify="between"
      display={["flex", "none"]}
      sx={{ width: "100%", bg: "primary.1", py: 2, px: 3, ...sx }}
      {...props}
    >
      <Button
        variant="transparent"
        aria-label="toggle menu"
        onClick={onToggleMenu}
        sx={{ p: 2 }}
      >
        <Icon sx={{ color: "paper" }} width={4} height={4} name="Menu" />
      </Button>
      <Heading mb={[2, 0]}>
        <LogoHeader />
      </Heading>
    </Flex>
  );
};

export default MobileMenuHeader;
