import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import { Box, useColorMode } from "theme-ui";
import Footer from "../Footer";
import Nav from "../Nav";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query Head {
      site {
        siteMetadata {
          googleFontsQueryString
        }
      }
    }
  `);

  const {
    site: {
      siteMetadata: { googleFontsQueryString },
    },
  } = data;
  const [colorMode] = useColorMode();
  return (
    <>
      <Helmet
        htmlAttributes={{
          class: colorMode,
        }}
      >
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href={`https://fonts.googleapis.com/css2?${googleFontsQueryString}`}
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
