import { Platform } from "react-native";

// Taken from https://github.com/styled-system/styled-system/blob/master/packages/css/src/index.js
// Responsive section removed

import { theme } from "../theme";

export const get = (obj, key, def, p, undef) => {
  key = key && key.split ? key.split(".") : [key];
  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }
  return obj === undef ? def : obj;
};

const aliases = {
  bg: "backgroundColor",
  m: "margin",
  mt: "marginTop",
  mr: "marginRight",
  mb: "marginBottom",
  ml: "marginLeft",
  mx: "marginHorizontal",
  my: "marginVertical",
  p: "padding",
  pt: "paddingTop",
  pr: "paddingRight",
  pb: "paddingBottom",
  pl: "paddingLeft",
  px: "paddingHorizontal",
  py: "paddingVertical",
};

const multiples = {
  marginHorizontal: ["marginLeft", "marginRight"],
  marginVertical: ["marginTop", "marginBottom"],
  paddingHorizontal: ["paddingLeft", "paddingRight"],
  paddingVertical: ["paddingTop", "paddingBottom"],
  size: ["width", "height"],
};

const scales = {
  color: "colors",
  backgroundColor: "colors",
  borderColor: "colors",
  margin: "space",
  marginTop: "space",
  marginRight: "space",
  marginEnd: "space",
  marginBottom: "space",
  marginLeft: "space",
  marginStart: "space",
  marginHorizontal: "space",
  marginVertical: "space",
  padding: "space",
  paddingTop: "space",
  paddingRight: "space",
  paddingEnd: "space",
  paddingBottom: "space",
  paddingLeft: "space",
  paddingStart: "space",
  paddingHorizontal: "space",
  paddingVertical: "space",
  top: "space",
  right: "space",
  bottom: "space",
  left: "space",
  gridGap: "space",
  gridColumnGap: "space",
  gridRowGap: "space",
  gap: "space",
  columnGap: "space",
  rowGap: "space",
  fontFamily: "fonts",
  fontSize: "fontSizes",
  fontWeight: "fontWeights",
  lineHeight: "lineHeights",
  letterSpacing: "letterSpacings",
  border: "borders",
  borderTop: "borders",
  borderRight: "borders",
  borderBottom: "borders",
  borderLeft: "borders",
  borderWidth: "borderWidths",
  borderStyle: "borderStyles",
  borderRadius: "radii",
  borderTopRightRadius: "radii",
  borderTopLeftRadius: "radii",
  borderBottomRightRadius: "radii",
  borderBottomLeftRadius: "radii",
  borderTopWidth: "borderWidths",
  borderTopColor: "colors",
  borderTopStyle: "borderStyles",
  borderBottomWidth: "borderWidths",
  borderBottomColor: "colors",
  borderBottomStyle: "borderStyles",
  borderLeftWidth: "borderWidths",
  borderLeftColor: "colors",
  borderLeftStyle: "borderStyles",
  borderRightWidth: "borderWidths",
  borderRightColor: "colors",
  borderRightStyle: "borderStyles",
  outlineColor: "colors",
  boxShadow: "shadows",
  textShadow: "shadows",
  zIndex: "zIndices",
  width: "sizes",
  minWidth: "sizes",
  maxWidth: "sizes",
  height: "sizes",
  minHeight: "sizes",
  maxHeight: "sizes",
  flexBasis: "sizes",
  size: "sizes",
  // svg
  fill: "colors",
  stroke: "colors",
};

const positiveOrNegative = (scale, value) => {
  if (typeof value !== "number" || value >= 0) {
    return get(scale, value, value);
  }
  const absolute = Math.abs(value);
  const n = get(scale, absolute, absolute);
  if (typeof n === "string") return "-" + n;
  return n * -1;
};

const transforms = [
  "margin",
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft",
  "marginHorizontal",
  "marginVertical",
  "top",
  "bottom",
  "left",
  "right",
].reduce(
  (acc, curr) => ({
    ...acc,
    [curr]: positiveOrNegative,
  }),
  {}
);

const nativeTransforms = {
  lineHeight: ({ lineHeight, fontSize = 16 }) => lineHeight < 2 ? lineHeight * fontSize : lineHeight,
  fontFamily: ({ fontFamily, fontWeight }) => fontFamily.indexOf("-") === -1 ? `${fontFamily}-${fontWeight || 400}` : fontFamily,
};

export const themeTheCss = (styles) => {
  let result = {};

  for (const key in styles) {
    const x = styles[key];
    const val = typeof x === "function" ? x(theme) : x;

    if (key === "variant") {
      const variant = themeTheCss(get(theme, val));
      result = { ...result, ...variant };
      continue;
    }

    if (val && typeof val === "object") {
      result[key] = themeTheCss(val);
      continue;
    }

    const prop = get(aliases, key, key);
    const scaleName = get(scales, prop);
    const scale = get(theme, scaleName, get(theme, prop, {}));
    const transform = get(transforms, prop, get);
    const value = transform(scale, val, val);

    if (multiples[prop]) {
      const dirs = multiples[prop];

      for (let i = 0; i < dirs.length; i++) {
        result[dirs[i]] = value;
      }
    } else {
      result[prop] = value;
    }
  }

  Object.entries(nativeTransforms).forEach(([key, transform]) => {
    if (result[key]) {
      result[key] = transform(result);
    }
  })

  return result;
};
