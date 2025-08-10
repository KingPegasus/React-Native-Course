import { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

function generateRandomBetween(min, max, exclude) {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return randomNum;
}

function GameScreen() {
  const initialGuess = generateRandomBetween(1, 100, 50);
  const [guessedNumber, setGuessedNumber] = useState(initialGuess);
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{guessedNumber}</NumberContainer>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Higher or Lower?</PrimaryButton>
          <PrimaryButton>Go!</PrimaryButton>
        </View>
      </View>
      {/* <View>LOG GUESSES</View> */}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  buttonContainer: {
    flex: 1,
  },
});
