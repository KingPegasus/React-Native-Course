import { useLayoutEffect } from 'react';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealsList/MealList';

function MealsOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;
  const meals = MEALS.filter(meal => meal.categoryIds.includes(categoryId));

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(category => category.id === categoryId).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return <MealList items={meals} />;
}

export default MealsOverviewScreen;
