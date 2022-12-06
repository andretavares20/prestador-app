import { NativeBaseProvider} from "native-base";
import { SignUp } from './src/screens/SignUp';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PreLogin } from "./src/components/PreLogin";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator initialRouteName="PreLogin">
          <Stack.Screen options={{ title: '', headerShown: false}}  name="SignUp" component={SignUp}/>
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
