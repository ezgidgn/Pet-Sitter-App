import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import NavigationConstants from './NavigationConstants';

import SignUpNextScreen from '../screens/LoginPage/SignUpNextScreen';


const SignupNavigatior = () => {
  const Stack = createStackNavigator();

  return (
      <Stack.Navigator initialRouteName={NavigationConstants.signUp}>
          <Stack.Screen name={NavigationConstants.signUp} component={SignUpNextScreen}/>
          <Stack.Screen name={NavigationConstants.signUpNext} component={SignUpNextScreen}/>
      </Stack.Navigator >
  )
}

export default SignupNavigatior