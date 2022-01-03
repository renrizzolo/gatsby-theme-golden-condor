import { Flex } from "@components/UI";
import React from "react";
import * as Icons from "./svg";

const Icon = ({ name, svgProps, ...props }) => {
  let Component;
  if (Icons[name]) Component = Icons[name].default;
  return Component ? (
    <Flex width={3} height={3} {...props}>
      <Component {...svgProps} />
    </Flex>
  ) : null;
};

export default Icon;
