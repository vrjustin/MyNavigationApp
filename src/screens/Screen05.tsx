import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Screen05 = () => {
  return (
    <View style={styles.container}>
      <Text>Hello Screen05</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Screen05;
