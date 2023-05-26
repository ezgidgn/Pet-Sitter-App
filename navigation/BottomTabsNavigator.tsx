import { View, Text } from "react-native";
import React, { FC, useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../src/config/firebase";
import { BottomTabBarButtonProps, BottomTabBarProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import MessageScreen from "../screens/MessageScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LoginScreen, { BottomTabParams } from "../screens/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer, useNavigation} from "@react-navigation/native";

const Tab = createBottomTabNavigator<BottomTabParams>();
const Stack = createStackNavigator();

const BottomTabsNavigator: FC = () => {
const navigation =useNavigation <BottomTabParams>();
  
/*  useEffect(() => {
    const isLoggedIn=false;
    if (!isLoggedIn) {
navigation.navigate('HomePage')
    }
   
  }, []);
  */





  return (
    <Tab.Navigator initialRouteName="HomePage" >
       <Tab.Screen name="HomePage" component={HomeScreen} />
       <Tab.Screen name="ProfilePage" component={ProfileScreen} />
       <Tab.Screen name="MessagePage" component={MessageScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
