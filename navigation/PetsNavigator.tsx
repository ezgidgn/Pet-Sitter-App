import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import NavigationConstants from './NavigationConstants';
import PetsScreen from '../screens/PetsPage/PetsScreen';

const PetsNavigator = () => {

    const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName={NavigationConstants.pets}>
      <Stack.Screen
        name={NavigationConstants.pets}
        component={PetsScreen}
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default PetsNavigator