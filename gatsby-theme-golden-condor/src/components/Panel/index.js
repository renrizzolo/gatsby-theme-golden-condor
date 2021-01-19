import React from "react";
import { Box } from "theme-ui";
import { borderRadius } from "styled-system";
import styled from "@emotion/styled";
const P = styled(Box)`
  ${borderRadius}
`;
function Panel({ children, ...props }) {
  return (
    <P borderRadius={4} bg="muted" p={[2, 3]} {...props}>
      {children}
    </P>
  );
}

export default Panel;
