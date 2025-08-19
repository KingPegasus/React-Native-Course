import { View, Text, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';
function MealsOverviewScreen({ categoryId }) {
  const meals = MEALS.filter(meal => meal.categoryIds.includes(categoryId));
  return (
    <View style={styles.container}>
      <Text>{meals.length} meals found</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealsOverviewScreen;
