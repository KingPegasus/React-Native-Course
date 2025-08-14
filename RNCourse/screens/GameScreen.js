import { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';

import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function generateRandomBetween(min, max, exclude) {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return randomNum;
}
let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [guessedNumber, setGuessedNumber] = useState(initialGuess);

  function nextGuessHandler(direction) {
    if (
      (direction === 'lower' && guessedNumber < userNumber) ||
      (direction === 'greater' && guessedNumber > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = guessedNumber;
    } else {
      minBoundary = guessedNumber + 1;
    }
    const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, guessedNumber);
    setGuessedNumber(newRandomNumber);
  }

  useEffect(() => {
    if (guessedNumber === userNumber) {
      onGameOver();
    }
  }, [guessedNumber, userNumber, onGameOver]);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{guessedNumber}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
          </View>
        </View>
      </Card>
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
  instructionText: {
    marginBottom: 12,
  },
});
