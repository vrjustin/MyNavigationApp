import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Screen02 = () => {
  return (
    <View style={styles.container}>
      <Text>Hello Screen02</Text>
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

export default Screen02;
