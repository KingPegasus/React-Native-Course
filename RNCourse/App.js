import { StyleSheet, View } from 'react-native';
import StylingExample from './components/StylingExample';
import FlexboxExample from './components/FlexboxExample';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <FlexboxExample />
      <StylingExample />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 60,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    marginRight: 8,
    padding: 8
  },

});
