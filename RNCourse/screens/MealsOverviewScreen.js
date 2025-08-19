import { View, Text, StyleSheet } from 'react-native';

import { MEALS } from '../data/dummy-data';

function MealsOverviewScreen({ route }) {
  const categoryId = route.params.categoryId;
  const meals = MEALS.filter(meal => meal.categoryIds.includes(categoryId));
  return (
    <View style={styles.container}>
      <Text>
        {categoryId} - {meals.length}
      </Text>
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
