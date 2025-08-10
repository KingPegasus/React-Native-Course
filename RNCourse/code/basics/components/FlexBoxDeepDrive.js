import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const FlexBoxDeepDrive = () => {
  return (
    <View style={{padding: 20}}>
      <View style={{flexDirection: 'row', width: '100%', height: 40,
                justifyContent: 'space-around',
                alignItems: 'stretch',}}>
        <View style={{flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'white'}}>1</Text>
        </View>
        <View style={{flex: 2, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'white'}}>2</Text>
        </View>
        <View style={{flex: 1, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'white'}}>3</Text>
        </View>
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

export default FlexBoxDeepDrive;