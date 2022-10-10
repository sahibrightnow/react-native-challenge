import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Authentication from '../layout/Authentication';


const Stack = createNativeStackNavigator();

const Appstack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Authentication'>
          <Stack.Screen name="Authentication"
          options={{
            headerShown: false,
          }}>{() => <Authentication />}</Stack.Screen>

        </Stack.Navigator>
    </NavigationContainer>
  );
}