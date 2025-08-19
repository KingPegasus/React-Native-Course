import { Platform, Pressable, View, Text, StyleSheet } from 'react-native';

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: '#ccc', foreground: true }}
        onPress={onPress}
        style={styles.button}
      >
        {({ pressed }) => (
          <View style={[styles.container, { backgroundColor: color }, pressed && styles.pressed]}>
            <Text style={styles.title}>{title}</Text>
          </View>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  button: {
    flex: 1,
  },
  pressed: {
    opacity: 0.75,
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default CategoryGridTile;
