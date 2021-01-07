import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Movies({ navigation }) {
  return (
    <View>
      <Text>Movies</Text>
      <Button
        onPress={() => {
          navigation.navigate('Detail');
        }}
        title="Go to Detail"
      />
    </View>
  );
}
