import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const FlexboxExample = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Enter your name...' />
        <Button title='Add name' />
      </View>
      <View style={styles.goalsContainer}>
        <Text style={{paddingVertical: 24}}>Names</Text>
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
   flex: 6, 
  }

});

export default FlexboxExample;