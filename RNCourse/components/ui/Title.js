import { Text, StyleSheet } from 'react-native';
import colors from '../../constants/colors';
function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 24,
    textAlign: 'center',
    color: 'white',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  },
});
