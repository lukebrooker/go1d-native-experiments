import * as React from "react";
import {
  View as NativeView,
  Image as NativeImage,
  TouchableOpacity as NativeTouchableOpacity,
} from "react-native";

import { defaultFontFamily } from "./theme";

import { createStyleProps } from "./utils/createStyleProps";

export { Text } from './components/Text'
export { View } from "./components/View";
export { HStack } from "./components/HStack";
export { VStack } from "./components/VStack";
export { Spacer } from "./components/Spacer";
export { Heading } from "./components/Heading";

export const Image = (props) => <NativeImage {...createStyleProps(props)} />;
export const TouchableOpacity = (props) => (
  <NativeTouchableOpacity
    {...createStyleProps(props)}
  />
);