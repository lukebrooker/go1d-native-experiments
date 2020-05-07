import React from "react";
import { Icon } from "./Icon";
import { Path, Circle } from "react-native-svg";

export const IconUser = ({ size, color }) => (
  <Icon size={size} color={color}>
    <Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <Circle cx="12" cy="7" r="4" />
  </Icon>
);
