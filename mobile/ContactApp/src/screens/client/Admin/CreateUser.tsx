// create user screen
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { StackScreenProps } from "@react-navigation/stack";
import { castThunkAction } from '../../../helpers/casting';
import { useDispatch } from 'react-redux';
import { getUserDetails, register, updateUser } from '../../../store/thunks/auth-thunks';
import { getUpdateUser } from '../../../store/auth/selectors';
import RNPickerSelect from 'react-native-picker-select';

export default function CreateUserScreen({ navigation, route }: StackScreenProps<any>) {
    const [newUser, setNewUser] = React.useState({ email: "", username: "", password: "", status: "active" });
    const dispatch = useDispatch();
    const user = getUpdateUser();
    console.log(user,"updateuser")
    useEffect(() => {
        if (route.params?.id) {
            castThunkAction<any>(dispatch(getUserDetails(route.params?.id))).then(() => {
               
            })
        }
    }, []);

    useEffect(() => {
        if (user !== null &&route.params?.id ) {
            setNewUser(
                {
                    email: user.email,
                    username: user.username,
                    password: user.password,
                    status: user.status
                }
            );
        }
    }, [user]);
    const CreateUser = () => {
        if (user !== null && route.params?.id) {
            castThunkAction<any>(dispatch(updateUser(user.id, newUser))).then(() => {
                navigation.navigate("Admin");
            });
        }
        else {
            castThunkAction<any>(dispatch(register(newUser))).then(() => {
                navigation.navigate("Admin");
            });
        }
    }
    return (
        <View style={styles.container}>
            {user !== null && route.params?.id ? <Text  style={styles.logo}>{user.username}</Text> : <Text style={styles.logo}>Create User</Text>}
            {!route.params?.id && <View style = {{width:"100%", justifyContent:"center",alignItems:"center"}}>
                <View style={styles.inputView} >
                <TextInput
                    value={newUser.email}
                    style={styles.inputText}
                    placeholder="Email..."
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setNewUser({ ...newUser, email: text })}
                />
            </View>
            <View style={styles.inputView} >
                <TextInput
                    value={ newUser.username}
                    style={styles.inputText}
                    placeholder="Username..."
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setNewUser({ ...newUser, username: text })}
                />
            </View>
            <View style={styles.inputView} >
                <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Password..."
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setNewUser({ ...newUser, password: text })}
                />
            </View>
            </View> }
           
            {user !== null && route.params?.id && <View style={styles.inputView}>
                <RNPickerSelect
                    placeholder={{label:"Status",value:"null"}}
                    onValueChange={(value) => setNewUser({ ...newUser, status: value })}
                    items={[
                        { label: 'Active', value: 'active' },
                        { label: 'Passive', value: 'passive' }
                    ]}
                />
            </View>}

            <TouchableOpacity onPress={() => CreateUser()} style={styles.loginBtn}>
                <Text style={styles.loginText}>{route.params?.id ? "Update User": "Create User"} </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Admin")}>
                <Text style={styles.loginText}>Cancel</Text>
            </TouchableOpacity>
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
        marginBottom: 40
    },
    inputView: {
        width: "80%",
        backgroundColor: "#465881",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white"
    },
    forgot: {
        color: "white",
        fontSize: 11
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: "white"
    }
});
