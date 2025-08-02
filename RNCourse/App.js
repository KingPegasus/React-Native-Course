import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    fontSize: 20,
    color: 'red',
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
});
