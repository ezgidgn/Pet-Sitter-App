import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import NavigationConstants from './NavigationConstants';
import PetsScreen from '../screens/PetsPage/PetsScreen';
import SittersScreen from '../screens/SittersPage/SittersScreen';

const SittersNavigator = () => {

    const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName={NavigationConstants.sitters}>
    <Stack.Screen
      name={NavigationConstants.sitters}
      component={SittersScreen}
      options={{
        headerShown: false,
        headerBackTitleVisible: false,
      }}
    />
  </Stack.Navigator>
  )
}

export default SittersNavigator