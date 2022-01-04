import React from "react";
import Switch from "../Switch";

const ColorModeSwitch = ({ colorMode, onChange, checkedSx, sx, ...props }) => {
  return (
    <Switch
      sx={{
        display: "block",
        alignItems: "center",
        bg: "primary.3",
        ...sx,
      }}
      checkedSx={{
        backgroundColor: "primary.1",
        ...checkedSx,
      }}
      id="change-color-mode"
      labelProps={{
        htmlFor: "change-color-mode",
      }}
      aria-label="Change Color Mode"
      checked={colorMode === "dark"}
      value={colorMode}
      onChange={onChange}
      {...props}
    />
  );
};

export default ColorModeSwitch;
