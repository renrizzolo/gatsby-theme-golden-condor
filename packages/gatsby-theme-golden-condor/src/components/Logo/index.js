import React from "react";
import { Box, useColorMode } from "theme-ui";
import { Link } from "@components/UI";
import { GatsbyImage } from "gatsby-plugin-image";

const Logo = React.memo(({ logo, logoDark, fallback, ...rest }) => {
  const [colorMode] = useColorMode();
  return (
    <Link
      to="/"
      nav
      sx={{
        textDecoration: "none",
        display: "flex",
        fontSize: 3,
        fontWeight: 600,
      }}
      {...rest}
    >
      {colorMode === "dark" && logoDark ? (
        <GatsbyImage as={Box} image={logoDark} alt={fallback} />
      ) : logo ? (
        <GatsbyImage as={Box} image={logo} alt={fallback} />
      ) : (
        fallback
      )}
    </Link>
  );
});

export default Logo;
