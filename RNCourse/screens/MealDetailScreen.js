import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  function onPressBack() {
    navigation.goBack();
  }
  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <Text>Ingredients</Text>
      <View>
        {selectedMeal.ingredients.map((ingredient, index) => (
          <Text key={index}>{ingredient}</Text>
        ))}
      </View>
      <Text>Steps</Text>
      <View>
        {selectedMeal.steps.map((step, index) => (
          <Text key={index}>{step}</Text>
        ))}
      </View>
      <Button title="Back" onPress={onPressBack} />
    </View>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
});
