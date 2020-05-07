import * as React from "react";

import { View } from "../View";

export const VStack = ({ gap = 0, children, css }) => {
  const stackItems = React.Children.toArray(children);
  return (
    <View
      css={{
        ...css
      }}
    >
      {stackItems.map((child, index) => (
        <View
          css={{
            marginTop: index !== 0 ? gap : null,
          }}
        >
          {child}
        </View>
      ))}
    </View>
  );
};
