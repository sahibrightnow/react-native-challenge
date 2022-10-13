import React, {useState, useContext} from 'react';
import {TextInput, Button} from 'react-native-paper';
import { Formik } from 'formik';
import { StyleSheet, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup';
import axios from 'axios'
import Modal from "react-native-modal";
import { LoginContext } from "../context/LoginContext";
const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  })
export default Login = () => { 

    const navigation = useNavigation();
    const [userToken, setUserToken] = useContext(LoginContext);
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [isRegistered, setisRegistered] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);

   
    
    const togglePasswordError = () => {
      setModalVisible(!isModalVisible)
    }

    return (
        
        <View style={{paddingTop:60, backgroundColor:'black', height: '100%'}}>
        
        <Text style={{color:'white', fontSize:40, textAlign:'center', marginTop:100}}>Log In</Text>
            <Formik
                 validationSchema={loginValidationSchema}
                 initialValues={{ email: '', password: '' }}
                 onSubmit={values => {
                    console.log(values)
                    axios.post(`https://challenge2344.herokuapp.com/api/v1/users/login`, {
          
          email: values.email,
          password: values.password,
        }).then(res => {
          console.log(res.data.status)
          if (res.data.status == "ok") {
            setisRegistered(true)
          
            setUserToken(res.data.userToken)
            navigation.navigate('HomePage')
            console.log(res.data);
          }
          else if(res.data.error === "Email not registered") {
            setisRegistered(true)
          }
          else {
            setisRegistered(false)
            togglePasswordError();
          }

        })
          .catch((error) => console.log(error))}}
               >
                 {({ handleChange, handleBlur, handleSubmit, values,errors,
     isValid, touched}) => (
                   <View style={{marginTop:50}}>
                   <Text style={{color: 'white', fontSize:20, paddingLeft:15}}>Email</Text>
             <TextInput
                style={styles.input}
               onChangeText={handleChange('email')}
               onBlur={handleBlur('email')}
               value={values.email}
               right={<TextInput.Icon style={styles.icon} name={isRegistered && "alert"}  />}
             />
             {(errors.email && touched.email) &&
            <Text style={styles.error}>{errors.email}</Text>
       }
       {isRegistered && <Text style={{paddingLeft:15, fontSize: 12, color: 'red' }}>The email entered is not registered</Text> }
             <Text style={{color: 'white', fontSize:20, paddingLeft:15, marginTop:20}}>Password</Text>
             <TextInput
               style={styles.input}
               onChangeText={handleChange('password')}
               onBlur={handleBlur('password')}
               value={values.password}
               placeholder='Type your password'
               secureTextEntry={passwordVisible}
                right={<TextInput.Icon style={styles.icon} name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
             />
             {(errors.password && touched.password) &&
            <Text style={styles.error}>{errors.password}</Text>
       }
             <Button color='white' style={{width: 355,
height: 56, borderRadius: '6px', backgroundColor:'#91C15F', paddingTop:10, marginLeft:15, marginTop:165}} onPress={handleSubmit} disabled={!isValid}>Sign In</Button>
<Modal style={{width:'60%', backgroundColor:'white', margin:'20%', marginTop:300, marginBottom:300, borderRadius:6}}
  isVisible={isModalVisible}
  onBackdropPress={() => setModalVisible(false)}
>
  <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{fontWeight:'bold', fontSize:28, textAlign:'center'}}>Incorrect Password!</Text>
    <Text style={{marginTop:10, fontSize:16, textAlign:'center'}}>The password you entered for<Text style={{fontWeight:'bold'}} > {values.email} </Text>is incorrect</Text>
    <Button color="white" style={{marginTop:30, backgroundColor:'#91C15F'}} onPress={togglePasswordError}>Try Again </Button>
  </View>
</Modal>
                   </View>
                 )}
               </Formik>

            <Text style={{textAlign:'center', color: 'white', fontSize:14, paddingLeft:15, marginTop:30}}>Not a member?<Text style={{fontWeight:'700'}} onPress={()=> navigation.navigate('SignUp')}>Join the club</Text></Text>
            
        </View>

    )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 10,
    padding: 10,
    placeholderTextColor: 'rgba(85, 94, 101, 1)',
    
    paddingLeft: 0,
    marginLeft: 5,
    start:0
  },
  icon: { 
    marginTop: 25,
    
  },
  error: {marginTop:0, fontSize: 12, color: 'red', paddingLeft:15 }
  });