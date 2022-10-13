import { StyleSheet, Text, View, Image, Button, StatusBar, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogOut from '../layout/Logout.js';




export default Home = () => {

    const navigation = useNavigation();
    return (
        <View style={{backgroundColor:'black', height:'100%'}}>
            <LogOut/>
            <Text style={{fontSize:40, color:'white', marginTop:'100%', textAlign:'center'}}>Home</Text>
        </View>
    )
}