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
import {  useFonts, Inter_900Black,  Inter_400Regular,Inter_500Medium, Inter_600SemiBold,} from '@expo-google-fonts/inter';
import NewsA from "./screens/StaticPages/NewsA";
import NewsB from "./screens/StaticPages/NewsB";
import NewsC from "./screens/StaticPages/NewsC";
import NewsD from "./screens/StaticPages/NewsD";
import NewsE from "./screens/StaticPages/NewsE";

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
          name="SignUpNextPage"
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
        <Stack.Screen name="NewsAScreen" component={NewsA}/>
        <Stack.Screen name="NewsBScreen" component={NewsB}/>
        <Stack.Screen name="NewsCScreen" component={NewsC}/>
        <Stack.Screen name="NewsDScreen" component={NewsD}/>
        <Stack.Screen name="NewsEScreen" component={NewsE}/>
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

