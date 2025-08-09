import { Text, View, StyleSheet, Pressable } from 'react-native';
function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: 'rgb(147, 64, 255)' }}
        style={({ pressed }) => pressed && styles.pressediOS}
        onPress={props.onDeleteItem.bind(this, props.goalId)}
      >
        <Text style={styles.goalItemText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: 'rgb(94, 10, 204)',
    borderRadius: 6,
  },
  goalItemText: {
    color: 'white',
    padding: 8,
  },
  pressediOS: {
    opacity: 0.5,
  },
});

export default GoalItem;
