// new contact screen
import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import PhoneInputs from '../../../components/PhoneInputs';
import { useDispatch } from 'react-redux';
import { castThunkAction } from '../../../helpers/casting';
import { addContact } from '../../../store/thunks/contact-thunks';
import { getUser } from '../../../store/auth/selectors';

export default function NewContactScreen() {
    const [name, setName] = React.useState('');
    const [surname, setSurname] = React.useState('');
    const [phone, setPhone] = React.useState([""]);
    const dispatch = useDispatch();
    const user = getUser();
    const createContact = () => {
      castThunkAction<any>(dispatch(addContact({userID:user?.id,name,surname,phoneNumbers:phone}))).then(() => {
        console.log("contact added");
      });
    }
  return (
    <View style={styles.container}>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Name..."
          placeholderTextColor="#003f5c"
          onChangeText={text => setName(text)}
        />
      </View>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Surname..."
          placeholderTextColor="#003f5c"
          onChangeText={text => setSurname(text)}
        />
      </View>
      <Text style={{marginBottom:10}}>Phone Numbers</Text>
        <PhoneInputs inputList={phone} setPhone={setPhone}/>
      <TouchableOpacity onPress={() => createContact()} style={styles.loginBtn}>
        <Text style={styles.loginText}>Add Contact</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
  },
  inputText:{
    height:50,
    color:"white",
    paddingLeft:10
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});
