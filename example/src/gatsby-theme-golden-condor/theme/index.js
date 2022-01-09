import theme from "gatsby-theme-golden-condor/src/theme";

const primary = [
  "#880e4f",
  "#c2185b",
  "#e91e63",
  "#f06292",
  "#f8bbd0",
  "#fce4ec",
];
const secondary = [
  "#880e4f",
  "#c2185b",
  "#e91e63",
  "#f06292",
  "#f8bbd0",
  "#fce4ec",
];
const gray = ["#2A2225", "#7A3049", "#92757F", "#CF99AB", "#D3C6CA", "#F8F5F6"];
const grayDark = [...gray].reverse();

const primaryDark = [...primary].reverse();
const secondaryDark = [...secondary].reverse();

// theme can be customized like so:
const myTheme = {
  ...theme,
  styles: {
    ...theme.styles,
    pre: {
      code: {
        ...theme.styles.pre.code,
        "html.default &": {
          backgroundColor: "dark",
        },
      },
    },
  },
  colors: {
    ...theme.colors,
    primary,
    secondary,
    gray,
    background: "#ffffff",
    modes: {
      dark: {
        ...theme.colors.modes.dark,
        primary: primaryDark,
        secondary: secondaryDark,
        gray: grayDark,
        background: "#000000",
      },
    },
  },
  fonts: {
    heading: `"Arvo", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif`,
    body: `"Catamaran", Georgia, serif`,
    monospace: theme.fonts.monospace,
  },
};

export default myTheme;
