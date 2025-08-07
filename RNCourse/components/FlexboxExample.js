
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const FlexboxExample = () => {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };
  function addGoalHandler() {
    setCourseGoals((currentGoals) => [...currentGoals, enteredGoalText]);
    setEnteredGoalText('');
  };


  return (
    <View style={{flex: 1}}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder='Enter your goal...' 
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title='Add goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal, index) => (
          <Text key={index}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex:1,
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
    padding: 8
  },
  goalsContainer: {
   flex: 5, 
  }

});

export default FlexboxExample;