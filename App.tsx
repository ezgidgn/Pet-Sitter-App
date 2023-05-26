import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import BottomTabsNavigator from './navigation/BottomTabsNavigator';
import ProfileScreen from './screens/ProfileScreen';
import MessageScreen from './screens/MessageScreen';


const Stack = createStackNavigator();
export default function App() {


  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LoginPage" component={LoginScreen} options={{ headerShown: false }} />  
          <Stack.Screen name="ProfilePage" component={ProfileScreen} />  
          <Stack.Screen name="MessagePage" component={MessageScreen} options={{ headerShown: false }} />  
          <Stack.Screen name="HomePage" component={BottomTabsNavigator} options={{ headerShown: false }} />  
        </Stack.Navigator>
        
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
