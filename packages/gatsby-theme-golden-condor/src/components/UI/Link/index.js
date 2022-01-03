import React from "react";
import { Link as UILink, NavLink } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";

function Link({ nav, href, ...rest }) {
  const LinkComponent = href ? "a" : GatsbyLink;
  const props = { ...rest, href };
  return nav ? (
    <NavLink as={LinkComponent} {...props} />
  ) : (
    <UILink as={LinkComponent} {...props} />
  );
}

export default Link;
