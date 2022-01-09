import colors from "./colors";

const headingFont = "Space Grotesk";
const bodyFont = "Inter";
const monoFont = "IBM Plex Mono";

const articleWidth = 732;
export const baseFontSize = 16;

const space = {
  0: 0,
  1: 4,
  1.5: 6,
  2: 8,
  2.5: 12,
  3: 16,
  3.5: 24,
  4: 32,
  4.5: 48,
  5: 64,
  5.5: 96,
  6: 128,
  7: 256,
  8: 512,
};

const theme = {
  config: {
    initialColorModeName: "light",
    printColorModeName: "light",
  },
  breakpoints: ["40rem", "56rem", "64rem"],
  space: {
    ...space,
    // layout x/y preset
    lx: { 1: space[3], 2: space[4] },
    ly: { 1: space[4], 2: space[5] },
  },
  colors: {
    ...colors,
  },
  sizes: {
    0: 0,
    1: 4,
    2: 8,
    3: 16,
    4: 32,
    5: 64,
    6: 128,
    7: 256,
    8: 512,
    container: "1536px",
  },
  borders: {
    0: 0,
    1: "1px solid",
    2: "2px solid",
  },
  letterSpacings: {
    1: "-0.63px",
    2: "-0.86px",
  },
  fonts: {
    heading: `"${headingFont}", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif`,
    body: `"${bodyFont}", Georgia, serif`,
    monospace: `"${monoFont}", monospace`,
  },
  fontSizes: [11, 14, baseFontSize, 20, 24, 30, 46, 64, 72],
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  radii: {
    0: 0,
    0.5: "2px",
    1: "4px",
    2: "6px",
    3: "8px",
    4: "12px",
    max: "999px",
  },
  transitions: {
    1: "all 300ms ease",
  },
  layout: {
    container: {
      maxWidth: 1536,
    },
    post: {
      maxWidth: 1024,
    },
    article: {
      maxWidth: articleWidth,
    },
  },
  grids: {
    base: {
      gridTemplateColumns: "repeat(12, 1fr)",
      gap: [3, 4],
    },
  },
  text: {
    default: {
      color: "text",
      fontSize: 2,
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.2em",
    },
    heading: {
      fontFamily: "heading",
      fontWeight: 400,
      lineHeight: "heading",
      mb: 3.5,
    },
    bold: {
      variant: "text.heading",
      fontWeight: 600,
    },
    subHeading: {
      variant: "text.heading",
      fontSize: [3, 4],
      fontWeight: 400,
      lineHeight: "body",
      letterSpacing: "-0.01em",
      mt: 2,
    },
    display: {
      variant: "text.heading",
      color: "primary.2",
      fontSize: [4, 5],
      fontWeight: 600,
      letterSpacing: "-0.01em",
      mt: 3,
    },
    jumbo: {
      variant: "text.display",
      fontSize: [5, 6],
      color: "primary.2",
      lineHeight: 1,
      position: "relative",
      display: "inline-block",
      "&:before": {
        content: '""',
        position: "absolute",
        borderRadius: "50%",
        display: "block",
        width: ".5ch",
        height: ".5ch",
        left: "-.5ch",
        bottom: "-0.5ch",
        backgroundColor: "primary.2",
        opacity: 0.3,
      },
      "&:after": {
        content: '""',
        position: "absolute",
        borderRadius: "50%",
        display: "block",
        width: ".5ch",
        height: ".5ch",
        right: "-.5ch",
        top: "-0.25ch",
        backgroundColor: "primary.2",
        opacity: 0.3,
      },
    },
  },
  links: {
    nav: {
      fontFamily: "heading",
      variant: "links.primary",
      fontWeight: 400,
    },
    bold: {
      fontWeight: "bold",
    },
    light: {
      color: "light",
      "&:hover": {
        color: "light",
      },
    },
    dark: {
      color: "dark",
      "&:hover": {
        color: "dark",
      },
    },
    primaryLight: {
      color: "primary.5",
      "&:hover": {
        color: "primary.4",
      },
      "&:focus": {
        boxShadow: (theme) => `0px 0px 0px 2px ${theme.colors.primary[4]}`,
      },
    },
    secondaryLight: {
      color: "secondary.5",
      "&:hover": {
        color: "secondary.4",
      },
    },
    primary: {
      color: "primary.1",
      "&:hover": {
        color: "primary.0",
      },
    },
    secondary: {
      color: "secondary.1",
      "&:hover": {
        color: "secondary.0",
      },
    },
  },
  shadows: {
    1: "1px 1px 8px rgba(0,0,0,0.12)",
    2: "3px 3px 16px rgba(0,0,0,0.07)",
    focus: (theme) =>
      `inset 0px 0px 0px 2px rgba(255,255,255,0.8), 0px 0px 0px 2px ${theme.colors.primary[3]}`,
    focusInset: (theme) => `0px 0px 0px 2px inset ${theme.colors.primary[3]}`,
  },
  buttons: {
    // all the buttons inherit this variant
    primary: {
      bg: "primary.2",
      borderRadius: 2,
      color: "primary.5",
      fontSize: 2,
      fontWeight: 600,
      cursor: "pointer",
      "&:focus": {
        outline: "none",
        boxShadow: "focus",
      },
      transition: "all 300ms ease",
      "&:hover": {
        color: "primary.1",
        bg: "primary.4",
      },
    },
    secondary: {
      variant: "buttons.primary",
      bg: "secondary.2",
      color: "secondary.5",
      "&:hover": {
        color: "secondary.1",
        bg: "secondary.4",
      },
      "&:focus": {
        outline: "none",
        boxShadow: (theme) => `0px 0px 0px 2px ${theme.colors.secondary[3]}`,
      },
    },
    transparent: {
      variant: "buttons.primary",
      backgroundColor: "unset",
      color: "primary.1",
    },
    link: {
      variant: "buttons.primary",
      padding: 0,
      backgroundColor: "unset",
      borderRadius: 0,
      fontFamily: "heading",
      color: "primary.2",
      "&:hover": {
        color: "primary.0",
      },
    },
  },
  badges: {
    primary: {
      fontFamily: "body",
      fontWeight: 600,
      fontSize: 0,
      color: "primary.2",
      bg: "primary.3",
    },
    secondary: {
      variant: "badges.primary",
      color: "secondary.1",
      bg: "secondary.3",
    },
    primaryLight: {
      variant: "badges.primary",
      color: "primary.1",
      bg: "primary.4",
    },
    secondaryLight: {
      variant: "badges.primary",
      color: "secondary.1",
      bg: "secondary.4",
    },
    outline: {
      color: "primary.3",
      bg: "transparent",
      boxShadow: "inset 0 0 0 1px",
    },
  },
  messages: {
    default: {
      bg: "muted",
      borderLeftColor: "primary.4",
      borderRadius: 1,
      "*:last-of-type": {
        mb: 0,
      },
    },
  },
  cards: {
    primary: {
      padding: [3, 4],
      borderRadius: 4,
      boxShadow: "0 0 2px 0px rgba(0, 0, 0, 0.2)",
      textDecoration: "none",
      color: "gray.0",
      fontFamily: "body",
      transition: "all 200ms ease",
      "&:hover": {
        transition: "all 400ms ease",
        boxShadow: "0 0 24px 4px rgba(0, 0, 0, 0.2)",
      },
    },
    post: {
      variant: "cards.primary",
      padding: 0,
      boxShadow: "none",
      borderRadius: 1,
      h2: {
        transition: "all 200ms ease",
        mb: 0,
      },
      "&:hover": {
        boxShadow: "none",
        h2: {
          transition: "all 400ms ease",
          color: "primary.2",
        },
      },
      "&:focus": {
        boxShadow: (theme) =>
          `0px 10px 16px 0px rgb(0 0 0 / 9%), 0px 0px 0px 2px ${theme.colors.primary[3]}`,
      },
    },
  },
  styles: {
    body: {
      color: "text",
    },
    p: {
      lineHeight: "body",
      mt: 0,
      mb: 3.5,
    },
    a: {
      color: "primary.2",
      "&:hover": {
        color: "primary.3",
      },
      "&:focus": {
        outline: "none",
        boxShadow: "focus",
      },
    },
    ul: {
      ml: "19px",
      p: 0,
    },
    ol: {
      ml: "19px",
      p: 0,
    },
    li: { mb: 2 },
    img: {
      display: "block",
      width: "100%",
      height: "auto",
      "::after": {
        content: `attr(alt)`,
        textAlign: "center",
        borderRadius: 1,
        fontSize: 1,
        color: "gray.0",
        display: "block",
        zIndex: 2,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "gray.5",
        padding: 1,
      },
    },
    figure: { ml: 0 },
    Container: {},
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontSize: 2,
      a: {
        "&:focus": {
          outline: "none",
          boxShadow: `0px 0px 0px 2px ${colors.primary[3]}`,
        },
      },
      // is just throwing classes here bad vs emotion global style?
      ".visually-hidden": {
        position: "absolute",
        left: "-10000px",
        width: "1px",
        height: "1px",
        overflow: "hidden",
      },
      ".highlighted-code-line": {
        backgroundColor: "rgba(143, 143, 149, 0.15)",
        boxShadow: "rgb(83, 57, 189) -4px 0px 0px 0px",
        marginLeft: -2.5,
        paddingLeft: 2.5,
        marginRight: -3,
      },
      ".highlighted-code-word": {
        backgroundColor: "rgba(143, 143, 149, 0.15)",
        padding: 1,
        borderRadius: 0.5,
      },
    },
    h1: {
      variant: "text.display",
    },
    h2: {
      variant: "text.heading",
      fontSize: 5,
      fontWeight: 600,
      color: "primary.2",
      letterSpacing: 1,
    },
    h3: {
      variant: "text.heading",
      fontSize: 4,
      color: "primary.1",
    },
    h4: {
      variant: "text.heading",
      fontSize: 3,
    },
    h5: {
      variant: "text.heading",
      fontSize: 2,
    },
    h6: {
      variant: "text.heading",
      fontSize: 1,
    },
    pre: {
      code: {
        color: "inherit",
        fontFamily: "monospace",
        p: 3,
        display: "grid",
        flexDirection: "column",
        "html.dark &": {
          backgroundColor: "dark",
          "&[data-theme='light']": {
            display: "none",
          },
        },
        "html.default &": {
          backgroundColor: "light",
          "&[data-theme='dark']": {
            display: "none",
          },
        },
        borderRadius: 1,
        overflow: "auto",
        // adds line numbers
        // counterReset: "line",
        // "> .line::before": {
        //   counterIncrement: "line",
        //   content: "counter(line)",
        //   display: "inline-block",
        //   width: "1rem",
        //   marginRight: "2rem",
        //   textAlign: "right",
        //   color: "gray",
        // },
      },
    },

    code: {
      fontSize: 2,
      ".line": {
        lineHeight: "26px",
      },
    },
    inlineCode: {
      margin: 0,
      borderRadius: 1,
      display: "inline",
      padding: "3px 5px",
      fontSize: "90%",
      lineHeight: 1.1,
      backgroundColor: "muted",
      color: "primary.1",
      fontFamily: "monospace",
    },
    table: {
      width: "100%",
      maxWidth: "100%",
      my: 4,
      borderCollapse: "separate",
      borderSpacing: 0,
      fontSize: 1,
      "th,td": {
        textAlign: "left",
        py: 1,
        pr: 2,
        pl: 0,
        borderColor: "gray.4",
        borderBottomStyle: "solid",
      },
    },
    th: {
      verticalAlign: "bottom",
      borderBottomWidth: "2px",
    },
    td: {
      verticalAlign: "top",
      borderBottomWidth: "1px",
    },
    hr: {
      border: 0,
      borderBottom: "2px solid",
      borderColor: "gray.4",
    },
  },
};

export default theme;
