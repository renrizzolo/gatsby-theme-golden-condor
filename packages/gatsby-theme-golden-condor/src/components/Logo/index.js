import React from "react";
import { Box } from "theme-ui";
import { Link } from "@components/UI";
import { GatsbyImage } from "gatsby-plugin-image";

const Logo = React.memo(({ logo, fallback, ...rest }) => {
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
      {logo ? <GatsbyImage as={Box} image={logo} alt={fallback} /> : fallback}
    </Link>
  );
});

export default Logo;
