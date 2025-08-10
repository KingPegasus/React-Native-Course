import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <StartGameScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#ddb52f',
  },
});
