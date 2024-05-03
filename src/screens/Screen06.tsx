import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Screen06 = () => {
  return (
    <View style={styles.container}>
      <Text>Hello Screen06</Text>
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

export default Screen06;
