// import { useContext } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { COLORS } from '../constants/colors';
import { useSelector } from 'react-redux';

import MealList from '../components/MealsList/MealList';
// import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';

function FavoritesScreen() {
  // const favioriteMealsContext = useContext(FavoritesContext);
  const favoriteMealsIds = useSelector(state => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter(meal => favoriteMealsIds.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.noFavoritesText}>No Favorites Found</Text>
      </View>
    );
  }
  return <MealList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  noFavoritesText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
