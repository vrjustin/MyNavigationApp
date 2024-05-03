import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Screen03 = () => {
  const navigation = useNavigation();

  const handleNavigateToDetails = () => {
    navigation.navigate('Screen03Details');
  };

  return (
    <View style={styles.container}>
      <Text>Hello Screen03</Text>
      <TouchableOpacity onPress={handleNavigateToDetails}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Go to Details</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    margin: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    padding: 16,
  },
});

export default Screen03;
