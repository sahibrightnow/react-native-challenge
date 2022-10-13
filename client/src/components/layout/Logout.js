import { StyleSheet, Text, View, Alert} from 'react-native';
import React, {useState, useContext} from 'react';
import { LoginContext } from "../context/LoginContext";
import { useNavigation } from '@react-navigation/native';


export default LogOut = () => {
    const [userToken, setUserToken] = useContext(LoginContext);
    const navigation = useNavigation();
    const logOut = () => {
    return Alert.alert("Logout", "Are you sure you want to logout?", [{
      text: "Yes", onPress: () => {
        
        setTimeout(() => {
          
          setUserToken("")
          
          navigation.navigate("Authentication");
        }, 1000);
      }
    }, {
      text: "No",
    },])
}
    return (
        <View style={{position:'absolute', left:300, top:100}}><Text onPress={()=> logOut()} style={{fontSize:16, color:'white'}}>Log out</Text></View>
    )
}

