import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Authentication from '../layout/Authentication';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Income from '../screens/Income';
import Library from '../screens/Library';
import Adventures from '../screens/Adventures';
import HomeIcon from '../../../assets/iconComponents/HomeIcon';
import AdventureIcon from '../../../assets/iconComponents/AdventureIcon'
import IncomeIcon from '../../../assets/iconComponents/IncomeIcon'
import Register from '../screens/Register';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const navColors = {
  primary: '#91C15F',
  secondary: '#FFFFFF'
}

const tabScreenOptions = {
  headerShown: false,
  tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold', marginTop:10 },
  
}

const TabStack = () => (
 
  <Tab.Navigator

    
    screenOptions={() => ({
      tabBarActiveTintColor: navColors.primary,
      tabBarInactiveTintColor: navColors.secondary,
      
      tabBarStyle: { backgroundColor: 'black', paddingTop:10 },
      
      
    })}
  >
    <Tab.Screen
   
      name="Home"
      component={Home}
      options={{
        ...tabScreenOptions,
        tabBarIcon: ({ focused, color, size }) => (
          
          <HomeIcon color={focused ? navColors.primary : navColors.secondary} />
        ),
      }}
    />
    <Tab.Screen
      name="Income"
      component={Income}
      options={{
        ...tabScreenOptions,
        tabBarIcon: ({ focused, color, size }) => (
         
          <IncomeIcon color={focused ? navColors.primary : navColors.secondary} />
        ),
      }}
    />
    <Tab.Screen
      name="Adventures"
      component={Adventures}
      options={{
        ...tabScreenOptions,
        tabBarIcon: ({ focused, color, size }) => (
          // <SvgUri source={require('../assets/nav_icons/bookingsIcon.svg')}
            // fill={focused ? navColors.primary : navColors.secondary} />
          <AdventureIcon color={focused ? navColors.primary : navColors.secondary} />                  
        ),
      }}
    />
    <Tab.Screen
      name="Library"
      component={Library}
      options={{
        ...tabScreenOptions,
        // tabBarIcon: ({ focused, color, size }) => (
        //   // <SvgUri
        //   //   source={require('../assets/nav_icons/profileIcon.svg')}
        //   //   fill={focused ? navColors.primary : navColors.secondary} />
        //   <ProfileIcon color={focused ? navColors.primary : navColors.secondary} />
        // ),
      }}
    />
  </Tab.Navigator>

)

const Appstack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Authentication'>
          <Stack.Screen name="Authentication"
          options={{
            headerShown: false,
          }}>{() => <Authentication />}</Stack.Screen>

          <Stack.Screen
          name="HomePage"
          component={TabStack}
          options={{
            headerShown: false,
            headerBackTitleVisible: false
          }}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
            headerBackTitleVisible: false
          }}
        />

<Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            headerBackTitleVisible: false
          }}
        />

<Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
            headerBackTitleVisible: false
          }}
        />

        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Appstack;