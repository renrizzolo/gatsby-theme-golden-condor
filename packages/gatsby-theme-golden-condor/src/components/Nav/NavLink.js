import React from "react";
import { Link } from "@components/UI";
import { Text } from "theme-ui";

const NavLink = ({ to, href, label, target, textProps, linkProps }) => {
  return (
    <Text as="li" sx={{ fontSize: [2, 3] }} {...textProps}>
      <Link
        nav
        py={2}
        px={[0, 3]}
        sx={{ display: "block" }}
        to={to}
        href={href}
        target={target}
        {...linkProps}
      >
        {label}
      </Link>
    </Text>
  );
};

export default NavLink;
