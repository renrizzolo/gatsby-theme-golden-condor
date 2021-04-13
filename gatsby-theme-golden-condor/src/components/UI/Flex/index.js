import styled from "@emotion/styled";
import { Box } from "theme-ui";
import { flexbox, space, display, height, variant } from "styled-system";

const Flex = styled(Box)`
  ${height}
  ${space}
  ${flexbox}
  ${display}
  ${variant({
    prop: "align",
    variants: {
      start: {
        alignItems: "start",
      },
      center: {
        alignItems: "center",
      },
      end: {
        alignItems: "end",
      },
      stretch: {
        alignItems: "stretch",
      },
    },
    prop: "justify",
    variants: {
      start: {
        justifyContent: "start",
      },
      center: {
        justifyContent: "center",
      },
      end: {
        justifyContent: "end",
      },
      even: {
        justifyContent: "space-evenly",
      },
      around: {
        justifyContent: "space-around",
      },
    },
  })}
`;
Flex.defaultProps = {
  display: "flex",
  flexDirection: "column",
};
Flex.displayName = "Flex";
export default Flex;
