import { StatusBar } from 'expo-status-bar';

import AppStack from './src/components/stacks/AppStack';
import { LoginProvider } from './src/components/context/LoginContext'

export default function App() {
  return (
    <LoginProvider>
    <AppStack/>
    </LoginProvider>
  );
}


