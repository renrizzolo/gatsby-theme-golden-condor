import theme from "@theme-ui/preset-swiss";

export default {
  ...theme,
  colors: {
    ...theme.colors,
    gray: ["#efefef", "#ddd", "#333", "#111"],
    background: "gold",
    primary: "#b22f7c"
  },
  sizes: {
    default: "90vw",
    container: "1320px"
  },
  styles: {
    ...theme.styles
  }
};
