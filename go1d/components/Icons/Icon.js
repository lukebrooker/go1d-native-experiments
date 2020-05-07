import React from "react";
import { Platform } from 'react-native'
import Svg, { Path, Polyline } from "react-native-svg";
import { View } from "../../../go1d";

// Corresponds with the fontSize array
// e.g. position 2 is 16px, give that 1 px stroke
const strokeWidths = [1, 1, 1, 1, 1.5, 1.5, 1.5, 2, 2, 2, 2];
const fontSizes = [12, 14, 16, 20, 24, 32, 40, 48, 64, 80, 96];

export const Icon = ({ size = 4, color, children }) => (
  <View css={{
    alignItems: "center",
    justifyContent: "center"
  }}>
    <Svg
      width={fontSizes[size]}
      height={fontSizes[size]}
      fill="none"
      stroke={color || Platform.OS === "web" ? "currentColor" : "#000"}
      strokeWidth={strokeWidths[size]}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      {children}
    </Svg>
  </View>
);
