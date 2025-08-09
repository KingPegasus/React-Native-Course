import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './GoalItem';
import GoalInput from './GoalInput';

const FlexboxExample = () => {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), text: enteredGoalText },
    ]);
  }

  function deleteGoalHandler(goalId) {
    setCourseGoals(currentGoals => currentGoals.filter(goal => goal.id !== goalId));
  }

  return (
    <View style={{ flex: 1 }}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem
              text={itemData.item.text}
              onDeleteItem={deleteGoalHandler}
              goalId={itemData.item.id}
            />
          )}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 5,
  },
});

export default FlexboxExample;
