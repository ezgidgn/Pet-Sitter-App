import { View, Text } from "react-native";
import React, { FC, useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../src/config/firebase";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import MessageScreen from "../screens/MessageScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LoginScreen from "../screens/LoginScreen";

const Tab = createBottomTabNavigator();

const BottomTabsNavigator: FC = () => {
  /* const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log("user", user);
      setUser(user);
    });
  }, []); */

  return (
    <Tab.Navigator>
        <Tab.Screen name="HomePage" component={HomeScreen} />
        <Tab.Screen name="MessagePage" component={MessageScreen} />
        <Tab.Screen name="ProfilePage" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
