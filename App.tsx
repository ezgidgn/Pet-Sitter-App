import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StackScreenProps, createStackNavigator } from "@react-navigation/stack";
import BottomTabsNavigator from "./navigation/BottomTabsNavigator";
import LoginScreen from "./screens/LoginPage/LoginScreen";
import NavigationConstants from "./navigation/NavigationConstants";
import SignUpNextScreen from "./screens/LoginPage/SignUpNextScreen";

import {  useFonts, Inter_900Black,  Inter_400Regular,Inter_500Medium, Inter_600SemiBold,} from '@expo-google-fonts/inter';

import SignUpScreen from "./screens/LoginPage/SignUpScreen";




type RootStackParamList = {
  LoginPage: undefined;
  Home: undefined;
};



const Stack = createStackNavigator();
export default function App () {

  //font ayarı:
  let [fontsLoaded] = useFonts({
    Inter_900Black,  Inter_400Regular, Inter_500Medium, Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginPage"
          component={LoginScreen}
          options={{
            headerShown: false,
            headerBackTitleVisible: false,
            gestureEnabled: false,
            
            
          }}
        />
         <Stack.Screen
          name={NavigationConstants.signUp}
          component={SignUpScreen}
          options={{
            headerShown: false,
            headerBackTitleVisible: false,
          }}
        />
         <Stack.Screen
          name={NavigationConstants.signUpNext}
          component={SignUpNextScreen}
          options={{
            headerShown: false,
            headerBackTitleVisible: false,
          }}
        />

        <Stack.Screen
          name={NavigationConstants.home}
          component={BottomTabsNavigator}
          options={{
            headerShown: false,
            headerBackTitleVisible: false,
         
          
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});