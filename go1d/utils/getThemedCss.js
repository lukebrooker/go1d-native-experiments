import { StyleSheet } from "react-native";
import { themeTheCss } from "./themeTheCss";

export const getThemedCss = (css) =>
  StyleSheet.create({ root: themeTheCss(css) }).root;
