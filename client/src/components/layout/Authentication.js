import { StyleSheet, Text, View, ImageBackground,  StatusBar, Alert } from 'react-native';
import {Button} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Authentication() {
    const remote ='../../../assets/Photo.png';
    const resizeMode='contain';
    const navigation = useNavigation();
    return (
    <View style={styles.container}>
    
    
      <ImageBackground
        style={{
          marginTop:0,
          flex: 1, resizeMode,
          backgroundRepeat: 'no-repeat',
          position: 'absolute',
          width: '100%',
          height: '100%',
          // left: '0px',
          // top: '0px',

          background: 'linear-gradient(180deg, rgba(0, 13, 22, 0.95) 0%, rgba(0, 13, 22, 0.37) 21.73%, rgba(0, 13, 22, 0) 39.28%, rgba(0, 13, 22, 0.51) 52.52%, rgba(0, 13, 22, 0.906807) 79.44%, #000D16 100%)'
        }}
        source={require(remote)}
      />
      <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,backgroundColor:'linear-gradient(180deg, rgba(0, 13, 22, 0.2) 0%, rgba(0, 13, 22, 0.1) 21.73%, rgba(0, 13, 22, 0) 39.28%, rgba(0, 13, 22, 0.51) 52.52%, rgba(0, 13, 22, 0.6807) 79.44%, #000D16 100%)', width:'100%', height:'100%'}}/>
      
      <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize:40, color: 'white', marginLeft: -150, marginTop: 400  }}>Welcome!</Text>
      <Text style={{fontSize:17, color: 'white', marginLeft: 35, marginTop:10, marginRight:110}}>Obtain unfiltered insight on how others like you excel at life and business on a daily basis.</Text>
</View>
        <View style={{marginTop:650}}><Button style={{width: 294,
height: 56, borderRadius: '6px', backgroundColor:'#91C15F', paddingTop:10, marginLeft:-14}} color="white"   onPress={()=> navigation.navigate('SignUp')}>Get Started</Button></View>
      <StatusBar style="auto" />
    </View> 
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
  });