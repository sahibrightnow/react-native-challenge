import {Button} from 'react-native-paper';
import { StyleSheet, Text, View, Image, StatusBar, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default SignUp = () => {
   
    const remote ='../../../assets/Photo.png';
    const resizeMode='contain';
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
        
        
          <Image
            style={{
              flex: 1, resizeMode,
              backgroundRepeat: 'no-repeat',
              position: 'absolute',
width: '100%',
height: '100%',
// left: '0px',
// top: '0px',

backgroundColor: 'linear-gradient(180deg, rgba(0, 13, 22, 0.95) 0%, rgba(0, 13, 22, 0.37) 21.73%, rgba(0, 13, 22, 0) 39.28%, rgba(0, 13, 22, 0.51) 52.52%, rgba(0, 13, 22, 0.906807) 79.44%, #000D16 100%)'
            }}
            source={require(remote)}
          />
          {/* <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,backgroundColor:'rgba(0,0,0,0.5)', width:'100%', height:'100%'}}/> */}
          
          {/* <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}> */}
          <Text style={{color: 'white', marginTop:400, fontSize:40, marginLeft:50, marginRight:50}}>Gain access to a large highly influential network of entrepreneurs!</Text>
          
    {/* </View> */}
            <Button uppercase={false} color='white' onPress={()=> navigation.navigate('Register')} style={{width: 294,
height: 56, borderRadius: '6px', backgroundColor:'#91C15F', paddingTop:10, marginTop:40}}>Apply Now!</Button>
            <Button uppercase={false} color='white' onPress={()=> navigation.navigate('Login')} style={{width: 294,
height: 56, borderRadius: '6px', marginTop:20, backgroundColor:'rgba(0, 40, 48, 0.1)', borderWidth:1, borderColor: 'white', paddingTop:10, marginBottom:40}}>Log In</Button>
          <StatusBar style="auto" />
        </View> 
      );
 };

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });