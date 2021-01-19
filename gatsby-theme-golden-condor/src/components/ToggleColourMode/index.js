import React from "react";
import { Switch, useColorMode } from "theme-ui";
import { Button } from "@components/UI";

function ToggleColourMode() {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <Switch
      value={colorMode}
      onClick={(e) => {
        setColorMode(colorMode === "default" ? "dark" : "default");
      }}
      label={`${colorMode === "default" ? "Dark" : "Light"}`}
    />
  );
}

export default ToggleColourMode;
