import React, {FC} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import ItemList from '../../components/ItemList';
import EmptyScreen from '../../components/EmptyScreen';
import Header from '../../components/Header';
import {RootStackScreenProps} from '../../navigation/navigation';
import {sharedStyles} from '../../core/styles/sharedStyles';
import {useList} from '../../hooks/list';
import colors from '../../core/colors/colors';
import Spacer from '../../components/Spacer';

interface HomeProps extends RootStackScreenProps<'Home'> {}

const Home: FC<HomeProps> = ({navigation}) => {
  const {data, isLoading, isLoadingNext, getRefetchList, getNextList} =
    useList();

  return (
    <View style={sharedStyles.flex}>
      <Header title="Home" isBack={false} navigation={navigation} />
      {isLoading ? (
        <View>
          <ActivityIndicator size={'large'} color={colors.purple2} />
        </View>
      ) : (
        <FlatList
          style={sharedStyles.paddingHorizontal16}
          data={data?.photos}
          ListEmptyComponent={() => <EmptyScreen />}
          keyExtractor={item => item.id + 'key' + item.url}
          renderItem={({item}) => (
            <ItemList item={item} navigation={navigation} />
          )}
          ItemSeparatorComponent={() => <Spacer width={16} height={16} />}
          ListHeaderComponent={() => <Spacer width={16} height={16} />}
          ListFooterComponent={() =>
            isLoadingNext ? (
              <View style={styles.loading}>
                <ActivityIndicator size={'small'} color={colors.purple2} />
              </View>
            ) : (
              <Spacer width={16} height={16} />
            )
          }
          onRefresh={() => getRefetchList(data?.page || 1)}
          refreshing={isLoading}
          onEndReached={() => getNextList(data?.page ? data?.page + 1 : 1)}
          onEndReachedThreshold={0.2}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({loading: {paddingVertical: 8}});

export default Home;
