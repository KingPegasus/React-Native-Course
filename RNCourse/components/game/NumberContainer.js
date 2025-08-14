import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

function NumberContainer({ children }) {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  numberContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    margin: 24,
    padding: 24,
    borderColor: Colors.accent500,
    borderWidth: 2,
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontFamily: 'open-sans-bold',
  },
});
