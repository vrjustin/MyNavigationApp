import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Screen01 = () => {
  return (
    <View style={styles.container}>
      <Text>Hello Screen01</Text>
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

export default Screen01;
