import { StyleSheet } from "react-native";
import { themeTheCss } from "./themeTheCss";

export const createStyleProps = ({ css, style, ...props }) => {
  if (!css) {
    return {
      style,
      ...props,
    };
  }
  const stylesInSheet = StyleSheet.create({
    root: themeTheCss(css),
  });
  const sheetStyle = stylesInSheet.root;
  const allStyles = style
    ? Array.isArray[style]
      ? [sheetStyle, ...style]
      : [sheetStyle, style]
    : sheetStyle;
  return {
    style: allStyles,
    ...props,
  };
};
