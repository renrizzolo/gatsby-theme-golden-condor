const gray = ["#131314", "#444749", "#707577", "#f7f7f5"];
const primary = ["#1B123D", "#37257D", "#5339BD", "#6F4CFC", "#D6D3FF"];
const secondary = ["#4A3E24", "#7e6026", "#bc9038", "#F0C469", "#FAEACF"];

// reverse colour pallettes for dark mode
const primaryDark = [...primary].reverse();
const secondaryDark = [...secondary].reverse();
const grayDark = [...gray].reverse();

const colors = {
  background: "#ffffff",
  gray,
  primary,
  secondary,
  navBar: primary[3],
  text: "#111",

  modes: {
    dark: {
      muted: "#131314",
      text: "#f8f8f8",
      navBar: primaryDark[3],
      background: "#111",
      primary: primaryDark,
      secondary: secondaryDark,
      gray: grayDark,
    },
  },
};

export default colors;
