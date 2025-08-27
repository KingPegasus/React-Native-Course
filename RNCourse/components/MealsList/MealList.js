import { FlatList, View, StyleSheet } from 'react-native';
import MealItem from './MealItem';

function MealList({ items }) {
  function renderMealItem(itemData) {
    const meal = itemData.item;
    const mealProps = {
      id: meal.id,
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
      <FlatList data={items} keyExtractor={item => item.id} renderItem={renderMealItem} />
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

export default MealList;
