import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleProp, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import {  useFonts, Inter_900Black,  Inter_400Regular,Inter_500Medium, Inter_600SemiBold,} from '@expo-google-fonts/inter';
import SitterScreen from './screens/SittersScreen';


export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,  Inter_400Regular, Inter_500Medium, Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <HomeScreen />
  );
};
