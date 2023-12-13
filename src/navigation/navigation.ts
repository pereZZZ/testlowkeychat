import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {itemInterface} from '../types/item';

export type RootStackParamList = {
  Home: undefined;
  Details: {item: itemInterface};
};

export type RootStackScreenProps<T extends keyof RootStackParamList = never> =
  NativeStackScreenProps<RootStackParamList, T>;

export type RootStackNavigationProp<
  T extends keyof RootStackParamList = never,
> = NativeStackNavigationProp<RootStackParamList, T>;
