import React, {FC, useCallback, useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Header from '../../components/Header';
import {RootStackScreenProps} from '../../navigation/navigation';
import {sharedStyles} from '../../core/styles/sharedStyles';
import FastImage from 'react-native-fast-image';
import {screenHeight, screenWidth} from '../../core/constants';
import Pinchable from 'react-native-pinchable';
import colors from '../../core/colors/colors';

interface DetailsProps extends RootStackScreenProps<'Details'> {}

const Details: FC<DetailsProps> = ({navigation, route}) => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const {item} = route.params;

  const handleOpenFullScreen = useCallback(() => {
    setIsModal(true);
  }, []);
  const handleCloseFullScreen = useCallback(() => {
    setIsModal(false);
  }, []);

  return (
    <View>
      <Header title="Home" navigation={navigation} />
      <View style={sharedStyles.padding16}>
        <TouchableOpacity onPress={handleOpenFullScreen}>
          <FastImage
            source={{uri: item.src.large}}
            style={styles.image}
            resizeMode={FastImage.resizeMode.contain}
          />
        </TouchableOpacity>
        <Text>{item.photographer}</Text>
      </View>
      <Modal
        visible={isModal}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseFullScreen}>
        <TouchableWithoutFeedback
          onPress={handleCloseFullScreen}
          style={styles.modal}>
          <View style={styles.modalView}>
            <Pinchable>
              <FastImage
                source={{uri: item.src.large}}
                style={styles.image}
                resizeMode={FastImage.resizeMode.contain}
              />
            </Pinchable>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {width: screenWidth - 32, height: screenWidth - 32},
  imageModal: {width: screenWidth, height: screenWidth},
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: screenWidth,
    height: screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black2 + 'DD',
  },
});

export default Details;
