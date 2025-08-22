import { useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

function MealsOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;
  const meals = MEALS.filter(meal => meal.categoryIds.includes(categoryId));

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(category => category.id === categoryId).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  function renderMealItem(itemData) {
    const meal = itemData.item;
    const mealProps = {
      title: meal.title,
      imageUrl: meal.imageUrl,
      duration: meal.duration,
      complexity: meal.complexity,
      affordability: meal.affordability,
    };
    return <MealItem {...mealProps} />;
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
