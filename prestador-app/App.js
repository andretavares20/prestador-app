import { NativeBaseProvider} from "native-base";
import { SignUp } from './src/screens/SignUp';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenCadastro } from "./src/screens/ScreenCadastro";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator initialRouteName="SignUp">
          <Stack.Screen options={{ headerShown: false}} name="SignUp" component={SignUp}/>
          <Stack.Screen options={{ headerShown: false}} name="ScreenCadastro" component={ScreenCadastro} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
