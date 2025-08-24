import { View, Text, Button } from 'react-native';
import { MEALS } from '../data/dummy-data';

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  function onPressBack() {
    navigation.goBack();
  }
  return (
    <View>
      <Text>{selectedMeal.title}</Text>
      <Button title="Back" onPress={onPressBack} />
    </View>
  );
}

export default MealDetailScreen;
