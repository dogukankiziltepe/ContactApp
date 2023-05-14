import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView, Touchable, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
    inputList: string[];
    setPhone: React.Dispatch<React.SetStateAction<string[]>>
}
const App = (props:Props) => {
  const handleInputChange = (text:string, index:number) => {
    const list = [...props.inputList];
    list[index] = text;
    props.setPhone(list);
  };

  const handleAddClick = () => {
    props.setPhone([...props.inputList, ""]);
  };

  const deletePhone = (index:number) => {
    const list = [...props.inputList];
    list.splice(index, 1);
    props.setPhone(list);
  };

  return (
    <ScrollView>
      {props.inputList.map((inputField, index) => (
        <View style={{height:50, width:300}} key={index}>
          <TextInput 
          style={{ height: 40, borderColor: 'gray', borderWidth: 1,borderRadius:25,paddingLeft:10 }}
            value={inputField}
            onChangeText={(text) => handleInputChange(text, index)}
          />
          {index !== 0 && (<TouchableOpacity style={styles.deleteCross} onPress={() => deletePhone(index)}>
            <Text>x</Text>
          </TouchableOpacity>)}
          
        </View>
      ))}
      <Button title="Add more" onPress={() => handleAddClick() } />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  deleteCross: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    color:"white"}
  })
export default App;