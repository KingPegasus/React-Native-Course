import { View, FlatList, StyleSheet } from 'react-native';

import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

function MealsOverviewScreen({ route }) {
  const categoryId = route.params.categoryId;
  const meals = MEALS.filter(meal => meal.categoryIds.includes(categoryId));

  function renderMealItem(itemData) {
    const meal = itemData.item;
    return <MealItem title={meal.title} />;
  }

  return (
    <View style={styles.container}>
      <FlatList data={meals} keyExtractor={item => item.id} renderItem={renderMealItem} />
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
