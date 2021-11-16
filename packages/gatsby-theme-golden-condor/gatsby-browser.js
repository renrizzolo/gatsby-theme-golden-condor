import React from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "./src/theme";

// even though theme-ui has its own provider,
// in order for custom styled-system components to be theme aware
// we need to add this too
const Root = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const wrapRootElement = ({ element }) => <Root>{element}</Root>;
