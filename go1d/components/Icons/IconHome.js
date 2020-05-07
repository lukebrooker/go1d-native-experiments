import React from "react";
import { Icon } from "./Icon"
import { Path, Polyline } from "react-native-svg";

export const IconHome = ({ size, color }) => (
  <Icon size={size} color={color}>
    <Path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <Polyline points="9 22 9 12 15 12 15 22" />
  </Icon>
);
