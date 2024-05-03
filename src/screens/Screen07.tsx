import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Screen07 = () => {
  return (
    <View style={styles.container}>
      <Text>Hello Screen07</Text>
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

export default Screen07;
