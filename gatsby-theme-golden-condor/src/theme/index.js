import theme from "@theme-ui/preset-swiss";
import colors from "./colors";

const headingFont = "Space Grotesk";
const bodyFont = "Libre Franklin";

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
const articleWidth = 732;

export default {
  ...theme,
  space,
  colors: {
    ...theme.colors,
    ...colors,
  },
  sizes: {
    ...theme.sizes,
    default: "90vw",
    container: "1320px",
  },
  fonts: {
    ...theme.fonts,
    heading: `"${headingFont}", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif`,
    body: `"${bodyFont}", Georgia, serif`,
  },

  layout: {
    container: {
      maxWidth: 1320,
    },
    header: {
      maxWidth: 1024,
    },
    article: {
      maxWidth: articleWidth,
    },
  },
  grids: {
    articleWithSidebar: {
      // columns doesn't seem to map correctly to the grid columns prop here
      gridTemplateColumns: [
        "1fr",
        "1fr",
        "1fr",
        `${articleWidth + space[4]}px 1fr`,
      ],
      gap: [4],
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
      fontWeight: "heading",
      lineHeight: "heading",
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
      color: "primary.1",
      fontSize: [5, 6],
      fontWeight: "heading",
      letterSpacing: "-0.01em",
      mt: 3,
    },
    jumbo: {
      variant: "text.display",
      fontSize: [6, 8],
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
      variant: "links.light",
    },
    bold: {
      fontWeight: "bold",
    },
    light: {
      color: "muted",
      "&:hover": {
        color: "primary.1",
      },
    },
    dark: {
      color: "primary.0",
      "&:hover": {
        color: "primary.2",
      },
    },
    secondary: {
      color: "secondary.1",
      "&:hover": {
        color: "secondary.0",
      },
    },
  },
  buttons: {
    // all the buttons inherit this variant
    primary: {
      bg: "primary.1",
      color: "primary.4",
      fontSize: 1,
      fontWeight: 600,
      cursor: "pointer",
      "&:focus": {
        outline: "none",
        boxShadow: (theme) =>
          `inset 0px 0px 0px 2px rgba(255,255,255,0.8), 0px 0px 0px 2px ${theme.colors.pop}`,
      },
      transition: "all 300ms ease",
      "&:hover": {
        color: "primary.1",
        bg: "primary.4",
      },
      // dark: {
      //   variant: "buttons.primary",
      //   color: "primary.0",
      //   bg: "primary.4",
      //   "&:hover": {
      //     bg: "primary.0",
      //     color: "primary.4",
      //   },
      // },
    },
    secondary: {
      variant: "buttons.primary",
      bg: "secondary.1",
      color: "secondary.4",
      "&:hover": {
        color: "secondary.1",
        bg: "secondary.4",
      },
    },
    // secondaryAccent: {
    //   variant: "buttons.secondary",
    //   color: "secondary.0",
    //   bg: "secondary.4",
    //   "&:hover": {
    //     bg: "secondary.0",
    //     color: "secondary.4",
    //   },
    // },
  },
  badges: {
    primary: {
      fontFamily: "heading",
      fontWeight: 400,
      fontSize: 0,
      color: "primary.0",
      bg: "primary.3",
    },
    secondary: {
      variant: "badges.primary",
      color: "background",
      bg: "secondary.3",
    },
    primaryLight: {
      variant: "badges.primary",
      color: "primary.0",
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
      h2: {
        transition: "all 200ms ease",
      },
      "&:hover": {
        boxShadow: "none",
        h2: {
          transition: "all 400ms ease",
          color: "primary.2",
        },
      },
    },
  },
  styles: {
    // these will style mdx elements
    ...theme.styles,
    body: {
      color: "text",
    },
    p: {
      "&:first-of-type": {
        mt: 0,
      },
    },
    a: {
      color: "primary.2",
      "&:hover": {
        color: "primary.3",
      },
    },
    ul: {
      // my: 0,
      ml: 3,
      p: 0,
      // listStylePosition: "inside",
    },
    li: { mb: 2 },
    img: {
      // "maxWidth": "100%",
      width: "100%",
    },
    figure: { ml: 0 },
    inlineCode: {
      fontFamily: "monospace",
      color: "gray.1",
      bg: "gray.2",
    },
  },
};
