import React, {FC, useCallback} from 'react';
import {Image, StyleSheet, TouchableOpacity, View, Text} from 'react-native';

import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/navigation';
import Spacer from '../Spacer';
import {sharedStyles} from '../../core/styles/sharedStyles';
import colors from '../../core/colors/colors';

const arrowLeftIcon = require('../../assets/arrow-left.png');

interface HeaderProps {
  title: string;
  navigation: NavigationProp<RootStackParamList>;
  isBack?: boolean;
}
const Header: FC<HeaderProps> = ({title, navigation, isBack = true}) => {
  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View
      style={[
        sharedStyles.row,
        styles.header,
        sharedStyles.padding16,
        sharedStyles.alignCenter,
        !isBack && sharedStyles.center,
      ]}>
      {isBack ? (
        <>
          <TouchableOpacity onPress={handleGoBack}>
            <Image source={arrowLeftIcon} style={styles.burgerIcon} />
          </TouchableOpacity>

          <Spacer width={24} />

          <Text style={styles.title}>{title}</Text>
        </>
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  burgerIcon: {width: 24, height: 24},
  header: {
    backgroundColor: colors.purple4,
    borderBottomColor: colors.purple3,
    borderBottomWidth: 1,
  },
  title: {fontWeight: '700', fontSize: 18},
});

export default Header;
