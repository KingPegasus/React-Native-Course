import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

import Colors from '../../constants/colors';

function NumberContainer({ children }) {
  const { width, height } = useWindowDimensions();
  const marginDistance = height < 400 ? (width < 380 ? 4 : 8) : width < 380 ? 12 : 24;
  const paddingDistance = height < 400 ? (width < 380 ? 8 : 12) : width < 380 ? 12 : 24;
  const fontSize = height < 400 ? (width < 380 ? 12 : 24) : width < 380 ? 24 : 36;
  return (
    <View style={[styles.numberContainer, { margin: marginDistance, padding: paddingDistance }]}>
      <Text style={[styles.numberText, { fontSize: fontSize }]}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  numberContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderColor: Colors.accent500,
    borderWidth: 2,
  },
  numberText: {
    color: Colors.accent500,
    fontFamily: 'open-sans-bold',
  },
});
