import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function IconButton({ icon, onPressIn, color }) {
  return (
    <Pressable onPressIn={onPressIn}>
      {({ pressed }) => <Ionicons name={icon} size={pressed ? 26 : 24} color={color} />}
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    margin: 8,
  },
});
