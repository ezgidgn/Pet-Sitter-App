import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import NavigationConstants from './NavigationConstants';
import HomeScreen from '../screens/HomePage/HomeScreen';

const HomeNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName={NavigationConstants.home}>
            <Stack.Screen name={NavigationConstants.home} component={HomeScreen}/>
           
        </Stack.Navigator >
    )
}

export default HomeNavigator