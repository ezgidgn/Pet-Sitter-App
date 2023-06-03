import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StackScreenProps, createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomePage/HomeScreen";
import BottomTabsNavigator from "./navigation/BottomTabsNavigator";
import ProfileScreen from "./screens/ProfilePage/ProfileScreen";
import MessageScreen from "./screens/MessagesPage/MessageScreen";
import LoginScreen from "./screens/LoginPage/LoginScreen";
import PetsScreen from "./screens/PetsPage/PetsScreen";
import SitterScreen from "./screens/SittersPage/SittersScreen";
import MessagingScreen from "./screens/MessagesPage/MessagingScreen";
import NavigationConstants from "./navigation/NavigationConstants";
import SignUpNextScreen from "./screens/LoginPage/SignUpNextScreen";
import SignUpScreen from "./screens/LoginPage/SignUpScreen";

type RootStackParamList = {
  LoginPage: undefined;
  Home: undefined;
};



const Stack = createStackNavigator();
export default function App () {
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
