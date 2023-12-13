import React, {FunctionComponent} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './navigation';
import {commonNavigationOptions, navigationRef} from './options';
import Home from '../screens/Home';
import Details from '../screens/Details';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../core/colors/colors';
import {sharedStyles} from '../core/styles/sharedStyles';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation: FunctionComponent = () => {
  return (
    <SafeAreaView style={[sharedStyles.flex, {backgroundColor: colors.white}]}>
      <NavigationContainer ref={navigationRef}>
        <RootStack.Navigator screenOptions={commonNavigationOptions}>
          <RootStack.Screen name="Home" component={Home} />

          <RootStack.Screen name="Details" component={Details} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RootNavigation;
