import { View, Text } from "react-native";
import React, { FC, useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../src/config/firebase";
import {
  BottomTabBarButtonProps,
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomePage/HomeScreen";
import ProfileScreen from "../screens/ProfilePage/ProfileScreen";
import LoginScreen, { BottomTabParams } from "../screens/LoginPage/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import NavigationConstants from "./NavigationConstants";
import ProfileNavigator from "./ProfileNavigator";
import HomeNavigator from "./HomeNavigator";
import PetsNavigator from "./PetsNavigator";
import SittersNavigator from "./SittersNavigator";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator<any>();
const Stack = createStackNavigator();

const BottomTabsNavigator: FC = () => {
  const navigation = useNavigation<any>();
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  /* useEffect(() => {
    const isLoggedIn=false;
    if (!isLoggedIn) {
navigation.navigate("LoginPage")
    }
   
  }, []);
  
*/
  const isLoggedIn = true;

  return (
    <>
      {isLoggedIn ? (
        <Tab.Navigator initialRouteName={NavigationConstants.homeNavigator}>
          <Tab.Screen
            name={NavigationConstants.petsNavigator}
            component={PetsNavigator}
            options={{ headerShown: false, tabBarShowLabel: false,
              
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="paw-outline" color={"#BD90F1"} size={size} />
              ), }}
          />
          <Tab.Screen
            name={NavigationConstants.sittersNavigator}
            component={SittersNavigator}
            options={{ headerShown: false, tabBarShowLabel: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="people-circle-outline" color={"#BD90F1"} size={size} />
              ), }}
          />
          <Tab.Screen
            name={NavigationConstants.homeNavigator}
            component={HomeNavigator}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={"#BD90F1"} size={size} />
              ),
            }}
          />

          
          <Tab.Screen
            name={NavigationConstants.profileNavigator}
            component={ProfileNavigator}
            options={{ headerShown: false, tabBarShowLabel: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person-circle-outline" color={"#BD90F1"} size={size} />
              ), }}
          />
        </Tab.Navigator>
      ) : (
        <LoginScreen />
      )}
    </>
  );
};

export default BottomTabsNavigator;
