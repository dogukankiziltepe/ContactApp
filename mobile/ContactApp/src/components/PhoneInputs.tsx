import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView } from 'react-native';

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

  return (
    <ScrollView>
      {props.inputList.map((inputField, index) => (
        <View style={{height:50, width:300}} key={index}>
          <TextInput 
          style={{ height: 40, borderColor: 'gray', borderWidth: 1,borderRadius:25,paddingLeft:10 }}
            value={inputField}
            onChangeText={(text) => handleInputChange(text, index)}
          />
        </View>
      ))}
      <Button title="Add more" onPress={() => handleAddClick() } />
    </ScrollView>
  );
}

export default App;