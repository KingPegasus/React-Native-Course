import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './GoalItem';
import GoalInput from './GoalInput';

const FlexboxExample = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function startAddGoalHandler() {
    setModalVisible(true);
  }

  function endAddGoalHandler() {
    setModalVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), text: enteredGoalText },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(goalId) {
    setCourseGoals(currentGoals => currentGoals.filter(goal => goal.id !== goalId));
  }

  return (
    <View style={{ flex: 1 }}>
      <Button title="Add new goal" color="#a065ec" onPress={startAddGoalHandler} />
      <GoalInput onAddGoal={addGoalHandler} visible={modalVisible} onCancel={endAddGoalHandler} />

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
