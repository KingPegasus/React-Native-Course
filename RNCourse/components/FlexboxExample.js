import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const FlexboxExample = () => {
  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your name...' />
        <Button title='Add name' />
      </View>
      <View>
        <Text>Names</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    marginRight: 8,
    padding: 8
  },

});

export default FlexboxExample;