import { View, Text, StyleSheet, Dimensions } from 'react-native';

import Colors from '../../constants/colors';

function NumberContainer({ children }) {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  numberContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    margin: width < 380 ? 12 : 24,
    padding: width < 380 ? 12 : 24,
    borderColor: Colors.accent500,
    borderWidth: 2,
  },
  numberText: {
    color: Colors.accent500,
    fontSize: width < 380 ? 24 : 36,
    fontFamily: 'open-sans-bold',
  },
});
