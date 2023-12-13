import {StyleSheet} from 'react-native';
import colors from '../colors/colors';

export const sharedStyles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: colors.white,
  },
  flex: {
    flex: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
  fillAbsolute: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  flexEnd: {
    alignItems: 'flex-end',
  },
  w100: {
    width: '100%',
  },
  h100: {
    height: '100%',
  },
  wh100: {
    width: '100%',
    height: '100%',
  },
  zIndex: {
    zIndex: 10,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  selfCenter: {
    alignSelf: 'center',
  },
  absolute: {
    position: 'absolute',
  },
  overflowHidden: {
    overflow: 'hidden',
  },
  textCenter: {
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
  },
  rowCenterBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowCenterAround: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  debugBackground: {
    backgroundColor: 'red',
  },
  debugBorder: {
    borderWidth: 1,
    borderColor: 'red',
  },
  marginLeft4: {marginLeft: 4},
  marginLeft8: {marginLeft: 8},
  marginRight8: {marginRight: 8},
  margin16: {margin: 16},
  marginTop16: {marginTop: 16},
  marginTop12: {marginTop: 12},
  marginTop8: {marginTop: 8},
  paddingTop8: {paddingTop: 8},
  paddingTop16: {paddingTop: 16},
  padding16: {padding: 16},
  padding32: {padding: 32},
  marginHorizontal12: {marginHorizontal: 12},
  marginVertical32: {marginVertical: 32},
  marginVertical16: {marginVertical: 16},
  marginVertical8: {marginVertical: 8},
  marginVertical12: {marginVertical: 12},
  paddingVertical16: {paddingVertical: 16},
  margin32: {margin: 32},
  uppercase: {textTransform: 'uppercase'},
  gap4: {gap: 4},
  gap8: {gap: 8},
  gap12: {gap: 12},
  gap16: {gap: 16},
  paddingHorizontal16: {paddingHorizontal: 16},
  paddingBottom40: {paddingBottom: 40},
  paddingBottom16: {paddingBottom: 16},
} as const);
