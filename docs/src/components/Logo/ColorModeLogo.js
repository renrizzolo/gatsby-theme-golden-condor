import React from "react";
import GoldenCondor from "./GoldenCondor";
import { useColorMode } from "theme-ui";

const ColorModeLogo = (props) => {
  const [colorMode] = useColorMode();
  const isDarkmode = colorMode === "dark";
  return (
    <GoldenCondor color={isDarkmode ? "light" : "secondary.2"} {...props} />
  );
};

export default ColorModeLogo;
