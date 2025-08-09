import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';

const FlexboxExample = () => {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), text: enteredGoalText },
    ]);
    setEnteredGoalText('');
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goal..."
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title="Add goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => (
            <View style={styles.goalItem}>
              <Text style={styles.goalItemText}>{itemData.item.text}</Text>
            </View>
          )}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    backgroundColor: '#5e0acc',
    borderRadius: 6,
  },
  goalItemText: {
    color: 'white',
  },
});

export default FlexboxExample;
