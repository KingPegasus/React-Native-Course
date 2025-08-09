import { Text, View, StyleSheet, Pressable } from 'react-native';
function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.goalId)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalItemText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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

export default GoalItem;
