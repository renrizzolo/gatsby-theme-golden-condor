import styled from "@emotion/styled";
import { Box } from "theme-ui";
import { system, order } from "styled-system";

const GridItem = styled(Box)`
  ${order}
  ${system({
    span: {
      property: "gridColumn",
      transform: (n) => (typeof n == "number" ? `auto / span ${n}` : n),
    },
  })}
`;

GridItem.defaultProps = {};

GridItem.displayName = "GridItem";
export default GridItem;
