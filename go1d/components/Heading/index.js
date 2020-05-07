import * as React from "react";
import { H1, H2, H3, H4, H5, H6 } from '@expo/html-elements';

import { Text } from "../Text";

import { themeTheCss, createThemedStyles, getThemedCss } from "../../utils";

const elements = {
  heading: H2,
  headingScreen: H1,
  headingSection: H2
}

export const Heading = ({ variant = "heading", element, ...props }) => (
  <Text element={element || elements[variant]} variant={variant} {...props} />
);






