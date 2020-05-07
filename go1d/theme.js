// Based on theme spec from https://theme-ui.com/theme-spec

export const defaultFontFamily: string =
  "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif";
const sansSerif: string = "Muli";
const monospace: string = "Source Code Pro";

const gray = [
  "#FFFFFF",
  "#F9FAFA",
  "#F4F6F6",
  "#D6DEDE",
  "#B6BFC0",
  "#657376",
  "#3E4749",
  "#202324",
];

const blue = ["#E2F5F9", "#31B8DA", "#1A778F", "#135A6B"];

const indigo = ["#E5EBF3", "#4E6EA2", "#364C6F", "#25344C"];

const green = ["#E6F4EE", "#36B37E", "#257C57", "#1A553C"];

const red = ["#FDEDEE", "#EF535F", "#C62330", "#9A0E19"];

const orange = ["#FFEDD3", "#F99400", "#AC6600", "#774700"];

export const foundations = {
  space: [0, 2, 4, 8, 16, 24, 32, 48, 64, 128, 256],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 48, 64, 80, 96],
  fonts: {
    sansSerif,
    heading: sansSerif,
    body: sansSerif,
    ui: sansSerif,
    monospace,
  },
  fontWeights: {
    heading: "800",
    body: "400",
    ui: "400",
    bold: "600",
  },
  lineHeights: {
    heading: 1.2,
    body: 1.5,
    ui: 1.35,
  },
  letterSpacings: {
    tightest: "-0.03em",
    tight: "-0.01em",
    normal: 0,
  },
  sizes: {
    narrow: "600px",
    normal: "900px",
    wide: "1200px",
    full: "100%",
  },
  colors: {
    blue,
    indigo,
    green,
    red,
    orange,
    accent: blue[1],
    success: green[1],
    note: indigo[1],
    warning: orange[1],
    danger: red[1],
    gray,
    background: gray[0],
    faint: gray[1],
    soft: gray[2],
    faded: gray[3],
    muted: gray[4],
    subtle: gray[5],
    default: gray[6],
    contrast: gray[7],
  },
  radii: [0, 2, 4, 8, 16, 24, 32, 48, 64, 128, 256],
  breakpoints: ["600", "900", "1200"],
};

const variants = {
  text: {
    ui: {
      fontFamily: "ui",
      lineHeight: "ui",
      fontWeight: "ui",
      fontSize: 2,
      color: "default",
    },
    body: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      fontSize: 3,
      color: "default",
    },
    meta: {
      fontFamily: "ui",
      lineHeight: "ui",
      fontWeight: "ui",
      fontSize: 1,
      color: "subtle",
    },
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
      color: "contrast",
    },
    headingScreen: {
      variant: "text.heading",
      lineHeight: "heading",
      fontSize: 5,
    },
    headingSection: {
      variant: "text.heading",
      lineHeight: "heading",
      fontSize: 3,
    },
  },
};

export const theme = {
  ...foundations,
  ...variants,
};
