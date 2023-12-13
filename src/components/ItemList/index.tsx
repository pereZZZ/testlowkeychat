import React, {FC, useCallback} from 'react';
import {StyleSheet, Text} from 'react-native';
import {itemInterface} from '../../types/item';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/navigation';
import {sharedStyles} from '../../core/styles/sharedStyles';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../core/colors/colors';
import radii from '../../core/styles/radii';
import Spacer from '../Spacer';

interface ItemListProps {
  item: itemInterface;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home', undefined>;
}

const ItemList: FC<ItemListProps> = ({item, navigation}) => {
  const handleGoToDetails = useCallback(() => {
    navigation.navigate('Details', {item: item});
  }, [item, navigation]);

  return (
    <TouchableOpacity
      style={[
        sharedStyles.padding16,
        sharedStyles.row,
        sharedStyles.alignCenter,
        {backgroundColor: colors.white, borderRadius: radii.button},
        styles.shadow,
      ]}
      onPress={handleGoToDetails}>
      <FastImage source={{uri: item.src.small}} style={styles.image} />
      <Spacer width={16} />
      <Text style={styles.photographer}>{item.photographer}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {width: 60, height: 60, borderRadius: radii.button},
  photographer: {fontSize: 16, fontWeight: '500'},
  shadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default ItemList;
