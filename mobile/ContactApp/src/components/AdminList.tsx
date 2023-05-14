// contact list screen
import React, { useEffect } from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { castThunkAction } from '../helpers/casting';
import { useDispatch } from "react-redux";
import { getUser, getUsers } from '../store/auth/selectors';
import { StackScreenProps } from '@react-navigation/stack';
import { getAllUsers } from '../store/thunks/auth-thunks';
import { useIsFocused } from '@react-navigation/native';

export default function AdminList({navigation}:StackScreenProps<any>) {
  const dispatch = useDispatch();
  const user = getUser();
  const users = getUsers();
  const isFocused = useIsFocused();
  console.log(users)
  useEffect(() => {
    if(user !== null){
      castThunkAction<any>(dispatch(getAllUsers()));
    }
  }, [isFocused]);
  const goToContactList = (id:number,username:string) => {
    navigation.navigate("ContactList",{id,username});
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        style={{width:300}}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.contactItem} onPress={() => goToContactList(item.id,item.username)}>
            <Text style={styles.item}>{item.username}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    paddingTop:20,
      flex: 1,
      backgroundColor: '#003f5c',
      alignItems: 'center',
  },
  logo: {
      fontWeight: "bold",
      fontSize: 50,
      color: "#fb5b5a",
  },
  inputView: {
      width: "80%",
      backgroundColor: "#465881",
      borderRadius: 25,
      height: 50,
      marginBottom: 20,
      justifyContent: "center",
  },
  inputText: {
      height: 50,
      color: "white",
  },
  forgot: {
      color: "white",
  },
  loginBtn: {
      width: "80%",
      backgroundColor: "#fb5b5a",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color:"white"
  },
  contactItem:{
    borderWidth:1,
    borderRadius:6,
    backgroundColor:"grey",
    marginLeft:10,
    marginRight:10,
    marginTop:5,
    width:"90%",
    alignItems:"center"
  }
});