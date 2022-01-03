import styled from "@emotion/styled";
import { Box } from "theme-ui";
import { system, flexbox, space, layout, color, variant } from "styled-system";

const Flex = styled(Box)(
  color,
  space,
  layout,
  flexbox,
  system({
    gap: {
      property: "gap",
      scale: "space",
    },
  }),
  variant({
    prop: "direction",
    variants: {
      row: {
        flexDirection: "row",
      },
      column: {
        flexDirection: "column",
      },
      rowReverse: {
        flexDirection: "row-reverse",
      },
      columnReverse: {
        flexDirection: "column-reverse",
      },
    },
  }),
  variant({
    prop: "wrap",
    variants: {
      wrap: {
        flexWrap: "wrap",
      },
      nowrap: {
        flexWrap: "nowrap",
      },
      reverse: {
        flexWrap: "wrap-reverse",
      },
    },
  }),
  variant({
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
  }),
  variant({
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
      between: {
        justifyContent: "space-between",
      },
    },
  })
);

Flex.defaultProps = {
  display: "flex",
  flexDirection: "column",
};
Flex.displayName = "Flex";
export default Flex;
