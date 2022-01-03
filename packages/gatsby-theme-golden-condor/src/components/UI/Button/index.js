import React from "react";
import { Button as UIButton } from "theme-ui";
import { Link } from "gatsby";

function Button({ to, href, ...props }) {
  if (to) return <UIButton as={Link} to={to} {...props} />;
  if (href) return <UIButton as={"a"} href={href} {...props} />;
  return <UIButton {...props} />;
}

export default Button;
