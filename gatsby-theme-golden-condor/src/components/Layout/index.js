import React from "react";
import {
  jsx,
  Styled,
  Layout as ThemeLayout,
  Box,
  Heading,
  Container
} from "theme-ui";
const Layout = ({ children }) => {
  return (
    <Styled.root>
      <Box p={4} color="gray.2">
        <Container>
          <Heading>Gatsby Theme 'Golden Condor'</Heading>
          <Box pb={2} />
          <Box fontFamily="Helvetica">{children}</Box>
        </Container>
      </Box>
    </Styled.root>
  );
};
export default Layout;
