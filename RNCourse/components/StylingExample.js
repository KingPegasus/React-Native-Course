import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { StatusBar } from 'expo-status-bar';
const StylingExample = () => {
  return (
    <View>
      <Text style={styles.dummyText}>Let's do this! 🚀</Text>
      <StatusBar style="auto" />
      <Text
        style={{
          fontSize: 20,
          color: 'blue',
          margin: 10,
          borderWidth: 1,
          borderColor: 'black',
          padding: 10,
        }}
      >
        Let's do this! 🚀
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    dummyText: {
        fontSize: 20,
        color: 'red',
        margin: 10,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
      },
 
});

export default StylingExample;
