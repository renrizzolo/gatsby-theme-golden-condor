import React from "react";
import styled from "@emotion/styled";
import { Box } from "theme-ui";
import { border, borderColor, variant } from "styled-system";

const PanelBox = styled(Box)`
  ${border}
  ${borderColor}
  ${variant({
    prop: "type",
    variants: {
      info: {
        border: "1",
        borderColor: "primary.3",
        backgroundColor: "primary.5",
      },
      dark: {
        backgroundColor: "primary.2",
        color: "muted",
        a: {
          color: "muted",
        },
      },
    },
  })}
`;

function Panel({ children, ...props }) {
  return (
    <PanelBox
      bg="muted"
      sx={{
        borderRadius: 1,
        ">:last-child": { marginBottom: 0 },
        ">p:only-child, >p:first-of-type": { my: 0 },
      }}
      p={[2, 3]}
      {...props}
    >
      {children}
    </PanelBox>
  );
}

export default Panel;
