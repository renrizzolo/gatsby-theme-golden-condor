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
      center: {
        justifyContent: "center",
        alignItems: "center",
      },
      start: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
      },
      end: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
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
