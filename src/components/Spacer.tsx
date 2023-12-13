import React, { memo } from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';

interface Props extends ViewProps {
  height?: number | string;
  width?: number | string;
  size?: number | string;
  flex?: number | boolean;
}

interface Styles {
  container: (
    height: number | string,
    width: number | string,
    size: number | string,
    flex: undefined | number
  ) => ViewStyle;
}

const Spacer: React.FC<Props> = ({ height, width, flex, size, style, ...other }) => {
  return (
    <View
      style={[
        styles.container(
          height ? height : 0,
          width ? width : 0,
          size ? size : 0,
          flex ? 1 : undefined
        ),
        style,
      ]}
      {...other}
    />
  );
};

const styles: Styles = {
  container(height, width, size, flex) {
    if (flex) {
      return {
        flex,
      };
    }
    if (size) {
      return {
        height: size,
        width: size,
      };
    }
    return {
      height,
      width,
    };
  },
};

export default memo(Spacer);
