import * as React from "react";

import { View } from '../View';

export const HStack = ({
  gap = 0,
  children,
  css,
}) => {
  const stackItems = React.Children.toArray(children);
  return (
    <View
      css={{
        flexDirection: "row",
        ...css,
      }}
    >
      {stackItems.map((child, index) => (
        <View
          css={{
            marginStart: index !== 0 ? gap : null,
          }}
        >
          {child}
        </View>
      ))}
    </View>
  );
}