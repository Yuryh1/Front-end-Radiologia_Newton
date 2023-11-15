import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import data from './Data';

export default () => {
  return (
    <View>
      <FlatList
        data={imagens}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.data }}
            style={{ width: item.width, height: item.height, margin: 10 }}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={3}
      />
    </View>
  );
};

const imagens = [
  { id: 1, width: 100, height: 100, data },
  { id: 2, width: 100, height: 100, data },
  { id: 3, width: 100, height: 100, data },
];
