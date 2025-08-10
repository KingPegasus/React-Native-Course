import { StyleSheet, View } from 'react-native';
import StylingExample from './components/StylingExample';
import FlexboxExample from './components/FlexboxExample';
import FlexBoxDeepDrive from './components/FlexBoxDeepDrive';
import { StatusBar } from 'expo-status-bar';

export default function AppBasics() {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <FlexBoxDeepDrive />
        <FlexboxExample />
        <StylingExample />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
