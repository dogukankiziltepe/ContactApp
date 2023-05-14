// Profile screen
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StackScreenProps } from "@react-navigation/stack";
import { castThunkAction } from '../../../helpers/casting';
import { useDispatch } from 'react-redux';
import {logout } from '../../../store/thunks/auth-thunks';
import {getUser } from '../../../store/auth/selectors';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen({ navigation, route }: StackScreenProps<any>) {
    const dispatch = useDispatch();
    const user = getUser();
    const Logout = () => {
        castThunkAction<any>(dispatch(logout())).then(() => {
            console.log("logout success")
        })
    }
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.logo}>{user.username}</Text>
            <TouchableOpacity onPress={() => Logout()} style = {styles.border}>
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#fb5b5a",
    },
    border: {
        marginTop:20,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 6,
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"red"
    },
    logoutText: {
        color: "white",
        fontSize: 20,
    }
});