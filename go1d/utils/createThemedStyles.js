import { StyleSheet } from "react-native";

import { themeTheCss } from './themeTheCss'

export const createThemedStyles = (styles = {}) =>
  StyleSheet.create(
    Object.entries(styles).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: themeTheCss(value),
      }),
      {}
    )
  );
