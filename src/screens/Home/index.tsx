import React from 'react';
import {FlatList, View} from 'react-native';

const Home = () => {
  return (
    <View>
      <FlatList
        data={[]}
        ListEmptyComponent={() => {}}
        key={item => item.id}
        renderItem={}
      />
    </View>
  );
};

export default Home;
