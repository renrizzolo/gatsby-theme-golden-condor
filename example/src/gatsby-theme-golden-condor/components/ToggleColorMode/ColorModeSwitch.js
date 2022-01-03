import React from "react";
import ColorModeSwitch from "gatsby-theme-golden-condor/src/components/ToggleColorMode/ColorModeSwitch";

const ColorModeSwitchShadowed = (props) => {
  return (
    <ColorModeSwitch
      sx={{
        bg: "primary.3",
        "input:checked ~ &": {
          backgroundColor: "primary.4",
        },
      }}
      {...props}
    />
  );
};

export default ColorModeSwitchShadowed;
