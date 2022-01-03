const gray = ["#131314", "#444749", "#707577", "#c9cbcb", "#e4e4e4", "#f7f7f5"];

const primary = [
  "#0E0338",
  "#200E6B",
  "#5339BD",
  "#8673D1",
  "#baacf1",
  "#EFEDF7",
];
const secondary = [
  "#271A00",
  "#7E5910",
  "#bc9038",
  "#DBB569",
  "#F1D7A3",
  "#F8F3E9",
];

// invert colour pallettes for dark mode
const primaryDark = [...primary].reverse();
const secondaryDark = [...secondary].reverse();
const grayDark = [...gray].reverse();

const colors = {
  gray,
  primary,
  secondary,
  accent: primary[3],
  background: gray[5],
  text: gray[0],
  muted: "#f3eeed",
  light: "#f3eeed",
  paper: "#ffffff",
  dark: "#0d0d0f",
  modes: {
    dark: {
      paper: "#000000",
      muted: "#0d0d0f",
      dark: "#0d0d0f",
      light: "#f3eeed",
      text: gray[5],
      background: gray[0],
      primary: primaryDark,
      secondary: secondaryDark,
      accent: primaryDark[3],
      gray: grayDark,
    },
  },
};

export default colors;
