/* import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../../screens/HomeScreen';
import Colors from '../../../style/Colors';
import { View, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MessageScreen from '../../../screens/MessageScreen';
import ProfileScreen from '../../../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
   return(
    // tab navigator
    <Tab.Navigator 
      initialRouteName='Home'
      screenOptions={
        {
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {backgroundColor: Colors.grey, borderRadius: 5}
        }
      }
    >
                
    <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Ionicons name="home-outline" color={Colors.selectedPurple} size={25} />
          ),
          tabBarInactiveTintColor: Colors.nonSelectedPurple,
          tabBarActiveTintColor: Colors.selectedPurple
        }}
    />

    <Tab.Screen
        name="Messages"
        component={MessageScreen}
        options={{
          tabBarLabel: 'Message',
          tabBarIcon: () => (
            <Ionicons name="mail-outline" color={Colors.selectedPurple} size={25} />
          ),
          
        }}
    />

    <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <Ionicons name="person-outline" color={Colors.selectedPurple} size={25} />
          ),
         
        }}
    />


  </Tab.Navigator>
);
}



export default TabNavigator;
*/