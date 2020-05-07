import * as React from "react";
import { View as NativeView, Platform, StyleSheet } from "react-native";

import { createStyleProps } from "../../utils/createStyleProps";

export const View = (props) => <NativeView {...createStyleProps(props)} />;
