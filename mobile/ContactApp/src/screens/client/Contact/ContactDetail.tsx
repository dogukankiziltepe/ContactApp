// Contact detail screen
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { getUserContactDetails } from '../../../store/contact/selectors';
import { useDispatch } from 'react-redux';
import { castThunkAction } from '../../../helpers/casting';
import { getUser } from '../../../store/auth/selectors';
import { getContactDetails, getContacts } from '../../../store/thunks/contact-thunks';
import { StackScreenProps } from '@react-navigation/stack';
import { PhoneNumber } from '../../../types/PhoneNumber';


export default function ContactDetail({navigation,route}:StackScreenProps<any>) {
    const dispatch = useDispatch();
    const contact = getUserContactDetails();
    useEffect(() => {
        castThunkAction<any>(dispatch(getContactDetails(route.params?.id)));
    }, []);
    console.log(contact);
    return (
        <View style={styles.container}>
            <View style={styles.inputView} >
                <Text style={{marginTop:10,color:"white",fontSize:20}}>Name : {contact?.name}</Text>
                {contact?.PhoneNumbers?.map((phone:PhoneNumber) => (
                    <Text style={{marginTop:10,color:"white"}}>Phone : {phone.phoneNumber}</Text>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
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
});


