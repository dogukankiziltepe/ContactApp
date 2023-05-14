// contact list screen
import React, { useEffect } from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { castThunkAction } from '../../../helpers/casting';
import { getContacts } from '../../../store/thunks/contact-thunks';
import { useDispatch } from "react-redux";
import { getUser } from '../../../store/auth/selectors';
import { getUserContacts } from '../../../store/contact/selectors';
import { StackScreenProps } from '@react-navigation/stack';
import { deleteUser } from '../../../store/thunks/auth-thunks';
import { useIsFocused } from '@react-navigation/native';

export default function ContactListScreen({navigation,route}:StackScreenProps<any>) {
  const dispatch = useDispatch();
  const user = getUser();
  console.log(user)
  const isFocused = useIsFocused();
  const contacts = getUserContacts();
  useEffect(() => {
    if(user !== null){
      if(route.params?.id && user.role === "admin"){
        castThunkAction<any>(dispatch(getContacts(route.params?.id)));
      }
      else{ 
        castThunkAction<any>(dispatch(getContacts(user?.id)));
    }
  }}, [isFocused]);

  const goToContactDetail = (id:number) => {
    navigation.navigate("Contact Detail",{id});
  }
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>{user?.role === "admin" && route.params?.id ?  route.params?.username : "Contact App" }</Text>
      {user?.role === "admin" && route.params?.id && (<View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.updateButton}>
            <Text onPress={() => {
              if(user?.role === "admin" && route.params?.id){
                navigation.navigate("Create User",{id:route.params?.id});
              }
              else{
                navigation.navigate("Create User");
              }
            }}
             style={styles.buttonText}>Update User</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
                castThunkAction<any>(dispatch(deleteUser(route.params?.id)));
          }} style={styles.deleteButton}>
            <Text style={styles.buttonText}>Delete User</Text>
          </TouchableOpacity>
      </View>)}
      
      <FlatList
        data={contacts}
        style={{width:"100%"}}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.contactItem} onPress={() => goToContactDetail(item.id)}>
            <Text style={styles.item}>{item.name} {item.surname}</Text>
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
      justifyContent: 'center',
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
  updateButton:{
    width: "40%",
    backgroundColor: "blue",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginRight:10
  },
  deleteButton:{
    width: "40%",
    backgroundColor: "red",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginLeft:10
  },
  buttonText:{
    color:"white"
  },
  buttonGroup:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    marginBottom:20
  },
  contactItem:{
    borderWidth:1,
    borderRadius:6,
    backgroundColor:"grey",
    marginLeft:10,
    marginRight:10,
    marginTop:5
  }

});