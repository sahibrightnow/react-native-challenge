import React, {useState, useContext} from 'react';
import axios from 'axios';
import { LoginContext } from "../context/LoginContext";

import { Formik } from 'formik';
import { TextInput, Button } from 'react-native-paper';
import { StyleSheet, Text, View, Image, StatusBar, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup';
const RegisterValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  cPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
})

export default Register = () => {
  const [userToken, setUserToken] = useContext(LoginContext)
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [cPasswordVisible, setcPasswordVisible] = useState(true);

    const navigation = useNavigation();
    return (
        
        <View style={{paddingTop:60, backgroundColor:'black', height: '100%'}}>
        <Text style={{color:'white', fontSize:40, textAlign:'center', marginTop:100}}>Register</Text>
            <Formik
                validationSchema={RegisterValidationSchema}
                initialValues={{ email: '', password: '', cPassword: '' }}
                onSubmit={values => {
                console.log(values);
                axios.post(`https://challenge2344.herokuapp.com/api/v1/users`, {
          
          email: values.email,
          password: values.password,
        }).then(res => {
          console.log(res.data.status)
          if (res.data.status == "SUCCESS") {
            setUserToken(res.data.userToken)
            navigation.navigate('HomePage')
            console.log(res.data);
          }
        })
          .catch((error) => console.log(error))}}
               >
                 {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, touched }) => (
                   <View style={{marginTop:50}}>
                   <Text style={{color: 'white', fontSize:20, paddingLeft:15}}>Email</Text>
             <TextInput
             
             selectionColor='white'
             activeUnderlineColor='white'
             underlineColor='white'
             
             theme={{colors: {text: 'white'}}}
                style={styles.input}
               onChangeText={handleChange('email')}
               onBlur={handleBlur('email')}
               value={values.email}
             />
              {(errors.email && touched.email) &&
            <Text style={styles.error}>{errors.email}</Text> }
             <Text style={{color: 'white', fontSize:20, paddingLeft:15}}>Password</Text>
             <TextInput
             theme={{colors: {text: 'white'}}}
             selectionColor='white'
             underlineColor='white'
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
             <Text style={{color: 'white', fontSize:20, paddingLeft:15}}>Confirm Password</Text>
             <TextInput
             selectionColor='white'
             underlineColor='white'
               style={styles.input}
               onChangeText={handleChange('cPassword')}
               onBlur={handleBlur('cPassword')}
               value={values.cPassword}
               placeholder='Confirm your password'
               secureTextEntry={cPasswordVisible}
                right={<TextInput.Icon style={styles.icon} name={cPasswordVisible ? "eye" : "eye-off"} onPress={() => setcPasswordVisible(!cPasswordVisible)} />}
             />
             {(errors.cPassword && touched.cPassword) &&
            <Text style={styles.error}>{errors.cPassword}</Text>
       }
             <Button color='white' style={{width: 355,
height: 56, borderRadius: '6px', backgroundColor:'#91C15F', paddingTop:10, marginLeft:15, marginTop:40}} onPress={handleSubmit} disabled={!isValid}>Register</Button>
                   </View>
                 )}
               </Formik>

            <Text>Not a member?</Text>
            <Text onPress={()=> navigation.navigate('SignUp')}>Join the club</Text>
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
      backgroundColor:'black',
      paddingLeft: 0,
      marginLeft: 5,
      start:0,
      marginTop:0
      
    },
    icon: { 
      marginTop: 25,
    },
    error: {
      marginTop:0, fontSize: 12, color: 'red', paddingLeft:15 
    }
  });