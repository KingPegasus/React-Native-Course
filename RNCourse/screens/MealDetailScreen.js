import { useLayoutEffect } from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import IconButton from '../components/IconButton';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
// import { FavoritesContext } from '../store/context/favorites-context';

import { addFavorite, removeFavorite } from '../store/redux/favorites';

function MealDetailScreen({ route, navigation }) {
  // const favoriteMealsContext = useContext(FavoritesContext);
  const dispatch = useDispatch();
  const favoriteMealsIds = useSelector(state => state.favoriteMeals.ids);
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  const mealIsFavorite = favoriteMealsIds.includes(mealId);

  function markFavorite() {
    if (mealIsFavorite) {
      dispatch(removeFavorite({ id: mealId }));
    } else {
      dispatch(addFavorite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? 'star' : 'star-outline'}
            onPressIn={markFavorite}
            color="white"
          />
        );
      },
    });
  }, [navigation, markFavorite, favoriteMealsIds]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },

  detailText: {
    fontSize: 12,
    color: '#dce394',
  },
  listContainer: {
    width: '80%',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
});
