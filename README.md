# react-native-challenge
This React Native app was completed as a part of a coding challenge to implement simple sign in/sign up features for an application.
I worked on this app for 48 hours and was able to accomplish this.

Tech Stack
React Native using Expo CLI
Formik for managing form data and yup for form validation
React Native Paper for styling UI elemnts.
NodeJS with express for the server
MongoDB database


The Registeration form validates data simultaneously and the submit button remains disabled until the data is validated.
Same goes for login form.
Incase the password is incorrect, a modal appears to prompt user to try again.
The user's data is stored in the device as usertoken, securely encrypted as a jwt token 
I've used context api for the app to access this user token, wherever necessary.
The logout button erases the usertoken. Thus, taking the user back to the authentication page.
