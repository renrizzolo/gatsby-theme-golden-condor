import React from "react";
import { Switch } from "theme-ui";

const ColorModeSwitch = ({ colorMode, onChange, sx, ...props }) => {
  return (
    <Switch
      sx={{
        display: "block",
        alignItems: "center",
        bg: "primary.3",
        "input:checked ~ &": {
          backgroundColor: "primary.1",
        },
        ...sx,
      }}
      id="change-color-mode"
      checked={colorMode === "dark"}
      value={colorMode}
      onChange={onChange}
      {...props}
    />
  );
};

export default ColorModeSwitch;
