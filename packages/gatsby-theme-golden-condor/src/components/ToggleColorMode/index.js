import React from "react";
import { Box, useColorMode } from "theme-ui";
import { Flex } from "@components/UI";
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
      <Box sx={{ flex: 1, position: "relative", pointerEvents: "none" }}>
        {colorMode === "light" ? (
          <Icon name="Sun" sx={{ ...iconStyles, color: "primary.1" }} />
        ) : (
          <Icon
            name="Moon"
            sx={{ ...iconStyles, left: 22, color: "primary.3" }}
          />
        )}
      </Box>
      <ColorModeSwitch
        colorMode={colorMode}
        onChange={() => setColorMode(colorMode === "light" ? "dark" : "light")}
      />
    </Flex>
  );
}

export default ToggleColorMode;
