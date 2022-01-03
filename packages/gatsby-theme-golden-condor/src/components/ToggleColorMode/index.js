import React from "react";
import { Switch, Label, useColorMode } from "theme-ui";
import { Button, Flex } from "@components/UI";
import Icon from "@components/Icon";
import ColorModeSwitch from "./ColorModeSwitch";

const iconStyles = {
  width: 15,
  position: "absolute",
  top: "3px",
  left: "2px",
  zIndex: 1,
  display: "flex",
};

function ToggleColorMode() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Flex flexDirection="row">
      <Label
        htmlFor="change-color-mode"
        ariaLabel="Change color mode"
        sx={{ flex: 1, position: "relative", pointerEvents: "none" }}
      >
        {colorMode === "default" ? (
          <Icon name="Sun" sx={{ ...iconStyles, color: "primary.1" }} />
        ) : (
          <Icon
            name="Moon"
            sx={{ ...iconStyles, left: 22, color: "primary.3" }}
          />
        )}
      </Label>
      <ColorModeSwitch
        colorMode={colorMode}
        onChange={() =>
          setColorMode(colorMode === "default" ? "dark" : "default")
        }
      />
    </Flex>
  );
}

export default ToggleColorMode;
