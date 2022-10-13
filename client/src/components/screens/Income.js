import { StyleSheet, Text, View, Image, Button, StatusBar, Alert } from 'react-native';
import LogOut from '../layout/Logout.js';

export default Income = () => {
    return (
        <View style={{backgroundColor:'black', height:'100%'}}>
        <LogOut/>
            <Text style={{fontSize:40, color:'white', marginTop:'100%', textAlign:'center'}}>Income</Text>
        </View>
    )
}