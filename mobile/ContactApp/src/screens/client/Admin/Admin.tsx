// Admin screen
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AdminList from '../../../components/AdminList';
import { StackScreenProps } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AdminScreen({navigation,route}:StackScreenProps<any>) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.logo}>Admin Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Create User")} style={styles.createButton}>
                <Text>Create User</Text>
            </TouchableOpacity>
            <TouchableOpacity>
               <AdminList navigation={navigation} route={route}/>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop:50,
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
    createButton:{
        width: "40%",
        backgroundColor: "green",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    }
  });