import { View, Text, StyleSheet } from 'react-native';

function List({ data }) {
  return data.map(dataPoint => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.text}>{dataPoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 8,
    backgroundColor: '#dce394',
    borderRadius: 6,
  },
  text: {
    color: '#4b5307',
    textAlign: 'center',
  },
});
