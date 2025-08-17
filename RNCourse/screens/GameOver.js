import { View, Image, StyleSheet, Text, useWindowDimensions, ScrollView } from 'react-native';

import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({ attempts, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();
  let imageSize = 300;
  if (width < 380) {
    imageSize = 200;
  }
  if (height < 400) {
    imageSize = 100;
  }
  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    margin: width < 380 ? 18 : 32,
  };
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>Game Over!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image source={require('../assets/images/success.png')} style={styles.image} />
        </View>
        <Text style={styles.resultText}>
          You phone needed <Text style={styles.highlight}>{attempts}</Text> attempts to guess the
          number <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  imageContainer: {
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.primary500,
    overflow: 'hidden',
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
    marginHorizontal: 8,
    marginBottom: 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
});

export default GameOverScreen;
