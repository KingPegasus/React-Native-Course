import { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './screens/CategoriesScreen';
export default function App() {
  return (
    <View style={styles.appContainer}>
      <CategoriesScreen />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
