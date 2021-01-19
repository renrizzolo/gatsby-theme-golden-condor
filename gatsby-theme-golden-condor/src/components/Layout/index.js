import React from "react";
import { Helmet } from "react-helmet";
import { Box, Container } from "theme-ui";
import Footer from "../Footer";
import Nav from "../Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,400;0,700;1,400&family=Space+Grotesk:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Box>
        <Nav />
        <Box as="main">{children}</Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
