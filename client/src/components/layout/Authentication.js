

export default function Authentication() {
    const resizeMode='contain';
  return (
    <View style={styles.container}>
    
    
      <Image
        style={{
          flex: 1, resizeMode,
          backgroundRepeat: 'no-repeat',
        }}
        source={require(remote)}
      />
      <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,backgroundColor:'rgba(0,0,0,0.5)', width:'100%', height:'100%'}}/>
      
      <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize:40, color: 'white', marginLeft: -120, marginTop: 400  }}>Welcome!</Text>
      <Text style={{fontSize:17, color: 'white', marginLeft: 35, marginTop:10, marginRight:80}}>Obtain unfiltered insight on how others like you excel at life and business on a daily basis.</Text>
</View>
        <Button style={{color:'green'}} title="Get started"/>
      <StatusBar style="auto" />
    </View> 
  );
}