import React from "react";
import NavWrapper from "gatsby-theme-golden-condor/src/components/Nav/NavWrapper";

const NavWrapperShadowed = (props) => {
  return <NavWrapper bg={["paper", "background"]} {...props} />;
};

export default NavWrapperShadowed;
