import * as React from "react";
import { Text as NativeText } from "react-native";

import { themeTheCss, createThemedStyles, getThemedCss } from "../../utils";

export const Text = React.forwardRef(
  (
    {
      numberOfLines,
      variant = "ui",
      element = NativeText,
      css,
      style,
      ...props
    },
    ref
  ) => {
    const Element = element;
    const themedCss = getThemedCss(css);
    return (
      <Element
        {...props}
        ref={ref}
        numberOfLines={numberOfLines}
        style={[styles[variant], themedCss, style]}
      />
    );
  }
);

const styles = createThemedStyles({
  ui: {
    variant: "text.ui",
  },
  paragraph: {
    variant: "text.paragraph",
  },
  meta: {
    variant: "text.meta",
  },
  heading: {
    variant: "text.heading",
  },
  headingScreen: {
    variant: "text.headingScreen",
  },
  headingSection: {
    variant: "text.headingSection",
  },
});







