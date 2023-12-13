import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {sharedStyles} from '../../core/styles/sharedStyles';

const EmptyScreen: FC = () => {
  return (
    <View style={[sharedStyles.flex, sharedStyles.center]}>
      <Text>Empty data</Text>
    </View>
  );
};

export default EmptyScreen;
