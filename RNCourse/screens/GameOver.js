import { View, Image, StyleSheet, Text } from 'react-native';

import Title from '../components/ui/Title';
import Colors from '../constants/colors';

function GameOverScreen() {
  return (
    <View style={styles.screen}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/success.png')} style={styles.image} />
      </View>
      <Text style={styles.resultText}>You phone needed X attempts to guess the number Y.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.primary500,
    overflow: 'hidden',
    margin: 32,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultText: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
});

export default GameOverScreen;
