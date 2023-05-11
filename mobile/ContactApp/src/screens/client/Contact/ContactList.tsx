// contact list screen
import React, { useEffect } from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { castThunkAction } from '../../../helpers/casting';
import { getContacts } from '../../../store/thunks/contact-thunks';
import { useDispatch } from "react-redux";
import { getUser } from '../../../store/auth/selectors';
import { getUserContacts } from '../../../store/contact/selectors';
import { StackScreenProps } from '@react-navigation/stack';

export default function ContactListScreen({navigation}:StackScreenProps<any>) {
  const dispatch = useDispatch();
  const user = getUser();
  const contacts = getUserContacts();
  useEffect(() => {
    if(user !== null){
      castThunkAction<any>(dispatch(getContacts(user?.id)));
    }
  }, []);
  const goToContactDetail = (id:number) => {
    navigation.navigate("Contact Detail",{id});
  }
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Contact App</Text>
      <FlatList
        data={contacts}
        style={{width:"100%"}}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => goToContactDetail(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
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
  },
});